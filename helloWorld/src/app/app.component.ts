import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { AppHighlightDirective } from './directives/app-highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgClass, AppHighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'ChamiViews';
  isLoggedIn: boolean = true;
  status: string = "failed";
  marks: number = 12;

  isContentVisible: boolean = true;

  toggleVisibility() {
    this.isContentVisible = !this.isContentVisible
  }

  role: string = 'user'; //admin, editor, user

  students: string[] = ["ABC", "DEF", "XYZ"];

  users: User[] = []

  addNewUser() {
    let length = this.users.length
    let user: User = { id: length + 1, name: `User${length + 1}`, email: `user${length + 1}@gmail.com` }
    this.users.push(user)
  }

  //  deleteUser(user: User) {
  //    //console.log(user)
  //
  //    let indexoftheUser = this.users.indexOf(user)
  //    console.log(indexoftheUser)
  //    this.users.splice(indexoftheUser, 1)
  //  }

  deleteUser(indexoftheUser: number) {
    console.log(indexoftheUser)
    this.users.splice(indexoftheUser, 1)
  }

  nestedItems: { category: string, items: string[] }[] = [
    { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
    { category: "Animals", items: ["Lion", "Dog", "Cat"] }
  ]

  isActive: boolean = false;

  get getActiveColor(): string {
    return this.isActive ? 'red' : 'green';
  }

  get getTextTransform(): string {
    return this.isActive ? 'uppercase' : 'lowercase';
  }
}

interface User {
  id: number,
  name: string,
  email: string
}