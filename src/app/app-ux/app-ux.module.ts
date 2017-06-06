import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { InputRowComponent } from "./input-row/input-row.component";
import { FormComponent } from "./form/form.component";
import { AjaxFormComponent } from "./ajax-form/ajax-form.component";
import { CommonModule } from "@angular/common";
import { DataTableComponent } from "./data-table/data-table.component";
import { FormButtonsComponent } from "./form-buttons/form-buttons.component";

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
    FormButtonsComponent
  ],
  exports: [DataTableComponent, InputRowComponent, FormComponent, AjaxFormComponent,
    FormButtonsComponent],
})
export class AppUxModule {
}
