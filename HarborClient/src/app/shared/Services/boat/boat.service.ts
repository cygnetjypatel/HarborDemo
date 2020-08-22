//#region Angular Imports
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
//#endregion

//#region Harbor Imports
import { Boat } from './boat.model';
//#endregion

//#region 3rd Party Import
import { Observable } from 'rxjs';
//#endregion

@Injectable()
export class BoatService {

  //#region Private Variables
  private apiURL = environment.baseURL;
  //#endregion

  //#region  Constructor
  constructor(private http: HttpClient) { 
  }
  //#endregion

  //#region Public Methods
  public generateBoats(parms: HttpParams): Observable<Boat[]> {
    return this.http.get<Boat[]>(`${this.apiURL}/Boat/GenerateBoats`, {params: parms});
  }
  //#endregion

}
