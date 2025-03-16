import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;
  ngOnInit(): void {
    //this.intervalSubscription = interval(1000).subscribe(count => {
    //  console.log(count)
    //})

    let customObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count)

        if (count === 3) {
          observer.complete()
        }
        if (count > 5) {
          observer.error('Count is greater than 5')
        }
        count++;
      }, 1000)
    })

    this.intervalSubscription = customObservable.subscribe(
      {
        next: data => {
          console.log(data)
        },
        error: error => {
          console.log(error)
        },
        complete: () => {
          console.log('Completed')
        }
      })
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
