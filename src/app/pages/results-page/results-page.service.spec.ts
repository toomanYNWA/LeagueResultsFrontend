import { TestBed } from '@angular/core/testing';

import { ResultsPageService } from './results-page.service';

describe('ResultsPageService', () => {
  let service: ResultsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
