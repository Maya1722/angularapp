import { componentFactoryName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component'

@Injectable({
  providedIn: 'root'
})
export class UnSavedChangesGuard implements CanDeactivate<AdduserComponent> {
   canDeactivate(component:AdduserComponent){

    if(component.myGroup.dirty){
return window.confirm("you have unsaved changes.are you sure want to naviagte?");
    }
    else{return true; }
   }
}
