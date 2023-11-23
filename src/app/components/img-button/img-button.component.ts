import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-button.component.html',
  styleUrl: './img-button.component.less',
})
export class ImgButtonComponent {
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() voteAverage: number = 0;
  @Input() voteCount: number = 0;
  @Input() isPerson: boolean = false;

  voteAverageString: string = 'N/A';

  fixVoteAverage(): any {
    if (this.voteCount == 0) {
      this.voteAverageString = 'N/A';
    } else {
      this.voteAverageString = this.voteAverage.toFixed(1).toString();
    }
    return this.voteAverageString;
  }
}
