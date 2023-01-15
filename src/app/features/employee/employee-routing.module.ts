import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddEmployeeComponent } from './pages/page-add-employee/page-add-employee.component';
import { PageDetailEmployeeComponent } from './pages/page-detail-employee/page-detail-employee.component';
import { PageViewEmployeeComponent } from './pages/page-view-employee/page-view-employee.component';

const route: Routes = [
  { path: '', component: PageViewEmployeeComponent },
  { path: 'add', component: PageAddEmployeeComponent },
  { path: 'detail/:id', component: PageDetailEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
