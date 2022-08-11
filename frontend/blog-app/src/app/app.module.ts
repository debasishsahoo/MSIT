import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AccountsModule } from './accounts/accounts.module';
import { BlogadminModule } from './blogadmin/blogadmin.module';
import { BlogModule } from './blog/blog.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountsModule,
    BlogadminModule,
    BlogModule,
    StaticpagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
