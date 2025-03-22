import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, throwError } from 'rxjs';

import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rxjs-interop.component.html',
  styleUrl: './rxjs-interop.component.css'
})
export class RxjsInteropComponent implements OnInit, OnDestroy {

  //  private subscription!: Subscription
  //
  //  counterObservable = interval(1000)
  //
  //  conunterSignal = toSignal(this.counterObservable, { initialValue: 0, manualCleanup: true })

  errorMesssage: string = ""

  observable = throwError(() => new Error('An Error Occured'))

  errorSignal = toSignal(this.observable)

  ngOnInit(): void {
    //this.subscription = this.counterObservable.subscribe()
    try {
      this.errorSignal()
    } catch (error: any) {
      this.errorMesssage = error.message
    }
  }

  ngOnDestroy(): void {
    //if (this.subscription) {
    //  this.subscription.unsubscribe()
    //}
  }
}
