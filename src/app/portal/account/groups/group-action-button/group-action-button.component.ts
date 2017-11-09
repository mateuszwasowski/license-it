import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-action-button',
  templateUrl: './group-action-button.component.html',
  styleUrls: ['./group-action-button.component.scss']
})
export class GroupActionButtonComponent implements OnInit {
  @Input()
  id: number;

  constructor() { }

  ngOnInit() {
  }

  removeFromGroup($event) {
    $event.stopPropagation();
    console.log(this.id);
  }

}
