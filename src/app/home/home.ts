import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcfCard } from '../shared/acf-card/acf-card';
import { AcfCardGridSizer } from '../shared/acf-card/acf-card-grid-sizer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AcfCard, AcfCardGridSizer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  cards = [
    {
      img: 'images/sections/music.jpg',
      alt: 'Celtic Music & Dance',
      title: 'CELTIC MUSIC & DANCE',
      content: 'The Austin Celtic Festival offers the highest quality regional and international Celtic artists with an extraordinary lineup of talent.'
    },
    {
      img: 'images/sections/games.jpg',
      alt: 'Highland Games',
      title: 'HIGHLAND GAMES',
      content: 'The competition can be observed at the Festival all day both Saturday and Sunday.'
    },
    {
      img: 'images/sections/workshops.jpg',
      alt: 'Workshops/Celtic History',
      title: 'WORKSHOPS/CELTIC HISTORY',
      content: 'Participate as a student in the ACF School of Traditional Arts. From beginner courses to master workshops in music, lectures, you can leave the ACF with new techniques, insights and experiences.'
    },
    {
      img: 'images/sections/animals.jpg',
      alt: 'Celtic Animals',
      title: 'CELTIC ANIMALS',
      content: 'The Fest showcases many varieties of Celtic dog breeds, Mini horse breeds, and more. Sorry, NO PETS ALLOWED. Only Celtic Dogs registered for our parade.'
    }
  ];
  cols = typeof window !== 'undefined' ? (window.innerWidth > 700 ? 2 : 1) : 1;
}
