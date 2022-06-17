import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'listEmployee', component: ListEmployeeComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {path: '**', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
