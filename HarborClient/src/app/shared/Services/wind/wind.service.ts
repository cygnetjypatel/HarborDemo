//#region Angular Imports
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
//#endregion

//#region 3rd Party Import
import { Observable } from 'rxjs';
//#endregion

@Injectable()
export class WindService {

  //#region Private Variables
  private apiURL = environment.windServiceBaseURL;
  //#endregion

  //#region  Constructor
  constructor(private http: HttpClient) { 
  }
  //#endregion

  //#region Public Methods
  public getWindData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
  //#endregion

}
