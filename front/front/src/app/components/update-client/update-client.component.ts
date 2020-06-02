import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClienteInterface } from '../../models/cliente-interface';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private _route: ActivatedRoute, private router: Router) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }
  cliente: ClienteInterface;
  tipoUsuario: any;

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.dataApiService.updateClient(id).subscribe((data) => { this.cliente = data['message']; });
    this.dataApiService.updateClient(id).subscribe((data) => console.log(data));
  }

  onUpdateClient(formClient: NgForm): void {
    this.dataApiService.onUpdateClient(formClient.value).subscribe(cliente => {
      this.router.navigate(['inicio/0/listclients']);
    });
  }

}
