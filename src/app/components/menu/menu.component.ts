import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.less',
})
export class MenuComponent {
  faBars = faBars;
  isMenuOpen = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
