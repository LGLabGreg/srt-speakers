import { Pipe, PipeTransform } from '@angular/core';
import { SpeakerInterface } from '../types/speakers.interface';

@Pipe({
  standalone: true,
  name: 'speakersFilter',
})
export class SpeakersFilter implements PipeTransform {
  transform(
    speakers: SpeakerInterface[],
    filter: string = ''
  ): SpeakerInterface[] {
    if (!filter) {
      return speakers;
    }
    return speakers.filter(({ name: { first, last } }) => {
      const name = `${first} ${last}`.toLowerCase();
      return name.includes(filter);
    });
  }
}
