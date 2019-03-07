/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, Input, Directive, TemplateRef, ViewContainerRef, ContentChildren, HostBinding, QueryList, } from '@angular/core';
var NovoLoadingElement = /** @class */ (function () {
    function NovoLoadingElement() {
    }
    NovoLoadingElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-loading',
                    host: {
                        '[class]': 'theme || ""',
                    },
                    template: "\n        <span class=\"dot\"></span>\n        <span class=\"dot\"></span>\n        <span class=\"dot\"></span>\n        <span class=\"dot\"></span>\n        <span class=\"dot\"></span>\n    "
                }] }
    ];
    NovoLoadingElement.propDecorators = {
        theme: [{ type: Input }]
    };
    return NovoLoadingElement;
}());
export { NovoLoadingElement };
if (false) {
    /** @type {?} */
    NovoLoadingElement.prototype.theme;
}
var NovoSpinnerElement = /** @class */ (function () {
    function NovoSpinnerElement() {
    }
    NovoSpinnerElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-spinner',
                    template: "\n        <svg class=\"bullhornSpinner\" [ngClass]=\"theme\" height=\"100\" width=\"100\" viewBox=\"0 0 100 100\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.inverse]=\"inverse\">\n            <title>Bullhorn Spinner Animation</title>\n            <desc>Spinner animation indicating loading</desc>\n            <defs>\n                <style>\n                    .bullhornSpinner g.circleGroup {\n                        -webkit-filter: url(\"{{baseHref || ''}}#gooEffect\");\n                        filter: url(\"{{baseHref || ''}}#gooEffect\");\n                    }\n                    _:-webkit-full-screen:not(:root:root), .bullhornSpinner g.circleGroup {\n                        -webkit-filter: none;\n                        filter: none;\n                    }\n                    @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {\n                        .bullhornSpinner g.circleGroup {\n                            -webkit-filter: none;\n                            filter: none;\n                        }\n                    }\n                    @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {\n                        .bullhornSpinner g.circleGroup {\n                            -webkit-filter: none;\n                            filter: none;\n                        }\n                    }\n                </style>\n                <filter id=\"gooEffect\">\n                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"5\" result=\"blur\" />\n                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"\n                            1.3 0 0 0 0\n                            0 1.3 0 0 0\n                            0 0 1.3 0 0\n                            0 0 0 19 -7\" result=\"gooEffect\" />\n                    <feComposite in=\"SourceGraphic\" in2=\"gooEffect\" operator=\"atop\" />\n                </filter>\n            </defs>\n            <path d=\"M 43 43 L 54 45 L 80 40 L 43 43\" stroke=\"none\" fill=\"none\" id=\"firstLinePath\"/>\n            <path d=\"M 43 43 L 48 41 L 48 18 L 43 43\" stroke=\"none\" fill=\"none\" id=\"secondLinePath\"/>\n            <path d=\"M 43 43 L 42 45 L 15 40 L 43 43\" stroke=\"none\" fill=\"none\" id=\"thirdLinePath\"/>\n            <path d=\"M 43 43 L 44 52 L 29 78 L 43 43\" stroke=\"none\" fill=\"none\" id=\"fourthLinePath\"/>\n            <path d=\"M 43 43 L 52 52 L 68 78 L 43 43\" stroke=\"none\" fill=\"none\" id=\"fifthLinePath\"/>\n            <g class=\"circleGroup\" transform=\"translate(7, 7)\">\n                <circle r=\"6\" cx=\"0\" cy=\"0\">\n                    <!-- Define the motion path animation -->\n                    <animateMotion dur=\"3.4\" repeatCount=\"indefinite\">\n                        <mpath xlink:href=\"#firstLinePath\"/>\n                    </animateMotion>\n                </circle>\n                <circle r=\"6\" cx=\"0\" cy=\"0\">\n                    <!-- Define the motion path animation -->\n                    <animateMotion dur=\"3.4\" repeatCount=\"indefinite\">\n                        <mpath xlink:href=\"#secondLinePath\"/>\n                    </animateMotion>\n                </circle>\n                <circle r=\"6\" cx=\"0\" cy=\"0\">\n                    <!-- Define the motion path animation -->\n                    <animateMotion dur=\"3.4\" repeatCount=\"indefinite\">\n                        <mpath xlink:href=\"#thirdLinePath\"/>\n                    </animateMotion>\n                </circle>\n                <circle r=\"6\" cx=\"0\" cy=\"0\">\n                    <!-- Define the motion path animation -->\n                    <animateMotion dur=\"3.4\" repeatCount=\"indefinite\">\n                        <mpath xlink:href=\"#fourthLinePath\"/>\n                    </animateMotion>\n                </circle>\n                <circle r=\"6\" cx=\"0\" cy=\"0\">\n                    <!-- Define the motion path animation -->\n                    <animateMotion dur=\"3.4\" repeatCount=\"indefinite\">\n                        <mpath xlink:href=\"#fifthLinePath\"/>\n                    </animateMotion>\n                </circle>\n            </g>\n        </svg>\n    "
                }] }
    ];
    NovoSpinnerElement.propDecorators = {
        theme: [{ type: Input }],
        inverse: [{ type: Input }],
        baseHref: [{ type: Input }]
    };
    return NovoSpinnerElement;
}());
export { NovoSpinnerElement };
if (false) {
    /** @type {?} */
    NovoSpinnerElement.prototype.theme;
    /** @type {?} */
    NovoSpinnerElement.prototype.inverse;
    /** @type {?} */
    NovoSpinnerElement.prototype.baseHref;
}
var NovoSkeletonDirective = /** @class */ (function () {
    function NovoSkeletonDirective() {
        this.skeleton = true;
    }
    NovoSkeletonDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[skeleton]',
                },] }
    ];
    NovoSkeletonDirective.propDecorators = {
        skeleton: [{ type: HostBinding, args: ['class.skeleton',] }]
    };
    return NovoSkeletonDirective;
}());
export { NovoSkeletonDirective };
if (false) {
    /** @type {?} */
    NovoSkeletonDirective.prototype.skeleton;
}
var NovoLoadedDirective = /** @class */ (function () {
    function NovoLoadedDirective() {
    }
    NovoLoadedDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[loaded]',
                },] }
    ];
    return NovoLoadedDirective;
}());
export { NovoLoadedDirective };
var NovoIsLoadingDirective = /** @class */ (function () {
    function NovoIsLoadingDirective(viewContainer) {
        this.viewContainer = viewContainer;
        this.hasView = false;
        this.skeletonViews = [];
        this.loadedViews = [];
    }
    Object.defineProperty(NovoIsLoadingDirective.prototype, "isLoading", {
        set: /**
         * @param {?} condition
         * @return {?}
         */
        function (condition) {
            if (!condition && !this.hasView) {
                this.destroyViews(this.loadedViews);
                this.skeletonViews = this.createViews(this.skeletonTemplates);
                this.hasView = true;
            }
            else if (condition && this.hasView) {
                this.destroyViews(this.skeletonViews);
                this.loadedViews = this.createViews(this.loadedTemplates);
                this.hasView = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} templates
     * @return {?}
     */
    NovoIsLoadingDirective.prototype.createViews = /**
     * @param {?} templates
     * @return {?}
     */
    function (templates) {
        var _this = this;
        return templates && templates.map(function (v) { return _this.viewContainer.createEmbeddedView(v); });
    };
    /**
     * @param {?} views
     * @return {?}
     */
    NovoIsLoadingDirective.prototype.destroyViews = /**
     * @param {?} views
     * @return {?}
     */
    function (views) {
        var e_1, _a;
        if (views) {
            try {
                for (var views_1 = tslib_1.__values(views), views_1_1 = views_1.next(); !views_1_1.done; views_1_1 = views_1.next()) {
                    var view = views_1_1.value;
                    view.destroy();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (views_1_1 && !views_1_1.done && (_a = views_1.return)) _a.call(views_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    NovoIsLoadingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[isLoading]',
                },] }
    ];
    NovoIsLoadingDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NovoIsLoadingDirective.propDecorators = {
        skeletonTemplates: [{ type: ContentChildren, args: [NovoSkeletonDirective, { read: TemplateRef },] }],
        loadedTemplates: [{ type: ContentChildren, args: [NovoLoadedDirective, { read: TemplateRef },] }],
        isLoading: [{ type: Input }]
    };
    return NovoIsLoadingDirective;
}());
export { NovoIsLoadingDirective };
if (false) {
    /** @type {?} */
    NovoIsLoadingDirective.prototype.skeletonTemplates;
    /** @type {?} */
    NovoIsLoadingDirective.prototype.loadedTemplates;
    /** @type {?} */
    NovoIsLoadingDirective.prototype.hasView;
    /** @type {?} */
    NovoIsLoadingDirective.prototype.skeletonViews;
    /** @type {?} */
    NovoIsLoadingDirective.prototype.loadedViews;
    /** @type {?} */
    NovoIsLoadingDirective.prototype.viewContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9sb2FkaW5nL0xvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUVmLFdBQVcsRUFDWCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFBQTtJQWdCQSxDQUFDOztnQkFoQkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLGFBQWE7cUJBQ3pCO29CQUNELFFBQVEsRUFBRSxpTUFNUDtpQkFDSjs7O3dCQUVFLEtBQUs7O0lBRVIseUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQUhZLGtCQUFrQjs7O0lBQzdCLG1DQUNjOztBQUdoQjtJQUFBO0lBc0ZBLENBQUM7O2dCQXRGQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwrdUlBMkVQO2lCQUNKOzs7d0JBRUUsS0FBSzswQkFFTCxLQUFLOzJCQUVMLEtBQUs7O0lBRVIseUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQVBZLGtCQUFrQjs7O0lBQzdCLG1DQUNjOztJQUNkLHFDQUNpQjs7SUFDakIsc0NBQ2lCOztBQUduQjtJQUFBO1FBS0UsYUFBUSxHQUFZLElBQUksQ0FBQztJQUMzQixDQUFDOztnQkFOQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7MkJBRUUsV0FBVyxTQUFDLGdCQUFnQjs7SUFFL0IsNEJBQUM7Q0FBQSxBQU5ELElBTUM7U0FIWSxxQkFBcUI7OztJQUNoQyx5Q0FDeUI7O0FBRTNCO0lBQUE7SUFHa0MsQ0FBQzs7Z0JBSGxDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7O0lBQ2lDLDBCQUFDO0NBQUEsQUFIbkMsSUFHbUM7U0FBdEIsbUJBQW1CO0FBRWhDO0lBYUUsZ0NBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUozQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFhLEdBQTZDLEVBQUUsQ0FBQztRQUM3RCxnQkFBVyxHQUEyQyxFQUFFLENBQUM7SUFFWCxDQUFDO0lBRXZELHNCQUNJLDZDQUFTOzs7OztRQURiLFVBQ2MsU0FBa0I7WUFDOUIsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO2lCQUFNLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUM7OztPQUFBOzs7OztJQUNELDRDQUFXOzs7O0lBQVgsVUFBWSxTQUFzQztRQUFsRCxpQkFFQztRQURDLE9BQU8sU0FBUyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7Ozs7SUFDRCw2Q0FBWTs7OztJQUFaLFVBQWEsS0FBNkI7O1FBQ3hDLElBQUksS0FBSyxFQUFFOztnQkFDVCxLQUFpQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO29CQUFuQixJQUFJLElBQUksa0JBQUE7b0JBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNoQjs7Ozs7Ozs7O1NBQ0Y7SUFDSCxDQUFDOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7O2dCQS9IQyxnQkFBZ0I7OztvQ0FpSWYsZUFBZSxTQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtrQ0FFNUQsZUFBZSxTQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs0QkFTMUQsS0FBSzs7SUFzQlIsNkJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQWxDWSxzQkFBc0I7OztJQUNqQyxtREFDc0Q7O0lBQ3RELGlEQUNvRDs7SUFFcEQseUNBQXdCOztJQUN4QiwrQ0FBcUU7O0lBQ3JFLDZDQUFpRTs7SUFFckQsK0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgSG9zdEJpbmRpbmcsXG4gIFF1ZXJ5TGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbG9hZGluZycsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICd0aGVtZSB8fCBcIlwiJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Mb2FkaW5nRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzdmcgY2xhc3M9XCJidWxsaG9yblNwaW5uZXJcIiBbbmdDbGFzc109XCJ0aGVtZVwiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBbYXR0ci5pbnZlcnNlXT1cImludmVyc2VcIj5cbiAgICAgICAgICAgIDx0aXRsZT5CdWxsaG9ybiBTcGlubmVyIEFuaW1hdGlvbjwvdGl0bGU+XG4gICAgICAgICAgICA8ZGVzYz5TcGlubmVyIGFuaW1hdGlvbiBpbmRpY2F0aW5nIGxvYWRpbmc8L2Rlc2M+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIC5idWxsaG9yblNwaW5uZXIgZy5jaXJjbGVHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogdXJsKFwie3tiYXNlSHJlZiB8fCAnJ319I2dvb0VmZmVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdXJsKFwie3tiYXNlSHJlZiB8fCAnJ319I2dvb0VmZmVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfOi13ZWJraXQtZnVsbC1zY3JlZW46bm90KDpyb290OnJvb3QpLCAuYnVsbGhvcm5TcGlubmVyIGcuY2lyY2xlR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQHN1cHBvcnRzICgtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZSkgYW5kIChub3QgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSkgYW5kIChub3QgKC1tb3otYXBwZWFyYW5jZTpub25lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1bGxob3JuU3Bpbm5lciBnLmNpcmNsZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQHN1cHBvcnRzICgtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZSkgYW5kIChub3QgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSkgYW5kIChub3QgKC1tb3otYXBwZWFyYW5jZTpub25lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1bGxob3JuU3Bpbm5lciBnLmNpcmNsZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJnb29FZmZlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVwiU291cmNlR3JhcGhpY1wiIHN0ZERldmlhdGlvbj1cIjVcIiByZXN1bHQ9XCJibHVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49XCJibHVyXCIgbW9kZT1cIm1hdHJpeFwiIHZhbHVlcz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMyAwIDAgMCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAxLjMgMCAwIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMS4zIDAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAwIDE5IC03XCIgcmVzdWx0PVwiZ29vRWZmZWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cImdvb0VmZmVjdFwiIG9wZXJhdG9yPVwiYXRvcFwiIC8+XG4gICAgICAgICAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTSA0MyA0MyBMIDU0IDQ1IEwgODAgNDAgTCA0MyA0M1wiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwibm9uZVwiIGlkPVwiZmlyc3RMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNDggNDEgTCA0OCAxOCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJzZWNvbmRMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNDIgNDUgTCAxNSA0MCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJ0aGlyZExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gNDMgNDMgTCA0NCA1MiBMIDI5IDc4IEwgNDMgNDNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBpZD1cImZvdXJ0aExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gNDMgNDMgTCA1MiA1MiBMIDY4IDc4IEwgNDMgNDNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBpZD1cImZpZnRoTGluZVBhdGhcIi8+XG4gICAgICAgICAgICA8ZyBjbGFzcz1cImNpcmNsZUdyb3VwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcsIDcpXCI+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSByPVwiNlwiIGN4PVwiMFwiIGN5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlZmluZSB0aGUgbW90aW9uIHBhdGggYW5pbWF0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIzLjRcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtcGF0aCB4bGluazpocmVmPVwiI2ZpcnN0TGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjc2Vjb25kTGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjdGhpcmRMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjZcIiBjeD1cIjBcIiBjeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZpbmUgdGhlIG1vdGlvbiBwYXRoIGFuaW1hdGlvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMy40XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXBhdGggeGxpbms6aHJlZj1cIiNmb3VydGhMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjZcIiBjeD1cIjBcIiBjeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZpbmUgdGhlIG1vdGlvbiBwYXRoIGFuaW1hdGlvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMy40XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXBhdGggeGxpbms6aHJlZj1cIiNmaWZ0aExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TcGlubmVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGludmVyc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGJhc2VIcmVmOiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tza2VsZXRvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2tlbGV0b25EaXJlY3RpdmUge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNrZWxldG9uJylcbiAgc2tlbGV0b246IGJvb2xlYW4gPSB0cnVlO1xufVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvYWRlZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTG9hZGVkRGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpc0xvYWRpbmddJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0lzTG9hZGluZ0RpcmVjdGl2ZSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1NrZWxldG9uRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHB1YmxpYyBza2VsZXRvblRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9Mb2FkZWREaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgcHVibGljIGxvYWRlZFRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gIHByaXZhdGUgaGFzVmlldyA9IGZhbHNlO1xuICBwcml2YXRlIHNrZWxldG9uVmlld3M6IEVtYmVkZGVkVmlld1JlZjxOb3ZvU2tlbGV0b25EaXJlY3RpdmU+W10gPSBbXTtcbiAgcHJpdmF0ZSBsb2FkZWRWaWV3czogRW1iZWRkZWRWaWV3UmVmPE5vdm9Mb2FkZWREaXJlY3RpdmU+W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgQElucHV0KClcbiAgc2V0IGlzTG9hZGluZyhjb25kaXRpb246IGJvb2xlYW4pIHtcbiAgICBpZiAoIWNvbmRpdGlvbiAmJiAhdGhpcy5oYXNWaWV3KSB7XG4gICAgICB0aGlzLmRlc3Ryb3lWaWV3cyh0aGlzLmxvYWRlZFZpZXdzKTtcbiAgICAgIHRoaXMuc2tlbGV0b25WaWV3cyA9IHRoaXMuY3JlYXRlVmlld3ModGhpcy5za2VsZXRvblRlbXBsYXRlcyk7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uICYmIHRoaXMuaGFzVmlldykge1xuICAgICAgdGhpcy5kZXN0cm95Vmlld3ModGhpcy5za2VsZXRvblZpZXdzKTtcbiAgICAgIHRoaXMubG9hZGVkVmlld3MgPSB0aGlzLmNyZWF0ZVZpZXdzKHRoaXMubG9hZGVkVGVtcGxhdGVzKTtcbiAgICAgIHRoaXMuaGFzVmlldyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBjcmVhdGVWaWV3cyh0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+Pikge1xuICAgIHJldHVybiB0ZW1wbGF0ZXMgJiYgdGVtcGxhdGVzLm1hcCgodikgPT4gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh2KSk7XG4gIH1cbiAgZGVzdHJveVZpZXdzKHZpZXdzOiBFbWJlZGRlZFZpZXdSZWY8YW55PltdKSB7XG4gICAgaWYgKHZpZXdzKSB7XG4gICAgICBmb3IgKGxldCB2aWV3IG9mIHZpZXdzKSB7XG4gICAgICAgIHZpZXcuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19