import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../model/users';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {




    transform(Name: string, gender:string): string {
  
        
  
    if( gender == "Female")
  {
  return "Ms." + Name ;}

  else ( gender == "Male")
  {
  return "Mr." + Name;}

  
    }   
  }
  
