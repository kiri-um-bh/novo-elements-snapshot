/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
var PopOverContent = /** @class */ (function () {
    function PopOverContent(element, cdr) {
        this.element = element;
        this.cdr = cdr;
        this.placement = 'top';
        this.animation = true;
        this.onCloseFromOutside = new EventEmitter();
        this.top = -10000;
        this.left = -10000;
        this.displayType = 'none';
        this.isHidden = false;
    }
    /**
     * @return {?}
     */
    PopOverContent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.show();
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    PopOverContent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.isHidden) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    PopOverContent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.popover || !this.popover.getElement()) {
            return;
        }
        /** @type {?} */
        var p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.placement);
        this.displayType = 'block';
        this.top = p.top;
        this.left = p.left;
        this.isHidden = false;
    };
    /**
     * @return {?}
     */
    PopOverContent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.top = -10000;
        this.left = -10000;
        this.isHidden = true;
        this.popover.hide();
    };
    /**
     * @return {?}
     */
    PopOverContent.prototype.hideFromPopover = /**
     * @return {?}
     */
    function () {
        this.top = -10000;
        this.left = -10000;
    };
    /**
     * @protected
     * @param {?} hostEl
     * @param {?} targetEl
     * @param {?} positionStr
     * @param {?=} appendToBody
     * @return {?}
     */
    PopOverContent.prototype.positionElements = /**
     * @protected
     * @param {?} hostEl
     * @param {?} targetEl
     * @param {?} positionStr
     * @param {?=} appendToBody
     * @return {?}
     */
    function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        /** @type {?} */
        var positionStrParts = positionStr.split('-');
        /** @type {?} */
        var mainSide = (this.effectivePlacement = this.getEffectivePlacement(positionStrParts[0] || 'right', hostEl, targetEl));
        /** @type {?} */
        var orientation = (this.effectiveAlignment = positionStrParts[1] || 'center');
        /** @type {?} */
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        /** @type {?} */
        var targetElWidth = targetEl.offsetWidth;
        /** @type {?} */
        var targetElHeight = targetEl.offsetHeight;
        /** @type {?} */
        var shiftWidth = {
            center: (/**
             * @return {?}
             */
            function () {
                return hostElPos.left + (hostElPos.width - targetElWidth) / 2;
            }),
            right: (/**
             * @return {?}
             */
            function () {
                return hostElPos.left;
            }),
            left: (/**
             * @return {?}
             */
            function () {
                return hostElPos.left + (hostElPos.width - targetElWidth);
            }),
        };
        /** @type {?} */
        var shiftHeight = {
            center: (/**
             * @return {?}
             */
            function () {
                return hostElPos.top + (hostElPos.height - targetElHeight) / 2;
            }),
            bottom: (/**
             * @return {?}
             */
            function () {
                return hostElPos.top;
            }),
            top: (/**
             * @return {?}
             */
            function () {
                return hostElPos.top + (hostElPos.height - targetElHeight);
            }),
        };
        /** @type {?} */
        var targetElPos;
        switch (mainSide) {
            case 'right':
                targetElPos = {
                    top: shiftHeight[orientation](),
                    left: hostElPos.left + hostElPos.width,
                };
                break;
            case 'left':
                targetElPos = {
                    top: shiftHeight[orientation](),
                    left: hostElPos.left - targetElWidth,
                };
                break;
            case 'bottom':
                targetElPos = {
                    top: hostElPos.top + hostElPos.height,
                    left: shiftWidth[orientation](),
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[orientation](),
                };
                break;
        }
        return targetElPos;
    };
    /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    PopOverContent.prototype.position = /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        /** @type {?} */
        var offsetParentBCR = { top: 0, left: 0 };
        /** @type {?} */
        var elBCR = this.offset(nativeEl);
        /** @type {?} */
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        /** @type {?} */
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left,
        };
    };
    /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    PopOverContent.prototype.offset = /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        /** @type {?} */
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft),
        };
    };
    /**
     * @protected
     * @param {?} nativeEl
     * @param {?} cssProp
     * @return {?}
     */
    PopOverContent.prototype.getStyle = /**
     * @protected
     * @param {?} nativeEl
     * @param {?} cssProp
     * @return {?}
     */
    function (nativeEl, cssProp) {
        if (((/** @type {?} */ (nativeEl))).currentStyle) {
            return ((/** @type {?} */ (nativeEl))).currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return ((/** @type {?} */ (window.getComputedStyle)))(nativeEl)[cssProp];
        }
        return ((/** @type {?} */ (nativeEl.style)))[cssProp];
    };
    /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    PopOverContent.prototype.isStaticPositioned = /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    PopOverContent.prototype.parentOffsetEl = /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        /** @type {?} */
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    /**
     * @protected
     * @param {?} desiredPlacement
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    PopOverContent.prototype.getEffectivePlacement = /**
     * @protected
     * @param {?} desiredPlacement
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    function (desiredPlacement, hostElement, targetElement) {
        /** @type {?} */
        var hostElBoundingRect = hostElement.getBoundingClientRect();
        if (desiredPlacement === 'top' && hostElBoundingRect.top - targetElement.offsetHeight < 0) {
            return 'bottom';
        }
        if (desiredPlacement === 'bottom' && hostElBoundingRect.bottom + targetElement.offsetHeight > window.innerHeight) {
            return 'top';
        }
        if (desiredPlacement === 'left' && hostElBoundingRect.left - targetElement.offsetWidth < 0) {
            return 'right';
        }
        if (desiredPlacement === 'right' && hostElBoundingRect.right + targetElement.offsetWidth > window.innerWidth) {
            return 'left';
        }
        return desiredPlacement;
    };
    PopOverContent.decorators = [
        { type: Component, args: [{
                    selector: 'popover-content',
                    template: "\n        <div #popoverDiv\n            class=\"popover {{ effectivePlacement }}\"\n            [style.top]=\"top + 'px'\"\n            [style.left]=\"left + 'px'\"\n            [class.fade]=\"animation\"\n            style=\"display: block\"\n            role=\"popover\">\n            <div class=\"arrow {{effectiveAlignment}}\"></div>\n            <h4 class=\"popover-title\" [hidden]=\"!title\">{{ title }}</h4>\n            <div class=\"popover-content\">\n                <ng-content></ng-content>\n                <div class=\"popover-content-text\">{{ content }}</div>\n            </div>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    PopOverContent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    PopOverContent.propDecorators = {
        content: [{ type: Input }],
        placement: [{ type: Input }],
        title: [{ type: Input }],
        animation: [{ type: Input }],
        popoverDiv: [{ type: ViewChild, args: ['popoverDiv',] }]
    };
    return PopOverContent;
}());
export { PopOverContent };
if (false) {
    /** @type {?} */
    PopOverContent.prototype.content;
    /** @type {?} */
    PopOverContent.prototype.placement;
    /** @type {?} */
    PopOverContent.prototype.title;
    /** @type {?} */
    PopOverContent.prototype.animation;
    /** @type {?} */
    PopOverContent.prototype.popoverDiv;
    /** @type {?} */
    PopOverContent.prototype.popover;
    /** @type {?} */
    PopOverContent.prototype.onCloseFromOutside;
    /** @type {?} */
    PopOverContent.prototype.top;
    /** @type {?} */
    PopOverContent.prototype.left;
    /** @type {?} */
    PopOverContent.prototype.displayType;
    /** @type {?} */
    PopOverContent.prototype.effectivePlacement;
    /** @type {?} */
    PopOverContent.prototype.effectiveAlignment;
    /** @type {?} */
    PopOverContent.prototype.isHidden;
    /**
     * @type {?}
     * @protected
     */
    PopOverContent.prototype.element;
    /**
     * @type {?}
     * @protected
     */
    PopOverContent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3ZlckNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcG9wb3Zlci9Qb3BPdmVyQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNEIsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25JO0lBd0NFLHdCQUFzQixPQUFtQixFQUFZLEdBQXNCO1FBQXJELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpCM0UsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUkxQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBSzFCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsUUFBRyxHQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3JCLFNBQUksR0FBVyxDQUFDLEtBQUssQ0FBQztRQUN0QixnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUc3QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBRW9ELENBQUM7Ozs7SUFFL0Usd0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsK0JBQU07OztJQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7SUFFRCw2QkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDL0MsT0FBTztTQUNS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O1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxRQUFRLElBQUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUNoSCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxNQUFNLElBQUksa0JBQWtCLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQzFGLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxPQUFPLElBQUksa0JBQWtCLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUM1RyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOztnQkE1TkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSw0bUJBZVA7aUJBQ0o7Ozs7Z0JBckIrRCxVQUFVO2dCQUFnQixpQkFBaUI7OzswQkF1QnhHLEtBQUs7NEJBRUwsS0FBSzt3QkFFTCxLQUFLOzRCQUVMLEtBQUs7NkJBR0wsU0FBUyxTQUFDLFlBQVk7O0lBZ016QixxQkFBQztDQUFBLEFBN05ELElBNk5DO1NBMU1ZLGNBQWM7OztJQUN6QixpQ0FDZ0I7O0lBQ2hCLG1DQUMwQjs7SUFDMUIsK0JBQ2M7O0lBQ2QsbUNBQzBCOztJQUUxQixvQ0FDdUI7O0lBQ3ZCLGlDQUEwQjs7SUFDMUIsNENBQXdDOztJQUN4Qyw2QkFBcUI7O0lBQ3JCLDhCQUFzQjs7SUFDdEIscUNBQTZCOztJQUM3Qiw0Q0FBMkI7O0lBQzNCLDRDQUEyQjs7SUFDM0Isa0NBQTBCOzs7OztJQUVkLGlDQUE2Qjs7Ozs7SUFBRSw2QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wT3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vUG9wT3Zlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcG92ZXItY29udGVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgI3BvcG92ZXJEaXZcbiAgICAgICAgICAgIGNsYXNzPVwicG9wb3ZlciB7eyBlZmZlY3RpdmVQbGFjZW1lbnQgfX1cIlxuICAgICAgICAgICAgW3N0eWxlLnRvcF09XCJ0b3AgKyAncHgnXCJcbiAgICAgICAgICAgIFtzdHlsZS5sZWZ0XT1cImxlZnQgKyAncHgnXCJcbiAgICAgICAgICAgIFtjbGFzcy5mYWRlXT1cImFuaW1hdGlvblwiXG4gICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCJcbiAgICAgICAgICAgIHJvbGU9XCJwb3BvdmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyb3cge3tlZmZlY3RpdmVBbGlnbm1lbnR9fVwiPjwvZGl2PlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwicG9wb3Zlci10aXRsZVwiIFtoaWRkZW5dPVwiIXRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50LXRleHRcIj57eyBjb250ZW50IH19PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUG9wT3ZlckNvbnRlbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KClcbiAgY29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoJ3BvcG92ZXJEaXYnKVxuICBwb3BvdmVyRGl2OiBFbGVtZW50UmVmO1xuICBwb3BvdmVyOiBQb3BPdmVyRGlyZWN0aXZlO1xuICBvbkNsb3NlRnJvbU91dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHRvcDogbnVtYmVyID0gLTEwMDAwO1xuICBsZWZ0OiBudW1iZXIgPSAtMTAwMDA7XG4gIGRpc3BsYXlUeXBlOiBzdHJpbmcgPSAnbm9uZSc7XG4gIGVmZmVjdGl2ZVBsYWNlbWVudDogc3RyaW5nO1xuICBlZmZlY3RpdmVBbGlnbm1lbnQ6IHN0cmluZztcbiAgaXNIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudDogRWxlbWVudFJlZiwgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdygpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0hpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXIgfHwgIXRoaXMucG9wb3Zlci5nZXRFbGVtZW50KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwID0gdGhpcy5wb3NpdGlvbkVsZW1lbnRzKHRoaXMucG9wb3Zlci5nZXRFbGVtZW50KCksIHRoaXMucG9wb3ZlckRpdi5uYXRpdmVFbGVtZW50LCB0aGlzLnBsYWNlbWVudCk7XG4gICAgdGhpcy5kaXNwbGF5VHlwZSA9ICdibG9jayc7XG4gICAgdGhpcy50b3AgPSBwLnRvcDtcbiAgICB0aGlzLmxlZnQgPSBwLmxlZnQ7XG4gICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvcCA9IC0xMDAwMDtcbiAgICB0aGlzLmxlZnQgPSAtMTAwMDA7XG4gICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wb3BvdmVyLmhpZGUoKTtcbiAgfVxuXG4gIGhpZGVGcm9tUG9wb3ZlcigpIHtcbiAgICB0aGlzLnRvcCA9IC0xMDAwMDtcbiAgICB0aGlzLmxlZnQgPSAtMTAwMDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWw6IEhUTUxFbGVtZW50LFxuICAgIHRhcmdldEVsOiBIVE1MRWxlbWVudCxcbiAgICBwb3NpdGlvblN0cjogc3RyaW5nLFxuICAgIGFwcGVuZFRvQm9keSA9IGZhbHNlLFxuICApOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgbGV0IHBvc2l0aW9uU3RyUGFydHMgPSBwb3NpdGlvblN0ci5zcGxpdCgnLScpO1xuICAgIGxldCBtYWluU2lkZSA9ICh0aGlzLmVmZmVjdGl2ZVBsYWNlbWVudCA9IHRoaXMuZ2V0RWZmZWN0aXZlUGxhY2VtZW50KHBvc2l0aW9uU3RyUGFydHNbMF0gfHwgJ3JpZ2h0JywgaG9zdEVsLCB0YXJnZXRFbCkpO1xuICAgIGxldCBvcmllbnRhdGlvbiA9ICh0aGlzLmVmZmVjdGl2ZUFsaWdubWVudCA9IHBvc2l0aW9uU3RyUGFydHNbMV0gfHwgJ2NlbnRlcicpO1xuICAgIGxldCBob3N0RWxQb3MgPSBhcHBlbmRUb0JvZHkgPyB0aGlzLm9mZnNldChob3N0RWwpIDogdGhpcy5wb3NpdGlvbihob3N0RWwpO1xuICAgIGxldCB0YXJnZXRFbFdpZHRoID0gdGFyZ2V0RWwub2Zmc2V0V2lkdGg7XG4gICAgbGV0IHRhcmdldEVsSGVpZ2h0ID0gdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgbGV0IHNoaWZ0V2lkdGg6IGFueSA9IHtcbiAgICAgIGNlbnRlcjogZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgKGhvc3RFbFBvcy53aWR0aCAtIHRhcmdldEVsV2lkdGgpIC8gMjtcbiAgICAgIH0sXG4gICAgICByaWdodDogZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0O1xuICAgICAgfSxcbiAgICAgIGxlZnQ6IGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIChob3N0RWxQb3Mud2lkdGggLSB0YXJnZXRFbFdpZHRoKTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGxldCBzaGlmdEhlaWdodDogYW55ID0ge1xuICAgICAgY2VudGVyOiBmdW5jdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcCArIChob3N0RWxQb3MuaGVpZ2h0IC0gdGFyZ2V0RWxIZWlnaHQpIC8gMjtcbiAgICAgIH0sXG4gICAgICBib3R0b206IGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wO1xuICAgICAgfSxcbiAgICAgIHRvcDogZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyAoaG9zdEVsUG9zLmhlaWdodCAtIHRhcmdldEVsSGVpZ2h0KTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGxldCB0YXJnZXRFbFBvczogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH07XG4gICAgc3dpdGNoIChtYWluU2lkZSkge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICB0b3A6IHNoaWZ0SGVpZ2h0W29yaWVudGF0aW9uXSgpLFxuICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbb3JpZW50YXRpb25dKCksXG4gICAgICAgICAgbGVmdDogaG9zdEVsUG9zLmxlZnQgLSB0YXJnZXRFbFdpZHRoLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodCxcbiAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW29yaWVudGF0aW9uXSgpLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBob3N0RWxQb3MudG9wIC0gdGFyZ2V0RWxIZWlnaHQsXG4gICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEVsUG9zO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBvc2l0aW9uKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgbGV0IG9mZnNldFBhcmVudEJDUiA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gICAgY29uc3QgZWxCQ1IgPSB0aGlzLm9mZnNldChuYXRpdmVFbCk7XG4gICAgY29uc3Qgb2Zmc2V0UGFyZW50RWwgPSB0aGlzLnBhcmVudE9mZnNldEVsKG5hdGl2ZUVsKTtcbiAgICBpZiAob2Zmc2V0UGFyZW50RWwgIT09IHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgb2Zmc2V0UGFyZW50QkNSID0gdGhpcy5vZmZzZXQob2Zmc2V0UGFyZW50RWwpO1xuICAgICAgb2Zmc2V0UGFyZW50QkNSLnRvcCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRUb3AgLSBvZmZzZXRQYXJlbnRFbC5zY3JvbGxUb3A7XG4gICAgICBvZmZzZXRQYXJlbnRCQ1IubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0IC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSBuYXRpdmVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCB8fCBuYXRpdmVFbC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBuYXRpdmVFbC5vZmZzZXRIZWlnaHQsXG4gICAgICB0b3A6IGVsQkNSLnRvcCAtIG9mZnNldFBhcmVudEJDUi50b3AsXG4gICAgICBsZWZ0OiBlbEJDUi5sZWZ0IC0gb2Zmc2V0UGFyZW50QkNSLmxlZnQsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvZmZzZXQobmF0aXZlRWw6IGFueSk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gbmF0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgdG9wOiBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCksXG4gICAgICBsZWZ0OiBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0KSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN0eWxlKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCwgY3NzUHJvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoKG5hdGl2ZUVsIGFzIGFueSkuY3VycmVudFN0eWxlKSB7XG4gICAgICByZXR1cm4gKG5hdGl2ZUVsIGFzIGFueSkuY3VycmVudFN0eWxlW2Nzc1Byb3BdO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgcmV0dXJuICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSBhcyBhbnkpKG5hdGl2ZUVsKVtjc3NQcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKG5hdGl2ZUVsLnN0eWxlIGFzIGFueSlbY3NzUHJvcF07XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNTdGF0aWNQb3NpdGlvbmVkKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5nZXRTdHlsZShuYXRpdmVFbCwgJ3Bvc2l0aW9uJykgfHwgJ3N0YXRpYycpID09PSAnc3RhdGljJztcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXJlbnRPZmZzZXRFbChuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiBhbnkge1xuICAgIGxldCBvZmZzZXRQYXJlbnQ6IGFueSA9IG5hdGl2ZUVsLm9mZnNldFBhcmVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQgIT09IHdpbmRvdy5kb2N1bWVudCAmJiB0aGlzLmlzU3RhdGljUG9zaXRpb25lZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFZmZlY3RpdmVQbGFjZW1lbnQoZGVzaXJlZFBsYWNlbWVudDogc3RyaW5nLCBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBob3N0RWxCb3VuZGluZ1JlY3QgPSBob3N0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAndG9wJyAmJiBob3N0RWxCb3VuZGluZ1JlY3QudG9wIC0gdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQgPCAwKSB7XG4gICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgfVxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBob3N0RWxCb3VuZGluZ1JlY3QuYm90dG9tICsgdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgIHJldHVybiAndG9wJztcbiAgICB9XG4gICAgaWYgKGRlc2lyZWRQbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBob3N0RWxCb3VuZGluZ1JlY3QubGVmdCAtIHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGggPCAwKSB7XG4gICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICB9XG4gICAgaWYgKGRlc2lyZWRQbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgaG9zdEVsQm91bmRpbmdSZWN0LnJpZ2h0ICsgdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICByZXR1cm4gJ2xlZnQnO1xuICAgIH1cblxuICAgIHJldHVybiBkZXNpcmVkUGxhY2VtZW50O1xuICB9XG59XG4iXX0=