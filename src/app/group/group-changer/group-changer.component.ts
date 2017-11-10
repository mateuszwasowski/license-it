import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user/user.service';
import {Router} from '@angular/router';
import {BackendSimpleCommunicationService} from '../../shared/backend-communication/backend-simple-communication.service';

@Component({
  selector: 'app-group-changer',
  templateUrl: './group-changer.component.html',
  styleUrls: ['./group-changer.component.scss']
})
export class GroupChangerComponent implements OnInit {
  options = [];

  constructor(private userService: UserService, private router: Router,
              private backendService: BackendSimpleCommunicationService) {
  }

  ngOnInit() {
    this.backendService.getUserGroups().subscribe(response => {
      this.options = response.data;
    });
  }

  submitGroup(value) {
    this.userService.setGroup(value);
    this.router.navigate(['panel']);
  }
}
