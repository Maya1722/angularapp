import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  myGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    course:new FormControl
 });
  constructor() { }

  ngOnInit() {
  }

}
