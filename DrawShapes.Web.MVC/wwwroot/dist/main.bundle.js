webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Following routing table defines routes for all high level screens.
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'help',
        component: __WEBPACK_IMPORTED_MODULE_3__help_help_component__["a" /* HelpComponent */]
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */]
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a [routerLink]=\"['home']\" class=\"navbar-brand\">Draw Shapes Application</a>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav\" onclick=\"$('.navbar-collapse').collapse('hide');\">\r\n        <li><a [routerLink]=\"['home']\"><i class=\"fa fa-home right-margin\"></i>Home</a></li>\r\n        <li><a [routerLink]=\"['help']\"><i class=\"fa fa-question-circle right-margin\"></i>Help</a></li>\r\n        <li><a href=\"mailto:dwijen.shah@gmail.com?Subject=Draw%20Shapes%20Application\"><i class=\"fa fa-envelope right-margin\"></i>Contact Dwijen</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container body-content\">\r\n  <router-outlet></router-outlet>\r\n\r\n  <hr />\r\n  <footer>\r\n    <p>&copy; 2018 - Draw Shapes using Natural Language - Dwijen Shah</p>\r\n  </footer>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_module__ = __webpack_require__("../../../../../src/app/not-found/not-found.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_help_module__ = __webpack_require__("../../../../../src/app/help/help.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_module__["a" /* NotFoundModule */],
            __WEBPACK_IMPORTED_MODULE_6__help_help_module__["a" /* HelpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Response; });
var Response = (function () {
    function Response(data) {
        this.data = data;
    }
    return Response;
}());

//# sourceMappingURL=core.model.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var CoreModule = CoreModule_1 = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: []
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [],
        declarations: [],
        exports: [],
        providers: []
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* SkipSelf */])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

