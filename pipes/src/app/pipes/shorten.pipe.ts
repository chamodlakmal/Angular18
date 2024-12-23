import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'shorten',
	standalone: true
})
export class ShortenPipe implements PipeTransform {
	transform(value: any, ...args: any[]) {
		console.log("Value : " + value)
		console.log("Arguments : " + args);
		if (value.length > args[0])
			return value.substr(0, args[0]) + " ..."
		else
			return value

	}


}