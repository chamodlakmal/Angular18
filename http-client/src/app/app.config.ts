import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
//import { loggingInterceptor } from './interceptors/logging.interceptor';
import { customHeaderInterceptor } from './interceptors/cutom-header.interceptor';
import { responseLoggingIntercetor } from './interceptors/response-logging.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideHttpClient(withInterceptors([customHeaderInterceptor]), withInterceptorsFromDi()), {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor,
    multi: true
  }]
};
