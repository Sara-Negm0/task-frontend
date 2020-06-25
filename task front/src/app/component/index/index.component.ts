import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  popoverTitle: string;
  popoverMessage: string
  confirmClicked: boolean;
  cancelClicked: boolean;
  confirmButtonType: string
  PageSize = 10
  PageIndex:number = 0
  options = { itemsPerPage: this.PageSize, currentPage: this.PageIndex, id: 'pagination', totalItems: 100 }
  constructor(
    private employeeService:EmployeeService,
    private route :Router,
    private toastr:ToastrService,
    ) { 
      this.popoverTitle = 'Confirm';
    this.popoverMessage = 'Are you sure to Delete this Employee ';
    this.confirmClicked = false;
    this.cancelClicked = false;
    }
  Employees
  ngOnInit(): void {
    this.GetData();
  }
  GetData(){
    this.employeeService.GetAllEmployees(this.PageIndex,this.PageSize).subscribe(res=>{
      if(res.Successed){
        this.Employees = res.Data;
        console.log(this.Employees)
      }
    })
  }
  getNextPrevData(pageIndex) {
    this.PageIndex = pageIndex - 1;
    console.log("PageIndex", pageIndex)
    this.GetData();
    this.options.currentPage = pageIndex;
  }

  Delete(id){
    console.log(id)
    this.employeeService.Delete(id).subscribe(res=>{
      this.toastr.success("Employee Deletes Successfuly","Done")
      this.GetData();

    })
  }
  Edit(id){
    this.route.navigate(['edit-employee/'+id])
  }
  AddEmployee(){
    this.route.navigate(['add-employee'])

  }

  ChangeState(id){
    this.employeeService.ChangeStatus(id).subscribe(res=>{
      this.toastr.success("Status Change Successfuly","Done")
      this.GetData();

    })

  }
}
