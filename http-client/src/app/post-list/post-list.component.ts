import { Component, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  private postService = inject(PostService)

  posts$ = this.postService.getPosts();

}
