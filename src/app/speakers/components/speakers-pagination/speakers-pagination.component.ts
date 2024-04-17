import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'srt-speakers-pagination',
  templateUrl: './speakers-pagination.component.html',
  standalone: true,
})
export default class SpeakersPagination {
  @Input() currentPage: number = 1;
  @Output() $pageChange = new EventEmitter<number>();

  public changePage(page: number): void {
    this.$pageChange.emit(page);
  }
}
