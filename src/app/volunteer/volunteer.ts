
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const volunteerOpportunities = [
  {
    title: 'Admissions Gate',
    description: 'Friday, Saturday and Sunday shifts available.',
    link: 'https://www.signupgenius.com/go/10C0E4FABAD28A2F94-56400689-admission#/',
  },
  {
    title: 'ACF Merchandise Booth',
    description: 'Friday, Saturday, Sunday shifts available.',
    link: 'https://www.signupgenius.com/go/10C0E4FABAD28A2F94-56400569-acfmerchandise#/',
  },
  {
    title: 'Facilities',
    description: 'Friday, Saturday, Sunday, Monday shifts available.',
    link: 'https://www.signupgenius.com/go/10C0E4FABAD28A2F94-56400730-facilities#/',
  },
  {
    title: 'Stage Helpers',
    description: 'Friday, Saturday and Sunday shifts available.',
    link: 'https://www.signupgenius.com/go/10C0E4FABAD28A2F94-56400763-stage#/',
  },
  {
    title: 'Vendor Area',
    description: 'Friday, Saturday and Sunday shifts available.',
    link: 'https://www.signupgenius.com/go/10C0E4FABAD28A2F94-56400768-vendor#/',
  },
  {
    title: 'Animals',
    description: 'Friday, Saturday and Sunday shifts.',
    link: 'https://www.signupgenius.com/go/10C0E4FABAD28A2F94-56400707-celtic#/',
  },
];

@Component({
  selector: 'acf-volunteer',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `
    <main class="volunteer-main">
      <mat-card class="volunteer-info-card" appearance="outlined">
        <h1 class="volunteer-title">Volunteer</h1>
        <ul class="volunteer-info-list">
          <li>Please use the SignUpGenius links below to sign up for the particular opportunity or opportunities you are interested in.</li>
          <li>Description of duties is found on the relevant Signup Genius link.</li>
          <li>Some opportunities require certain skills, but most do not.</li>
          <li>Students may volunteer for service credit. We are a 501c3 Nonprofit. Your coordinator can sign your paperwork after your required hours have been completed.</li>
          <li>Most shifts are in four-hour increments.</li>
          <li>Volunteers get 4 complimentary passes to the festival and can purchase an official festival tee shirt at a special volunteer rate at half price.</li>
        </ul>
      </mat-card>
      <section class="volunteer-cards">
        @for (opp of volunteerOpportunities; track opp.title) {
          <mat-card class="volunteer-card" appearance="outlined">
            <h2 class="volunteer-card-title">{{ opp.title }}</h2>
            <p class="volunteer-card-desc">{{ opp.description }}</p>
            <a href="{{ opp.link }}" target="_blank" rel="noopener">
              <img src="/images/sign-up.gif" alt="Sign Up" class="volunteer-signup-img" />
            </a>
          </mat-card>
        }
      </section>
    </main>
  `,
  styleUrl: './volunteer.css',
})
export class VolunteerPage {
  volunteerOpportunities = volunteerOpportunities;
}
