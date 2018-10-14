import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppWelcome } from './app.welcome';

@NgModule({
  declarations: [
    AppWelcome
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppWelcome]
})
export class AppModule { }
