import { TestBed } from '@angular/core/testing';

import { UniversityApiService } from './university-api.service';

describe('UniversityApiService', () => {
  let service: UniversityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
