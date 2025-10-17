import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.html',
  styleUrls: ['./tickets.css'],
  imports: [MatCardModule, MatButtonModule, MatExpansionModule]
})
export class TicketsComponent {}
