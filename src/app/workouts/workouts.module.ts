import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { WorkoutService } from './shared/workout.service';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutAddEditComponent } from './workout-add-edit/workout-add-edit.component';

import { WorkoutsRoutingModule } from './workouts-routing.module';

@NgModule({
    imports: [
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
