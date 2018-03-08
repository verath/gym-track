import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';

const routes: Routes = [
    {
        path: 'workouts', component: WorkoutsComponent, children: [
            { path: '', component: WorkoutListComponent },
            { path: ':workoutId', component: WorkoutDetailComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WorkoutsRoutingModule { }
