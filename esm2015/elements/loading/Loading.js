/**
 * @fileoverview added by tsickle
 * Generated from: elements/loading/Loading.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ContentChildren, Directive, HostBinding, Input, QueryList, TemplateRef, ViewContainerRef } from '@angular/core';
export class NovoLoadingElement {
}
NovoLoadingElement.decorators = [
    { type: Component, args: [{
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
    `
            }] }
];
NovoLoadingElement.propDecorators = {
    theme: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoLoadingElement.prototype.theme;
}
export class NovoSpinnerElement {
}
NovoSpinnerElement.decorators = [
    { type: Component, args: [{
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
    `
            }] }
];
NovoSpinnerElement.propDecorators = {
    theme: [{ type: Input }],
    inverse: [{ type: Input }],
    baseHref: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoSpinnerElement.prototype.theme;
    /** @type {?} */
    NovoSpinnerElement.prototype.inverse;
    /** @type {?} */
    NovoSpinnerElement.prototype.baseHref;
}
export class NovoSkeletonDirective {
    constructor() {
        this.skeleton = true;
    }
}
NovoSkeletonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skeleton]',
            },] }
];
NovoSkeletonDirective.propDecorators = {
    skeleton: [{ type: HostBinding, args: ['class.skeleton',] }]
};
if (false) {
    /** @type {?} */
    NovoSkeletonDirective.prototype.skeleton;
}
export class NovoLoadedDirective {
}
NovoLoadedDirective.decorators = [
    { type: Directive, args: [{
                selector: '[loaded]',
            },] }
];
export class NovoIsLoadingDirective {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
        this.hasView = false;
        this.skeletonViews = [];
        this.loadedViews = [];
    }
    /**
     * @param {?} condition
     * @return {?}
     */
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
    /**
     * @param {?} templates
     * @return {?}
     */
    createViews(templates) {
        return templates && templates.map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => this.viewContainer.createEmbeddedView(v)));
    }
    /**
     * @param {?} views
     * @return {?}
     */
    destroyViews(views) {
        if (views) {
            for (const view of views) {
                view.destroy();
            }
        }
    }
}
NovoIsLoadingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isLoading]',
            },] }
];
/** @nocollapse */
NovoIsLoadingDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
NovoIsLoadingDirective.propDecorators = {
    skeletonTemplates: [{ type: ContentChildren, args: [NovoSkeletonDirective, { read: TemplateRef },] }],
    loadedTemplates: [{ type: ContentChildren, args: [NovoLoadedDirective, { read: TemplateRef },] }],
    isLoading: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9sb2FkaW5nL0xvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFtQixXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFlckosTUFBTSxPQUFPLGtCQUFrQjs7O1lBYjlCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxhQUFhO2lCQUN6QjtnQkFDRCxRQUFRLEVBQUU7Ozs7OztLQU1QO2FBQ0o7OztvQkFFRSxLQUFLOzs7O0lBQU4sbUNBQ2M7O0FBa0ZoQixNQUFNLE9BQU8sa0JBQWtCOzs7WUEvRTlCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EyRVA7YUFDSjs7O29CQUVFLEtBQUs7c0JBRUwsS0FBSzt1QkFFTCxLQUFLOzs7O0lBSk4sbUNBQ2M7O0lBQ2QscUNBQ2lCOztJQUNqQixzQ0FDaUI7O0FBTW5CLE1BQU0sT0FBTyxxQkFBcUI7SUFIbEM7UUFLRSxhQUFRLEdBQVksSUFBSSxDQUFDO0lBQzNCLENBQUM7OztZQU5BLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7O3VCQUVFLFdBQVcsU0FBQyxnQkFBZ0I7Ozs7SUFBN0IseUNBQ3lCOztBQUszQixNQUFNLE9BQU8sbUJBQW1COzs7WUFIL0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2FBQ3JCOztBQU1ELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFVakMsWUFBb0IsYUFBK0I7UUFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBSjNDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBNkMsRUFBRSxDQUFDO1FBQzdELGdCQUFXLEdBQTJDLEVBQUUsQ0FBQztJQUVWLENBQUM7Ozs7O0lBRXhELElBQ0ksU0FBUyxDQUFDLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjthQUFNLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7O0lBQ0QsV0FBVyxDQUFDLFNBQXNDO1FBQ2hELE9BQU8sU0FBUyxJQUFJLFNBQVMsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUNyRixDQUFDOzs7OztJQUNELFlBQVksQ0FBQyxLQUE2QjtRQUN4QyxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUN4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEI7U0FDRjtJQUNILENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7YUFDeEI7Ozs7WUExSDRHLGdCQUFnQjs7O2dDQTRIMUgsZUFBZSxTQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs4QkFFNUQsZUFBZSxTQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTt3QkFTMUQsS0FBSzs7OztJQVhOLG1EQUNzRDs7SUFDdEQsaURBQ29EOzs7OztJQUVwRCx5Q0FBd0I7Ozs7O0lBQ3hCLCtDQUFxRTs7Ozs7SUFDckUsNkNBQWlFOzs7OztJQUVyRCwrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEVtYmVkZGVkVmlld1JlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbG9hZGluZycsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICd0aGVtZSB8fCBcIlwiJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Mb2FkaW5nRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzdmcgY2xhc3M9XCJidWxsaG9yblNwaW5uZXJcIiBbbmdDbGFzc109XCJ0aGVtZVwiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBbYXR0ci5pbnZlcnNlXT1cImludmVyc2VcIj5cbiAgICAgICAgICAgIDx0aXRsZT5CdWxsaG9ybiBTcGlubmVyIEFuaW1hdGlvbjwvdGl0bGU+XG4gICAgICAgICAgICA8ZGVzYz5TcGlubmVyIGFuaW1hdGlvbiBpbmRpY2F0aW5nIGxvYWRpbmc8L2Rlc2M+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIC5idWxsaG9yblNwaW5uZXIgZy5jaXJjbGVHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogdXJsKFwie3tiYXNlSHJlZiB8fCAnJ319I2dvb0VmZmVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdXJsKFwie3tiYXNlSHJlZiB8fCAnJ319I2dvb0VmZmVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfOi13ZWJraXQtZnVsbC1zY3JlZW46bm90KDpyb290OnJvb3QpLCAuYnVsbGhvcm5TcGlubmVyIGcuY2lyY2xlR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQHN1cHBvcnRzICgtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZSkgYW5kIChub3QgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSkgYW5kIChub3QgKC1tb3otYXBwZWFyYW5jZTpub25lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1bGxob3JuU3Bpbm5lciBnLmNpcmNsZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQHN1cHBvcnRzICgtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZSkgYW5kIChub3QgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSkgYW5kIChub3QgKC1tb3otYXBwZWFyYW5jZTpub25lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1bGxob3JuU3Bpbm5lciBnLmNpcmNsZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJnb29FZmZlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVwiU291cmNlR3JhcGhpY1wiIHN0ZERldmlhdGlvbj1cIjVcIiByZXN1bHQ9XCJibHVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49XCJibHVyXCIgbW9kZT1cIm1hdHJpeFwiIHZhbHVlcz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMyAwIDAgMCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAxLjMgMCAwIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMS4zIDAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAwIDE5IC03XCIgcmVzdWx0PVwiZ29vRWZmZWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cImdvb0VmZmVjdFwiIG9wZXJhdG9yPVwiYXRvcFwiIC8+XG4gICAgICAgICAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTSA0MyA0MyBMIDU0IDQ1IEwgODAgNDAgTCA0MyA0M1wiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwibm9uZVwiIGlkPVwiZmlyc3RMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNDggNDEgTCA0OCAxOCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJzZWNvbmRMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQzIDQzIEwgNDIgNDUgTCAxNSA0MCBMIDQzIDQzXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJub25lXCIgaWQ9XCJ0aGlyZExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gNDMgNDMgTCA0NCA1MiBMIDI5IDc4IEwgNDMgNDNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBpZD1cImZvdXJ0aExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gNDMgNDMgTCA1MiA1MiBMIDY4IDc4IEwgNDMgNDNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBpZD1cImZpZnRoTGluZVBhdGhcIi8+XG4gICAgICAgICAgICA8ZyBjbGFzcz1cImNpcmNsZUdyb3VwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcsIDcpXCI+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSByPVwiNlwiIGN4PVwiMFwiIGN5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlZmluZSB0aGUgbW90aW9uIHBhdGggYW5pbWF0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIzLjRcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtcGF0aCB4bGluazpocmVmPVwiI2ZpcnN0TGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjc2Vjb25kTGluZVBhdGhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI2XCIgY3g9XCIwXCIgY3k9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVmaW5lIHRoZSBtb3Rpb24gcGF0aCBhbmltYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjMuNFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9XCIjdGhpcmRMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjZcIiBjeD1cIjBcIiBjeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZpbmUgdGhlIG1vdGlvbiBwYXRoIGFuaW1hdGlvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMy40XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXBhdGggeGxpbms6aHJlZj1cIiNmb3VydGhMaW5lUGF0aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjZcIiBjeD1cIjBcIiBjeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZpbmUgdGhlIG1vdGlvbiBwYXRoIGFuaW1hdGlvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMy40XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXBhdGggeGxpbms6aHJlZj1cIiNmaWZ0aExpbmVQYXRoXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TcGlubmVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGludmVyc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGJhc2VIcmVmOiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tza2VsZXRvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2tlbGV0b25EaXJlY3RpdmUge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNrZWxldG9uJylcbiAgc2tlbGV0b246IGJvb2xlYW4gPSB0cnVlO1xufVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvYWRlZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTG9hZGVkRGlyZWN0aXZlIHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaXNMb2FkaW5nXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Jc0xvYWRpbmdEaXJlY3RpdmUge1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9Ta2VsZXRvbkRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBwdWJsaWMgc2tlbGV0b25UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvTG9hZGVkRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHB1YmxpYyBsb2FkZWRUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICBwcml2YXRlIGhhc1ZpZXcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBza2VsZXRvblZpZXdzOiBFbWJlZGRlZFZpZXdSZWY8Tm92b1NrZWxldG9uRGlyZWN0aXZlPltdID0gW107XG4gIHByaXZhdGUgbG9hZGVkVmlld3M6IEVtYmVkZGVkVmlld1JlZjxOb3ZvTG9hZGVkRGlyZWN0aXZlPltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cblxuICBASW5wdXQoKVxuICBzZXQgaXNMb2FkaW5nKGNvbmRpdGlvbjogYm9vbGVhbikge1xuICAgIGlmICghY29uZGl0aW9uICYmICF0aGlzLmhhc1ZpZXcpIHtcbiAgICAgIHRoaXMuZGVzdHJveVZpZXdzKHRoaXMubG9hZGVkVmlld3MpO1xuICAgICAgdGhpcy5za2VsZXRvblZpZXdzID0gdGhpcy5jcmVhdGVWaWV3cyh0aGlzLnNrZWxldG9uVGVtcGxhdGVzKTtcbiAgICAgIHRoaXMuaGFzVmlldyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24gJiYgdGhpcy5oYXNWaWV3KSB7XG4gICAgICB0aGlzLmRlc3Ryb3lWaWV3cyh0aGlzLnNrZWxldG9uVmlld3MpO1xuICAgICAgdGhpcy5sb2FkZWRWaWV3cyA9IHRoaXMuY3JlYXRlVmlld3ModGhpcy5sb2FkZWRUZW1wbGF0ZXMpO1xuICAgICAgdGhpcy5oYXNWaWV3ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNyZWF0ZVZpZXdzKHRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlcyAmJiB0ZW1wbGF0ZXMubWFwKCh2KSA9PiB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHYpKTtcbiAgfVxuICBkZXN0cm95Vmlld3Modmlld3M6IEVtYmVkZGVkVmlld1JlZjxhbnk+W10pIHtcbiAgICBpZiAodmlld3MpIHtcbiAgICAgIGZvciAoY29uc3QgdmlldyBvZiB2aWV3cykge1xuICAgICAgICB2aWV3LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==