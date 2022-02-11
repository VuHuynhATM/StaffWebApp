import { formatPercent } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {

  private auth2!: gapi.auth2.GoogleAuth
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)
  constructor() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '445803574555-8nd6ss2dhdaj1o5qppp9ems147b07ea7.apps.googleusercontent.com',
        // scope:'email',
        // fetch_basic_profile:false,
        hosted_domain:'fpt.edu.vn'
      })
    })
  }

  public signIn() {
    this.auth2.signIn({
      scope: 'https://www.googleapis.com/auth/gmail.labels'
    }).then(user => {
      this.subject.next(user);
      sessionStorage.setItem('user', JSON.stringify(user.getBasicProfile()));
      
      sessionStorage.setItem('user1', JSON.stringify(new User('1','se1','htv','012345678','htv@gmail.com','hcm',new Date('2019-01-16'),true)));
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
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('user1');

        window.location.href='/login';
      })
  }
  public observable(): Observable<gapi.auth2.GoogleUser> {
    return this.subject.asObservable();
  }
}
