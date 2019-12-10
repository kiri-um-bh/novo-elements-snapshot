/**
 * @fileoverview added by tsickle
 * Generated from: elements/popover/PopOver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Directive, ViewContainerRef, ComponentFactoryResolver, Input, Output, EventEmitter, HostListener, } from '@angular/core';
import { PopOverContent } from './PopOverContent';
var PopOverDirective = /** @class */ (function () {
    function PopOverDirective(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.PopoverComponent = PopOverContent;
        this.popoverOnHover = false;
        this.popoverDismissTimeout = 0;
        this.onShown = new EventEmitter();
        this.onHidden = new EventEmitter();
    }
    // ---------------------------------------------------
    // Event listeners
    // ---------------------------------------------------
    // ---------------------------------------------------
    // Event listeners
    // ---------------------------------------------------
    /**
     * @return {?}
     */
    PopOverDirective.prototype.showOrHideOnClick = 
    // ---------------------------------------------------
    // Event listeners
    // ---------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        if (this.popoverOnHover || this.popoverDisabled) {
            return;
        }
        this.toggle();
    };
    /**
     * @return {?}
     */
    PopOverDirective.prototype.showOnHover = /**
     * @return {?}
     */
    function () {
        if (!this.popoverOnHover || this.popoverDisabled) {
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    PopOverDirective.prototype.hideOnHover = /**
     * @return {?}
     */
    function () {
        if (!this.popoverOnHover || this.popoverDisabled) {
            return;
        }
        this.hide();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PopOverDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['popoverDisabled']) {
            if (changes['popoverDisabled'].currentValue) {
                this.hide();
            }
        }
        if (changes['popoverAlways']) {
            if (changes['popoverAlways'].currentValue) {
                this.show();
            }
        }
    };
    /**
     * @return {?}
     */
    PopOverDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.visible) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    PopOverDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.visible) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(this.PopoverComponent);
            if (!this.visible) {
                return;
            }
            this.popover = this.viewContainerRef.createComponent(factory);
            /** @type {?} */
            var popover = (/** @type {?} */ (this.popover.instance));
            popover.popover = this;
            popover.content = (/** @type {?} */ (this.content));
            if (this.popoverPlacement !== undefined) {
                popover.placement = this.popoverPlacement;
            }
            if (this.popoverAnimation !== undefined) {
                popover.animation = this.popoverAnimation;
            }
            if (this.popoverTitle !== undefined) {
                popover.title = this.popoverTitle;
            }
            popover.onCloseFromOutside.subscribe((/**
             * @return {?}
             */
            function () { return _this.hide(); }));
            if (this.popoverDismissTimeout > 0) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.hide(); }), this.popoverDismissTimeout);
            }
        }
        else {
            /** @type {?} */
            var popover = (/** @type {?} */ (this.content));
            popover.popover = this;
            if (this.popoverPlacement !== undefined) {
                popover.placement = this.popoverPlacement;
            }
            if (this.popoverAnimation !== undefined) {
                popover.animation = this.popoverAnimation;
            }
            if (this.popoverTitle !== undefined) {
                popover.title = this.popoverTitle;
            }
            popover.onCloseFromOutside.subscribe((/**
             * @return {?}
             */
            function () { return _this.hide(); }));
            if (this.popoverDismissTimeout > 0) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.hide(); }), this.popoverDismissTimeout);
            }
            popover.show();
        }
        this.onShown.emit(this);
    };
    /**
     * @return {?}
     */
    PopOverDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this.visible) {
            return;
        }
        this.visible = false;
        if (this.popover) {
            this.popover.destroy();
        }
        if (this.content instanceof PopOverContent) {
            ((/** @type {?} */ (this.content))).hideFromPopover();
        }
        this.onHidden.emit(this);
    };
    /**
     * @return {?}
     */
    PopOverDirective.prototype.getElement = /**
     * @return {?}
     */
    function () {
        return this.viewContainerRef.element.nativeElement;
    };
    PopOverDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[popover]',
                },] }
    ];
    /** @nocollapse */
    PopOverDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver }
    ]; };
    PopOverDirective.propDecorators = {
        content: [{ type: Input, args: ['popover',] }],
        popoverDisabled: [{ type: Input }],
        popoverAlways: [{ type: Input }],
        popoverAnimation: [{ type: Input }],
        popoverPlacement: [{ type: Input }],
        popoverTitle: [{ type: Input }],
        popoverOnHover: [{ type: Input }],
        popoverDismissTimeout: [{ type: Input }],
        onShown: [{ type: Output }],
        onHidden: [{ type: Output }],
        showOrHideOnClick: [{ type: HostListener, args: ['click',] }],
        showOnHover: [{ type: HostListener, args: ['focusin',] }, { type: HostListener, args: ['mouseenter',] }],
        hideOnHover: [{ type: HostListener, args: ['focusout',] }, { type: HostListener, args: ['mouseleave',] }]
    };
    return PopOverDirective;
}());
export { PopOverDirective };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PopOverDirective.prototype.PopoverComponent;
    /**
     * @type {?}
     * @protected
     */
    PopOverDirective.prototype.popover;
    /**
     * @type {?}
     * @protected
     */
    PopOverDirective.prototype.visible;
    /** @type {?} */
    PopOverDirective.prototype.content;
    /** @type {?} */
    PopOverDirective.prototype.popoverDisabled;
    /** @type {?} */
    PopOverDirective.prototype.popoverAlways;
    /** @type {?} */
    PopOverDirective.prototype.popoverAnimation;
    /** @type {?} */
    PopOverDirective.prototype.popoverPlacement;
    /** @type {?} */
    PopOverDirective.prototype.popoverTitle;
    /** @type {?} */
    PopOverDirective.prototype.popoverOnHover;
    /** @type {?} */
    PopOverDirective.prototype.popoverDismissTimeout;
    /** @type {?} */
    PopOverDirective.prototype.onShown;
    /** @type {?} */
    PopOverDirective.prototype.onHidden;
    /**
     * @type {?}
     * @protected
     */
    PopOverDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @protected
     */
    PopOverDirective.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3Zlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wb3BvdmVyL1BvcE92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFHVCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQ7SUFRRSwwQkFBc0IsZ0JBQWtDLEVBQVksUUFBa0M7UUFBaEYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFZLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBSjVGLHFCQUFnQixHQUFHLGNBQWMsQ0FBQztRQW1CNUMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFaEMsMEJBQXFCLEdBQVcsQ0FBQyxDQUFDO1FBR2xDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUUvQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUF0QnlELENBQUM7SUF3QjFHLHNEQUFzRDtJQUN0RCxrQkFBa0I7SUFDbEIsc0RBQXNEOzs7Ozs7O0lBRXRELDRDQUFpQjs7Ozs7OztJQURqQjtRQUVFLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQy9DLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBSUQsc0NBQVc7OztJQUZYO1FBR0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNoRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBSUQsc0NBQVc7OztJQUZYO1FBR0UsSUFBSSxDQUFDLElB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Z0JBMUpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7Ozs7Z0JBWkMsZ0JBQWdCO2dCQUNoQix3QkFBd0I7OzswQkFtQnZCLEtBQUssU0FBQyxTQUFTO2tDQUVmLEtBQUs7Z0NBRUwsS0FBSzttQ0FFTCxLQUFLO21DQUVMLEtBQUs7K0JBRUwsS0FBSztpQ0FFTCxLQUFLO3dDQUVMLEtBQUs7MEJBR0wsTUFBTTsyQkFFTixNQUFNO29DQU1OLFlBQVksU0FBQyxPQUFPOzhCQVFwQixZQUFZLFNBQUMsU0FBUyxjQUN0QixZQUFZLFNBQUMsWUFBWTs4QkFRekIsWUFBWSxTQUFDLFVBQVUsY0FDdkIsWUFBWSxTQUFDLFlBQVk7O0lBc0c1Qix1QkFBQztDQUFBLEFBM0pELElBMkpDO1NBeEpZLGdCQUFnQjs7Ozs7O0lBQzNCLDRDQUE0Qzs7Ozs7SUFDNUMsbUNBQWdEOzs7OztJQUNoRCxtQ0FBMkI7O0lBSTNCLG1DQUNpQzs7SUFDakMsMkNBQ3lCOztJQUN6Qix5Q0FDdUI7O0lBQ3ZCLDRDQUMwQjs7SUFDMUIsNENBQ3lCOztJQUN6Qix3Q0FDcUI7O0lBQ3JCLDBDQUNnQzs7SUFDaEMsaURBQ2tDOztJQUVsQyxtQ0FDK0M7O0lBQy9DLG9DQUNnRDs7Ozs7SUF0QnBDLDRDQUE0Qzs7Ozs7SUFBRSxvQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BPdmVyQ29udGVudCB9IGZyb20gJy4vUG9wT3ZlckNvbnRlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcG9wb3Zlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BPdmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJvdGVjdGVkIFBvcG92ZXJDb21wb25lbnQgPSBQb3BPdmVyQ29udGVudDtcbiAgcHJvdGVjdGVkIHBvcG92ZXI6IENvbXBvbmVudFJlZjxQb3BPdmVyQ29udGVudD47XG4gIHByb3RlY3RlZCB2aXNpYmxlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cblxuICBASW5wdXQoJ3BvcG92ZXInKVxuICBjb250ZW50OiBzdHJpbmcgfCBQb3BPdmVyQ29udGVudDtcbiAgQElucHV0KClcbiAgcG9wb3ZlckRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwb3BvdmVyQWx3YXlzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwb3BvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwb3BvdmVyUGxhY2VtZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwb3BvdmVyT25Ib3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwb3BvdmVyRGlzbWlzc1RpbWVvdXQ6IG51bWJlciA9IDA7XG5cbiAgQE91dHB1dCgpXG4gIG9uU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBvcE92ZXJEaXJlY3RpdmU+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9wT3ZlckRpcmVjdGl2ZT4oKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRXZlbnQgbGlzdGVuZXJzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHNob3dPckhpZGVPbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvcG92ZXJPbkhvdmVyIHx8IHRoaXMucG9wb3ZlckRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c2luJylcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIHNob3dPbkhvdmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyT25Ib3ZlciB8fCB0aGlzLnBvcG92ZXJEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JylcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIGhpZGVPbkhvdmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyT25Ib3ZlciB8fCB0aGlzLnBvcG92ZXJEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICBpZiAoY2hhbmdlc1sncG9wb3ZlckRpc2FibGVkJ10pIHtcbiAgICAgIGlmIChjaGFuZ2VzWydwb3BvdmVyRGlzYWJsZWQnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydwb3BvdmVyQWx3YXlzJ10pIHtcbiAgICAgIGlmIChjaGFuZ2VzWydwb3BvdmVyQWx3YXlzJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLlBvcG92ZXJDb21wb25lbnQpO1xuICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBvcG92ZXIgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgICAgY29uc3QgcG9wb3ZlciA9IHRoaXMucG9wb3Zlci5pbnN0YW5jZSBhcyBQb3BPdmVyQ29udGVudDtcbiAgICAgIHBvcG92ZXIucG9wb3ZlciA9IHRoaXM7XG4gICAgICBwb3BvdmVyLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgYXMgc3RyaW5nO1xuICAgICAgaWYgKHRoaXMucG9wb3ZlclBsYWNlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcG92ZXIucGxhY2VtZW50ID0gdGhpcy5wb3BvdmVyUGxhY2VtZW50O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9wb3ZlckFuaW1hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcG92ZXIuYW5pbWF0aW9uID0gdGhpcy5wb3BvdmVyQW5pbWF0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9wb3ZlclRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9wb3Zlci50aXRsZSA9IHRoaXMucG9wb3ZlclRpdGxlO1xuICAgICAgfVxuXG4gICAgICBwb3BvdmVyLm9uQ2xvc2VGcm9tT3V0c2lkZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgaWYgKHRoaXMucG9wb3ZlckRpc21pc3NUaW1lb3V0ID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSgpLCB0aGlzLnBvcG92ZXJEaXNtaXNzVGltZW91dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBvcG92ZXIgPSB0aGlzLmNvbnRlbnQgYXMgUG9wT3ZlckNvbnRlbnQ7XG4gICAgICBwb3BvdmVyLnBvcG92ZXIgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMucG9wb3ZlclBsYWNlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcG92ZXIucGxhY2VtZW50ID0gdGhpcy5wb3BvdmVyUGxhY2VtZW50O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9wb3ZlckFuaW1hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcG92ZXIuYW5pbWF0aW9uID0gdGhpcy5wb3BvdmVyQW5pbWF0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9wb3ZlclRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9wb3Zlci50aXRsZSA9IHRoaXMucG9wb3ZlclRpdGxlO1xuICAgICAgfVxuXG4gICAgICBwb3BvdmVyLm9uQ2xvc2VGcm9tT3V0c2lkZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgaWYgKHRoaXMucG9wb3ZlckRpc21pc3NUaW1lb3V0ID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSgpLCB0aGlzLnBvcG92ZXJEaXNtaXNzVGltZW91dCk7XG4gICAgICB9XG4gICAgICBwb3BvdmVyLnNob3coKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5wb3BvdmVyKSB7XG4gICAgICB0aGlzLnBvcG92ZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRlbnQgaW5zdGFuY2VvZiBQb3BPdmVyQ29udGVudCkge1xuICAgICAgKHRoaXMuY29udGVudCBhcyBQb3BPdmVyQ29udGVudCkuaGlkZUZyb21Qb3BvdmVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5vbkhpZGRlbi5lbWl0KHRoaXMpO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19