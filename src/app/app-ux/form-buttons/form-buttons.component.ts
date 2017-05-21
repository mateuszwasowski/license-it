import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit {
  @Input() creationLink = '';

  constructor() { }

  ngOnInit() {
  }

}
