import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-data-fetcher',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './data-fetcher.component.html',
  styleUrl: './data-fetcher.component.css'
})
export class DataFetcherComponent {

  private http = inject(HttpClient);

  jsonData: any;

  textData: any;

  imageData: any;

  imageSrc: string | null = null;

  getJsonData() {
    this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe((data) => {
      console.log(data)
      this.jsonData = data
    });
  }

  getTextData() {
    this.http.get('data.txt', { responseType: 'text' }).subscribe((data) => {
      console.log(data)
      this.textData = data
    }
    );
  }

  getImageData() {
    this.http.get('sample.jpg', { responseType: 'arraybuffer' }).subscribe((data) => {
      this.imageData = data

      const blob = new Blob([data], { type: 'image/jpeg' });
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result as string;
      }
      reader.readAsDataURL(blob);
    });
  }

}
