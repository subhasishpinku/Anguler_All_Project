import { TestBed } from '@angular/core/testing';

import { FoodlistApiService } from './foodlist-api.service';

describe('FoodlistApiService', () => {
  let service: FoodlistApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodlistApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
