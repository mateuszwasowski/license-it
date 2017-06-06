import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BackendSimpleCommunicationService } from "../../shared/backend-communication/backend-simple-communication.service";

@Component({
  selector: 'app-ajax-form',
  templateUrl: 'ajax-form.component.html',
  styleUrls: ['ajax-form.component.css'],
  providers: [BackendSimpleCommunicationService]
})

export class AjaxFormComponent implements OnInit {
  @Input() formCreationObject: any = {};
  isEdit = false;
  currentObject: any;
  editUrl: string;
  validationMessage = '';

  private prepareObjectRequest(res) {
    this.formCreationObject = this.backendHandler.addValuesToFormObject(this.formCreationObject, res);
    this.currentObject = res;
  }

  constructor(private backendHandler: BackendSimpleCommunicationService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['object_id'];
    this.formCreationObject.header = this.formCreationObject.headers.add;
    if (id !== undefined) {
      this.isEdit = true;
      this.editUrl = this.formCreationObject.urlElement.replace(':id', id);
      this.formCreationObject.header = this.formCreationObject.headers.edit;
      this.backendHandler.getObjects(this.editUrl).subscribe(this.prepareObjectRequest.bind(this));
    }
  }

  submitForm(object) {
    let promise;
    if (this.formCreationObject.constData !== undefined) {
      for (const element in this.formCreationObject.constData) {
        object[element] = this.formCreationObject.constData[element];
      }
    }
    if (!this.isEdit) {
      promise = this.backendHandler.postObject(this.formCreationObject.urlList, object);
    } else {
      promise = this.backendHandler.postObject(this.editUrl, object);
    }
    promise.subscribe(
      (res) => {
        if (res.status === 200) {
          this.validationMessage = 'Zapisano poprawnie rekord - numer licencji: ' + res.data;
        } else {
          this.validationMessage = 'Wystapił błąd podczas zapisu.';
        }
      }, () => {
        this.validationMessage = 'Wystapił błąd podczas zapisu.';
      });
  }
}
