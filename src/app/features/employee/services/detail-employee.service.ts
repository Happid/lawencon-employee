import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/shared/api.service';

@Injectable()
export class DetailEmployeeService extends ApiService {
  constructor(injector: Injector) {
    super(injector);
  }

  createNewEmployee(data: any): Observable<any> {
    return this.http
      .post<any>(`${environment.urlServer}/users/add`, data, {
        headers: this.getHeader(),
      })
      .pipe(tap((res: Response) => res));
  }

  detailEmployee(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.urlServer}/users/${id}`, {
        headers: this.getHeader(),
      })
      .pipe(tap((res: Response) => res));
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.http
      .put<any>(`${environment.urlServer}/users/${id}`, data, {
        headers: this.getHeader(),
      })
      .pipe(tap((res: Response) => res));
  }
}
