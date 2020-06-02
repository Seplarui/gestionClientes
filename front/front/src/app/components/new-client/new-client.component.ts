import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  constructor(protected DataApiService: DataApiService, private _route: ActivatedRoute) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
   }
   tipoUsuario: any;

  ngOnInit(): void {
  }

}
