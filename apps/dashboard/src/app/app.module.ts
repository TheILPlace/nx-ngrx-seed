import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitModule } from './modules/init/init.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InitModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
