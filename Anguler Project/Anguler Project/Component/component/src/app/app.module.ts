import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hello2Component } from './hello2/hello2.component';
import { Hello1Component } from './hello1/hello1.component';

@NgModule({
  declarations: [
    AppComponent,
    Hello2Component,
    Hello1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
