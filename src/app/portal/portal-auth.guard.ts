import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../shared/authentication/authentication.service';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PortalAuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
