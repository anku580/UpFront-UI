import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private inj: Injector, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authService = this.inj.get(AuthService);

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // Get the auth header from the service.
        //const authToken = authService.getToken();
        if (currentUser && currentUser.token) {
            console.log("Interceptor: " + currentUser);
            // Clone the request to add the new header.
            req= req.clone({ headers: req.headers.set('Authorization', 'Token ' + currentUser.token) });
            console.log(req)
        }
        // Pass on the cloned request instead of the original request.
        return next.handle(req);
    }
}

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    constructor(private inj: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authService = this.inj.get(AuthService);
        const authToken = authService.getToken();

        return next
            .handle(req)
            .pipe(tap((event: HttpEvent<any>) => {
                // do nothing
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401 && authToken) {
                        console.log('Unauthorized Interceptor: ', err);
                        authService.checkJWTtoken();
                    }
                }
            }));
    }
}