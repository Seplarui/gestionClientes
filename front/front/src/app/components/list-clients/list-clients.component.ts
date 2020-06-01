import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private _route: ActivatedRoute) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }
  clientes: any[] = [];
  tipoUsuario: any;

  ngOnInit(): void {
    this.getListClients();

  }

  getListClients() {
    this.dataApiService.getClients().subscribe((data) => { this.clientes = data['message']; },
    (error) => { console.error(error); });
    this.dataApiService.getClients().subscribe((clients) => console.log(clients));
  }

}
