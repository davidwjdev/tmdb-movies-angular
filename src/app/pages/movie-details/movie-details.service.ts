import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HandleErrorService } from '../../utils/handle-error.service';
import { environment } from '../../../environments/environment.development';
import { MovieCollection, MovieDetails, MovieSimilar } from './movie-details';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(
    private httpClient: HttpClient,
    private handleErrorService: HandleErrorService
  ) {}

  getMovieDetails(id: string): Observable<MovieDetails> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${environment.TOKEN_AUTH}`,
    });

    return this.httpClient
      .get<MovieDetails>(
        `${environment.API_PATH}movie/${id}?language=${environment.LANG}`,
        {
          headers,
        }
      )
      .pipe(catchError((error) => this.handleErrorService.handleError(error)));
  }

  getMovieCollection(id: string): Observable<MovieCollection> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${environment.TOKEN_AUTH}`,
    });

    return this.httpClient
      .get<MovieCollection>(
        `${environment.API_PATH}collection/${id}?language=${environment.LANG}`,
        {
          headers,
        }
      )
      .pipe(catchError((error) => this.handleErrorService.handleError(error)));
  }

  getMovieSimilar(id: string): Observable<MovieSimilar> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${environment.TOKEN_AUTH}`,
    });

    return this.httpClient
      .get<MovieSimilar>(
        `${environment.API_PATH}movie/${id}/similar?language=${environment.LANG}`,
        {
          headers,
        }
      )
      .pipe(catchError((error) => this.handleErrorService.handleError(error)));
  }
}
