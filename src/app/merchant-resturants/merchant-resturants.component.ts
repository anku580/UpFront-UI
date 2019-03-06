import { Component, OnInit } from '@angular/core';
import { MerchantResturantsService } from '../services/merchant-resturants.service';

@Component({
  selector: 'app-merchant-resturants',
  templateUrl: './merchant-resturants.component.html',
  styleUrls: ['./merchant-resturants.component.css']
})
export class MerchantResturantsComponent implements OnInit {

  resturants = [];
  currentOwner : string;
  constructor(private resturantService : MerchantResturantsService) { }

  ngOnInit() {

    this.currentOwner = JSON.parse(localStorage.getItem('currentUser'));
    
    this.resturantService.getResturants()
    .subscribe( resturant => {
      console.log(resturant.restaurants)
      this.resturants = resturant.restaurants;
    })   
  }

}
