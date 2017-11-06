import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user/user.service';
import {Router} from '@angular/router';
import {BackendSimpleCommunicationService} from "../../shared/backend-communication/backend-simple-communication.service";

@Component({
  selector: 'app-group-changer',
  templateUrl: './group-changer.component.html',
  styleUrls: ['./group-changer.component.scss']
})
export class GroupChangerComponent implements OnInit {
  options = [
    {
      name: 'Testowa0',
      value: '0'
    },
    {
      name: 'Testowa1',
      value: '1'
    },
    {
      name: 'Testowa2',
      value: '2'
    },
    {
      name: 'Testowa3',
      value: '3'
    },
    {
      name: 'Testowa4',
      value: '4'
    },
    {
      name: 'Testowa5',
      value: '5'
    }
  ];

  constructor(private userService: UserService, private router: Router,
              private backendService: BackendSimpleCommunicationService) {
  }

  ngOnInit() {
    this.backendService.getUserGroups().subscribe(response => {

    });
  }

  submitGroup(value) {
    const number = Number(value);
    if (!isNaN(number)) {
      this.userService.setGroup(number);
      this.router.navigate(['panel']);
    }
  }
}
