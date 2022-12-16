import { TestBed } from '@angular/core/testing';

import { PasswordDifficultyService } from './password-difficulty.service';

describe('PasswordDifficultyService', () => {
  let service: PasswordDifficultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordDifficultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
