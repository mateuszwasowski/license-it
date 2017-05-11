import { TestBed, inject } from '@angular/core/testing';

import { CreateLinkService } from './create-link.service';

describe('CreateLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateLinkService]
    });
  });

  it('should ...', inject([CreateLinkService], (service: CreateLinkService) => {
    expect(service).toBeTruthy();
  }));
});