var CoreModule_1;
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>How To <i class=\"fa fa-question-circle\"></i> </h2>\r\n<p>\r\n  Please enter a natural language command to draw the shape. Example: Draw a(n) [shape] with a(n) [measurement] of [amount] (and a(n) [measurement] of\r\n  [amount]). Please also see examples below on how to draw a specific shape.\r\n</p>\r\n\r\n<section>\r\n  <h3>How to Draw a Circle <i class=\"fa fa-question-circle\"></i> </h3>\r\n  <p>\r\n    You can draw a circle with either mentioning radius, height or width.\r\n    When you specify height or width, it draws the circle with half the radius of that height or width value.\r\n  </p>\r\n  <p class=\"examples\">\r\n    Examples: <br />\r\n    Draw a circle with a radius of 100. <br />\r\n    Draw a circle with a height of 100. <br />\r\n    Draw a circle with a width of 100. <br />\r\n  </p>\r\n</section>\r\n\r\n<section>\r\n  <h3>How to Draw an Oval <i class=\"fa fa-question-circle\"></i></h3>\r\n  <p>\r\n    You can draw an oval with mentioning both height and width, since oval has different height and width value.\r\n  </p>\r\n  <p class=\"examples\">\r\n    Examples: <br />\r\n    Draw an oval with a height of 100 and a width of 200. <br />\r\n  </p>\r\n</section>\r\n\r\n<section>\r\n  <h3>How to Draw a Triangle <i class=\"fa fa-question-circle\"></i></h3>\r\n  <p>\r\n    You can draw a triangle with mentioning either height or width or both height and width.\r\n    When you mention both height and width (different values), it draws an isosceles triangle.\r\n    When you mention just height or width, it draws a regular triangle with same sides.\r\n  </p>\r\n  <p class=\"examples\">\r\n    Examples: <br />\r\n    Draw a triangle with height of 100. <br />\r\n    Draw a triangle with width of 200. <br />\r\n    Draw a triangle with width of 200 and height of 100. <br />\r\n  </p>\r\n</section>\r\n\r\n\r\n<section>\r\n  <h3>How to Draw a Square <i class=\"fa fa-question-circle\"></i></h3>\r\n  <p>\r\n    You can draw a square with either mentioning height or width, because a square has same height and width.\r\n  </p>\r\n  <p class=\"examples\">\r\n    Examples: <br />\r\n    Draw a square with a height of 100. <br />\r\n    Draw a square with a width of 100. <br />\r\n  </p>\r\n</section>\r\n\r\n\r\n<section>\r\n  <h3>How to Draw a Rectangle or Parallelogram <i class=\"fa fa-question-circle\"></i></h3>\r\n  <p>\r\n    You can draw a rectangle or parallelogram with mentioning both height and width which also differ in value,\r\n    since both rectangle and parallelogram have different height and width dimensions.\r\n  </p>\r\n  <p class=\"examples\">\r\n    Examples: <br />\r\n    Draw a rectangle with a height of 100 and a width of 200. <br />\r\n    Draw a parallelogram with a height of 150 and a width of 250. <br />\r\n  </p>\r\n</section>\r\n\r\n\r\n<section>\r\n  <h3>How to Draw a Pentagon or Hexagon or Heptagon or Octagon <i class=\"fa fa-question-circle\"></i></h3>\r\n  <p>\r\n    You can draw a pentagon or hexagon or heptagon or octagon by mentioning the length of its sides.\r\n  </p>\r\n  <p class=\"examples\">\r\n    Examples: <br />\r\n    Draw a pentagon with a side of 200. <br />\r\n    Draw a hexagon with a side of 150. <br />\r\n    Draw a heptagon with a side of 120. <br />\r\n    Draw an octagon with a side of 100. <br />\r\n  </p>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-help',
        template: __webpack_require__("../../../../../src/app/help/help.component.html"),
        styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ "../../../../../src/app/help/help.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpModule = (function () {
    function HelpModule() {
    }
    return HelpModule;
}());
HelpModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__help_component__["a" /* HelpComponent */]
        ],
        providers: []
    })
], HelpModule);

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "canvas {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.canvas-host, .home-screen {\r\n  width: 100%;\r\n  height: 90%;\r\n}\r\n.home-screen {\r\n  padding-top: 10px;\r\n}\r\n.command-input {\r\n  width: 80%;\r\n  margin-bottom: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-screen\">\r\n  <div class=\"alert alert-danger\" *ngIf=\"errorMessages != null && errorMessages.length > 0\">\r\n    <span>Validation Messages:</span>\r\n    <ul>\r\n      <li *ngFor=\"let message of errorMessages\">\r\n        {{message}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <label for=\"commandText\">\r\n    Write Command to Draw Shape:\r\n    <button class=\"btn btn-sm btn-info\" [routerLink]=\"['/help']\">\r\n      <i class=\"fa fa-question-circle right-margin\"></i> How To\r\n    </button>\r\n  </label>\r\n\r\n  <div id=\"input-container\">\r\n    <input id=\"commandText\" class=\"command-input\" type=\"text\" [(ngModel)]=\"model.command\" />\r\n    <button class=\"btn btn-sm btn-primary\" (click)=\"draw()\">\r\n      <i class=\"fa fa-paint-brush right-margin\"></i> Draw Shape\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"canvas-host with-canvas-bg\"><canvas id=\"canvas\"></canvas></div>\r\n</div>\r\n<div class=\"loading\" *ngIf=\"isProcessing\">Loading.......</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fabric__ = __webpack_require__("../../../../fabric/dist/fabric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fabric__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_model__ = __webpack_require__("../../../../../src/app/home/home.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shapes_service__ = __webpack_require__("../../../../../src/app/home/shapes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Fabric library is used to draw the shape, as its a flexible library for drawing shapes and also gives ability to end users to select shape objects and resize/rotate it.



var HomeComponent = (function () {
    function HomeComponent(http, shapesService) {
        this.http = http;
        this.shapesService = shapesService;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__home_model__["a" /* HomeModel */]();
        this.canvasContainer = null;
        this.errorMessages = null;
        this.isProcessing = false;
        this.subscribeForParserResponse();
    }
    //Component initialization code.
    HomeComponent.prototype.ngOnInit = function () {
        this.canvasContainer = document.getElementsByClassName('canvas-host')[0];
        this.canvas = new __WEBPACK_IMPORTED_MODULE_2_fabric__["fabric"].Canvas('canvas', {
            width: this.canvasContainer.clientWidth,
            height: this.canvasContainer.clientHeight
        });
    };
    //Following method calls the shapes service to send the command to server to parse into a shape.
    HomeComponent.prototype.draw = function () {
        this.errorMessages = null;
        this.isProcessing = true;
        this.shapesService.parse(this.model.command);
    };
    //This method subscribes to shapes parsing service's response from server and once returned , it draws the shape on the canvas.
    HomeComponent.prototype.subscribeForParserResponse = function () {
        var _this = this;
        this.shapesService.parsingCompletedObserver.subscribe(function (response) {
            _this.isProcessing = false;
            if (response != null && _this.canvas != null && _this.canvasContainer != null) {
                if (response.errorMessages != null && response.errorMessages.length > 0) {
                    //if errors found in response.
                    _this.canvas.clear();
                    _this.errorMessages = response.errorMessages;
                }
                else {
                    //if no errors found in response.
                    var shape = response.data;
                    if (_this.canvasContainer != null) {
                        shape.top = (_this.canvasContainer.clientHeight / 2) - (shape.height / 2);
                        shape.left = (_this.canvasContainer.clientWidth / 2) - (shape.width / 2);
                    }
                    _this.canvas.clear();
                    _this.canvas.add(shape.getDrawingObject()); //this draws the fabric shape on the canvas.
                }
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shapes_service__["a" /* ShapesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shapes_service__["a" /* ShapesService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModel; });
var HomeModel = (function () {
    function HomeModel() {
    }
    return HomeModel;
}());

//# sourceMappingURL=home.model.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shapes_service__ = __webpack_require__("../../../../../src/app/home/shapes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shapes_service__["a" /* ShapesService */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/shapes.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shape; });
/* unused harmony export Oval */
/* unused harmony export Triangle */
/* unused harmony export Rectangle */
/* unused harmony export Parallelogram */
/* unused harmony export Polygon */
/* unused harmony export ShapeAttributes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fabric__ = __webpack_require__("../../../../fabric/dist/fabric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fabric__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

//Shape object defines all common properties and methods for all shape objects.
var Shape = (function () {
    function Shape(height, width, left, top, fillColor) {
        if (fillColor === void 0) { fillColor = Shape.DEFAULT_FILL_COLOR; }
        this.height = height;
        this.width = width;
        this.left = left;
        this.top = top;
        this.fillColor = fillColor;
        this.shapeType = '';
    }
    //This method parses response and creates the Shape which can draw a Fabric Shape.
    Shape.parseResponse = function (response) {
        if (response.shapeType === 'circle' || response.shapeType === 'oval') {
            return new Oval(response.height, response.width, this.DEFAULT_LEFT, this.DEFAULT_TOP);
        }
        if (response.shapeType === 'square' || response.shapeType === 'rectangle') {
            return new Rectangle(response.height, response.width, this.DEFAULT_LEFT, this.DEFAULT_TOP);
        }
        if (response.shapeType === 'triangle') {
            return new Triangle(response.height, response.width, this.DEFAULT_LEFT, this.DEFAULT_TOP);
        }
        if (response.shapeType === 'parallelogram') {
            return new Parallelogram(response.height, response.width, this.DEFAULT_LEFT, this.DEFAULT_TOP);
        }
        return new Polygon(response.numberOfAngles, response.height, response.width, response.side, this.DEFAULT_LEFT, this.DEFAULT_TOP);
    };
    //This method calculates poligon points by height and width
    Shape.prototype.getPolygonCoordinates = function (numberOfAngles, height, width, xCenter, yCenter) {
        var xyCords = [];
        for (var i = 1; i <= numberOfAngles; i += 1) {
            xyCords.push({
                x: xCenter + (width / 2) * Math.cos(i * 2 * Math.PI / numberOfAngles),
                y: yCenter + (height / 2) * Math.sin(i * 2 * Math.PI / numberOfAngles)
            });
        }
        return xyCords;
    };
    //This method calculates poligon points by side length
    Shape.prototype.getPolygonCoordinatesBySideLength = function (numberOfAngles, side, xCenter, yCenter) {
        var xyCords = [];
        for (var i = 1; i <= numberOfAngles; i += 1) {
            xyCords.push({
                x: xCenter + (side) * Math.cos(i * 2 * Math.PI / numberOfAngles),
                y: yCenter + (side) * Math.sin(i * 2 * Math.PI / numberOfAngles)
            });
        }
        return xyCords;
    };
    return Shape;
}());

Shape.DEFAULT_OPACITY_CONST = 1; //For now , shapes are not transperant, but transperancy can be added by changing default opacity.
Shape.DEFAULT_FILL_COLOR = 'blue'; //default fill color for drawing shapes.
Shape.DEFAULT_BORDER_COLOR = 'black'; //default border color around shapes.
Shape.DEFAULT_TOP = 10; //default starting Top point for drawing shapes.
Shape.DEFAULT_LEFT = 10; //default starting Left point for drawing shapes.
//Oval shape is responsible for rendering oval/circle using target library, in this case Fabric JS.
var Oval = (function (_super) {
    __extends(Oval, _super);
    function Oval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //following method returns a drawing object which is then painted on the canvas.
    Oval.prototype.getDrawingObject = function () {
        //when height = width, Ellipse results into circle otherwise it results into oval.
        return new __WEBPACK_IMPORTED_MODULE_0_fabric__["fabric"].Ellipse({
            left: this.left,
            top: this.top,
            rx: this.width / 2,
            ry: this.height / 2,
            fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST, stroke: Shape.DEFAULT_BORDER_COLOR, strokeWidth: 3, strokeDashArray: [10, 10],
        });
    };
    return Oval;
}(Shape));

//Triangle shape is responsible for rendering shape using target library, in this case Fabric JS.
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //following method returns a drawing object which is then painted on the canvas.
    Triangle.prototype.getDrawingObject = function () {
        return new __WEBPACK_IMPORTED_MODULE_0_fabric__["fabric"].Triangle({
            left: this.left,
            top: this.top,
            width: this.width,
            height: this.height,
            fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST, stroke: Shape.DEFAULT_BORDER_COLOR, strokeWidth: 3, strokeDashArray: [10, 10],
        });
    };
    return Triangle;
}(Shape));

//Rectangle shape is responsible for rendering rectangle/square using target library, in this case Fabric JS.
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //following method returns a drawing object which is then painted on the canvas.
    Rectangle.prototype.getDrawingObject = function () {
        //when height = width, fabric.Rect results into square otherwise it results into rectangle.
        return new __WEBPACK_IMPORTED_MODULE_0_fabric__["fabric"].Rect({
            left: this.left,
            top: this.top,
            width: this.width,
            height: this.height,
            fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST, stroke: Shape.DEFAULT_BORDER_COLOR, strokeWidth: 3, strokeDashArray: [10, 10],
        });
    };
    return Rectangle;
}(Shape));

//Parallelogram shape is responsible for rendering a polygon using target library, in this case Fabric JS.
var Parallelogram = (function (_super) {
    __extends(Parallelogram, _super);
    function Parallelogram(height, width, left, top, fillColor) {
        if (fillColor === void 0) { fillColor = Shape.DEFAULT_FILL_COLOR; }
        return _super.call(this, height, width, left, top, fillColor) || this;
    }
    //following method calculates all four points of a polygon which the lines are connected to.
    Parallelogram.prototype.getDrawingObject = function (side) {
        if (side === void 0) { side = null; }
        var xyCords = [
            { x: this.left, y: this.top },
            { x: this.left + this.width, y: this.top },
            { x: this.left + this.width - (this.width * 0.2), y: this.top + this.height },
            { x: this.left - (this.width * 0.2), y: this.top + this.height } //move and create a point to draw line to bottom left position.
        ];
        //draw the polygon with x and y co-ordinate points calculated above.
        return new __WEBPACK_IMPORTED_MODULE_0_fabric__["fabric"].Polygon(xyCords, {
            left: this.left,
            top: this.top,
            angle: 0,
            fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST, stroke: Shape.DEFAULT_BORDER_COLOR, strokeWidth: 3, strokeDashArray: [10, 10],
        });
    };
    return Parallelogram;
}(Shape));

//Polygon shape is responsible for rendering a Pentagon or Hexagon or Heptagon or Octagon using target library, in this case Fabric JS.
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(numberOfAngles, height, width, side, left, top, fillColor) {
        if (fillColor === void 0) { fillColor = Shape.DEFAULT_FILL_COLOR; }
        var _this = _super.call(this, height, width, left, top, fillColor) || this;
        _this.numberOfAngles = numberOfAngles;
        _this.side = side;
        return _this;
    }
    Polygon.prototype.getDrawingObject = function () {
        var xyCords = [];
        if (this.side != null) {
            //calculate x and y co-ordinates using length of all sides.
            xyCords = this.getPolygonCoordinatesBySideLength(this.numberOfAngles, this.side, this.left + this.width / 2, this.top + this.height / 2);
        }
        else {
            //calculate x and y co-ordinates using height and width of polygon.
            xyCords = this.getPolygonCoordinates(this.numberOfAngles, this.height, this.width, this.left + this.width / 2, this.top + this.height / 2);
        }
        //draw the polygon with x and y co-ordinate points calculated above.
        return new __WEBPACK_IMPORTED_MODULE_0_fabric__["fabric"].Polygon(xyCords, {
            left: 10,
            top: 10,
            angle: 0,
            fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST, stroke: Shape.DEFAULT_BORDER_COLOR, strokeWidth: 3, strokeDashArray: [10, 10],
        });
    };
    return Polygon;
}(Shape));

var ShapeAttributes = (function () {
    function ShapeAttributes() {
    }
    return ShapeAttributes;
}());

//# sourceMappingURL=shapes.model.js.map

/***/ }),

/***/ "../../../../../src/app/home/shapes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shapes_model__ = __webpack_require__("../../../../../src/app/home/shapes.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_model__ = __webpack_require__("../../../../../src/app/core/core.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//ShapesService is responsible for asynchronous parsing of all commands on the server and then returning the observable to wait for the response.
var ShapesService = (function () {
    function ShapesService(http) {
        this.http = http;
        this.parsingCompletedObserver = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](null);
    }
    //Following method sends natural language command to server for parsing into shape attributes
    //and once the response is returned fires an observable which the consumer of this service can use to process response.
    ShapesService.prototype.parse = function (command) {
        var _this = this;
        var options = { headers: { 'content-type': 'text/plain' } };
        this.http.post('api/ShapesParser/parse', command, options).subscribe(function (response) {
            var responseObj = response.json();
            if (responseObj.errorMessages == null || responseObj.errorMessages.length === 0) {
                //if the response is valid then translate shape attributes into a Shape object, which can then be rendered by the consumer.
                var result = __WEBPACK_IMPORTED_MODULE_2__shapes_model__["a" /* Shape */].parseResponse(responseObj.data);
                _this.parsingCompletedObserver.next(new __WEBPACK_IMPORTED_MODULE_4__core_core_model__["a" /* Response */](result)); //fire observable for further processing of shape object.
            }
            else {
                _this.parsingCompletedObserver.next(responseObj); //fire observable for further processing of validation messages (like showing them on UI).
            }
        }, function (error) { return console.error(error); });
    };
    return ShapesService;
}());
ShapesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ShapesService);

var _a;
//# sourceMappingURL=shapes.service.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-not-found-image\">\n  <img src=\"images/404.gif\" />\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html")
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotFoundModule = (function () {
    function NotFoundModule() {
    }
    return NotFoundModule;
}());
NotFoundModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__not_found_component__["a" /* NotFoundComponent */]
        ],
        providers: []
    })
], NotFoundModule);

//# sourceMappingURL=not-found.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: MODULES.slice(),
        declarations: [],
        exports: MODULES.slice(),
        providers: [],
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map