import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() idColumn = true;
  @Input() header: Array<string>;
  @Input() data: Array<any>;
  @Input() singleElementUrl: string;

  constructor() { }

}
