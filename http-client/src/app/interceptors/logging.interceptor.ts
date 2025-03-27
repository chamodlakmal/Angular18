//import { HttpInterceptorFn } from "@angular/common/http";
//
//export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
//	console.log(`Request ${JSON.stringify(req)}`);
//	console.log(`Requesting ${req.url}`);
//	return next(req);
//}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log('Logging Interceptor');
		console.log(req.url);
		//console.log(`Request ${JSON.stringify(req)}`)
		//console.log(`Requesting ${req.url}`)
		return next.handle(req);
	}

}