import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.apiUrl);
  }
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
