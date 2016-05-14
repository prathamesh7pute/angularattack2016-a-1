import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit() { }

}