/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    Object.defineProperty(PopOverContent.prototype, "popover", {
        get: /**
         * @return {?}
         */
        function () {
            return this._popover;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._popover = value;
        },
        enumerable: true,
        configurable: true
    });
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
            center: function () {
                return hostElPos.left + (hostElPos.width - targetElWidth) / 2;
            },
            right: function () {
                return hostElPos.left;
            },
            left: function () {
                return hostElPos.left + (hostElPos.width - targetElWidth);
            },
        };
        /** @type {?} */
        var shiftHeight = {
            center: function () {
                return hostElPos.top + (hostElPos.height - targetElHeight) / 2;
            },
            bottom: function () {
                return hostElPos.top;
            },
            top: function () {
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
    PopOverContent.prototype._popover;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3ZlckNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcG9wb3Zlci9Qb3BPdmVyQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNEIsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25JO0lBOENFLHdCQUFzQixPQUFtQixFQUFZLEdBQXNCO1FBQXJELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXZCM0UsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUkxQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBVzFCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsUUFBRyxHQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3JCLFNBQUksR0FBVyxDQUFDLEtBQUssQ0FBQztRQUN0QixnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUc3QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBRW9ELENBQUM7SUFmL0Usc0JBQUksbUNBQU87Ozs7UUFHWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQUxELFVBQVksS0FBdUI7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7SUFlRCx3Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCwrQkFBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxJ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LDZCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BPdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9Qb3BPdmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9wb3Zlci1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjcG9wb3ZlckRpdlxuICAgICAgICAgICAgY2xhc3M9XCJwb3BvdmVyIHt7IGVmZmVjdGl2ZVBsYWNlbWVudCB9fVwiXG4gICAgICAgICAgICBbc3R5bGUudG9wXT1cInRvcCArICdweCdcIlxuICAgICAgICAgICAgW3N0eWxlLmxlZnRdPVwibGVmdCArICdweCdcIlxuICAgICAgICAgICAgW2NsYXNzLmZhZGVdPVwiYW5pbWF0aW9uXCJcbiAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogYmxvY2tcIlxuICAgICAgICAgICAgcm9sZT1cInBvcG92ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyB7e2VmZmVjdGl2ZUFsaWdubWVudH19XCI+PC9kaXY+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCIgW2hpZGRlbl09XCIhdGl0bGVcIj57eyB0aXRsZSB9fTwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnQtdGV4dFwiPnt7IGNvbnRlbnQgfX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BPdmVyQ29udGVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBjb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgncG9wb3ZlckRpdicpXG4gIHBvcG92ZXJEaXY6IEVsZW1lbnRSZWY7XG4gIHNldCBwb3BvdmVyKHZhbHVlOiBQb3BPdmVyRGlyZWN0aXZlKSB7XG4gICAgdGhpcy5fcG9wb3ZlciA9IHZhbHVlO1xuICB9XG4gIGdldCBwb3BvdmVyKCk6IFBvcE92ZXJEaXJlY3RpdmUge1xuICAgIHJldHVybiB0aGlzLl9wb3BvdmVyO1xuICB9XG4gIF9wb3BvdmVyOiBQb3BPdmVyRGlyZWN0aXZlO1xuICBvbkNsb3NlRnJvbU91dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHRvcDogbnVtYmVyID0gLTEwMDAwO1xuICBsZWZ0OiBudW1iZXIgPSAtMTAwMDA7XG4gIGRpc3BsYXlUeXBlOiBzdHJpbmcgPSAnbm9uZSc7XG4gIGVmZmVjdGl2ZVBsYWNlbWVudDogc3RyaW5nO1xuICBlZmZlY3RpdmVBbGlnbm1lbnQ6IHN0cmluZztcbiAgaXNIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudDogRWxlbWVudFJlZiwgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdygpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0hpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXIgfHwgIXRoaXMucG9wb3Zlci5nZXRFbGVtZW50KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwID0gdGhpcy5wb3NpdGlvbkVsZW1lbnRzKHRoaXMucG9wb3Zlci5nZXRFbGVtZW50KCksIHRoaXMucG9wb3ZlckRpdi5uYXRpdmVFbGVtZW50LCB0aGlzLnBsYWNlbWVudCk7XG4gICAgdGhpcy5kaXNwbGF5VHlwZSA9ICdibG9jayc7XG4gICAgdGhpcy50b3AgPSBwLnRvcDtcbiAgICB0aGlzLmxlZnQgPSBwLmxlZnQ7XG4gICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvcCA9IC0xMDAwMDtcbiAgICB0aGlzLmxlZnQgPSAtMTAwMDA7XG4gICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wb3BvdmVyLmhpZGUoKTtcbiAgfVxuXG4gIGhpZGVGcm9tUG9wb3ZlcigpIHtcbiAgICB0aGlzLnRvcCA9IC0xMDAwMDtcbiAgICB0aGlzLmxlZnQgPSAtMTAwMDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWw6IEhUTUxFbGVtZW50LFxuICAgIHRhcmdldEVsOiBIVE1MRWxlbWVudCxcbiAgICBwb3NpdGlvblN0cjogc3RyaW5nLFxuICAgIGFwcGVuZFRvQm9keSA9IGZhbHNlLFxuICApOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgbGV0IHBvc2l0aW9uU3RyUGFydHMgPSBwb3NpdGlvblN0ci5zcGxpdCgnLScpO1xuICAgIGxldCBtYWluU2lkZSA9ICh0aGlzLmVmZmVjdGl2ZVBsYWNlbWVudCA9IHRoaXMuZ2V0RWZmZWN0aXZlUGxhY2VtZW50KHBvc2l0aW9uU3RyUGFydHNbMF0gfHwgJ3JpZ2h0JywgaG9zdEVsLCB0YXJnZXRFbCkpO1xuICAgIGxldCBvcmllbnRhdGlvbiA9ICh0aGlzLmVmZmVjdGl2ZUFsaWdubWVudCA9IHBvc2l0aW9uU3RyUGFydHNbMV0gfHwgJ2NlbnRlcicpO1xuICAgIGxldCBob3N0RWxQb3MgPSBhcHBlbmRUb0JvZHkgPyB0aGlzLm9mZnNldChob3N0RWwpIDogdGhpcy5wb3NpdGlvbihob3N0RWwpO1xuICAgIGxldCB0YXJnZXRFbFdpZHRoID0gdGFyZ2V0RWwub2Zmc2V0V2lkdGg7XG4gICAgbGV0IHRhcmdldEVsSGVpZ2h0ID0gdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgbGV0IHNoaWZ0V2lkdGg6IGFueSA9IHtcbiAgICAgIGNlbnRlcjogZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgKGhvc3RFbFBvcy53aWR0aCAtIHRhcmdldEVsV2lkdGgpIC8gMjtcbiAgICAgIH0sXG4gICAgICByaWdodDogZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0O1xuICAgICAgfSxcbiAgICAgIGxlZnQ6IGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIChob3N0RWxQb3Mud2lkdGggLSB0YXJnZXRFbFdpZHRoKTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGxldCBzaGlmdEhlaWdodDogYW55ID0ge1xuICAgICAgY2VudGVyOiBmdW5jdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcCArIChob3N0RWxQb3MuaGVpZ2h0IC0gdGFyZ2V0RWxIZWlnaHQpIC8gMjtcbiAgICAgIH0sXG4gICAgICBib3R0b206IGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wO1xuICAgICAgfSxcbiAgICAgIHRvcDogZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyAoaG9zdEVsUG9zLmhlaWdodCAtIHRhcmdldEVsSGVpZ2h0KTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGxldCB0YXJnZXRFbFBvczogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH07XG4gICAgc3dpdGNoIChtYWluU2lkZSkge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICB0b3A6IHNoaWZ0SGVpZ2h0W29yaWVudGF0aW9uXSgpLFxuICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbb3JpZW50YXRpb25dKCksXG4gICAgICAgICAgbGVmdDogaG9zdEVsUG9zLmxlZnQgLSB0YXJnZXRFbFdpZHRoLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodCxcbiAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW29yaWVudGF0aW9uXSgpLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBob3N0RWxQb3MudG9wIC0gdGFyZ2V0RWxIZWlnaHQsXG4gICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEVsUG9zO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBvc2l0aW9uKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgbGV0IG9mZnNldFBhcmVudEJDUiA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gICAgY29uc3QgZWxCQ1IgPSB0aGlzLm9mZnNldChuYXRpdmVFbCk7XG4gICAgY29uc3Qgb2Zmc2V0UGFyZW50RWwgPSB0aGlzLnBhcmVudE9mZnNldEVsKG5hdGl2ZUVsKTtcbiAgICBpZiAob2Zmc2V0UGFyZW50RWwgIT09IHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgb2Zmc2V0UGFyZW50QkNSID0gdGhpcy5vZmZzZXQob2Zmc2V0UGFyZW50RWwpO1xuICAgICAgb2Zmc2V0UGFyZW50QkNSLnRvcCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRUb3AgLSBvZmZzZXRQYXJlbnRFbC5zY3JvbGxUb3A7XG4gICAgICBvZmZzZXRQYXJlbnRCQ1IubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0IC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSBuYXRpdmVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCB8fCBuYXRpdmVFbC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBuYXRpdmVFbC5vZmZzZXRIZWlnaHQsXG4gICAgICB0b3A6IGVsQkNSLnRvcCAtIG9mZnNldFBhcmVudEJDUi50b3AsXG4gICAgICBsZWZ0OiBlbEJDUi5sZWZ0IC0gb2Zmc2V0UGFyZW50QkNSLmxlZnQsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvZmZzZXQobmF0aXZlRWw6IGFueSk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gbmF0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgdG9wOiBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCksXG4gICAgICBsZWZ0OiBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0KSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN0eWxlKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCwgY3NzUHJvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoKG5hdGl2ZUVsIGFzIGFueSkuY3VycmVudFN0eWxlKSB7XG4gICAgICByZXR1cm4gKG5hdGl2ZUVsIGFzIGFueSkuY3VycmVudFN0eWxlW2Nzc1Byb3BdO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgcmV0dXJuICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSBhcyBhbnkpKG5hdGl2ZUVsKVtjc3NQcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKG5hdGl2ZUVsLnN0eWxlIGFzIGFueSlbY3NzUHJvcF07XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNTdGF0aWNQb3NpdGlvbmVkKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5nZXRTdHlsZShuYXRpdmVFbCwgJ3Bvc2l0aW9uJykgfHwgJ3N0YXRpYycpID09PSAnc3RhdGljJztcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXJlbnRPZmZzZXRFbChuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiBhbnkge1xuICAgIGxldCBvZmZzZXRQYXJlbnQ6IGFueSA9IG5hdGl2ZUVsLm9mZnNldFBhcmVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQgIT09IHdpbmRvdy5kb2N1bWVudCAmJiB0aGlzLmlzU3RhdGljUG9zaXRpb25lZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFZmZlY3RpdmVQbGFjZW1lbnQoZGVzaXJlZFBsYWNlbWVudDogc3RyaW5nLCBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBob3N0RWxCb3VuZGluZ1JlY3QgPSBob3N0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAndG9wJyAmJiBob3N0RWxCb3VuZGluZ1JlY3QudG9wIC0gdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQgPCAwKSB7XG4gICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgfVxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBob3N0RWxCb3VuZGluZ1JlY3QuYm90dG9tICsgdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgIHJldHVybiAndG9wJztcbiAgICB9XG4gICAgaWYgKGRlc2lyZWRQbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBob3N0RWxCb3VuZGluZ1JlY3QubGVmdCAtIHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGggPCAwKSB7XG4gICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICB9XG4gICAgaWYgKGRlc2lyZWRQbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgaG9zdEVsQm91bmRpbmdSZWN0LnJpZ2h0ICsgdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICByZXR1cm4gJ2xlZnQnO1xuICAgIH1cblxuICAgIHJldHVybiBkZXNpcmVkUGxhY2VtZW50O1xuICB9XG59XG4iXX0=