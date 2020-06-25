import { Injectable } from '@angular/core';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private apiService:APIService) { }

   
  GetAllEmployees(PageIndex,PageSize) :any{
    return this.apiService.get(`Employee/GetList?PageIndex=${PageIndex}&PageSize=${PageSize}`)

  }
  GetByID(id):any{
    return this.apiService.get(`Employee/GetByID?id=${id}`)
  }
  Delete(id):any{
    return this.apiService.get(`Employee/Delete?id=${id}`)

  }

  Update(Emp):any{
    return this.apiService.post(`Employee/Update`, JSON.stringify(Emp))
  }

  Add(Emp):any{
    return this.apiService.post(`Employee/Post`, JSON.stringify(Emp))
  }
  ChangeStatus(id){
    return this.apiService.get(`Employee/ChangeStatus?id=${id}`)

  }
}
