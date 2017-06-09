import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss']
})
export class ObjectDetailsComponent implements OnInit {
  @Input()
  collections = {};

  keys = [];

  constructor() { }

  ngOnInit() {
    this.keys = Object.keys(this.collections);
  }

}
