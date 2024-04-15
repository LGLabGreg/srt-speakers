import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpeakerInterface } from '@app/speakers/types/speakers.interface';

@Component({
  selector: 'srt-speakers-list',
  templateUrl: './speakers-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class SpeakersList {
  @Input() speakers: SpeakerInterface[] = [];
}
