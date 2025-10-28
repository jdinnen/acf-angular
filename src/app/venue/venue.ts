import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcfHero } from '../shared/acf-hero/acf-hero';

@Component({
  selector: 'acf-venue',
  standalone: true,
  imports: [CommonModule, AcfHero],
  templateUrl: './venue.html',
  styleUrls: ['./venue.css']
})
export class Venue {
  readonly address = '10621 Pioneer Farms Dr, Austin, TX 78754';
}
