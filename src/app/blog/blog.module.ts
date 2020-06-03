import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogService } from './services/blog.service';
import { BlogDetailResolveComponent } from './pages/blog-detail-resolve/blog-detail-resolve.component';
import { BlogDetailResolver } from './resolvers/blog-detail.resolve';


@NgModule({
  declarations: [BlogListComponent, BlogDetailComponent, BlogDetailResolveComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  providers: [BlogService, BlogDetailResolver]
})
export class BlogModule { }
