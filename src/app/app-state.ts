import GymTrack from './shared/models/gym-track.model';
import Workout from './shared/models/workout.model';

const workouts = [];
// workouts.push(new Workout("Push"));
workouts.push(new Workout('Legs'));

const appState: GymTrack = new GymTrack(workouts, [], null);

export default appState;
