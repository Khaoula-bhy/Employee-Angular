import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  popoverTitle:string='';
  popoverMessage:string='Are you sure you want to delete this employee ?';
  
  confirmClicked:boolean=false;
  cancelClicked : boolean=false;

  employees : Employee[];
  totalLength:any;
  page:number =1;
  
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.listEmployees();
  }

  deleteEmployee(id:string){
    this.employeeService.deleteEmployee(id).subscribe(
      data=>{
        this.goToListEmployee();
        window.location.reload();
      })
    ;
  }
  
goToListEmployee(){
  this.router.navigate(['listEmployee'])
}

  updateEmployee(id: string) {
    console.log(`** ${id}`);
    this.router.navigate(['updateEmployee',id])
  }

  listEmployees() {
    this.employeeService.getEmployeeList().subscribe(
      data => {
        this.employees = data;
      }
    )
  }

}
