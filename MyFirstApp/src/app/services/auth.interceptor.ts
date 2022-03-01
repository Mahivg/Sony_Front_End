import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private stService: StorageService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const reqCopy = req.clone({
      headers: req.headers.set('authToken', 'KJsandasnndkjaskjdnkasndkasnkdnsa')
                          .set('asothe', 'sadsadsakdsa')
    });
    return next.handle(reqCopy);
  }

}
