import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import GymTrack from '../../core/models/gym-track.model';
import Workout from '../../core/models/workout.model';


@Injectable()
export class WorkoutService {
    constructor(private appState: GymTrack) {
    }

    getWorkouts(): Observable<Workout[]> {
        return of(this.appState.workouts);
    }

    getWorkout(id: string) {
        const workout = this.appState.workouts.find(w => w.id === id);
        return of(workout);
    }

}
