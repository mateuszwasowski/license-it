import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private error=false;
  private loading=false;
  private isLogin=false;
  constructor() { }

  ngOnInit() {
  }

}
