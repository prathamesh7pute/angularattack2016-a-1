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
var auth_service_1 = require('../../auth.service');
var expense_service_1 = require('../expense.service');
var angularfire2_1 = require('angularfire2');
var ExpensesPersonalComponent = (function () {
    function ExpensesPersonalComponent(authService, af, expenseService) {
        this.authService = authService;
        this.expenseService = expenseService;
        this.expenses = expenseService.expenseItems$;
    }
    ExpensesPersonalComponent.prototype.ngOnInit = function () { };
    ExpensesPersonalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'expenses-personal',
            templateUrl: 'expenses.personal.component.html',
            providers: [expense_service_1.ExpenseService]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, angularfire2_1.AngularFire, expense_service_1.ExpenseService])
    ], ExpensesPersonalComponent);
    return ExpensesPersonalComponent;
}());
exports.ExpensesPersonalComponent = ExpensesPersonalComponent;
//# sourceMappingURL=expenses.personal.component.js.map