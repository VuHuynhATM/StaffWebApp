import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleSigninService } from '../service/google-signin.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user!: gapi.auth2.GoogleUser;
  error:string=localStorage.getItem('login-error')!;
  constructor(private signInService: GoogleSigninService,
    private ref: ChangeDetectorRef,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.signInService.observable().subscribe(user => {
      this.user = user;
      this.ref.detectChanges;
    })
    this.error=localStorage.getItem('login-error')!;
  }
  signIn() {
    this.signInService.signIn();
  }
  signOut() {
    this.signInService.signOut();
  }
}
