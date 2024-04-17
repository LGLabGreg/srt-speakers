import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';

import {
  selectError,
  selectInfo,
  selectIsLoading,
  selectSelectedSpeaker,
  selectSpeakers,
} from '@app/speakers/store/reducers';
import { speakersActions } from '@app/speakers/store/actions';

import { SpeakersList } from '@app/speakers/components/speakers-list/speakers-list.component';
import SpeakersPagination from './components/speakers-pagination/speakers-pagination.component';
import SpeakerDetail from './components/speaker-detail/speaker-detail.component';
import { SpeakerInterface } from './types/speakers.interface';
import { SpeakersFilter } from './pipes/speakers-filter.pipe';

@Component({
  selector: 'srt-speakers',
  standalone: true,
  imports: [
    LetDirective,
    CommonModule,
    SpeakersList,
    SpeakersPagination,
    SpeakerDetail,
    SpeakersFilter,
  ],
  templateUrl: './speakers.component.html',
})
export class SpeakersComponent {
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    speakers: this.store.select(selectSpeakers),
    info: this.store.select(selectInfo),
    error: this.store.select(selectError),
    selectedSpeaker: this.store.select(selectSelectedSpeaker),
  });
  page: number = 1;
  filteredSpeakers: SpeakerInterface[] = [];

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
