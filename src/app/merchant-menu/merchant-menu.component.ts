import { Component, OnInit, ChangeDetectorRef, OnDestroy, HostListener } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { MerchantMenuServiceService } from '../services/merchant-menu-service.service';
import { switchMap } from 'rxjs/operators';
import { encodedImage } from '../shared/encodedImage'
import { foodtypes } from '../shared/foodTypes';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-merchant-menu',
  templateUrl: './merchant-menu.component.html',
  styleUrls: ['./merchant-menu.component.css']
})
export class MerchantMenuComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  subscription: Subscription;
  delete: boolean = false;
  update: boolean;
  username: string;
  category: Array<any>;
  foodTypes: Array<foodtypes>
  model: any = {};
  modelCategory: any = {};
  private dishID: any;
  private restaurantId: number;

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MerchantMenuServiceService) { }




  ngOnInit() {

    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.authService.loadUserCredentials();
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.username = currentUser.username;

    /*-------------------------------------------------  
    |                                                  |
    |  It fetches the categories from the menu service |
    |                                                  | 
    --------------------------------------------------*/
    this.route.params.pipe(switchMap((params: Params) => {
      this.restaurantId = params['id'];
      localStorage.setItem('restaurantId', JSON.stringify(this.restaurantId));
      return this.menuService.getMerchantMenu(params['id']);
    }))
      .subscribe(menu => {
        this.foodTypes = menu.menus;
        console.log(this.foodTypes)
      })


  }

  ngOnDestroy(): void {

    // this.subscription.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    // prevent the background from scrolling when the dialog is open.
    event.stopPropagation();
  }

  logOut() {

    this.router.navigateByUrl('/login');
    this.username = undefined;
    this.authService.logOut();
  }

  onSideNavScroll(event) { event.stopPropagation() }

  updateStatus() {
    this.delete = !this.delete;
    
  }
  deleteDish(dishId) {
    this.delete = true;
    console.log("Dish deleted", dishId);

    /*-------------------------------------------------  
    |                                                  |
    |       It will delete a dish from the menu        |
    |                                                  | 
    --------------------------------------------------*/
    this.menuService.deleteMerchantDish(this.restaurantId, dishId)
      .subscribe(response => {
        alert("Dish deleted");
        this.menuService.getMerchantMenu(this.restaurantId)
          .subscribe(dishes => {
            this.foodTypes = dishes.menus;
          })
      }, error => {
        console.error(error);
      })
    this.delete = false;
  }

  onSubmit() {
    console.log(JSON.stringify(this.model))
    let dishData = {
      category_id: this.model.category,
      name: this.model.dishName,
      original_price: this.model.price,
      quantity: this.model.quantity,
      is_veg: true,
      rating: 5,
      photo: encodedImage
    }
    console.log(dishData)

    this.menuService.addMerchantDish(this.restaurantId, dishData)
      .subscribe(response => {
        alert("Dish added!");

        console.log(response)
        this.menuService.getMerchantMenu(this.restaurantId)
          .subscribe(dishes => {
            this.foodTypes = dishes.menus;
          })
      }, error => {
        console.error(error);
      })
  }


  addDishCategory() {
    console.log(JSON.stringify(this.modelCategory))

    let addNewCategory = {
      name: this.modelCategory.categoryName
    }

    this.menuService.addMerchantDishCategory(this.restaurantId, addNewCategory)
      .subscribe(response => {
        alert("Category added!");
        console.log(response)
        this.menuService.getMerchantMenu(this.restaurantId)
          .subscribe(dishes => {
            this.foodTypes = dishes.menus;
          })
      }, error => {
        console.error(error);
      })
  }


  updateDish() {

    let updateDishData = {
      category_id: this.model.category,
      name: this.model.dishName,
      original_price: this.model.price,
      quantity: this.model.quantity,
      is_veg: true,
      rating: 5,
      photo: encodedImage
    }

    this.menuService.updateMerchantDish(this.restaurantId, this.dishID, updateDishData)
      .subscribe((response) => {
        alert("Dish Updated");
        console.log(response);
        this.menuService.getMerchantMenu(this.restaurantId)
          .subscribe(dishes => {
            this.foodTypes = dishes.menus;
          })
      }, err => { console.log(err) })
  }

  storeDishId(dish_id: any) {
    this.dishID = dish_id;
  }
}
