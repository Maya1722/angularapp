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
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';

import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule} from '@angular/common/http';
import { Servicecomp3Component } from './servicecomp3/servicecomp3.component';
import { LoginComponent } from './login/login.component';
import { GallaryComponent } from './gallary/gallary.component';



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
    Servicecomp1Component,
    Servicecomp2Component,
    Comp2Component,
    Comp1Component,
    Comp3Component,
    Comp4Component,
    FilterpipeComponent,
    
    EmployeeDataComponent,
    FilterPipe,
    AboutusComponent,
    ContactusComponent,
    ProductComponent,
    HomeComponent,
    Servicecomp3Component,
    LoginComponent,
    GallaryComponent,
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
