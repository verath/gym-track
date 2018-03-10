import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
})
export class AppMaterialDesignModule { }
