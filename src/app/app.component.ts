import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  imports: [
    CommonModule,
    RouterOutlet,
    FontAwesomeModule,
    SearchComponent,
    MenuComponent,
  ],
})
export class AppComponent {
  title = 'tmdb-movies-angular';
}
