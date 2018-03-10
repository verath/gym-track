export default class Workout {
    public readonly id: string;

    constructor(public readonly name: string) {
        this.id = Math.random().toString();
    }

}
