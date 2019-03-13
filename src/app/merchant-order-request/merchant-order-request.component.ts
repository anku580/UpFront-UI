import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'; 


@Component({
  selector: 'app-merchant-order-request',
  templateUrl: './merchant-order-request.component.html',
  styleUrls: ['./merchant-order-request.component.css']
})
export class MerchantOrderRequestComponent implements OnInit, OnDestroy {

  private resId : number;

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

    let restaurantId = localStorage.getItem('restaurantId');
    this.resId = JSON.parse(restaurantId);
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
 
