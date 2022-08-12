import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupRoutingModule } from './signup-routing.module';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SignupRoutingModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
