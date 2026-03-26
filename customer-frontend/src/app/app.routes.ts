import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Menu } from './menu/menu';
import { Contact } from './contact/contact';
import { Reservation } from './reservation/reservation';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'menu', component: Menu },
  { path: 'contact', component: Contact },
  { path: 'reservation', component: Reservation }
];
