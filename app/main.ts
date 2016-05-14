import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import {FIREBASE_PROVIDERS,
    defaultFirebase,
    AngularFire,
    AuthMethods,
    AuthProviders,
    firebaseAuthConfig} from 'angularfire2';

bootstrap(AppComponent, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://radiant-torch-6585.firebaseio.com')
]);