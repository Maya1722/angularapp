import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SeversComponent } from './severs/severs.component';

import { FormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgassignmentComponent } from './ngassignment/ngassignment.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SeversComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    NgassignmentComponent,
    NgforComponent,
    AttriComponent,
    CustdirDirective,
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
