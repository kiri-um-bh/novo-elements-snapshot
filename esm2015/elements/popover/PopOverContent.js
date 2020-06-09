import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["popoverDiv"];
const _c1 = ["*"];
export class PopOverContent {
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
    ngAfterViewInit() {
        this.show();
        this.cdr.detectChanges();
    }
    toggle() {
        if (this.isHidden) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    show() {
        if (!this.popover || !this.popover.getElement()) {
            return;
        }
        const p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.placement);
        this.displayType = 'block';
        this.top = p.top;
        this.left = p.left;
        this.isHidden = false;
    }
    hide() {
        this.top = -10000;
        this.left = -10000;
        this.isHidden = true;
        this.popover.hide();
    }
    hideFromPopover() {
        this.top = -10000;
        this.left = -10000;
    }
    positionElements(hostEl, targetEl, positionStr, appendToBody = false) {
        const positionStrParts = positionStr.split('-');
        const mainSide = (this.effectivePlacement = this.getEffectivePlacement(positionStrParts[0] || 'right', hostEl, targetEl));
        const orientation = (this.effectiveAlignment = positionStrParts[1] || 'center');
        const hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        const targetElWidth = targetEl.offsetWidth;
        const targetElHeight = targetEl.offsetHeight;
        const shiftWidth = {
            center() {
                return hostElPos.left + (hostElPos.width - targetElWidth) / 2;
            },
            right() {
                return hostElPos.left;
            },
            left() {
                return hostElPos.left + (hostElPos.width - targetElWidth);
            },
        };
        const shiftHeight = {
            center() {
                return hostElPos.top + (hostElPos.height - targetElHeight) / 2;
            },
            bottom() {
                return hostElPos.top;
            },
            top() {
                return hostElPos.top + (hostElPos.height - targetElHeight);
            },
        };
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
    position(nativeEl) {
        let offsetParentBCR = { top: 0, left: 0 };
        const elBCR = this.offset(nativeEl);
        const offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        const boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left,
        };
    }
    offset(nativeEl) {
        const boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft),
        };
    }
    getStyle(nativeEl, cssProp) {
        if (nativeEl.currentStyle) {
            return nativeEl.currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return window.getComputedStyle(nativeEl)[cssProp];
        }
        return nativeEl.style[cssProp];
    }
    isStaticPositioned(nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    }
    parentOffsetEl(nativeEl) {
        let offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    }
    getEffectivePlacement(desiredPlacement, hostElement, targetElement) {
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
PopOverContent.ɵfac = function PopOverContent_Factory(t) { return new (t || PopOverContent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PopOverContent.ɵcmp = i0.ɵɵdefineComponent({ type: PopOverContent, selectors: [["popover-content"]], viewQuery: function PopOverContent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popoverDiv = _t.first);
    } }, inputs: { content: "content", placement: "placement", title: "title", animation: "animation" }, ngContentSelectors: _c1, decls: 9, vars: 15, consts: [["role", "popover", 2, "display", "block"], ["popoverDiv", ""], [1, "popover-title", 3, "hidden"], [1, "popover-content"], [1, "popover-content-text"]], template: function PopOverContent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelement(2, "div");
        i0.ɵɵelementStart(3, "h4", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵprojection(6);
        i0.ɵɵelementStart(7, "div", 4);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("popover ", ctx.effectivePlacement, "");
        i0.ɵɵstyleProp("top", ctx.top + "px")("left", ctx.left + "px");
        i0.ɵɵclassProp("fade", ctx.animation);
        i0.ɵɵadvance(2);
        i0.ɵɵclassMapInterpolate1("arrow ", ctx.effectiveAlignment, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", !ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.content);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopOverContent, [{
        type: Component,
        args: [{
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
    `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { content: [{
            type: Input
        }], placement: [{
            type: Input
        }], title: [{
            type: Input
        }], animation: [{
            type: Input
        }], popoverDiv: [{
            type: ViewChild,
            args: ['popoverDiv']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3ZlckNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcG9wb3Zlci9Qb3BPdmVyQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFzQnhILE1BQU0sT0FBTyxjQUFjO0lBcUJ6QixZQUFzQixPQUFtQixFQUFZLEdBQXNCO1FBQXJELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpCM0UsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUkxQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBSzFCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsUUFBRyxHQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3JCLFNBQUksR0FBVyxDQUFDLEtBQUssQ0FBQztRQUN0QixnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUc3QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBRXFELENBQUM7SUFFaEYsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDL0MsT0FBTztTQUNSO1FBRUQsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRVMsZ0JBQWdCLENBQ3hCLE1BQW1CLEVBQ25CLFFBQXFCLEVBQ3JCLFdBQW1CLEVBQ25CLFlBQVksR0FBRyxLQUFLO1FBRXBCLE1BQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzFILE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDO1FBQ2hGLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RSxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQzNDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFFN0MsTUFBTSxVQUFVLEdBQVE7WUFDdEIsTUFBTTtnQkFDSixPQUFPLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoRSxDQUFDO1lBQ0QsS0FBSztnQkFDSCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsQ0FBQztZQUNELElBQUk7Z0JBQ0YsT0FBTyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQ0YsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFRO1lBQ3ZCLE1BQU07Z0JBQ0osT0FBTyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakUsQ0FBQztZQUNELE1BQU07Z0JBQ0osT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxHQUFHO2dCQUNELE9BQU8sU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLENBQUM7WUFDN0QsQ0FBQztTQUNGLENBQUM7UUFFRixJQUFJLFdBQTBDLENBQUM7UUFDL0MsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxPQUFPO2dCQUNWLFdBQVcsR0FBRztvQkFDWixHQUFHLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUMvQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSztpQkFDdkMsQ0FBQztnQkFDRixNQUFNO1lBRVIsS0FBSyxNQUFNO2dCQUNULFdBQVcsR0FBRztvQkFDWixHQUFHLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUMvQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksR0FBRyxhQUFhO2lCQUNyQyxDQUFDO2dCQUNGLE1BQU07WUFFUixLQUFLLFFBQVE7Z0JBQ1gsV0FBVyxHQUFHO29CQUNaLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNO29CQUNyQyxJQUFJLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2lCQUNoQyxDQUFDO2dCQUNGLE1BQU07WUFFUjtnQkFDRSxXQUFXLEdBQUc7b0JBQ1osR0FBRyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUcsY0FBYztvQkFDbkMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRTtpQkFDaEMsQ0FBQztnQkFDRixNQUFNO1NBQ1Q7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRVMsUUFBUSxDQUFDLFFBQXFCO1FBQ3RDLElBQUksZUFBZSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDMUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksY0FBYyxLQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdEMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxjQUFjLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDM0UsZUFBZSxDQUFDLElBQUksSUFBSSxjQUFjLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7U0FDL0U7UUFFRCxNQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzVELE9BQU87WUFDTCxLQUFLLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxXQUFXO1lBQ3ZELE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLFlBQVk7WUFDMUQsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLEdBQUc7WUFDcEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLElBQUk7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFUyxNQUFNLENBQUMsUUFBYTtRQUM1QixNQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzVELE9BQU87WUFDTCxLQUFLLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxXQUFXO1lBQ3ZELE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLFlBQVk7WUFDMUQsR0FBRyxFQUFFLGtCQUFrQixDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1lBQy9GLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztTQUNuRyxDQUFDO0lBQ0osQ0FBQztJQUVTLFFBQVEsQ0FBQyxRQUFxQixFQUFFLE9BQWU7UUFDdkQsSUFBSyxRQUFnQixDQUFDLFlBQVksRUFBRTtZQUNsQyxPQUFRLFFBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsT0FBUSxNQUFNLENBQUMsZ0JBQXdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxPQUFRLFFBQVEsQ0FBQyxLQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVTLGtCQUFrQixDQUFDLFFBQXFCO1FBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxRQUFRLENBQUM7SUFDeEUsQ0FBQztJQUVTLGNBQWMsQ0FBQyxRQUFxQjtRQUM1QyxJQUFJLFlBQVksR0FBUSxRQUFRLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakUsT0FBTyxZQUFZLElBQUksWUFBWSxLQUFLLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ2hHLFlBQVksR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxZQUFZLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBRVMscUJBQXFCLENBQUMsZ0JBQXdCLEVBQUUsV0FBd0IsRUFBRSxhQUEwQjtRQUM1RyxNQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRS9ELElBQUksZ0JBQWdCLEtBQUssS0FBSyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN6RixPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUNELElBQUksZ0JBQWdCLEtBQUssUUFBUSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDaEgsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksZ0JBQWdCLEtBQUssTUFBTSxJQUFJLGtCQUFrQixDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUMxRixPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUNELElBQUksZ0JBQWdCLEtBQUssT0FBTyxJQUFJLGtCQUFrQixDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDNUcsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQzs7NEVBek1VLGNBQWM7bURBQWQsY0FBYzs7Ozs7OztRQWhCbkIsaUNBT0k7UUFBQSxzQkFBZ0Q7UUFDaEQsNkJBQTRDO1FBQUEsWUFBVztRQUFBLGlCQUFLO1FBQzVELDhCQUNJO1FBQUEsa0JBQVk7UUFDWiw4QkFBa0M7UUFBQSxZQUFhO1FBQUEsaUJBQU07UUFDekQsaUJBQU07UUFDVixpQkFBTTs7UUFaRixpRUFBd0M7UUFDeEMscUNBQXdCLHlCQUFBO1FBRXhCLHFDQUF3QjtRQUduQixlQUFvQztRQUFwQywrREFBb0M7UUFDZixlQUFpQjtRQUFqQixtQ0FBaUI7UUFBQyxlQUFXO1FBQVgsK0JBQVc7UUFHakIsZUFBYTtRQUFiLGlDQUFhOztrREFLbEQsY0FBYztjQW5CMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0tBZVA7YUFDSjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBR0wsU0FBUzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BPdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9Qb3BPdmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9wb3Zlci1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjcG9wb3ZlckRpdlxuICAgICAgICAgICAgY2xhc3M9XCJwb3BvdmVyIHt7IGVmZmVjdGl2ZVBsYWNlbWVudCB9fVwiXG4gICAgICAgICAgICBbc3R5bGUudG9wXT1cInRvcCArICdweCdcIlxuICAgICAgICAgICAgW3N0eWxlLmxlZnRdPVwibGVmdCArICdweCdcIlxuICAgICAgICAgICAgW2NsYXNzLmZhZGVdPVwiYW5pbWF0aW9uXCJcbiAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogYmxvY2tcIlxuICAgICAgICAgICAgcm9sZT1cInBvcG92ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyB7e2VmZmVjdGl2ZUFsaWdubWVudH19XCI+PC9kaXY+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCIgW2hpZGRlbl09XCIhdGl0bGVcIj57eyB0aXRsZSB9fTwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnQtdGV4dFwiPnt7IGNvbnRlbnQgfX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BPdmVyQ29udGVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBjb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgncG9wb3ZlckRpdicpXG4gIHBvcG92ZXJEaXY6IEVsZW1lbnRSZWY7XG4gIHBvcG92ZXI6IFBvcE92ZXJEaXJlY3RpdmU7XG4gIG9uQ2xvc2VGcm9tT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdG9wOiBudW1iZXIgPSAtMTAwMDA7XG4gIGxlZnQ6IG51bWJlciA9IC0xMDAwMDtcbiAgZGlzcGxheVR5cGU6IHN0cmluZyA9ICdub25lJztcbiAgZWZmZWN0aXZlUGxhY2VtZW50OiBzdHJpbmc7XG4gIGVmZmVjdGl2ZUFsaWdubWVudDogc3RyaW5nO1xuICBpc0hpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50OiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdygpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0hpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXIgfHwgIXRoaXMucG9wb3Zlci5nZXRFbGVtZW50KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwID0gdGhpcy5wb3NpdGlvbkVsZW1lbnRzKHRoaXMucG9wb3Zlci5nZXRFbGVtZW50KCksIHRoaXMucG9wb3ZlckRpdi5uYXRpdmVFbGVtZW50LCB0aGlzLnBsYWNlbWVudCk7XG4gICAgdGhpcy5kaXNwbGF5VHlwZSA9ICdibG9jayc7XG4gICAgdGhpcy50b3AgPSBwLnRvcDtcbiAgICB0aGlzLmxlZnQgPSBwLmxlZnQ7XG4gICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvcCA9IC0xMDAwMDtcbiAgICB0aGlzLmxlZnQgPSAtMTAwMDA7XG4gICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wb3BvdmVyLmhpZGUoKTtcbiAgfVxuXG4gIGhpZGVGcm9tUG9wb3ZlcigpIHtcbiAgICB0aGlzLnRvcCA9IC0xMDAwMDtcbiAgICB0aGlzLmxlZnQgPSAtMTAwMDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWw6IEhUTUxFbGVtZW50LFxuICAgIHRhcmdldEVsOiBIVE1MRWxlbWVudCxcbiAgICBwb3NpdGlvblN0cjogc3RyaW5nLFxuICAgIGFwcGVuZFRvQm9keSA9IGZhbHNlLFxuICApOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgcG9zaXRpb25TdHJQYXJ0cyA9IHBvc2l0aW9uU3RyLnNwbGl0KCctJyk7XG4gICAgY29uc3QgbWFpblNpZGUgPSAodGhpcy5lZmZlY3RpdmVQbGFjZW1lbnQgPSB0aGlzLmdldEVmZmVjdGl2ZVBsYWNlbWVudChwb3NpdGlvblN0clBhcnRzWzBdIHx8ICdyaWdodCcsIGhvc3RFbCwgdGFyZ2V0RWwpKTtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9ICh0aGlzLmVmZmVjdGl2ZUFsaWdubWVudCA9IHBvc2l0aW9uU3RyUGFydHNbMV0gfHwgJ2NlbnRlcicpO1xuICAgIGNvbnN0IGhvc3RFbFBvcyA9IGFwcGVuZFRvQm9keSA/IHRoaXMub2Zmc2V0KGhvc3RFbCkgOiB0aGlzLnBvc2l0aW9uKGhvc3RFbCk7XG4gICAgY29uc3QgdGFyZ2V0RWxXaWR0aCA9IHRhcmdldEVsLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHRhcmdldEVsSGVpZ2h0ID0gdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3Qgc2hpZnRXaWR0aDogYW55ID0ge1xuICAgICAgY2VudGVyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIChob3N0RWxQb3Mud2lkdGggLSB0YXJnZXRFbFdpZHRoKSAvIDI7XG4gICAgICB9LFxuICAgICAgcmlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0O1xuICAgICAgfSxcbiAgICAgIGxlZnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgKGhvc3RFbFBvcy53aWR0aCAtIHRhcmdldEVsV2lkdGgpO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hpZnRIZWlnaHQ6IGFueSA9IHtcbiAgICAgIGNlbnRlcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcCArIChob3N0RWxQb3MuaGVpZ2h0IC0gdGFyZ2V0RWxIZWlnaHQpIC8gMjtcbiAgICAgIH0sXG4gICAgICBib3R0b20oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3A7XG4gICAgICB9LFxuICAgICAgdG9wKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgKGhvc3RFbFBvcy5oZWlnaHQgLSB0YXJnZXRFbEhlaWdodCk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBsZXQgdGFyZ2V0RWxQb3M6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9O1xuICAgIHN3aXRjaCAobWFpblNpZGUpIHtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgICBsZWZ0OiBob3N0RWxQb3MubGVmdCArIGhvc3RFbFBvcy53aWR0aCxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICB0b3A6IHNoaWZ0SGVpZ2h0W29yaWVudGF0aW9uXSgpLFxuICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0IC0gdGFyZ2V0RWxXaWR0aCxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogaG9zdEVsUG9zLnRvcCArIGhvc3RFbFBvcy5oZWlnaHQsXG4gICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogaG9zdEVsUG9zLnRvcCAtIHRhcmdldEVsSGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IHNoaWZ0V2lkdGhbb3JpZW50YXRpb25dKCksXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRFbFBvcztcbiAgfVxuXG4gIHByb3RlY3RlZCBwb3NpdGlvbihuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGxldCBvZmZzZXRQYXJlbnRCQ1IgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICAgIGNvbnN0IGVsQkNSID0gdGhpcy5vZmZzZXQobmF0aXZlRWwpO1xuICAgIGNvbnN0IG9mZnNldFBhcmVudEVsID0gdGhpcy5wYXJlbnRPZmZzZXRFbChuYXRpdmVFbCk7XG4gICAgaWYgKG9mZnNldFBhcmVudEVsICE9PSB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIG9mZnNldFBhcmVudEJDUiA9IHRoaXMub2Zmc2V0KG9mZnNldFBhcmVudEVsKTtcbiAgICAgIG9mZnNldFBhcmVudEJDUi50b3AgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50VG9wIC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsVG9wO1xuICAgICAgb2Zmc2V0UGFyZW50QkNSLmxlZnQgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50TGVmdCAtIG9mZnNldFBhcmVudEVsLnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gbmF0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgdG9wOiBlbEJDUi50b3AgLSBvZmZzZXRQYXJlbnRCQ1IudG9wLFxuICAgICAgbGVmdDogZWxCQ1IubGVmdCAtIG9mZnNldFBhcmVudEJDUi5sZWZ0LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb2Zmc2V0KG5hdGl2ZUVsOiBhbnkpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5hdGl2ZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIHx8IG5hdGl2ZUVsLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IHx8IG5hdGl2ZUVsLm9mZnNldEhlaWdodCxcbiAgICAgIHRvcDogYm91bmRpbmdDbGllbnRSZWN0LnRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApLFxuICAgICAgbGVmdDogYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdHlsZShuYXRpdmVFbDogSFRNTEVsZW1lbnQsIGNzc1Byb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKChuYXRpdmVFbCBhcyBhbnkpLmN1cnJlbnRTdHlsZSkge1xuICAgICAgcmV0dXJuIChuYXRpdmVFbCBhcyBhbnkpLmN1cnJlbnRTdHlsZVtjc3NQcm9wXTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgIHJldHVybiAod2luZG93LmdldENvbXB1dGVkU3R5bGUgYXMgYW55KShuYXRpdmVFbClbY3NzUHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIChuYXRpdmVFbC5zdHlsZSBhcyBhbnkpW2Nzc1Byb3BdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzU3RhdGljUG9zaXRpb25lZChuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0U3R5bGUobmF0aXZlRWwsICdwb3NpdGlvbicpIHx8ICdzdGF0aWMnKSA9PT0gJ3N0YXRpYyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyZW50T2Zmc2V0RWwobmF0aXZlRWw6IEhUTUxFbGVtZW50KTogYW55IHtcbiAgICBsZXQgb2Zmc2V0UGFyZW50OiBhbnkgPSBuYXRpdmVFbC5vZmZzZXRQYXJlbnQgfHwgd2luZG93LmRvY3VtZW50O1xuICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50ICE9PSB3aW5kb3cuZG9jdW1lbnQgJiYgdGhpcy5pc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RWZmZWN0aXZlUGxhY2VtZW50KGRlc2lyZWRQbGFjZW1lbnQ6IHN0cmluZywgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgY29uc3QgaG9zdEVsQm91bmRpbmdSZWN0ID0gaG9zdEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAoZGVzaXJlZFBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgaG9zdEVsQm91bmRpbmdSZWN0LnRvcCAtIHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0IDwgMCkge1xuICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgIH1cbiAgICBpZiAoZGVzaXJlZFBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgaG9zdEVsQm91bmRpbmdSZWN0LmJvdHRvbSArIHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICByZXR1cm4gJ3RvcCc7XG4gICAgfVxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAnbGVmdCcgJiYgaG9zdEVsQm91bmRpbmdSZWN0LmxlZnQgLSB0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoIDwgMCkge1xuICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgfVxuICAgIGlmIChkZXNpcmVkUGxhY2VtZW50ID09PSAncmlnaHQnICYmIGhvc3RFbEJvdW5kaW5nUmVjdC5yaWdodCArIHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzaXJlZFBsYWNlbWVudDtcbiAgfVxufVxuIl19