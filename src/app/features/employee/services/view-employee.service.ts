import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/shared/api.service';

@Injectable()
export class ViewEmployeeService extends ApiService {
  constructor(injector: Injector) {
    super(injector);
  }

  getEmployee(limit: number, skip: number): Observable<any> {
    return this.http
      .get<any>(
        `${environment.urlServer}/users?limit=${limit}&skip=${skip}&select=id,username,firstName,lastName,email,birthDate`,
        {
          headers: this.getHeader(),
        }
      )
      .pipe(tap((res: Response) => res));
  }

  searchEmployee(limit: number, skip: number, search: string): Observable<any> {
    return this.http
      .get<any>(
        `${environment.urlServer}/users/search?q=${search}&limit=${limit}&skip=${skip}&select=id,username,firstName,lastName,email,birthDate`,
        {
          headers: this.getHeader(),
        }
      )
      .pipe(tap((res: Response) => res));
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http
      .delete<any>(`${environment.urlServer}/users/${id}`, {
        headers: this.getHeader(),
      })
      .pipe(tap((res: Response) => res));
  }
}
