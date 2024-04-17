import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { speakersActions } from '@app/speakers/store/actions';
import { SpeakerInterface } from '@app/speakers/types/speakers.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'srt-speakers-list',
  templateUrl: './speakers-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class SpeakersList {
  @Input() speakers: SpeakerInterface[] = [];

  constructor(private store: Store) {}

  onSpeakerClick(value: SpeakerInterface) {
    this.store.dispatch(speakersActions.setSelectedSpeaker({ speaker: value }));
  }
}
