import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BoatService {

  private apiURL = environment.baseURL;

  constructor(private http: HttpClient) { 
  }

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/Boat/GetData`);
  }

}
