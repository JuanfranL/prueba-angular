import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor, Company, Movie } from 'src/app/core/models/movies';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private temporalBaseUrl: String = 'http://localhost:3000';
  constructor(
    private httpClient: HttpClient
  ) { }

  public getMovies(): Observable<Array<Movie>> {
    const temporalMoviesUrl = '/movies'
    return this.httpClient.get<Array<Movie>>(this.temporalBaseUrl + temporalMoviesUrl);
  }

  public getActors(): Observable<Array<Actor>> {
    const temporalActorsUrl = '/actors'
    return this.httpClient.get<Array<Actor>>(this.temporalBaseUrl + temporalActorsUrl);
  }

  public getCompanies(): Observable<Array<Company>> {
    const temporalCompaniesUrl = '/companies'
    return this.httpClient.get<Array<Company>>(this.temporalBaseUrl + temporalCompaniesUrl);
  }

}
