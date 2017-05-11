import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication/authentication.service';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    providers: [AuthenticationService]
})
export class LoginComponent {
    private username: string;
    private password: string;

    constructor(private service: AuthenticationService) {}

    login(){
        this.service.login(this.username, this.password);
    }

}
