import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//To achive 2 way Databainding froms module
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // For FormsMoudle Import For NgModel In Input type
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
