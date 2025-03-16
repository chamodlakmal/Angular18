import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },//localhost:4200
	{ path: 'home', component: HomeComponent },//localhost:4200/home
	{ path: 'user', component: UserComponent }//localhost:4200/user

];
