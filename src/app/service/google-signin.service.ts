import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {

  private auth2!: gapi.auth2.GoogleAuth
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)
  constructor() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '445803574555-8nd6ss2dhdaj1o5qppp9ems147b07ea7.apps.googleusercontent.com'
      })
    })
  }

  public signIn() {
    this.auth2.signIn({
      scope: 'https://www.googleapis.com/auth/gmail.labels'
    }).then(user => {
      this.subject.next(user);
      // console.log(user.getBasicProfile());
      localStorage.setItem('user', JSON.stringify(user.getBasicProfile()));
      window.location.href='/home';
    }).catch(() => {
      this.subject.next(null as any);
    })
  }

  public signOut() {
    this.auth2.signOut()
      .then(() => {
        this.subject.next(null as any);
        this.auth2.disconnect();
        localStorage.removeItem('user');
        window.location.href='/login';
      })
  }
  public observable(): Observable<gapi.auth2.GoogleUser> {
    return this.subject.asObservable();
  }
}
