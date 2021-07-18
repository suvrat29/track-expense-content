import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppResetPasswordComponent } from './app.reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AppResetPasswordComponent
  }
];

@NgModule({
  declarations: [
    AppResetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [RouterModule]
})

export class AppResetPasswordModule { }
