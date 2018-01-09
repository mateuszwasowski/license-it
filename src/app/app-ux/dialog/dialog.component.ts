import {Component, Input, OnChanges} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnChanges {
  private state = false;

  @Input() time = 3000;
  @Input()
  set status(value) {
    console.log(value);
    this.state = value;
    if (this.state && this.time !== 0) {
      Observable.timer(this.time).take(1).subscribe(() => {
        this.state = false;
      });
    }
  }

  get status() {
    return this.state;
  }

  ngOnChanges() {
    console.log(this.status);
  }
}
