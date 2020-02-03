import { Injectable, Inject } from '@angular/core';
import { LOGIN_CONFIGURATION_TOKEN } from '../login-config.token';
import { LoginConfiguration } from '../models/login-configuration';

@Injectable({providedIn: 'root'})
export class LoginService {
    constructor(@Inject(LOGIN_CONFIGURATION_TOKEN) private loginConfiguration: LoginConfiguration){

    }

    get configuration() {
        return this.loginConfiguration;
    }

}