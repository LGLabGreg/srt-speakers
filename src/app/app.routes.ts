import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'speakers',
    loadChildren: () =>
      import('./speakers/speakers.routes').then((m) => m.speakersRoutes),
  },
];
