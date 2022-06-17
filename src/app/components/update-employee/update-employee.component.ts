import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee:Employee;
  id:string;
  constructor(private employeeService: EmployeeService,private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.employee=new Employee();
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data
    })
  }

  onSubmit(){
   
    this.employeeService.updateEmployee(this.employee,this.id).subscribe(data=>{
      this.goToListEmployee();
    })
  }
  
goToListEmployee(){
  this.router.navigate(['listEmployee'])
}

}
