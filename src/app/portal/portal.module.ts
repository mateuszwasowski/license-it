import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [IndexComponent, NotFoundComponent, LoginComponent],
  exports: [IndexComponent, NotFoundComponent, LoginComponent]
})
export class PortalModule { }
