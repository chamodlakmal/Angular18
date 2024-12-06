import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  childMessage: string = "This is child message";

  userName: string = "Chamod";

  private salary: number = 25000;

  protected age: number = 13;

  @Output() dataEmitter = new EventEmitter<string>();

  sendData() {
    this.dataEmitter.emit(this.childMessage);
  }

}
