/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      '@angular/cdk/a11y': 'npm:@angular/cdk/bundles/cdk-a11y.umd.js',
      '@angular/cdk/bidi': 'npm:@angular/cdk/bundles/cdk-bidi.umd.js',
      '@angular/cdk/coercion': 'npm:@angular/cdk/bundles/cdk-coercion.umd.js',
      '@angular/cdk/collections': 'npm:@angular/cdk/bundles/cdk-collections.umd.js',
      '@angular/cdk/keyboard': 'npm:@angular/cdk/bundles/cdk-keyboard.umd.js',
      '@angular/cdk/observe-content': 'npm:@angular/cdk/bundles/cdk-observe-content.umd.js',
      '@angular/cdk/platform': 'npm:@angular/cdk/bundles/cdk-platform.umd.js',
      '@angular/cdk/portal': 'npm:@angular/cdk/bundles/cdk-portal.umd.js',
      '@angular/cdk/rxjs': 'npm:@angular/cdk/bundles/cdk-rxjs.umd.js',
      '@angular/cdk/table': 'npm:@angular/cdk/bundles/cdk-table.umd.js',
      '@angular/cdk/testing': 'npm:@angular/cdk/bundles/cdk-testing.umd.js',
      '@angular/cdk/observers': 'npm:@angular/cdk/bundles/cdk-observers.umd.js',
      '@angular/cdk/overlay': 'npm:@angular/cdk/bundles/cdk-overlay.umd.js',
      '@angular/cdk/scrolling': 'npm:@angular/cdk/bundles/cdk-scrolling.umd.js',
      '@angular/cdk/stepper': 'npm:@angular/cdk/bundles/cdk-stepper.umd.js',
      '@angular/cdk/keycodes': 'npm:@angular/cdk/bundles/cdk-keycodes.umd.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'mapbox-gl': 'npm:mapbox-gl/dist/mapbox-gl.js',
      '@turf/helpers': 'npm:@turf/helpers/index.js',
      '@covalent/core': 'npm:@covalent/core/core.umd.js',
      'ng2-completer': 'npm:ng2-completer/ng2-completer.umd.js',
      'tslib': 'npm:tslib/tslib.js',
      '@auth0/angular-jwt': 'npm:@auth0/angular-jwt/bundles/core.umd.js',
      '@bindoc/config-store': 'npm:@bindoc/config-store/bundles/config-store.umd.js',
      '@bindoc/security': 'npm:@bindoc/security/bundles/security.umd.js',
      '@bindoc/maps': 'npm:@bindoc/maps/bundles/maps.umd.js',
      '@bindoc/material': 'npm:@bindoc/material/bundles/material.umd.js',
      '@bindoc/autocompletion': 'npm:@bindoc/autocompletion/bundles/autocompletion.umd.js',
      '@emergency/patient': 'npm:@emergency/patient/bundles/patient.umd.js',
      '@emergency/user': 'npm:@emergency/user/bundles/user.umd.js',
      '@emergency/service': 'npm:@emergency/service/bundles/service.umd.js',
      '@emergency/case': 'npm:@emergency/case/bundles/case.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'search': {
        main: 'index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);