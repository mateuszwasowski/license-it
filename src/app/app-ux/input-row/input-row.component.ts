import {Component} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'cuporg-input-row',
  templateUrl: './input-row.component.html',
  styleUrls: ['input-row.component.scss']
})

export class InputRowComponent {
  class = 'relative';
  @Input() item:any;
  @Output() valueUpdate = new EventEmitter();

  onChange($event, index) {
    this.valueUpdate.emit({
      value: this.item.value,
      name: this.item.id
    });
    if(this.item.callback) {
      this.item.callback($event, index);
    }
  }
}
