import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthDIInterceptor implements HttpInterceptor {
	private authService = inject(AuthService);
	token = this.authService.getAuthToken;
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const clonerequest = req.clone({
			headers: req.headers.set('x-authentication-token', this.token)
		});
		return next.handle(clonerequest);
	};
}