import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CreatePasswordComponent } from './create-password/create-password.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'personal-info'},
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'create-password', component: CreatePasswordComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
