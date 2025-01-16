import { Component } from '@angular/core';
import { MyService } from '../services/my-service.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  message = '';

  constructor(private myService: MyService) {
    this.message = this.myService.getMessage;
  }

  updateMessage() {
    this.myService.updateMessage('Hello from UserComponent');
    this.message = this.myService.getMessage;
  }
}
