import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoatService } from '../boat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private router: Router,
    private boatService: BoatService
  ) { }

  public ngOnInit(): void {
    this.getBoatList();
  }

  public addBoat(): void {
    this.router.navigateByUrl('/boat/add');
  }

  public editBoat(id): void {
    this.router.navigateByUrl(`/boat/edit/${id}`);
  }

  public getBoatList(): void {
    this.boatService.getData().subscribe(res => {
      debugger;
    });

  }

}
