import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
   import { Observable, throwError } from 'rxjs';
   import { retry, catchError } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
   
   @Injectable()
   export class GlobalInterceptor implements HttpInterceptor {

    constructor(public router: Router, private authService : AuthService) {}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const token  = this.authService.userValue.token;
      request = request.clone({headers : request.headers.set('Authorization', `Bearer ${token}`)});

      return next.handle(request)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            if (error instanceof HttpErrorResponse) {
                if (error.error instanceof ErrorEvent) {
                  console.error("Error Event");
                } else {
                  console.log(`error status : ${error.status} ${error.statusText}`);
                  switch (error.status) {
                    case 401:      //login
                      this.router.navigateByUrl("/login");
                      console.log(`redirect to login`);
                      break;
                    case 403:     //forbidden
                      this.router.navigateByUrl("/login");
                      console.log(`redirect to login`);
                      break;
                  }
                }
              }
              else {
                console.error("Other Errors");
              }
            return throwError(error);
          })
        )
    }
   }