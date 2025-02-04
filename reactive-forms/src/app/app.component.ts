import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-forms';

  restrictedNames = ['admin', 'manager'];

  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      'userData': this.fb.group({
        'username': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10), this.isRestrictedName.bind(this)]],
        'email': [null, [Validators.required, Validators.email], this.isRestrictedEmails],
      }),
      'address': [null, Validators.required],
      'hobbies': this.fb.array([])
    })
    //this.signUpForm.get('address')?.valueChanges.subscribe((value) => {
    //  console.log(value);
    //});
    //this.signUpForm.get('userData.email')?.statusChanges.subscribe((status) => {
    //  console.log(status);
    //});

    //    this.signUpForm.patchValue({
    //      'userData': {
    //        'username': 'Max',
    //        'email': 'max@gmail.com'
    //      },
    //
    //    });
  }


  //ngOnInit(): void {
  //  this.signUpForm = new FormGroup({
  //    'userData': new FormGroup({
  //      'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  //      'email': new FormControl(null, [Validators.required, Validators.email]),
  //    }),
  //    'address': new FormControl(null, Validators.required),
  //    'hobbies': new FormArray([])
  //  })
  //}

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  get isInvalidUsername() {
    return this.signUpForm.get('userData.username')?.invalid && this.signUpForm.get('userData.username')?.touched;
  }

  get isInvalidEmail() {
    return this.signUpForm.get('userData.email')?.invalid && this.signUpForm.get('userData.email')?.touched;
  }

  get isInvalidAddress() {
    return this.signUpForm.get('address')?.invalid && this.signUpForm.get('address')?.touched;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies'))?.push(control);
  }

  get hobbies() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  isInvalidHobby(index: number) {
    return (<FormArray>this.signUpForm.get('hobbies')).controls[index].invalid && (<FormArray>this.signUpForm.get('hobbies')).controls[index].touched;
  }

  isRestrictedName(control: FormControl): { [s: string]: boolean } | null {
    if (this.restrictedNames.indexOf(control.value) !== -1) {
      return { 'restrictedName': true };
    }
    return null;
  }

  isRestrictedEmails(control: FormControl): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'admin@gmail.com') {
          resolve({ 'restrictedEmail': true });
        } else {
          resolve(null);
        }
      }, 2000)
    })
    return promise;
  }
}
