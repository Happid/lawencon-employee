import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageViewEmployeeComponent } from './pages/page-view-employee/page-view-employee.component';
import { PageDetailEmployeeComponent } from './pages/page-detail-employee/page-detail-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { RouterModule } from '@angular/router';
import { ViewEmployeeService } from './services/view-employee.service';
import { SpinnerComponent } from 'src/app/shared/util/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { PageAddEmployeeComponent } from './pages/page-add-employee/page-add-employee.component';
import { DetailEmployeeService } from './services/detail-employee.service';

@NgModule({
  declarations: [
    PageViewEmployeeComponent,
    PageDetailEmployeeComponent,
    SpinnerComponent,
    PageAddEmployeeComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, EmployeeRoutingModule],
  providers: [ViewEmployeeService, DetailEmployeeService],
})
export class EmployeeModule {}
