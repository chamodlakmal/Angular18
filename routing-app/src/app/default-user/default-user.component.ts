import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-user',
  standalone: true,
  imports: [],
  templateUrl: './default-user.component.html',
  styleUrl: './default-user.component.css'
})
export class DefaultUserComponent {

  @Input() set page(page: string) {
    console.log('page set default child', page);
  }
}
