
import { Component } from "@angular/core";
 



@Component({
    selector: 'app-server',
    templateUrl: './server.component.html' ,
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
  
serverId:number=17;
serverStatus:string="online";
allowNewServer=true;
ServerCreation:string='server not created';
Username:string="codemind";
constructor(){
setTimeout(()=>{

this.allowNewServer=true;
},5000);

}

getServerStatus(){

return this.serverStatus;


}
onClickServer(){
this.ServerCreation='server created';

}

}



