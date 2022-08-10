import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
  ],
  imports: [CommonModule, AccountsRoutingModule],
})
export class AccountsModule {}
