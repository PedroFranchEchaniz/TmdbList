import { Component, Input } from '@angular/core';
import { PopularMovie } from '../../models/popular-movies.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() movie!: PopularMovie;
}
