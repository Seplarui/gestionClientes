import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-check-login',
  templateUrl: './check-login.component.html',
  styleUrls: ['./check-login.component.css']
})
export class CheckLoginComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    // this.dataApi.getLogin().subscribe((login) => console.log(login));
  }
}
