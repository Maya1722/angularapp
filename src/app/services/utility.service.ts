import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  

  characters=new Subject<any>();


  constructor() { }
}
