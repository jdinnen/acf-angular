import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

interface ScheduleDay {
  day: string;
  pdf: string;
}

@Component({
  selector: 'acf-schedules',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './schedules.html',
  styleUrls: ['./schedules.css']
})
export class Schedules {
  readonly intro = [
    'Saturday and Sunday Schedules for 2025 are below.',
    'We recommend saving the PDFs to your phone for easy access at the festival.',
    'You can also download and print the .pdf files if you want a hard copy.',
    'You can save this webpage to your phone or desktop for quick access.',
    'Remember, schedules are subject to change.'
  ];
  readonly scheduleDays: ScheduleDay[] = [
    { day: 'Saturday', pdf: '/images/schedules/saturday-schedule-2025.pdf' },
    { day: 'Sunday', pdf: '/images/schedules/sunday-schedule-2025.pdf' }
  ];
}


