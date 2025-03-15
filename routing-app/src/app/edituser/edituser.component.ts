import { Component, inject, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-edituser',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent {
  userService = inject(UserService);
  user: any;
  @Input() set id(id: string) {
    console.log('id set', id);
    this.user = this.userService.getUserById(+id);
  }

  @Input() set page(page: string) {
    console.log('page set child', page);
  }

}
