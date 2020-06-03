import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs';
import { BlogItem } from '../../models/blog-item.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs$: Observable<BlogItem[]>;

  constructor(private readonly blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs$ = this.blogService.getListBlogs();
  }

}
