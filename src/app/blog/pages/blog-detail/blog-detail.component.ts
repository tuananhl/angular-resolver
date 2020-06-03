import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Observable, Subject } from 'rxjs';
import { BlogItem } from '../../models/blog-item.model';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  blog$: Observable<BlogItem>;
  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly blogService: BlogService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.onDestroy$)).subscribe((params: any) => {
      const { id } = params;
      this.blog$ = this.blogService.getBlogDetail(id);
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
