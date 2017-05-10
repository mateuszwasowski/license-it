import { TestBed, inject } from '@angular/core/testing';

import { BackendSimpleCommunicationService } from './backend-simple-communication.service';

describe('BackendSimpleCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendSimpleCommunicationService]
    });
  });

  it('should ...', inject([BackendSimpleCommunicationService], (service: BackendSimpleCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
