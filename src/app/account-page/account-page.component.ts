import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  user!: User;
  textdate!:Date;
  constructor() {
  }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.user.Birthday);
    this.textdate=new Date(this.user.Birthday);
  }
}
