import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Menu } from './menu/menu';
import { Contact } from './contact/contact';
import { Reservation } from './reservation/reservation';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home - Lahori Grill & Karahi' },
  { path: 'about', component: About, title: 'Our Story - Lahori Grill & Karahi' },
  { path: 'menu', component: Menu, title: 'Menu - Lahori Grill & Karahi' },
  { path: 'contact', component: Contact, title: 'Contact - Lahori Grill & Karahi' },
  { path: 'reservation', component: Reservation, title: 'Reservations - Lahori Grill & Karahi' }
];
