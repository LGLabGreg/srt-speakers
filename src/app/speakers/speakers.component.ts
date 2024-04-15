import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';

import {
  selectError,
  selectInfo,
  selectIsLoading,
  selectSpeakers,
} from '@app/speakers/store/reducers';
import { speakersActions } from '@app/speakers/store/actions';

import { SpeakersList } from '@app/speakers/components/speakers-list/speakers-list.component';
import { selectSpeaker } from './store/selectors';

@Component({
  selector: 'srt-speakers',
  standalone: true,
  imports: [LetDirective, CommonModule, SpeakersList],
  templateUrl: './speakers.component.html',
})
export class SpeakersComponent {
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    speakers: this.store.select(selectSpeakers),
    info: this.store.select(selectInfo),
    error: this.store.select(selectError),
    speaker: this.store.select(selectSpeaker),
  });
  page = 1;

  constructor(private store: Store) {}

  getSpeakers() {
    this.store.dispatch(
      speakersActions.getSpeakers({ params: { page: this.page } })
    );
  }

  changePage(page: number): void {
    this.page = page;
    this.getSpeakers();
  }

  ngOnInit(): void {
    this.getSpeakers();
  }
}
