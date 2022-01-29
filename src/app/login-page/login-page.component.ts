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
  constructor(private signInService: GoogleSigninService,
    private ref: ChangeDetectorRef,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    if(this.user==null){
    }
    this.signInService.observable().subscribe(user => {
      this.user = user;
      if(this.user!=null){
        console.log(this.user.getBasicProfile());
      }
      this.ref.detectChanges;
    })
    
  }
  signIn() {
    this.signInService.signIn();
  }
  signOut() {
    this.signInService.signOut();
  }
}
