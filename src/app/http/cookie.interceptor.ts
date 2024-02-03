import { Inject, Injectable, Optional } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { REQUEST_COOKIE } from './request.provider';

@Injectable({
    providedIn: 'root'
})
export class CookiInterceptor implements HttpInterceptor {

    constructor(@Optional() @Inject(REQUEST_COOKIE) private reqCookie: string) {
        console.log('+++', reqCookie);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('--- intercepted ---', this.reqCookie);
        console.log(req);
        let request = this.reqCookie ? req.clone({
            setHeaders: {
                'Authorization': this.reqCookie
            }
        }) : req;
        return next.handle(request);
    }
}