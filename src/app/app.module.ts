import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { AccountPageComponent } from './account-page/account-page.component';
import { PanelMenuComponent } from './layout/panel-menu/panel-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewServiceComponent } from './book-service/new-service/new-service.component';
import { NewBookComponent } from './book-manager/new-book/new-book.component';
import { SearchBookComponent } from './book-manager/search-book/search-book.component';
import { SearchServiceComponent } from './book-service/search-service/search-service.component';
import { UpdateAcountComponent } from './account-page/update-acount/update-acount.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { BookDetailComponent } from './book-manager/book-detail/book-detail.component';
import { BookUpdateComponent } from './book-manager/book-update/book-update.component';


//google

//prime
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ImageModule} from 'primeng/image';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {InputNumberModule} from 'primeng/inputnumber';

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
    SearchBookComponent,
    SearchServiceComponent,
    UpdateAcountComponent,
    BookDetailComponent,
    BookUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    PanelMenuModule,
    ImageModule,
    DataViewModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    FileUploadModule,
    InputNumberModule
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
