import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }
  getCategory() {
    var url = "http://trahetmon.site/api/Category/GetCate";
    var asstoken="";
    if(JSON.parse(sessionStorage.getItem('user')!).Token!=null){
      asstoken=JSON.parse(sessionStorage.getItem('user')!).Token;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': 'Bearer '+asstoken,
      })
    }
    return this.http.get(url,httpOptions).pipe();
  }
}
