import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';

import { authInterceptor } from './auth.interceptor';
import { AuthService } from '../services/auth.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('authInterceptor', () => {
  let authService: AuthService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting()
      ]
    });
    authService = TestBed.inject(AuthService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should add authentication token to request', () => {
    const mockToken = 'token';
    spyOnProperty(authService, 'getAuthToken').and.returnValue(mockToken);

    const httpClient = TestBed.inject(HttpClient);
    httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe();

    const req = httpTesting.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.headers.has('x-authentication-token')).toBeTrue();
    expect(req.request.headers.get('x-authentication-token')).toBe(mockToken);
    req.flush([]);

  });
});
