import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-detail-row',
  templateUrl: './object-detail-row.component.html',
  styleUrls: ['./object-detail-row.component.scss']
})
export class ObjectDetailRowComponent implements OnInit {
  @Input()
  header = '';

  @Input()
  value = '';

  ngOnInit() {
  }

}
