import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, NotFoundComponent],
  exports: [IndexComponent, NotFoundComponent]
})
export class PortalModule { }
