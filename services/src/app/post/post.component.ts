import { Component, Input } from '@angular/core';
import { MyService } from '../services/my-service.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  //@Input() message: string = '';
  //message = '';

  //myService: MyService;

  constructor() {
    //this.myService = new MyService();
    //this.message = this.myService.getMessage;
  }

  //updateMessage() {
  //  this.myService.updateMessage('Hello from PostComponent');
  //  this.message = this.myService.getMessage;
  //}

}
