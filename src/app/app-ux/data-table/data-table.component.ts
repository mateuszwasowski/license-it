import {Component, Input, OnChanges} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnChanges {
  @Input() idColumn = true;
  @Input() header: Array<string>;
  @Input() data: any;
  @Input() singleElementUrl: string;
  @Input() callbacks = {};
  @Input() order = [];

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (this.order.length > 0) {
      this.data = this.prepareData();
    }
  }

  getValue(index, element) {
    const name = this.header[index - 1];
    if (name && this.callbacks[name]) {
      return this._sanitizer.bypassSecurityTrustHtml(this.callbacks[name](element));
    }

    return element;
  }

  private prepareData() {
    const array = [];
    if (this.data) {
      for (const elementKey in this.data) {
        if (this.data.hasOwnProperty(elementKey)) {
          const element = this.data[elementKey];
          const singleElement = [element['id']];
          for (const singleTableElement of this.order) {
            const value = element[singleTableElement];
            singleElement.push(value !== undefined ? value : '');
          }
          array.push(singleElement);
        }
      }
    }
    return array;
  }
}
