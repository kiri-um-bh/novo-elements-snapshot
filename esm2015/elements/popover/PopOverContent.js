/**
 * @fileoverview added by tsickle
 * Generated from: elements/popover/PopOverContent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
export class PopOverContent {
    /**
     * @param {?} element
     * @param {?} cdr
     */
    constructor(element, cdr) {
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
    ngAfterViewInit() {
        this.show();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.isHidden) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.popover || !this.popover.getElement()) {
            return;
        }
        /** @type {?} */
        const p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.placement);
        this.displayType = 'block';
        this.top = p.top;
        this.left = p.left;
        this.isHidden = false;
    }
    /**
     * @return {?}
     */
    hide() {
        this.top = -10000;
        this.left = -10000;
        this.isHidden = true;
        this.popover.hide();
    }
    /**
     * @return {?}
     */
    hideFromPopover() {
        this.top = -10000;
        this.left = -10000;
    }
    /**
     * @protected
     * @param {?} hostEl
     * @param {?} targetEl
     * @param {?} positionStr
     * @param {?=} appendToBody
     * @return {?}
     */
    positionElements(hostEl, targetEl, positionStr, appendToBody = false) {
        /** @type {?} */
        let positionStrParts = positionStr.split('-');
        /** @type {?} */
        let mainSide = (this.effectivePlacement = this.getEffectivePlacement(positionStrParts[0] || 'right', hostEl, targetEl));
        /** @type {?} */
        let orientation = (this.effectiveAlignment = positionStrParts[1] || 'center');
        /** @type {?} */
        let hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        /** @type {?} */
        let targetElWidth = targetEl.offsetWidth;
        /** @type {?} */
        let targetElHeight = targetEl.offsetHeight;
        /** @type {?} */
        let shiftWidth = {
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
        let shiftHeight = {
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
        let targetElPos;
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
    }
    /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    position(nativeEl) {
        /** @type {?} */
        let offsetParentBCR = { top: 0, left: 0 };
        /** @type {?} */
        const elBCR = this.offset(nativeEl);
        /** @type {?} */
        const offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        /** @type {?} */
        const boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left,
        };
    }
    /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    offset(nativeEl) {
        /** @type {?} */
        const boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft),
        };
    }
    /**
     * @protected
     * @param {?} nativeEl
     * @param {?} cssProp
     * @return {?}
     */
    getStyle(nativeEl, cssProp) {
        if (((/** @type {?} */ (nativeEl))).currentStyle) {
            return ((/** @type {?} */ (nativeEl))).currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return ((/** @type {?} */ (window.getComputedStyle)))(nativeEl)[cssProp];
        }
        return ((/** @type {?} */ (nativeEl.style)))[cssProp];
    }
    /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    isStaticPositioned(nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    }
    /**
     * @protected
     * @param {?} nativeEl
     * @return {?}
     */
    parentOffsetEl(nativeEl) {
        /** @type {?} */
        let offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    }
    /**
     * @protected
     * @param {?} desiredPlacement
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    getEffectivePlacement(desiredPlacement, hostElement, targetElement) {
        /** @type {?} */
        const hostElBoundingRect = hostElement.getBoundingClientRect();
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
    }
}
PopOverContent.decorators = [
    { type: Component, args: [{
                selector: 'popover-content',
                template: `
        <div #popoverDiv
            class="popover {{ effectivePlacement }}"
            [style.top]="top + 'px'"
            [style.left]="left + 'px'"
            [class.fade]="animation"
            style="display: block"
            role="popover">
            <div class="arrow {{effectiveAlignment}}"></div>
            <h4 class="popover-title" [hidden]="!title">{{ title }}</h4>
            <div class="popover-content">
                <ng-content></ng-content>
                <div class="popover-content-text">{{ content }}</div>
            </div>
        </div>
    `
            }] }
];
/** @nocollapse */
PopOverContent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
PopOverContent.propDecorators = {
    content: [{ type: Input }],
    placement: [{ type: Input }],
    title: [{ type: Input }],
    animation: [{ type: Input }],
    popoverDiv: [{ type: ViewChild, args: ['popoverDiv', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3ZlckNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcG9wb3Zlci9Qb3BPdmVyQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTRCLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNCbkksTUFBTSxPQUFPLGNBQWM7Ozs7O0lBcUJ6QixZQUFzQixPQUFtQixFQUFZLEdBQXNCO1FBQXJELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpCM0UsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUkxQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBSzFCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsUUFBRyxHQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3JCLFNBQUksR0FBVyxDQUFDLEtBQUssQ0FBQztRQUN0QixnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUc3QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBRW9ELENBQUM7Ozs7SUFFL0UsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDL0MsT0FBTztTQUNSOztj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ZDtRQUNELElBQUksZ0JBQWdCLEtBQUssTUFBTSxJQUFJLGtCQUFrQixDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUMxRixPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUNELElBQUksZ0JBQWdCLEtBQUssT0FBTyxJQUFJLGtCQUFrQixDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDNUcsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQzs7O1lBNU5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztLQWVQO2FBQ0o7Ozs7WUFyQitELFVBQVU7WUFBZ0IsaUJBQWlCOzs7c0JBdUJ4RyxLQUFLO3dCQUVMLEtBQUs7b0JBRUwsS0FBSzt3QkFFTCxLQUFLO3lCQUdMLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBVDFDLGlDQUNnQjs7SUFDaEIsbUNBQzBCOztJQUMxQiwrQkFDYzs7SUFDZCxtQ0FDMEI7O0lBRTFCLG9DQUN1Qjs7SUFDdkIsaUNBQTBCOztJQUMxQiw0Q0FBd0M7O0lBQ3hDLDZCQUFxQjs7SUFDckIsOEJBQXNCOztJQUN0QixxQ0FBNkI7O0lBQzdCLDRDQUEyQjs7SUFDM0IsNENBQTJCOztJQUMzQixrQ0FBMEI7Ozs7O0lBRWQsaUNBQTZCOzs7OztJQUFFLDZCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BPdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9Qb3BPdmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9wb3Zlci1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjcG9wb3ZlckRpdlxuICAgICAgICAgICAgY2xhc3M9XCJwb3BvdmVyIHt7IGVmZmVjdGl2ZVBsYWNlbWVudCB9fVwiXG4gICAgICAgICAgICBbc3R5bGUudG9wXT1cInRvcCArICdweCdcIlxuICAgICAgICAgICAgW3N0eWxlLmxlZnRdPVwibGVmdCArICdweCdcIlxuICAgICAgICAgICAgW2NsYXNzLmZhZGVdPVwiYW5pbWF0aW9uXCJcbiAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogYmxvY2tcIlxuICAgICAgICAgICAgcm9sZT1cInBvcG92ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyB7e2VmZmVjdGl2ZUFsaWdubWVudH19XCI+PC9kaXY+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCIgW2hpZGRlbl09XCIhdGl0bGVcIj57eyB0aXRsZSB9fTwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnQtdGV4dFwiPnt7IGNvbnRlbnQgfX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BPdmVyQ29udGVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBjb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgncG9wb3ZlckRpdicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwb3BvdmVyRGl2OiBFbGVtZW50UmVmO1xuICBwb3BvdmVyOiBQb3BPdmVyRGlyZWN0aXZlO1xuICBvbkNsb3NlRnJvbU91dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHRvcDogbnVtYmVyID0gLTEwMDAwO1xuICBsZWZ0OiBudW1iZXIgPSAtMTAwMDA7XG4gIGRpc3BsYXlUeXBlOiBzdHJpbmcgPSAnbm9uZSc7XG4gIGVmZmVjdGl2ZVBsYWNlbWVudDogc3RyaW5nO1xuICBlZmZlY3RpdmVBbGlnbm1lbnQ6IHN0cmluZztcbiAgaXNIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudDogRWxlbWVudFJlZiwgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdygpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0hpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXIgfHwgIXRoaXMucG9wb3Zlci5nZXRFbGVtZW50KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwID0gdGhpcy5wb3NpdGlvbkVsZW1lbnRzKHRoaXMucG9wb3Zlci5nZXRFbGVtZW50KCksIHRoaXMucG9wb3ZlckRpdi5uYXRpdmVFbGVtZW50LCB0aGlzLnBsYWNlbWVudCk7XG4gICAgdGhpcy5kaXNwbGF5VHlwZSA9ICdibG9jayc7XG4gICAgdGhpcy50b3AgPSBwLnRvcDtcbiAgICB0aGlzLmxlZnQgPSBwLmxlZnQ7XG4gICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvcCA9IC0xMDAwMDtcbiAgICB0aGlzLmxlZnQgPSAtMTAwMDA7XG4gICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wb3BvdmVyLmhpZGUoKTtcbiAgfVxuXG4gIGhpZGVGcm9tUG9wb3ZlcigpIHtcbiAgICB0aGlzLnRvcCA9IC0xMDAwMDtcbiAgICB0aGlzLmxlZnQgPSAtMTAwMDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWw6IEhUTUxFbGVtZW50LFxuICAgIHRhcmdldEVsOiBIVE1MRWxlbWVudCxcbiAgICBwb3NpdGlvblN0cjogc3RyaW5nLFxuICAgIGFwcGVuZFRvQm9keSA9IGZhbHNlLFxuICApOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgbGV0IHBvc2l0aW9uU3RyUGFydHMgPSBwb3NpdGlvblN0ci5zcGxpdCgnLScpO1xuICAgIGxldCBtYWluU2lkZSA9ICh0aGlzLmVmZmVjdGl2ZVBsYWNlbWVudCA9IHRoaXMuZ2V0RWZmZWN0aXZlUGxhY2VtZW50KHBvc2l0aW9uU3RyUGFydHNbMF0gfHwgJ3JpZ2h0JywgaG9zdEVsLCB0YXJnZXRFbCkpO1xuICAgIGxldCBvcmllbnRhdGlvbiA9ICh0aGlzLmVmZmVjdGl2ZUFsaWdubWVudCA9IHBvc2l0aW9uU3RyUGFydHNbMV0gfHwgJ2NlbnRlcicpO1xuICAgIGxldCBob3N0RWxQb3MgPSBhcHBlbmRUb0JvZHkgPyB0aGlzLm9mZnNldChob3N0RWwpIDogdGhpcy5wb3NpdGlvbihob3N0RWwpO1xuICAgIGxldCB0YXJnZXRFbFdpZHRoID0gdGFyZ2V0RWwub2Zmc2V0V2lkdGg7XG4gICAgbGV0IHRhcmdldEVsSGVpZ2h0ID0gdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgbGV0IHNoaWZ0V2lkdGg6IGFueSA9IHtcbiAgICAgIGNlbnRlcjogZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgKGhvc3RFbFBvcy53aWR0aCAtIHRhcmdldEVsV2lkdGgpIC8gMjtcbiAgICAgIH0sXG4gICAgICByaWdodDogZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0O1xuICAgICAgfSxcbiAgICAgIGxlZnQ6IGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIChob3N0RWxQb3Mud2lkdGggLSB0YXJnZXRFbFdpZHRoKTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGxldCBzaGlmdEhlaWdodDogYW55ID0ge1xuICAgICAgY2VudGVyOiBmdW5jdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcCArIChob3N0RWxQb3MuaGVpZ2h0IC0gdGFyZ2V0RWxIZWlnaHQpIC8gMjtcbiAgICAgIH0sXG4gICAgICBib3R0b206IGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wO1xuICAgICAgfSxcbiAgICAgIHRvcDogZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyAoaG9zdEVsUG9zLmhlaWdodCAtIHRhcmdldEVsSGVpZ2h0KTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGxldCB0YXJnZXRFbFBvczogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH07XG4gICAgc3dpdGNoIChtYWluU2lkZSkge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICB0b3A6IHNoaWZ0SGVpZ2h0W29yaWVudGF0aW9uXSgpLFxuICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbb3JpZW50YXRpb25dKCksXG4gICAgICAgICAgbGVmdDogaG9zdEVsUG9zLmxlZnQgLSB0YXJnZXRFbFdpZHRoLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodCxcbiAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW29yaWVudGF0aW9uXSgpLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBob3N0RWxQb3MudG9wIC0gdGFyZ2V0RWxIZWlnaHQsXG4gICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEVsUG9zO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBvc2l0aW9uKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgbGV0IG9mZnNldFBhcmVudEJDUiA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gICAgY29uc3QgZWxCQ1IgPSB0aGlzLm9mZnNldChuYXRpdmVFbCk7XG4gICAgY29uc3Qgb2Zmc2V0UGFyZW50RWwgPSB0aGlzLnBhcmVudE9mZnNldEVsKG5hdGl2ZUVsKTtcbiAgICBpZiAob2Zmc2V0UGFyZW50RWwgIT09IHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgb2Zmc2V0UGFyZW50QkNSID0gdGhpcy5vZmZzZXQob2Zmc2V0UGFyZW50RWwpO1xuICAgICAgb2Zmc2V0UGFyZW50QkNSLnRvcCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRUb3AgLSBvZmZzZXRQYXJlbnRFbC5zY3JvbGxUb3A7XG4gICAgICBvZmZzZXRQYXJlbnRCQ1IubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0IC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSBuYXRpdmVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCB8fCBuYXRpdmVFbC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBuYXRpdmVFbC5vZmZzZXRIZWlnaHQsXG4gICAgICB0b3A6IGVsQkNSLnRvcCAtIG9mZnNldFBhcmVudEJDUi50b3AsXG4gICAgICBsZWZ0OiBlbEJDUi5sZWZ0IC0gb2Zmc2V0UGFyZW50QkNSLmxlZnQsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvZmZzZXQobmF0aXZlRWw6IGFueSk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gbmF0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgdG9wOiBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCksXG4gICAgICBsZWZ0OiBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0KSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN0eWxlKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCwgY3NzUHJvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoKG5hdGl2ZUVsIGFzIGFueSkuY3VycmVudFN0eWxlKSB7XG4gICAgICByZXR1cm4gKG5hdGl2ZUVsIGFzIGFueSkuY3VycmVudFN0eWxlW2Nzc1Byb3BdO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgcmV0dXJuICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSBhcyBhbnkpKG5hdGl2ZUVsKVtjc3NQcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKG5hdGl2ZUVsLnN0eWxlIGFzIGFueSlbY3NzUHJvcF07XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNTdGF0aWNQb3NpdGlvbmVkKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5nZXRTdHlsZShuYXRpdmVFbCwgJ3Bvc2l0aW9uJykgfHwgJ3N0YXRpYycpID09PSAnc3RhdGljJztcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXJlbnRPZmZzZXRFbChuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiBhbnkge1xuICAgIGxldCBvZmZzZXRQYXJlbnQ6IGFueSA9IG5hdGl2ZUVsLm9mZnNldFBhcmVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQgIT09IHdpbmRvdy5kb2N1bWVudCAmJiB0aGlzLmlzU3RhdGljUG9zaXRpb25lZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFZmZlY3RpdmVQbGFjZW1lbnQoZGVzaXJlZFBsYWNlbWVudDogc3RyaW5nLCBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBob3N0RWxCb3VuZGluZ1JlY3QgPSBob3N0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAndG9wJyAmJiBob3N0RWxCb3VuZGluZ1JlY3QudG9wIC0gdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQgPCAwKSB7XG4gICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgfVxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBob3N0RWxCb3VuZGluZ1JlY3QuYm90dG9tICsgdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgIHJldHVybiAndG9wJztcbiAgICB9XG4gICAgaWYgKGRlc2lyZWRQbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBob3N0RWxCb3VuZGluZ1JlY3QubGVmdCAtIHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGggPCAwKSB7XG4gICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICB9XG4gICAgaWYgKGRlc2lyZWRQbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgaG9zdEVsQm91bmRpbmdSZWN0LnJpZ2h0ICsgdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICByZXR1cm4gJ2xlZnQnO1xuICAgIH1cblxuICAgIHJldHVybiBkZXNpcmVkUGxhY2VtZW50O1xuICB9XG59XG4iXX0=