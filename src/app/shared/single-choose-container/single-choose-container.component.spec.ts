import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChooseContainerComponent } from './single-choose-container.component';

describe('SingleChooseContainerComponent', () => {
  let component: SingleChooseContainerComponent;
  let fixture: ComponentFixture<SingleChooseContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleChooseContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleChooseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
