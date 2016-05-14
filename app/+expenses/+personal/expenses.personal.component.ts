import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth.service';
import { ExpenseService } from '../expense.service';

import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Component({
    moduleId: module.id,
    selector: 'expenses-personal',
    templateUrl: 'expenses.personal.component.html',
    providers: [ExpenseService]
})
export class ExpensesPersonalComponent implements OnInit {
    expenses: FirebaseListObservable<any>;

    constructor(private authService: AuthService, af: AngularFire, private expenseService: ExpenseService) {
        this.expenses = expenseService.expenseItems$;
    }

    ngOnInit() { }

}