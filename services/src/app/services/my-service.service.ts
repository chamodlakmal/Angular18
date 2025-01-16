import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({
	providedIn: 'root'
})
export class MyService {
	constructor(private loggingService: LoggingService) {
		console.log('MyService constructor called');
	}
	private message: string = 'Hello World';

	updateMessage(newMessage: string) {
		this.message = newMessage;
		this.loggingService.logData('Message updated: ' + this.message);
	}

	get getMessage() {
		return this.message;
	}
}