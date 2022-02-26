import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from '../model/user';
import { UserServiceService } from './user-service.service';



@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {

  u!: User;
  error: string="";
  private auth2!: gapi.auth2.GoogleAuth
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)
  constructor(private user: UserServiceService) {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '445803574555-8nd6ss2dhdaj1o5qppp9ems147b07ea7.apps.googleusercontent.com',
        // scope:'email',
        // fetch_basic_profile:false,
        hosted_domain: 'fpt.edu.vn'
      })
    })
  }

  public signIn() {
    this.auth2.signIn({
      scope: 'https://www.googleapis.com/auth/gmail.labels'
    }).then(user => {
      this.subject.next(user);
      this.user.getData(user.getBasicProfile().getEmail()).subscribe(data => {
        this.u = JSON.parse(data + "");
        sessionStorage.setItem('user',JSON.stringify(this.u));
        console.log(this.u);
        if (this.u.Email.split('@')[1] == "fpt.edu.vn" && this.u.Role_id == "SF") {
          window.location.href = '/home';
          sessionStorage.removeItem('login-error');
        } else {
          sessionStorage.setItem('login-error', "Email Error");
          window.location.href = '/login';
        }
      })
    }).catch(() => {
      this.subject.next(null as any);
    })
  }

  public signOut() {
    this.auth2.signOut()
      .then(() => {
        this.subject.next(null as any);
        this.auth2.disconnect();
        sessionStorage.removeItem('user');
        window.location.href = '/login';
        sessionStorage.removeItem('login-error');
        localStorage.removeItem('listBook');
        localStorage.removeItem('listCategory');
      })
  }
  public observable(): Observable<gapi.auth2.GoogleUser> {
    return this.subject.asObservable();
  }
}
