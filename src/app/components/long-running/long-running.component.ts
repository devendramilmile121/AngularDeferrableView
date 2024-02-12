import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'long-running',
	standalone: true,
	imports: [],
	templateUrl: './long-running.component.html',
})
export class LongRunningComponent implements OnInit {

	FOR_LOOP_COUNT: number = 10000;
	items: string[] = [];

	ngOnInit(): void {
		for (let index = 0; index < this.FOR_LOOP_COUNT; index++) {
			this.items.push(this.makeid())
		}
	}

	makeid(length: number = 100) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
		  result += characters.charAt(Math.floor(Math.random() * charactersLength));
		  counter += 1;
		}
		return result;
	}
}
