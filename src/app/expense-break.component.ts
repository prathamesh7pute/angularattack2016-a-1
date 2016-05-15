import { Component, OnInit  } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { HomeComponent } from './+home';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { ExpensesComponent } from './+expenses';
import { AuthService, ExpenseService } from './shared'

@Component({
  moduleId: module.id,
  selector: 'expense-break-app',
  templateUrl: 'expense-break.component.html',
  styleUrls: ['expense-break.component.css'],
  directives: [MdToolbar, MdButton, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, AuthService, ExpenseService]
})
@Routes([
  { path: '/', component: HomeComponent },
  { path: '/expenses', component: ExpensesComponent }
])
export class ExpenseBreakAppComponent implements OnInit {
  title = 'expense-break works!';

  constructor(private authService: AuthService) {
  }

  ngOnInit() { }

}
