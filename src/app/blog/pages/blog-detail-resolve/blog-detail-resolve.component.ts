import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogItem } from '../../models/blog-item.model';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-blog-detail-resolve',
  templateUrl: './blog-detail-resolve.component.html',
  styleUrls: ['./blog-detail-resolve.component.scss']
})
export class BlogDetailResolveComponent implements OnInit, OnDestroy {
  blog: BlogItem;
  private onDestroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log("Go here");
    this.route.params.pipe(
      takeUntil(this.onDestroy$),
      distinctUntilChanged()
    ).subscribe(params => {
      this.blog = this.route.snapshot.data.blog;
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}
