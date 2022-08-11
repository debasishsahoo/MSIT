import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';
import { FeaturedBlogListComponent } from './components/featured-blog-list/featured-blog-list.component';
import { LatestBlogListComponent } from './components/latest-blog-list/latest-blog-list.component';
import { UserBlogListComponent } from './components/user-blog-list/user-blog-list.component';

const routes: Routes = [
  { path: 'create', component: CreateBlogComponent },
  { path: 'edit/:id', component: EditBlogComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: ViewBlogComponent },
  { path: 'blog/feature', component: FeaturedBlogListComponent },
  { path: 'blog/leatest', component: LatestBlogListComponent },
  { path: 'blog/user/:id', component: UserBlogListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
