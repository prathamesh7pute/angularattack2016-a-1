"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var expenses_personal_component_1 = require('./+personal/expenses.personal.component');
var ExpensesComponent = (function () {
    function ExpensesComponent() {
    }
    ExpensesComponent.prototype.ngOnInit = function () { };
    ExpensesComponent = __decorate([
        router_deprecated_1.RouteConfig([
            new router_deprecated_1.Route({ path: '/personal', component: expenses_personal_component_1.ExpensesPersonalComponent, name: 'ExpensesPersonal' }),
        ]),
        core_1.Component({
            moduleId: module.id,
            selector: 'expenses',
            templateUrl: 'expenses.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, router_deprecated_1.RouterOutlet],
        }), 
        __metadata('design:paramtypes', [])
    ], ExpensesComponent);
    return ExpensesComponent;
}());
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=expenses.component.js.map