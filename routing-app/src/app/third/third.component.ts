import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.activateRoute.snapshot.data)

    this.activateRoute.data.subscribe(data => {
      console.log("subscribe", data)
    })
  }

}
