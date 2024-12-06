import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dpEducationExample';

  imageUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOFmjGchTMwQriXqezOovYKqXWK3YXUnFlQ&s";
  areaLabel: string = "This is open something"
  colSpan = 2

  isDisabled: boolean = false;

  color: string = 'red';
  backgroundColor: string = 'blue';

  isActive: boolean = false;

  name: string = "Kamal1";

  value: string = ""

  twoWay: string = ""

  buttonClicked() {
    console.log("Button Clicked")
  }

  keyDown(ref: HTMLInputElement) {

    console.log(ref.value);
    this.value = ref.value;

  }
}
