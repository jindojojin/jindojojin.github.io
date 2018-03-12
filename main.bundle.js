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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\" />\n  <title>Tiny Card - Nhom 4</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- icon -->\n  <link rel=\"stylesheet\" href=\"http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css\">\n  <!-- bootstrap -->\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n</head>\n\n<body>\n  <app-navigation-bar></app-navigation-bar>\n  <div class=\"container my-5\">\n    <app-homepage  (waitForOtherPage)=\"goTo($event)\" *ngIf=\"isHomePage\"></app-homepage>\n    <app-learnpage [cards]=\"currentCard\" (waitForOtherPage)=\"goTo($event)\" *ngIf=\"isLearnPage\"></app-learnpage>\n  </div>\n</body>\n\n</html>"

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
        this.isHomePage = true;
        this.isLearnPage = false;
        this.cards1 = [
            { typeBack: 'text', typeFront: 'img', back: 'Paraket', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8249e80335efb41dadbd5c8936755183' },
            { typeBack: 'text', typeFront: 'img', back: 'Macaw', front: 'https://d9np3dj86nsu2.cloudfront.net/image/bf39a08c037663a0ffcdc058a929adc0' },
            { typeBack: 'text', typeFront: 'img', back: 'Blue and Gold Parrot', front: 'https://d9np3dj86nsu2.cloudfront.net/image/35023b50a18d18c3f21500bb42ea568a' },
            { typeBack: 'text', typeFront: 'img', back: 'Cardinal', front: 'https://d9np3dj86nsu2.cloudfront.net/image/01dc70780cb93e6a920ff1d7e0d2d446' },
            { typeBack: 'text', typeFront: 'img', back: 'Blue Jay', front: 'https://d9np3dj86nsu2.cloudfront.net/image/34f55bda0245680ca5f9948241240564' },
            { typeBack: 'text', typeFront: 'img', back: 'Penguin', front: 'https://d9np3dj86nsu2.cloudfront.net/image/2392e707630d9439165be4624e95538a' },
            { typeBack: 'text', typeFront: 'img', back: 'Woodpecker', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4d31a4dbc767636019ccbb339a035bf0' },
            { typeBack: 'text', typeFront: 'img', back: 'Hawk', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4e5fcc08ddf606d8a6132d5c1576cf8f' },
            { typeBack: 'text', typeFront: 'img', back: 'Eagle', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4900298670056cea704a1de55eac2d26' },
            { typeBack: 'text', typeFront: 'img', back: 'Mallard', front: 'https://d9np3dj86nsu2.cloudfront.net/image/1147496c6057e92eb95209eb35fdb148' },
            { typeBack: 'text', typeFront: 'img', back: 'Duck', front: 'https://d9np3dj86nsu2.cloudfront.net/image/0419435b0d8876960185377ef5df4483' },
            { typeBack: 'text', typeFront: 'img', back: 'Goose', front: 'https://d9np3dj86nsu2.cloudfront.net/image/3ec51856321772a4962f835cbaaaafa1' },
            { typeBack: 'text', typeFront: 'img', back: 'Swan', front: 'https://d9np3dj86nsu2.cloudfront.net/image/dcc934655ce17a44604b0a75ecdf0fb2' },
            { typeBack: 'text', typeFront: 'img', back: 'Wren', front: 'https://d9np3dj86nsu2.cloudfront.net/image/fa31092806461b5fc3d831f9effd86c1' },
            { typeBack: 'text', typeFront: 'img', back: 'Chicken', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8fb84088d27f1281441f0f03f515b8cd' },
            { typeBack: 'text', typeFront: 'img', back: 'Hen', front: 'https://d9np3dj86nsu2.cloudfront.net/image/2170f61563a02742807daba93c4638ba' },
            { typeBack: 'text', typeFront: 'img', back: 'Turkey', front: 'https://d9np3dj86nsu2.cloudfront.net/image/5c7dfcc6cb71ce06592005744de24d15' },
            { typeBack: 'text', typeFront: 'img', back: 'Pigeon', front: 'https://d9np3dj86nsu2.cloudfront.net/image/39f42ccdfb6da13f21a9c5c6222c4d29' },
            { typeBack: 'text', typeFront: 'img', back: 'Dove', front: 'https://d9np3dj86nsu2.cloudfront.net/image/f3d0b731f8ff1dcb3be23ea3e361b1bd' },
            { typeBack: 'text', typeFront: 'img', back: 'Hummingbird', front: 'https://d9np3dj86nsu2.cloudfront.net/image/d861c1870d365b09fa84381412cb9335' },
            { typeBack: 'text', typeFront: 'img', back: 'Owl', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8a7907739579128f58cd41f59b5b500c' },
            { typeBack: 'text', typeFront: 'img', back: 'Crane', front: 'https://d9np3dj86nsu2.cloudfront.net/image/5f5d6988e55041dd862768fcfb41afe6' },
            { typeBack: 'text', typeFront: 'img', back: 'Crow', front: 'https://d9np3dj86nsu2.cloudfront.net/image/1561febd244fe2c14b12b172e486ee04' },
            { typeBack: 'text', typeFront: 'img', back: 'Heron', front: 'https://d9np3dj86nsu2.cloudfront.net/image/46f5666a10292c99a3f367a63c59984c' },
            { typeBack: 'text', typeFront: 'img', back: 'Kingfisher', front: 'https://d9np3dj86nsu2.cloudfront.net/image/46f5666a10292c99a3f367a63c59984c' },
            { typeBack: 'text', typeFront: 'img', back: 'Sparrow', front: 'https://d9np3dj86nsu2.cloudfront.net/image/7e7a439c357743fb4acd0e9bbbe9af00' },
            { typeBack: 'text', typeFront: 'img', back: 'Pelican', front: 'https://d9np3dj86nsu2.cloudfront.net/image/b60847cda60334121abab1d022ead6b4' },
            { typeBack: 'text', typeFront: 'img', back: 'Albatross', front: 'https://d9np3dj86nsu2.cloudfront.net/image/6b1d8904a2a30a5db942ad13334c8bc0' },
            { typeBack: 'text', typeFront: 'img', back: 'Stork', front: 'https://d9np3dj86nsu2.cloudfront.net/image/cebc3ba87095d531e42b024540f32f9a' },
        ];
        this.cards2 = [
            { typeBack: 'text', typeFront: 'img', back: 'apple', front: 'https://d9np3dj86nsu2.cloudfront.net/image/7c97a2f4d56398fd4898cfa32e7fa505' },
            { typeBack: 'text', typeFront: 'img', back: 'banana', front: 'https://d9np3dj86nsu2.cloudfront.net/image/45580cb077e1ebfed82f21c4815a0bd9' },
            { typeBack: 'text', typeFront: 'img', back: 'burger', front: 'https://d9np3dj86nsu2.cloudfront.net/image/d7111ea329e3ecada077e23947a2492b' },
            { typeBack: 'text', typeFront: 'img', back: 'cake', front: 'https://d9np3dj86nsu2.cloudfront.net/image/73aa3e8ff79bfb664606134044671518' },
            { typeBack: 'text', typeFront: 'img', back: 'carrots', front: 'https://d9np3dj86nsu2.cloudfront.net/image/aa3a72f5b0846dfd76254893573cd737' },
            { typeBack: 'text', typeFront: 'img', back: 'cheese', front: 'https://d9np3dj86nsu2.cloudfront.net/image/3f8dfcc3245122ce30ae6294c5176164' },
            { typeBack: 'text', typeFront: 'img', back: 'chocolate', front: 'https://d9np3dj86nsu2.cloudfront.net/image/91a64584e8efd403ee94538ac4649f09' },
            { typeBack: 'text', typeFront: 'img', back: 'corn', front: 'https://d9np3dj86nsu2.cloudfront.net/image/10f5f99c1e3cf75da12250d2f40c12cf' },
            { typeBack: 'text', typeFront: 'img', back: 'eggs', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4a8696f5b8926cae546b5be055292abb' },
            { typeBack: 'text', typeFront: 'img', back: 'fish', front: 'https://d9np3dj86nsu2.cloudfront.net/image/0eb308f31b1eadce3a346b14fe3a6465' },
            { typeBack: 'text', typeFront: 'img', back: 'fruit', front: 'https://d9np3dj86nsu2.cloudfront.net/image/bccdfacf316ae2cc3921d97a4091d1cd' },
            { typeBack: 'text', typeFront: 'img', back: 'ham', front: 'https://d9np3dj86nsu2.cloudfront.net/image/38ff87cd8358412dd846f78c99325ab8' },
            { typeBack: 'text', typeFront: 'img', back: 'ice-cream', front: 'https://d9np3dj86nsu2.cloudfront.net/image/3a4a4797ae49fc824fd36cfc725ce1d0' },
            { typeBack: 'text', typeFront: 'img', back: 'meat', front: 'https://d9np3dj86nsu2.cloudfront.net/image/6984f59948114acf4fd2c8cda99d0e01' },
            { typeBack: 'text', typeFront: 'img', back: 'milk', front: 'https://d9np3dj86nsu2.cloudfront.net/image/871e4c34cb21717a0a47645768fc0081' },
            { typeBack: 'text', typeFront: 'img', back: 'orange', front: 'https://d9np3dj86nsu2.cloudfront.net/image/fb550fa1de2c6f9b2116ae6bc86e9c4e' },
            { typeBack: 'text', typeFront: 'img', back: 'pancakes', front: 'https://d9np3dj86nsu2.cloudfront.net/image/c1e2ed1a028c44e2bdc98996ad1c1b4e' },
            { typeBack: 'text', typeFront: 'img', back: 'peas', front: 'https://d9np3dj86nsu2.cloudfront.net/image/a9986634ca4e6c5a48934832802a26c6' },
            { typeBack: 'text', typeFront: 'img', back: 'pie', front: 'https://d9np3dj86nsu2.cloudfront.net/image/fd0e88a9184fa1ff62c806582e2bfa8f' },
            { typeBack: 'text', typeFront: 'img', back: 'pizza', front: 'https://d9np3dj86nsu2.cloudfront.net/image/2f273cf3eb0581d4156df47ecf36e570' },
        ];
        this.cards3 = [
            { typeBack: 'text', typeFront: 'img', back: 'Elephante', front: 'https://d9np3dj86nsu2.cloudfront.net/image/c7f32bc724ab723a65a18ac584dd4d9e' },
            { typeBack: 'text', typeFront: 'img', back: 'Perro', front: 'https://d9np3dj86nsu2.cloudfront.net/image/9bdb5b45739754e85e0ead381b5bf106' },
            { typeBack: 'text', typeFront: 'img', back: 'Gato', front: 'https://d9np3dj86nsu2.cloudfront.net/image/712192b186cff6c6933e823d68d80c6f' },
            { typeBack: 'text', typeFront: 'img', back: 'Tortuga', front: 'https://d9np3dj86nsu2.cloudfront.net/image/a3d0ec8230c748b6ac050caa90648e47' },
            { typeBack: 'text', typeFront: 'img', back: 'Pato', front: 'https://d9np3dj86nsu2.cloudfront.net/image/0419435b0d8876960185377ef5df4483' },
            { typeBack: 'text', typeFront: 'img', back: 'Cabollo', front: 'https://d9np3dj86nsu2.cloudfront.net/image/6619fd92143ea09ab2cd1dd816d42631' },
            { typeBack: 'text', typeFront: 'img', back: 'La Vaca', front: 'https://d9np3dj86nsu2.cloudfront.net/image/7933a9576095b4cf22fe426091502df6' },
            { typeBack: 'text', typeFront: 'img', back: 'El Pez', front: 'https://d9np3dj86nsu2.cloudfront.net/image/93cbe99ee87a9259761a2770296326c2' },
            { typeBack: 'text', typeFront: 'img', back: 'El Leon', front: 'https://d9np3dj86nsu2.cloudfront.net/image/30dc2774a4318c0b7b24fea90a1802b9' },
            { typeBack: 'text', typeFront: 'img', back: 'El Buho', front: 'https://d9np3dj86nsu2.cloudfront.net/image/e59667d69e0b1b99adc6e402da25d6c2' },
            { typeBack: 'text', typeFront: 'img', back: 'El Cerdo', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8041a85ca6a4a9bdf9bc2540490cf657' },
            { typeBack: 'text', typeFront: 'img', back: 'La Foca', front: 'https://d9np3dj86nsu2.cloudfront.net/image/996fb2c6834e9d77fc3035d5121ab178' },
            { typeBack: 'text', typeFront: 'img', back: 'La Arana', front: 'https://d9np3dj86nsu2.cloudfront.net/image/1350deb8b67ff609206ffdd44e48cceb' },
            { typeBack: 'text', typeFront: 'img', back: 'El Lobo', front: 'https://d9np3dj86nsu2.cloudfront.net/image/1049db3f28a8da1938d8c2f8c9047fc2' },
            { typeBack: 'text', typeFront: 'img', back: 'La Cebra', front: 'https://d9np3dj86nsu2.cloudfront.net/image/29e37ce995e6369791cebc54ec31345e' },
        ];
    }
    AppComponent.prototype.goTo = function (page) {
        if (page === 'homePage') {
            this.isHomePage = true;
            this.isLearnPage = false;
        }
        else {
            this.isHomePage = false;
            this.isLearnPage = true;
            if (page == 'cards1') {
                this.currentCard = this.cards1;
            }
            if (page == 'cards2') {
                this.currentCard = this.cards2;
            }
            if (page == 'cards3') {
                this.currentCard = this.cards3;
            }
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_bar_navigation_bar_component__ = __webpack_require__("./src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card_component__ = __webpack_require__("./src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__learnpage_learnpage_component__ = __webpack_require__("./src/app/learnpage/learnpage.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__navigation_bar_navigation_bar_component__["a" /* NavigationBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__learnpage_learnpage_component__["a" /* LearnpageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
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

module.exports = "<div (click)= \"showLearnPage();\" class=\"card mx-2 my-2\">\n    <img class=\"card-img-top\" width=\"200px\" height=\"300px\" src=\"{{linkToImg}}\" alt=\"Card image cap\">\n    <h5 class=\"card-title\" style=\"text-align: center\">{{cardTitle}}</h5>\n    <!-- <span class=\"ion-ios-star-outline\">\n      <span class=\" badge badge-light\">6</span>\n    </span>\n    <span class=\"ion-ios-browsers-outline\">\n      <span class=\" badge badge-light\">6</span>\n    </span>   -->\n</div>"

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
        this.userClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.cardID = "001";
    }
    CardComponent.prototype.showLearnPage = function () {
        this.userClick.emit(this.cardID);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "userClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "cardTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "linkToImg", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("./src/app/card/card.component.html"),
            styles: [__webpack_require__("./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n    <app-card cardTitle=\"Birds\" linkToImg=\"https://d9np3dj86nsu2.cloudfront.net/image/bf39a08c037663a0ffcdc058a929adc0\" class=\"col-4\" (click)=\"goToLearnPage('cards1')\"></app-card>\n    <app-card cardTitle=\"Foods\" linkToImg=\"https://d9np3dj86nsu2.cloudfront.net/image/7c97a2f4d56398fd4898cfa32e7fa505\" class=\"col-4\" (click)=\"goToLearnPage('cards2')\"></app-card>\n    <app-card cardTitle=\"Animals\" linkToImg=\"https://d9np3dj86nsu2.cloudfront.net/image/c7f32bc724ab723a65a18ac584dd4d9e\" class=\"col-4\" (click)=\"goToLearnPage('cards3')\"></app-card>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
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

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.waitForOtherPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    HomepageComponent.prototype.goToLearnPage = function (cardID) {
        this.waitForOtherPage.emit(cardID);
    };
    HomepageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], HomepageComponent.prototype, "waitForOtherPage", void 0);
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/learnpage/learnpage.component.css":
/***/ (function(module, exports) {

module.exports = "p{\r\n    padding: 0px;\r\n    margin: 0px;\r\n  font-size:40px;\r\n  background-color: blanchedalmond;\r\n  text-align: center;\r\n  vertical-align: initial;\r\n  line-height: 350px;\r\n}\r\nimg{\r\n  width:350px; \r\n  height:350px;\r\n}"

/***/ }),

/***/ "./src/app/learnpage/learnpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:whitesmoke\" >\n  <button class=\"my-5 mx-5\" (click)=\"goToHomePage();\">X</button>\n  <div class=\"row\">\n    <div class=\"col col-sm-offset-3\"></div>\n    <div class=\"col\">\n      <div (click)=\"flipThis()\">\n        <div *ngIf=\"isFront\">\n          <img *ngIf=\"isImgF\" src={{theFront}} alt=\"can not find this image, sorry!\">\n          <p  *ngIf=\"!isImgF\">{{theFront}}</p>\n        </div>\n        <div *ngIf=\"isBack\">\n          <img *ngIf=\"isImgB\" src={{theBack}} alt=\"can not find this image, sorry!\">\n          <p  *ngIf=\"!isImgB\">{{theBack}}</p>\n        </div>\n      </div>\n      <button *ngIf=\"(this.i) > 0\" class=\"my-3 float-left\" (click)=\" backCard();\">Back</button>\n      <button *ngIf=\"(this.i) < (this.cards.length-1) \" class=\"my-3 float-right\" (click)=\"nextCard();\">Next</button>\n    </div>\n    <div class=\"col col-sm-offset-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/learnpage/learnpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnpageComponent; });
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

var LearnpageComponent = /** @class */ (function () {
    function LearnpageComponent() {
        this.waitForOtherPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.isFront = true;
        this.isBack = false;
        this.i = 0;
        // cards=this.cardArray;
        this.theFront = "this is the front";
        this.theBack = "this is the back";
        console.log("da vao learn page");
        console.log(this.cards);
    }
    LearnpageComponent.prototype.flipThis = function () {
        this.isBack = !this.isBack;
        this.isFront = !this.isFront;
        console.log(this.isImgF);
    };
    LearnpageComponent.prototype.nextCard = function () {
        if (this.i >= this.cards.length - 1) {
            return;
        }
        else {
            this.i = this.i + 1;
        }
        this.updateCard();
    };
    LearnpageComponent.prototype.backCard = function () {
        if (this.i <= 0) {
            return;
        }
        else {
            this.i = this.i - 1;
        }
        this.updateCard();
    };
    LearnpageComponent.prototype.updateCard = function () {
        console.log(this.i);
        if (this.cards != undefined) {
            this.isFront = true;
            this.isBack = false;
            this.theFront = this.cards[this.i].front;
            this.theBack = this.cards[this.i].back;
            this.isImgF = (this.cards[this.i].typeFront === 'img') ? true : false;
            this.isImgB = (this.cards[this.i].typeBack === 'img') ? true : false;
        }
        else {
            this.i = -1;
        }
        // console.log("da vao big card");
        // console.log(this.cardArray);
    };
    LearnpageComponent.prototype.goToHomePage = function () {
        this.waitForOtherPage.emit('homePage');
    };
    LearnpageComponent.prototype.flip = function () {
    };
    LearnpageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], LearnpageComponent.prototype, "waitForOtherPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], LearnpageComponent.prototype, "cards", void 0);
    LearnpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-learnpage',
            template: __webpack_require__("./src/app/learnpage/learnpage.component.html"),
            styles: [__webpack_require__("./src/app/learnpage/learnpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LearnpageComponent);
    return LearnpageComponent;
}());



/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-md navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a class=\"collapse navbar-collapse\" style=\"max-width:11em\" href=\"1.html\">\n      <h3 style=\"color:#FFFFFF\">Tinycards_N4</h3>\n    </a>\n    <!-- search box -->\n    <!-- <form class=\"form-inline collapse navbar-collapse\" id=\"navbarSearch\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-btn\">\n          <button class=\"btn btn-success\" type=\"submit\">\n            <span class=\"ion-ios-search-strong\"></span>\n          </button>\n        </div>\n      </div>\n    </form> -->\n    <!-- <div id=\"navbarIcon\"> -->\n    <!-- Home icon -->\n    <a class=\"mx-auto navbar-toggler ion-ios-home-outline\" href=\"1.html\" role=\"button\" id=\"homeIcon\"></a>\n    <!-- search icon -->\n    <!-- <button class=\" mx-auto navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSearch\" aria-controls=\"navbarSearch\"\n      aria-expanded=\"true\" data-dismiss=\"navbar-toggler\" onclick=\"hideIcon()\" id=\"searchIcon\">\n      <span class=\"ion-ios-search-strong\"></span>\n    </button> -->\n    <script>\n      function hideIcon() {\n        document.getElementById(\"homeIcon\").style.display = \"none\";\n        document.getElementById(\"searchIcon\").style.display = \"none\";\n        document.getElementById(\"createIcon\").style.display = \"none\";\n        document.getElementById(\"profileIcon\").style.display = \"none\";\n      }\n    </script>\n    <!-- Create icon -->\n    <!-- <a class=\"mx-auto navbar-toggler ion-android-add\" href=\"1-1.html\" role=\"button\" id=\"createIcon\"></a> -->\n    <!-- Profile icon -->\n    <!-- <a class=\"mx-auto navbar-toggler ion-android-contact\" href=\"1-3.html\" role=\"button\" id=\"profileIcon\"></a> -->\n    <!-- </div> -->\n    <!-- Menu -->\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item mx-auto active\">\n          <a class=\"nav-link ion-ios-home-outline\" href=\"1.html\"> Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link ion-android-add \" href=\"1-1.html\"> Create </a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link ion-android-contact\" href=\"1-3.html\"> Profile </a>\n        </li> -->\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
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

var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navigation-bar',
            template: __webpack_require__("./src/app/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__("./src/app/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
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