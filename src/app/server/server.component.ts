import { Component } from "@angular/core";
import { resetFakeAsyncZone } from "@angular/core/testing";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html' ,
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
  
serverStatus:string='online';
serverId:number= 107;
serverName:string='codemind Technology';
allowServer= true;
sendServer=false;
userName:string='maya shingne';
constructor(){
setTimeout(()=>{

    this.allowServer=true;
},5000);
}

Reset (){

this.userName='';

}

}



