import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { UserComponent } from './user/user.component';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent, UserComponent, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //  @ViewChild(UserComponent) userComponent!: UserComponent;
  //
  message: string = ""

  //constructor() {
  //  console.log(this.userComponent);
  //}
  //ngAfterViewInit(): void {
  //  console.log(this.userComponent);
  //  this.message = this.userComponent.childMessage;
  //}
  handleDataFromChild(message: string) {
    console.log(message)
    this.message = message
  }
}
