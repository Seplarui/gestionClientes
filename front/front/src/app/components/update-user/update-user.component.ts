import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioInterface } from '../../models/usuario-interface';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private _route: ActivatedRoute, private router: Router) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }
  user: UsuarioInterface;
  tipoUsuario: any;

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.dataApiService.updateUser(id).subscribe((data) => { this.user = data['message']; });
    this.dataApiService.updateUser(id).subscribe((data) => console.log(data));
  }

  onUpdateUser(formUser: NgForm): void {
    this.dataApiService.onUpdateUser(formUser.value).subscribe(user => {
      this.router.navigate(['inicio/0/listusers']);
    });
  }

}
