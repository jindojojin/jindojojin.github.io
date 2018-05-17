webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Cookiee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getCookie;
/* unused harmony export deleteCookie */
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteAllCookies;
/* harmony export (immutable) */ __webpack_exports__["c"] = setCookie;
function getCookie(name) {
    var nameLenPlus = (name.length + 1);
    return document.cookie
        .split(';')
        .map(function (c) { return c.trim(); })
        .filter(function (cookie) {
        return cookie.substring(0, nameLenPlus) === name + "=";
    })
        .map(function (cookie) {
        return decodeURIComponent(cookie.substring(nameLenPlus));
    })[0] || null;
}
function deleteCookie(name) {
    try {
        document.cookie = name + '= ""; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        return true;
    }
    catch (error) {
        return false;
    }
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__learnpage_learnpage_component__ = __webpack_require__("./src/app/learnpage/learnpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_card_create_card_component__ = __webpack_require__("./src/app/create-card/create-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginpage_loginpage_component__ = __webpack_require__("./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_guard__ = __webpack_require__("./src/app/user.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: "learn/:type/:id", component: __WEBPACK_IMPORTED_MODULE_3__learnpage_learnpage_component__["a" /* LearnpageComponent */] },
    { path: "create", canActivate: [__WEBPACK_IMPORTED_MODULE_6__user_guard__["a" /* UserGuard */]], component: __WEBPACK_IMPORTED_MODULE_4__create_card_create_card_component__["a" /* CreateCardComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_5__loginpage_loginpage_component__["a" /* LoginpageComponent */] },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", redirectTo: "home", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__user_guard__["a" /* UserGuard */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n    /* background-color: rgb(231, 231, 231); */\r\n}\r\n\r\n.container{\r\n    background-color: white !important;\r\n    padding: 2%;\r\n    border-radius: 10px;\r\n    z-index: 99999999999;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <title>Page Title</title>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link href=\"https://unpkg.com/ionicons@4.0.0/dist/css/ionicons.min.css\"rel=\"stylesheet\"/>\r\n\r\n</head>\r\n<body>\r\n  <app-navigation-bar></app-navigation-bar>\r\n<div class=\"main\">\r\n    <br/>\r\n    <!-- <i class=\"icon ion-md-add\"></i> -->\r\n    <br/> \r\n  <div class=\"container my-4\">\r\n    <router-outlet></router-outlet>\r\n   </div>\r\n\r\n</div>\r\n</body>\r\n</html>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_bar_navigation_bar_component__ = __webpack_require__("./src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_card_component__ = __webpack_require__("./src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__learnpage_learnpage_component__ = __webpack_require__("./src/app/learnpage/learnpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_card_create_card_component__ = __webpack_require__("./src/app/create-card/create-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__loginpage_loginpage_component__ = __webpack_require__("./src/app/loginpage/loginpage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navigation_bar_navigation_bar_component__["a" /* NavigationBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__learnpage_learnpage_component__["a" /* LearnpageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__create_card_create_card_component__["a" /* CreateCardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__loginpage_loginpage_component__["a" /* LoginpageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mx-2 my-2\" style=\"height: 270px;\">\r\n    <img *ngIf='typeAvatar == \"img\"' class=\"card-img-top\" height=\"230px\" src=\"{{avatar}}\" alt=\"Card image\">\r\n    <p *ngIf='typeAvatar == \"text\"' class=\"card-header\" style=\"height: 230px; text-align:center; vertical-align: middle; font-size: 25px\">{{avatar}}</p>\r\n    <h5 class=\"card-title\" style=\"text-align: center\">{{cardTitle}}</h5>\r\n</div>"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "cardTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "avatar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "typeAvatar", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("./src/app/card/card.component.html"),
            styles: [__webpack_require__("./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/create-card/create-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-card/create-card.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-group\" (ngSubmit)=\"sendNewCardCollection()\" validate [formGroup]=\"newCardCollection\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-12 \">\r\n      <!-- info -->\r\n      <h5>Tên bộ thẻ</h5>\r\n      <input class=\"form-control\" type=\"text\" formControlName=\"title\">\r\n      <span style=\"color:red !important\" *ngIf=\"newCardCollection.controls.title.errors\">Không được bỏ trống hoặc dài quá 30 kí tự</span>\r\n      <br/>\r\n      <h5>Ảnh đại điện</h5>\r\n      <img *ngIf='newCardCollection.value.typeAvatar == \"img\" ' class=\"float-left\" style=\"width:230px; height:280px; border:1px solid; border-radius:10px\"\r\n              [src]=\"newCardCollection.value.avatar\" alt=\"\">\r\n            <select style=\"font-size: 15px; border-radius:5px\" class=\"float-right\" formControlName=\"typeAvatar\">\r\n              <option ngValue=\"img\">Link ảnh</option>\r\n              <option  ngValue=\"text\">Văn bản</option>\r\n            </select>\r\n            <input class=\"form-control\" type=\"text\" formControlName=\"avatar\" placeholder=\"Văn bản hoặc đường dẫn ảnh\">\r\n\r\n      <button [disabled]=\"newCardCollection.invalid\" type=\"submit\" class=\"btn btn-success my-5\" style=\"width:100%\">Tạo bộ thẻ này</button>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <h5>Thêm các thẻ dưới đây:</h5>\r\n      <br>\r\n      <div formArrayName=\"cards\">\r\n        <div *ngFor=\"let itemrow of newCardCollection.controls.cards.controls; let i=index\" [formGroupName]=\"i\" class=\"row\">\r\n          <div class=\"col-md-5 mx-1\">\r\n            <h6>Mặt trước</h6>\r\n            <img *ngIf='newCardCollection.value.cards[i].typeFront == \"img\" ' class=\"float-left\" style=\"width:150px; height:200px; border:1px solid; border-radius:10px\"\r\n              [src]=\"newCardCollection.value.cards[i].front\" alt=\"\">\r\n            <select style=\"font-size: 15px; border-radius:5px; margin:auto\" class=\"float-right\" formControlName=\"typeFront\">\r\n              <option ngValue=\"img\">Link ảnh</option>\r\n              <option ngValue=\"text\">Văn bản</option>\r\n            </select>\r\n            <input class=\"form-control\" type=\"text\" formControlName=\"front\" placeholder=\"Văn bản hoặc đường dẫn ảnh\">\r\n          </div>\r\n          <div class=\"col-md-5 mx-1\">\r\n            <h6>Mặt sau</h6>\r\n            <img *ngIf='newCardCollection.value.cards[i].typeBack == \"img\" ' class=\"float-left\" style=\"width:150px; height:200px; border:1px solid; border-radius:10px\"\r\n              [src]=\"newCardCollection.value.cards[i].back\" alt=\"\">\r\n            <select style=\"font-size: 15px; border-radius:5px\" class=\"float-right\" formControlName=\"typeBack\">\r\n              <option ngValue=\"img\">Link ảnh</option>\r\n              <option ngValue=\"text\">Văn bản</option>\r\n            </select>\r\n            <input class=\"form-control\" type=\"text\" formControlName=\"back\" placeholder=\"Văn bản hoặc đường dẫn ảnh\">\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-danger btn-sm\" style=\"position: relative;margin:auto;height:30px\" (click)=\"deleteRow(i)\">Xóa</button>\r\n          <p style=\"display: inline\" class=\"mx-3\">-------------</p>\r\n        </div>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-primary float-right mt-3\" (click)=\"addNewRow()\">Thêm thẻ khác</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/create-card/create-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cookiee__ = __webpack_require__("./src/app/Cookiee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCardComponent = /** @class */ (function () {
    function CreateCardComponent(formBuilder, dataService) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
    }
    CreateCardComponent.prototype.createItem = function () {
        return this.formBuilder.group({
            front: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            back: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            typeFront: ['text', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            typeBack: ['text', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
    };
    CreateCardComponent.prototype.addNewRow = function () {
        // control refers to your formarray
        var control = this.newCardCollection.controls['cards'];
        // add new formgroup
        control.push(this.createItem());
    };
    CreateCardComponent.prototype.deleteRow = function (index) {
        // control refers to your formarray
        var control = this.newCardCollection.controls['cards'];
        // remove the chosen row
        control.removeAt(index);
    };
    CreateCardComponent.prototype.sendNewCardCollection = function () {
        var _this = this;
        var body = this.newCardCollection.value;
        // console.log(body);
        var input = new FormData();
        input.append("userName", Object(__WEBPACK_IMPORTED_MODULE_3__Cookiee__["b" /* getCookie */])("userName"));
        input.append("title", body.title);
        input.append("avatar", body.avatar);
        input.append("typeAvatar", body.typeAvatar);
        input.append("cards", JSON.stringify(body.cards));
        this.dataService.sendNewCardCollection(input)
            .then(function (r) {
            if (r) {
                window.alert("Tạo bộ thẻ mới thành công, bộ thẻ này sẽ được tự động thêm vào mục yêu thích của bạn");
                _this.newCardCollection.reset();
            }
            else {
                window.alert("Đã có lỗi xảy ra ở phía server, vui lòng thử lại sau");
            }
        }).catch(function (e) { return window.alert("Server không phản hồi, vui lòng thử lại sau"); });
    };
    CreateCardComponent.prototype.ngOnInit = function () {
        this.newCardCollection = this.formBuilder.group({
            title: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30)]],
            avatar: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            typeAvatar: ['text', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            cards: this.formBuilder.array([this.createItem()])
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("avatar"),
        __metadata("design:type", Object)
    ], CreateCardComponent.prototype, "avatar", void 0);
    CreateCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-card',
            template: __webpack_require__("./src/app/create-card/create-card.component.html"),
            styles: [__webpack_require__("./src/app/create-card/create-card.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], CreateCardComponent);
    return CreateCardComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cookiee__ = __webpack_require__("./src/app/Cookiee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    // myWebServer= "http://localhost:9000";
    function DataService(http) {
        this.http = http;
        this.myWebServer = "https://tinycard-n4-server.herokuapp.com";
    }
    DataService.prototype.logIn = function (value) {
        var url = this.myWebServer + "/login";
        return this.http.post(url, value)
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) { return false; });
    };
    DataService.prototype.signUp = function (value) {
        var url = this.myWebServer + "/signup";
        return this.http.post(url, value)
            .toPromise()
            .then(function (res) {
            return true;
        })
            .catch(function (err) { return false; });
    };
    DataService.prototype.getListFavoriteCollection = function () {
        var url = this.myWebServer + "/list/FavoriteCardCollection/userName=" + Object(__WEBPACK_IMPORTED_MODULE_3__Cookiee__["b" /* getCookie */])("userName");
        // console.log(getCookie("userName"));
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return false; });
    };
    DataService.prototype.getListCardCollection = function () {
        var url = this.myWebServer + "/list/CardCollection";
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return false; });
    };
    DataService.prototype.getCardCollection = function (cardID) {
        var url = this.myWebServer + "/CardCollection/cardID=" + cardID;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return false; });
    };
    DataService.prototype.sendNewCardCollection = function (value) {
        console.log(value);
        var url = this.myWebServer + "/newCardCollection";
        return this.http.post(url, value)
            .toPromise()
            .then(function (res) { return true; })
            .catch(function (err) { return false; });
    };
    DataService.prototype.addFavorite = function (userName, collectionID) {
        var url = this.myWebServer + "/addFavorite/collectionID=" + collectionID + "/userName=" + userName;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return true; })
            .catch(function (err) { return false; });
    };
    DataService.prototype.removeFavorite = function (userName, collectionID) {
        var url = this.myWebServer + "/removeFavorite/collectionID=" + collectionID + "/userName=" + userName;
        ;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return true; })
            .catch(function (err) { return false; });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:rgb(255, 255, 255)\">\r\n    <div class=\"mx-4\">\r\n        <br/>\r\n        <h2 class=\" float-left \">Your favorites</h2>\r\n    </div>\r\n    <br/>\r\n    <br/>\r\n    <div class=\"row\">\r\n        <div  *ngFor=\"let card of FavoriteCards\" class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <a *ngIf=\"logedIn\" routerLink=\"/learn/myFavoriteCollection/{{card._id}}\">\r\n                <app-card [cardTitle]=\"card.title\" [avatar]=\"card.avatar\" [typeAvatar]=\"card.typeAvatar\"></app-card>\r\n            </a>\r\n        </div>\r\n        <h4 class=\"mx-5\" style=\"color: red\" *ngIf=\"!logedIn\">Hãy đăng nhập để sử dụng tính năng này</h4>\r\n    </div>\r\n\r\n    <div class=\"mx-4\">\r\n            <br/>\r\n            <h2 class=\" float-left \">All cards</h2>\r\n        </div>\r\n        <br/>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let card of Cards\" class=\"col-lg-3 col-md-4 col-sm-6\">\r\n                <a routerLink=\"/learn/collection/{{card._id}}\">\r\n                    <app-card [cardTitle]=\"card.title\" [avatar]=\"card.avatar\" [typeAvatar]=\"card.typeAvatar\"></app-card>\r\n                </a>\r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Cookiee__ = __webpack_require__("./src/app/Cookiee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(dataService) {
        this.dataService = dataService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logedIn = (Object(__WEBPACK_IMPORTED_MODULE_2__Cookiee__["b" /* getCookie */])("userName") != null) ? true : false;
        this.dataService.getListCardCollection().then(function (res) {
            // console.log(res);
            _this.Cards = res;
        })
            .catch(function (e) {
            _this.errServer = true;
        });
        if (this.logedIn) {
            this.dataService.getListFavoriteCollection()
                .then(function (res) {
                // console.log(res);
                _this.FavoriteCards = res;
            })
                .catch(function (e) {
                _this.errServer = true;
            });
        }
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/learnpage/learnpage.component.css":
/***/ (function(module, exports) {

module.exports = "label {\r\n display: inline;\r\ncursor: pointer;\r\n}\r\n\r\n.card {\r\n  width: 100% !important;\r\n  height: 350px !important;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n  -webkit-transition: all 600ms;\r\n  transition: all 600ms;\r\n  z-index: 20;\r\n}\r\n\r\n.card div {\r\n  width: 100% !important;\r\n  height: 350px !important;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    border-radius: 2px;\r\n}\r\n\r\n.card .back  {\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  position: relative;\r\n  bottom: 350px;\r\n  \r\n}\r\n\r\ninput {\r\n  display: none;\r\n}\r\n\r\n:checked + .card {\r\n  transform: rotateY(180deg);\r\n  -webkit-transform: rotateY(180deg);\r\n}\r\n\r\n.front img, .back img {\r\n  width: 100% !important;\r\n  height: 350px !important;\r\n}\r\n\r\n/* căn giữa chữ */\r\n\r\n.area { \r\n  width: 300px; \r\n  height: 300px; \r\n  position: relative;\r\n}\r\n\r\n.bubble { \r\n  position: absolute; \r\n  left: 0; \r\n  top: 0; \r\n  width: 300px; \r\n  height: 84px; \r\n  display: table; \r\n}\r\n\r\n.bubble p {\r\n  font-size: 50px;\r\n  max-width: 300px;\r\n  word-wrap: break-word;\r\n  display: table-cell; \r\n  vertical-align: middle; \r\n  text-align: center; \r\n}"

/***/ }),

/***/ "./src/app/learnpage/learnpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:whitesmoke\">\r\n  <button class=\"btn btn-danger my-3 mx-1\" routerLink=\"/home\">X</button>\r\n  <button *ngIf=\"!favorite\" (click)=\"addToFavorite()\" class=\" btn btn-primary float-right my-3 mx-1\">Thêm vào mục yêu thích</button>\r\n  <button *ngIf=\"favorite\" (click)=\"removeOfFavorite()\" class=\" btn btn-danger float-right my-3 mx-1\">Xóa khỏi mục yêu thích</button>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-offset-3\"></div>\r\n    <div class=\"col col-12 col-md-4\">\r\n      <label>\r\n        <input type=\"checkbox\" />\r\n        <div class=\"card\">\r\n          <div class=\"front\">\r\n            <div *ngIf='typeFront==\"text\"' class=\"area\">\r\n              <div class=\"bubble\">\r\n                <p>{{front}}</p>\r\n              </div>\r\n            </div>\r\n            <img *ngIf='typeFront==\"img\"' src=\"{{front}}\">\r\n          </div>\r\n          <div class=\"back\">\r\n            <img *ngIf='typeBack==\"img\"' src=\"{{back}}\">\r\n            <div *ngIf='typeBack==\"text\"' class=\"area\">\r\n              <div class=\"bubble\">\r\n                <p>{{back}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button *ngIf=\"!isFirst\" class=\"btn btn-success my-3 float-left\" (click)=\"backCard()\">Back</button>\r\n        <button *ngIf=\"!isLast\" class=\"btn btn-success my-3 float-right\" (click)=\"nextCard()\">Next</button>\r\n      </label>\r\n    </div>\r\n    <div class=\"col col-md-offset-3\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/learnpage/learnpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cookiee__ = __webpack_require__("./src/app/Cookiee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LearnpageComponent = /** @class */ (function () {
    function LearnpageComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.favorite = false;
        this.front = "Đây là mặt trước";
        this.back = "Đây là mặt sau";
        this.typeFront = "text";
        this.typeBack = "text";
        this.current = 0;
        this.isFirst = true;
        this.isLast = false;
    }
    LearnpageComponent.prototype.addToFavorite = function () {
        var _this = this;
        this.dataService.addFavorite(Object(__WEBPACK_IMPORTED_MODULE_3__Cookiee__["b" /* getCookie */])("userName"), this.cardID)
            .then(function (r) {
            if (r) {
                _this.favorite = true;
            }
        }).catch(function (e) { return _this.favorite = false; });
    };
    LearnpageComponent.prototype.removeOfFavorite = function () {
        var _this = this;
        this.dataService.removeFavorite(Object(__WEBPACK_IMPORTED_MODULE_3__Cookiee__["b" /* getCookie */])("userName"), this.cardID)
            .then(function (r) {
            if (r) {
                _this.favorite = false;
            }
        }).catch(function (e) { return _this.favorite = true; });
    };
    LearnpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardID = this.route.snapshot.paramMap.get("id");
        var type = this.route.snapshot.paramMap.get("type");
        this.favorite = (type == "collection") ? false : true;
        this.dataService.getCardCollection(this.cardID)
            .then(function (res) {
            _this.cards = res;
            _this.sizeCards = res.length;
            _this.update(res[0]);
        })
            .catch(function (err) {
            // console.log(err);
            window.alert("Server xảy ra lỗi, vui lòng thử lại sau");
        });
    };
    LearnpageComponent.prototype.nextCard = function () {
        this.isFirst = false;
        if (this.current < this.cards.length - 1) {
            this.current++;
            if (this.current == this.cards.length - 1) {
                this.isFirst = true;
            }
            this.update(this.cards[this.current]);
        }
        else
            this.isLast = true;
    };
    ;
    LearnpageComponent.prototype.backCard = function () {
        this.isLast = false;
        if (this.current > 0) {
            this.current--;
            if (this.current == 0) {
                this.isFirst = true;
            }
            this.update(this.cards[this.current]);
        }
        else
            this.isFirst = true;
    };
    ;
    LearnpageComponent.prototype.update = function (card) {
        this.front = card.front;
        this.back = card.back;
        this.typeFront = card.typeFront;
        this.typeBack = card.typeBack;
    };
    LearnpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-learnpage',
            template: __webpack_require__("./src/app/learnpage/learnpage.component.html"),
            styles: [__webpack_require__("./src/app/learnpage/learnpage.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], LearnpageComponent);
    return LearnpageComponent;
}());



/***/ }),

