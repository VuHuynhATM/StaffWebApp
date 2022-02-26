import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';
import { User } from 'src/app/model/user';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {

  txtBookName!: string;

  txtEmail!: string;

  txtStudentName!: string;

  listBook!: Book[];

  listCategory!: Category[];

  user!: User;

  constructor(private bookService: BookService,
    private userService: UserServiceService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.listBook=[];
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(data => {
      this.listCategory = JSON.parse(data + "");
      localStorage.setItem('listCategory', JSON.stringify(this.listCategory));
    })
  }

  searchBook() {
    if(this.txtBookName!=""){
      this.bookService.searchbyText("0", this.txtBookName).subscribe(data => {
        this.listBook = JSON.parse(data + "");
      })
    }else{
      this.listBook=[];
    }
    console.log(this.listBook);
  }

  searchStudent() {
    this.userService.getData(this.txtStudentName).subscribe(data => {
      this.user = JSON.parse(data + "");
      console.log(this.user);
    })
  }
}
