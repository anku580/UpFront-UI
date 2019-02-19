import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MearchantLandingComponent } from './mearchant-landing.component';

describe('MearchantLandingComponent', () => {
  let component: MearchantLandingComponent;
  let fixture: ComponentFixture<MearchantLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MearchantLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MearchantLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
