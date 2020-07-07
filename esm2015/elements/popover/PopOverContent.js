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
        const positionStrParts = positionStr.split('-');
        /** @type {?} */
        const mainSide = (this.effectivePlacement = this.getEffectivePlacement(positionStrParts[0] || 'right', hostEl, targetEl));
        /** @type {?} */
        const orientation = (this.effectiveAlignment = positionStrParts[1] || 'center');
        /** @type {?} */
        const hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        /** @type {?} */
        const targetElWidth = targetEl.offsetWidth;
        /** @type {?} */
        const targetElHeight = targetEl.offsetHeight;
        /** @type {?} */
        const shiftWidth = {
            /**
             * @return {?}
             */
            center() {
                return hostElPos.left + (hostElPos.width - targetElWidth) / 2;
            },
            /**
             * @return {?}
             */
            right() {
                return hostElPos.left;
            },
            /**
             * @return {?}
             */
            left() {
                return hostElPos.left + (hostElPos.width - targetElWidth);
            },
        };
        /** @type {?} */
        const shiftHeight = {
            /**
             * @return {?}
             */
            center() {
                return hostElPos.top + (hostElPos.height - targetElHeight) / 2;
            },
            /**
             * @return {?}
             */
            bottom() {
                return hostElPos.top;
            },
            /**
             * @return {?}
             */
            top() {
                return hostElPos.top + (hostElPos.height - targetElHeight);
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3ZlckNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcG9wb3Zlci9Qb3BPdmVyQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTRCLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNCbkksTUFBTSxPQUFPLGNBQWM7Ozs7O0lBcUJ6QixZQUFzQixPQUFtQixFQUFZLEdBQXNCO1FBQXJELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpCM0UsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUkxQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBSzFCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsUUFBRyxHQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3JCLFNBQUksR0FBVyxDQUFDLEtBQUssQ0FBQztRQUN0QixnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUc3QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBRW9ELENBQUM7Ozs7SUFFL0UsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDL0MsT0FBTztTQUNSOztj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LGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQzFGLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxPQUFPLElBQUksa0JBQWtCLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUM1RyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOzs7WUE1TkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0tBZVA7YUFDSjs7OztZQXJCK0QsVUFBVTtZQUFnQixpQkFBaUI7OztzQkF1QnhHLEtBQUs7d0JBRUwsS0FBSztvQkFFTCxLQUFLO3dCQUVMLEtBQUs7eUJBR0wsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFUMUMsaUNBQ2dCOztJQUNoQixtQ0FDMEI7O0lBQzFCLCtCQUNjOztJQUNkLG1DQUMwQjs7SUFFMUIsb0NBQ3VCOztJQUN2QixpQ0FBMEI7O0lBQzFCLDRDQUF3Qzs7SUFDeEMsNkJBQXFCOztJQUNyQiw4QkFBc0I7O0lBQ3RCLHFDQUE2Qjs7SUFDN0IsNENBQTJCOztJQUMzQiw0Q0FBMkI7O0lBQzNCLGtDQUEwQjs7Ozs7SUFFZCxpQ0FBNkI7Ozs7O0lBQUUsNkJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcE92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL1BvcE92ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNwb3BvdmVyRGl2XG4gICAgICAgICAgICBjbGFzcz1cInBvcG92ZXIge3sgZWZmZWN0aXZlUGxhY2VtZW50IH19XCJcbiAgICAgICAgICAgIFtzdHlsZS50b3BdPVwidG9wICsgJ3B4J1wiXG4gICAgICAgICAgICBbc3R5bGUubGVmdF09XCJsZWZ0ICsgJ3B4J1wiXG4gICAgICAgICAgICBbY2xhc3MuZmFkZV09XCJhbmltYXRpb25cIlxuICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiXG4gICAgICAgICAgICByb2xlPVwicG9wb3ZlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFycm93IHt7ZWZmZWN0aXZlQWxpZ25tZW50fX1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cInBvcG92ZXItdGl0bGVcIiBbaGlkZGVuXT1cIiF0aXRsZVwiPnt7IHRpdGxlIH19PC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudC10ZXh0XCI+e3sgY29udGVudCB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBvcE92ZXJDb250ZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgcGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKCdwb3BvdmVyRGl2JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHBvcG92ZXJEaXY6IEVsZW1lbnRSZWY7XG4gIHBvcG92ZXI6IFBvcE92ZXJEaXJlY3RpdmU7XG4gIG9uQ2xvc2VGcm9tT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdG9wOiBudW1iZXIgPSAtMTAwMDA7XG4gIGxlZnQ6IG51bWJlciA9IC0xMDAwMDtcbiAgZGlzcGxheVR5cGU6IHN0cmluZyA9ICdub25lJztcbiAgZWZmZWN0aXZlUGxhY2VtZW50OiBzdHJpbmc7XG4gIGVmZmVjdGl2ZUFsaWdubWVudDogc3RyaW5nO1xuICBpc0hpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50OiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93KCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSGlkZGVuKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucG9wb3ZlciB8fCAhdGhpcy5wb3BvdmVyLmdldEVsZW1lbnQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHAgPSB0aGlzLnBvc2l0aW9uRWxlbWVudHModGhpcy5wb3BvdmVyLmdldEVsZW1lbnQoKSwgdGhpcy5wb3BvdmVyRGl2Lm5hdGl2ZUVsZW1lbnQsIHRoaXMucGxhY2VtZW50KTtcbiAgICB0aGlzLmRpc3BsYXlUeXBlID0gJ2Jsb2NrJztcbiAgICB0aGlzLnRvcCA9IHAudG9wO1xuICAgIHRoaXMubGVmdCA9IHAubGVmdDtcbiAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMudG9wID0gLTEwMDAwO1xuICAgIHRoaXMubGVmdCA9IC0xMDAwMDtcbiAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLnBvcG92ZXIuaGlkZSgpO1xuICB9XG5cbiAgaGlkZUZyb21Qb3BvdmVyKCkge1xuICAgIHRoaXMudG9wID0gLTEwMDAwO1xuICAgIHRoaXMubGVmdCA9IC0xMDAwMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBwb3NpdGlvbkVsZW1lbnRzKFxuICAgIGhvc3RFbDogSFRNTEVsZW1lbnQsXG4gICAgdGFyZ2V0RWw6IEhUTUxFbGVtZW50LFxuICAgIHBvc2l0aW9uU3RyOiBzdHJpbmcsXG4gICAgYXBwZW5kVG9Cb2R5ID0gZmFsc2UsXG4gICk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcbiAgICBjb25zdCBwb3NpdGlvblN0clBhcnRzID0gcG9zaXRpb25TdHIuc3BsaXQoJy0nKTtcbiAgICBjb25zdCBtYWluU2lkZSA9ICh0aGlzLmVmZmVjdGl2ZVBsYWNlbWVudCA9IHRoaXMuZ2V0RWZmZWN0aXZlUGxhY2VtZW50KHBvc2l0aW9uU3RyUGFydHNbMF0gfHwgJ3JpZ2h0JywgaG9zdEVsLCB0YXJnZXRFbCkpO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gKHRoaXMuZWZmZWN0aXZlQWxpZ25tZW50ID0gcG9zaXRpb25TdHJQYXJ0c1sxXSB8fCAnY2VudGVyJyk7XG4gICAgY29uc3QgaG9zdEVsUG9zID0gYXBwZW5kVG9Cb2R5ID8gdGhpcy5vZmZzZXQoaG9zdEVsKSA6IHRoaXMucG9zaXRpb24oaG9zdEVsKTtcbiAgICBjb25zdCB0YXJnZXRFbFdpZHRoID0gdGFyZ2V0RWwub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgdGFyZ2V0RWxIZWlnaHQgPSB0YXJnZXRFbC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCBzaGlmdFdpZHRoOiBhbnkgPSB7XG4gICAgICBjZW50ZXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgKGhvc3RFbFBvcy53aWR0aCAtIHRhcmdldEVsV2lkdGgpIC8gMjtcbiAgICAgIH0sXG4gICAgICByaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLmxlZnQ7XG4gICAgICB9LFxuICAgICAgbGVmdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLmxlZnQgKyAoaG9zdEVsUG9zLndpZHRoIC0gdGFyZ2V0RWxXaWR0aCk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBzaGlmdEhlaWdodDogYW55ID0ge1xuICAgICAgY2VudGVyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgKGhvc3RFbFBvcy5oZWlnaHQgLSB0YXJnZXRFbEhlaWdodCkgLyAyO1xuICAgICAgfSxcbiAgICAgIGJvdHRvbSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcDtcbiAgICAgIH0sXG4gICAgICB0b3AoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyAoaG9zdEVsUG9zLmhlaWdodCAtIHRhcmdldEVsSGVpZ2h0KTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGxldCB0YXJnZXRFbFBvczogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH07XG4gICAgc3dpdGNoIChtYWluU2lkZSkge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICB0b3A6IHNoaWZ0SGVpZ2h0W29yaWVudGF0aW9uXSgpLFxuICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbb3JpZW50YXRpb25dKCksXG4gICAgICAgICAgbGVmdDogaG9zdEVsUG9zLmxlZnQgLSB0YXJnZXRFbFdpZHRoLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodCxcbiAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW29yaWVudGF0aW9uXSgpLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBob3N0RWxQb3MudG9wIC0gdGFyZ2V0RWxIZWlnaHQsXG4gICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEVsUG9zO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBvc2l0aW9uKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgbGV0IG9mZnNldFBhcmVudEJDUiA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gICAgY29uc3QgZWxCQ1IgPSB0aGlzLm9mZnNldChuYXRpdmVFbCk7XG4gICAgY29uc3Qgb2Zmc2V0UGFyZW50RWwgPSB0aGlzLnBhcmVudE9mZnNldEVsKG5hdGl2ZUVsKTtcbiAgICBpZiAob2Zmc2V0UGFyZW50RWwgIT09IHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgb2Zmc2V0UGFyZW50QkNSID0gdGhpcy5vZmZzZXQob2Zmc2V0UGFyZW50RWwpO1xuICAgICAgb2Zmc2V0UGFyZW50QkNSLnRvcCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRUb3AgLSBvZmZzZXRQYXJlbnRFbC5zY3JvbGxUb3A7XG4gICAgICBvZmZzZXRQYXJlbnRCQ1IubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0IC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSBuYXRpdmVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCB8fCBuYXRpdmVFbC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBuYXRpdmVFbC5vZmZzZXRIZWlnaHQsXG4gICAgICB0b3A6IGVsQkNSLnRvcCAtIG9mZnNldFBhcmVudEJDUi50b3AsXG4gICAgICBsZWZ0OiBlbEJDUi5sZWZ0IC0gb2Zmc2V0UGFyZW50QkNSLmxlZnQsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvZmZzZXQobmF0aXZlRWw6IGFueSk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gbmF0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgdG9wOiBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCksXG4gICAgICBsZWZ0OiBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0KSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN0eWxlKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCwgY3NzUHJvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoKG5hdGl2ZUVsIGFzIGFueSkuY3VycmVudFN0eWxlKSB7XG4gICAgICByZXR1cm4gKG5hdGl2ZUVsIGFzIGFueSkuY3VycmVudFN0eWxlW2Nzc1Byb3BdO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgcmV0dXJuICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSBhcyBhbnkpKG5hdGl2ZUVsKVtjc3NQcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKG5hdGl2ZUVsLnN0eWxlIGFzIGFueSlbY3NzUHJvcF07XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNTdGF0aWNQb3NpdGlvbmVkKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5nZXRTdHlsZShuYXRpdmVFbCwgJ3Bvc2l0aW9uJykgfHwgJ3N0YXRpYycpID09PSAnc3RhdGljJztcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXJlbnRPZmZzZXRFbChuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiBhbnkge1xuICAgIGxldCBvZmZzZXRQYXJlbnQ6IGFueSA9IG5hdGl2ZUVsLm9mZnNldFBhcmVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQgIT09IHdpbmRvdy5kb2N1bWVudCAmJiB0aGlzLmlzU3RhdGljUG9zaXRpb25lZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFZmZlY3RpdmVQbGFjZW1lbnQoZGVzaXJlZFBsYWNlbWVudDogc3RyaW5nLCBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBob3N0RWxCb3VuZGluZ1JlY3QgPSBob3N0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAndG9wJyAmJiBob3N0RWxCb3VuZGluZ1JlY3QudG9wIC0gdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQgPCAwKSB7XG4gICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgfVxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBob3N0RWxCb3VuZGluZ1JlY3QuYm90dG9tICsgdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgIHJldHVybiAndG9wJztcbiAgICB9XG4gICAgaWYgKGRlc2lyZWRQbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBob3N0RWxCb3VuZGluZ1JlY3QubGVmdCAtIHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGggPCAwKSB7XG4gICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICB9XG4gICAgaWYgKGRlc2lyZWRQbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgaG9zdEVsQm91bmRpbmdSZWN0LnJpZ2h0ICsgdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICByZXR1cm4gJ2xlZnQnO1xuICAgIH1cblxuICAgIHJldHVybiBkZXNpcmVkUGxhY2VtZW50O1xuICB9XG59XG4iXX0=