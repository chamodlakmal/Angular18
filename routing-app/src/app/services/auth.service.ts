import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	isLoggedIn = false;

	login() {
		this.isLoggedIn = true;
	}

	logOut() {
		this.isLoggedIn = false;
	}

	isUserLoggedIn() {

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.isLoggedIn);
			}, 1000);
		});
	}
}