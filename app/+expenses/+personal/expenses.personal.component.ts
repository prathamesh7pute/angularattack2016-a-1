import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth.service';


@Component({
    moduleId: module.id,
    selector: 'expenses-personal',
    templateUrl: 'expenses.personal.component.html'
})
export class ExpensesPersonalComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { }

}