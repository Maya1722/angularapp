import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-simpletemplateform',
  templateUrl: './simpletemplateform.component.html',
  styleUrls: ['./simpletemplateform.component.css']
})
export class SimpletemplateformComponent implements OnInit {


  defaultValue:string = 'Angular';
  defaultGender:string='male';

  employee = new Employee();  // form
  submitted: boolean = false; //fom 


  constructor() { }

  ngOnInit() {
  }




  OnSubmit(form:NgForm) {
    this.submitted = true;
    this.employee.gender=form.value.gender;
    this.employee .courses = form.value.course;
    this.employee .username = form.value.userDetails.username;
    this.employee .email = form.value.userDetails.email;
  
   //this.saveEmployeeData(this.employee);
  }
  
  saveEmployeeData(emp:Employee) {
   console.log(emp.courses);
  }
  

}
