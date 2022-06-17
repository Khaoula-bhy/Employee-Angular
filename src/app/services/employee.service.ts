import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8001/api/v1';

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);

  }
  public getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/employee/${id}`)
  }

  postEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/employee`, employee);

  }
  public updateEmployee(employee: Employee,id:string): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/employee/${id}`, employee);
  }
  public deleteEmployee(id:string):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/employee/${id}`);
  }

}
