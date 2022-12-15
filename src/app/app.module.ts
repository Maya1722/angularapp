import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SeversComponent } from './severs/severs.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgassignmentComponent } from './ngassignment/ngassignment.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { PassComponent } from './pass/pass.component';
import { DemoComponent } from './demo/demo.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksassignmentComponent } from './hooksassignment/hooksassignment.component';
import { DireComponent } from './dire/dire.component';
import { TextComponent } from './text/text.component';
import { PractiseComponent } from './practise/practise.component';
import { SimpletemplateformComponent } from './simpletemplateform/simpletemplateform.component';
import { AsimpletemplateComponent } from './asimpletemplate/asimpletemplate.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AreactiveformComponent } from './areactiveform/areactiveform.component';



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
    PassComponent,
    DemoComponent,
    HooksComponent,
    HooksassignmentComponent,
    DireComponent,
    TextComponent,
    PractiseComponent,
    SimpletemplateformComponent,
    AsimpletemplateComponent,
    ReactiveformComponent,
    SubscriptionComponent,
    AreactiveformComponent,
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
