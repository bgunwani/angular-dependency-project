import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>('http://localhost:3000/employees');
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this._httpClient.post<Employee>('http://localhost:3000/employees', employee);
  }
}
