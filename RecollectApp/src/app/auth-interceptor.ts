import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

constructor(private authService : AuthService){

    console.log(' constructor -Auth service called .. ')

}

    intercept(req : HttpRequest<any>, next : HttpHandler)
    {
        console.log('Insode auth inteceptor...');
        // console.log('Insode auth inteceptor...'+this.authService.getToken());
        // const authToken = this.authService.getToken();

        const authRequest = req.clone({
            //req.headers.append('Authorization', `Bearer ${authToken}`);
            headers: req.headers.set('Authorization' ,'Bearer '+ 'authToken')
          });

          console.log(req.headers);
          return next.handle(authRequest);

          
    }

}