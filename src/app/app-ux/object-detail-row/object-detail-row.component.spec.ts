import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDetailRowComponent } from './object-detail-row.component';

describe('ObjectDetailRowComponent', () => {
  let component: ObjectDetailRowComponent;
  let fixture: ComponentFixture<ObjectDetailRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectDetailRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDetailRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
