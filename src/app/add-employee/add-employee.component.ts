import { Component } from '@angular/core';
import { User } from '../models/User';
import { FormsModule } from '@angular/forms';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  providers: [EmployeeService]
})
export class AddEmployeeComponent {

  employee: Employee = { id: 0, name: "", salary: 0, designation: "" };

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  onSubmit() {
    console.log(this.employee);
    this._employeeService.addEmployee(this.employee).subscribe((data) => {
      // console.log(data);
      alert('Employee Added Successfully!');
      this._router.navigate(['/employees']);
    }, (error) => {
      console.log(error);
    })
  }

}
