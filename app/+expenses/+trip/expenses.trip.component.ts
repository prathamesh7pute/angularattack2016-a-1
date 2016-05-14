import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth.service';

@Component({
    moduleId: module.id,
    selector: 'expenses-trip',
    templateUrl: 'expenses.trip.component.html'
})
export class ExpensesTripComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { }
}