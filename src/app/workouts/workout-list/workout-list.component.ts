import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../shared/workout.service';
import Workout from '../../core/models/workout.model';

@Component({
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
})
export class WorkoutListComponent implements OnInit {

  workouts: Workout[];

  constructor(
    private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts(): void {
    this.workoutService.getWorkouts()
      .subscribe(workouts => { this.workouts = workouts });
  }

}
