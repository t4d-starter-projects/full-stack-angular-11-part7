import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInGuardService } from '@t4d-wnow/user-lib';
import { AllowedRolesGuardService } from '@t4d-wnow/user-lib';

import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';

import { CategoriesResolverService } from './services/categories-resolver.service';
import { EmployeesResolverService } from './services/employees-resolver.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoggedInGuardService, AllowedRolesGuardService],
    data: {
      roles: ['user'],
      title: 'Profile Page',
    },
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    resolve: {
      categories: CategoriesResolverService,
    },
    canActivate: [LoggedInGuardService, AllowedRolesGuardService],
    data: {
      roles: ['user'],
      title: 'Categories Page',
    },
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [LoggedInGuardService, AllowedRolesGuardService],
    resolve: {
      employees: EmployeesResolverService,
    },
    data: {
      roles: ['admin'],
      title: 'Employees Page',
    },
  },
  { path: 'login', pathMatch: 'full', redirectTo: '/' },
  { path: 'notauthorized', pathMatch: 'full', redirectTo: '/' },
  { path: 'logout', pathMatch: 'full', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
