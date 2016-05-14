import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, FirebaseAuthState, AuthMethods } from 'angularfire2';


@Injectable()
export class AuthService {

    auth: FirebaseAuthState;

    constructor(private af: AngularFire) {
        this.af.auth.subscribe(auth => {
            this.auth = auth;
            console.log(auth);
        });
    }

    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Redirect,
        });
    }

    get expired(): boolean {
        return !this.auth || (this.auth.expires * 1000) < Date.now();
    }

    get id(): string {
        return this.auth.uid ? this.auth.uid : '';
    }

    logOut(): void {
        this.af.auth.logout();
    }

}