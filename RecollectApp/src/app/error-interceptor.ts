import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse
  } from "@angular/common/http";
  import { catchError } from "rxjs/operators";
  import { throwError } from "rxjs";
  import { Injectable } from "@angular/core";
  import { MatDialog } from "@angular/material/dialog";
import { ErrorComponent } from "./validate/error/error.component";
import { ErrorPopupComponent } from "./error-popup/error-popup.component";
  
 
  
  
  @Injectable()
  export class ErrorInterceptor implements HttpInterceptor {
  
    constructor(private dialog: MatDialog) {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = "An unknown error occurred!";
          if (error.message) {
            errorMessage = error.error.message;
          }
          this.dialog.open(ErrorPopupComponent, {data: {message: errorMessage}});
          // this.errorService.throwError(errorMessage);
          return throwError(error);
        })
      );
    }
  }