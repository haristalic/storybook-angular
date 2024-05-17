import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() sliders: Slide[] = [];
  @Input() bgColorBtn: string = 'rgba(0, 0, 0, 0.5)';
  @Input() bgColorHoverBtn: string = 'rgba(0, 0, 0, 0.7)';
  @Input() color: string = 'black';

  @Output() prevClicked: EventEmitter<Slide> = new EventEmitter<Slide>();
  @Output() nextClicked: EventEmitter<Slide> = new EventEmitter<Slide>();

  public currentIndex: number = 0;

  public next(): void {
    if (this.currentIndex + 1 >= this.sliders.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }

    this.nextClicked.emit(this.sliders[this.currentIndex]);
  }

  public previous(): void {
    if (this.currentIndex - 1 < 0) {
      this.currentIndex = this.sliders.length - 1;
    } else {
      this.currentIndex -= 1;
    }

    this.prevClicked.emit(this.sliders[this.currentIndex]);
  }
}
export interface Slide {
  id: string;
  content: string;
}
