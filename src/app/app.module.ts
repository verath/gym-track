import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialDesignModule } from './app-material-design.module';
import { CoreModule } from './core/core.module';
import { WorkoutsModule } from './workouts/workouts.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialDesignModule,
    AppRoutingModule,
    // Feature modules
    CoreModule,
    WorkoutsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
