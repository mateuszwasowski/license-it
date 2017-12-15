import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendSimpleCommunicationService} from '../../shared/backend-communication/backend-simple-communication.service';

@Component({
  selector: 'app-ajax-form',
  templateUrl: 'ajax-form.component.html',
  styleUrls: ['ajax-form.component.css'],
  providers: [BackendSimpleCommunicationService]
})

export class AjaxFormComponent implements OnInit {
  @Input() formCreationObject: any = {};
  isEdit = false;
  validationMessage = '';
  isErrorValidation = false;
  id = 0;

  constructor(private backendHandler: BackendSimpleCommunicationService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['object_id'] === undefined ? undefined :
      parseInt(this.route.snapshot.params['object_id'], 10);
    this.formCreationObject.header = this.id === undefined ? this.formCreationObject.headers.add :
      this.formCreationObject.headers.edit;
    if (this.id !== undefined) {
      const getUrl = this.formCreationObject.urlElement.replace(':id', this.id);
      this.isEdit = true;
      this.formCreationObject.constData.id = this.id;
      this.backendHandler.getObjects(getUrl).subscribe(this.prepareObjectRequest());
    }
  }

  submitForm(object) {
    let promise;
    if (this.formCreationObject.constData !== undefined) {
      for (const element in this.formCreationObject.constData) {
        if (this.formCreationObject.constData.hasOwnProperty(element)) {
          object[element] = this.formCreationObject.constData[element];
        }
      }
    }
    if (!this.isEdit) {
      promise = this.backendHandler.postObject(this.formCreationObject.urlList, object);
    } else {
      promise = this.backendHandler.editObject(this.formCreationObject.editElement, object);
    }
    promise.subscribe(
      (res) => {
        this.isErrorValidation = false;
        this.validationMessage = 'Object saved successfully.';
      }, () => {
        this.isErrorValidation = true;
        this.validationMessage = 'Something went wrong during save. Please try again.';
      });
  }

  private addValuesToFormObject(response) {
    const form = this.formCreationObject;
    for (const formElement in form.list) {
      if (form.list.hasOwnProperty(formElement)) {
        form.list[formElement].value = response[form.list[formElement].id];
      }
    }
    return form;
  }

  private prepareObjectRequest() {
    return (response) => {
      this.formCreationObject = this.addValuesToFormObject(response.data);
    };
  }
}
