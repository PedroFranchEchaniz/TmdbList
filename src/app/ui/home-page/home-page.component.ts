import { Component, OnInit } from '@angular/core';
import { PopularMovieResponse } from '../../models/popular-movies.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  moviesList !: PopularMovieResponse;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(resp => {
      this.moviesList = resp;
    })
  }
}
