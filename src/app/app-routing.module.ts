import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/components/page-login/page-login.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LayoutComponent } from './shared/component/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: PageLoginComponent,
  },
  {
    path: 'employee',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/employee/employee.module').then(
            (m) => m.EmployeeModule
          ),
      },
    ],
    // canActivate: [false],
  },

  // path: '**', it must in the last
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
