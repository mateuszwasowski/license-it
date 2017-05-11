import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../shared/authentication/authentication.service';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class PortalAuthGuard implements CanActivate {

    constructor(private service: AuthenticationService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this.service.isLogged()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
