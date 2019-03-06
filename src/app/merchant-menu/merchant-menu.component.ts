import { Component, OnInit, ChangeDetectorRef, OnDestroy, HostListener } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { MerchantMenuServiceService } from '../services/merchant-menu-service.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-merchant-menu',
  templateUrl: './merchant-menu.component.html',
  styleUrls: ['./merchant-menu.component.css']
})
export class MerchantMenuComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  subscription: Subscription;
  delete: boolean;
  username: string;
  category: Array<any>;
  foodTypes: Array<any>
  private restaurantId : number;

  food = [
    {
      "type": "Western",
      "name": ""
    }
  ]

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
    this.subscription = this.authService.getUsername()
      .subscribe(name => { console.log(name); this.username = name; })
    
    /*-------------------------------------------------  
    |                                                  |
    |  It fetches the categories from the menu service |
    |                                                  | 
    --------------------------------------------------*/
    this.route.params.pipe(switchMap((params: Params) => {
      this.restaurantId = params['id'];
      return this.menuService.getMerchantMenu(params['id']);
    }))
    .subscribe(menu => {
        this.foodTypes = menu.menu_list;
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

  onSideNavScroll(event){ event.stopPropagation() }

  deleteDish(dishId) {
    console.log("Dish deleted", dishId);

    /*-------------------------------------------------  
    |                                                  |
    |       It will delete a dish from the menu        |
    |                                                  | 
    --------------------------------------------------*/
    this.menuService.deleteMerchantDish(this.restaurantId, dishId)
    .subscribe( response => {
      alert("Dish deleted");
    }, error => {
      console.error(error);
    })
    this.delete = false;
  }

}
