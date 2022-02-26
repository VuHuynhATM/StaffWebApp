import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  listCategory!: Category[];

  listBook!: Book[];

  id!: string;

  book!: Book;

  textdate!: Date;

  categortyItems!: SelectItem[];

  item!: string;

  // uploadedFiles: any[] = [];

  constructor(private route: ActivatedRoute,
    private bookService: BookService) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.listBook = JSON.parse(localStorage.getItem('listBook')!);
    this.listCategory = JSON.parse(localStorage.getItem('listCategory')!);
    this.categortyItems = [];
    for (let i = 0; i < this.listCategory.length; i++) {
      this.categortyItems.push({ label: this.listCategory[i].Name, value: this.listCategory[i].Id });
    }
    this.listBook.forEach(book => {
      if (this.id === book.Id_nfc) {
        this.book = book;
        this.textdate = new Date(this.book.Publish_year + '');
        this.item = this.book.Category_id;
      }
    });
  }
  // onUpload(event: any) {
  //   for (let file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }
  //   console.log(this.uploadedFiles);
  // }
  updateBook() {
    this.book.Category_id=this.item;
    console.log(this.book);
    this.bookService.updateBook(this.book);
    window.location.href = '/book-page';
  }

}
