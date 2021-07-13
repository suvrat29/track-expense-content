import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppLoginComponent } from './app.login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
      path: '',
      component: AppLoginComponent
    }
  ];

@NgModule({
  declarations: [
    AppLoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  exports: [RouterModule]
})

export class AppLoginModule { }
