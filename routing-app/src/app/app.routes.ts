import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/guards/auth.guard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { FirstResolveService } from './services/resolvers/first-resolve.service';
import { canMatchGuard } from './services/guards/can-match.guard';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import { HomeComponent } from './home/home.component';
import { HomeitemsComponent } from './homeitems/homeitems.component';

const resolveTitle = () => Promise.resolve('Third');

export const routes: Routes = [
	{ path: 'not-found', component: PageNotFoundComponent },//localhost:4200/not-found
	{
		path: '',
		title: 'First',
		component: FirstComponent, resolve: { first: FirstResolveService }
	},//localhost:4200
	{
		path: 'second',
		title: 'Second',
		component: SecondComponent,
		canActivate: [AuthGuardService]
	},//localhost:4200/second
	{
		path: 'third',
		title: resolveTitle,
		component: ThirdComponent,
		data: { name: "kamal", age: 29 }
	},//localhost:4200/third
	{
		path: 'product',
		canActivateChild: [AuthGuardService],
		component: ProductsComponent, children: [
			{ path: ':id/:name', component: ProductComponent }
		]
	},//localhost:4200/product
	{
		path: 'users', component: UserlistComponent, data: { 'page': 1 }, children: [
			{ path: '', component: DefaultUserComponent },
			{ path: 'edit/:id', component: EdituserComponent }
		]
	},//localhost:4200/users
	{ path: 'home', component: HomeComponent },//localhost:4200/home
	{ path: 'home/items', component: HomeitemsComponent },//localhost:4200/home/items
	{ path: '**', redirectTo: '/not-found' },//localhost:4200/anything
];
