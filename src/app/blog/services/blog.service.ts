import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogItem } from '../models/blog-item.model';


@Injectable()
export class BlogService {
  constructor(private http: HttpClient) { }

  public getListBlogs(): Observable<BlogItem[]> {
    return this.http.get<BlogItem[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public getBlogDetail(postId: number): Observable<BlogItem> {
    return this.http.get<BlogItem>(`https://jsonplaceholder.typicode.com/posts/${ postId }`);
  }
}