/***/ "./src/app/loginpage/loginpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n        \n  <div class=\"col-md-6\">\n    <form *ngIf=\"!signup\" (ngSubmit)=\"Login()\" validate [formGroup]=\"formLogin\">\n      <div class=\"container\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Tên đăng nhập</label>\n          <input formControlName=\"username\" class=\" form-control form-control-lg\" placeholder=\"Username\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Mật khẩu</label>\n          <input formControlName=\"password\" type=\"password\" class=\"form-control form-control-lg\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group form-check\">\n          <input type=\"checkbox\" class=\"form-check-input\">\n          <label class=\"form-check-label\" for=\"exampleCheck1\">Ghi nhớ đăng nhập</label>\n        </div>\n        <label for=\"\">Chưa có tài khoản?\n          <button (click)=\"signup = true\">Đăng kí ngay</button>\n        </label>\n        <br>\n        <button [disabled]=\"formLogin.invalid\" type=\"submit\" class=\"btn btn-primary float-right mx-1 mb-5\">Đăng nhập</button>\n      </div>\n    </form>\n    <form *ngIf=\"signup\" (ngSubmit)=\"Signup()\" validate [formGroup]=\"formSignup\">\n      <div class=\"container\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Tên đăng nhập</label>\n          <input formControlName=\"username\" type=\"email\" class=\" form-control form-control-lg\" placeholder=\"Username\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Mật khẩu</label>\n          <input formControlName=\"password1\" type=\"password\" class=\"form-control form-control-lg\" placeholder=\"Password\">\n          <span *ngIf=\"formSignup.controls.password1.errors\" style=\"color:red !important\">Mật khẩu phải dài ít nhất 8 kí tự</span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Nhập lại mật khẩu</label>\n          <input formControlName=\"password2\" type=\"password\" class=\"form-control form-control-lg\" placeholder=\"Password\">\n          <span *ngIf=\"!samePassword\" style=\"color:red !important\">Mật khẩu này không đúng</span>          \n        </div>\n        <label>Đã có tài khoản?\n          <button (click)=\"signup = false\">Đăng nhập</button>\n        </label>\n        <br>\n        <button [disabled]=\"formSignup.invalid\" type=\"submit\" class=\"btn btn-success float-right mx-1 mb-5\">Đăng kí</button>\n      </div>\n    </form>\n  </div>\n  <p class=\"float-right mx-3\" style=\"color:red\">Lưu ý: Phần mềm này được thực hiện và triển khai nhằm mục đích thực hành, do đó tính bảo mật của phần mềm chưa thực sự tốt. Vì vậy khi đăng kí tài khoản mới, bạn không nên dùng mật khẩu hoặc tên đăng nhập giống với các tài khoản facebook, gmail, ... của bạn</p>\n</div>"

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cookiee__ = __webpack_require__("./src/app/Cookiee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(_fb, dataService, router) {
        this._fb = _fb;
        this.dataService = dataService;
        this.router = router;
        this.signup = false;
        this.samePassword = true;
    }
    LoginpageComponent.prototype.Login = function () {
        var _this = this;
        // console.log(this.formLogin.value);
        this.dataService.logIn(this.formLogin.value)
            .then(function (r) {
            console.log(r);
            Object(__WEBPACK_IMPORTED_MODULE_3__Cookiee__["c" /* setCookie */])("userName", r.userName, 2);
            _this.router.navigate(["/home"]);
            window.location.reload();
        }).catch(function (e) { return window.alert("Server xảy ra sự cố, vui lòng thử lại sau"); });
    };
    LoginpageComponent.prototype.Signup = function () {
        var _this = this;
        // console.log(this.formSignup.value);
        if (this.formSignup.value.password1 == this.formSignup.value.password2) {
            this.dataService.signUp(this.formSignup.value)
                .then(function (r) {
                if (r) {
                    window.alert("đăng kí tài khoản mới thành công");
                    _this.signup = false;
                }
                else {
                    window.alert("Đăng kí tài khoản thất bại, hãy thử sử dụng tên đăng nhập khác");
                }
            }).catch(function (e) { return window.alert("Đăng kí tài khoản thất bại, hãy thử sử dụng tên đăng nhập khác"); });
        }
        else {
            this.samePassword = false;
        }
    };
    LoginpageComponent.prototype.ngOnInit = function () {
        this.formLogin = this._fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
        this.formSignup = this._fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password1: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            password2: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    };
    LoginpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loginpage',
            template: __webpack_require__("./src/app/loginpage/loginpage.component.html"),
            styles: [__webpack_require__("./src/app/loginpage/loginpage.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], LoginpageComponent);
    return LoginpageComponent;
}());

