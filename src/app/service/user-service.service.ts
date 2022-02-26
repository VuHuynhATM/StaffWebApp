import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { catchError, Observable, tap } from 'rxjs';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json','Authorization':'Bearer '})
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient) { }

  getData(email:string){
    let url="http://trahetmon.site/api/User/CheckUser?em="+email;
    return this.http.get(url).pipe(
    );
  }
  updateUser(user:User){
    var url = "http://trahetmon.online/members/Edit/"+user.Id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
      })
    }
    return this.http.post(url,user, httpOptions).subscribe(data=>{
      console.log(data);
    });
    
  }
}
