import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import {Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClienteInterface } from '../../models/cliente-interface';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  constructor(protected DataApiService: DataApiService, private _route: ActivatedRoute, private router: Router) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }
  tipoUsuario: any;
  cliente: ClienteInterface;

  ngOnInit(): void {

  }

  onSaveClient(formClient: NgForm): void {
    // this.DataApiService.saveClient(formClient.value).subscribe(cliente => {
    //   this.router.navigate(['inicio/0/listclients']);
    // });
    // this.DataApiService.saveClient(formClient.value).subscribe(cliente => console.log(cliente));
    this.DataApiService.saveClient(formClient.value).subscribe(cliente => {
      this.router.navigate(['inicio/0/listclients']);
    });
}

}
