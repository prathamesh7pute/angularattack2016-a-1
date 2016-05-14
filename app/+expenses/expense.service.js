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
require('rxjs/add/operator/map');
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var auth_service_1 = require('../auth.service');
var expense_1 = require('./expense');
var ExpenseService = (function () {
    function ExpenseService(af, auth) {
        this.expenseItems$ = af.list("/expenses/" + auth.id);
    }
    ExpenseService.prototype.createExpense = function (name, category, description, createdAt) {
        return this.expenseItems$.push(new expense_1.Expense(name, category, description, createdAt));
    };
    ExpenseService.prototype.removeExpense = function (expense) {
        return this.expenseItems$.remove(expense.$key);
    };
    ExpenseService.prototype.updateExpense = function (expense, changes) {
        return this.expenseItems$.update(expense.$key, changes);
    };
    ExpenseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, auth_service_1.AuthService])
    ], ExpenseService);
    return ExpenseService;
}());
exports.ExpenseService = ExpenseService;
//# sourceMappingURL=expense.service.js.map