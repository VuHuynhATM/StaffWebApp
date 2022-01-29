import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'account',
    component:AccountPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
