import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ClienteInterface } from '../models/cliente-interface';
import { UsuarioInterface } from '../models/usuario-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  // CLIENTES
  getClients() {
    const urlAPI = 'http://localhost:3001/getclients';
    return this.http.get(urlAPI);
  }

  detailClient(clienteid: string) {
    const urlAPI = 'http://localhost:3001/detailclient';
    const body = { 'clienteid': clienteid };
    return this.http.post<ClienteInterface>(urlAPI, body).pipe(map(data => data));
  }

  deleteClient(clienteid: string) {
    const urlAPI = 'http://localhost:3001/deleteclient';
    const body = { 'clienteid': clienteid };

    return this.http.post<any>(urlAPI, body).pipe(map(data => data));

  }

  saveClient(cliente: ClienteInterface) {
    const urlAPI = 'http://localhost:3001/newclient';
    const body = { cliente };
    return this.http.post<any>(urlAPI, body).pipe(map(data => data));
  }

  updateClient(clienteid: string) {
    const urlAPI = 'http://localhost:3001/detailclient';
    const body = { 'clienteid': clienteid };
    return this.http.post<ClienteInterface>(urlAPI, body).pipe(map(data => data));
  }

  onUpdateClient(cliente: ClienteInterface) {
    const urlAPI = 'http://localhost:3001/updateclient';
    const body = { cliente };
    return this.http.post<any>(urlAPI, body).pipe(map(data => data));
  }

  // USUARIOS

  getUsers() {
    const urlAPI = 'http://localhost:3001/getusers';
    return this.http.get(urlAPI);
  }

  detailUser(userid: string) {
    const urlAPI = 'http://localhost:3001/detailuser';
    const body = { 'userid': userid }
    return this.http.post<UsuarioInterface>(urlAPI, body).pipe(map(data => data));

  }


  // detailClient(clienteid: string) {
  //   const urlAPI = 'http://localhost:3001/detailclient';
  //   const body = { 'clienteid': clienteid };
  //   return this.http.post<ClienteInterface>(urlAPI, body).pipe(map(data => data));
  // }


}
