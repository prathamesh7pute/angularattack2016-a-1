import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from './auth.service';
import { IExpense, Expense } from './expense';


@Injectable()
export class ExpenseService {
  expenseItems$: FirebaseListObservable<IExpense[]>;

  constructor(af: AngularFire, auth: AuthService) {
    this.expenseItems$ = af.list(`/expenses/${auth.id}`) as FirebaseListObservable<IExpense[]>;
  }

  createExpense(name: string, category: string, description: string, createdAt: number): Promise<any> {
    return this.expenseItems$.push(new Expense(name, category, description, createdAt));
  }

  removeExpense(expense: IExpense): Promise<any> {
    return this.expenseItems$.remove(expense.$key);
  }

  updateExpense(expense: IExpense, changes: any): Promise<any> {
    return this.expenseItems$.update(expense.$key, changes);
  }
}