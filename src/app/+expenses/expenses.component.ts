import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService, ExpenseService } from '../shared';

import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  moduleId: module.id,
  selector: 'app-expenses',
  templateUrl: 'expenses.component.html',
  styleUrls: ['expenses.component.css'],
  providers: [AuthService, ExpenseService]
})
export class ExpensesComponent implements OnInit {

  expenses: FirebaseListObservable<any>;

  constructor(private authService: AuthService, af: AngularFire, private expenseService: ExpenseService, private router: Router) {
    this.expenses = expenseService.expenseItems$;
    if(!this.authService.authenticated) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() { 
  }

}
