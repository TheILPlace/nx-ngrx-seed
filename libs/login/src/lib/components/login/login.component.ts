import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginConfiguration } from '../../models/login-configuration';

@Component({
  selector: 'nx-ngrx-seed-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginConfiguration: LoginConfiguration = this.loginService.configuration;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
