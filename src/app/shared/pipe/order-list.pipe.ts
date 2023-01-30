import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): TrackModel[] {
    console.log('😝', value);

    try {
      if (args === null) {
        return value
      }else{
        const tmplist = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1;
          }else if(a[args] === b[args]){
            return 0;
          }
          else if(a[args] > b[args]){
            return 1;
          }
          return 1;
        });
        return (sort === 'asc') ? tmplist : tmplist.reverse();
      }
    } catch (error) {
      console.log('ALGO PASO 😒');
      return value;
      
    }
    
   
  }

}
