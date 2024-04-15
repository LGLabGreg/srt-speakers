import { createSelector } from '@ngrx/store';
import { selectRouteParams } from '@app/shared/selectors/router.selectors';
import { selectSpeakers } from './reducers';

export const selectSpeaker = createSelector(
  selectSpeakers,
  selectRouteParams,
  (speakers, { id }) => {
    return speakers.find((speaker) => speaker.id.value === id);
  }
);
