import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/core/models/movies';
import { ListDataCard } from 'src/app/shared/components/list-card/list-card.component';
import { DataService } from 'src/app/shared/services/data.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  public movies: Array<ListDataCard>|null = null;
  private subscriptions: Subscription[] = [];
  
  constructor(
    private dataService: DataService,
    private moviesService: MoviesService
  ) { 
  }

  ngOnInit(): void {
    this.subscriptions.push(this.dataService.getMovies().subscribe(
      (movies:Array<Movie>) => {
        this.movies = this.moviesService.getMoviesData(movies);
      }
    ));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
