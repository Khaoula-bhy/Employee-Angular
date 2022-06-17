import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee= new Employee();
  constructor(private employeeService: EmployeeService, private router: Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }
  
addProduit(){
  this.employeeService.postEmployee(this.employee).subscribe(
    data=> {
     console.log(data); 
     this.goToListEmployee(); 
      

    });
}
goToListEmployee(){
  this.router.navigate(['listEmployee'])
}

onSubmit(){
  this.addProduit()
}


}
