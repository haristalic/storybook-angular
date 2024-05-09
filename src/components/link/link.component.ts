import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() label = 'Link';
  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() href?: string;
  @Input() target?: '_self' | '_blank' | '_parent' | '_top' = '_self';

  public get classes(): Array<string> {
    return ['link', `${this.color}-link`];
  }

}