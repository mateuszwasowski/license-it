import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user/user.service';
import {Router} from '@angular/router';

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
      name: 'Testowa5LOOOOOOOOOOOOOOOOOOONNNGG',
      value: '5'
    }
  ];

  group: string;

  constructor(private service: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  changeGroup() {
    const number = Number(this.group);
    if (!isNaN(number)) {
      this.service.setGroup(number);
      this.router.navigate(['panel']);
    }
  }
}
