import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/app.login.module').then(m => m.AppLoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/app.register.module').then(m => m.AppRegisterModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/app.forgot-password.module').then(m => m.AppForgotPasswordModule)
  },
  // {
  //   path: '404',
  //   component:
  // },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
