import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from '../models/employee';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
  providers: [EmployeeService]
})
export class EmployeesComponent {

  employees: Employee[] = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((data) => {
      // console.log(data);
      this.employees = data;
    }, (error) => {
      console.log(error);
    })
  }

}
