import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {InputRowComponent} from './input-row/input-row.component';
import {FormComponent} from './form/form.component';
import {AjaxFormComponent} from './ajax-form/ajax-form.component';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from './data-table/data-table.component';
import {FormButtonsComponent} from './form-buttons/form-buttons.component';
import {ObjectDetailsComponent} from './object-details/object-details.component';
import {ObjectDetailRowComponent} from './object-detail-row/object-detail-row.component';
import {DialogComponent} from './dialog/dialog.component';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {DialogHintComponent} from './dialog-hint/dialog-hint.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    DataTableComponent,
    InputRowComponent,
    FormComponent,
    AjaxFormComponent,
    FormButtonsComponent,
    ObjectDetailsComponent,
    ObjectDetailRowComponent,
    DialogComponent,
    ConfirmationDialogComponent,
    DialogHintComponent
  ],
  exports: [DataTableComponent, InputRowComponent, FormComponent, AjaxFormComponent, ObjectDetailsComponent,
    FormButtonsComponent, DialogComponent,
    ConfirmationDialogComponent,
    DialogHintComponent],
})
export class AppUxModule {
}
