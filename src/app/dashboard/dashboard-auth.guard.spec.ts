import { TestBed, async, inject } from '@angular/core/testing';

import { DashboardAuthGuard } from './dashboard-auth.guard';

describe('DashboardAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardAuthGuard]
    });
  });

  it('should ...', inject([DashboardAuthGuard], (guard: DashboardAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
