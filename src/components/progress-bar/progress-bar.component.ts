import { Component, Input } from '@angular/core';
import { Colors } from '../../models/colors';

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
  @Input() colorBar:Colors = Colors.SUMMER;
  @Input() colorFillBar:Colors = Colors.DARK;

  public maxValue: number = 100;
}
