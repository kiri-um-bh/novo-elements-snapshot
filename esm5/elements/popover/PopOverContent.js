import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["popoverDiv"];
var _c1 = ["*"];
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
    PopOverContent.prototype.ngAfterViewInit = function () {
        this.show();
        this.cdr.detectChanges();
    };
    PopOverContent.prototype.toggle = function () {
        if (this.isHidden) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    PopOverContent.prototype.show = function () {
        if (!this.popover || !this.popover.getElement()) {
            return;
        }
        var p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.placement);
        this.displayType = 'block';
        this.top = p.top;
        this.left = p.left;
        this.isHidden = false;
    };
    PopOverContent.prototype.hide = function () {
        this.top = -10000;
        this.left = -10000;
        this.isHidden = true;
        this.popover.hide();
    };
    PopOverContent.prototype.hideFromPopover = function () {
        this.top = -10000;
        this.left = -10000;
    };
    PopOverContent.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var positionStrParts = positionStr.split('-');
        var mainSide = (this.effectivePlacement = this.getEffectivePlacement(positionStrParts[0] || 'right', hostEl, targetEl));
        var orientation = (this.effectiveAlignment = positionStrParts[1] || 'center');
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
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
    PopOverContent.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left,
        };
    };
    PopOverContent.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft),
        };
    };
    PopOverContent.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle) {
            return nativeEl.currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return window.getComputedStyle(nativeEl)[cssProp];
        }
        return nativeEl.style[cssProp];
    };
    PopOverContent.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    PopOverContent.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    PopOverContent.prototype.getEffectivePlacement = function (desiredPlacement, hostElement, targetElement) {
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
    return PopOverContent;
}());
export { PopOverContent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopOverContent, [{
        type: Component,
        args: [{
                selector: 'popover-content',
                template: "\n        <div #popoverDiv\n            class=\"popover {{ effectivePlacement }}\"\n            [style.top]=\"top + 'px'\"\n            [style.left]=\"left + 'px'\"\n            [class.fade]=\"animation\"\n            style=\"display: block\"\n            role=\"popover\">\n            <div class=\"arrow {{effectiveAlignment}}\"></div>\n            <h4 class=\"popover-title\" [hidden]=\"!title\">{{ title }}</h4>\n            <div class=\"popover-content\">\n                <ng-content></ng-content>\n                <div class=\"popover-content-text\">{{ content }}</div>\n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3ZlckNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcG9wb3Zlci9Qb3BPdmVyQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHeEg7SUF3Q0Usd0JBQXNCLE9BQW1CLEVBQVksR0FBc0I7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFZLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakIzRSxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBSTFCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFLMUIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxRQUFHLEdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDckIsU0FBSSxHQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQVcsTUFBTSxDQUFDO1FBRzdCLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFFcUQsQ0FBQztJQUVoRix3Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUMvQyxPQUFPO1NBQ1I7UUFFRCxJQUFNLENBQUMs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QUcsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUNoSCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxNQUFNLElBQUksa0JBQWtCLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQzFGLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxnQkFBZ0IsS0FBSyxPQUFPLElBQUksa0JBQWtCLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUM1RyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO2dGQXpNVSxjQUFjO3VEQUFkLGNBQWM7Ozs7Ozs7WUFoQm5CLGlDQU9JO1lBQUEsc0JBQWdEO1lBQ2hELDZCQUE0QztZQUFBLFlBQVc7WUFBQSxpQkFBSztZQUM1RCw4QkFDSTtZQUFBLGtCQUFZO1lBQ1osOEJBQWtDO1lBQUEsWUFBYTtZQUFBLGlCQUFNO1lBQ3pELGlCQUFNO1lBQ1YsaUJBQU07O1lBWkYsaUVBQXdDO1lBQ3hDLHFDQUF3Qix5QkFBQTtZQUV4QixxQ0FBd0I7WUFHbkIsZUFBb0M7WUFBcEMsK0RBQW9DO1lBQ2YsZUFBaUI7WUFBakIsbUNBQWlCO1lBQUMsZUFBVztZQUFYLCtCQUFXO1lBR2pCLGVBQWE7WUFBYixpQ0FBYTs7eUJBakIvRDtDQWdPQyxBQTdORCxJQTZOQztTQTFNWSxjQUFjO2tEQUFkLGNBQWM7Y0FuQjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsNG1CQWVQO2FBQ0o7O2tCQUVFLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUdMLFNBQVM7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wT3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vUG9wT3Zlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcG92ZXItY29udGVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgI3BvcG92ZXJEaXZcbiAgICAgICAgICAgIGNsYXNzPVwicG9wb3ZlciB7eyBlZmZlY3RpdmVQbGFjZW1lbnQgfX1cIlxuICAgICAgICAgICAgW3N0eWxlLnRvcF09XCJ0b3AgKyAncHgnXCJcbiAgICAgICAgICAgIFtzdHlsZS5sZWZ0XT1cImxlZnQgKyAncHgnXCJcbiAgICAgICAgICAgIFtjbGFzcy5mYWRlXT1cImFuaW1hdGlvblwiXG4gICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCJcbiAgICAgICAgICAgIHJvbGU9XCJwb3BvdmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyb3cge3tlZmZlY3RpdmVBbGlnbm1lbnR9fVwiPjwvZGl2PlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwicG9wb3Zlci10aXRsZVwiIFtoaWRkZW5dPVwiIXRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50LXRleHRcIj57eyBjb250ZW50IH19PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUG9wT3ZlckNvbnRlbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KClcbiAgY29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoJ3BvcG92ZXJEaXYnKVxuICBwb3BvdmVyRGl2OiBFbGVtZW50UmVmO1xuICBwb3BvdmVyOiBQb3BPdmVyRGlyZWN0aXZlO1xuICBvbkNsb3NlRnJvbU91dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHRvcDogbnVtYmVyID0gLTEwMDAwO1xuICBsZWZ0OiBudW1iZXIgPSAtMTAwMDA7XG4gIGRpc3BsYXlUeXBlOiBzdHJpbmcgPSAnbm9uZSc7XG4gIGVmZmVjdGl2ZVBsYWNlbWVudDogc3RyaW5nO1xuICBlZmZlY3RpdmVBbGlnbm1lbnQ6IHN0cmluZztcbiAgaXNIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudDogRWxlbWVudFJlZiwgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3coKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNIaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyIHx8ICF0aGlzLnBvcG92ZXIuZ2V0RWxlbWVudCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcCA9IHRoaXMucG9zaXRpb25FbGVtZW50cyh0aGlzLnBvcG92ZXIuZ2V0RWxlbWVudCgpLCB0aGlzLnBvcG92ZXJEaXYubmF0aXZlRWxlbWVudCwgdGhpcy5wbGFjZW1lbnQpO1xuICAgIHRoaXMuZGlzcGxheVR5cGUgPSAnYmxvY2snO1xuICAgIHRoaXMudG9wID0gcC50b3A7XG4gICAgdGhpcy5sZWZ0ID0gcC5sZWZ0O1xuICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy50b3AgPSAtMTAwMDA7XG4gICAgdGhpcy5sZWZ0ID0gLTEwMDAwO1xuICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMucG9wb3Zlci5oaWRlKCk7XG4gIH1cblxuICBoaWRlRnJvbVBvcG92ZXIoKSB7XG4gICAgdGhpcy50b3AgPSAtMTAwMDA7XG4gICAgdGhpcy5sZWZ0ID0gLTEwMDAwO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBvc2l0aW9uRWxlbWVudHMoXG4gICAgaG9zdEVsOiBIVE1MRWxlbWVudCxcbiAgICB0YXJnZXRFbDogSFRNTEVsZW1lbnQsXG4gICAgcG9zaXRpb25TdHI6IHN0cmluZyxcbiAgICBhcHBlbmRUb0JvZHkgPSBmYWxzZSxcbiAgKTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyUGFydHMgPSBwb3NpdGlvblN0ci5zcGxpdCgnLScpO1xuICAgIGNvbnN0IG1haW5TaWRlID0gKHRoaXMuZWZmZWN0aXZlUGxhY2VtZW50ID0gdGhpcy5nZXRFZmZlY3RpdmVQbGFjZW1lbnQocG9zaXRpb25TdHJQYXJ0c1swXSB8fCAncmlnaHQnLCBob3N0RWwsIHRhcmdldEVsKSk7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSAodGhpcy5lZmZlY3RpdmVBbGlnbm1lbnQgPSBwb3NpdGlvblN0clBhcnRzWzFdIHx8ICdjZW50ZXInKTtcbiAgICBjb25zdCBob3N0RWxQb3MgPSBhcHBlbmRUb0JvZHkgPyB0aGlzLm9mZnNldChob3N0RWwpIDogdGhpcy5wb3NpdGlvbihob3N0RWwpO1xuICAgIGNvbnN0IHRhcmdldEVsV2lkdGggPSB0YXJnZXRFbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCB0YXJnZXRFbEhlaWdodCA9IHRhcmdldEVsLm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IHNoaWZ0V2lkdGg6IGFueSA9IHtcbiAgICAgIGNlbnRlcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLmxlZnQgKyAoaG9zdEVsUG9zLndpZHRoIC0gdGFyZ2V0RWxXaWR0aCkgLyAyO1xuICAgICAgfSxcbiAgICAgIHJpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdDtcbiAgICAgIH0sXG4gICAgICBsZWZ0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIChob3N0RWxQb3Mud2lkdGggLSB0YXJnZXRFbFdpZHRoKTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IHNoaWZ0SGVpZ2h0OiBhbnkgPSB7XG4gICAgICBjZW50ZXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyAoaG9zdEVsUG9zLmhlaWdodCAtIHRhcmdldEVsSGVpZ2h0KSAvIDI7XG4gICAgICB9LFxuICAgICAgYm90dG9tKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wO1xuICAgICAgfSxcbiAgICAgIHRvcCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcCArIChob3N0RWxQb3MuaGVpZ2h0IC0gdGFyZ2V0RWxIZWlnaHQpO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgbGV0IHRhcmdldEVsUG9zOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfTtcbiAgICBzd2l0Y2ggKG1haW5TaWRlKSB7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbb3JpZW50YXRpb25dKCksXG4gICAgICAgICAgbGVmdDogaG9zdEVsUG9zLmxlZnQgKyBob3N0RWxQb3Mud2lkdGgsXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtvcmllbnRhdGlvbl0oKSxcbiAgICAgICAgICBsZWZ0OiBob3N0RWxQb3MubGVmdCAtIHRhcmdldEVsV2lkdGgsXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICB0b3A6IGhvc3RFbFBvcy50b3AgKyBob3N0RWxQb3MuaGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IHNoaWZ0V2lkdGhbb3JpZW50YXRpb25dKCksXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICB0b3A6IGhvc3RFbFBvcy50b3AgLSB0YXJnZXRFbEhlaWdodCxcbiAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW29yaWVudGF0aW9uXSgpLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0RWxQb3M7XG4gIH1cblxuICBwcm90ZWN0ZWQgcG9zaXRpb24obmF0aXZlRWw6IEhUTUxFbGVtZW50KTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcbiAgICBsZXQgb2Zmc2V0UGFyZW50QkNSID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgICBjb25zdCBlbEJDUiA9IHRoaXMub2Zmc2V0KG5hdGl2ZUVsKTtcbiAgICBjb25zdCBvZmZzZXRQYXJlbnRFbCA9IHRoaXMucGFyZW50T2Zmc2V0RWwobmF0aXZlRWwpO1xuICAgIGlmIChvZmZzZXRQYXJlbnRFbCAhPT0gd2luZG93LmRvY3VtZW50KSB7XG4gICAgICBvZmZzZXRQYXJlbnRCQ1IgPSB0aGlzLm9mZnNldChvZmZzZXRQYXJlbnRFbCk7XG4gICAgICBvZmZzZXRQYXJlbnRCQ1IudG9wICs9IG9mZnNldFBhcmVudEVsLmNsaWVudFRvcCAtIG9mZnNldFBhcmVudEVsLnNjcm9sbFRvcDtcbiAgICAgIG9mZnNldFBhcmVudEJDUi5sZWZ0ICs9IG9mZnNldFBhcmVudEVsLmNsaWVudExlZnQgLSBvZmZzZXRQYXJlbnRFbC5zY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5hdGl2ZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIHx8IG5hdGl2ZUVsLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IHx8IG5hdGl2ZUVsLm9mZnNldEhlaWdodCxcbiAgICAgIHRvcDogZWxCQ1IudG9wIC0gb2Zmc2V0UGFyZW50QkNSLnRvcCxcbiAgICAgIGxlZnQ6IGVsQkNSLmxlZnQgLSBvZmZzZXRQYXJlbnRCQ1IubGVmdCxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG9mZnNldChuYXRpdmVFbDogYW55KTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSBuYXRpdmVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCB8fCBuYXRpdmVFbC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBuYXRpdmVFbC5vZmZzZXRIZWlnaHQsXG4gICAgICB0b3A6IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSxcbiAgICAgIGxlZnQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgKHdpbmRvdy5wYWdlWE9mZnNldCB8fCB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U3R5bGUobmF0aXZlRWw6IEhUTUxFbGVtZW50LCBjc3NQcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICgobmF0aXZlRWwgYXMgYW55KS5jdXJyZW50U3R5bGUpIHtcbiAgICAgIHJldHVybiAobmF0aXZlRWwgYXMgYW55KS5jdXJyZW50U3R5bGVbY3NzUHJvcF07XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgICByZXR1cm4gKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlIGFzIGFueSkobmF0aXZlRWwpW2Nzc1Byb3BdO1xuICAgIH1cblxuICAgIHJldHVybiAobmF0aXZlRWwuc3R5bGUgYXMgYW55KVtjc3NQcm9wXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc1N0YXRpY1Bvc2l0aW9uZWQobmF0aXZlRWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLmdldFN0eWxlKG5hdGl2ZUVsLCAncG9zaXRpb24nKSB8fCAnc3RhdGljJykgPT09ICdzdGF0aWMnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBhcmVudE9mZnNldEVsKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IGFueSB7XG4gICAgbGV0IG9mZnNldFBhcmVudDogYW55ID0gbmF0aXZlRWwub2Zmc2V0UGFyZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcbiAgICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gd2luZG93LmRvY3VtZW50ICYmIHRoaXMuaXNTdGF0aWNQb3NpdGlvbmVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgd2luZG93LmRvY3VtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVmZmVjdGl2ZVBsYWNlbWVudChkZXNpcmVkUGxhY2VtZW50OiBzdHJpbmcsIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhvc3RFbEJvdW5kaW5nUmVjdCA9IGhvc3RFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKGRlc2lyZWRQbGFjZW1lbnQgPT09ICd0b3AnICYmIGhvc3RFbEJvdW5kaW5nUmVjdC50b3AgLSB0YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodCA8IDApIHtcbiAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICB9XG4gICAgaWYgKGRlc2lyZWRQbGFjZW1lbnQgPT09ICdib3R0b20nICYmIGhvc3RFbEJvdW5kaW5nUmVjdC5ib3R0b20gKyB0YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgcmV0dXJuICd0b3AnO1xuICAgIH1cbiAgICBpZiAoZGVzaXJlZFBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIGhvc3RFbEJvdW5kaW5nUmVjdC5sZWZ0IC0gdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aCA8IDApIHtcbiAgICAgIHJldHVybiAncmlnaHQnO1xuICAgIH1cbiAgICBpZiAoZGVzaXJlZFBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBob3N0RWxCb3VuZGluZ1JlY3QucmlnaHQgKyB0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgIHJldHVybiAnbGVmdCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2lyZWRQbGFjZW1lbnQ7XG4gIH1cbn1cbiJdfQ==