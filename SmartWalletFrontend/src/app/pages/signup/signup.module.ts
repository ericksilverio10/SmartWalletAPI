import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RouterModule } from '@angular/router';
import { StepsModule } from 'primeng/steps';



@NgModule({
  declarations: [SignupComponent, PersonalInfoComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    RouterModule,
    SignupRoutingModule,
    StepsModule
  ]
})
export class SignupModule { }
