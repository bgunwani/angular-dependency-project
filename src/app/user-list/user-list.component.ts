import { Component } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  user!: User;
  users: User[] = [];


  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this._httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users`).subscribe((data) => {
      // console.log(data);
      this.users = data;
    }, (error) => {
      console.log(error);
    })
  }

}
