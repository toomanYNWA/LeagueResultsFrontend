import { TestBed } from '@angular/core/testing';

import { ClubsPageService } from './clubs-page.service';

describe('ClubsPageService', () => {
  let service: ClubsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
