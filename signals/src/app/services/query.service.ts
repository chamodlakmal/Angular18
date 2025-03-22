import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  query = signal('')
}
