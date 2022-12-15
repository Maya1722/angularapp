import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  submitted:boolean=false;
  notAllowedNames=  ['codemind','technology'];
  myReactiveForm: FormGroup;
  genders=[
    { id:'1' , value:'male' },
    { id:'2',value:'female '}
  ]
  constructor() {
    this.createForm();
   }

  ngOnInit() {

     // setTimeout(() => {
       // this.myReactiveForm.setValue({

        //  'userDetails':{
          //  'username':'codemind1122',
           // 'email':'test@gmail.com'
         // },
          //'course':'Html',
          //'gender':'female'
       // })
        
      //}, 3000);

  

      setTimeout(() => {
        this.myReactiveForm.patchValue({

          'userDetails':{
            'username':'codemind1122',
            'email':'test@gmail.com'
          }
        
        })
        
      }, 3000);
  

    }

  createForm(){

    this.myReactiveForm= new FormGroup({

    'userDetails' : new FormGroup({
  'username' : new FormControl ('',[Validators.required,this.NaNames.bind(this)]),
      'email'  : new FormControl('',[Validators.required,Validators.email],this.NaEmails),
    }),
      'course' :new FormControl('Angular'),
      'gender':new FormControl(''),
      'skills':new FormControl([
        new FormControl(null,Validators.required)

      ])
    })
  }


Onsubmit(){
   this.submitted=true;
    console.log(this.myReactiveForm);
}
OnAddSkills(){
(<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
}



NaNames(control:FormControl){
  if(this.notAllowedNames.indexOf(control.value)!==-1){
      return{'namesNotAllowed': true}
  }
  return null;
}
  NaEmails(control:FormControl): Promise<any> | Observable<any>{

    const myResponse =new Promise<any> ((resolve, reject ) =>   {

      setTimeout(() => {
        if(control.value ==='codemindtechnology@gamil.com'){
           resolve({'emailNotAllowed': true})


        }else{
          resolve(null)
        }
        
      }, 3000);
    })

  return myResponse;


}


}