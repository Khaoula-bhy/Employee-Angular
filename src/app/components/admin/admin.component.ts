import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  employees: Employee[];
  
  constructor(private router: Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
   
  }

logout(){
  this.tokenStorageService.signOut();
  this.router.navigateByUrl('/login');
}

}
