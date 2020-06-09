import { __values } from "tslib";
// NG2
import { Component, ContentChildren, Directive, HostBinding, Input, QueryList, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var NovoLoadingElement = /** @class */ (function () {
    function NovoLoadingElement() {
    }
    NovoLoadingElement.ɵfac = function NovoLoadingElement_Factory(t) { return new (t || NovoLoadingElement)(); };
    NovoLoadingElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoLoadingElement, selectors: [["novo-loading"]], hostVars: 2, hostBindings: function NovoLoadingElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.theme || "");
        } }, inputs: { theme: "theme" }, decls: 5, vars: 0, consts: [[1, "dot"]], template: function NovoLoadingElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "span", 0);
            i0.ɵɵelement(1, "span", 0);
            i0.ɵɵelement(2, "span", 0);
            i0.ɵɵelement(3, "span", 0);
            i0.ɵɵelement(4, "span", 0);
        } }, encapsulation: 2 });
    return NovoLoadingElement;
}());
export { NovoLoadingElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLoadingElement, [{
        type: Component,
        args: [{
                selector: 'novo-loading',
                host: {
                    '[class]': 'theme || ""',
                },
                template: "\n        <span class=\"dot\"></span>\n        <span class=\"dot\"></span>\n        <span class=\"dot\"></span>\n        <span class=\"dot\"></span>\n        <span class=\"dot\"></span>\n    ",
            }]
    }], null, { theme: [{
            type: Input
        }] }); })();
