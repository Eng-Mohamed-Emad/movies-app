import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soldOut',
  standalone: true
})
export class SoldOutPipe implements PipeTransform {

  transform( qun: number): string  {
    if(qun <= 50){
      return 'Low Stock'
    }else if(qun > 50){
      return 'In Stock'
    }
    else{
      return 'Sold Out'
    }
  }

}
