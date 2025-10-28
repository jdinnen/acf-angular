import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'acf-workshop-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshop-card.html',
  styleUrls: ['./workshop-card.css']
})
export class WorkshopCard {
  @Input() title = '';
  @Input() image = '';
  @Input() date = '';
  @Input() time = '';
  @Input() location = '';
  @Input() fee = '';
  @Input() description = '';
}
