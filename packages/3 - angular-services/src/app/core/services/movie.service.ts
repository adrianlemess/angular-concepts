import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private cast = [];
    private movieName: string;

    constructor(movie) {
        this.movieName = movie;
    }

    addCastMember(actor) {
        this.cast = [...new Set([...this.cast, actor])];
    }

    getCastMembers() {
        return this.cast;
    }
}
