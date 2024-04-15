import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpeakerInterface } from '@app/speakers/types/speakers.interface';

@Component({
  selector: 'srt-speakers-list',
  templateUrl: './speakers-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class SpeakersList {
  @Input() speakers: SpeakerInterface[] = [];
}
