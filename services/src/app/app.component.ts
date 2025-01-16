import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostComponent } from "./post/post.component";
import { MyService } from './services/my-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  title = 'services';

  //message: string = ''

  //myService: MyService;

  @ViewChild(UserComponent) userComponent!: UserComponent;

  //constructor(private myService: MyService) {
  //  //this.myService = new MyService();
  //  this.message = this.myService.getMessage;
  //}

  ngAfterViewInit(): void {
    //this.message = this.userComponent.message;
  }

}
