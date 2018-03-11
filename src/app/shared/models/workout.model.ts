let id = 0;

export default class Workout {
    public readonly id: string;

    constructor(public readonly name: string) {
        this.id = (++id).toString();
    }

}
