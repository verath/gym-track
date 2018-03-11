import GymTrack from './models/gym-track.model';
import Workout from './models/workout.model';

const workouts = [];
for (let i = 0; i < 30; i++) {
    workouts.push(new Workout(`Workout ${i}`));
}

const appState: GymTrack = new GymTrack(workouts, [], null);

export default appState;
