import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BackendSimpleCommunicationService} from "../../../../shared/backend-communication/backend-simple-communication.service";
import {UserService} from "../../../../shared/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-action-button',
  templateUrl: './group-action-button.component.html',
  styleUrls: ['./group-action-button.component.scss']
})
export class GroupActionButtonComponent implements OnInit {
  @Input()
  id: number;
  @Output()
  reload = new EventEmitter();

  constructor(private request: BackendSimpleCommunicationService,
              private user: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  removeFromGroup($event) {
    $event.stopPropagation();
    console.log(this.id, this.user.getUserData());
    this.request.deleteFromGroup(this.id).subscribe(() => {
      if (this.id === this.user.getGroup().idGroup) {
        this.router.navigate(['/group']);
      } else {
        this.reload.emit(this.id);
      }
    });
  }

}
