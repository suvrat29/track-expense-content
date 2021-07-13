import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRegisterComponent } from './app.register.component';

const routes: Routes = [
    {
      path: '',
      component: AppRegisterComponent
    }
  ];

@NgModule({
  declarations: [
    AppRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  exports: [RouterModule]
})

export class AppRegisterModule { }
