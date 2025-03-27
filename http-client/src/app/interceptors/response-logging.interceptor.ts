import { HttpEventType, HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";

export const responseLoggingIntercetor: HttpInterceptorFn = (req, next) => {
	return next(req).pipe(tap(event => {
		if (event.type === HttpEventType.Response) {
			console.log('Response Logging Interceptor');
			console.log(req.url);
			//console.log(req.url, event.status);
		}
	}))
}