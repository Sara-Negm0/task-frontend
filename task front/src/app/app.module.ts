import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }  from '@angular/common/http';
import { IndexComponent } from './component/index/index.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { CommonModule } from '@angular/common';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import {NgxPaginationModule} from 'ngx-pagination'; 
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // AngularFontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      
    ) ,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    NgxPaginationModule
  ],
    

  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
