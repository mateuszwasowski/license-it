import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLicenseDetailsComponent } from './single-license-details.component';

describe('SingleLicenseDetailsComponent', () => {
  let component: SingleLicenseDetailsComponent;
  let fixture: ComponentFixture<SingleLicenseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLicenseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLicenseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
