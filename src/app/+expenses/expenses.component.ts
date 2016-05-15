import { Component, OnInit } from '@angular/core';

import { ExpenseService } from '../shared';

import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  moduleId: module.id,
  selector: 'app-expenses',
  templateUrl: 'expenses.component.html',
  styleUrls: ['expenses.component.css'],
  providers: [ExpenseService]
})
export class ExpensesComponent implements OnInit {

  expenses: FirebaseListObservable<any>;

  constructor(private expenseService: ExpenseService) {
    this.expenses = expenseService.expenseItems$;
  }

  ngOnInit() { }

}
