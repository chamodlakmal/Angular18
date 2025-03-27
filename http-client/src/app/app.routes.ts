import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { provideHttpClient, withInterceptors, withRequestsMadeViaParent } from '@angular/common/http';
import { responseLoggingIntercetor } from './interceptors/response-logging.interceptor';

export const routes: Routes = [
	{
		path: 'users',
		providers: [provideHttpClient(withInterceptors([responseLoggingIntercetor]), withRequestsMadeViaParent())],
		component: UsersComponent
	}
];
