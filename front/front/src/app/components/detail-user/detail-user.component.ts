import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioInterface } from '../../models/usuario-interface';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  constructor(protected dataApiService: DataApiService, private _route: ActivatedRoute) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }
  usuario: UsuarioInterface;
  tipoUsuario: any;

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.dataApiService.detailUser(id).subscribe((data) => { this.usuario = data['message']; })
  }
}
