/**
 * @fileoverview added by tsickle
 * Generated from: elements/loading/Loading.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, ContentChildren, Directive, HostBinding, Input, QueryList, TemplateRef, ViewContainerRef } from '@angular/core';
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
        return templates && templates.map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.viewContainer.createEmbeddedView(v); }));
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
    /** @nocollapse */
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
    /**
     * @type {?}
     * @private
     */
    NovoIsLoadingDirective.prototype.hasView;
    /**
     * @type {?}
     * @private
     */
    NovoIsLoadingDirective.prototype.skeletonViews;
    /**
     * @type {?}
     * @private
     */
    NovoIsLoadingDirective.prototype.loadedViews;
    /**
     * @type {?}
     * @private
     */
    NovoIsLoadingDirective.prototype.viewContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9sb2FkaW5nL0xvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBbUIsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJKO0lBQUE7SUFnQkEsQ0FBQzs7Z0JBaEJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSxhQUFhO3FCQUN6QjtvQkFDRCxRQUFRLEVBQUUsaU1BTVA7aUJBQ0o7Ozt3QkFFRSxLQUFLOztJQUVSLHlCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FIWSxrQkFBa0I7OztJQUM3QixtQ0FDYzs7QUFHaEI7SUFBQTtJQXNGQSxDQUFDOztnQkF0RkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsK3VJQTJFUDtpQkFDSjs7O3dCQUVFLEtBQUs7MEJBRUwsS0FBSzsyQkFFTCxLQUFLOztJQUVSLHlCQUFDO0NBQUEsQUF0RkQsSUFzRkM7U0FQWSxrQkFBa0I7OztJQUM3QixtQ0FDYzs7SUFDZCxxQ0FDaUI7O0lBQ2pCLHNDQUNpQjs7QUFHbkI7SUFBQTtRQUtFLGFBQVEsR0FBWSxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7Z0JBTkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OzJCQUVFLFdBQVcsU0FBQyxnQkFBZ0I7O0lBRS9CLDRCQUFDO0NBQUEsQUFORCxJQU1DO1NBSFkscUJBQXFCOzs7SUFDaEMseUNBQ3lCOztBQUUzQjtJQUFBO0lBR21DLENBQUM7O2dCQUhuQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOztJQUNrQywwQkFBQztDQUFBLEFBSHBDLElBR29DO1NBQXZCLG1CQUFtQjtBQUVoQztJQWFFLGdDQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFKM0MsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQkFBYSxHQUE2QyxFQUFFLENBQUM7UUFDN0QsZ0JBQVcsR0FBMkMsRUFBRSxDQUFDO0lBRVYsQ0FBQztJQUV4RCxzQkFDSSw2Q0FBUzs7Ozs7UUFEYixVQUNjLFNBQWtCO1lBQzlCLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNyQjtpQkFBTSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7UUFDSCxDQUFDOzs7T0FBQTs7Ozs7SUFDRCw0Q0FBVzs7OztJQUFYLFVBQVksU0FBc0M7UUFBbEQsaUJBRUM7UUFEQyxPQUFPLFNBQVMsSUFBSSxTQUFTLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBeEMsQ0FBd0MsRUFBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7O0lBQ0QsNkNBQVk7Ozs7SUFBWixVQUFhLEtBQTZCOztRQUN4QyxJQUFJLEtBQUssRUFBRTs7Z0JBQ1QsS0FBbUIsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtvQkFBckIsSUFBTSxJQUFJLGtCQUFBO29CQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDaEI7Ozs7Ozs7OztTQUNGO0lBQ0gsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7Z0JBMUg0RyxnQkFBZ0I7OztvQ0E0SDFILGVBQWUsU0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7a0NBRTVELGVBQWUsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7NEJBUzFELEtBQUs7O0lBc0JSLDZCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FsQ1ksc0JBQXNCOzs7SUFDakMsbURBQ3NEOztJQUN0RCxpREFDb0Q7Ozs7O0lBRXBELHlDQUF3Qjs7Ozs7SUFDeEIsK0NBQXFFOzs7OztJQUNyRSw2Q0FBaUU7Ozs7O0lBRXJELCtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgRW1iZWRkZWRWaWV3UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1sb2FkaW5nJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ3RoZW1lIHx8IFwiXCInLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xvYWRpbmdFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zcGlubmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHN2ZyBjbGFzcz1cImJ1bGxob3JuU3Bpbm5lclwiIFtuZ0NsYXNzXT1cInRoZW1lXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIFthdHRyLmludmVyc2VdPVwiaW52ZXJzZVwiPlxuICAgICAgICAgICAgPHRpdGxlPkJ1bGxob3JuIFNwaW5uZXIgQW5pbWF0aW9uPC90aXRsZT5cbiAgICAgICAgICAgIDxkZXNjPlNwaW5uZXIgYW5pbWF0aW9uIGluZGljYXRpbmcgbG9hZGluZzwvZGVzYz5cbiAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgLmJ1bGxob3JuU3Bpbm5lciBnLmNpcmNsZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiB1cmwoXCJ7e2Jhc2VIcmVmIHx8ICcnfX0jZ29vRWZmZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB1cmwoXCJ7e2Jhc2VIcmVmIHx8ICcnfX0jZ29vRWZmZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF86LXdlYmtpdC1mdWxsLXNjcmVlbjpub3QoOnJvb3Q6cm9vdCksIC5idWxsaG9yblNwaW5uZXIgZy5jaXJjbGVHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAc3VwcG9ydHMgKC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDpub25lKSBhbmQgKG5vdCAoLW1zLWFjY2VsZXJhdG9yOnRydWUpKSBhbmQgKG5vdCAoLW1vei1hcHBlYXJhbmNlOm5vbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVsbGhvcm5TcGlubmVyIGcuY2lyY2xlR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAc3VwcG9ydHMgKC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDpub25lKSBhbmQgKG5vdCAoLW1zLWFjY2VsZXJhdG9yOnRydWUpKSBhbmQgKG5vdCAoLW1vei1hcHBlYXJhbmNlOm5vbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVsbGhvcm5TcGlubmVyIGcuY2lyY2xlR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGZpbHRlciBpZD1cImdvb0VmZmVjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49XCJTb3VyY2VHcmFwaGljXCIgc3RkRGV2aWF0aW9uPVwiNVwiIHJlc3VsdD1cImJsdXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cImJsdXJcIiBtb2RlPVwibWF0cml4XCIgdmFsdWVzPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4zIDAgMCAwIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDEuMyAwIDAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAxLjMgMCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAgMTkgLTdcIiByZXN1bHQ9XCJnb29FZmZlY3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiZ29vRWZmZWN0XCIgb3BlcmF0b3I9XCJhdG9wXCIgLz5cbiAgICAgICAgICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNTQgNDUgTCA4MCA0MCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJmaXJzdExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gNDMgNDMgTCA0OCA0MSBMIDQ4IDE4IEwgNDMgNDNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBpZD1cInNlY29uZExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gNDMgNDMgTCA0MiA0NSBMIDE1IDQwIEwgNDMgNDNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBpZD1cInRoaXJkTGluZVBhdGhcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTSA0MyA0MyBMIDQ0IDUyIEwgMjkgNzggTCA0MyA0M1wiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwibm9uZVwiIGlkPVwiZm91cnRoTGluZVBhdGhcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTSA0MyA0MyBMIDUyIDUyIEwgNjggNzggTCA0MyA0M1wiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwibm9uZVwiIGlkPVwiZmlmdGhMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxnIGNsYXNzPVwiY2lyY2xlR3JvdXBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNywgNylcIj5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjZmlyc3RMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjZcIiBjeD1cIjBcIiBjeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZpbmUgdGhlIG1vdGlvbiBwYXRoIGFuaW1hdGlvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMy40XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXBhdGggeGxpbms6aHJlZj1cIiNzZWNvbmRMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjZcIiBjeD1cIjBcIiBjeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZpbmUgdGhlIG1vdGlvbiBwYXRoIGFuaW1hdGlvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMy40XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXBhdGggeGxpbms6aHJlZj1cIiN0aGlyZExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSByPVwiNlwiIGN4PVwiMFwiIGN5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlZmluZSB0aGUgbW90aW9uIHBhdGggYW5pbWF0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIzLjRcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtcGF0aCB4bGluazpocmVmPVwiI2ZvdXJ0aExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSByPVwiNlwiIGN4PVwiMFwiIGN5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlZmluZSB0aGUgbW90aW9uIHBhdGggYW5pbWF0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIzLjRcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtcGF0aCB4bGluazpocmVmPVwiI2ZpZnRoTGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NwaW5uZXJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaW52ZXJzZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgYmFzZUhyZWY6IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NrZWxldG9uXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ta2VsZXRvbkRpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2tlbGV0b24nKVxuICBza2VsZXRvbjogYm9vbGVhbiA9IHRydWU7XG59XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbG9hZGVkXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Mb2FkZWREaXJlY3RpdmUgeyB9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpc0xvYWRpbmddJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0lzTG9hZGluZ0RpcmVjdGl2ZSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1NrZWxldG9uRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHB1YmxpYyBza2VsZXRvblRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9Mb2FkZWREaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgcHVibGljIGxvYWRlZFRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gIHByaXZhdGUgaGFzVmlldyA9IGZhbHNlO1xuICBwcml2YXRlIHNrZWxldG9uVmlld3M6IEVtYmVkZGVkVmlld1JlZjxOb3ZvU2tlbGV0b25EaXJlY3RpdmU+W10gPSBbXTtcbiAgcHJpdmF0ZSBsb2FkZWRWaWV3czogRW1iZWRkZWRWaWV3UmVmPE5vdm9Mb2FkZWREaXJlY3RpdmU+W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpc0xvYWRpbmcoY29uZGl0aW9uOiBib29sZWFuKSB7XG4gICAgaWYgKCFjb25kaXRpb24gJiYgIXRoaXMuaGFzVmlldykge1xuICAgICAgdGhpcy5kZXN0cm95Vmlld3ModGhpcy5sb2FkZWRWaWV3cyk7XG4gICAgICB0aGlzLnNrZWxldG9uVmlld3MgPSB0aGlzLmNyZWF0ZVZpZXdzKHRoaXMuc2tlbGV0b25UZW1wbGF0ZXMpO1xuICAgICAgdGhpcy5oYXNWaWV3ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbiAmJiB0aGlzLmhhc1ZpZXcpIHtcbiAgICAgIHRoaXMuZGVzdHJveVZpZXdzKHRoaXMuc2tlbGV0b25WaWV3cyk7XG4gICAgICB0aGlzLmxvYWRlZFZpZXdzID0gdGhpcy5jcmVhdGVWaWV3cyh0aGlzLmxvYWRlZFRlbXBsYXRlcyk7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY3JlYXRlVmlld3ModGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj4pIHtcbiAgICByZXR1cm4gdGVtcGxhdGVzICYmIHRlbXBsYXRlcy5tYXAoKHYpID0+IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodikpO1xuICB9XG4gIGRlc3Ryb3lWaWV3cyh2aWV3czogRW1iZWRkZWRWaWV3UmVmPGFueT5bXSkge1xuICAgIGlmICh2aWV3cykge1xuICAgICAgZm9yIChjb25zdCB2aWV3IG9mIHZpZXdzKSB7XG4gICAgICAgIHZpZXcuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19