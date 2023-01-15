import { Component, OnInit } from '@angular/core';
import { ResponseLogin } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  mySession: ResponseLogin;

  constructor(private userService: UserService) {
    this.mySession = this.userService.getSession();
  }

  ngOnInit(): void {}
}
