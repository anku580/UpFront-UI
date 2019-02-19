import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-merchant-order',
  templateUrl: './merchant-order.component.html',
  styleUrls: ['./merchant-order.component.css']
})
export class MerchantOrderComponent implements OnInit, OnDestroy {

  orderDetails = [
    {
      order_id : "1234",
      items : [
        "sambar",
        "Idli",
        "Dosa",
        "Vada Pao"
      ],
      status : "completed",
      time : "12:00 am"
    },
    {
      order_id : "1234",
      items : [
        "sambar",
        "Idli",
        "Dosa",
        "Vada Pao"
      ],
      status : "completed",
      time : "12:00 am"
    },
    {
      order_id : "1234",
      items : [
        "sambar",
        "Idli",
        "Dosa",
        "Vada Pao"
      ],
      status : "completed",
      time : "12:00 am"
    }
  ]
  constructor() { }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {

  }

}
