import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  UserName:string="enter user name";

  userlist=[]
  constructor() { }

  ngOnInit() {

  }
  onClick(myuser){
    if(myuser.value.length>0){
    this.userlist.push(myuser.value);
    myuser.value="";
    }

  }

 ondelete(deleteme){

 this.userlist.splice(deleteme,1)

 }
  
  }


