import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(value:any,filterString:string): any {
    console.log('pipe is working....');
    if(filterString.length>=3){
      let searchf=value.filter((item:any)=>{
        return (item.food_name.toLowerCase().includes(filterString.toLocaleLowerCase));
      });

    }else{
      return value;
    }
    
  }

  
}
