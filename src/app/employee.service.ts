import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8084/api/v1/employees";
  private saveEmployeeURL="http://localhost:8084/api/v1/save";
  constructor(private httpClient:HttpClient) { }

  getEmployeesList(): Observable<Employee[]>
  {
    console.log("I am in getEmployeeList");
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  createEmployee(employee:Employee):Observable<Object>{
     return this.httpClient.post(`${this.saveEmployeeURL}`,employee);
  }
  getEmployeeById(id:number):Observable<Object>
  {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
  updateEmployee(id:number,employee:Employee):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployee(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
