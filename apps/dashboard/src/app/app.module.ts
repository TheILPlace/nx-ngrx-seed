import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitModule } from './modules/init/init.module';
import { WizardModule} from '@nx-ngrx-seed/wizard'



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InitModule, WizardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
