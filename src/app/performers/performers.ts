import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Performer {
  name: string;
  image: string;
  description: string;
}

export const PERFORMERS: Performer[] = [
  {
    name: "Gerry O'Connor With Don Penzien",
    image: '/images/performers/gerry-oconnor.jpg',
    description: `Hailing from Dundalk, County Louth, Gerry grew up immersed in a musical family—learning fiddle at his mother's knee and training under renowned Sligo master John Joe Gardiner. A four-time Fiddler of Oriel champion, he's celebrated for his fluid, ornamented style and pulsating dance rhythms. Don Penzien has long been a top-flight performer of Irish traditional music, inspired by the Irish pub scene in Athens, Ohio.`
  },
  {
    name: 'Iona Fyfe',
    image: '/images/performers/iona-fyfe.jpg',
    description: `Aberdeenshire folksinger, Iona Fyfe, has become one of Scotland's finest singers, rooted deeply in the singing traditions of the North East of Scotland. She is a two-time winner of Scots Singer of the Year and a fierce advocate for the Scots Language.`
  },
  {
    name: "Diarmuid Ó Meachair With Colman Connolly",
    image: '/images/performers/diarmuid-omeachair.jpg',
    description: `Diarmuid Ó Meachair is an Accordion player from Cúil Aodha, Co. Cork, and an accomplished Melodeon player and sean-nós singer. He was awarded the prestigious TG4 Young Musician of the Year award in 2022.`
  },
  {
    name: 'SteepleChase',
    image: '/images/performers/steeplechase.jpg',
    description: `Steeplechase is a band born from Irish music sessions, with members connected to Maine and the Pacific Northwest. Their shared passion for traditional music is evident in their performances.`
  },
  {
    name: 'The Prodigals',
    image: '/images/performers/the-prodigals.jpg',
    description: `Austin's favorite NYC band leader returns with accordion-led madness and rousing songs. Their music blends traditional Irish roots with rock, worldbeat, jazz, and punk.`
  },
  {
    name: 'River Driver',
    image: '/images/performers/river-driver.png',
    description: `River Driver's diverse repertoire of Americana folk rock and electrifying live performances captivate audiences. Their music weaves bluegrass, Cajun, Texas country, Celtic, and Americana folk into a unique, high-energy tapestry.`
  },
  {
    name: 'Scottish Country Dance Alliance',
    image: '/images/performers/scottish-country-dance-alliance.jpg',
    description: `SCDA hosts an all-ages Scottish Country Dance workshop at the Festival. Enjoy the social dance of Scotland and their ever-popular bake sale.`
  },
  {
    name: 'The Yokes',
    image: '/images/performers/the-yokes.jpg',
    description: `Austin Band playing Irish Pub Songs, Sea Shanties, Maritime, and Celtic inspired music for your enjoyment.`
  },
  {
    name: 'Inishfree Austin Irish Dancers',
    image: '/images/performers/inishfree.jpg',
    description: `The Inishfree School of Irish Dancing has been one of the most prominent Irish Dance classes in Texas for over 15 years, offering lessons to children and adults.`
  },
  {
    name: 'Silver Thistle Pipes And Drums',
    image: '/images/performers/silver-thistle.jpg',
    description: `Silver Thistle has been participating in pipe band competitions and performing in Texas and worldwide for more than 45 years, dedicated to serving the greater Austin area through quality performances and education.`
  }
];

@Component({
  selector: 'acf-performers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performers.html',
  styleUrls: ['./performers.css']
})
export class Performers {
  readonly performers = signal(PERFORMERS);
}
