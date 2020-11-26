import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../service/authentication-service.service';
import { catchError, filter } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class JWTInterceptorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService,private router:Router, private route:ActivatedRoute ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = this.authenticationService.currentUserValue;

    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
     // return next.handle(request);

    }
    return next.handle(request).pipe(catchError((err) => {
          if(err.status==401){
            this.authenticationService.logout()
            this.router.navigateByUrl(   this.route.snapshot.queryParams['returnUrl'] || '/');
        
          }
          return throwError(err)
    }));

  }
}
