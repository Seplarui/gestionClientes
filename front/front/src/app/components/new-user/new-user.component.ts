import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioInterface } from '../../models/usuario-interface';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(protected dataApiService: DataApiService, private _route: ActivatedRoute, private router: Router) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }
  tipoUsuario: any;
  usuario: UsuarioInterface;

  ngOnInit(): void {
  }

  onSaveUser(formUser: NgForm): void {

    this.dataApiService.saveUser(formUser.value).subscribe(usuario => {
      this.router.navigate(['inicio/0/listusers']);
    });
  }

}
