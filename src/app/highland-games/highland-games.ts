import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HighlandGameCard {
  title: string;
  image: string;
  description: string;
}

const HIGHLAND_GAMES_CARDS: HighlandGameCard[] = [
  {
    title: 'ADULT HEAVY GAMES',
    image: '/images/highland-games/adult-heavy-games.jpg',
    description: 'The Heavy Athletics last all day Saturday and Sunday.'
  },
  {
    title: "KID'S HIGHLAND GAMES",
    image: '/images/highland-games/kids-games.jpg',
    description: 'On Sunday only we have an opportunity for children to participate in their own special Highland Games.'
  },
  {
    title: "WOMEN'S HEAVY GAMES",
    image: '/images/highland-games/womens-heavy-games.jpg',
    description: 'Saturday and Sunday are open to Women\'s competition as well as Lightweight and Masters.'
  },
  {
    title: 'THE CABER TOSS',
    image: '/images/highland-games/caber-toss.jpg',
    description: 'The Heavy Athletics most popular competition is the Caber Toss. It happens generally in the afternoon on Sat and Sun.'
  },
  {
    title: 'WEIGHT FOR DISTANCE',
    image: '/images/highland-games/weight-for-distance.jpg',
    description: 'Click more to learn about the Weight Put or Weight for Distance competition of the Highland Games.'
  },
  {
    title: 'WEIGHT FOR HEIGHT',
    image: '/images/highland-games/weight-for-height.jpg',
    description: 'Click more to learn about the Weight Over Height competition of the Austin Highland Games at the ACF.'
  }
];

@Component({
  selector: 'app-highland-games',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './highland-games.css',
  templateUrl: './highland-games.html'
})
export class HighlandGamesPage {
  cards = signal(HIGHLAND_GAMES_CARDS);
}
