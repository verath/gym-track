import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';


import GymTrack from '../../shared/models/gym-track.model';
import Workout from '../../shared/models/workout.model';


@Injectable()
export class WorkoutService {
    constructor(private appState: GymTrack) {
    }

    getWorkouts(): Observable<Workout[]> {
        // TODO: remove delay used for testing
        return of(this.appState.workouts).delay(Math.random() * 1000);
    }

    getWorkout(id: string) {
        // TODO: remove delay used for testing
        const workout = this.appState.workouts.find(w => w.id === id);
        return of(workout).delay(Math.random() * 1000);
    }

}
