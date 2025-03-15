import { Component, OnInit } from '@angular/core';
import { IDeactivateGuard } from '../services/guards/deactivate-guard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements IDeactivateGuard, OnInit {
  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      console.log("resolve", data)
    })
  }

  canDeactivate(): boolean {
    return confirm('Are you sure you want to leave?');
  }

}
