import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-update-acount',
  templateUrl: './update-acount.component.html',
  styleUrls: ['./update-acount.component.css']
})
export class UpdateAcountComponent implements OnInit {
  user!:User;
  textdate!:Date;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user')!);
    this.textdate=new Date(this.user.Birthday);
  }

  updateAcount(){
    this.userService.updateUser(this.user);
    this.userService.getData(this.user.Email);
    sessionStorage.setItem('user',JSON.stringify(this.user));
    window.location.href = '/account';
  }
}
