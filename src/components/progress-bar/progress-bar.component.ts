import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input() height: string = '20px';
  @Input() width: string = '100%';
  @Input() value: number = 50;
  @Input() colorBar: string = '#eee';
  @Input() colorFillBar: string = 'purple';

  public maxValue: number = 100;
}
