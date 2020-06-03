import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BlogItem } from '../models/blog-item.model';
import { BlogService } from '../services/blog.service';
import { delay, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BlogDetailResolver implements Resolve<BlogItem> {
  constructor(private blogService: BlogService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.blogService.getBlogDetail(route.params['id']).pipe(delay(2000), catchError(error => {
      this.router.navigateByUrl('/404');
      return of(null);
    }));
  }
}