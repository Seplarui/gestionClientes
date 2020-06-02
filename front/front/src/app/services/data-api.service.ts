import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ClienteInterface } from '../models/cliente-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getClients() {
    const urlAPI = 'http://localhost:3001/getclients';
    return this.http.get(urlAPI);
  }

  detailClient(clienteid: string) {
    const urlAPI = 'http://localhost:3001/detailclient';
    const body = { 'clienteid': clienteid };
    return this.http.post<ClienteInterface>(urlAPI, body).pipe(map(data => data));
  }

}
