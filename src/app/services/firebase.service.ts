import { HttpClient } from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import { FireBasePost } from '../model/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService  {
 url='https://angular-crud-operation-8dac1-default-rtdb.firebaseio.com/';

Users:any=[{ id:102, name:'maya' },// example of rxjes operator
        {id:103, name:'anil ', company:'SAP'},
        {id:104  ,name:'vinay',company:'max'}
]



  constructor(private _httpClient: HttpClient) { }


  createPost(){
    let postData={

      Name:'Maya Shingne',
      Age:'27',
     Address:'aurangabad',
     Mobile:123344,
    

    }

    return this._httpClient.post(this.url+'posts.json',postData);
  }

  createPostDataReactiveForm(fireBasePost: FireBasePost){

   return   this._httpClient.post(this.url+'posts.json',fireBasePost);
  }
  getPostDataFirebase(){

    return this._httpClient.get(this.url+'posts.json');
  }
}
