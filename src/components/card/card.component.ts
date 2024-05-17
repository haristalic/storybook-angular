import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() titleCard: string = "Title card";
  @Input() bgColor: string = "white";
  @Input() colorBorder: string = "#ddd";
  @Input() color: string = "black";

}
