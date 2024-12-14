import { Component, ViewContainerRef } from '@angular/core';
import { UserComponent } from './user/user.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifecycle-hooks';

  name: string = "Chamod";

  constructor(private viewContainer: ViewContainerRef) {

  }

  loadComponent() {
    return UserComponent;
  }

  addComponent() {
    this.viewContainer.createComponent(UserComponent)
  }

  removeComponent() {
    this.viewContainer.remove();
  }

  changeName() {
    this.name = "Kamal";
  }
}
