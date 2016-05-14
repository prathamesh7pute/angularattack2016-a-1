import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Route, RouteConfig, RouterOutlet  } from '@angular/router-deprecated';
import { ExpensesDetailsComponent } from './+details/expenses.details.component'
import { ExpensesPersonalComponent } from './+personal/expenses.personal.component'

@RouteConfig([
  new Route({path: '/details', component: ExpensesDetailsComponent, name: 'ExpensesDetails', useAsDefault: true}),  
  new Route({path: '/personal', component: ExpensesPersonalComponent, name: 'ExpensesPersonal'}),
])
@Component({
    moduleId: module.id,
    selector: 'expenses',
    templateUrl: 'expenses.component.html',
    directives: [ROUTER_DIRECTIVES, RouterOutlet],
})
export class ExpensesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}