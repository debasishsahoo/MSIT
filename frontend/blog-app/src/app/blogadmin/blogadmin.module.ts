import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogadminRoutingModule } from './blogadmin-routing.module';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserBlogListComponent } from './component/user-blog-list/user-blog-list.component';
import { BlogDetailsComponent } from './component/blog-details/blog-details.component';
import { BlogListComponent } from './component/blog-list/blog-list.component';

@NgModule({
  declarations: [
    LoginComponent,
    UserListComponent,
    UserDetailsComponent,
    UserBlogListComponent,
    BlogDetailsComponent,
    BlogListComponent,
  ],
  imports: [CommonModule, BlogadminRoutingModule],
})
export class BlogadminModule {}
