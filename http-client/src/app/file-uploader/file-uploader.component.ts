import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.css'
})
export class FileUploaderComponent {

  private http = inject(HttpClient)

  formGroup = new FormGroup({
    file: new FormControl(null)
  })

  selectedFile: File | null = null;

  progress = -1;
  uploadComplete = false

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.files)
    if (input.files) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    if (!this.selectedFile) return

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:3000/api/upload', formData, { reportProgress: true, observe: 'events' }).subscribe((event) => {
      console.log(event)
      switch (event.type) {
        case HttpEventType.UploadProgress:
          if (event.total) {
            console.log(`Uploaded ${Math.round(100 * event.loaded / event.total)}%`)
            this.progress = Math.round(100 * event.loaded / event.total)
          }
          break;
        case HttpEventType.Response:
          console.log('Upload complete', event.body)
          this.progress = 100;
          this.uploadComplete = true
          break;
        default:
          break;
      }
    })
  }

}
