import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AcfInfoDialogComponent, AcfInfoDialogData } from './acf-info-dialog';
import { AcfCard } from '../shared/acf-card/acf-card';
import { AcfCardGridSizer } from '../shared/acf-card/acf-card-grid-sizer';

interface HighlandGameCard {
  title: string;
  image: string;
  description: string;
  modalContent: string;
}

const HIGHLAND_GAMES_CARDS: HighlandGameCard[] = [
  {
    title: 'ADULT HEAVY GAMES',
    image: '/images/highland-games/adult-heavy-games.jpg',
    description: 'The Heavy Athletics last all day Saturday and Sunday.',
  modalContent: `<p><strong>Adult Heavy Games</strong> bring out area warriors to compete in feats of strength, led by World Champion Highland Athlete, Mike Baab. The competition starts at the beginning of the festival each day and runs all afternoon. Events include Masters, Light Weights, Ladies, and Open. Challenges: Braemar, Open Stone, Caber Toss, Weight over Bar, Strongman.<br><br>History: The Highland Games are one of the world’s oldest sports traditions, with roots in ancient Ireland and Scotland.<br><br>To Sign Up to Compete:<br><a href="https://ironpodium.com/browse/event/austin-highland-games-2025" target="_blank" rel="noopener" class="highland-games-signup-link">Click here!</a></p>`
  },
  {
    title: "KID'S HIGHLAND GAMES",
    image: '/images/highland-games/kids-games.jpg',
    description: 'On Sunday only we have an opportunity for children to participate in their own special Highland Games.',
    modalContent: `<p><strong>Children's Highland Games</strong> are held Sunday only. Sign up at the Highland Games area for a special kids' version of the games. Check the schedule or the Highland Games tent for timing and details. Schedule may shift depending on adult competitions.</p>`
  },
  {
    title: "WOMEN'S HEAVY GAMES",
    image: '/images/highland-games/womens-heavy-games.jpg',
    description: 'Saturday and Sunday are open to Women\'s competition as well as Lightweight and Masters.',
    modalContent: `<p><strong>Women's Heavy Games</strong> are open for competition on both Saturday and Sunday, including Lightweight and Masters categories. See the main Heavy Games info for more details.</p>`
  },
  {
    title: 'THE CABER TOSS',
    image: '/images/highland-games/caber-toss.jpg',
    description: 'The Heavy Athletics most popular competition is the Caber Toss. It happens generally in the afternoon on Sat and Sun.',
    modalContent: `<p><strong>Caber Toss</strong> is a traditional Scottish event where athletes toss a large tapered log for accuracy. The caber is 16–22 feet long and 100–180 lbs. The goal is to flip the caber so the small end lands closest to 12:00 on a clock face. <br><br>Origin: Possibly military, now a test of strength, accuracy, and balance. <br><br>In amateur events, the caber is 17 feet/90 lbs; in professional, 23 feet/135 lbs. The straightest toss wins.</p>`
  },
  {
    title: 'WEIGHT FOR DISTANCE',
    image: '/images/highland-games/weight-for-distance.jpg',
    description: 'Click more to learn about the Weight Put or Weight for Distance competition of the Highland Games.',
    modalContent: `<p><strong>Weight for Distance</strong> (Weight Put/Throw) is a contest to throw a weight as far as possible. Two events: light (28 lb men, 14 lb women) and heavy (56 lb men, 42 lb masters, 28 lb women). Metal weights with handles, thrown with one hand, usually with a spinning technique. The longest throw wins.</p>`,
  },
  {
    title: 'WEIGHT FOR HEIGHT',
    image: '/images/highland-games/weight-for-height.jpg',
    description: 'Click more to learn about the Weight Over Height competition of the Austin Highland Games at the ACF.',
    modalContent: `<p><strong>Weight for Height</strong> (Weight Over Bar) is a contest to toss a 56 lb (men) or 28 lb (women) weight over a bar for height. Three attempts per height, highest successful toss wins. Two techniques: classic (between legs, overhead) and spinning (not always allowed).<br><br>Advanced male athletes: 56 lb; female: 28 lb; masters: 42 lb. Places determined by max height and fewest misses.</p>`,
  }
];

@Component({
  selector: 'app-highland-games',
  standalone: true,
  imports: [CommonModule, AcfCard, AcfCardGridSizer],
  styleUrl: './highland-games.css',
  templateUrl: './highland-games.html'
})
export class HighlandGamesPage {
  cards = signal(HIGHLAND_GAMES_CARDS);

  constructor(private dialog: MatDialog) {}

  openInfo(card: HighlandGameCard, event?: Event) {
    // Find the element to blur after dialog closes
    let target: HTMLElement | null = null;
    if (event) {
      if (event.target instanceof HTMLElement) {
        target = event.target;
      } else if ((event as any).currentTarget instanceof HTMLElement) {
        target = (event as any).currentTarget;
      }
    }
    const dialogRef = this.dialog.open(AcfInfoDialogComponent, {
      data: {
        title: card.title,
        image: card.image,
        content: card.modalContent
      } as AcfInfoDialogData,
      panelClass: 'acf-info-dialog-panel',
      autoFocus: true
    });
    dialogRef.afterClosed().subscribe(() => {
      if (target && typeof target.blur === 'function') {
        setTimeout(() => target!.blur(), 0);
      }
    });
  }
}
