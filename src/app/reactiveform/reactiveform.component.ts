import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from, interval, Observable, of } from 'rxjs';
import { map, take, takeLast } from 'rxjs/operators';

import { FireBasePost } from '../model/firebasepost';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  submitted: boolean = false;
  notAllowedNames = ['codemind', 'technology'];
  myReactiveForm: FormGroup;
  genders = [
    { id: '1', value: 'male' },
    { id: '2', value: 'female ' }
  ];
  firebasePost: FireBasePost;
  constructor(private _fb: FormBuilder, private _firebaseService: FirebaseService) {
    this.createForm();
  }

  ngOnInit() {

    console.log('***********************users**********************8');
    

    const data=from (this._firebaseService.Users);
           data.subscribe(res=>{

    console.log('users data',res);
    })

     console.log('******************* take interval  *********************');
     
//take operator
   //const sourse1=interval(1000);
  //   sourse1.subscribe(res=>{

    // console.log('interval example',res);
        
  // })
//take operator
   const sourse3=interval(1000);
   sourse3.pipe(take(2)).subscribe(res=>{

    console.log('interval example',res)

})
console.log('*******************take last Names***********************');

  //take last

  let randomNames=['anil','maya','smiral','payal','punam','vinay','sachit'];

  const sourse4=from (randomNames);
  sourse4.pipe(takeLast(3)).subscribe(res=>{



    console.log('takeLast',res);
    
  })

      console.log("*********************map *******************");
      const array=[20,30,40,60];

      const map1=array.map(x=>x*2);
      console.log(map1);
      
      console.log('***************filter***********');
      const datas=(this._firebaseService.Users);

       const result=datas.filter(x=>x);
       console.log(result);
         
       console.log('**************map************');
       

       of(1, 2, 3)
       .pipe(map((x) => x * x))
       .subscribe((v) => console.log(`value: ${v}`));
       


    this._firebaseService.getPostDataFirebase().pipe(  

     map( responseData=>{

    const postArray=[];
    for (const key in responseData){

    if (responseData.hasOwnProperty(key)){

    postArray.push({...responseData[key],id:key})
    }
    }
    return postArray;
    })
    ).subscribe(res=>{ 
    console.log('getPostDataFirebase',res);
    })







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



    //setTimeout(() => {
    // this.myReactiveForm.patchValue({

    // 'userDetails':{
    // 'username':'codemind1122',
    // 'email':'test@gmail.com'
    //}

    // })

    //}, 3000);


  }

  createForm() {

    //   this.myReactiveForm= new FormGroup({

    //   'userDetails' : new FormGroup({
    // 'username' : new FormControl ('',[Validators.required,this.NaNames.bind(this)]),
    //     'email'  : new FormControl('',[Validators.required,Validators.email],this.NaEmails),
    //   }),
    //     'course' :new FormControl('Angular'),
    //     'gender':new FormControl(''),
    //     'skills':new FormControl([
    //       new FormControl(null,Validators.required)

    //     ])
    // })
    this.myReactiveForm = this._fb.group({

      userDetails: this._fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this._fb.array([])
    })

  }


  Onsubmit() {
    this.submitted = true;
    console.log(this.myReactiveForm);
    this.firebasePost = new FireBasePost();
    this.firebasePost.username = this.myReactiveForm['controls'].userDetails['controls'].username.value;
    this.firebasePost.email = this.myReactiveForm['controls'].userDetails['controls'].email.value;
    this.firebasePost.course = this.myReactiveForm['controls'].course.value;
    this.firebasePost.gender = this.myReactiveForm['controls'].gender.value;
    this.firebasePost.skills = this.myReactiveForm['controls'].skills.value;
    //console.log('firebase post class',this.firebasePost);

    this._firebaseService.createPostDataReactiveForm(this.firebasePost).subscribe(res => {
      console.log("post from reactive form", res);

    })

  }
  OnAddSkills() {
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  OnRemoveSkills() {
    (<FormArray>this.myReactiveForm.get('skills'));
  }


  NaNames(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return { 'namesNotAllowed': true }
    }
    return null;
  }
  NaEmails(control: FormControl): Promise<any> | Observable<any> {

    const myResponse = new Promise<any>((resolve, reject) => {

      setTimeout(() => {
        if (control.value === 'codemindtechnology@gamil.com') {
          resolve({ 'emailNotAllowed': true })


        } else {
          resolve(null)
        }

      }, 3000);
    })

    return myResponse;


  }


}