import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-merchant-menu',
  templateUrl: './merchant-menu.component.html',
  styleUrls: ['./merchant-menu.component.css']
})
export class MerchantMenuComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  foodTypes = [
    {
      category : "starters",
      dishes :[
        {
          name : "Veg Manchurain",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        },
        {
          name : "Cheese Chilli",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        },
        {
          name : "Panner Roll",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        }
      ]
    },
    {
      category : "South Indian",
      dishes : [
        {
          name : "Idli",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        },
        {
          name : "Masala Dosa",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        },
        {
          name : "Vada",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        }
      ]
    },
    {
      category : "North Indian",
      dishes : [
        {
          name : "Panner Prantha",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        },
        {
          name : "Aaloo Prantha",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        },
        {
          name : "Dal Roti",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        }
      ]
    },
    {
      category : "Western",
      dishes : [
        {
          name : "Truffle Pastry",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        },
        {
          name : "Choclate Pastry",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        }
      ]
    },
    {
      category : "Chinese",
      dishes : [
        {
          name : "Hakka Noodles",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        },
        {
          name : "Schezwan Noodles",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        }
      ]
    },
    {
      category : "Dry",
      dishes : [
        {
          name : "Channa Masala",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        },
        {
          name : "Chicken",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        }
      ]
    },
    {
      category : "Deserts",
      dishes : [
        {
          name : "Gajar ka Halwa",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        },
        {
          name : "Gulab Jamun",
          imgURL : "../../assets/food_1.jpg",
          price : "120rs"
        }
      ]
    }
  ]

  food = [
    {
      "type" : "Western",
      "name" : ""
    }
  ]
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
