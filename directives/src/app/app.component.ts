import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = "Chamod";

  isLoggedIn: boolean = true;

  status: string = 'failed';

  marks: number = 70;

  isContentVisible: boolean = true;

  toggleButton() {
    this.isContentVisible = !this.isContentVisible
  }

  role: string = 'admin';//editor, user
}
