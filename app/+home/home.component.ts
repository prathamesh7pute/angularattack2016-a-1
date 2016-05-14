import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { AuthService } from '../auth.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { 
        if(this.authService.authenticated) {
            this.router.navigate(['/Expenses'])
        }
    }

}