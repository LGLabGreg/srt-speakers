import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectSpeaker } from '@app/speakers/store/selectors';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'srt-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, LetDirective],
})
export class SpeakerDetailComponent {
  speaker$ = this.store.select(selectSpeaker);
  params = {
    page: 1,
    results: 20,
  };
  constructor(private store: Store) {}
}
