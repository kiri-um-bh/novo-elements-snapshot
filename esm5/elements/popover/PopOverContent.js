/**
 * @fileoverview added by tsickle
 * Generated from: elements/popover/PopOverContent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, ViewChild } from '@angular/core';
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
            center: /**
             * @return {?}
             */
            function () {
                return hostElPos.left + (hostElPos.width - targetElWidth) / 2;
            },
            right: /**
             * @return {?}
             */
            function () {
                return hostElPos.left;
            },
            left: /**
             * @return {?}
             */
            function () {
                return hostElPos.left + (hostElPos.width - targetElWidth);
            },
        };
        /** @type {?} */
        var shiftHeight = {
            center: /**
             * @return {?}
             */
            function () {
                return hostElPos.top + (hostElPos.height - targetElHeight) / 2;
            },
            bottom: /**
             * @return {?}
             */
            function () {
                return hostElPos.top;
            },
            top: /**
             * @return {?}
             */
            function () {
                return hostElPos.top + (hostElPos.height - targetElHeight);
            },
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
        popoverDiv: [{ type: ViewChild, args: ['popoverDiv', { static: false },] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3ZlckNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcG9wb3Zlci9Qb3BPdmVyQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4SDtJQXdDRSx3QkFBc0IsT0FBbUIsRUFBWSxHQUFzQjtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVksUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQjNFLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFJMUIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUsxQix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLFFBQUcsR0FBVyxDQUFDLEtBQUssQ0FBQztRQUNyQixTQUFJLEdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDdEIsZ0JBQVcsR0FBVyxNQUFNLENBQUM7UUFHN0IsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUVxRCxDQUFDOzs7O0lBRWhGLHdDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELCtCQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7O0lBRUQsNkJBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQy9DLE9BQU87U0FD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QUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUNoSCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxNQUFNLElBQUksa0JBQWtCLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQzFGLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxPQUFPLElBQUksa0JBQWtCLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUM1RyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOztnQkE1TkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSw0bUJBZVA7aUJBQ0o7Ozs7Z0JBckJxRCxVQUFVO2dCQUF4QyxpQkFBaUI7OzswQkF1QnRDLEtBQUs7NEJBRUwsS0FBSzt3QkFFTCxLQUFLOzRCQUVMLEtBQUs7NkJBR0wsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBZ001QyxxQkFBQztDQUFBLEFBN05ELElBNk5DO1NBMU1ZLGNBQWM7OztJQUN6QixpQ0FDZ0I7O0lBQ2hCLG1DQUMwQjs7SUFDMUIsK0JBQ2M7O0lBQ2QsbUNBQzBCOztJQUUxQixvQ0FDdUI7O0lBQ3ZCLGlDQUEwQjs7SUFDMUIsNENBQXdDOztJQUN4Qyw2QkFBcUI7O0lBQ3JCLDhCQUFzQjs7SUFDdEIscUNBQTZCOztJQUM3Qiw0Q0FBMkI7O0lBQzNCLDRDQUEyQjs7SUFDM0Isa0NBQTBCOzs7OztJQUVkLGlDQUE2Qjs7Ozs7SUFBRSw2QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcE92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL1BvcE92ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNwb3BvdmVyRGl2XG4gICAgICAgICAgICBjbGFzcz1cInBvcG92ZXIge3sgZWZmZWN0aXZlUGxhY2VtZW50IH19XCJcbiAgICAgICAgICAgIFtzdHlsZS50b3BdPVwidG9wICsgJ3B4J1wiXG4gICAgICAgICAgICBbc3R5bGUubGVmdF09XCJsZWZ0ICsgJ3B4J1wiXG4gICAgICAgICAgICBbY2xhc3MuZmFkZV09XCJhbmltYXRpb25cIlxuICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiXG4gICAgICAgICAgICByb2xlPVwicG9wb3ZlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFycm93IHt7ZWZmZWN0aXZlQWxpZ25tZW50fX1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cInBvcG92ZXItdGl0bGVcIiBbaGlkZGVuXT1cIiF0aXRsZVwiPnt7IHRpdGxlIH19PC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudC10ZXh0XCI+e3sgY29udGVudCB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBvcE92ZXJDb250ZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgcGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKCdwb3BvdmVyRGl2JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHBvcG92ZXJEaXY6IEVsZW1lbnRSZWY7XG4gIHBvcG92ZXI6IFBvcE92ZXJEaXJlY3RpdmU7XG4gIG9uQ2xvc2VGcm9tT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdG9wOiBudW1iZXIgPSAtMTAwMDA7XG4gIGxlZnQ6IG51bWJlciA9IC0xMDAwMDtcbiAgZGlzcGxheVR5cGU6IHN0cmluZyA9ICdub25lJztcbiAgZWZmZWN0aXZlUGxhY2VtZW50OiBzdHJpbmc7XG4gIGVmZmVjdGl2ZUFsaWdubWVudDogc3RyaW5nO1xuICBpc0hpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50OiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdygpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0hpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXIgfHwgIXRoaXMucG9wb3Zlci5nZXRFbGVtZW50KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwID0gdGhpcy5wb3NpdGlvbkVsZW1lbnRzKHRoaXMucG9wb3Zlci5nZXRFbGVtZW50KCksIHRoaXMucG9wb3ZlckRpdi5uYXRpdmVFbGVtZW50LCB0aGlzLnBsYWNlbWVudCk7XG4gICAgdGhpcy5kaXNwbGF5VHlwZSA9ICdibG9jayc7XG4gICAgdGhpcy50b3AgPSBwLnRvcDtcbiAgICB0aGlzLmxlZnQgPSBwLmxlZnQ7XG4gICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvcCA9IC0xMDAwMDtcbiAgICB0aGlzLmxlZnQgPSAtMTAwMDA7XG4gICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wb3BvdmVyLmhpZGUoKTtcbiAgfVxuXG4gIGhpZGVGcm9tUG9wb3ZlcigpIHtcbiAgICB0aGlzLnRvcCA9IC0xMDAwMDtcbiAgICB0aGlzLmxlZnQgPSAtMTAwMDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWw6IEhUTUxFbGVtZW50LFxuICAgIHRhcmdldEVsOiBIVE1MRWxlbWVudCxcbiAgICBwb3NpdGlvblN0cjogc3RyaW5nLFxuICAgIGFwcGVuZFRvQm9keSA9IGZhbHNlLFxuICApOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgcG9zaXRpb25TdHJQYXJ0cyA9IHBvc2l0aW9uU3RyLnNwbGl0KCctJyk7XG4gICAgY29uc3QgbWFpblNpZGUgPSAodGhpcy5lZmZlY3RpdmVQbGFjZW1lbnQgPSB0aGlzLmdldEVmZmVjdGl2ZVBsYWNlbWVudChwb3NpdGlvblN0clBhcnRzWzBdIHx8ICdyaWdodCcsIGhvc3RFbCwgdGFyZ2V0RWwpKTtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9ICh0aGlzLmVmZmVjdGl2ZUFsaWdubWVudCA9IHBvc2l0aW9uU3RyUGFydHNbMV0gfHwgJ2NlbnRlcicpO1xuICAgIGNvbnN0IGhvc3RFbFBvcyA9IGFwcGVuZFRvQm9keSA/IHRoaXMub2Zmc2V0KGhvc3RFbCkgOiB0aGlzLnBvc2l0aW9uKGhvc3RFbCk7XG4gICAgY29uc3QgdGFyZ2V0RWxXaWR0aCA9IHRhcmdldEVsLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHRhcmdldEVsSGVpZ2h0ID0gdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3Qgc2hpZnRXaWR0aDogYW55ID0ge1xuICAgICAgY2VudGVyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIChob3N0RWxQb3Mud2lkdGggLSB0YXJnZXRFbFdpZHRoKSAvIDI7XG4gICAgICB9LFxuICAgICAgcmlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0O1xuICAgICAgfSxcbiAgICAgIGxlZnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgKGhvc3RFbFBvcy53aWR0aCAtIHRhcmdldEVsV2lkdGgpO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hpZnRIZWlnaHQ6IGFueSA9IHtcbiAgICAgIGNlbnRlcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcCArIChob3N0RWxQb3MuaGVpZ2h0IC0gdGFyZ2V0RWxIZWlnaHQpIC8gMjtcbiAgICAgIH0sXG4gICAgICBib3R0b20oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3A7XG4gICAgICB9LFxuICAgICAgdG9wKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgKGhvc3RFbFBvcy5oZWlnaHQgLSB0YXJnZXRFbEhlaWdodCk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBsZXQgdGFyZ2V0RWxQb3M6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9O1xuICAgIHN3aXRjaCAobWFpblNpZGUpIHtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgICBsZWZ0OiBob3N0RWxQb3MubGVmdCArIGhvc3RFbFBvcy53aWR0aCxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICB0b3A6IHNoaWZ0SGVpZ2h0W29yaWVudGF0aW9uXSgpLFxuICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0IC0gdGFyZ2V0RWxXaWR0aCxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogaG9zdEVsUG9zLnRvcCArIGhvc3RFbFBvcy5oZWlnaHQsXG4gICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogaG9zdEVsUG9zLnRvcCAtIHRhcmdldEVsSGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IHNoaWZ0V2lkdGhbb3JpZW50YXRpb25dKCksXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRFbFBvcztcbiAgfVxuXG4gIHByb3RlY3RlZCBwb3NpdGlvbihuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGxldCBvZmZzZXRQYXJlbnRCQ1IgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICAgIGNvbnN0IGVsQkNSID0gdGhpcy5vZmZzZXQobmF0aXZlRWwpO1xuICAgIGNvbnN0IG9mZnNldFBhcmVudEVsID0gdGhpcy5wYXJlbnRPZmZzZXRFbChuYXRpdmVFbCk7XG4gICAgaWYgKG9mZnNldFBhcmVudEVsICE9PSB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIG9mZnNldFBhcmVudEJDUiA9IHRoaXMub2Zmc2V0KG9mZnNldFBhcmVudEVsKTtcbiAgICAgIG9mZnNldFBhcmVudEJDUi50b3AgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50VG9wIC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsVG9wO1xuICAgICAgb2Zmc2V0UGFyZW50QkNSLmxlZnQgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50TGVmdCAtIG9mZnNldFBhcmVudEVsLnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gbmF0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgdG9wOiBlbEJDUi50b3AgLSBvZmZzZXRQYXJlbnRCQ1IudG9wLFxuICAgICAgbGVmdDogZWxCQ1IubGVmdCAtIG9mZnNldFBhcmVudEJDUi5sZWZ0LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb2Zmc2V0KG5hdGl2ZUVsOiBhbnkpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5hdGl2ZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIHx8IG5hdGl2ZUVsLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IHx8IG5hdGl2ZUVsLm9mZnNldEhlaWdodCxcbiAgICAgIHRvcDogYm91bmRpbmdDbGllbnRSZWN0LnRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApLFxuICAgICAgbGVmdDogYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdHlsZShuYXRpdmVFbDogSFRNTEVsZW1lbnQsIGNzc1Byb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKChuYXRpdmVFbCBhcyBhbnkpLmN1cnJlbnRTdHlsZSkge1xuICAgICAgcmV0dXJuIChuYXRpdmVFbCBhcyBhbnkpLmN1cnJlbnRTdHlsZVtjc3NQcm9wXTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgIHJldHVybiAod2luZG93LmdldENvbXB1dGVkU3R5bGUgYXMgYW55KShuYXRpdmVFbClbY3NzUHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIChuYXRpdmVFbC5zdHlsZSBhcyBhbnkpW2Nzc1Byb3BdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzU3RhdGljUG9zaXRpb25lZChuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0U3R5bGUobmF0aXZlRWwsICdwb3NpdGlvbicpIHx8ICdzdGF0aWMnKSA9PT0gJ3N0YXRpYyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyZW50T2Zmc2V0RWwobmF0aXZlRWw6IEhUTUxFbGVtZW50KTogYW55IHtcbiAgICBsZXQgb2Zmc2V0UGFyZW50OiBhbnkgPSBuYXRpdmVFbC5vZmZzZXRQYXJlbnQgfHwgd2luZG93LmRvY3VtZW50O1xuICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50ICE9PSB3aW5kb3cuZG9jdW1lbnQgJiYgdGhpcy5pc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RWZmZWN0aXZlUGxhY2VtZW50KGRlc2lyZWRQbGFjZW1lbnQ6IHN0cmluZywgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgY29uc3QgaG9zdEVsQm91bmRpbmdSZWN0ID0gaG9zdEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAoZGVzaXJlZFBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgaG9zdEVsQm91bmRpbmdSZWN0LnRvcCAtIHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0IDwgMCkge1xuICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgIH1cbiAgICBpZiAoZGVzaXJlZFBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgaG9zdEVsQm91bmRpbmdSZWN0LmJvdHRvbSArIHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICByZXR1cm4gJ3RvcCc7XG4gICAgfVxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAnbGVmdCcgJiYgaG9zdEVsQm91bmRpbmdSZWN0LmxlZnQgLSB0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoIDwgMCkge1xuICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgfVxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAncmlnaHQnICYmIGhvc3RFbEJvdW5kaW5nUmVjdC5yaWdodCArIHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzaXJlZFBsYWNlbWVudDtcbiAgfVxufVxuIl19