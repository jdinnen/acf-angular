import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcfCard } from '../shared/acf-card/acf-card';
import { AcfCardGridSizer } from '../shared/acf-card/acf-card-grid-sizer';
interface AnimalCard {
  title: string;
  img: string;
  desc: string;
}
@Component({
  selector: 'acf-animals',
  standalone: true,
  imports: [CommonModule, AcfCard, AcfCardGridSizer],
  templateUrl: './animals.html',
  styleUrls: ['./animals.css']
})
export class Animals {
  readonly heroImg = 'images/animals/hero.jpg';
  readonly cards: AnimalCard[] = [
    {
      title: 'Celtic Animal Parade',
  img: 'images/animals/parade.jpg',
      desc: 'Join the annual Celtic Animal Parade featuring a variety of Celtic breeds and rescues. Celebrate the heritage and diversity of Celtic animals in a festive procession.'
    },
    {
      title: 'Celtic Rescues',
  img: 'images/animals/rescues.jpg',
      desc: 'Meet Celtic animal rescues and learn about their important work. Discover how you can help support and adopt these wonderful animals.'
    },
    {
      title: 'Show Dog Breeds',
  img: 'images/animals/show-dog.jpg',
      desc: 'See top Celtic show dog breeds and learn about their history, characteristics, and role in Celtic culture. Enjoy demonstrations and meet the dogs.'
    },
    {
      title: 'Unregistered Breeds',
  img: 'images/animals/unregistered.jpg',
      desc: 'Discover unique and unregistered Celtic breeds. Learn about their stories and the efforts to preserve their heritage.'
    }
  ];
}
