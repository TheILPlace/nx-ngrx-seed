import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService, configLoader, CoreModule, CONFIG_FILENAME_TOKEN } from '@nx-ngrx-seed/core';
import { Configuration } from '../../interfaces/configuration';
import { LoginModule,  mapLoginConfiguration } from '@nx-ngrx-seed/login';
import { environment } from '../../../environments/environment';


export function globalConfigLoader(configService: ConfigService<Configuration>, configFileName: string) {
  const promise = configLoader(configService, configFileName).then(() => {
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
    { provide: CONFIG_FILENAME_TOKEN, useValue: environment.configFileName },
    {
      provide: APP_INITIALIZER,
      useFactory: globalConfigLoader,
      deps: [ConfigService, CONFIG_FILENAME_TOKEN],
      multi: true
    }
  ],
  exports: [LoginModule]
})
export class InitModule { }
