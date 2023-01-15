import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseLogin } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() mySession: ResponseLogin | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  btnLogout() {
    this.router.navigate(['']);
  }
}
