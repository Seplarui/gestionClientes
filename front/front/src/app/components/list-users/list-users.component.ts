import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private _route: ActivatedRoute) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }
  usuarios: any[] = [];
  tipoUsuario: any;

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers() {
    this.dataApiService.getUsers().subscribe((data) => { this.usuarios = data['message']; },
      (error) => { console.log(error); });
    this.dataApiService.getUsers().subscribe((usuarios) => console.log(usuarios));
  }

}
