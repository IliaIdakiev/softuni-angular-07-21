import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
