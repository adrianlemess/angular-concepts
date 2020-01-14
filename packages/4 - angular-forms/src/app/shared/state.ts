export class State {
    constructor(public name: string, public code: string ) {}
}

export interface IState {
    name: string;
    code: string;
    cities: string[];
}
