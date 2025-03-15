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

export const routes: Routes = [
	{ path: 'not-found', component: PageNotFoundComponent },//localhost:4200/not-found
	{ path: '', component: FirstComponent, canDeactivate: [DeactivateGuardService], resolve: { first: FirstResolveService } },//localhost:4200
	{
		path: 'second',
		component: SecondComponent,
		canActivate: [AuthGuardService]
	},//localhost:4200/second
	{ path: 'third', component: ThirdComponent, data: { name: "kamal", age: 29 } },//localhost:4200/third
	{
		path: 'product',
		canActivateChild: [AuthGuardService],
		component: ProductsComponent, children: [
			{ path: ':id/:name', component: ProductComponent }
		]
	},//localhost:4200/product
	{ path: '**', redirectTo: '/not-found' },//localhost:4200/anything
];
