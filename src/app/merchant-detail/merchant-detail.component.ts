import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.css']
})
export class MerchantDetailComponent implements OnInit {

  adminDetails = {
    name : "Anku Garg",
    mobileNumber : "9876543210",
    imgUrl : "../../assets/user.png",
    email : "ankugarg580@gmail.com",
    address : "Muneshwara Temple Road, HAL 2nd Stage, Kodhiali, Banglore",
    resturantDetails : {
      name : "Richmod cafe and restaurant",
      type : "Vegeterian, non-vegeterian, Chinese",
      phoneNo : "7869541230",
      location : "32, walter highway, luxa street, North London, Europe",
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
