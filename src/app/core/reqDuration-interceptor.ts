import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable()
export class reqDurationInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const start = Date.now();

        return next.handle(req).pipe(
            tap(
                event=> {
                    if(event.type === 4) {
                        const end = Date.now();
                        const duration = end - start;
                        console.log (`durée: ${duration} ms`);
                    }
                },
                
            )
        );
    }
}