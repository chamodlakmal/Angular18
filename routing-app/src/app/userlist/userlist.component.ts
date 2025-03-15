import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  userService = inject(UserService);

  users = this.userService.getUsers();

  @Input() set page(page: string) {
    console.log('page set parent', page);
  }

}
