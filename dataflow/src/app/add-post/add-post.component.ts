import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  @Output() postTitleEmitter = new EventEmitter<string>();

  postTitle: string = "";

  addNewPost() {
    this.postTitleEmitter.emit(this.postTitle)
  }

}
