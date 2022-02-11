import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { UpdateAcountComponent } from './account-page/update-acount/update-acount.component';
import { BookDetailComponent } from './book-manager/book-detail/book-detail.component';
import { SearchBookComponent } from './book-manager/search-book/search-book.component';
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
  },
  {
    path:'update-profile',
    component:UpdateAcountComponent
  },
  {
    path:'book-page',
    component:SearchBookComponent
  },
  {
    path:'book-page/:id',
    component:BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
