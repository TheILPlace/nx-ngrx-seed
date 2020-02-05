import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService, configLoader, CoreModule } from '@nx-ngrx-seed/core';
import { Configuration } from '../../interfaces/configuration';
import { LoginModule,  mapLoginConfiguration } from '@nx-ngrx-seed/login';
import { environment } from '../../../environments/environment';


export function globalConfigLoader(configService: ConfigService<Configuration>) {
  const promise = configLoader(configService, environment.configFileName).then(() => {
    // mapping
    mapLoginConfiguration(configService.configuration);
  });
  return () => promise;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule, LoginModule, CoreModule
  ],
  providers: [
    
    {
      provide: APP_INITIALIZER,
      useFactory: globalConfigLoader,
      deps: [ConfigService],
      multi: true
    }
  ],
  exports: [LoginModule]
})
export class InitModule { }
