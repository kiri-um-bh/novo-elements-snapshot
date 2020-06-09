// NG2
import { Component, ContentChildren, Directive, HostBinding, Input, QueryList, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NovoLoadingElement {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLoadingElement, [{
        type: Component,
        args: [{
                selector: 'novo-loading',
                host: {
                    '[class]': 'theme || ""',
                },
                template: `
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    `,
            }]
    }], null, { theme: [{
            type: Input
        }] }); })();
export class NovoSpinnerElement {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSpinnerElement, [{
        type: Component,
        args: [{
                selector: 'novo-spinner',
                template: `
        <svg class="bullhornSpinner" [ngClass]="theme" height="100" width="100" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" [attr.inverse]="inverse">
            <title>Bullhorn Spinner Animation</title>
            <desc>Spinner animation indicating loading</desc>
            <defs>
                <style>
                    .bullhornSpinner g.circleGroup {
                        -webkit-filter: url("{{baseHref || ''}}#gooEffect");
                        filter: url("{{baseHref || ''}}#gooEffect");
                    }
                    _:-webkit-full-screen:not(:root:root), .bullhornSpinner g.circleGroup {
                        -webkit-filter: none;
                        filter: none;
                    }
                    @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {
                        .bullhornSpinner g.circleGroup {
                            -webkit-filter: none;
                            filter: none;
                        }
                    }
                    @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {
                        .bullhornSpinner g.circleGroup {
                            -webkit-filter: none;
                            filter: none;
                        }
                    }
                </style>
                <filter id="gooEffect">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="
                            1.3 0 0 0 0
                            0 1.3 0 0 0
                            0 0 1.3 0 0
                            0 0 0 19 -7" result="gooEffect" />
                    <feComposite in="SourceGraphic" in2="gooEffect" operator="atop" />
                </filter>
            </defs>
            <path d="M 43 43 L 54 45 L 80 40 L 43 43" stroke="none" fill="none" id="firstLinePath"/>
            <path d="M 43 43 L 48 41 L 48 18 L 43 43" stroke="none" fill="none" id="secondLinePath"/>
            <path d="M 43 43 L 42 45 L 15 40 L 43 43" stroke="none" fill="none" id="thirdLinePath"/>
            <path d="M 43 43 L 44 52 L 29 78 L 43 43" stroke="none" fill="none" id="fourthLinePath"/>
            <path d="M 43 43 L 52 52 L 68 78 L 43 43" stroke="none" fill="none" id="fifthLinePath"/>
            <g class="circleGroup" transform="translate(7, 7)">
                <circle r="6" cx="0" cy="0">
                    <!-- Define the motion path animation -->
                    <animateMotion dur="3.4" repeatCount="indefinite">
                        <mpath xlink:href="#firstLinePath"/>
                    </animateMotion>
                </circle>
                <circle r="6" cx="0" cy="0">
                    <!-- Define the motion path animation -->
                    <animateMotion dur="3.4" repeatCount="indefinite">
                        <mpath xlink:href="#secondLinePath"/>
                    </animateMotion>
                </circle>
                <circle r="6" cx="0" cy="0">
                    <!-- Define the motion path animation -->
                    <animateMotion dur="3.4" repeatCount="indefinite">
                        <mpath xlink:href="#thirdLinePath"/>
                    </animateMotion>
                </circle>
                <circle r="6" cx="0" cy="0">
                    <!-- Define the motion path animation -->
                    <animateMotion dur="3.4" repeatCount="indefinite">
                        <mpath xlink:href="#fourthLinePath"/>
                    </animateMotion>
                </circle>
                <circle r="6" cx="0" cy="0">
                    <!-- Define the motion path animation -->
                    <animateMotion dur="3.4" repeatCount="indefinite">
                        <mpath xlink:href="#fifthLinePath"/>
                    </animateMotion>
                </circle>
            </g>
        </svg>
    `,
            }]
    }], null, { theme: [{
            type: Input
        }], inverse: [{
            type: Input
        }], baseHref: [{
            type: Input
        }] }); })();
export class NovoSkeletonDirective {
    constructor() {
        this.skeleton = true;
    }
}
NovoSkeletonDirective.ɵfac = function NovoSkeletonDirective_Factory(t) { return new (t || NovoSkeletonDirective)(); };
NovoSkeletonDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoSkeletonDirective, selectors: [["", "skeleton", ""]], hostVars: 2, hostBindings: function NovoSkeletonDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("skeleton", ctx.skeleton);
    } } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSkeletonDirective, [{
        type: Directive,
        args: [{
                selector: '[skeleton]',
            }]
    }], null, { skeleton: [{
            type: HostBinding,
            args: ['class.skeleton']
        }] }); })();
export class NovoLoadedDirective {
}
NovoLoadedDirective.ɵfac = function NovoLoadedDirective_Factory(t) { return new (t || NovoLoadedDirective)(); };
NovoLoadedDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoLoadedDirective, selectors: [["", "loaded", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLoadedDirective, [{
        type: Directive,
        args: [{
                selector: '[loaded]',
            }]
    }], null, null); })();
