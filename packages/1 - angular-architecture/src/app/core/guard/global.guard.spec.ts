import { TestBed, async, inject } from '@angular/core/testing';

import { GlobalGuard } from './global.guard';

describe('GlobalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalGuard]
    });
  });

  it('should ...', inject([GlobalGuard], (guard: GlobalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