function samePassword(formGroup) {
    if (formGroup.controls.password1 == formGroup.controls.password2)
        return true;
    else
        return false;
}


/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\r\n  <a class=\"collapse navbar-collapse\" style=\"max-width:11em\" routerLink=\"/home\">\r\n    <h3 style=\"color:#FFFFFF\">Tinycards_N4</h3>\r\n  </a>\r\n\r\n  <!-- Home icon -->\r\n  <a class=\"mx-auto d-md-none navbar-toggler icon ion-md-home\" routerLink=\"/home\" role=\"button\" style=\"color:white\"></a>\r\n  <!-- Create icon -->\r\n  <a class=\"mx-auto d-md-none navbar-toggler icon ion-md-add\" routerLink=\"/create\" role=\"button\" style=\"color:white\"></a>\r\n  <a *ngIf=\"logedIn\" class=\"mx-auto d-md-none navbar-toggler icon ion-md-log-out\" style=\"color:white; outline:none\" (click)=\"logOut()\"\r\n    role=\"button\"></a>\r\n  <a *ngIf=\"!logedIn\" class=\"mx-auto d-md-none navbar-toggler icon ion-md-log-in\" routerLink=\"/login\" style=\"color:white; outline:none\"\r\n    role=\"button\"></a>\r\n\r\n  <!-- Profile icon -->\r\n  <!-- </div> -->\r\n  <!-- Menu -->\r\n  <div class=\"collapse navbar-collapse\">\r\n    <ul class=\"navbar-nav float-right\">\r\n      <li class=\"nav-item mx-auto active\">\r\n        <a class=\"nav-link ion-ios-home-outline\" routerLink=\"/home\"> Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link ion-android-add \" routerLink=\"/create\"> Create </a>\r\n      </li>\r\n    </ul>\r\n    \r\n  </div>\r\n\r\n  <button *ngIf=\"!logedIn\" class=\"d-none d-md-block btn btn-primary\" routerLink=\"/login\">Đăng nhập</button>\r\n    <div *ngIf=\"logedIn\" class=\"d-none d-md-block nav-item\">{{userName}}</div>\r\n    <button *ngIf=\"logedIn\" class=\"d-none d-md-block btn btn-primary\" (click)=\"logOut()\">Đăng xuất</button>\r\n\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cookiee__ = __webpack_require__("./src/app/Cookiee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent.prototype.logOut = function () {
        // console.log("đã logout");
        Object(__WEBPACK_IMPORTED_MODULE_1__Cookiee__["a" /* deleteAllCookies */])();
        this.logedIn = false;
        window.location.reload();
    };
    NavigationBarComponent.prototype.ngOnInit = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__Cookiee__["b" /* getCookie */])("userName") != null) {
            this.logedIn = true;
            this.userName = Object(__WEBPACK_IMPORTED_MODULE_1__Cookiee__["b" /* getCookie */])("userName");
        }
    };
    NavigationBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation-bar',
            template: __webpack_require__("./src/app/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__("./src/app/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/user.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Cookiee__ = __webpack_require__("./src/app/Cookiee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGuard = /** @class */ (function () {
    function UserGuard(router) {
        this.router = router;
    }
    UserGuard.prototype.canActivate = function (next, state) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__Cookiee__["b" /* getCookie */])("userName") != null) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    UserGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserGuard);
    return UserGuard;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map