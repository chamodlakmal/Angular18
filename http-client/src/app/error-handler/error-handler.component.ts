import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import e from 'cors';
import { catchError, retry, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-error-handler',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.css'
})
export class ErrorHandlerComponent {

  http = inject(HttpClient)
  data: any
  error: any

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1sa').pipe(retry({
      count: 3,
      delay: (error, count) => {
        console.log(`Tried ${count} times`);

        if (error.status === 404) {
          throw error
        } else {
          return timer(2000)
        }
      }
    }), catchError(this.handleError.bind(this))).subscribe({
      next: data => {
        console.log(data)
        this.data = data
      },
      error: error => {
        console.error(error)
      }
    });
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);

    if (error.status === 0) {
      this.error = `No network error. Pls check the connection`
    } else {
      this.error = `Backend returned error code ${error.status}. ${error.message}`
    }

    return throwError(() => 'Something bad happened; please try again later.');
  }

}
