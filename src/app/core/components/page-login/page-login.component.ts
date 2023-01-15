import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  loadingPage: boolean = false;
  user: UserLogin = new UserLogin('kminchelle', '0lelplR');
  constructor(
    private service: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.service.removeSession();
  }

  ngOnInit(): void {}

  signIn() {
    this.loadingPage = true;
    this.service.login(this.user).subscribe(
      (data) => {
        localStorage.setItem('userSession', JSON.stringify(data));
        this.router.navigate(['/employee']);
        this.loadingPage = false;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Message ' + error.error.message, 'Error', {
          timeOut: 4000,
        });
        this.loadingPage = false;
      }
    );
  }
}
