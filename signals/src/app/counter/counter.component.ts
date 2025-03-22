import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter: WritableSignal<number> = signal(0)

  showCount: WritableSignal<boolean> = signal(false)

  conditionalCount = computed(() => {
    console.log("Executing the computed");
    if (this.showCount()) {
      return `the counter value is ${this.counter()}`
    } else {
      return "Nothing to show"
    }
  })

  //  numbers: WritableSignal<number[]> = signal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  //
  //  oddNumbers: Signal<number[]> = computed(() => {
  //    console.log("odd numbers");
  //
  //    return this.numbers().filter((number) => number % 2 != 0)
  //  })

  //doubleCounter: Signal<number> = computed(() => {
  //  console.log("computed Signal")
  //  return this.counter() * 2
  //})

  setValue() {
    this.counter.set(10)
  }

  incrementValue() {
    this.counter.update(count => count + 1)
  }

  decrementValue() {
    this.counter.update(count => count - 1)
  }

  getCondionalCount() {
    console.log(this.conditionalCount());
  }

  updateShowCount() {
    this.showCount.update((value) => !value)
  }

  //  logDoubleCounterValue() {
  //    console.log(this.doubleCounter())
  //  }
  //
  //  logOddNumbers() {
  //    console.log(this.oddNumbers())
  //  }
  //
  //  updateNumbers() {
  //    this.numbers.update(numbers => numbers.map(number => number * 3))
  //  }
}
