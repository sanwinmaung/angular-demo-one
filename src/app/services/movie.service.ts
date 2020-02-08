import { Injectable } from '@angular/core';
import {Movie} from '../model/movie.model';
import {HttpClient} from '@angular/common/http';
import {URL_HOST} from '../utils/Setting';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<Movie> = [new Movie('Titanic', 2020), new Movie('Transformer', 2020)];

  constructor(private httpClient: HttpClient) { }

  getAllMovie(): Observable<any>
  {
    return this.httpClient.get(URL_HOST + '/movies');
  }
}
