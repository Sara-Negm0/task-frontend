import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { JobService } from 'src/app/services/job.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  jobs: any;

  constructor(
    private route:ActivatedRoute,
    private employeeService:EmployeeService,
    private jobServise:JobService,
    private router :Router,
    private toastr: ToastrService
  ) { }
  form = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.required,Validators.pattern('')]),
    nationalID :new FormControl('',[Validators.required,Validators.pattern('')]),
    job:new FormControl(),
    gender:new FormControl(),
    status:new FormControl(),
  })
  ID
  Employee
  ngOnInit(): void {
    this.ID=this.route.snapshot.params["id"];
    this.employeeService.GetByID(this.ID).subscribe(res=>{
      console.log(res)
      if(res.Successed){
        this.Employee=res.Data
      }
    })
    this.jobServise.GetAllJobs().subscribe(res=>{
      if(res.Successed)
      this.jobs = res.Data
      
    })
  }
 
  UpdateEmployee(f){
    let employee={
      ID:this.Employee.ID,
      Name: f.value.name,
      Email: f.value.email,
      JobID:f.value.job,
      Mobile:f.value.mobile,
      NationalID:f.value.nationalID,
      Status:f.value.status,
      Gender:f.value.gender
    }
    this.employeeService.Update(employee).subscribe(res=>{
      console.log(res)
      if(res.Successed){
      console.log(res);
      this.toastr.success("Employee Updated Successfuly","Done",{
        timeOut: 1000, easeTime: 1000
      }).onHidden.subscribe(()=>{
        this.router.navigate(['index'])

      })

      }
    })
  }
}
