/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

// // if you are compiling to ES5 (check tsconfig.json) then you need this
// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
// import '@webcomponents/webcomponentsjs/webcomponents-bundle';
// import '@webcomponents/webcomponentsjs/webcomponents-loader';
// // for browser not supporting custom elements
// import '@webcomponents/custom-elements/custom-elements.min.js';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/** For IE 11 */
// import 'core-js/es/promise';
// import 'core-js/es/string';
// import 'core-js/es/map';
// import 'core-js/es/array';
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
// import 'core-js';
// import 'core-js/es/symbol';
// import 'core-js/es/object';
// import 'core-js/es/function';
// import 'core-js/es/parse-int';
// import 'core-js/es/parse-float';
// import 'core-js/es/number';
// import 'core-js/es/math';
// // import 'core-js/es/string';
// import 'core-js/es/date';
// import 'core-js/es/array';
// import 'core-js/es/regexp';
// import 'core-js/es/map';
// import 'core-js/es/weak-map';
// import 'core-js/es/set';
// import 'core-js/es/reflect';
// import 'core-js/stable/array';
// import 'core-js/stable/date';
// import 'core-js/stable/function';
// import 'core-js/stable/map';
// import 'core-js/stable/math';
// import 'core-js/stable/number';
// import 'core-js/stable/object';
// import 'core-js/stable/parse-float';
// import 'core-js/stable/parse-int';
// // import 'core-js/stable/regexp';
// import 'core-js/stable/set';
// import 'core-js/stable/string';
// import 'core-js/stable/symbol';
// import 'core-js/stable/weak-map';
// import 'core-js/client/shim';
// import 'core-js/es7/reflect';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js'; // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js'; // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
// (window as any).__Zone_enable_cross_context_check = true;
// (window as any).__Zone_disable_toString = true;
import 'zone.js'; // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
// import 'document-register-element';
// import '@webcomponents/custom-elements/custom-elements.min';

// Custom Elements polyfill. Required for browsers that do not natively support Custom Elements.
// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
// import '@webcomponents/custom-elements';
// Custom Elements ES5 shim. Required when using ES5 bundles on browsers that natively support
// Custom Elements (either because the browser does not support ES2015 modules or because the app
// is explicitly configured to generate ES5 only bundles).
// import '@webcomponents/custom-elements/src/native-shim';
