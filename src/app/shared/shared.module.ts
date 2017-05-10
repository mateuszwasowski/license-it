import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MenuElementComponent } from './left-menu/menu-element/menu-element.component';

import { CreateLinkService } from './backend-communication/create-link.service';
import { BackendSimpleCommunicationService } from './backend-communication/backend-simple-communication.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [LeftMenuComponent, MenuElementComponent],
    exports: [LeftMenuComponent],
    providers: [
        CreateLinkService,
        BackendSimpleCommunicationService
    ]
})
export class SharedModule {
}
