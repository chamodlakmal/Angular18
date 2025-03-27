import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from "./post-list/post-list.component";
import { DataFetcherComponent } from "./data-fetcher/data-fetcher.component";
import { QueryParamsComponent } from "./query-params/query-params.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostListComponent, DataFetcherComponent, QueryParamsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-client';
}
