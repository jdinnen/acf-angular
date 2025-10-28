import { Component, inject, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkshopCard } from '../shared/workshop-card/workshop-card';
import { AcfHero } from '../shared/acf-hero/acf-hero';

export interface WorkshopItem {
  title: string;
  image: string; // relative to public/
  date: string;
  time: string;
  location: string;
  fee: string;
  description: string;
}

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule, RouterModule, WorkshopCard, AcfHero],
  templateUrl: './workshops.html',
  styleUrls: ['./workshops.css']
})
export class WorkshopsPage {
  private readonly doc = inject(DOCUMENT);
  // Data driven lists for easy annual updates
  private readonly saturdayData: WorkshopItem[] = [
    {
      title: 'Irish Céilí Dance Workshop with Inishfree Dancers',
      image: 'images/workshops/inishfree-dancers.jpg',
      date: 'Saturday, November 8, 2025',
      time: '12:00 pm – 1:00 pm',
      location: 'Selkie Stage Area',
      fee: 'FREE FOR ALL AGES',
      description: `Come join the Inishfree dancers and learn the basics of Irish Ceili (party) dancing.  Fun for all ages! With intricate and exciting choreography, rhythms, beautiful costumes, and music, Inishfree Irish Dance showcases a brilliant mix of traditional style and modern athleticism that has made Irish dancing one of the most respected and exciting dance forms in the world.`
    },
    {
      title: 'Intro to Irish Flute & Whistle with Sean Tierney',
      image: 'images/workshops/sean-tierney.jpg',
      date: 'Saturday, November 8, 2025',
      time: '12:30 pm – 1:30 pm',
      location: 'Kelpie Kirk',
      fee: 'FREE',
      description: `Sean is an All-Ireland Flute player and Worlds competition dancer.  From New York, he is currently playing with the Prodigals.  Join him for a free intro to Irish Flute and Whistle.`
    },
    {
      title: 'Wildlife Revealed – Birds of Prey',
      image: 'images/workshops/wildlife-revealed.jpg',
      date: 'Saturday, November 8, 2025',
      time: '1:45 pm – 2:45 pm',
      location: 'Outside Kelpie Kirk',
      fee: 'FREE FOR ALL AGES',
      description: `Wildlife Revealed is a 501c3 non profit organization supported by Sky Kings Falconry, travels the country to share birds and educate on importance in environment. They will be putting on a display to show off their birds of prey.`
    },
    {
      title: 'Ireland: Writing & Revolution with Dr. Gregory Grene',
      image: 'images/workshops/gregory-grene.jpg',
      date: 'Saturday, November 8, 2025',
      time: '2:00 pm – 3:00 pm',
      location: 'Kelpie Kirk (limit 50 people)',
      fee: 'FREE with Fest Ticket',
      description: `Ireland is unique in a number of ways; it is the westernmost point of Europe; it was unconquered by the Romans; it was the refuge and the rekindling of Christianity and scholarship in the Dark Ages; and its revolution, when it came, was embedded profoundly in its literature, specifically the mystical vision of Anglo-Irish aristocracy, who might have been viewed as its natural antagonists. Nowhere is this more pronounced than in the writing of Lady Gregory and WB Yeats, the Irish writer who won the Nobel Prize, and is arguably the most celebrated poet of the twentieth century. We will close-read and discuss two seminal works, Cathleen ni Houlihan and Easter 1916.`
    },
    {
      title: 'Intermediate Irish Flute / Penny Whistle / Low-Whistle with Hanz Araki',
      image: 'images/workshops/hanz-araki.jpg',
      date: 'Saturday, November 8, 2025',
      time: '3:15 pm – 4:15 pm',
      location: 'Kelpie Kirk',
      fee: 'FREE',
      description: `The penny whistle and flute are deceptively called "simple system" flutes. However, many of the fundamental aspects of playing flute or whistle can be challenging to unpack from the pages of a book. Steeplechase flute/whistle-player Hanz Araki will be on hand to answer questions and share techniques and tips to help get your playing to the next level. Tunes will be played! The Irish flute and whistle share many techniques, so players of either or both are welcome!  Please bring an instrument in the key of D.`
    },
    {
      title: 'Wildlife Revealed – Birds of Prey',
      image: 'images/workshops/wildlife-revealed.jpg',
      date: 'Saturday, November 8, 2025',
      time: '4:45 pm – 5:45 pm',
      location: 'Outside Kelpie Kirk',
      fee: 'FREE FOR ALL AGES',
      description: `Wildlife Revealed is a 501c3 non profit organization supported by Sky Kings Falconry, travels the county to share birds and educate on importance in environment. They will be putting on a display to show off their birds of prey.`
    },
    {
      title: 'Intro to Irish Language (Gaeilge) with Diarmuid Ó Meachair',
      image: 'images/workshops/diarmuid-omeachair.jpg',
      date: 'Saturday, November 8, 2025',
      time: '4:45 pm – 5:45 pm',
      location: 'Kelpie Kirk',
      fee: 'FREE',
      description: `Curious about the Irish language? Join us for a welcoming, beginner-friendly workshop led by Diarmuid Ó Meachair, a native Irish speaker at the Austin Celtic Festival. This session offers a fun and interactive introduction to Gaeilge—the national language of Ireland. You’ll learn basic greetings, pronunciation tips, and common phrases, along with cultural insights into how the language is used in daily life and traditional music. No prior experience needed—just bring your curiosity and a love for Irish culture!`
    },
    {
      title: 'Scottish Country Dance Workshop for All Ages',
      image: 'images/workshops/scottish-country-dance.jpg',
      date: 'Saturday, November 8, 2025',
      time: '5:30 pm – 6:30 pm',
      location: 'Pooka Dance Hall',
      fee: 'FREE',
      description: `Scottish country dance challenges both the body and the mind. The moves are known in advance, so you don't have to worry about making them up as you go along. Also, you get to meet new people and make new friends! No partner is needed because everyone dances with everyone else. So, come alone or bring a friend. Hosted by the Scottish Country Dance Alliance.`
    }
  ];

