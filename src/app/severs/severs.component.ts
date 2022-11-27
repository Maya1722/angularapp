import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-severs',
  templateUrl: './severs.component.html',
  styleUrls: ['./severs.component.css']
})
export class SeversComponent {
  name:string ='codemind technology';
  severId:number=17;
  serverStatus:string='online';
  allowNewSevers=false;
  sendServer=true;
  imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201';
 severCreationStatus:string='server not created';

 serverName:string='codemind';
 userName:string='maya shingne';
 constructor(){
  setTimeout(()=> {
    this.allowNewSevers = true
  }, 5000);


  

 }
    getServerStatus(){

      return this.serverStatus;
    }

    onCreateServer(){

      this.severCreationStatus='server created';
    }
    
    Reset(){

      this.userName='';}
  
  }