var NovoSpinnerElement = /** @class */ (function () {
    function NovoSpinnerElement() {
    }
    NovoSpinnerElement.ɵfac = function NovoSpinnerElement_Factory(t) { return new (t || NovoSpinnerElement)(); };
    NovoSpinnerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSpinnerElement, selectors: [["novo-spinner"]], inputs: { theme: "theme", inverse: "inverse", baseHref: "baseHref" }, decls: 33, vars: 4, consts: [["height", "100", "width", "100", "viewBox", "0 0 100 100", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "bullhornSpinner", 3, "ngClass"], ["id", "gooEffect"], ["in", "SourceGraphic", "stdDeviation", "5", "result", "blur"], ["in", "blur", "mode", "matrix", "values", "\n                            1.3 0 0 0 0\n                            0 1.3 0 0 0\n                            0 0 1.3 0 0\n                            0 0 0 19 -7", "result", "gooEffect"], ["in", "SourceGraphic", "in2", "gooEffect", "operator", "atop"], ["d", "M 43 43 L 54 45 L 80 40 L 43 43", "stroke", "none", "fill", "none", "id", "firstLinePath"], ["d", "M 43 43 L 48 41 L 48 18 L 43 43", "stroke", "none", "fill", "none", "id", "secondLinePath"], ["d", "M 43 43 L 42 45 L 15 40 L 43 43", "stroke", "none", "fill", "none", "id", "thirdLinePath"], ["d", "M 43 43 L 44 52 L 29 78 L 43 43", "stroke", "none", "fill", "none", "id", "fourthLinePath"], ["d", "M 43 43 L 52 52 L 68 78 L 43 43", "stroke", "none", "fill", "none", "id", "fifthLinePath"], ["transform", "translate(7, 7)", 1, "circleGroup"], ["r", "6", "cx", "0", "cy", "0"], ["dur", "3.4", "repeatCount", "indefinite"], [0, "xlink", "href", "#firstLinePath"], [0, "xlink", "href", "#secondLinePath"], [0, "xlink", "href", "#thirdLinePath"], [0, "xlink", "href", "#fourthLinePath"], [0, "xlink", "href", "#fifthLinePath"]], template: function NovoSpinnerElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 0);
            i0.ɵɵelementStart(1, "title");
            i0.ɵɵtext(2, "Bullhorn Spinner Animation");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "desc");
            i0.ɵɵtext(4, "Spinner animation indicating loading");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "defs");
            i0.ɵɵelementStart(6, "style");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "filter", 1);
            i0.ɵɵelement(9, "feGaussianBlur", 2);
            i0.ɵɵelement(10, "feColorMatrix", 3);
            i0.ɵɵelement(11, "feComposite", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "path", 5);
            i0.ɵɵelement(13, "path", 6);
            i0.ɵɵelement(14, "path", 7);
            i0.ɵɵelement(15, "path", 8);
            i0.ɵɵelement(16, "path", 9);
            i0.ɵɵelementStart(17, "g", 10);
            i0.ɵɵelementStart(18, "circle", 11);
            i0.ɵɵelementStart(19, "animateMotion", 12);
            i0.ɵɵelement(20, "mpath", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "circle", 11);
            i0.ɵɵelementStart(22, "animateMotion", 12);
            i0.ɵɵelement(23, "mpath", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "circle", 11);
            i0.ɵɵelementStart(25, "animateMotion", 12);
            i0.ɵɵelement(26, "mpath", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "circle", 11);
            i0.ɵɵelementStart(28, "animateMotion", 12);
            i0.ɵɵelement(29, "mpath", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "circle", 11);
            i0.ɵɵelementStart(31, "animateMotion", 12);
            i0.ɵɵelement(32, "mpath", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.theme);
            i0.ɵɵattribute("inverse", ctx.inverse);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate2(" .bullhornSpinner g.circleGroup { -webkit-filter: url(\"", ctx.baseHref || "", "#gooEffect\"); filter: url(\"", ctx.baseHref || "", "#gooEffect\"); } _:-webkit-full-screen:not(:root:root), .bullhornSpinner g.circleGroup { -webkit-filter: none; filter: none; } @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) { .bullhornSpinner g.circleGroup { -webkit-filter: none; filter: none; } } @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) { .bullhornSpinner g.circleGroup { -webkit-filter: none; filter: none; } } ");
        } }, directives: [i1.NgClass], encapsulation: 2 });
    return NovoSpinnerElement;
}());
export { NovoSpinnerElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSpinnerElement, [{
        type: Component,
        args: [{
                selector: 'novo-spinner',
                template: "\n        <svg class=\"bullhornSpinner\" [ngClass]=\"theme\" height=\"100\" width=\"100\" viewBox=\"0 0 100 100\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.inverse]=\"inverse\">\n            <title>Bullhorn Spinner Animation</title>\n            <desc>Spinner animation indicating loading</desc>\n            <defs>\n                <style>\n                    .bullhornSpinner g.circleGroup {\n                        -webkit-filter: url(\"{{baseHref || ''}}#gooEffect\");\n                        filter: url(\"{{baseHref || ''}}#gooEffect\");\n                    }\n                    _:-webkit-full-screen:not(:root:root), .bullhornSpinner g.circleGroup {\n                        -webkit-filter: none;\n                        filter: none;\n                    }\n                    @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {\n                        .bullhornSpinner g.circleGroup {\n                            -webkit-filter: none;\n                            filter: none;\n                        }\n                    }\n                    @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {\n                        .bullhornSpinner g.circleGroup {\n                            -webkit-filter: none;\n                            filter: none;\n                        }\n                    }\n                </style>\n                <filter id=\"gooEffect\">\n                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"5\" result=\"blur\" />\n                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"\n                            1.3 0 0 0 0\n                            0 1.3 0 0 0\n                            0 0 1.3 0 0\n                            0 0 0 19 -7\" result=\"gooEffect\" />\n                    <feComposite in=\"SourceGraphic\" in2=\"gooEffect\" operator=\"atop\" />\n                </filter>\n            </defs>\n            <path d=\"M 43 43 L 54 45 L 80 40 L 43 43\" stroke=\"none\" fill=\"none\" id=\"firstLinePath\"/>\n            <path d=\"M 43 43 L 48 41 L 48 18 L 43 43\" stroke=\"none\" fill=\"none\" id=\"secondLinePath\"/>\n            <path d=\"M 43 43 L 42 45 L 15 40 L 43 43\" stroke=\"none\" fill=\"none\" id=\"thirdLinePath\"/>\n            <path d=\"M 43 43 L 44 52 L 29 78 L 43 43\" stroke=\"none\" fill=\"none\" id=\"fourthLinePath\"/>\n            <path d=\"M 43 43 L 52 52 L 68 78 L 43 43\" stroke=\"none\" fill=\"none\" id=\"fifthLinePath\"/>\n            <g class=\"circleGroup\" transform=\"translate(7, 7)\">\n                <circle r=\"6\" cx=\"0\" cy=\"0\">\n                    <!-- Define the motion path animation -->\n                    <animateMotion dur=\"3.4\" repeatCount=\"indefinite\">\n                        <mpath xlink:href=\"#firstLinePath\"/>\n                    </animateMotion>\n                </circle>\n                <circle r=\"6\" cx=\"0\" cy=\"0\">\n                    <!-- Define the motion path animation -->\n                    <animateMotion dur=\"3.4\" repeatCount=\"indefinite\">\n                        <mpath xlink:href=\"#secondLinePath\"/>\n                    </animateMotion>\n                </circle>\n                <circle r=\"6\" cx=\"0\" cy=\"0\">\n                    <!-- Define the motion path animation -->\n                    <animateMotion dur=\"3.4\" repeatCount=\"indefinite\">\n                        <mpath xlink:href=\"#thirdLinePath\"/>\n                    </animateMotion>\n                </circle>\n                <circle r=\"6\" cx=\"0\" cy=\"0\">\n                    <!-- Define the motion path animation -->\n                    <animateMotion dur=\"3.4\" repeatCount=\"indefinite\">\n                        <mpath xlink:href=\"#fourthLinePath\"/>\n                    </animateMotion>\n                </circle>\n                <circle r=\"6\" cx=\"0\" cy=\"0\">\n                    <!-- Define the motion path animation -->\n                    <animateMotion dur=\"3.4\" repeatCount=\"indefinite\">\n                        <mpath xlink:href=\"#fifthLinePath\"/>\n                    </animateMotion>\n                </circle>\n            </g>\n        </svg>\n    ",
            }]
    }], null, { theme: [{
            type: Input
        }], inverse: [{
            type: Input
        }], baseHref: [{
            type: Input
        }] }); })();
