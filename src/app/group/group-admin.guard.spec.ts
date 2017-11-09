import { TestBed, async, inject } from '@angular/core/testing';

import { GroupAdminGuard } from './group-admin.guard';

describe('GroupAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupAdminGuard]
    });
  });

  it('should ...', inject([GroupAdminGuard], (guard: GroupAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
