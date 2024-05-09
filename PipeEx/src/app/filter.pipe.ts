import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string): any {
    if(filterString.length>=3){
   let searchedfood = value.filter((item:any)=>{
  return item.food.toLocaleLowerCase().includes(filterString.toLocaleLowerCase());
  });
  return searchedfood;
}else{
  return value;
}
  }

}
