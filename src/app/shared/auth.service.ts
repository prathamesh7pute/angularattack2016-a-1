import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, FirebaseAuthState, AuthMethods } from 'angularfire2';

import { Router } from '@angular/router';


@Injectable()
export class AuthService {

    auth: FirebaseAuthState;

    constructor(private af: AngularFire, private router: Router) {
        this.af.auth.subscribe(auth => {
            this.auth = auth;
            if (this.authenticated) {
                this.router.navigate(['/expenses']);
            } else {
                this.router.navigate(['/']);
            }
        });
    }

    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Redirect,
        });
    }

    loginFacebook() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Redirect,
        });
    }

    loginGithub() {
        this.af.auth.login({
            provider: AuthProviders.Github,
            method: AuthMethods.Redirect,
        });
    }

    get displayName(): string {
        return this.auth && this.auth.google ? this.auth.google.displayName : 'User';
    }

    get authenticated(): boolean {
        return this.auth !== null && !this.expired;
    }


    get expired(): boolean {
        return !this.auth || (this.auth.expires * 1000) < Date.now();
    }

    get id(): string {
        return this.auth.uid ? this.auth.uid : '';
    }

    logout(): void {
        this.af.auth.logout();
    }

}