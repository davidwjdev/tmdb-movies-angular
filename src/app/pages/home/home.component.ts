import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { HandleErrorService } from '../../utils/handle-error.service';
import { ImgButtonComponent } from '../../components/img-button/img-button.component';
import { environment } from '../../../environments/environment.development';
import { Subject, pipe, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImgButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  API_IMG_PATH: string = environment.API_IMG_PATH;

  trendingMovies: any = [];
  trendingTvShow: any = [];
  trendingPeople: any = [];

  constructor(
    private homeService: HomeService,
    private handleErrorService: HandleErrorService
  ) {}

  ngOnInit(): void {
    this.listTrendingMovies();
    this.listTrendingTvShow();
    this.listTrendingPeople();
  }

  listTrendingMovies(): void {
    this.homeService
      .getTrendingMovies()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (res: any) => {
          this.trendingMovies = res.results;
        },
        error: (e: Error) => {
          this.handleErrorService.handleError(e);
        },
      });
  }

  listTrendingTvShow(): void {
    this.homeService
      .getTrendingTvShow()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (res: any) => {
          this.trendingTvShow = res.results;
        },
        error: (e: Error) => {
          this.handleErrorService.handleError(e);
        },
      });
  }

  listTrendingPeople(): void {
    this.homeService
      .getTrendingPerson()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (res: any) => {
          this.trendingPeople = res.results;
        },
        error: (e: Error) => {
          this.handleErrorService.handleError(e);
        },
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
