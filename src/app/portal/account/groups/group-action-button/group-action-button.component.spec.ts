import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupActionButtonComponent } from './group-action-button.component';

describe('GroupActionButtonComponent', () => {
  let component: GroupActionButtonComponent;
  let fixture: ComponentFixture<GroupActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
