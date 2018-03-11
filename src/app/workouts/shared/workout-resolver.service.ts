import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';

import { Injectable } from '@angular/core';
import { WorkoutService } from './workout.service';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import Workout from '../../shared/models/workout.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkoutResolver implements Resolve<Workout> {

    constructor(private workoutService: WorkoutService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Workout> {
        const workoutId = route.paramMap.get('id');
        return this.workoutService.getWorkout(workoutId).first();
    }
}
