import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModelDatatable } from 'src/app/shared/models/datatable.model';
import { ListEmployees } from '../../models/view-employee.model';
import { ViewEmployeeService } from '../../services/view-employee.service';

@Component({
  selector: 'app-page-view-employee',
  templateUrl: './page-view-employee.component.html',
  styleUrls: ['./page-view-employee.component.scss'],
})
export class PageViewEmployeeComponent implements OnInit {
  loadingSpinner: boolean = false;
  lstEmployee: ListEmployees[] = [];
  allDataTemp: ListEmployees[] = [];
  objEmployee: ListEmployees = new ListEmployees();
  tblParam: ModelDatatable = new ModelDatatable(10, 0, 0, 10, 100, '');
  isBtnDisabled: boolean = false;

  constructor(
    private service: ViewEmployeeService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) {
      this.tblParam.search = searchValue;
      if (this.tblParam.search === '') {
        this.getTableEmployee();
      } else {
        this.searchEmployee();
      }
    } else {
      this.getTableEmployee();
    }
  }

  getTableEmployee() {
    this.loadingSpinner = true;
    this.service.getEmployee(this.tblParam.limit, this.tblParam.skip).subscribe(
      (data) => {
        this.lstEmployee = data.users;

        // karena dummy json tidak ada key nya maka dibuat manual
        this.lstEmployee.map((res: any, i: number) => {
          this.lstEmployee[i]['basicSalary'] = 5500000;
          this.lstEmployee[i]['status'] = 'On';
          this.lstEmployee[i]['group'] = 'Group A';
          this.lstEmployee[i]['description'] =
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eaque eum';
        });

        this.tblParam.limit = data.limit;
        this.tblParam.skip = data.skip;
        this.tblParam.total = data.total;
        this.tblParam.numberPagging = data.total / data.limit;

        this.loadingSpinner = false;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Message ' + error.error.message, 'Error', {
          timeOut: 4000,
        });
        this.loadingSpinner = false;
      }
    );
  }

  searchEmployee() {
    this.loadingSpinner = true;
    this.tblParam.limit = 10;
    localStorage.setItem('searchValue', this.tblParam.search);
    this.service
      .searchEmployee(
        this.tblParam.limit,
        this.tblParam.skip,
        this.tblParam.search
      )
      .subscribe(
        (data) => {
          this.lstEmployee = data.users;

          this.tblParam.limit = data.limit;
          this.tblParam.skip = data.skip;
          this.tblParam.total = data.total;
          this.tblParam.numberPagging = data.total / data.limit;
          this.loadingSpinner = false;
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('Message ' + error.error.message, 'Error', {
            timeOut: 4000,
          });
          this.loadingSpinner = false;
        }
      );
  }

  btnAdd() {
    this.router.navigate(['/employee/add']);
  }

  btnDetail(index: number) {
    this.router.navigate([`/employee/detail/${this.lstEmployee[index].id}`]);
  }

  // DATATABLES
  showing(event: any) {
    this.tblParam.skip = 0;
    this.tblParam.activePage = 0;
    this.tblParam.limit = Number(event.target.value);
    this.getTableEmployee();
  }

  btnActivePage(i: number) {
    this.tblParam.activePage = i;
    if (this.tblParam.limit) this.tblParam.skip = i * this.tblParam.limit;
    this.getTableEmployee();
  }

  btnActiveNextPage(i: number) {
    this.tblParam.activePage = i + 1;
    if (this.tblParam.limit) {
      this.tblParam.skip = (i + 1) * this.tblParam.limit;
    }
    this.getTableEmployee();
  }

  btnActivePreviousPage(i: number) {
    this.tblParam.activePage = i - 1;
    if (this.tblParam.limit) {
      this.tblParam.skip = (i - 1) * this.tblParam.limit;
    }
    this.getTableEmployee();
  }

  // MODALS
  btnOpenModals(index: number) {
    const modals = document.getElementById('myModals') as HTMLElement;
    modals.classList.remove('hidden');
    this.objEmployee = this.lstEmployee[index];
  }

  btnClsoeModals() {
    const modals = document.getElementById('myModals') as HTMLElement;
    modals.classList.add('hidden');
  }

  deleteEmployee() {
    this.isBtnDisabled = true;
    if (this.objEmployee.id) {
      this.service.deleteEmployee(this.objEmployee.id).subscribe(
        (data) => {
          this.isBtnDisabled = false;
          this.toastr.error(
            'Deleting user: ' + this.objEmployee?.username,
            'Success',
            {
              timeOut: 4000,
            }
          );
          this.btnClsoeModals();
          this.getTableEmployee();
        },
        (error: HttpErrorResponse) => {
          this.isBtnDisabled = false;
          this.toastr.error('Message ' + error.error.message, 'Error', {
            timeOut: 4000,
          });
          this.btnClsoeModals();
        }
      );
    }
  }
}
