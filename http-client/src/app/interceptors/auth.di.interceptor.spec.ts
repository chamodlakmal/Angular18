import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { AuthService } from "../services/auth.service";
import { TestBed } from "@angular/core/testing";
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { AuthDIInterceptor } from "./auth.di.interceptor";

describe("AuthDIInterceptor", () => {
	let httpTesting: HttpTestingController;
	let authService: AuthService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AuthService,
				provideHttpClient(withInterceptorsFromDi()),
				provideHttpClientTesting(),
				{ provide: HTTP_INTERCEPTORS, useClass: AuthDIInterceptor, multi: true }
			]
		})
		authService = TestBed.inject(AuthService);
		httpTesting = TestBed.inject(HttpTestingController);
	})

	it("should add authentication token to request", () => {
		const mockToken = 'token';
		spyOnProperty(authService, 'getAuthToken').and.returnValue(mockToken);

		const httpClient = TestBed.inject(HttpClient);
		httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe();

		const req = httpTesting.expectOne('https://jsonplaceholder.typicode.com/users');
		expect(req.request.headers.has('x-authentication-token')).toBeTrue();
		expect(req.request.headers.get('x-authentication-token')).toBe(mockToken);
		req.flush([]);
	})
})