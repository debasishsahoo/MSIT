import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserBlogListComponent } from './component/user-blog-list/user-blog-list.component';
import { BlogDetailsComponent } from './component/blog-details/blog-details.component';
import { BlogListComponent } from './component/blog-list/blog-list.component';

const routes: Routes = [
  { path: 'admin/signin', component: LoginComponent },
  { path: 'admin/user', component: UserListComponent },
  { path: 'admin/user/:id', component: UserDetailsComponent },
  { path: 'admin/blog/user/:id', component: UserBlogListComponent },
  { path: 'admin/blog/:id', component: BlogDetailsComponent },
  { path: 'admin/blog', component: BlogListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogadminRoutingModule {}
