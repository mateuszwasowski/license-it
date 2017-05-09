import { TestBed, async, inject } from '@angular/core/testing';

import { PortalGuardGuard } from './portal-auth.guard';

describe('PortalGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortalGuardGuard]
    });
  });

  it('should ...', inject([PortalGuardGuard], (guard: PortalGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
