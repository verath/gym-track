import Workout from './workout.model';
import WorkoutInstance from './workout-instance.model';

export default class GymTrack {

    constructor(
        public workouts: Workout[],
        public performedWorkouts: WorkoutInstance[],
        public currentWorkout: WorkoutInstance = null) { }
}