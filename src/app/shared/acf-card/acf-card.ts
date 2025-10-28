import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'acf-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acf-card.html',
  styleUrls: ['./acf-card.css']
})
export class AcfCard {
  @Input() image = '';
  @Input() title = '';
  @Input() content = '';
  @Input() clickable = false;
  @Input() href?: string;

  @Output() activate = new EventEmitter<void>();

  onActivate(evt: Event) {
    evt.preventDefault();
    if (this.clickable && !this.href) {
      this.activate.emit();
    }
  }
}
