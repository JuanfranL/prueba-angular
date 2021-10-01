import { Injectable } from '@angular/core';
import { Movie } from 'src/app/core/models/movies';
import { ListDataCard } from 'src/app/shared/components/list-card/list-card.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMoviesData(movies: Array<Movie>): Array<ListDataCard> {
    //TODO: Control possible empty or null movies array
    let movieDataCard: Array<ListDataCard> = [];
    movies.forEach(
      (m: Movie) => {
        movieDataCard.push({id: m.id, title: m.title, image: m.poster, footer: m.genre})
      }
    );
    return movieDataCard;
  }
}
