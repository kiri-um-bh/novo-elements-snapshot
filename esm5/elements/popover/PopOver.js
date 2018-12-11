/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            popover.onCloseFromOutside.subscribe(function () { return _this.hide(); });
            if (this.popoverDismissTimeout > 0) {
                setTimeout(function () { return _this.hide(); }, this.popoverDismissTimeout);
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
            popover.onCloseFromOutside.subscribe(function () { return _this.hide(); });
            if (this.popoverDismissTimeout > 0) {
                setTimeout(function () { return _this.hide(); }, this.popoverDismissTimeout);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3Zlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wb3BvdmVyL1BvcE92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUdULGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRDtJQVFFLDBCQUFzQixnQkFBa0MsRUFBWSxRQUFrQztRQUFoRixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFKNUYscUJBQWdCLEdBQUcsY0FBYyxDQUFDO1FBbUI1QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQywwQkFBcUIsR0FBVyxDQUFDLENBQUM7UUFHbEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRS9DLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztJQXRCeUQsQ0FBQztJQXdCMUcsc0RBQXNEO0lBQ3RELGtCQUFrQjtJQUNsQixzREFBc0Q7Ozs7Ozs7SUFFdEQsNENBQWlCOzs7Ozs7O0lBRGpCO1FBRUUsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDL0MsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFJRCxzQ0FBVzs7O0lBRlg7UUFHRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2hELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFJRCxzQ0FBVzs7O0lBRlg7UUFHRSxJQUFJLENBQUMsSUFB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LFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCOzs7O2dCQVpDLGdCQUFnQjtnQkFDaEIsd0JBQXdCOzs7MEJBbUJ2QixLQUFLLFNBQUMsU0FBUztrQ0FFZixLQUFLO2dDQUVMLEtBQUs7bUNBRUwsS0FBSzttQ0FFTCxLQUFLOytCQUVMLEtBQUs7aUNBRUwsS0FBSzt3Q0FFTCxLQUFLOzBCQUdMLE1BQU07MkJBRU4sTUFBTTtvQ0FNTixZQUFZLFNBQUMsT0FBTzs4QkFRcEIsWUFBWSxTQUFDLFNBQVMsY0FDdEIsWUFBWSxTQUFDLFlBQVk7OEJBUXpCLFlBQVksU0FBQyxVQUFVLGNBQ3ZCLFlBQVksU0FBQyxZQUFZOztJQXNHNUIsdUJBQUM7Q0FBQSxBQTNKRCxJQTJKQztTQXhKWSxnQkFBZ0I7Ozs7OztJQUMzQiw0Q0FBNEM7Ozs7O0lBQzVDLG1DQUFnRDs7Ozs7SUFDaEQsbUNBQTJCOztJQUkzQixtQ0FDaUM7O0lBQ2pDLDJDQUN5Qjs7SUFDekIseUNBQ3VCOztJQUN2Qiw0Q0FDMEI7O0lBQzFCLDRDQUN5Qjs7SUFDekIsd0NBQ3FCOztJQUNyQiwwQ0FDZ0M7O0lBQ2hDLGlEQUNrQzs7SUFFbEMsbUNBQytDOztJQUMvQyxvQ0FDZ0Q7Ozs7O0lBdEJwQyw0Q0FBNEM7Ozs7O0lBQUUsb0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBTaW1wbGVDaGFuZ2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wT3ZlckNvbnRlbnQgfSBmcm9tICcuL1BvcE92ZXJDb250ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3BvcG92ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgUG9wT3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByb3RlY3RlZCBQb3BvdmVyQ29tcG9uZW50ID0gUG9wT3ZlckNvbnRlbnQ7XG4gIHByb3RlY3RlZCBwb3BvdmVyOiBDb21wb25lbnRSZWY8UG9wT3ZlckNvbnRlbnQ+O1xuICBwcm90ZWN0ZWQgdmlzaWJsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJvdGVjdGVkIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHt9XG5cbiAgQElucHV0KCdwb3BvdmVyJylcbiAgY29udGVudDogc3RyaW5nIHwgUG9wT3ZlckNvbnRlbnQ7XG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJEaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcG9wb3ZlckFsd2F5czogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcG9wb3ZlckFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcG9wb3ZlclBsYWNlbWVudDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwb3BvdmVyVGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcG9wb3Zlck9uSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcG9wb3ZlckRpc21pc3NUaW1lb3V0OiBudW1iZXIgPSAwO1xuXG4gIEBPdXRwdXQoKVxuICBvblNob3duID0gbmV3IEV2ZW50RW1pdHRlcjxQb3BPdmVyRGlyZWN0aXZlPigpO1xuICBAT3V0cHV0KClcbiAgb25IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvcE92ZXJEaXJlY3RpdmU+KCk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEV2ZW50IGxpc3RlbmVyc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBzaG93T3JIaWRlT25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3BvdmVyT25Ib3ZlciB8fCB0aGlzLnBvcG92ZXJEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNpbicpXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBzaG93T25Ib3ZlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucG9wb3Zlck9uSG92ZXIgfHwgdGhpcy5wb3BvdmVyRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcpXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBoaWRlT25Ib3ZlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucG9wb3Zlck9uSG92ZXIgfHwgdGhpcy5wb3BvdmVyRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKGNoYW5nZXNbJ3BvcG92ZXJEaXNhYmxlZCddKSB7XG4gICAgICBpZiAoY2hhbmdlc1sncG9wb3ZlckRpc2FibGVkJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlc1sncG9wb3ZlckFsd2F5cyddKSB7XG4gICAgICBpZiAoY2hhbmdlc1sncG9wb3ZlckFsd2F5cyddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5Qb3BvdmVyQ29tcG9uZW50KTtcbiAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wb3BvdmVyID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICAgIGNvbnN0IHBvcG92ZXIgPSB0aGlzLnBvcG92ZXIuaW5zdGFuY2UgYXMgUG9wT3ZlckNvbnRlbnQ7XG4gICAgICBwb3BvdmVyLnBvcG92ZXIgPSB0aGlzO1xuICAgICAgcG9wb3Zlci5jb250ZW50ID0gdGhpcy5jb250ZW50IGFzIHN0cmluZztcbiAgICAgIGlmICh0aGlzLnBvcG92ZXJQbGFjZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb3BvdmVyLnBsYWNlbWVudCA9IHRoaXMucG9wb3ZlclBsYWNlbWVudDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBvcG92ZXJBbmltYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb3BvdmVyLmFuaW1hdGlvbiA9IHRoaXMucG9wb3ZlckFuaW1hdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBvcG92ZXJUaXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcG92ZXIudGl0bGUgPSB0aGlzLnBvcG92ZXJUaXRsZTtcbiAgICAgIH1cblxuICAgICAgcG9wb3Zlci5vbkNsb3NlRnJvbU91dHNpZGUuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICAgIGlmICh0aGlzLnBvcG92ZXJEaXNtaXNzVGltZW91dCA+IDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGUoKSwgdGhpcy5wb3BvdmVyRGlzbWlzc1RpbWVvdXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwb3BvdmVyID0gdGhpcy5jb250ZW50IGFzIFBvcE92ZXJDb250ZW50O1xuICAgICAgcG9wb3Zlci5wb3BvdmVyID0gdGhpcztcbiAgICAgIGlmICh0aGlzLnBvcG92ZXJQbGFjZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb3BvdmVyLnBsYWNlbWVudCA9IHRoaXMucG9wb3ZlclBsYWNlbWVudDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBvcG92ZXJBbmltYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb3BvdmVyLmFuaW1hdGlvbiA9IHRoaXMucG9wb3ZlckFuaW1hdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBvcG92ZXJUaXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcG92ZXIudGl0bGUgPSB0aGlzLnBvcG92ZXJUaXRsZTtcbiAgICAgIH1cblxuICAgICAgcG9wb3Zlci5vbkNsb3NlRnJvbU91dHNpZGUuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICAgIGlmICh0aGlzLnBvcG92ZXJEaXNtaXNzVGltZW91dCA+IDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGUoKSwgdGhpcy5wb3BvdmVyRGlzbWlzc1RpbWVvdXQpO1xuICAgICAgfVxuICAgICAgcG9wb3Zlci5zaG93KCk7XG4gICAgfVxuXG4gICAgdGhpcy5vblNob3duLmVtaXQodGhpcyk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucG9wb3Zlcikge1xuICAgICAgdGhpcy5wb3BvdmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZW50IGluc3RhbmNlb2YgUG9wT3ZlckNvbnRlbnQpIHtcbiAgICAgICh0aGlzLmNvbnRlbnQgYXMgUG9wT3ZlckNvbnRlbnQpLmhpZGVGcm9tUG9wb3ZlcigpO1xuICAgIH1cblxuICAgIHRoaXMub25IaWRkZW4uZW1pdCh0aGlzKTtcbiAgfVxuXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==