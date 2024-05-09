import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  public name:string='rAmChRaN';

  public date:any = new Date();

  public salary:number=15000;

  public marks:number=0.80;

  public fruits:any=['apple','banna','grap','mango']
}
