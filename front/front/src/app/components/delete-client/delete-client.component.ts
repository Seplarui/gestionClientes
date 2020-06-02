import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {

  constructor(protected DataApiService: DataApiService, private _route: ActivatedRoute) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }
  clienteid: any;
  tipoUsuario: any;

  ngOnInit(): void {
    this.deleteClient();
  }


  deleteClient() {
    const id = this._route.snapshot.paramMap.get('id');
    this.DataApiService.deleteClient(id).subscribe((data) => console.log(data));
    this.DataApiService.deleteClient(id).subscribe((data) => location.reload());
  }

}
