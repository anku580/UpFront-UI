import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseURL';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class MerchantMenuServiceService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHttpmsgService) { }

  getMerchantMenu(id: number): Observable<any> {
    return this.http.get(`${baseURL}menu/api/v1/restaurants/${id}/menu/merchantview`);
  }

  getResturantDetails(): Observable<any> {
    return this.http.get(`${baseURL}/resturant/api/v1/resturants/`);
  }

  addMerchantDish(res_id: number, dish : any) {
    return this.http.post(`${baseURL}menu/api/v1/restaurants/${res_id}/menu`, dish)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  addMerchantDishCategory(res_id: number, category_name : any) {
    return this.http.post(`${baseURL}menu/api/v1/restaurants/${res_id}/category`, category_name)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  updateMerchantDish(res_id: number, dish_id: number, updatedDish: any): Observable<any> {
    return this.http.put(`${baseURL}menu/api/v1/restaurants/${res_id}/menu/${dish_id}`, updatedDish)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  deleteMerchantDish(res_id: number, dish_id: number): Observable<any> {
    return this.http.delete(`${baseURL}menu/api/v1/restaurants/${res_id}/menu/${dish_id}`);
  }
}
