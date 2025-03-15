import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)
  navigateToHomeItems() {
    this.router.navigate(['items'], { relativeTo: this.activatedRoute })
  }


}
