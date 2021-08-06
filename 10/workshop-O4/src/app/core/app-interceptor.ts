import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let reqStream$ = next.handle(req);

    if (req.url.startsWith('/api')) {
      reqStream$ = next.handle(req.clone({
        url: req.url.replace('/api/', API_URL),
        withCredentials: true
      }));
    }

    return reqStream$.pipe(
      catchError((err) => {
        this.router.navigate(['/error'], { queryParams: { error: err.message } });
        return throwError(err);
      })
    );
  }

}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};
