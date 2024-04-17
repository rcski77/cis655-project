import { TestBed } from '@angular/core/testing';

import { ReadDbService } from './read-db.service';

describe('ReadDbService', () => {
  let service: ReadDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
