import { Component } from '@angular/core';
//Decorater
// @Component({
//   selector: 'app-root_view',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector:'temp',
  template:`<h1>Inline Template</h1>
  <h2>Inline Template</h2>`,
  styles:[
   `h1{color:orange}
   h2{color:green}`,
]
})
export class AppComponent {
  title = 'MyTest';
}
 