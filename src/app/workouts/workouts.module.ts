import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialDesignModule } from '../app-material-design.module';

import { WorkoutsRoutingModule } from './workouts-routing.module';

import { WorkoutService } from './shared/workout.service';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';

@NgModule({
    imports: [BrowserModule, AppMaterialDesignModule, WorkoutsRoutingModule],
    exports: [],
    declarations: [WorkoutsComponent, WorkoutDetailComponent, WorkoutListComponent],
    providers: [WorkoutService],
})
export class WorkoutsModule { }
