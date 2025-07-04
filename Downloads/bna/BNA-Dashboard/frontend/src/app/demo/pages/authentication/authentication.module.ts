import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { RegisterComponent } from './register/register.component';
import LoginComponent from './login/login.component';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    RegisterComponent,
    LoginComponent
  ],
})
export class AuthenticationModule {}
