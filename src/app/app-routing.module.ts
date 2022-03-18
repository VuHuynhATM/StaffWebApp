import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { UpdateAcountComponent } from './account-page/update-acount/update-acount.component';
import { BookDetailComponent } from './book-manager/book-detail/book-detail.component';
import { SearchBookComponent } from './book-manager/search-book/search-book.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BookUpdateComponent } from './book-manager/book-update/book-update.component';
import { NewBookComponent } from './book-manager/new-book/new-book.component';
import { SearchServiceComponent } from './book-service/search-service/search-service.component';
import { NewServiceComponent } from './book-service/new-service/new-service.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: SearchBookComponent
  },
  {
    path: 'account',
    component: AccountPageComponent
  },
  {
    path: 'update-profile',
    component: UpdateAcountComponent
  },
  {
    path: 'book-page',
    component: SearchBookComponent
  }, 
  {
    path: 'book-page/:id',
    component: BookDetailComponent
  }, 
  {
    path: 'book-edit/:id',
    component: BookUpdateComponent
  }, 
  {
    path: 'book-new',
    component: NewBookComponent
  },
  {
    path: 'service',
    component: SearchServiceComponent
  },
  {
    path: 'new-service',
    component: NewServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
