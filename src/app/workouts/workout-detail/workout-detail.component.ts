import { pipe } from 'rxjs/util/pipe';
import { map, switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WorkoutService } from '../shared/workout.service';
import Workout from '../../core/models/workout.model';

@Component({
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {

  workout: Workout = null;

  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkout()
  }

  getWorkout(): void {
    const workoutId = this.route.snapshot.paramMap.get('workoutId');
    this.workoutService.getWorkout(workoutId)
      .subscribe(workout => { this.workout = workout; });
  }

}
