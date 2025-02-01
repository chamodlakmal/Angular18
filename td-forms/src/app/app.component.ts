import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('f') form!: NgForm
  title = 'td-forms';

  onSubmit() {
    //event.preventDefault();
    console.log('Form Submitted!');
    console.log(this.form.value);
    this.form.reset();
    //console.log(this.form.value.name);
    //console.log(this.form.value.address);
    //console.log(this.form.value.email);

    //
    //    console.log(event.target[0].value);
    //    console.log(event.target[1].value);
    //    console.log(event.target[2].value);
    //
    //    console.log(event.target.name.value);
    //
    //    console.log(event.target.address.value);
    //
    //    console.log(event.target.email.value);
  }

  keyUp(email: any) {
    console.log("Key Up Event");
    console.log(email);

  }

  setData() {
    this.form.form.patchValue({
      address: '123 Main St',
      gender: 'Male',
      userData: {
        name: 'John Doe',
        email: 'cha@gmail.com'
      }
    })
  }

}
