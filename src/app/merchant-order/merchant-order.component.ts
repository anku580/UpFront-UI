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
      quantites : [
        "2",
        "1",
        "4",
        "3"
      ],
      amount : "500",
      pay_mode : "cash",
      status : "completed",
      order_time : "12:00 am",
      order_completion_time : "12:30 am"
    },
    {
      order_id : "1234",
      items : [
        "sambar",
        "Idli",
        "Dosa",
        "Vada Pao"
      ],
      quantites : [
        "2",
        "1",
        "4",
        "3"
      ],
      amount : "500",
      pay_mode : "cash",
      status : "completed",
      order_time : "12:00 am",
      order_completion_time : "12:30 am"
    },
    {
      order_id : "1234",
      items : [
        "sambar",
        "Idli",
        "Dosa",
        "Vada Pao"
      ],
      quantites : [
        "2",
        "1",
        "4",
        "3"
      ],
      amount : "500",
      pay_mode : "Paytm",
      status : "completed",
      order_time : "12:00 am",
      order_completion_time : "12:30 am"
    }
  ]
  constructor() { }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {

  }

}
