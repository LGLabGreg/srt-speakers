import { Routes } from '@angular/router';
import { SpeakersComponent } from './speakers.component';
import { SpeakerDetailComponent } from './components/speaker-detail/speaker-detail.component';

export const speakersRoutes: Routes = [
  {
    path: '',
    component: SpeakersComponent,
  },
  {
    path: ':id',
    component: SpeakerDetailComponent,
  },
];
