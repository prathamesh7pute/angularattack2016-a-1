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
var angularfire2_1 = require('angularfire2');
var AuthService = (function () {
    function AuthService(af) {
        var _this = this;
        this.af = af;
        this.af.auth.subscribe(function (auth) {
            _this.auth = auth;
            console.log(auth);
        });
    }
    AuthService.prototype.loginGoogle = function () {
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Google,
            method: angularfire2_1.AuthMethods.Redirect,
        });
    };
    AuthService.prototype.loginFacebook = function () {
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Facebook,
            method: angularfire2_1.AuthMethods.Redirect,
        });
    };
    AuthService.prototype.loginGithub = function () {
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Github,
            method: angularfire2_1.AuthMethods.Redirect,
        });
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.auth !== null && !this.expired;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "expired", {
        get: function () {
            return !this.auth || (this.auth.expires * 1000) < Date.now();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "id", {
        get: function () {
            return this.auth.uid ? this.auth.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.logout = function () {
        this.af.auth.logout();
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map