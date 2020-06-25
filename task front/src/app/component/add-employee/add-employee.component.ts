import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormControl, Validators} from '@angular/forms'
  import { from } from 'rxjs';
import { JobService } from 'src/app/services/job.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private jobServise :JobService,
    private employeeService :EmployeeService,
    private toastr: ToastrService,
    private route :Router

    ) { }
  jobs:[]
  job
  status
  gender
  checked:boolean=true
  form = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.required,Validators.pattern('')]),
    nationalID :new FormControl('',[Validators.required,Validators.pattern('')]),
    job:new FormControl(),
    gender:new FormControl(),
    status:new FormControl(),
  })
  ngOnInit(): void {
    this.jobServise.GetAllJobs().subscribe(res=>{
      console.log(res)
      if(res.Successed)
      this.jobs = res.Data
      
    })
  }

  AddEmployee(f){
    console.log(f.value)
    let employee={
      ID:0,
      Name: f.value.name,
      Email: f.value.email,
      JobID:f.value.job,
      Mobile:f.value.mobile,
      NationalID:f.value.nationalID,
      Status:f.value.status,
      Gender:f.value.gender
    }
  this.employeeService.Add(employee).subscribe(res=>{
    if(res.Successed){
      this.toastr.success("Employee Added Successfuly","Done")
    console.log(res)
      this.route.navigate(['index'])
    }
  })
  }

  
}
