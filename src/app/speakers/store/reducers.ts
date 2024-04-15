import { createFeature, createReducer, on } from '@ngrx/store';
import { speakersActions } from '@app/speakers/store/actions';
import { SpeakersStateInterface } from '@app/speakers/types/speakers.interface';

const initialSate: SpeakersStateInterface = {
  isLoading: false,
  speakers: [],
  info: null,
  error: null,
};

const speakersFeature = createFeature({
  name: 'speakers',
  reducer: createReducer(
    initialSate,
    on(speakersActions.getSpeakers, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(speakersActions.getSpeakersSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      speakers: action.response.results,
      info: action.response.info,
    })),
    on(speakersActions.getSpeakersFailure, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.error,
    }))
  ),
});

export const {
  name: speakersFeatureKey,
  reducer: speakersReducer,
  selectIsLoading,
  selectSpeakers,
  selectInfo,
  selectError,
} = speakersFeature;
