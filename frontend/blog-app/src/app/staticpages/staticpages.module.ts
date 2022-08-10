import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
@NgModule({
  declarations: [AboutusComponent, ContactusComponent],
  imports: [CommonModule, StaticpagesRoutingModule],
})
export class StaticpagesModule {}
