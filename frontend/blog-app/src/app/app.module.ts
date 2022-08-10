import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewBlogComponent } from './blog/components/view-blog/view-blog.component';
import { BlogListComponent } from './blog/components/blog-list/blog-list.component';
import { CreateBlogComponent } from './blog/components/create-blog/create-blog.component';
import { EditBlogComponent } from './blog/components/edit-blog/edit-blog.component';
import { UserBlogListComponent } from './blog/components/user-blog-list/user-blog-list.component';
import { LatestBlogListComponent } from './blog/components/latest-blog-list/latest-blog-list.component';
import { FeaturedBlogListComponent } from './blog/components/featured-blog-list/featured-blog-list.component';
import { LoginComponent } from './accounts/component/login/login.component';
import { RegistrationComponent } from './accounts/component/registration/registration.component';
import { ProfileComponent } from './accounts/component/profile/profile.component';
import { EditProfileComponent } from './accounts/component/edit-profile/edit-profile.component';
import { AboutusComponent } from './staticpages/component/aboutus/aboutus.component';
import { ContactusComponent } from './staticpages/component/contactus/contactus.component';
import { BlogadminComponent } from './blogadmin/blogadmin.component';
import { UserListComponent } from './blogadmin/component/user-list/user-list.component';
import { UserDetailsComponent } from './blogadmin/component/user-details/user-details.component';
import { BlogDetailsComponent } from './blogadmin/component/blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    ViewBlogComponent,
    BlogListComponent,
    CreateBlogComponent,
    EditBlogComponent,
    UserBlogListComponent,
    LatestBlogListComponent,
    FeaturedBlogListComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    EditProfileComponent,
    AboutusComponent,
    ContactusComponent,
    BlogadminComponent,
    UserListComponent,
    UserDetailsComponent,
    BlogDetailsComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
