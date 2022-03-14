import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';
import { User } from 'src/app/model/user';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css'],
  providers: [MessageService]
})
export class NewServiceComponent implements OnInit {

  txtBookName!: string;

  txtEmail!: string;

  txtStudentName!: string;

  listBook!: Book[];

  listRental!: Book[];

  listCategory!: Category[];

  user!: User;

  constructor(private bookService: BookService,
    private userService: UserServiceService,
    private categoryService: CategoryService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.listBook = [];
    this.listRental = [];
    setTimeout(() => {
      this.getCategory();
    }, 100);
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(data => {
      this.listCategory = JSON.parse(data + "");
      localStorage.setItem('listCategory', JSON.stringify(this.listCategory));
    })
  }

  searchBook() {
    setTimeout(() => {
      if (this.txtBookName != "") {
        this.bookService.searchbyText("0", this.txtBookName).subscribe(data => {
          this.listBook = JSON.parse(data + "");
        })
      } else {
        this.listBook = [];
      }
    }, 100);
  }

  searchStudent() {
    this.userService.getData(this.txtStudentName).subscribe(data => {
      this.user = JSON.parse(data + "");
      console.log(data);
    })
  }

  addCart(book: Book) {
    if (this.listRental.length > 0) {
      var index = -1;
      for(var i=0;i<this.listRental.length;i++){
        if(this.listRental[i].Id_nfc===book.Id_nfc){
          index=i;
        }
      }
      console.log(index);
      if (index !== -1) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Book is exist' });
      } else {
        this.listRental.push(book);
        this.txtBookName = "";
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' });
      }
    } else {
      this.listRental.push(book);
      this.txtBookName = "";
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' });
    }

  }
  removeitem(book: Book) {
    const index = this.listRental.indexOf(book);
    if (index !== -1) {
      this.listRental.splice(index, 1);
    }
  }
  CreateService(){
    console.log(this.listRental);
  }
}
