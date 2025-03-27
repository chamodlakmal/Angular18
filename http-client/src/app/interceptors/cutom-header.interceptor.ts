import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const customHeaderInterceptor: HttpInterceptorFn = (req, next) => {
	const authService = inject(AuthService);
	const authToken = authService.getAuthToken;
	const modifiedrequest = req.clone({
		headers: req.headers.set('custom-header', 'custom-header-value').set('Authorization', `Bearer ${authToken}`)
	});
	return next(modifiedrequest);
}