import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

  constructor(private router: Router) {

  }

  navigateToThird() {
    this.router.navigateByUrl('/third');
  }
}
