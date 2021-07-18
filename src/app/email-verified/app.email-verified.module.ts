import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppEmailVerifiedComponent } from './app.email-verified.component';

const routes: Routes = [
  {
    path: '',
    component: AppEmailVerifiedComponent
  }
];

@NgModule({
  declarations: [
    AppEmailVerifiedComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    RouterModule,
    CommonModule
  ],
  providers: [],
  exports: [RouterModule]
})

export class AppEmailVerifiedModule { }
