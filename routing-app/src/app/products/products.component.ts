import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private router: Router) {

  }
  onProductClick() {
    this.router.navigate(['/product', 2, 'product2'], {
      queryParams: { param3: 3, param4: 4 },
      queryParamsHandling: 'merge'
    })
  }
}
