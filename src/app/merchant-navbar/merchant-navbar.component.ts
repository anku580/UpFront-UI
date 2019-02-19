import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-merchant-navbar',
  templateUrl: './merchant-navbar.component.html',
  styleUrls: ['./merchant-navbar.component.css']
})
export class MerchantNavbarComponent implements OnInit, OnDestroy {

  orders= [
    {
      "items" : [
        "Chicken",
        "Aaloo Prantha"
      ],
      "quantity" : [
        "1",
        "2"
      ],
      "time" : "12:45 am",
    },
    {
      "items" : [
        "Chicken",
        "Aaloo Prantha"
      ],
      "quantity" : [
        "1",
        "2"
      ],
      "time" : "12:45 am",
    },
    {
      "items" : [
        "Chicken",
        "Aaloo Prantha",
        "Butter Naan",
        "Plain Naan"
      ],
      "quantity" : [
        "1",
        "2",
        "1",
        "2"
      ],
      "time" : "12:45 am",
    }
  ]
  mobileQuery: MediaQueryList;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) { }


  private _mobileQueryListener: () => void;

  ngOnInit() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
