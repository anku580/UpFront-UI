import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantOrderRequestComponent } from './merchant-order-request.component';

describe('MerchantOrderRequestComponent', () => {
  let component: MerchantOrderRequestComponent;
  let fixture: ComponentFixture<MerchantOrderRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantOrderRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantOrderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
