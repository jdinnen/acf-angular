import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class FaqComponent {
  faqs: { question: string; answer: string }[] = [
    {
      question: 'Can we bring our dog or pet?',
      answer: `No. Pioneer Farms does not allow pets. The animals that participate in the festival are cleared by our Animal Director and are there as performers. If you have a "Celtic" dog breed that you would like to have to participate in the Celtic dog parade please visit the Animal Page on our website for a Celtic Show Animal Application and send it to our Animal Director.`
    },
    {
      question: 'Lost and Found?',
  answer: `Lost and found items can be taken to the ACF Information Booth located where we sell t-shirts and performer CDs. You can also email austincelticfestival@gmail.com for missing items. But, that email address will not be responsive during and immediately after the festival. It will take a few days to get through a large number of emails sent during the festival.`
    },
    {
      question: 'No Videotaping',
      answer: `Because of copyright violations, we no longer allow our performers to be videotaped by anyone other than our festival video archivists. You may take still photos (and we'd love for you to share your best ones with us on Facebook and Instagram). But, videotaping is now forbidden. Also, we no longer allow professional camera equipment (ie extended lenses, tripods, etc). Stage managers will ask once for you to stop and if you continue we will have security escort you out of the festival grounds.`
    },
    {
      question: 'Can we bring chairs, coolers, umbrellas, and backpacks?',
      answer: `Chairs: Yes. Because seating is limited we encourage you to bring a chair or blanket for seating.\nCoolers: No\nUmbrellas: Yes. However, no large size patio type umbrellas\nBackpacks: Yes. Small backpacks are allowed and are subject to search at entry. Large or Framed backpacks are not allowed.`
    },
    {
      question: 'Prohibited items at the Austin Celtic Festival',
      answer: `No coolers\nNo weapons of any kind. No firearms even with a permit as we sell alcohol on site and TABC prohibits it.\nNo framed or large backpacks (small backpacks and bags are okay but will be searched on entry, help us save time by leaving them at home).\nNo alcohol. Alcohol is sold on-premise and TABC permits do not allow outside alcohol or taking alcohol outside the permitted area.\nNo glass containers\nNo food or beverages (food and beverages are sold at the Festival)\nNo skateboards, scooters, or personal motorized vehicles (except as ADA allows)\nNo bicycles inside festival grounds\nNo pets (except service dogs or Celtic dog breeds cleared through our Animal Director as a showcase for the festival)\nNo video equipment. Video recording will not be allowed.\nNo illegal vending is permitted. No unauthorized/unlicensed vendors are allowed.\nNo solicitation, handbills, sampling, flyers, leaflets, etc.`
    },
    {
      question: 'Where do we park? Is there a shuttle?',
      answer: `We do not have a shuttle to the festival. We do encourage you to carpool with friends or to use ride services especially if you will be drinking. Unfortunately, there are no nearby bus routes to Pioneer Farms. There is a large swath of land that will be used for parking at Pioneer Farms. Parking is free. It will be in a mowed field and we will have two parking attendants guiding you in to park. Because it is not paved, please drive slowly and cautiously over the grass to mediate damage to the grounds and for safety. We also recommend that you wear close-toed shoes for the short walk to the festival area.`
    },
    {
      question: 'What if it rains?',
      answer: `It wouldn't be the first time. With everything Celtic, the rain brings a charm of its own. Our facilities at Pioneer Farms contain two COVERED stages and three indoor buildings. They are perfect cozy retreats from the rain. 95% of all festival activities will remain on course even in the heaviest of downpours. A few of the outdoor reenactment camps and animal activities might have to shift their schedules around to accommodate a shower. But, even the Highland Games proceed on through the rain unless it is a deluge. We recommend you bring your umbrella and/or a nice raincoat and wellies to protect you while traveling from stage to stage.`
    },
    {
      question: 'My band wants to play at the festival. How do we get in?',
      answer: `You must apply to our Regional Panel during the paneling period from May 15 to June 15. Regional bands are selected by the panel. The majority, if not all, of your repertoire, must be Celtic. Check the website in mid-May for regional applications on the music page. *We will not be accepting band applications for 2022 as we are honoring commitments to musicians who were scheduled in 2020/2021 but had to be canceled.`
    },
    {
      question: 'I am interested in headlining the festival or recommending a headliner',
  answer: `Headliners are selected by our festival director. You may email her your suggestions or your interest at austincelticfestival@gmail.com. Headliners for the ACF are selected based on their international standing in the traditional community as well as their ability to conduct workshops and extend their knowledge of the tradition to our attendees. Because our goal is to impart and preserve the traditional elements of the Celtic culture, there is very limited space in our headliner slots for alternative Celtic styles beyond the traditional.`
    },
    {
      question: 'When will the stage schedule be posted?',
      answer: `Although we try to post the schedule as soon as possible, we are constantly juggling band availability, flight schedules, and other conflicts. Generally, the schedule will post around the beginning of October. Remember it is subject to change.`
    },
    {
      question: 'I think the festival is great! How can I further support it?',
  answer: `Visit the volunteer page and join us for a great weekend as an insider. Send us loving feedback to austincelticfestival@gmail.com and leave recommendations on our Facebook page. Tell all your friends about our great festival!`
    },
    {
      question: 'Are you handicap accessible?',
      answer: `Yes, but it is an outdoor festival. The festival takes place in a venue not owned by us that for the most part works to recreate life in the 1800s. They do have limited handicap parking and restrooms. We also rent additional handicap-accessible portable toilets. Most of the staging area takes place on low-cut grass and several well-worn footpaths around the perimeter. The houses that we will be using for the public have ramps at the back of the houses for handicap entrances. There is limited accessible parking available near the festival on a first-come, first-serve basis to vehicles displaying a state-issued handicapped plate or placard. The person to whom the placard or plate is issued must be in the vehicle, as a driver or passenger. If you are traveling with a mobility impaired person, you can double park and let them exit the vehicle at the main gate while you have your hazard lights on. Once they are in the park, you can then go and find whatever parking is available. The same is for picking up someone mobility impaired.`
    }
    ,
  ];


  // Utility: Split answer into parts for mailto rendering
  splitAnswer(answer: string): Array<{text: string, email?: string}> {
    const email = 'austincelticfestival@gmail.com';
    const parts: Array<{text: string, email?: string}> = [];
    let lastIdx = 0;
    let idx: number;
    while ((idx = answer.indexOf(email, lastIdx)) !== -1) {
      if (idx > lastIdx) {
        parts.push({ text: answer.substring(lastIdx, idx) });
      }
      // Only push the email if it is a perfect match (no whitespace)
      const found = answer.substr(idx, email.length);
      if (found.trim() === email) {
        parts.push({ text: '', email });
      } else {
        // fallback: treat as text if not a perfect match
        parts.push({ text: found });
      }
      lastIdx = idx + email.length;
    }
    if (lastIdx < answer.length) {
      parts.push({ text: answer.substring(lastIdx) });
    }
    return parts;
  }
}
