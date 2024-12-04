import { Component } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostListItemComponent, FormsModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  postTitle: string = ""

  posts: string[] = []

  addNewPost() {
    this.posts.push(this.postTitle)
  }

}
