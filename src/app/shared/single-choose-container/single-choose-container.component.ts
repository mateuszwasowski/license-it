import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-choose-container',
  templateUrl: './single-choose-container.component.html',
  styleUrls: ['./single-choose-container.component.scss']
})
export class SingleChooseContainerComponent implements OnInit {
  @Input()
  header: string;

  constructor() { }

  ngOnInit() {
  }

}
