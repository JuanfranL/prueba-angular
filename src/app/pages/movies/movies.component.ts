import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movies';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: Array<Movie>|null = null;
  constructor(
    private moviesService: MoviesService
  ) { 
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      (movies:Array<Movie>) => {
        this.movies = movies;
      }
    );
  }

}
