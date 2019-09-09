import { TestBed } from '@angular/core/testing';

import { PollsService } from './polls.service';

describe('PollsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollsService = TestBed.get(PollsService);
    expect(service).toBeTruthy();
  });
});
