//#region Angular Imports
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
//#endregion

//#region Harbor Imports
import { WindService } from 'src/app/shared/Services/wind/wind.service';
import { Boat } from 'src/app/shared/Services/boat/boat.model';
import { BoatTypes, StatusTypes } from 'src/app/shared/constants/enums';
import { BoatService } from 'src/app/shared/Services/boat/boat.service';
//#endregion

@Component({
  selector: 'app-harborcontrol',
  templateUrl: './harborcontrol.component.html',
  styleUrls: ['./harborcontrol.component.scss']
})
export class HarborControlComponent implements OnInit {

  //#region Public Variables
  public windSpeed: number = 0;
  public boatsTobeGenerate: number;
  public boatList: Boat[] = [];
  //#endregion

  //#region  Constructor
  constructor(
    private windService: WindService,
    private boatService: BoatService
  ) { }
  //#endregion

  //#region  Angular Events
  public ngOnInit(): void {
    this.getWindDetails();
  }
  //#endregion

  //#region Public Methods
  // This method is used to get wind data
  public getWindDetails(): void {
    this.windService.getWindData().subscribe(res => {
      this.windSpeed = +parseFloat(String((res['wind']['speed'] * 18) / 5)).toFixed(2)
    }, error => {
      alert('Error while getting the wind data.')
    });
  }

  // This method is used to get updated value of wind
  public refresh(): void {
    this.getWindDetails();
  }

  // This method is used to get random bots
  public generateBoat(): void {
    if (+this.boatsTobeGenerate > 0) {
      let parms = new HttpParams()
        .append('boatsToBeGenerated', `${+this.boatsTobeGenerate}`);

      this.boatService.generateBoats(parms).subscribe(res => {
        this.boatList = this.boatList.concat(res);
        this.boatsTobeGenerate = undefined;
        if (!this.boatList.some(x => x.boatStatus === StatusTypes.InProgress)) {
          this.processBoats();
        }
      }, (error => {
        alert('Error while generating the boats');
      }));
    } else {
      alert('Please Enter a number greater than 0.')
    }

  }

  // Based of enum value it is giving the Label for Boat column
  public getBoatType(boatType: BoatTypes): string {
    switch (boatType) {
      case BoatTypes.CargoShip:
        return 'Cargo Ship';
      case BoatTypes.SailBoat:
        return 'Sailboat';
      case BoatTypes.SpeedBoat:
        return 'Speedboat';
    }
  }

  // Based of enum value it is giving the Label for Status column
  public getStatus(status: StatusTypes): string {
    switch (status) {
      case StatusTypes.InProgress:
        return 'In Progress';
      case StatusTypes.InQueue:
        return 'In Queue';
      case StatusTypes.Completed:
        return 'Completed';
      case StatusTypes.CannotProcess:
        return 'You Can not enter in perimeter.';
    }
  }
  //#endregion

  //#region Private Methods

  // This is a recursive function which is allowing boats into the perimeter
  private processBoats(): void {
    let boat = this.boatList.find(x => x.boatStatus === StatusTypes.InQueue);
    if (boat.boatType === BoatTypes.SailBoat && (this.windSpeed < 10 || this.windSpeed > 30)) {
      boat.boatStatus = StatusTypes.CannotProcess;
    } else {
      boat.boatStatus = StatusTypes.InProgress
      setTimeout(() => {
        boat.boatStatus = StatusTypes.Completed;
        if (this.boatList.some(x => x.boatStatus === StatusTypes.InQueue)) {
          this.processBoats();
        }
      }, boat.duration * 1000);
    }
  }
  //#endregion

}
