import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  listCategory!: Category[];

  listBook!: Book[];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  sortKey!:any;
  constructor() { }

  ngOnInit(): void {
    this.listCategory = new Array<Category>();
    this.listCategory.push(new Category('1', 'Toán', true));
    this.listCategory.push(new Category('2', 'Văn', true));
    this.listCategory.push(new Category('3', 'Anh', true));
    this.listCategory.push(new Category('4', 'Tin', true));

    this.listBook = new Array<Book>();
    this.listBook.push(new Book('1', 'Toán 1', 'https://sachcanhdieu.com/wp-content/uploads/book/Toan-1/000.jpg?x', 'Toán 1', new Date('2019-01-16'), 'Toán company', 'BGD', 50000, true, '1'));
    this.listBook.push(new Book('2', 'Toán 2', 'https://sachcanhdieu.com/wp-content/uploads/book/Toan-1/000.jpg?x', 'Toán 1', new Date('2019-01-16'), 'Toán company', 'BGD', 50000, true, '1'));
    this.listBook.push(new Book('3', 'Toán 3', 'https://sachcanhdieu.com/wp-content/uploads/book/Toan-1/000.jpg?x', 'Toán 1', new Date('2019-01-16'), 'Toán company', 'BGD', 50000, true, '2'));
    this.listBook.push(new Book('4', 'Toán 4', 'https://sachcanhdieu.com/wp-content/uploads/book/Toan-1/000.jpg?x', 'Toán 1', new Date('2019-01-16'), 'Toán company', 'BGD', 50000, true, '3'));
    this.listBook.push(new Book('5', 'Toán 5', 'https://sachcanhdieu.com/wp-content/uploads/book/Toan-1/000.jpg?x', 'Toán 1', new Date('2019-01-16'), 'Toán company', 'BGD', 50000, true, '4'));
    this.listBook.push(new Book('6', 'Toán 6', 'https://sachcanhdieu.com/wp-content/uploads/book/Toan-1/000.jpg?x', 'Toán 1', new Date('2019-01-16'), 'Toán company', 'BGD', 50000, true, '1'));

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }
  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
