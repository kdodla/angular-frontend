import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  constructor(private empService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
  saveEmployee()
  {
    this.empService.createEmployee(this.employee).subscribe(
      data=>{console.log(data);},
      error=>{console.log(error);}
    );     
  }
  gotoEmployeeList()
  {
    this.router.navigate(['/employees']);
  }
  onSubmit():void
  {
    this.saveEmployee();
    this.gotoEmployeeList();

  }
}
