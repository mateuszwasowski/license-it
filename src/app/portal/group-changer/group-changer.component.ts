import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group-changer',
  templateUrl: './group-changer.component.html',
  styleUrls: ['./group-changer.component.scss']
})
export class GroupChangerComponent implements OnInit {
  options = [
    {
      name: 'Testowa',
      value: '1'
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
      console.log('redirect');
    }
  }
}
