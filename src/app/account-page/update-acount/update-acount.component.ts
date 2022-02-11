import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-update-acount',
  templateUrl: './update-acount.component.html',
  styleUrls: ['./update-acount.component.css']
})
export class UpdateAcountComponent implements OnInit {
  user!:User;
  constructor() { }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user1')!);
  }

}
