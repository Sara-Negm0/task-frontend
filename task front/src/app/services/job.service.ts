import { Injectable } from '@angular/core';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {


  constructor( private apiService:APIService) { }
   
  GetAllJobs() :any{
    return this.apiService.get(`Job/GetList`)

  }

}
