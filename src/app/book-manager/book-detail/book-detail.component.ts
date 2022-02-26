import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  listCategory!: Category[];

  listBook!: Book[];

  id!:string;

  book!:Book;
  
  textdate!:Date;
  constructor(private route: ActivatedRoute) { 
    this.id=this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.listBook = JSON.parse(localStorage.getItem('listBook')!);
    this.listCategory = JSON.parse(localStorage.getItem('listCategory')!);
    this.listBook.forEach(book => {
      if(this.id===book.Id_nfc){
        this.book=book;
        this.textdate=new Date(this.book.Publish_year+'');
        console.log(this.textdate);
      }
    });
  }

}
