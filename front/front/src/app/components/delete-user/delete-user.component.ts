import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(protected dataApiService: DataApiService, private _route: ActivatedRoute) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }

  usuarioid: any;
  tipoUsuario: any;

  ngOnInit(): void {
    this.deleteUser();
  }

  deleteUser() {
    const id = this._route.snapshot.paramMap.get('id');
    this.dataApiService.deleteUser(id).subscribe((data) => console.log(data));
    this.dataApiService.deleteUser(id).subscribe((data) => location.reload());
  }

}
