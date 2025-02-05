import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  user: any = { id: 0, name: "", email: "" };
  existingUser: any = { id: 0, name: "", email: "" };
  editIndex: number = 0;

  users: any = [
    { id: 1, name: 'John Smith', email: 'john.smith@example.com' },
    { id: 2, name: 'King Kochhar', email: 'king.kochhar@example.com' },
    { id: 3, name: 'Roger Lee', email: 'roger.lee@example.com' },
    { id: 4, name: 'Sarah Bowling', email: 'sarah.bowling@example.com' }
  ]

  deleteUser(index: number): void {
    this.users.splice(index, 1);
    alert('Deleted Successfully!');
  }

  addUser() {
    this.user.id = this.users.length + 1;
    this.users.push(this.user);
    alert('User Added Successfully!');
  }

  editUser(index: number): void {
    this.editIndex = index;
    this.existingUser = this.users[index];
  }

  updateUser() {
    this.users[this.editIndex].name = this.user.name;
    this.users[this.editIndex].email = this.user.email;
  }

}
