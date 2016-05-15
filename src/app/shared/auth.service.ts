import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, FirebaseAuthState, AuthMethods } from 'angularfire2';

import { Router } from '@angular/router';


@Injectable()
export class AuthService {

    auth: FirebaseAuthState;

    constructor(private af: AngularFire, private router: Router) {
        this.af.auth.subscribe(auth => {
            this.auth = auth;
        });
    }

    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
        }).then(() => { this.router.navigate(['/expenses']); });
    }

    loginFacebook() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
        }).then(() => { this.router.navigate(['/expenses']); });
    }

    loginGithub() {
        this.af.auth.login({
            provider: AuthProviders.Github,
        }).then(() => { this.router.navigate(['/expenses']); });
    }

    get displayName(): string {
        let userName = '';
        if (this.auth) {
            switch (this.auth.auth['provider']) {
                case 'google':
                    userName = this.auth.google.displayName;
                    break;
                case 'facebook':
                    userName = this.auth.facebook.displayName;
                    break;
                case 'github':
                    userName = this.auth.github.displayName;
                    break;
                default:
                    userName = 'User';
                    break;
            }
        }
        return userName;
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
        this.router.navigate(['/']);
    }

}