import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
	{ path: 'not-found', component: PageNotFoundComponent },//localhost:4200/not-found
	{ path: '', component: FirstComponent },//localhost:4200
	{ path: 'second', component: SecondComponent },//localhost:4200/second
	{ path: 'third', component: ThirdComponent },//localhost:4200/third
	{
		path: 'product', component: ProductsComponent, children: [
			{ path: ':id/:name', component: ProductComponent }
		]
	},//localhost:4200/product
	{ path: '**', redirectTo: '/not-found' },//localhost:4200/anything
];
