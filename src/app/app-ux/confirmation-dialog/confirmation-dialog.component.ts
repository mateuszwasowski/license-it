import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  @Input() status = false;
  @Input() text = 'Are you sure?';
  @Output() submit = new EventEmitter();

  close() {
    this.status = false;
  }

  submitEvent() {
    this.submit.emit();
    this.status = false;
  }
}
