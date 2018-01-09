import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-dialog-hint',
  templateUrl: './dialog-hint.component.html',
  styleUrls: ['./dialog-hint.component.scss']
})
export class DialogHintComponent implements OnChanges {
  @Input() dialogsSuccess = '';
  @Input() dialogsError = '';

  isHintVisible() {
    return this.dialogsError.length > 0 || this.dialogsSuccess.length > 0;
  }

  getHintMessage() {
    return this.dialogsSuccess || this.dialogsError;
  }

  getHintClass() {
    if (this.dialogsError.length > 0) {
      return 'error';
    }
    return 'success';
  }

  ngOnChanges() {
    console.log(this);
  }
}
