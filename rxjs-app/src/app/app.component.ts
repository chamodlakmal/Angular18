import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  userService = inject(UserService)

  userAddedSubscription: any;

  isUserAdded: boolean = false

  ngOnInit(): void {
    this.userAddedSubscription = this.userService.userAddedSubject.subscribe(data => {
      this.isUserAdded = data
    })
  }

  ngOnDestroy(): void {
    this.userAddedSubscription.unsubscribe();
  }

}
