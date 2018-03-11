import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialDesignModule } from './app-material-design.module';
import { WorkoutsModule } from './workouts/workouts.module';

import GymTrack from './shared/models/gym-track.model';
import appState from './app-state';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialDesignModule,
    // Feature modules
    WorkoutsModule,
    // App routing
    AppRoutingModule,
  ],
  providers: [
    {provide: GymTrack, useValue: appState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
