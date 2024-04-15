import { createActionGroup, props } from '@ngrx/store';
import {
  SpeakersRequestInterface,
  SpeakersResponseInterface,
  SpeakersErrorInterface,
} from '@app/speakers/types/speakers.interface';

export const speakersActions = createActionGroup({
  source: 'speakers',
  events: {
    GetSpeakers: props<{ params: SpeakersRequestInterface }>(),
    'GetSpeakers success': props<{ response: SpeakersResponseInterface }>(),
    'GetSpeakers failure': props<{ error: SpeakersErrorInterface }>(),
  },
});
