import { Component, Input } from '@angular/core';
import { speakersActions } from '@app/speakers/store/actions';
import { SpeakerInterface } from '@app/speakers/types/speakers.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'srt-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  standalone: true,
})
export default class SpeakerDetail {
  @Input() speaker!: SpeakerInterface;

  constructor(private store: Store) {}

  backToSpeakers() {
    this.store.dispatch(speakersActions.setSelectedSpeaker({ speaker: null }));
  }
}
