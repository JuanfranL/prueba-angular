import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movies';
import { ListDataCard } from 'src/app/shared/components/list-card/list-card.component';
import { DataService } from 'src/app/shared/services/data.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public movies: Array<ListDataCard>|null = null;
  constructor(
    private dataService: DataService,
    private moviesService: MoviesService
  ) { 
  }

  ngOnInit(): void {
    this.dataService.getMovies().subscribe(
      (movies:Array<Movie>) => {
        console.log(movies);
        this.movies = this.moviesService.getMoviesData(movies);
      }
    );
  }

}
