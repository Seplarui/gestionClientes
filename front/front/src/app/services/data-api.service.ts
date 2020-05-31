import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getLogin() {
    const urlApi = 'http://localhost:3001/loginuser';

    //return this.http.get(urlApi);
    return this.http.post<any>(urlApi,body);
  }
}
