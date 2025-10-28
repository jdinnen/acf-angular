import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'acf-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acf-hero.html',
  styleUrls: ['./acf-hero.css']
})
export class AcfHero {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;

  // Optional HTML image attributes for fine-tuning; sensible defaults for heroes
  @Input() loading: 'eager' | 'lazy' = 'eager';
  @Input() decoding: 'async' | 'sync' | 'auto' = 'async';
  @Input() fetchpriority: 'high' | 'low' | 'auto' = 'high';
}
