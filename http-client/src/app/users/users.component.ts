import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  http = inject(HttpClient)

  data: any;

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe((data) => { this.data = data });
  }


}
