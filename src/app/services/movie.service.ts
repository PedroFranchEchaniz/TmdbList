import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularMovieResponse } from '../models/popular-movies.interface';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<PopularMovieResponse> {
    return this.http.get<PopularMovieResponse>(`${environment.baseUrl}/movie/popular?${environment.apikey}`);
  }
}
