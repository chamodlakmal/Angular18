import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userAddedSubject = new Subject<boolean>();

  addUser() {
    this.userAddedSubject.next(true);
  }
}
