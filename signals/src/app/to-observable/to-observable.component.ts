import { Component, inject, OnInit } from '@angular/core';
import { QueryService } from '../services/query.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { of, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-to-observable',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './to-observable.component.html',
  styleUrl: './to-observable.component.css'
})
export class ToObservableComponent {

  query = inject(QueryService).query

  query$ = toObservable(this.query)

  results$ = this.query$.pipe(switchMap((query) => of(query)))

  onQueryChange(event: Event) {

    this.query.set((event.target as HTMLInputElement).value)

  }

}
