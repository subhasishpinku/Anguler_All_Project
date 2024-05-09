import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(university: any,shortValue:any): any {
    if(shortValue!=''){
      let shortList = university.filter((item:any)=>{
       return item['state-province'] == shortValue;
      })
      return shortList;
    }
    else {
      return university;
    }
  }

}
