import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  user!: User;
  constructor() {
  }

  ngOnInit(): void {
    // this.user=new User('1','se1','htv','012345678','htv@gmail.com','hcm',new Date('2019-01-16'));
    this.user=JSON.parse(sessionStorage.getItem('user1')!);
  }
}
