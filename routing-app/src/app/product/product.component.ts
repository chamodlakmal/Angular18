import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  product!: Product;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.product = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    }

    this.activatedRoute.params.subscribe((data: Params) => {
      this.product = {
        id: data['id'],
        name: data['name']
      }
    })

    console.log(this.activatedRoute.snapshot.queryParams)
    console.log(this.activatedRoute.snapshot.fragment)

    this.activatedRoute.queryParams.subscribe(data => {
      console.log("subscribe", data)
    })

    this.activatedRoute.fragment.subscribe(data => {
      console.log("subscribe", data)
    })
  }

  loadSampleProduct() {
    this.router.navigate(['/product', 2, 'def'], {
      queryParams: { page: 1, search: 'sample' },
      fragment: 'loading'
    });
  }

}

interface Product {
  id: number;
  name: string;
}
