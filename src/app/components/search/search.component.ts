import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMagnifyingGlass,
  faCaretDown,
  faCaretUp,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.less',
})
export class SearchComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faCheck = faCheck;
  filters: { name: string; value: string; isChecked: boolean }[] = [
    { name: 'Movies', value: 'movies', isChecked: true },
    { name: 'TV Show', value: 'tvShow', isChecked: false },
    { name: 'People', value: 'people', isChecked: false },
  ];
  isFilterOpen: boolean = false;

  filterChecked(): any {
    const filterSelected = this.filters.find((filter) => filter.isChecked);
    return filterSelected?.name;
  }

  toggleFilters(): void {
    this.isFilterOpen = !this.isFilterOpen;
  }

  setFilter(filterValue: string): void {
    this.filters.forEach((filter) => {
      filter.isChecked = filter.value === filterValue;
    });
    this.toggleFilters();
  }
}
