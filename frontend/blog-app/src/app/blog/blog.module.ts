import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';
import { FeaturedBlogListComponent } from './components/featured-blog-list/featured-blog-list.component';
import { LatestBlogListComponent } from './components/latest-blog-list/latest-blog-list.component';
import { UserBlogListComponent } from './components/user-blog-list/user-blog-list.component';

@NgModule({
  declarations: [
    CreateBlogComponent,
    EditBlogComponent,
    BlogListComponent,
    ViewBlogComponent,
    FeaturedBlogListComponent,
    LatestBlogListComponent,
    UserBlogListComponent,
  ],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
