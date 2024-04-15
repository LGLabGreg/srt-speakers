import { inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { SpeakersService } from '@app/speakers/services/speakers.service';
import { speakersActions } from '@app/speakers/store/actions';
import { SpeakersResponseInterface } from '@app/speakers/types/speakers.interface';

export const speakersEffect = createEffect(
  (actions$ = inject(Actions), speakersService = inject(SpeakersService)) => {
    return actions$.pipe(
      ofType(speakersActions.getSpeakers),
      switchMap(({ params }) => {
        return speakersService.get(params).pipe(
          map((response: SpeakersResponseInterface) => {
            return speakersActions.getSpeakersSuccess({ response });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              speakersActions.getSpeakersFailure({
                error: errorResponse.error,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
