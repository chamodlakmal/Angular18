import { Component, model } from '@angular/core';

@Component({
  selector: 'app-model-inputs',
  standalone: true,
  imports: [],
  templateUrl: './model-inputs.component.html',
  styleUrl: './model-inputs.component.css'
})
export class ModelInputsComponent {

  checked = model(false)

  toggle() {
    this.checked.update((value) => !value)
  }
}
