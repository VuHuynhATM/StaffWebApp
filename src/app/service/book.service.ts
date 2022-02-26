import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getBook(pageSize: number, pageIndex: number) {
    var url = "http://trahetmon.site/api/Book/GetBook";
    var asstoken = "";
    if (JSON.parse(sessionStorage.getItem('user')!).Token != null) {
      asstoken = JSON.parse(sessionStorage.getItem('user')!).Token;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': 'Bearer ' + asstoken,
      }),
      params: new HttpParams()
    }
    let params = new HttpParams();
    params = params.append('pageSize', pageSize);
    params = params.append('pageIndex', pageIndex);
    httpOptions.params=params;
    return this.http.get(url, httpOptions).pipe();
  }
  searchbyCategory(categoryID:string) {
    var url = "http://trahetmon.site/api/Book/GetBookByCate";
    var asstoken = "";
    if (JSON.parse(sessionStorage.getItem('user')!).Token != null) {
      asstoken = JSON.parse(sessionStorage.getItem('user')!).Token;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': 'Bearer ' + asstoken,
      }),
      params: new HttpParams()
    }
    let params = new HttpParams();
    params = params.append('cateId', categoryID);
    httpOptions.params=params;
    return this.http.get(url, httpOptions).pipe();
  }
  searchbyText(categoryID:string, text:string) {
    var url = "http://trahetmon.site/api/Book/FindBook";
    var asstoken = "";
    if (JSON.parse(sessionStorage.getItem('user')!).Token != null) {
      asstoken = JSON.parse(sessionStorage.getItem('user')!).Token;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': 'Bearer ' + asstoken,
      }),
      params: new HttpParams()
    }
    let params = new HttpParams();
    params = params.append('cateId', categoryID);
    params = params.append('keyword', text);
    httpOptions.params=params;
    return this.http.get(url, httpOptions).pipe();
  }
  insertBook(book:Book){
    var url = "http://trahetmon.online/books/Create";
    // var asstoken = "";
    // if (JSON.parse(sessionStorage.getItem('user')!).Token != null) {
    //   asstoken = JSON.parse(sessionStorage.getItem('user')!).Token;
    // }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        // 'Authorization': 'Bearer ' + asstoken,
      })
    }
    // var body=JSON.stringify(book);
    // console.log(body);
    return this.http.post(url,book, httpOptions).subscribe(data=>{
      console.log(data);
    });
    
  }
  updateBook(book:Book){
    var url = "http://trahetmon.online/books/Edit/"+book.Id_nfc;
    // var asstoken = "";
    // if (JSON.parse(sessionStorage.getItem('user')!).Token != null) {
    //   asstoken = JSON.parse(sessionStorage.getItem('user')!).Token;
    // }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        // 'Authorization': 'Bearer ' + asstoken,
      })
    }
    // var body=JSON.stringify(book);
    // console.log(body);
    return this.http.post(url,book, httpOptions).subscribe(data=>{
      console.log(data);
    });
    
  }
}
