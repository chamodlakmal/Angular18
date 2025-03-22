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
export class ToObservableComponent implements OnInit {


  query = inject(QueryService).query

  query$ = toObservable(this.query)

  //results$ = this.query$.pipe(switchMap((query) => of(query)))

  ngOnInit(): void {
    this.query.set('a')
    this.query.set('b')
    this.query.set('c')

    this.query$.subscribe(value => console.log(value));
  }

  onQueryChange(event: Event) {

    this.query.set((event.target as HTMLInputElement).value)

  }

}
