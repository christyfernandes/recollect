import { TestBed } from '@angular/core/testing';

import { AuthDashBoardGuard } from './auth-dash-board.guard';

describe('AuthDashBoardGuard', () => {
  let guard: AuthDashBoardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDashBoardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
