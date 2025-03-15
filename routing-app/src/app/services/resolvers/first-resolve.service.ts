import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";

interface First {
	name: string;
	age: number;
}

@Injectable({
	providedIn: 'root'
})
export class FirstResolveService implements Resolve<First> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): First {
		return { name: "kamal", age: 29 };
	}
}