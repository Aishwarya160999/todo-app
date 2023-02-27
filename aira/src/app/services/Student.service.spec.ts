import { TestBed } from '@angular/core/testing';

import { ConficServiceService } from './Student.service';

describe('ConficServiceService', () => {
  let service: ConficServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConficServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
