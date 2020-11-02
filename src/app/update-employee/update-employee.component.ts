import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
         id:number;
   employee:any;
  constructor(private empService:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.empService
       .getEmployeeById(this.id).subscribe(data=>{this.employee=data},
        error=>console.log(error)
        );
  }
  onSubmit():void{
    this.empService.updateEmployee(this.id,this.employee)
    .subscribe(
    data=>{this.gotoEmployeeList();},
    error=>{console.log(error);}
    );
  }
  gotoEmployeeList()
  {
    this.router.navigate(['/employees']);
  }
}
