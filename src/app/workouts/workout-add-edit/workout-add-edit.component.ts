import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-add-edit',
  templateUrl: './workout-add-edit.component.html',
  styleUrls: ['./workout-add-edit.component.css']
})
export class WorkoutAddEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigateBack() {
    this.router.navigate(['../']);
  }

}
