import { pipe } from 'rxjs/util/pipe';
import { map, switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkout();
  }

  private getWorkout(): void {
    this.route.data
      .subscribe((data: { workout: Workout }) => {
        this.workout = data.workout;
      });
  }

  onNavigateBack() {
    this.router.navigate(['../']);
  }

}
