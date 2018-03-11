import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMaterialModule } from '../shared/app-material.module';
import { SharedModule } from '../shared/shared.module';

import { WorkoutService } from './shared/workout.service';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutAddEditComponent } from './workout-add-edit/workout-add-edit.component';

import { WorkoutsRoutingModule } from './workouts-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppMaterialModule,
        SharedModule,
        WorkoutsRoutingModule
    ],
    exports: [],
    declarations: [
        WorkoutsComponent,
        WorkoutDetailComponent,
        WorkoutListComponent,
        WorkoutAddEditComponent
    ],
    providers: [WorkoutService],
})
export class WorkoutsModule { }
