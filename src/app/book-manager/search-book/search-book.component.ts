import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  listCategory!: Category[];

  listBook!: Book[];

  categortyItems!: SelectItem[];

  item!: string;

  pageSize: number = 2;

  pageIndex: number = 0;

  loading: boolean = true;

  txtSearch!: string;

  constructor(
    private categoryService: CategoryService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.listCategory = new Array<Category>();
    this.getCategory();
    this.listBook = new Array<Book>();
    setTimeout(() => {
      this.getbook();
    }, 100);
    this.categortyItems = [];
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(data => {
      this.listCategory = JSON.parse(data + "");
      localStorage.setItem('listCategory', JSON.stringify(this.listCategory));
      this.categortyItems.push({ label: 'All Category', value: '0' });
      for (let i = 0; i < this.listCategory.length; i++) {
        this.categortyItems.push({ label: this.listCategory[i].Name, value: this.listCategory[i].Id });
      }
    console.log(this.listCategory);

    })
  }
  getbook() {
    this.bookService.searchbyCategory("0").subscribe(data => {

      if (this.listBook.length == 0) {
        this.listBook = JSON.parse(data + "");
      } else {
        this.listBook.push.apply(this.listBook, JSON.parse(data + ""));
      }
      localStorage.setItem('listBook', JSON.stringify(this.listBook));
    })
  }
  nextPage() {
    if (this.loading) {
      this.pageIndex++;
      this.getbook();
      this.loading = false;
    }
  }
  showMore() {
    this.loading = true;
    this.nextPage();
  }
  dropClick() {
    this.bookService.searchbyCategory(this.item).subscribe(data => {
      this.listBook = JSON.parse(data + "");
      console.log(this.listBook);
      localStorage.removeItem('listBook');
      localStorage.setItem('listBook', JSON.stringify(this.listBook));
    })
  }
  searchtext() {
    localStorage.removeItem('listBook');
    this.bookService.searchbyText(this.item, this.txtSearch).subscribe(data => {
      this.listBook = JSON.parse(data + "");
      localStorage.removeItem('listBook');
      localStorage.setItem('listBook', JSON.stringify(this.listBook));
    })
  }
}
