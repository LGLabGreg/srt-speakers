import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from '@app/app.routes';

import {
  speakersFeatureKey,
  speakersReducer,
} from '@app/speakers/store/reducers';
import * as speakersEffects from '@app/speakers/store/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    provideState(speakersFeatureKey, speakersReducer),
    provideEffects(speakersEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
