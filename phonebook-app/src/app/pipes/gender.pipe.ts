import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
  if(value=="Male"){
    return "Mr. ";
  }
    else{
      return "Miss. ";
    }
  
  }

}
