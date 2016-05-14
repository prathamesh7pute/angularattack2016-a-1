import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { AuthService } from '../../auth.service';


@Component({
    moduleId: module.id,
    selector: 'expenses-details',
    templateUrl: 'expenses.details.component.html'
})


export class ExpensesDetailsComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        if(!this.authService.authenticated) {
            this.router.navigate(['/Home'])
        }
     }

}