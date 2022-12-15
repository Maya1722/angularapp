import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Student}   from '../model/astudents';

@ Component({
  selector: 'app-asimpletemplate',
  templateUrl: './asimpletemplate.component.html',
  styleUrls: ['./asimpletemplate.component.css']
})
export class AsimpletemplateComponent implements OnInit {
 defaultGender:string="female";
  defaultValue:string='computer science';
  student=new Student();
  genderss:string;
  genders=[
{id:'1' ,value:'Male'},
{id:'2',value:'female'}

  ]
  submitted:boolean = false;

  min:any="12-12-2022";


  constructor() { }

  ngOnInit() {

    console.log(Student);
    
  }

  minDate:any="2022-12-12";

  Onsubmit(form:NgForm){
       
    this.submitted=true;
       
      this.student.studentname=form.value.studentDetails.studentname;
      this.student.email=form.value.studentDetails.email;
      this.student.gender=form.value.gender;
      this.student.date=form.value.date;
       this.student.address=form.value.address;
       this.student.collegename=form.value.collegename;
      this.student.Department=form.value.department;
      form.reset();
      form.controls['department'].setValue('computer science');
      form.controls['gender'].setValue('female');
      console.log(form.control);
     //this.saveStudentData(this.student);
  }

  saveStudentData(stu:Student){
    console.log(stu.Department);
  
     
    
  }
}
