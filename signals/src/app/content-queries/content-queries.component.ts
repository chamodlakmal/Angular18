import { Component, contentChild, contentChildren, effect, ElementRef } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-content-queries',
  standalone: true,
  imports: [],
  templateUrl: './content-queries.component.html',
  styleUrl: './content-queries.component.css'
})
export class ContentQueriesComponent {

  h1 = contentChildren<ElementRef>('h1')
  widget = contentChild(WidgetComponent, { read: ElementRef })

  constructor() {
    effect(() => {
      console.log(this.h1(), this.widget());
    })
  }

}
