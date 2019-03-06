import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-order-history',
  templateUrl: './merchant-order-history.component.html',
  styleUrls: ['./merchant-order-history.component.css']
})
export class MerchantOrderHistoryComponent implements OnInit {

  orderHistoryDetails = [
    {
      orderId : "12",
      userName : "Anku Garg",
      amount : "874.00",
      orderTime : "7:54pm",
      orderCompleteTime : "8:30pm",
      status : "completed"
    },
    {
      orderId : "12",
      userName : "Anku Garg",
      amount : "874.00",
      orderTime : "7:54pm",
      orderCompleteTime : "8:30pm",
      status : "completed"
    },
    {
      orderId : "12",
      userName : "Anku Garg",
      amount : "874.00",
      orderTime : "7:54pm",
      orderCompleteTime : "8:30pm",
      status : "completed"
    },
    {
      orderId : "12",
      userName : "Anku Garg",
      amount : "874.00",
      orderTime : "7:54pm",
      orderCompleteTime : "8:30pm",
      status : "completed"
    },
    {
      orderId : "12",
      userName : "Anku Garg",
      amount : "874.00",
      orderTime : "7:54pm",
      orderCompleteTime : "8:30pm",
      status : "completed"
    },
    {
      orderId : "12",
      userName : "Anku Garg",
      amount : "874.00",
      orderTime : "7:54pm",
      orderCompleteTime : "8:30pm",
      status : "completed"
    }
]
  constructor() { }

  ngOnInit() {
  }

}
