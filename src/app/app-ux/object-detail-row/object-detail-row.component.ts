import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-object-detail-row',
  templateUrl: './object-detail-row.component.html',
  styleUrls: ['./object-detail-row.component.scss']
})
export class ObjectDetailRowComponent {
  @Input()
  header = '';

  @Input()
  value = '';
}
