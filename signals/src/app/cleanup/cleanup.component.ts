import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-cleanup',
  standalone: true,
  imports: [],
  templateUrl: './cleanup.component.html',
  styleUrl: './cleanup.component.css'
})
export class CleanupComponent {

  count = signal(0);

  constructor() {
    effect((onCleanup) => {
      const timer = setInterval(() => {
        console.log(`Count is ${this.count()}`);
      }, 1000);
      onCleanup(() => {
        console.log("Clearing interval");

        clearInterval(timer);
      });
    })
  }
}
