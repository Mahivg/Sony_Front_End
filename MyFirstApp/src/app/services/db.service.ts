import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private httpClient: HttpClient) {}


  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      headers: new HttpHeaders({
        'dbToken': 'Renakjsdnkasnjdsanjdsak'
      })
    })
  }

  getPostById(postId: number) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }

  AddPost(post: Post) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', post)
  }

  updatePost(post: Post) {
    return this.httpClient.put('https://jsonplaceholder.typicode.com/posts', post)
  }

  deletePost() {
    return this.httpClient.delete('https://jsonplaceholder.typicode.com/posts')
  }

}
