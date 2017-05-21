import { Component } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'cuporg-form',
  templateUrl: './form.component.html',
  styleUrls: ['form.component.scss']
})

export class FormComponent  {
  class = 'relative';
  @Input() formObject:any;
  @Input() validationMessage:string;
  @Output() formUpdate = new EventEmitter();

  showModel(event) {
    event.preventDefault();
    let emittedObject = {};
    for(let item of this.formObject.list) {
      emittedObject[item.id] = item.value;
    }
    this.formUpdate.emit(emittedObject);
  }

  handleUpdate(newValue){
    if(newValue !== undefined) {
      let object = this.formObject.list.findIndex((item:any) => {
        return item.id === newValue.name;
      });

      if(object > -1){
        this.formObject.list[object].value = newValue.value;
      }
    }
  }
}
