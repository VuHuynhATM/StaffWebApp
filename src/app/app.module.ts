import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { AccountPageComponent } from './account-page/account-page.component';
import { PanelMenuComponent } from './layout/panel-menu/panel-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//google

//prime
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './layout/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import { NewServiceComponent } from './book-service/new-service/new-service.component';
import { NewBookComponent } from './book-manager/new-book/new-book.component';
import { SearchBookComponent } from './book-manager/search-book/search-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderComponent,
    AccountPageComponent,
    PanelMenuComponent,
    NewServiceComponent,
    NewBookComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    PanelMenuModule
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
