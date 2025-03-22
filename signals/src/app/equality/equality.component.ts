import { JsonPipe } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { isEqual } from 'lodash';

@Component({
  selector: 'app-equality',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './equality.component.html',
  styleUrl: './equality.component.css'
})
export class EqualityComponent implements OnInit {

  data = signal({ name: "John", age: 30 }, { equal: isEqual })

  computedData = computed(() => {
    console.log("Executing the computed");
    return this.data()
  })

  constructor() {
    //effect(() => {
    //  console.log("Executing the effect");
    //  console.log("Data changed", this.data())
    //})
  }

  ngOnInit() {
    setTimeout(() => {
      console.log("set timeout executed");

      this.data.set({ name: "John", age: 50 })
    }, 4000)
  }

}
