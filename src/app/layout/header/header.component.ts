import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { GoogleSigninService } from 'src/app/service/google-signin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];

  constructor(private signInService: GoogleSigninService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Account',
        icon: 'pi pi-fw pi-user',
        routerLink: '/account'
      }
    ];
  }
  logOut() {
    this.signInService.signOut();
  }

}
