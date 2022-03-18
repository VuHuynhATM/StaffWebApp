import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
  providers: [MessageService]
})
export class NewBookComponent implements OnInit {

  // uploadedFiles!: File;
  
  listCategory!: Category[];

  item!: string;

  categortyItems!: SelectItem[];
  
  book:Book=new Book('','','','',new Date(),'','',100,true,'');

  textdate!: Date;

  constructor(private bookService: BookService,
    private categoryService: CategoryService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.categortyItems=[];
    this.listCategory = new Array<Category>();
    this.getCategory();
    this.listCategory = JSON.parse(localStorage.getItem('listCategory')!);
    for (let i = 0; i < this.listCategory.length; i++) {
      this.categortyItems.push({ label: this.listCategory[i].Name, value: this.listCategory[i].Id });
    }
    this.item = this.listCategory[0].Id;
    this.textdate=new Date();
  }
  getCategory() {
    this.categoryService.getCategory().subscribe(data => {
      this.listCategory = JSON.parse(data + "");
      localStorage.setItem('listCategory', JSON.stringify(this.listCategory));
      for (let i = 0; i < this.listCategory.length; i++) {
        this.categortyItems.push({ label: this.listCategory[i].Name, value: this.listCategory[i].Id });
      }
    })
  }

  // onUpload(event: any) {
  //   this.uploadedFiles=event.files[0];
  //   console.log(this.uploadedFiles);
  // }
  createBook(){
    this.book.Category_id=this.item;
    console.log(this.book);
    this.bookService.insertBook(this.book);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Create service success' });
    setTimeout(() => {
      window.location.href = '/book-page';
    }, 1000);
  }
}
