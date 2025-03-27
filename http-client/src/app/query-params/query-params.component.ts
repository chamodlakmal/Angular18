import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CustomHttpParameterCodec } from '../services/CustomHttpParameterCodec';

@Component({
  selector: 'app-query-params',
  standalone: true,
  imports: [],
  templateUrl: './query-params.component.html',
  styleUrl: './query-params.component.css'
})
export class QueryParamsComponent implements OnInit {
  http = inject(HttpClient);

  ngOnInit(): void {
    //let params = { userId: 1, id: 1 };
    const httpParams = new HttpParams({ encoder: new CustomHttpParameterCodec() });
    let params = httpParams.set('user Id', '1 2').set('id', '1');
    //let headers = { 'X-My-Custom-Header': 'value' }
    const headers = new HttpHeaders().set('X-My-Custom-Header', 'value');
    this.http.get('https://jsonplaceholder.typicode.com/posts', { params: params, headers: headers, observe: 'response' }).subscribe((data) => {
      console.log(data)
    });
    this.decodeExample()
  }

  decodeExample() {
    let encodedKey = 'user+id'//user id

    let encodedValue = '1+2'//1 2

    let customHttpParameterCodec = new CustomHttpParameterCodec();
    console.log("decode key ", customHttpParameterCodec.decodeKey(encodedKey));
    console.log("decode value ", customHttpParameterCodec.decodeValue(encodedValue));

  }

}
