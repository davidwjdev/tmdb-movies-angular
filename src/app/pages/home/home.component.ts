import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { HandleErrorService } from '../../utils/handle-error.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit, OnDestroy {
  private homeService = inject(HomeService);
  private handleErrorService = inject(HandleErrorService);
  trendingMovies: object[] = [];
  ngOnInit(): void {
    this.listTrendingMovies();
  }

  listTrendingMovies(): void {
    this.homeService.getTrendingMovies().subscribe({
      next: (res: any) => {
        this.trendingMovies = res.results;
        console.log(this.trendingMovies);
      },
      error: (e: Error) => {
        this.handleErrorService.handleError(e);
      },
    });
  }
  ngOnDestroy(): void {}
}
