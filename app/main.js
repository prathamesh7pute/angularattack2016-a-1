"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var angularfire2_1 = require('angularfire2');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    angularfire2_1.FIREBASE_PROVIDERS,
    angularfire2_1.defaultFirebase('https://radiant-torch-6585.firebaseio.com')
]);
//# sourceMappingURL=main.js.map