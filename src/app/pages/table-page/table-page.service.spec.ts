import { TestBed } from '@angular/core/testing';

import { TablePageService } from './table-page.service';

describe('TablePageService', () => {
  let service: TablePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
