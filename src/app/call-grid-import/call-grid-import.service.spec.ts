import { TestBed } from '@angular/core/testing';

import { CallGridImportService } from './call-grid-import.service';

describe('CallGridImportService', () => {
  let service: CallGridImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallGridImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