var NovoSkeletonDirective = /** @class */ (function () {
    function NovoSkeletonDirective() {
        this.skeleton = true;
    }
    NovoSkeletonDirective.ɵfac = function NovoSkeletonDirective_Factory(t) { return new (t || NovoSkeletonDirective)(); };
    NovoSkeletonDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoSkeletonDirective, selectors: [["", "skeleton", ""]], hostVars: 2, hostBindings: function NovoSkeletonDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("skeleton", ctx.skeleton);
        } } });
    return NovoSkeletonDirective;
}());
export { NovoSkeletonDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSkeletonDirective, [{
        type: Directive,
        args: [{
                selector: '[skeleton]',
            }]
    }], null, { skeleton: [{
            type: HostBinding,
            args: ['class.skeleton']
        }] }); })();
var NovoLoadedDirective = /** @class */ (function () {
    function NovoLoadedDirective() {
    }
    NovoLoadedDirective.ɵfac = function NovoLoadedDirective_Factory(t) { return new (t || NovoLoadedDirective)(); };
    NovoLoadedDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoLoadedDirective, selectors: [["", "loaded", ""]] });
    return NovoLoadedDirective;
}());
export { NovoLoadedDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLoadedDirective, [{
        type: Directive,
        args: [{
                selector: '[loaded]',
            }]
    }], null, null); })();
