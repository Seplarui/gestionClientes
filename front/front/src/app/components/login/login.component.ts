import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit(): void {

  }

  // getLogin(formLogin: NgForm) {
  //   this.dataApi.getLogin().subscribe((login) => console.log(login));
  // }

}
