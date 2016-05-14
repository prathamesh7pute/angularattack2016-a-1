import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { AuthService } from '../../auth.service';


@Component({
    moduleId: module.id,
    selector: 'expenses-personal',
    templateUrl: 'expenses.personal.component.html'
})
export class ExpensesPersonalComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        if(!this.authService.authenticated) {
            this.router.navigate(['/Home'])
        }
     }

}