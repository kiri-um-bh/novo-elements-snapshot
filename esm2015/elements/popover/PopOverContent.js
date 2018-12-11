/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        let shiftHeight = {
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
    popoverDiv: [{ type: ViewChild, args: ['popoverDiv',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3ZlckNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcG9wb3Zlci9Qb3BPdmVyQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNEIsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBc0JuSSxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFxQnpCLFlBQXNCLE9BQW1CLEVBQVksR0FBc0I7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFZLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakIzRSxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBSTFCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFLMUIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxRQUFHLEdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDckIsU0FBSSxHQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQVcsTUFBTSxDQUFDO1FBRzdCLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFFb0QsQ0FBQzs7OztJQUUvRSxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUMvQyxPQUFPO1NBQ1I7O2NBRUssQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekcsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7OztJQUVTLGdCQUFnQixDQUN4QixNQUFtQixFQUNuQixRQUFxQixFQUNyQixXQUFtQixFQUNuQixZQUFZLEdBQUcsS0FBSzs7WUFFaEIsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1lBQ3pDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQzs7WUFDbkgsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQzs7WUFDekUsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7O1lBQ3RFLGFBQWEsR0FBRyxRQUFRLENBQUMsV0FBVzs7WUFDcEMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxZQUFZOztZQUV0QyxVQUFVLEdBQVE7WUFDcEIsTUFBTSxFQUFFO2dCQUNOLE9BQU8sU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3hCLENBQUM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQ0Y7O1lBRUcsV0FBVyxHQUFRO1lBQ3JCLE1BQU0sRUFBRTtnQkFDTixPQUFPLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRSxDQUFDO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDO1lBQ0QsR0FBRyxFQUFFO2dCQUNILE9BQU8sU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLENBQUM7WUFDN0QsQ0FBQztTQUNGOztZQUVHLFdBQTBDO1FBQzlDLFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssT0FBTztnQkFDVixXQUFXLEdBQUc7b0JBQ1osR0FBRyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUs7aUJBQ3ZDLENBQUM7Z0JBQ0YsTUFBTTtZQUVSLEtBQUssTUFBTTtnQkFDVCxXQUFXLEdBQUc7b0JBQ1osR0FBRyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEdBQUcsYUFBYTtpQkFDckMsQ0FBQztnQkFDRixNQUFNO1lBRVIsS0FBSyxRQUFRO2dCQUNYLFdBQVcsR0FBRztvQkFDWixHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTTtvQkFDckMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRTtpQkFDaEMsQ0FBQztnQkFDRixNQUFNO1lBRVI7Z0JBQ0UsV0FBVyxHQUFHO29CQUNaLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRyxHQUFHLGNBQWM7b0JBQ25DLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7aUJBQ2hDLENBQUM7Z0JBQ0YsTUFBTTtTQUNUO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRVMsUUFBUSxDQUFDLFFBQXFCOztZQUNsQyxlQUFlLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7O2NBQ25DLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7Y0FDN0IsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksY0FBYyxLQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdEMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxjQUFjLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDM0UsZUFBZSxDQUFDLElBQUksSUFBSSxjQUFjLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7U0FDL0U7O2NBRUssa0JBQWtCLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixFQUFFO1FBQzNELE9BQU87WUFDTCxLQUFLLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxXQUFXO1lBQ3ZELE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLFlBQVk7WUFDMUQsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLEdBQUc7WUFDcEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLElBQUk7U0FDeEMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLE1BQU0sQ0FBQyxRQUFhOztjQUN0QixrQkFBa0IsR0FBRyxRQUFRLENBQUMscUJBQXFCLEVBQUU7UUFDM0QsT0FBTztZQUNMLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLFdBQVc7WUFDdkQsTUFBTSxFQUFFLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsWUFBWTtZQUMxRCxHQUFHLEVBQUUsa0JBQWtCLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDL0YsSUFBSSxFQUFFLGtCQUFrQixDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1NBQ25HLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRVMsUUFBUSxDQUFDLFFBQXFCLEVBQUUsT0FBZTtRQUN2RCxJQUFJLENBQUMsbUJBQUEsUUFBUSxFQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDbEMsT0FBTyxDQUFDLG1CQUFBLFFBQVEsRUFBTyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsT0FBTyxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxPQUFPLENBQUMsbUJBQUEsUUFBUSxDQUFDLEtBQUssRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRVMsa0JBQWtCLENBQUMsUUFBcUI7UUFDaEQsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLFFBQVEsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7SUFFUyxjQUFjLENBQUMsUUFBcUI7O1lBQ3hDLFlBQVksR0FBUSxRQUFRLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxRQUFRO1FBQ2hFLE9BQU8sWUFBWSxJQUFJLFlBQVksS0FBSyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNoRyxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztTQUMxQztRQUNELE9BQU8sWUFBWSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQzs7Ozs7Ozs7SUFFUyxxQkFBcUIsQ0FBQyxnQkFBd0IsRUFBRSxXQUF3QixFQUFFLGFBQTBCOztjQUN0RyxrQkFBa0IsR0FBRyxXQUFXLENBQUMscUJBQXFCLEVBQUU7UUFFOUQsSUFBSSxnQkFBZ0IsS0FBSyxLQUFLLElBQUksa0JBQWtCLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3pGLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxRQUFRLElBQUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUNoSCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxNQUFNLElBQUksa0JBQWtCLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQzFGLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxPQUFPLElBQUksa0JBQWtCLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUM1RyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOzs7WUE1TkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0tBZVA7YUFDSjs7OztZQXJCK0QsVUFBVTtZQUFnQixpQkFBaUI7OztzQkF1QnhHLEtBQUs7d0JBRUwsS0FBSztvQkFFTCxLQUFLO3dCQUVMLEtBQUs7eUJBR0wsU0FBUyxTQUFDLFlBQVk7Ozs7SUFUdkIsaUNBQ2dCOztJQUNoQixtQ0FDMEI7O0lBQzFCLCtCQUNjOztJQUNkLG1DQUMwQjs7SUFFMUIsb0NBQ3VCOztJQUN2QixpQ0FBMEI7O0lBQzFCLDRDQUF3Qzs7SUFDeEMsNkJBQXFCOztJQUNyQiw4QkFBc0I7O0lBQ3RCLHFDQUE2Qjs7SUFDN0IsNENBQTJCOztJQUMzQiw0Q0FBMkI7O0lBQzNCLGtDQUEwQjs7Ozs7SUFFZCxpQ0FBNkI7Ozs7O0lBQUUsNkJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcE92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL1BvcE92ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNwb3BvdmVyRGl2XG4gICAgICAgICAgICBjbGFzcz1cInBvcG92ZXIge3sgZWZmZWN0aXZlUGxhY2VtZW50IH19XCJcbiAgICAgICAgICAgIFtzdHlsZS50b3BdPVwidG9wICsgJ3B4J1wiXG4gICAgICAgICAgICBbc3R5bGUubGVmdF09XCJsZWZ0ICsgJ3B4J1wiXG4gICAgICAgICAgICBbY2xhc3MuZmFkZV09XCJhbmltYXRpb25cIlxuICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiXG4gICAgICAgICAgICByb2xlPVwicG9wb3ZlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFycm93IHt7ZWZmZWN0aXZlQWxpZ25tZW50fX1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cInBvcG92ZXItdGl0bGVcIiBbaGlkZGVuXT1cIiF0aXRsZVwiPnt7IHRpdGxlIH19PC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudC10ZXh0XCI+e3sgY29udGVudCB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBvcE92ZXJDb250ZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgcGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKCdwb3BvdmVyRGl2JylcbiAgcG9wb3ZlckRpdjogRWxlbWVudFJlZjtcbiAgcG9wb3ZlcjogUG9wT3ZlckRpcmVjdGl2ZTtcbiAgb25DbG9zZUZyb21PdXRzaWRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB0b3A6IG51bWJlciA9IC0xMDAwMDtcbiAgbGVmdDogbnVtYmVyID0gLTEwMDAwO1xuICBkaXNwbGF5VHlwZTogc3RyaW5nID0gJ25vbmUnO1xuICBlZmZlY3RpdmVQbGFjZW1lbnQ6IHN0cmluZztcbiAgZWZmZWN0aXZlQWxpZ25tZW50OiBzdHJpbmc7XG4gIGlzSGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3coKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNIaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyIHx8ICF0aGlzLnBvcG92ZXIuZ2V0RWxlbWVudCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcCA9IHRoaXMucG9zaXRpb25FbGVtZW50cyh0aGlzLnBvcG92ZXIuZ2V0RWxlbWVudCgpLCB0aGlzLnBvcG92ZXJEaXYubmF0aXZlRWxlbWVudCwgdGhpcy5wbGFjZW1lbnQpO1xuICAgIHRoaXMuZGlzcGxheVR5cGUgPSAnYmxvY2snO1xuICAgIHRoaXMudG9wID0gcC50b3A7XG4gICAgdGhpcy5sZWZ0ID0gcC5sZWZ0O1xuICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy50b3AgPSAtMTAwMDA7XG4gICAgdGhpcy5sZWZ0ID0gLTEwMDAwO1xuICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMucG9wb3Zlci5oaWRlKCk7XG4gIH1cblxuICBoaWRlRnJvbVBvcG92ZXIoKSB7XG4gICAgdGhpcy50b3AgPSAtMTAwMDA7XG4gICAgdGhpcy5sZWZ0ID0gLTEwMDAwO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBvc2l0aW9uRWxlbWVudHMoXG4gICAgaG9zdEVsOiBIVE1MRWxlbWVudCxcbiAgICB0YXJnZXRFbDogSFRNTEVsZW1lbnQsXG4gICAgcG9zaXRpb25TdHI6IHN0cmluZyxcbiAgICBhcHBlbmRUb0JvZHkgPSBmYWxzZSxcbiAgKTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGxldCBwb3NpdGlvblN0clBhcnRzID0gcG9zaXRpb25TdHIuc3BsaXQoJy0nKTtcbiAgICBsZXQgbWFpblNpZGUgPSAodGhpcy5lZmZlY3RpdmVQbGFjZW1lbnQgPSB0aGlzLmdldEVmZmVjdGl2ZVBsYWNlbWVudChwb3NpdGlvblN0clBhcnRzWzBdIHx8ICdyaWdodCcsIGhvc3RFbCwgdGFyZ2V0RWwpKTtcbiAgICBsZXQgb3JpZW50YXRpb24gPSAodGhpcy5lZmZlY3RpdmVBbGlnbm1lbnQgPSBwb3NpdGlvblN0clBhcnRzWzFdIHx8ICdjZW50ZXInKTtcbiAgICBsZXQgaG9zdEVsUG9zID0gYXBwZW5kVG9Cb2R5ID8gdGhpcy5vZmZzZXQoaG9zdEVsKSA6IHRoaXMucG9zaXRpb24oaG9zdEVsKTtcbiAgICBsZXQgdGFyZ2V0RWxXaWR0aCA9IHRhcmdldEVsLm9mZnNldFdpZHRoO1xuICAgIGxldCB0YXJnZXRFbEhlaWdodCA9IHRhcmdldEVsLm9mZnNldEhlaWdodDtcblxuICAgIGxldCBzaGlmdFdpZHRoOiBhbnkgPSB7XG4gICAgICBjZW50ZXI6IGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIChob3N0RWxQb3Mud2lkdGggLSB0YXJnZXRFbFdpZHRoKSAvIDI7XG4gICAgICB9LFxuICAgICAgcmlnaHQ6IGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdDtcbiAgICAgIH0sXG4gICAgICBsZWZ0OiBmdW5jdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLmxlZnQgKyAoaG9zdEVsUG9zLndpZHRoIC0gdGFyZ2V0RWxXaWR0aCk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBsZXQgc2hpZnRIZWlnaHQ6IGFueSA9IHtcbiAgICAgIGNlbnRlcjogZnVuY3Rpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyAoaG9zdEVsUG9zLmhlaWdodCAtIHRhcmdldEVsSGVpZ2h0KSAvIDI7XG4gICAgICB9LFxuICAgICAgYm90dG9tOiBmdW5jdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcDtcbiAgICAgIH0sXG4gICAgICB0b3A6IGZ1bmN0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgKGhvc3RFbFBvcy5oZWlnaHQgLSB0YXJnZXRFbEhlaWdodCk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBsZXQgdGFyZ2V0RWxQb3M6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9O1xuICAgIHN3aXRjaCAobWFpblNpZGUpIHtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgICBsZWZ0OiBob3N0RWxQb3MubGVmdCArIGhvc3RFbFBvcy53aWR0aCxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICB0b3A6IHNoaWZ0SGVpZ2h0W29yaWVudGF0aW9uXSgpLFxuICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0IC0gdGFyZ2V0RWxXaWR0aCxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogaG9zdEVsUG9zLnRvcCArIGhvc3RFbFBvcy5oZWlnaHQsXG4gICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogaG9zdEVsUG9zLnRvcCAtIHRhcmdldEVsSGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IHNoaWZ0V2lkdGhbb3JpZW50YXRpb25dKCksXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRFbFBvcztcbiAgfVxuXG4gIHByb3RlY3RlZCBwb3NpdGlvbihuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGxldCBvZmZzZXRQYXJlbnRCQ1IgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICAgIGNvbnN0IGVsQkNSID0gdGhpcy5vZmZzZXQobmF0aXZlRWwpO1xuICAgIGNvbnN0IG9mZnNldFBhcmVudEVsID0gdGhpcy5wYXJlbnRPZmZzZXRFbChuYXRpdmVFbCk7XG4gICAgaWYgKG9mZnNldFBhcmVudEVsICE9PSB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIG9mZnNldFBhcmVudEJDUiA9IHRoaXMub2Zmc2V0KG9mZnNldFBhcmVudEVsKTtcbiAgICAgIG9mZnNldFBhcmVudEJDUi50b3AgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50VG9wIC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsVG9wO1xuICAgICAgb2Zmc2V0UGFyZW50QkNSLmxlZnQgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50TGVmdCAtIG9mZnNldFBhcmVudEVsLnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gbmF0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgdG9wOiBlbEJDUi50b3AgLSBvZmZzZXRQYXJlbnRCQ1IudG9wLFxuICAgICAgbGVmdDogZWxCQ1IubGVmdCAtIG9mZnNldFBhcmVudEJDUi5sZWZ0LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb2Zmc2V0KG5hdGl2ZUVsOiBhbnkpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5hdGl2ZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIHx8IG5hdGl2ZUVsLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IHx8IG5hdGl2ZUVsLm9mZnNldEhlaWdodCxcbiAgICAgIHRvcDogYm91bmRpbmdDbGllbnRSZWN0LnRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApLFxuICAgICAgbGVmdDogYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdHlsZShuYXRpdmVFbDogSFRNTEVsZW1lbnQsIGNzc1Byb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKChuYXRpdmVFbCBhcyBhbnkpLmN1cnJlbnRTdHlsZSkge1xuICAgICAgcmV0dXJuIChuYXRpdmVFbCBhcyBhbnkpLmN1cnJlbnRTdHlsZVtjc3NQcm9wXTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgIHJldHVybiAod2luZG93LmdldENvbXB1dGVkU3R5bGUgYXMgYW55KShuYXRpdmVFbClbY3NzUHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIChuYXRpdmVFbC5zdHlsZSBhcyBhbnkpW2Nzc1Byb3BdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzU3RhdGljUG9zaXRpb25lZChuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0U3R5bGUobmF0aXZlRWwsICdwb3NpdGlvbicpIHx8ICdzdGF0aWMnKSA9PT0gJ3N0YXRpYyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyZW50T2Zmc2V0RWwobmF0aXZlRWw6IEhUTUxFbGVtZW50KTogYW55IHtcbiAgICBsZXQgb2Zmc2V0UGFyZW50OiBhbnkgPSBuYXRpdmVFbC5vZmZzZXRQYXJlbnQgfHwgd2luZG93LmRvY3VtZW50O1xuICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50ICE9PSB3aW5kb3cuZG9jdW1lbnQgJiYgdGhpcy5pc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RWZmZWN0aXZlUGxhY2VtZW50KGRlc2lyZWRQbGFjZW1lbnQ6IHN0cmluZywgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgY29uc3QgaG9zdEVsQm91bmRpbmdSZWN0ID0gaG9zdEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAoZGVzaXJlZFBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgaG9zdEVsQm91bmRpbmdSZWN0LnRvcCAtIHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0IDwgMCkge1xuICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgIH1cbiAgICBpZiAoZGVzaXJlZFBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgaG9zdEVsQm91bmRpbmdSZWN0LmJvdHRvbSArIHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICByZXR1cm4gJ3RvcCc7XG4gICAgfVxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAnbGVmdCcgJiYgaG9zdEVsQm91bmRpbmdSZWN0LmxlZnQgLSB0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoIDwgMCkge1xuICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgfVxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAncmlnaHQnICYmIGhvc3RFbEJvdW5kaW5nUmVjdC5yaWdodCArIHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzaXJlZFBsYWNlbWVudDtcbiAgfVxufVxuIl19