var NovoIsLoadingDirective = /** @class */ (function () {
    function NovoIsLoadingDirective(viewContainer) {
        this.viewContainer = viewContainer;
        this.hasView = false;
        this.skeletonViews = [];
        this.loadedViews = [];
    }
    Object.defineProperty(NovoIsLoadingDirective.prototype, "isLoading", {
        set: function (condition) {
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
    NovoIsLoadingDirective.prototype.createViews = function (templates) {
        var _this = this;
        return templates && templates.map(function (v) { return _this.viewContainer.createEmbeddedView(v); });
    };
    NovoIsLoadingDirective.prototype.destroyViews = function (views) {
        var e_1, _a;
        if (views) {
            try {
                for (var views_1 = __values(views), views_1_1 = views_1.next(); !views_1_1.done; views_1_1 = views_1.next()) {
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
    NovoIsLoadingDirective.ɵfac = function NovoIsLoadingDirective_Factory(t) { return new (t || NovoIsLoadingDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    NovoIsLoadingDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoIsLoadingDirective, selectors: [["", "isLoading", ""]], contentQueries: function NovoIsLoadingDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NovoSkeletonDirective, false, TemplateRef);
            i0.ɵɵcontentQuery(dirIndex, NovoLoadedDirective, false, TemplateRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.skeletonTemplates = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.loadedTemplates = _t);
        } }, inputs: { isLoading: "isLoading" } });
    return NovoIsLoadingDirective;
}());
export { NovoIsLoadingDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoIsLoadingDirective, [{
        type: Directive,
        args: [{
                selector: '[isLoading]',
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { skeletonTemplates: [{
            type: ContentChildren,
            args: [NovoSkeletonDirective, { read: TemplateRef }]
        }], loadedTemplates: [{
            type: ContentChildren,
            args: [NovoLoadedDirective, { read: TemplateRef }]
        }], isLoading: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9sb2FkaW5nL0xvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW1CLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRXJKO0lBQUE7S0FnQkM7d0ZBSFksa0JBQWtCOzJEQUFsQixrQkFBa0I7OztZQVB2QiwwQkFBeUI7WUFDekIsMEJBQXlCO1lBQ3pCLDBCQUF5QjtZQUN6QiwwQkFBeUI7WUFDekIsMEJBQXlCOzs2QkFiakM7Q0FtQkMsQUFoQkQsSUFnQkM7U0FIWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQWI5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsYUFBYTtpQkFDekI7Z0JBQ0QsUUFBUSxFQUFFLGlNQU1QO2FBQ0o7O2tCQUVFLEtBQUs7O0FBSVI7SUFBQTtLQXNGQzt3RkFQWSxrQkFBa0I7MkRBQWxCLGtCQUFrQjtZQTVFdkIsbUJBQ0k7WUFESiw4QkFDSTtZQUFBLDZCQUFPO1lBQUEsMENBQTBCO1lBQUEsaUJBQVE7WUFDekMsNEJBQU07WUFBQSxvREFBb0M7WUFBQSxpQkFBTztZQUNqRCw0QkFDSTtZQUFBLDZCQUNJO1lBQUEsWUFvQko7WUFBQSxpQkFBUTtZQUNSLGlDQUNJO1lBQUEsb0NBQ0E7WUFBQSxvQ0FLQTtZQUFBLGtDQUNKO1lBQUEsaUJBQVM7WUFDYixpQkFBTztZQUNQLDJCQUNBO1lBQUEsMkJBQ0E7WUFBQSwyQkFDQTtZQUFBLDJCQUNBO1lBQUEsMkJBQ0E7WUFBQSw4QkFDSTtZQUFBLG1DQUNJO1lBQ0EsMENBQ0k7WUFBQSw2QkFDSjtZQUFBLGlCQUFn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OytEQUF0QixzQkFBc0I7d0NBQ2hCLHFCQUFxQixTQUFVLFdBQVc7d0NBRTFDLG1CQUFtQixTQUFVLFdBQVc7Ozs7OztpQ0EvSDNEO0NBOEpDLEFBckNELElBcUNDO1NBbENZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBSGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTthQUN4Qjs7a0JBRUUsZUFBZTttQkFBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O2tCQUU1RCxlQUFlO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7a0JBUzFELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEVtYmVkZGVkVmlld1JlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbG9hZGluZycsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICd0aGVtZSB8fCBcIlwiJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Mb2FkaW5nRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzdmcgY2xhc3M9XCJidWxsaG9yblNwaW5uZXJcIiBbbmdDbGFzc109XCJ0aGVtZVwiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBbYXR0ci5pbnZlcnNlXT1cImludmVyc2VcIj5cbiAgICAgICAgICAgIDx0aXRsZT5CdWxsaG9ybiBTcGlubmVyIEFuaW1hdGlvbjwvdGl0bGU+XG4gICAgICAgICAgICA8ZGVzYz5TcGlubmVyIGFuaW1hdGlvbiBpbmRpY2F0aW5nIGxvYWRpbmc8L2Rlc2M+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIC5idWxsaG9yblNwaW5uZXIgZy5jaXJjbGVHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogdXJsKFwie3tiYXNlSHJlZiB8fCAnJ319I2dvb0VmZmVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdXJsKFwie3tiYXNlSHJlZiB8fCAnJ319I2dvb0VmZmVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfOi13ZWJraXQtZnVsbC1zY3JlZW46bm90KDpyb290OnJvb3QpLCAuYnVsbGhvcm5TcGlubmVyIGcuY2lyY2xlR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQHN1cHBvcnRzICgtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZSkgYW5kIChub3QgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSkgYW5kIChub3QgKC1tb3otYXBwZWFyYW5jZTpub25lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1bGxob3JuU3Bpbm5lciBnLmNpcmNsZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQHN1cHBvcnRzICgtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZSkgYW5kIChub3QgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSkgYW5kIChub3QgKC1tb3otYXBwZWFyYW5jZTpub25lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1bGxob3JuU3Bpbm5lciBnLmNpcmNsZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJnb29FZmZlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVwiU291cmNlR3JhcGhpY1wiIHN0ZERldmlhdGlvbj1cIjVcIiByZXN1bHQ9XCJibHVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49XCJibHVyXCIgbW9kZT1cIm1hdHJpeFwiIHZhbHVlcz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMyAwIDAgMCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAxLjMgMCAwIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMS4zIDAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAwIDE5IC03XCIgcmVzdWx0PVwiZ29vRWZmZWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cImdvb0VmZmVjdFwiIG9wZXJhdG9yPVwiYXRvcFwiIC8+XG4gICAgICAgICAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTSA0MyA0MyBMIDU0IDQ1IEwgODAgNDAgTCA0MyA0M1wiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwibm9uZVwiIGlkPVwiZmlyc3RMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNDggNDEgTCA0OCAxOCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJzZWNvbmRMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNDIgNDUgTCAxNSA0MCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJ0aGlyZExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gNDMgNDMgTCA0NCA1MiBMIDI5IDc4IEwgNDMgNDNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBpZD1cImZvdXJ0aExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gNDMgNDMgTCA1MiA1MiBMIDY4IDc4IEwgNDMgNDNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBpZD1cImZpZnRoTGluZVBhdGhcIi8+XG4gICAgICAgICAgICA8ZyBjbGFzcz1cImNpcmNsZUdyb3VwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcsIDcpXCI+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSByPVwiNlwiIGN4PVwiMFwiIGN5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlZmluZSB0aGUgbW90aW9uIHBhdGggYW5pbWF0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIzLjRcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtcGF0aCB4bGluazpocmVmPVwiI2ZpcnN0TGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjc2Vjb25kTGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjdGhpcmRMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjZcIiBjeD1cIjBcIiBjeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZpbmUgdGhlIG1vdGlvbiBwYXRoIGFuaW1hdGlvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMy40XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXBhdGggeGxpbms6aHJlZj1cIiNmb3VydGhMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjZcIiBjeD1cIjBcIiBjeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZpbmUgdGhlIG1vdGlvbiBwYXRoIGFuaW1hdGlvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMy40XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXBhdGggeGxpbms6aHJlZj1cIiNmaWZ0aExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TcGlubmVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGludmVyc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGJhc2VIcmVmOiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tza2VsZXRvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2tlbGV0b25EaXJlY3RpdmUge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNrZWxldG9uJylcbiAgc2tlbGV0b246IGJvb2xlYW4gPSB0cnVlO1xufVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvYWRlZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTG9hZGVkRGlyZWN0aXZlIHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaXNMb2FkaW5nXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Jc0xvYWRpbmdEaXJlY3RpdmUge1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9Ta2VsZXRvbkRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBwdWJsaWMgc2tlbGV0b25UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvTG9hZGVkRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHB1YmxpYyBsb2FkZWRUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICBwcml2YXRlIGhhc1ZpZXcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBza2VsZXRvblZpZXdzOiBFbWJlZGRlZFZpZXdSZWY8Tm92b1NrZWxldG9uRGlyZWN0aXZlPltdID0gW107XG4gIHByaXZhdGUgbG9hZGVkVmlld3M6IEVtYmVkZGVkVmlld1JlZjxOb3ZvTG9hZGVkRGlyZWN0aXZlPltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cblxuICBASW5wdXQoKVxuICBzZXQgaXNMb2FkaW5nKGNvbmRpdGlvbjogYm9vbGVhbikge1xuICAgIGlmICghY29uZGl0aW9uICYmICF0aGlzLmhhc1ZpZXcpIHtcbiAgICAgIHRoaXMuZGVzdHJveVZpZXdzKHRoaXMubG9hZGVkVmlld3MpO1xuICAgICAgdGhpcy5za2VsZXRvblZpZXdzID0gdGhpcy5jcmVhdGVWaWV3cyh0aGlzLnNrZWxldG9uVGVtcGxhdGVzKTtcbiAgICAgIHRoaXMuaGFzVmlldyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24gJiYgdGhpcy5oYXNWaWV3KSB7XG4gICAgICB0aGlzLmRlc3Ryb3lWaWV3cyh0aGlzLnNrZWxldG9uVmlld3MpO1xuICAgICAgdGhpcy5sb2FkZWRWaWV3cyA9IHRoaXMuY3JlYXRlVmlld3ModGhpcy5sb2FkZWRUZW1wbGF0ZXMpO1xuICAgICAgdGhpcy5oYXNWaWV3ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNyZWF0ZVZpZXdzKHRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlcyAmJiB0ZW1wbGF0ZXMubWFwKCh2KSA9PiB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHYpKTtcbiAgfVxuICBkZXN0cm95Vmlld3Modmlld3M6IEVtYmVkZGVkVmlld1JlZjxhbnk+W10pIHtcbiAgICBpZiAodmlld3MpIHtcbiAgICAgIGZvciAoY29uc3QgdmlldyBvZiB2aWV3cykge1xuICAgICAgICB2aWV3LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==