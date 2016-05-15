import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from './auth.service';
import { IExpense, Expense } from './expense';


@Injectable()
export class ExpenseService {
  expenseItems$: FirebaseListObservable<IExpense[]>;

  constructor(private af: AngularFire, private authService: AuthService) {
    if(this.authService.auth && this.authService.auth.uid) {
      this.expenseItems$ = af.list(`/expenses/${this.authService.auth.uid}`) as FirebaseListObservable<IExpense[]>;
    }
  }

  createExpense(name: string, category: string, amount: number, description: string, createdAt: number): Promise<any> {
    return this.expenseItems$.push(new Expense(name, category, amount, description, createdAt));
  }

  removeExpense(expense: IExpense): Promise<any> {
    return this.expenseItems$.remove(expense.$key);
  }

  updateExpense(expense: IExpense, changes: any): Promise<any> {
    return this.expenseItems$.update(expense.$key, changes);
  }
}