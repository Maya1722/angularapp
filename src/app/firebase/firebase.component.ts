import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private _firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  createPost(){

    this._firebaseService.createPost().subscribe(res=>{
      
       console.log("firebase post",res);
       
      
    })
  }
}
