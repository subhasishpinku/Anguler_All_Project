import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProVsObs';
  public pr:any=new Promise((resolve,reject)=>{
    console.log('Promises is create....')
    const  x = 10;
    const  y = 3;
    const  z = x/y;
    resolve(z);
    ///create unicast object
    resolve('Done.........');
    reject(z);
  }
)
    // public obs = new Observable((observer)=>{
    //     console.log('Observable is create....')
    //     const  x = 10;
    //     const  y = 3;
    //     const  z = x/y;
    //     observer.next(z);
    //   ////muilticast object....
    //   observer.next('Done Again......')
    //       });

   constructor(){}
    ngOnInit(): void{
      this.pr.then((res:any)=>{
       console.log(res)
      })
      .catch((error:any)=>{
        console.log(error)
      })
      .finally(()=>{
        console.log('Finally Block...');
       });      
        //How to call an Observable
        // this.obs.subscribe((res)=>{
        //   console.log(res);},
        //   (error)=>{
        //     console.log(error)
        //   } )
    }
   
}
