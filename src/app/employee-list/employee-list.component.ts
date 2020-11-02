import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[];
  constructor(private empService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    
    this.getEmployees();
  }
  getEmployees()
  {
    this.empService.getEmployeesList()
    .subscribe(data=>this.employees=data);
  }
   updateEmployee(id:number): void
   {
     this.router.navigate(['update-employee',id]);
   }
   deleteEmployee(id:number): void
   {
     this.empService.deleteEmployee(id).
     subscribe(data=> {
       console.log(data);
       this.getEmployees();
      } );
   }
   employeeDetails(id:number) : void{
     this.router.navigate(['employee-details',id]);
   }
}
