import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService, ExpenseService } from '../shared';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';


@Component({
  moduleId: module.id,
  selector: 'app-expenses',
  templateUrl: 'expenses.component.html',
  styleUrls: ['expenses.component.css'],

  providers: [AuthService, ExpenseService],  
  directives: [MD_CARD_DIRECTIVES, MdToolbar, MD_INPUT_DIRECTIVES, MdButton]

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
