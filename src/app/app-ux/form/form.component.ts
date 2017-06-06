import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['form.component.scss']
})

export class FormComponent {
  class = 'relative';
  @Input() formObject: any;
  @Input() validationMessage: string;
  @Output() formUpdate = new EventEmitter();

  constructor(private _location: Location) {
  }

  showModel(event) {
    event.preventDefault();
    let emittedObject = {};
    for (let item of this.formObject.list) {
      emittedObject[item.id] = item.value;
    }
    this.formUpdate.emit(emittedObject);
  }

  handleUpdate(newValue) {
    if (newValue !== undefined) {
      let object = this.formObject.list.findIndex((item: any) => {
        return item.id === newValue.name;
      });

      if (object > -1) {
        if (this.formObject.list[object].type === 'number') {
          this.formObject.list[object].value = Number(newValue.value);
        }
        else {
          this.formObject.list[object].value = newValue.value;
        }
      }
    }
  }

  backToPrevious() {
    this._location.back();
  }
}
