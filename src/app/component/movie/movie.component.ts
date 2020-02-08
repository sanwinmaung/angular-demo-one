import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../model/movie.model';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Output() likeChanged = new EventEmitter<Movie>();

  name = 'Avatar';
  year = 2020;
  actors: Array<string> = ['Actor One', 'Actor Two'];
  liked = true;

  constructor(private loggerService: LoggerService) {
    // console.log('Run Constructor');
  }
  ngOnInit() {
    console.log('Movie ngOnit ', this.movie);
  }

  onLikeClick() {
    this.movie.liked = !this.movie.liked;
    this.likeChanged.emit(this.movie);
    this.loggerService.log('Click Liked, Unliked Button!');
  }

}
