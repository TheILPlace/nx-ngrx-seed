import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOGIN_CONFIGURATION_TOKEN } from './login-config.token';
import { LoginConfiguration } from './models/login-configuration';
import { LoginComponent } from './components/login/login.component';

let loginConfig: LoginConfiguration ;

export function mapLoginConfiguration(config: any): void {

  const loginConfiguration = new LoginConfiguration();

  Object.entries(loginConfiguration).forEach(([key, value]) => {
      if (config.hasOwnProperty(key)) {
          loginConfiguration[key] = config[key];
      }
  });

  loginConfig =  loginConfiguration;

}

export function loginConfigFactory() { return loginConfig };

@NgModule({
  imports: [CommonModule],
  providers:[
    { provide: LOGIN_CONFIGURATION_TOKEN, useFactory: loginConfigFactory },

  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}
