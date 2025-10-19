import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'acf-venue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './venue.html',
  styleUrls: ['./venue.css']
})
export class Venue {
  readonly address = '10621 Pioneer Farms Dr, Austin, TX 78754';
}
