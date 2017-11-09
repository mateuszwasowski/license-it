import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-element',
  templateUrl: './menu-element.component.html',
  styleUrls: ['./menu-element.component.scss']
})
export class MenuElementComponent implements OnInit {
  @Input()
  header: string;

  @Input()
  route: string;

  @Input()
  icon: string;

  @Input()
  conditional: boolean;

  constructor() { }

  ngOnInit() {
  }

}
