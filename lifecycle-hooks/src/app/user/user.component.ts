import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name: string = ""

  counter: number = 0;

  //  constructor() {
  //    console.log("Constructor triggered");
  //    console.log(this.name);
  //  }
  //
  //  ngOnChanges(changes: SimpleChanges): void {
  //    console.log("ngOnChanges triggered")
  //    console.log(changes)
  //  }
  //
  //  ngOnInit(): void {
  //    console.log("ngOnInit triggered")
  //    console.log(this.name);
  //  }
  //
  //  ngDoCheck(): void {
  //    console.log("ngDoCheck triggered");
  //
  //  }
  //
  incrementCounter() {
    this.counter++;
  }
  //
  //  ngAfterContentInit(): void {
  //    console.log("ngAfterContentInit triggered");
  //
  //  }
  //
  //  ngAfterContentChecked(): void {
  //    console.log("ngAfterContentChecked triggered");
  //
  //  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit triggered");

  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked triggered");

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy triggered");

  }
}
