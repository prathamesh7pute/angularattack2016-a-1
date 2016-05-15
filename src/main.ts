import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ExpenseBreakAppComponent, environment } from './app/';

import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(ExpenseBreakAppComponent, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://radiant-torch-6585.firebaseio.com')
]);
