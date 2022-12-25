import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 
  characters= [
    {
    actor_name: 'Peter Dinklage',
    character_name: 'Tyrion Lannister',
    gender: 'Male',
        status: 'Alive'
    },
    {
    actor_name: 'Sean Bean',
    character_name: 'Ned Stark',
    gender: 'Male',
    status: 'Dead'
    },
    {
    actor_name: 'Emilia Clark',
    character_name: 'Khaleesi',
    gender: 'Female',
    status: 'Alive'
    }
  ]
  constructor(private _utilityService:UtilityService) { 
  this._utilityService.characters.subscribe(res=>{
     this.characters=res;
  })
    
  }

  ngOnInit() 
  {
  }
  update(){
    console.log(this.characters);
    this._utilityService.characters.next(this.characters);
  }
  

  }


