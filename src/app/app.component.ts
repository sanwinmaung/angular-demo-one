import {Component, OnInit} from '@angular/core';
import {Movie} from './model/movie.model';
import {MovieService} from './services/movie.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  movies: Array<Movie>;

  moviesData: Observable<Movie>;

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    console.log('Loaded ');
    this.moviesData = this.movieService.getAllMovie();
    console.log(this.moviesData);
  }



  movieLikeChanged(movie: Movie) {
    console.log('Movie like changed ', movie);
  }
}
