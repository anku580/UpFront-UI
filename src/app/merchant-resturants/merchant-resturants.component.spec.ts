import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantResturantsComponent } from './merchant-resturants.component';

describe('MerchantResturantsComponent', () => {
  let component: MerchantResturantsComponent;
  let fixture: ComponentFixture<MerchantResturantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantResturantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
