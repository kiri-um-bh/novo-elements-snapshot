/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9sb2FkaW5nL0xvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUVmLFdBQVcsRUFDWCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFBQTtJQWdCQSxDQUFDOztnQkFoQkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLGFBQWE7cUJBQ3pCO29CQUNELFFBQVEsRUFBRSxpTUFNUDtpQkFDSjs7O3dCQUVFLEtBQUs7O0lBRVIseUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQUhZLGtCQUFrQjs7O0lBQzdCLG1DQUNjOztBQUdoQjtJQUFBO0lBc0ZBLENBQUM7O2dCQXRGQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwrdUlBMkVQO2lCQUNKOzs7d0JBRUUsS0FBSzswQkFFTCxLQUFLOzJCQUVMLEtBQUs7O0lBRVIseUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQVBZLGtCQUFrQjs7O0lBQzdCLG1DQUNjOztJQUNkLHFDQUNpQjs7SUFDakIsc0NBQ2lCOztBQUduQjtJQUFBO1FBS0UsYUFBUSxHQUFZLElBQUksQ0FBQztJQUMzQixDQUFDOztnQkFOQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7MkJBRUUsV0FBVyxTQUFDLGdCQUFnQjs7SUFFL0IsNEJBQUM7Q0FBQSxBQU5ELElBTUM7U0FIWSxxQkFBcUI7OztJQUNoQyx5Q0FDeUI7O0FBRTNCO0lBQUE7SUFHa0MsQ0FBQzs7Z0JBSGxDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7O0lBQ2lDLDBCQUFDO0NBQUEsQUFIbkMsSUFHbUM7U0FBdEIsbUJBQW1CO0FBRWhDO0lBYUUsZ0NBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUozQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFhLEdBQTZDLEVBQUUsQ0FBQztRQUM3RCxnQkFBVyxHQUEyQyxFQUFFLENBQUM7SUFFWCxDQUFDO0lBRXZELHNCQUNJLDZDQUFTOzs7OztRQURiLFVBQ2MsU0FBa0I7WUFDOUIsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO2lCQUFNLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUM7OztPQUFBOzs7OztJQUNELDRDQUFXOzs7O0lBQVgsVUFBWSxTQUFzQztRQUFsRCxpQkFFQztRQURDLE9BQU8sU0FBUyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7Ozs7SUFDRCw2Q0FBWTs7OztJQUFaLFVBQWEsS0FBNkI7O1FBQ3hDLElBQUksS0FBSyxFQUFFOztnQkFDVCxLQUFpQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO29CQUFuQixJQUFJLElBQUksa0JBQUE7b0JBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNoQjs7Ozs7Ozs7O1NBQ0Y7SUFDSCxDQUFDOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7OztnQkEvSEMsZ0JBQWdCOzs7b0NBaUlmLGVBQWUsU0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7a0NBRTVELGVBQWUsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7NEJBUzFELEtBQUs7O0lBc0JSLDZCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FsQ1ksc0JBQXNCOzs7SUFDakMsbURBQ3NEOztJQUN0RCxpREFDb0Q7Ozs7O0lBRXBELHlDQUF3Qjs7Ozs7SUFDeEIsK0NBQXFFOzs7OztJQUNyRSw2Q0FBaUU7Ozs7O0lBRXJELCtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBRdWVyeUxpc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWxvYWRpbmcnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAndGhlbWUgfHwgXCJcIicsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTG9hZGluZ0VsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNwaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3ZnIGNsYXNzPVwiYnVsbGhvcm5TcGlubmVyXCIgW25nQ2xhc3NdPVwidGhlbWVcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgW2F0dHIuaW52ZXJzZV09XCJpbnZlcnNlXCI+XG4gICAgICAgICAgICA8dGl0bGU+QnVsbGhvcm4gU3Bpbm5lciBBbmltYXRpb248L3RpdGxlPlxuICAgICAgICAgICAgPGRlc2M+U3Bpbm5lciBhbmltYXRpb24gaW5kaWNhdGluZyBsb2FkaW5nPC9kZXNjPlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAuYnVsbGhvcm5TcGlubmVyIGcuY2lyY2xlR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IHVybChcInt7YmFzZUhyZWYgfHwgJyd9fSNnb29FZmZlY3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHVybChcInt7YmFzZUhyZWYgfHwgJyd9fSNnb29FZmZlY3RcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXzotd2Via2l0LWZ1bGwtc2NyZWVuOm5vdCg6cm9vdDpyb290KSwgLmJ1bGxob3JuU3Bpbm5lciBnLmNpcmNsZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBzdXBwb3J0cyAoLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0Om5vbmUpIGFuZCAobm90ICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkpIGFuZCAobm90ICgtbW96LWFwcGVhcmFuY2U6bm9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWxsaG9yblNwaW5uZXIgZy5jaXJjbGVHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBzdXBwb3J0cyAoLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0Om5vbmUpIGFuZCAobm90ICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkpIGFuZCAobm90ICgtbW96LWFwcGVhcmFuY2U6bm9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWxsaG9yblNwaW5uZXIgZy5jaXJjbGVHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwiZ29vRWZmZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUdyYXBoaWNcIiBzdGREZXZpYXRpb249XCI1XCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IGluPVwiYmx1clwiIG1vZGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjMgMCAwIDAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMS4zIDAgMCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDEuMyAwIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMCAxOSAtN1wiIHJlc3VsdD1cImdvb0VmZmVjdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJnb29FZmZlY3RcIiBvcGVyYXRvcj1cImF0b3BcIiAvPlxuICAgICAgICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gNDMgNDMgTCA1NCA0NSBMIDgwIDQwIEwgNDMgNDNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBpZD1cImZpcnN0TGluZVBhdGhcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTSA0MyA0MyBMIDQ4IDQxIEwgNDggMTggTCA0MyA0M1wiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwibm9uZVwiIGlkPVwic2Vjb25kTGluZVBhdGhcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTSA0MyA0MyBMIDQyIDQ1IEwgMTUgNDAgTCA0MyA0M1wiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwibm9uZVwiIGlkPVwidGhpcmRMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNDQgNTIgTCAyOSA3OCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJmb3VydGhMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNTIgNTIgTCA2OCA3OCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJmaWZ0aExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgPGcgY2xhc3M9XCJjaXJjbGVHcm91cFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3LCA3KVwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjZcIiBjeD1cIjBcIiBjeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZpbmUgdGhlIG1vdGlvbiBwYXRoIGFuaW1hdGlvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMy40XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXBhdGggeGxpbms6aHJlZj1cIiNmaXJzdExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSByPVwiNlwiIGN4PVwiMFwiIGN5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlZmluZSB0aGUgbW90aW9uIHBhdGggYW5pbWF0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIzLjRcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtcGF0aCB4bGluazpocmVmPVwiI3NlY29uZExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSByPVwiNlwiIGN4PVwiMFwiIGN5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlZmluZSB0aGUgbW90aW9uIHBhdGggYW5pbWF0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIzLjRcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtcGF0aCB4bGluazpocmVmPVwiI3RoaXJkTGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjZm91cnRoTGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjZmlmdGhMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3Bpbm5lckVsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbnZlcnNlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBiYXNlSHJlZjogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2tlbGV0b25dJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NrZWxldG9uRGlyZWN0aXZlIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5za2VsZXRvbicpXG4gIHNrZWxldG9uOiBib29sZWFuID0gdHJ1ZTtcbn1cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsb2FkZWRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xvYWRlZERpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaXNMb2FkaW5nXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Jc0xvYWRpbmdEaXJlY3RpdmUge1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9Ta2VsZXRvbkRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBwdWJsaWMgc2tlbGV0b25UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvTG9hZGVkRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHB1YmxpYyBsb2FkZWRUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICBwcml2YXRlIGhhc1ZpZXcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBza2VsZXRvblZpZXdzOiBFbWJlZGRlZFZpZXdSZWY8Tm92b1NrZWxldG9uRGlyZWN0aXZlPltdID0gW107XG4gIHByaXZhdGUgbG9hZGVkVmlld3M6IEVtYmVkZGVkVmlld1JlZjxOb3ZvTG9hZGVkRGlyZWN0aXZlPltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpc0xvYWRpbmcoY29uZGl0aW9uOiBib29sZWFuKSB7XG4gICAgaWYgKCFjb25kaXRpb24gJiYgIXRoaXMuaGFzVmlldykge1xuICAgICAgdGhpcy5kZXN0cm95Vmlld3ModGhpcy5sb2FkZWRWaWV3cyk7XG4gICAgICB0aGlzLnNrZWxldG9uVmlld3MgPSB0aGlzLmNyZWF0ZVZpZXdzKHRoaXMuc2tlbGV0b25UZW1wbGF0ZXMpO1xuICAgICAgdGhpcy5oYXNWaWV3ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbiAmJiB0aGlzLmhhc1ZpZXcpIHtcbiAgICAgIHRoaXMuZGVzdHJveVZpZXdzKHRoaXMuc2tlbGV0b25WaWV3cyk7XG4gICAgICB0aGlzLmxvYWRlZFZpZXdzID0gdGhpcy5jcmVhdGVWaWV3cyh0aGlzLmxvYWRlZFRlbXBsYXRlcyk7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY3JlYXRlVmlld3ModGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj4pIHtcbiAgICByZXR1cm4gdGVtcGxhdGVzICYmIHRlbXBsYXRlcy5tYXAoKHYpID0+IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodikpO1xuICB9XG4gIGRlc3Ryb3lWaWV3cyh2aWV3czogRW1iZWRkZWRWaWV3UmVmPGFueT5bXSkge1xuICAgIGlmICh2aWV3cykge1xuICAgICAgZm9yIChsZXQgdmlldyBvZiB2aWV3cykge1xuICAgICAgICB2aWV3LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==