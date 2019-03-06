import { TestBed } from '@angular/core/testing';

import { MerchantResturantsService } from './merchant-resturants.service';

describe('MerchantResturantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerchantResturantsService = TestBed.get(MerchantResturantsService);
    expect(service).toBeTruthy();
  });
});
