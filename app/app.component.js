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
var auth_service_1 = require('./auth.service');
var home_component_1 = require('./+home/home.component');
var header_component_1 = require('./+header/header.component');
var expenses_component_1 = require('./+expenses/expenses.component');
var footer_component_1 = require('./+footer/footer.component');
var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        window.location.replace('/');
    };
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            new router_deprecated_1.Route({ path: '/', component: home_component_1.HomeComponent, name: 'Home', useAsDefault: true }),
            new router_deprecated_1.Route({ path: '/expenses/...', component: expenses_component_1.ExpensesComponent, name: 'Expenses' }),
        ]),
        core_1.Component({
            moduleId: module.id,
            selector: 'expense-break',
            templateUrl: 'app.component.html',
            providers: [auth_service_1.AuthService],
            directives: [
                header_component_1.HeaderComponent,
                router_deprecated_1.RouterOutlet,
                footer_component_1.FooterComponent
            ]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map