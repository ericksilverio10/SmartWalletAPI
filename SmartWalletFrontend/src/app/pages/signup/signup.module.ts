import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RouterModule } from '@angular/router';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [SignupComponent, PersonalInfoComponent, ConfirmationComponent, CreatePasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    SignupRoutingModule,
    StepsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule, 
    InputMaskModule,
    DividerModule,
    ProgressSpinnerModule,
    ToastModule,
    SkeletonModule,
    FormsModule,
    ConfirmDialogModule
  ]
})
export class SignupModule { }
