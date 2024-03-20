import { TestBed } from '@angular/core/testing';

import { FixturesPageService } from './fixtures-page.service';

describe('FixturesPageService', () => {
  let service: FixturesPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixturesPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
