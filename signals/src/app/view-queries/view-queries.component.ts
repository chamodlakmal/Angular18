import { Component, effect, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-view-queries',
  standalone: true,
  imports: [],
  templateUrl: './view-queries.component.html',
  styleUrl: './view-queries.component.css'
})
export class ViewQueriesComponent {
  //age = 45;

  requiredElement = viewChild.required('requiredH1')

  optionalElement = viewChild('optionalElement')

  showOptionalElement = signal(false)

  constructor() {
    effect(() => {
      console.log(this.requiredElement(), " optional : ", this.optionalElement());

    })
  }

  toggle() {
    this.showOptionalElement.update(value => !value)
  }
}
