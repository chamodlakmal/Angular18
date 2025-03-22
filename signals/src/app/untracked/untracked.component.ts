import { Component, effect, OnInit, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-untracked',
  standalone: true,
  imports: [],
  templateUrl: './untracked.component.html',
  styleUrl: './untracked.component.css'
})
export class UntrackedComponent implements OnInit {

  count = signal(0);
  name = signal('world');

  constructor() {
    effect(() => {
      untracked(() => {
        console.log(`Hello ${this.name()} , count is ${this.count()}`);
      })

    });
  }

  ngOnInit() {
    setTimeout(() => {
      console.log("count triggered")
      this.count.set(3)
    }, 3000);
    setTimeout(() => {
      console.log("name triggered")
      this.name.set('Angular')
    }, 6000);
  }
}
