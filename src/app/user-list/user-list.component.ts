import { Component } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  providers: [UserService]

})
export class UserListComponent {

  user!: User;
  users: User[] = [];


  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((data) => {
      // console.log(data);
      this.users = data;
    }, (error) => {
      console.log(error);
    })
  }

}
