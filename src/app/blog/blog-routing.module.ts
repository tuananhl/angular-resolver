import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogDetailResolveComponent } from './pages/blog-detail-resolve/blog-detail-resolve.component';
import { BlogDetailResolver } from './resolvers/blog-detail.resolve';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: ':id',
    component: BlogDetailComponent
  },
  {
    path: 'resolve/:id',
    component: BlogDetailResolveComponent,
    resolve: {
      blog: BlogDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
