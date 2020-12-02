import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  postMessage(message) {
    this.http.post('http://localhost:2000/api/posts', message)
    .subscribe((response) => {
      console.log(response);
    });
  }

}
