import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth.service';


@Component({
    moduleId: module.id,
    selector: 'expenses-details',
    templateUrl: 'expenses.details.component.html'
})


export class ExpensesDetailsComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { }
}