import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantOrderHistoryComponent } from './merchant-order-history.component';

describe('MerchantOrderHistoryComponent', () => {
  let component: MerchantOrderHistoryComponent;
  let fixture: ComponentFixture<MerchantOrderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantOrderHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
