(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-state-and-subjects-rx-state-and-subjects-module"],{

/***/ "UKRj":
/*!*********************************************************!*\
  !*** ./apps/demos/src/app/shared/utils/utils.module.ts ***!
  \*********************************************************/
/*! exports provided: UtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsModule", function() { return UtilsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _to_array_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-array.pipe */ "bllw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class UtilsModule {
}
UtilsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UtilsModule });
UtilsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function UtilsModule_Factory(t) { return new (t || UtilsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UtilsModule, { declarations: [_to_array_pipe__WEBPACK_IMPORTED_MODULE_1__["ToArrayPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_to_array_pipe__WEBPACK_IMPORTED_MODULE_1__["ToArrayPipe"]] }); })();


/***/ }),

/***/ "bllw":
/*!**********************************************************!*\
  !*** ./apps/demos/src/app/shared/utils/to-array.pipe.ts ***!
  \**********************************************************/
/*! exports provided: ToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToArrayPipe", function() { return ToArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ToArrayPipe {
    transform(value) {
        if (typeof value === 'number') {
            return new Array(value).fill(0).map((_, idx) => idx);
        }
        return value != null ? value.toString().split('') : [];
    }
}
ToArrayPipe.ɵfac = function ToArrayPipe_Factory(t) { return new (t || ToArrayPipe)(); };
ToArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toArray", type: ToArrayPipe, pure: true });


/***/ }),

/***/ "noTt":
/*!************************************************************************************************************************!*\
  !*** ./apps/demos/src/app/features/integrations/dynamic-counter/rx-state-and-subjects/rx-state-and-subjects.routes.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _rx_state_and_subjects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-state-and-subjects.component */ "tTOB");

const ROUTES = [
    {
        path: '',
        component: _rx_state_and_subjects_component__WEBPACK_IMPORTED_MODULE_0__["RxStateAndSubjectsComponent"]
    }
];


/***/ }),

/***/ "tTOB":
/*!***************************************************************************************************************************!*\
  !*** ./apps/demos/src/app/features/integrations/dynamic-counter/rx-state-and-subjects/rx-state-and-subjects.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: RxStateAndSubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStateAndSubjectsComponent", function() { return RxStateAndSubjectsComponent; });
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/model */ "wvVy");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "YYsp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_utils_to_latest_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utils/to-latest-from */ "VuqE");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/utils/to-int */ "Had5");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/utils */ "NMwP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_counter_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/counter-display.component */ "Zwmw");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/push/push.pipe */ "duzR");













class RxStateAndSubjectsComponent extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor() {
        super();
        this.initialCounterState = _shared_model__WEBPACK_IMPORTED_MODULE_0__["INITIAL_STATE"];
        this.countChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tickSpeedChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.countDiffChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isTickingToggle = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.countUpToggle = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.setToClick = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateCountTrigger$ = this.select(Object(_rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["selectSlice"])(['isTicking', 'tickSpeed']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(s => (s.isTicking ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, s.tickSpeed) : rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"])));
        this.count$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(s => s.count + ''));
        this.tickSpeed$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(s => s.tickSpeed + ''));
        this.countDiff$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(s => s.countDiff + ''));
        this.set(this.initialCounterState);
        this.connect('isTicking', this.isTickingToggle.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(a => !a, this.initialCounterState.isTicking)));
        this.connect('countUp', this.countUpToggle.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(a => !a, this.initialCounterState.countUp)));
        this.connect('countDiff', this.countDiffChange.pipe(Object(_shared_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["toInt"])()));
        this.connect('tickSpeed', this.tickSpeedChange.pipe(Object(_shared_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["toInt"])()));
        this.connect('count', this.setToClick.pipe(Object(_shared_utils_to_latest_from__WEBPACK_IMPORTED_MODULE_3__["toLatestFrom"])(this.countChange, this.initialCounterState.count + ''), Object(_shared_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["toInt"])()));
        this.connect('count', this.updateCountTrigger$, _shared_utils__WEBPACK_IMPORTED_MODULE_6__["updateCount"]);
    }
}
RxStateAndSubjectsComponent.ɵfac = function RxStateAndSubjectsComponent_Factory(t) { return new (t || RxStateAndSubjectsComponent)(); };
RxStateAndSubjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RxStateAndSubjectsComponent, selectors: [["rxa-counter-rx-state-in-the-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 10, consts: [[1, "counter"], [3, "count$"], ["mat-raised-button", "", 3, "click"], ["type", "number", "min", "0", "matInput", "", 3, "value", "input"], ["count", ""], ["tickSpeed", ""], ["countDiff", ""]], template: function RxStateAndSubjectsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "RxState + Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "rxa-counter-display", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_4_listener() { return ctx.set({ isTicking: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_6_listener() { return ctx.set({ isTicking: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Pause ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_8_listener() { return ctx.set(ctx.initialCounterState); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_11_listener() { return ctx.setToClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Set To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function RxStateAndSubjectsComponent_Template_input_input_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17); return ctx.countChange.next(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_20_listener() { return ctx.set({ countUp: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Count Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_22_listener() { return ctx.set({ countUp: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Count Down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Tick Speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "input", 3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function RxStateAndSubjectsComponent_Template_input_input_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29); return ctx.set({ tickSpeed: _r1.value }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "CountDiff");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "input", 3, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function RxStateAndSubjectsComponent_Template_input_input_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](35); return ctx.set({ countDiff: _r2.value }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("count$", ctx.count$);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 4, ctx.count$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 6, ctx.tickSpeed$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 8, ctx.countDiff$));
    } }, directives: [_shared_counter_display_component__WEBPACK_IMPORTED_MODULE_8__["CounterDisplayComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"]], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_12__["PushPipe"]], encapsulation: 2 });


/***/ }),

/***/ "w/5P":
/*!************************************************************************************************************************!*\
  !*** ./apps/demos/src/app/features/integrations/dynamic-counter/rx-state-and-subjects/rx-state-and-subjects.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: RxStateAndSubjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStateAndSubjectsModule", function() { return RxStateAndSubjectsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rx_state_and_subjects_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rx-state-and-subjects.routes */ "noTt");
/* harmony import */ var _rx_state_and_subjects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-state-and-subjects.component */ "tTOB");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "zhsl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const DECLARATIONS = [_rx_state_and_subjects_component__WEBPACK_IMPORTED_MODULE_2__["RxStateAndSubjectsComponent"]];
class RxStateAndSubjectsModule {
}
RxStateAndSubjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RxStateAndSubjectsModule });
RxStateAndSubjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function RxStateAndSubjectsModule_Factory(t) { return new (t || RxStateAndSubjectsModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_rx_state_and_subjects_routes__WEBPACK_IMPORTED_MODULE_1__["ROUTES"]),
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RxStateAndSubjectsModule, { declarations: [_rx_state_and_subjects_component__WEBPACK_IMPORTED_MODULE_2__["RxStateAndSubjectsComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=rx-state-and-subjects-rx-state-and-subjects-module.js.map