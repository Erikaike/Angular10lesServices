import { TestBed } from '@angular/core/testing';

import { RequestDurationService } from './request-duration.service';

describe('RequestDurationService', () => {
  let service: RequestDurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestDurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