export class NovoIsLoadingDirective {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
        this.hasView = false;
        this.skeletonViews = [];
        this.loadedViews = [];
    }
    set isLoading(condition) {
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
    }
    createViews(templates) {
        return templates && templates.map((v) => this.viewContainer.createEmbeddedView(v));
    }
    destroyViews(views) {
        if (views) {
            for (const view of views) {
                view.destroy();
            }
        }
    }
}
NovoIsLoadingDirective.ɵfac = function NovoIsLoadingDirective_Factory(t) { return new (t || NovoIsLoadingDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
NovoIsLoadingDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoIsLoadingDirective, selectors: [["", "isLoading", ""]], contentQueries: function NovoIsLoadingDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoSkeletonDirective, false, TemplateRef);
        i0.ɵɵcontentQuery(dirIndex, NovoLoadedDirective, false, TemplateRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.skeletonTemplates = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.loadedTemplates = _t);
    } }, inputs: { isLoading: "isLoading" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9sb2FkaW5nL0xvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBbUIsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFlckosTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjt1REFBbEIsa0JBQWtCOzs7UUFQdkIsMEJBQXlCO1FBQ3pCLDBCQUF5QjtRQUN6QiwwQkFBeUI7UUFDekIsMEJBQXlCO1FBQ3pCLDBCQUF5Qjs7a0RBR3BCLGtCQUFrQjtjQWI5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsYUFBYTtpQkFDekI7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7S0FNUDthQUNKOztrQkFFRSxLQUFLOztBQW1GUixNQUFNLE9BQU8sa0JBQWtCOztvRkFBbEIsa0JBQWtCO3VEQUFsQixrQkFBa0I7UUE1RXZCLG1CQUNJO1FBREosOEJBQ0k7UUFBQSw2QkFBTztRQUFBLDBDQUEwQjtRQUFBLGlCQUFRO1FBQ3pDLDRCQUFNO1FBQUEsb0RBQW9DO1FBQUEsaUJBQU87UUFDakQsNEJBQ0k7UUFBQSw2QkFDSTtRQUFBLFlBb0JKO1FBQUEsaUJBQVE7UUFDUixpQ0FDSTtRQUFBLG9DQUNBO1FBQUEsb0NBS0E7UUFBQSxrQ0FDSjtRQUFBLGlCQUFTO1FBQ2IsaUJBQU87UUFDUCwyQkFDQTtRQUFBLDJCQUNBO1FBQUEsMkJBQ0E7UUFBQSwyQkFDQTtRQUFBLDJCQUNBO1FBQUEsOEJBQ0k7UUFBQSxtQ0FDSTtRQUNBLDBDQUNJO1FBQUEsNkJBQ0o7UUFBQSxpQkFBZ0I7UUFDcEIsaUJBQVM7UUFD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LGFBQWE7YUFDeEI7O2tCQUVFLGVBQWU7bUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztrQkFFNUQsZUFBZTttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O2tCQVMxRCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWxvYWRpbmcnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAndGhlbWUgfHwgXCJcIicsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTG9hZGluZ0VsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNwaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3ZnIGNsYXNzPVwiYnVsbGhvcm5TcGlubmVyXCIgW25nQ2xhc3NdPVwidGhlbWVcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgW2F0dHIuaW52ZXJzZV09XCJpbnZlcnNlXCI+XG4gICAgICAgICAgICA8dGl0bGU+QnVsbGhvcm4gU3Bpbm5lciBBbmltYXRpb248L3RpdGxlPlxuICAgICAgICAgICAgPGRlc2M+U3Bpbm5lciBhbmltYXRpb24gaW5kaWNhdGluZyBsb2FkaW5nPC9kZXNjPlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAuYnVsbGhvcm5TcGlubmVyIGcuY2lyY2xlR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IHVybChcInt7YmFzZUhyZWYgfHwgJyd9fSNnb29FZmZlY3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHVybChcInt7YmFzZUhyZWYgfHwgJyd9fSNnb29FZmZlY3RcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXzotd2Via2l0LWZ1bGwtc2NyZWVuOm5vdCg6cm9vdDpyb290KSwgLmJ1bGxob3JuU3Bpbm5lciBnLmNpcmNsZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBzdXBwb3J0cyAoLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0Om5vbmUpIGFuZCAobm90ICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkpIGFuZCAobm90ICgtbW96LWFwcGVhcmFuY2U6bm9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWxsaG9yblNwaW5uZXIgZy5jaXJjbGVHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBzdXBwb3J0cyAoLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0Om5vbmUpIGFuZCAobm90ICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkpIGFuZCAobm90ICgtbW96LWFwcGVhcmFuY2U6bm9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWxsaG9yblNwaW5uZXIgZy5jaXJjbGVHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwiZ29vRWZmZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUdyYXBoaWNcIiBzdGREZXZpYXRpb249XCI1XCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IGluPVwiYmx1clwiIG1vZGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjMgMCAwIDAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMS4zIDAgMCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDEuMyAwIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMCAxOSAtN1wiIHJlc3VsdD1cImdvb0VmZmVjdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJnb29FZmZlY3RcIiBvcGVyYXRvcj1cImF0b3BcIiAvPlxuICAgICAgICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gNDMgNDMgTCA1NCA0NSBMIDgwIDQwIEwgNDMgNDNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBpZD1cImZpcnN0TGluZVBhdGhcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTSA0MyA0MyBMIDQ4IDQxIEwgNDggMTggTCA0MyA0M1wiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwibm9uZVwiIGlkPVwic2Vjb25kTGluZVBhdGhcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTSA0MyA0MyBMIDQyIDQ1IEwgMTUgNDAgTCA0MyA0M1wiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwibm9uZVwiIGlkPVwidGhpcmRMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNDQgNTIgTCAyOSA3OCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJmb3VydGhMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNTIgNTIgTCA2OCA3OCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJmaWZ0aExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgPGcgY2xhc3M9XCJjaXJjbGVHcm91cFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3LCA3KVwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjZcIiBjeD1cIjBcIiBjeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZpbmUgdGhlIG1vdGlvbiBwYXRoIGFuaW1hdGlvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMy40XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXBhdGggeGxpbms6aHJlZj1cIiNmaXJzdExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSByPVwiNlwiIGN4PVwiMFwiIGN5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlZmluZSB0aGUgbW90aW9uIHBhdGggYW5pbWF0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIzLjRcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtcGF0aCB4bGluazpocmVmPVwiI3NlY29uZExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSByPVwiNlwiIGN4PVwiMFwiIGN5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlZmluZSB0aGUgbW90aW9uIHBhdGggYW5pbWF0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIzLjRcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtcGF0aCB4bGluazpocmVmPVwiI3RoaXJkTGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjZm91cnRoTGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjZmlmdGhMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3Bpbm5lckVsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbnZlcnNlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBiYXNlSHJlZjogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2tlbGV0b25dJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NrZWxldG9uRGlyZWN0aXZlIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5za2VsZXRvbicpXG4gIHNrZWxldG9uOiBib29sZWFuID0gdHJ1ZTtcbn1cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsb2FkZWRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xvYWRlZERpcmVjdGl2ZSB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lzTG9hZGluZ10nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXNMb2FkaW5nRGlyZWN0aXZlIHtcbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvU2tlbGV0b25EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgcHVibGljIHNrZWxldG9uVGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b0xvYWRlZERpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBwdWJsaWMgbG9hZGVkVGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgcHJpdmF0ZSBoYXNWaWV3ID0gZmFsc2U7XG4gIHByaXZhdGUgc2tlbGV0b25WaWV3czogRW1iZWRkZWRWaWV3UmVmPE5vdm9Ta2VsZXRvbkRpcmVjdGl2ZT5bXSA9IFtdO1xuICBwcml2YXRlIGxvYWRlZFZpZXdzOiBFbWJlZGRlZFZpZXdSZWY8Tm92b0xvYWRlZERpcmVjdGl2ZT5bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgQElucHV0KClcbiAgc2V0IGlzTG9hZGluZyhjb25kaXRpb246IGJvb2xlYW4pIHtcbiAgICBpZiAoIWNvbmRpdGlvbiAmJiAhdGhpcy5oYXNWaWV3KSB7XG4gICAgICB0aGlzLmRlc3Ryb3lWaWV3cyh0aGlzLmxvYWRlZFZpZXdzKTtcbiAgICAgIHRoaXMuc2tlbGV0b25WaWV3cyA9IHRoaXMuY3JlYXRlVmlld3ModGhpcy5za2VsZXRvblRlbXBsYXRlcyk7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uICYmIHRoaXMuaGFzVmlldykge1xuICAgICAgdGhpcy5kZXN0cm95Vmlld3ModGhpcy5za2VsZXRvblZpZXdzKTtcbiAgICAgIHRoaXMubG9hZGVkVmlld3MgPSB0aGlzLmNyZWF0ZVZpZXdzKHRoaXMubG9hZGVkVGVtcGxhdGVzKTtcbiAgICAgIHRoaXMuaGFzVmlldyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBjcmVhdGVWaWV3cyh0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+Pikge1xuICAgIHJldHVybiB0ZW1wbGF0ZXMgJiYgdGVtcGxhdGVzLm1hcCgodikgPT4gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh2KSk7XG4gIH1cbiAgZGVzdHJveVZpZXdzKHZpZXdzOiBFbWJlZGRlZFZpZXdSZWY8YW55PltdKSB7XG4gICAgaWYgKHZpZXdzKSB7XG4gICAgICBmb3IgKGNvbnN0IHZpZXcgb2Ygdmlld3MpIHtcbiAgICAgICAgdmlldy5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=