import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import {
  SpeakersRequestInterface,
  SpeakersResponseInterface,
} from '@app/speakers/types/speakers.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpeakersService {
  constructor(private http: HttpClient) {}
  get({
    page,
  }: SpeakersRequestInterface): Observable<SpeakersResponseInterface> {
    const url = `${environment.SPEAKERS_BASE_API}/?results=20&page=${page}`;
    return this.http
      .get<SpeakersResponseInterface>(url)
      .pipe(map((response) => response));
  }
}
