import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TicketsPage } from './tickets/tickets';
import { PerformersPage } from './performers/performers';
import { WorkshopsPage } from './workshops/workshops';
import { SchedulesPage } from './schedules/schedules';
import { AnimalsPage } from './animals/animals';
import { HighlandGamesPage } from './highland-games/highland-games';
import { VenuePage } from './venue/venue';
import { VendorsPage } from './vendors/vendors';
import { VolunteerPage } from './volunteer/volunteer';
import { FaqComponent } from './faq/faq';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'tickets', component: TicketsPage },
	{ path: 'performers', component: PerformersPage },
	{ path: 'workshops', component: WorkshopsPage },
	{ path: 'schedules', component: SchedulesPage },
	{ path: 'animals', component: AnimalsPage },
	{ path: 'highland-games', component: HighlandGamesPage },
	{ path: 'venue', component: VenuePage },
	{ path: 'vendors', component: VendorsPage },
	{ path: 'volunteer', component: VolunteerPage },
	{ path: 'faqs', component: FaqComponent }
];
