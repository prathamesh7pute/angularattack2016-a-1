import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig } from 'angularfire2';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase('https://radiant-torch-6585.firebaseio.com')
]);