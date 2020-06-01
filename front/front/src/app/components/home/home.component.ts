import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tipoUsuario: any;
  constructor(private _route: ActivatedRoute) {
    this.tipoUsuario = this._route.snapshot.paramMap.get('tipousuario');
  }

  ngOnInit(): void {
  }
}
