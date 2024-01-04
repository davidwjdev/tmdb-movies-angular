import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsService } from './movie-details.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import moment from 'moment';
import { MovieCollection, MovieDetails, MovieSimilar } from './movie-details';
import { NgxMaskPipe } from 'ngx-mask';
import { ImgButtonComponent } from '../../components/img-button/img-button.component';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, NgxMaskPipe, ImgButtonComponent, RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.less',
})
export class MovieDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  private ngUnsubscribe = new Subject<void>();
  movieDetails$?: Observable<MovieDetails>;
  movieCollection$?: Observable<MovieCollection>;
  movieSimilar$?: Observable<MovieSimilar>;
  isLoading: boolean = true;

  API_IMG_PATH = environment.API_IMG_PATH;
  idMovie: string = '';
  voteAverageString: string = '';

  constructor(
    private movieDetailsService: MovieDetailsService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    // this.idMovie = this.route.snapshot.paramMap.get('id') ?? '';
    // this.listDetailsMovie(this.idMovie);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idMovie = params.get('id') || '';
      this.listMovieDetails(this.idMovie);
      this.listMovieSimilar(this.idMovie);
    });
    this.movieDetails$?.forEach((movieDetails: MovieDetails) => {
      if (movieDetails.belongs_to_collection) {
        const idCollection = movieDetails.belongs_to_collection.id;
        this.listMovieCollection(idCollection);
      }
    });
  }

  formatDate(date: string) {
    const newDate = moment(date).format('DD/MM/YYYY');
    return newDate;
  }

  formatVoteAverage(voteCount: number, voteAverage: number): string {
    if (voteCount == 0) {
      this.voteAverageString = 'N/A';
    } else {
      this.voteAverageString = voteAverage.toFixed(1);
    }

    return this.voteAverageString.toString();
  }

  listMovieDetails(idMovie: string) {
    this.movieDetails$ = this.movieDetailsService
      .getMovieDetails(idMovie)
      .pipe(takeUntil(this.ngUnsubscribe));
  }
  listMovieCollection(idCollection: string) {
    this.movieCollection$ = this.movieDetailsService
      .getMovieCollection(idCollection)
      .pipe(takeUntil(this.ngUnsubscribe));
  }
  listMovieSimilar(idMovie: string) {
    this.movieSimilar$ = this.movieDetailsService
      .getMovieSimilar(idMovie)
      .pipe(takeUntil(this.ngUnsubscribe));

    this.movieDetailsService
      .getMovieSimilar(idMovie)
      .subscribe((teste) => console.log(teste));
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
