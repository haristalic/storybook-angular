import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = "Button"
  @Input() disabled: boolean = false;
  @Input() color: string = "white";
  @Input() colorHover: string = "white";
  @Input() bgColor: string = "#1b77cc";
  @Input() size: 'small' | 'normal' | 'large' = 'normal';

  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public triggedButton(): void {
      this.clicked.emit(true);
  }

  public get classes(): string[] {

    return ['storybook-button', `storybook-button--${this.size}`];
  }
}
