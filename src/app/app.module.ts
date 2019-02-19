import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MearchantLandingComponent } from './mearchant-landing/mearchant-landing.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { MatSidenavModule } from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

import { MatExpansionModule } from '@angular/material/expansion';
import { MerchantMenuComponent } from './merchant-menu/merchant-menu.component';
import { MerchantOrderComponent } from './merchant-order/merchant-order.component';
import { MerchantOrderHistoryComponent } from './merchant-order-history/merchant-order-history.component';
import { MerchantNavbarComponent } from './merchant-navbar/merchant-navbar.component';
import { MerchantDetailComponent } from './merchant-detail/merchant-detail.component';
import { MerchantOrderRequestComponent } from './merchant-order-request/merchant-order-request.component';

const routes: Routes = [
  { path: '', redirectTo: 'merchant', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'merchant/menu', component: MerchantMenuComponent },
  // {path: 'merchant/order', component: MerchantOrderComponent},
  // {path: 'merchant/order/history', component: MerchantOrderComponent},
  { path: 'admin', component: MerchantDetailComponent },
  {
    path: 'merchant/navbar', component: MerchantNavbarComponent, children: [
      {
        path: 'order', component: MerchantOrderComponent,
      },
      {
        path: 'history', component: MerchantOrderHistoryComponent
      },
      {
        path: 'request', component: MerchantOrderRequestComponent,
      },
    ]
  },
  { path: 'merchant', component: MearchantLandingComponent },
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MearchantLandingComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    MerchantMenuComponent,
    MerchantOrderComponent,
    MerchantOrderHistoryComponent,
    MerchantNavbarComponent,
    MerchantDetailComponent,
    MerchantOrderRequestComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes, {
        enableTracing: true
      }
    ), MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, BrowserAnimationsModule, MatSidenavModule,
    MatExpansionModule,MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
