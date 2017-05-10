import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {BackendSimpleCommunicationService } from '../shared/backend-communication/backend-simple-communication.service';


@Injectable()
export class PortalAuthGuard implements CanActivate {

  constructor(private service: BackendSimpleCommunicationService) {}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.service.isLogged().subscribe(
      (res) => {
        return true;
      });
    return false;
  }
}