  private readonly sundayData: WorkshopItem[] = [
    {
      title: 'Irish Céilí Dance Workshop with Inishfree Dancers',
      image: 'images/workshops/inishfree-dancers-sunday.jpg',
      date: 'Sunday, November 9, 2025',
      time: '12:00 pm – 1:00 pm',
      location: 'Selkie Stage Area',
      fee: 'FREE FOR ALL AGES',
      description: `Come join the Inishfree dancers and learn the basics of Irish Ceili (party) dancing.  Fun for all ages! With intricate and exciting choreography, rhythms, beautiful costumes, and music, Inishfree Irish Dance showcases a brilliant mix of traditional style and modern athleticism that has made Irish dancing one of the most respected and exciting dance forms in the world.`
    },
    {
      title: 'Doric Scots Dialect in History and Song with Iona Fyfe',
      image: 'images/workshops/iona-fyfe.jpg',
      date: 'Sunday, November 9, 2025',
      time: '1:15 pm – 2:15 pm',
      location: 'Kelpie Kirk',
      fee: 'FREE',
      description: `Join singer Iona Fyfe for a hands-on exploration of traditional song in the Doric Scots dialect of Northeast Scotland. In this workshop, participants will learn a song by ear, just as these songs have been passed down through generations. Along the way, Iona will share the history and cultural context of Doric Scots song, including the tradition of bothy ballads—songs once sung by farm laborers in the outbuildings (“bothies”) where they lived and worked.  Whether you are new to Scots song or an experienced singer looking to deepen your repertoire, this class offers a chance to connect directly with a living tradition through both singing and storytelling.`
    },
    {
      title: 'Wildlife Revealed – Birds of Prey',
      image: 'images/workshops/wildlife-revealed.jpg',
      date: 'Sunday, November 9, 2025',
      time: '1:45 pm – 2:45 pm',
      location: 'Outside Kelpie Kirk',
      fee: 'FREE FOR ALL AGES',
      description: `Wildlife Revealed is a 501c3 non profit organization supported by Sky Kings Falconry, travels the county to share birds and educate on importance in environment. They will be putting on a display to show off their birds of prey.`
    },
    {
      title: 'Intermediate Irish Fiddle with Gerry O’Connor',
      image: 'images/workshops/gerry-oconnor.jpg',
      date: 'Sunday, November 9, 2025',
      time: '2:30 pm – 3:30 pm',
      location: 'Kelpie Kirk',
      fee: 'FREE',
      description: `I try to teach so that the fiddle player learns how to approach the learning of the instrument with a focus on making the bowing enhance the melodies learned. I will teach a small number of tunes, both popular and unusual, focusing on the bowing patterns inherent to and specific to each tune learned. I will highlight and explain what I describe as “Typical Bowing Patterns in Irish Music, specific to the playing of Dance music”. A typical class comprises students of an intermediate level of fiddle playing. Some experience in learning by ear would be an advantage. More importantly, what is required is a positive approach and an attempt to learn by watching and listening. In this way, the tune and the bowing will come together naturally.`
    },
    {
      title: 'Intro to Sean Nós Singing: The Soul of Ireland',
      image: 'images/workshops/diarmuid-omeachair.jpg',
      date: 'Sunday, November 9, 2025',
      time: '3:45 pm – 4:45 pm',
      location: 'Kelpie Kirk',
      fee: 'FREE',
      description: `Discover the singing style of sean-nós ("old style") in this immersive workshop at the Austin Celtic Festival with Diarmuid Ó Meachair. This session will introduce the unique vocal style, ornamentation, and storytelling at the heart of Ireland’s oldest singing tradition. Learn the cultural roots of sean-nós and explore a simple song in Irish. All levels welcome—no prior singing or Irish language experience required.`
    },
    {
      title: 'Wildlife Revealed – Birds of Prey',
      image: 'images/workshops/wildlife-revealed.jpg',
      date: 'Sunday, November 9, 2025',
      time: '4:45 pm – 5:45 pm',
      location: 'Outside Kelpie Kirk',
      fee: 'FREE FOR ALL AGES',
      description: `Wildlife Revealed is a 501c3 non profit organization supported by Sky Kings Falconry, travels the county to share birds and educate on importance in environment. They will be putting on a display to show off their birds of prey.`
    },
    {
      title: 'Scottish Country Dance Workshop for All Ages',
      image: 'images/workshops/scottish-country-dance.jpg',
      date: 'Sunday, November 9, 2025',
      time: '5:30 pm – 6:30 pm',
      location: 'Pooka Dance Hall',
      fee: 'FREE',
      description: `Scottish country dance challenges both the body and the mind. The moves are known in advance, so you don't have to worry about making them up as you go along. Also, you get to meet new people and make new friends! No partner is needed because everyone dances with everyone else. So, come alone or bring a friend. Hosted by the Scottish Country Dance Alliance.`
    }
  ];

  readonly saturday = signal(this.saturdayData);
  readonly sunday = signal(this.sundayData);

  // Smooth jump to section and update URL hash without triggering router navigation
  onJump(event: Event, anchor: 'saturday' | 'sunday'): void {
    event.preventDefault();
    const el = this.doc.getElementById(anchor);
    if (el && 'scrollIntoView' in el) {
      (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    // Update the URL hash in-place (safe for subpaths and SSR)
    if (typeof window !== 'undefined' && window?.history?.pushState) {
      const base = window.location.pathname + window.location.search;
      window.history.pushState({}, '', `${base}#${anchor}`);
    }
  }
}
