/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Directive, ViewContainerRef, ComponentFactoryResolver, Input, Output, EventEmitter, HostListener, } from '@angular/core';
import { PopOverContent } from './PopOverContent';
export class PopOverDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} resolver
     */
    constructor(viewContainerRef, resolver) {
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
    /**
     * @return {?}
     */
    showOrHideOnClick() {
        if (this.popoverOnHover || this.popoverDisabled) {
            return;
        }
        this.toggle();
    }
    /**
     * @return {?}
     */
    showOnHover() {
        if (!this.popoverOnHover || this.popoverDisabled) {
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    hideOnHover() {
        if (!this.popoverOnHover || this.popoverDisabled) {
            return;
        }
        this.hide();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.visible) {
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
        if (this.visible) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
            /** @type {?} */
            const factory = this.resolver.resolveComponentFactory(this.PopoverComponent);
            if (!this.visible) {
                return;
            }
            this.popover = this.viewContainerRef.createComponent(factory);
            /** @type {?} */
            const popover = (/** @type {?} */ (this.popover.instance));
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
            () => this.hide()));
            if (this.popoverDismissTimeout > 0) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.hide()), this.popoverDismissTimeout);
            }
        }
        else {
            /** @type {?} */
            const popover = (/** @type {?} */ (this.content));
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
            () => this.hide()));
            if (this.popoverDismissTimeout > 0) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.hide()), this.popoverDismissTimeout);
            }
            popover.show();
        }
        this.onShown.emit(this);
    }
    /**
     * @return {?}
     */
    hide() {
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
    }
    /**
     * @return {?}
     */
    getElement() {
        return this.viewContainerRef.element.nativeElement;
    }
}
PopOverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[popover]',
            },] }
];
/** @nocollapse */
PopOverDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3Zlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wb3BvdmVyL1BvcE92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUdULGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUtsRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUszQixZQUFzQixnQkFBa0MsRUFBWSxRQUFrQztRQUFoRixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFKNUYscUJBQWdCLEdBQUcsY0FBYyxDQUFDO1FBbUI1QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQywwQkFBcUIsR0FBVyxDQUFDLENBQUM7UUFHbEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRS9DLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztJQXRCeUQsQ0FBQzs7Ozs7OztJQTRCMUcsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDL0MsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFJRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNoRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBSUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDaEQsT0FB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QUVMLEtBQUs7K0JBRUwsS0FBSzsyQkFFTCxLQUFLOzZCQUVMLEtBQUs7b0NBRUwsS0FBSztzQkFHTCxNQUFNO3VCQUVOLE1BQU07Z0NBTU4sWUFBWSxTQUFDLE9BQU87MEJBUXBCLFlBQVksU0FBQyxTQUFTLGNBQ3RCLFlBQVksU0FBQyxZQUFZOzBCQVF6QixZQUFZLFNBQUMsVUFBVSxjQUN2QixZQUFZLFNBQUMsWUFBWTs7Ozs7OztJQWpEMUIsNENBQTRDOzs7OztJQUM1QyxtQ0FBZ0Q7Ozs7O0lBQ2hELG1DQUEyQjs7SUFJM0IsbUNBQ2lDOztJQUNqQywyQ0FDeUI7O0lBQ3pCLHlDQUN1Qjs7SUFDdkIsNENBQzBCOztJQUMxQiw0Q0FDeUI7O0lBQ3pCLHdDQUNxQjs7SUFDckIsMENBQ2dDOztJQUNoQyxpREFDa0M7O0lBRWxDLG1DQUMrQzs7SUFDL0Msb0NBQ2dEOzs7OztJQXRCcEMsNENBQTRDOzs7OztJQUFFLG9DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgU2ltcGxlQ2hhbmdlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcE92ZXJDb250ZW50IH0gZnJvbSAnLi9Qb3BPdmVyQ29udGVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twb3BvdmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFBvcE92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcm90ZWN0ZWQgUG9wb3ZlckNvbXBvbmVudCA9IFBvcE92ZXJDb250ZW50O1xuICBwcm90ZWN0ZWQgcG9wb3ZlcjogQ29tcG9uZW50UmVmPFBvcE92ZXJDb250ZW50PjtcbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIHByb3RlY3RlZCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxuXG4gIEBJbnB1dCgncG9wb3ZlcicpXG4gIGNvbnRlbnQ6IHN0cmluZyB8IFBvcE92ZXJDb250ZW50O1xuICBASW5wdXQoKVxuICBwb3BvdmVyRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJBbHdheXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJBbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJQbGFjZW1lbnQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgcG9wb3ZlclRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJPbkhvdmVyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJEaXNtaXNzVGltZW91dDogbnVtYmVyID0gMDtcblxuICBAT3V0cHV0KClcbiAgb25TaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8UG9wT3ZlckRpcmVjdGl2ZT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uSGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjxQb3BPdmVyRGlyZWN0aXZlPigpO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBFdmVudCBsaXN0ZW5lcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgc2hvd09ySGlkZU9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wb3Zlck9uSG92ZXIgfHwgdGhpcy5wb3BvdmVyRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzaW4nKVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgc2hvd09uSG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXJPbkhvdmVyIHx8IHRoaXMucG9wb3ZlckRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgaGlkZU9uSG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXJPbkhvdmVyIHx8IHRoaXMucG9wb3ZlckRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgIGlmIChjaGFuZ2VzWydwb3BvdmVyRGlzYWJsZWQnXSkge1xuICAgICAgaWYgKGNoYW5nZXNbJ3BvcG92ZXJEaXNhYmxlZCddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3BvcG92ZXJBbHdheXMnXSkge1xuICAgICAgaWYgKGNoYW5nZXNbJ3BvcG92ZXJBbHdheXMnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIHRoaXMuY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuUG9wb3ZlckNvbXBvbmVudCk7XG4gICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucG9wb3ZlciA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgICBjb25zdCBwb3BvdmVyID0gdGhpcy5wb3BvdmVyLmluc3RhbmNlIGFzIFBvcE92ZXJDb250ZW50O1xuICAgICAgcG9wb3Zlci5wb3BvdmVyID0gdGhpcztcbiAgICAgIHBvcG92ZXIuY29udGVudCA9IHRoaXMuY29udGVudCBhcyBzdHJpbmc7XG4gICAgICBpZiAodGhpcy5wb3BvdmVyUGxhY2VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9wb3Zlci5wbGFjZW1lbnQgPSB0aGlzLnBvcG92ZXJQbGFjZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb3BvdmVyQW5pbWF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9wb3Zlci5hbmltYXRpb24gPSB0aGlzLnBvcG92ZXJBbmltYXRpb247XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb3BvdmVyVGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb3BvdmVyLnRpdGxlID0gdGhpcy5wb3BvdmVyVGl0bGU7XG4gICAgICB9XG5cbiAgICAgIHBvcG92ZXIub25DbG9zZUZyb21PdXRzaWRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICBpZiAodGhpcy5wb3BvdmVyRGlzbWlzc1RpbWVvdXQgPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlKCksIHRoaXMucG9wb3ZlckRpc21pc3NUaW1lb3V0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcG9wb3ZlciA9IHRoaXMuY29udGVudCBhcyBQb3BPdmVyQ29udGVudDtcbiAgICAgIHBvcG92ZXIucG9wb3ZlciA9IHRoaXM7XG4gICAgICBpZiAodGhpcy5wb3BvdmVyUGxhY2VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9wb3Zlci5wbGFjZW1lbnQgPSB0aGlzLnBvcG92ZXJQbGFjZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb3BvdmVyQW5pbWF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9wb3Zlci5hbmltYXRpb24gPSB0aGlzLnBvcG92ZXJBbmltYXRpb247XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb3BvdmVyVGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb3BvdmVyLnRpdGxlID0gdGhpcy5wb3BvdmVyVGl0bGU7XG4gICAgICB9XG5cbiAgICAgIHBvcG92ZXIub25DbG9zZUZyb21PdXRzaWRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICBpZiAodGhpcy5wb3BvdmVyRGlzbWlzc1RpbWVvdXQgPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlKCksIHRoaXMucG9wb3ZlckRpc21pc3NUaW1lb3V0KTtcbiAgICAgIH1cbiAgICAgIHBvcG92ZXIuc2hvdygpO1xuICAgIH1cblxuICAgIHRoaXMub25TaG93bi5lbWl0KHRoaXMpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnBvcG92ZXIpIHtcbiAgICAgIHRoaXMucG9wb3Zlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFBvcE92ZXJDb250ZW50KSB7XG4gICAgICAodGhpcy5jb250ZW50IGFzIFBvcE92ZXJDb250ZW50KS5oaWRlRnJvbVBvcG92ZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uSGlkZGVuLmVtaXQodGhpcyk7XG4gIH1cblxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=