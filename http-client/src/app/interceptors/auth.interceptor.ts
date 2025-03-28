import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const authToken = authService.getAuthToken;
  const cloneRequest = req.clone({
    headers: req.headers.set('x-authentication-token', authToken)
  });
  return next(cloneRequest);
};
