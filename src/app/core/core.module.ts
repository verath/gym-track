import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import GymTrack from './models/gym-track.model';
import appState from './app-state';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [{provide: GymTrack, useValue: appState}]
})
export class CoreModule { }
