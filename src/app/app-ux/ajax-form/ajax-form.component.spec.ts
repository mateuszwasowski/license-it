import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxFormComponent } from './ajax-form.component';

describe('AjaxFormComponent', () => {
  let component: AjaxFormComponent;
  let fixture: ComponentFixture<AjaxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
