import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';


import { AuthService } from '../auth.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    directives: [ROUTER_DIRECTIVES],
})
export class HomeComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { }

}