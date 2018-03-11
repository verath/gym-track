import GymTrack from './models/gym-track.model';
import Workout from './models/workout.model';

const workouts = [];
// workouts.push(new Workout("Push"));
workouts.push(new Workout('Legs'));

const appState: GymTrack = new GymTrack(workouts, [], null);

export default appState;
