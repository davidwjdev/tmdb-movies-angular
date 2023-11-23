import { HandleErrorService } from './../../utils/handle-error.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  httpClient = inject(HttpClient);
  handleErrorService = inject(HandleErrorService);

  constructor() {}

  getTrendingMovies(): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${environment.TOKEN_AUTH}`,
    });

    return this.httpClient
      .get<any>(
        `${environment.API_PATH}trending/movie/day?language=${environment.LANG}`,
        { headers }
      )
      .pipe(catchError((error) => this.handleErrorService.handleError(error)));
  }

  getTrendingTvShow(): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${environment.TOKEN_AUTH}`,
    });

    return this.httpClient
      .get<any>(
        `${environment.API_PATH}trending/tv/day?language=${environment.LANG}`,
        { headers }
      )
      .pipe(catchError((error) => this.handleErrorService.handleError(error)));
  }
  getTrendingPerson(): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${environment.TOKEN_AUTH}`,
    });

    return this.httpClient
      .get<any>(
        `${environment.API_PATH}trending/person/day?language=${environment.LANG}`,
        { headers }
      )
      .pipe(catchError((error) => this.handleErrorService.handleError(error)));
  }
}
