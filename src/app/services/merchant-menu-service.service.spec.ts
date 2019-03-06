import { TestBed } from '@angular/core/testing';

import { MerchantMenuServiceService } from './merchant-menu-service.service';

describe('MerchantMenuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerchantMenuServiceService = TestBed.get(MerchantMenuServiceService);
    expect(service).toBeTruthy();
  });
});
