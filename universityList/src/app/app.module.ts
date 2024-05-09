import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShortPipe } from './short.pipe'; 
@NgModule({
  declarations: [
    AppComponent,
    ShortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
