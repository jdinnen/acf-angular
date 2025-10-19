import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'acf-host-hotel',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './host-hotel.html',
  styleUrls: ['./host-hotel.css']
})
export class HostHotel {
  readonly hotelName = 'Cambria Hotel Austin Uptown Near The Domain';
  readonly address = '13205 Burnet Road, Austin, TX, 78727, US';
  readonly phone = '+1 (512) 580-2847';
  readonly bookingUrl = 'https://www.choicehotels.com/reservations/groups/ACF2025';
}
