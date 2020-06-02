import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';
import { ClienteInterface } from '../../models/cliente-interface';


@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  constructor(protected DataApiService: DataApiService, private _route: ActivatedRoute) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }

  cliente: ClienteInterface;
  tipoUsuario: any;

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.DataApiService.detailClient(id).subscribe((data) => console.log(data));
    this.DataApiService.detailClient(id).subscribe((data) => { this.cliente = data['message']; });
  }

}
