import { Component } from '@angular/core';
import { Route, RouteConfig, RouterOutlet } from '@angular/router-deprecated';

import { AuthService } from './auth.service';
import { HomeComponent } from './+home/home.component';
import { HeaderComponent } from './+header/header.component';
import { ExpensesComponent } from './+expenses/expenses.component';


@RouteConfig([
  new Route({path: '/', component: HomeComponent, name: 'Home'}),
  new Route({path: '/expenses', component: ExpensesComponent, name: 'Expenses'})
])
@Component({
  moduleId: module.id,
  selector: 'expense-break',
  templateUrl: 'app.component.html',
  providers: [AuthService],
  directives: [
    HeaderComponent,
    RouterOutlet
  ]
})
export class AppComponent {

  constructor(private authService: AuthService) {}
  
  logout() : void {
    this.authService.logout();
    window.location.replace('/');
  }
  
}
