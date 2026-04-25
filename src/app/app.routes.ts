import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'bibliotheque', loadComponent: () => import('./library/library').then(m => m.Library) },
  { path: '**', redirectTo: '' }
];
