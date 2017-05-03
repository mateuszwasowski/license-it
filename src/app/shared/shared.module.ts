import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeftMenuComponent],
  exports: [LeftMenuComponent]
})
export class SharedModule { }
