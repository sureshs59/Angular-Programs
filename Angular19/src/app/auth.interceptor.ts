import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';


// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private auth:AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    const token = this.auth.getToken();

    if (token){
      req = req.clone({
        setHeaders: {
          Authorization : `Bearer ${token}`
        }
      });
    }
    return next.handle(req);

  }
}