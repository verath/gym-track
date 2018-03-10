import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutAddEditComponent } from './workout-add-edit/workout-add-edit.component';
import { WorkoutResolver } from './shared/workout-resolver.service';

const routes: Routes = [
    {
        path: 'workouts',
        component: WorkoutsComponent,
        children: [
            { path: '', component: WorkoutListComponent },
            { path: 'add', component: WorkoutAddEditComponent },

            {
                path: ':id',
                component: WorkoutDetailComponent,
                resolve: { workout: WorkoutResolver }
            },
            {
                path: ':id/edit',
                component: WorkoutAddEditComponent,
                resolve: { workout: WorkoutResolver }
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        WorkoutResolver,
    ]
})
export class WorkoutsRoutingModule { }
