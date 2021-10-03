import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/core/models/movies';
import { StateService } from 'src/app/core/services/state.service';
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
  public stateValue = null;
  private subscriptions: Subscription[] = [];
  
  constructor(
    private dataService: DataService,
    private moviesService: MoviesService,
    private stateService: StateService
  ) { 
  }

  ngOnInit(): void {
    this.subscriptions.push(this.dataService.getMovies().subscribe(
      (movies:Array<Movie>) => {
        this.movies = this.moviesService.getMoviesData(movies);
      }
    ));
    this.subscriptions.push(this.stateService.get('stateMain').subscribe(
      (value) => {
        this.stateValue = value;
      }
    ));
  }
  
  setValue() {
    this.stateService.set('stateMain', 'Hola');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
