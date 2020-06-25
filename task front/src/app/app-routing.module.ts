import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { IndexComponent } from './component/index/index.component';


const routes: Routes = [
  {path:'edit-employee/:id' ,component:EditEmployeeComponent},
  {path:'add-employee' ,component:AddEmployeeComponent},
  {path:'index' ,component:IndexComponent},
  {path:'',redirectTo:'index',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
