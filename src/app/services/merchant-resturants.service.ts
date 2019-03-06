import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseURL';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class MerchantResturantsService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHttpmsgService,
    private restangular: Restangular) { }

  getResturants(): Observable<any> {
    return this.http.get(`${baseURL}restaurant/api/v1/merchant/restaurants`);
  }
}
