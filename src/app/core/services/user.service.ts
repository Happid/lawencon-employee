import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpParams,
  HttpHeaders,
  HttpRequest,
  HttpEvent,
  HttpClient,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/shared/api.service';
import { ResponseLogin } from '../models/user.model';

@Injectable()
export class UserService extends ApiService {
  mySession: ResponseLogin = new ResponseLogin('', '', '', 0, '', '', '', '');
  constructor(injector: Injector) {
    super(injector);
  }

  login(data: any): Observable<any> {
    return this.http
      .post<any>(`${environment.urlServer}/auth/login`, data, {
        headers: this.getHeader(),
      })
      .pipe(tap((res: Response) => res));
  }

  getSession() {
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
      const lsUser = JSON.parse(userSession);
      this.mySession.email = lsUser.email;
      this.mySession.firstName = lsUser.firstName;
      this.mySession.gender = lsUser.gender;
      this.mySession.id = lsUser.id;
      this.mySession.image = lsUser.image;
      this.mySession.lastName = lsUser.lastName;
      this.mySession.token = lsUser.token;
      this.mySession.username = lsUser.username;
    }
    return this.mySession;
  }

  removeSession() {
    localStorage.removeItem('userSession');
  }
}
