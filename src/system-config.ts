/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {};

/** User packages configuration. */
const packages: any = {};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core', '@angular/common', '@angular/compiler', '@angular/http', '@angular/router',
  '@angular/platform-browser', '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app', 'app/shared', 'app/+home', 'app/+expenses',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => { cliSystemConfigPackages[barrelName] = {main: 'index'}; });

/** Type declaration for ambient System. */
declare var System: any;

// Angular Material 2 Packages to load.
var _materialPackages = [
  'core', 'toolbar', 'button', 'card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
  'progress-circle', 'radio', 'sidenav'
];

_materialPackages.forEach(function(item) {
  // All Material 2 components are prefixed with  @angular2-material and use
  // the components name as entry point.
  cliSystemConfigPackages['@angular2-material/' + item] = {main: item};
});

cliSystemConfigPackages['angularfire2'] = {
  defaultExtension: 'js',
  main: 'angularfire2.js'
};

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    '@angular2-material': 'vendor/@angular2-material',
    'firebase': 'vendor/firebase/lib/firebase-web.js',
    'angularfire2': 'vendor/angularfire2',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({map, packages});
