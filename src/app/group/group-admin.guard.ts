import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../shared/user/user.service';
import {BackendSimpleCommunicationService} from '../shared/backend-communication/backend-simple-communication.service';

@Injectable()
export class GroupAdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const callback = response => {
      if (!response) {
        this.router.navigate(['panel']);
      }
      return response;
    };

    return callback(this.userService.getUserData().isGroupAdmin);
  }
}
