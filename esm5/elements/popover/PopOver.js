// NG2
import { Directive, ViewContainerRef, ComponentFactoryResolver, Input, Output, EventEmitter, HostListener, } from '@angular/core';
import { PopOverContent } from './PopOverContent';
import * as i0 from "@angular/core";
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
    PopOverDirective.prototype.showOrHideOnClick = function () {
        if (this.popoverOnHover || this.popoverDisabled) {
            return;
        }
        this.toggle();
    };
    PopOverDirective.prototype.showOnHover = function () {
        if (!this.popoverOnHover || this.popoverDisabled) {
            return;
        }
        this.show();
    };
    PopOverDirective.prototype.hideOnHover = function () {
        if (!this.popoverOnHover || this.popoverDisabled) {
            return;
        }
        this.hide();
    };
    PopOverDirective.prototype.ngOnChanges = function (changes) {
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
    PopOverDirective.prototype.toggle = function () {
        if (!this.visible) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    PopOverDirective.prototype.show = function () {
        var _this = this;
        if (this.visible) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
            var factory = this.resolver.resolveComponentFactory(this.PopoverComponent);
            if (!this.visible) {
                return;
            }
            this.popover = this.viewContainerRef.createComponent(factory);
            var popover = this.popover.instance;
            popover.popover = this;
            popover.content = this.content;
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
            var popover = this.content;
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
    PopOverDirective.prototype.hide = function () {
        if (!this.visible) {
            return;
        }
        this.visible = false;
        if (this.popover) {
            this.popover.destroy();
        }
        if (this.content instanceof PopOverContent) {
            this.content.hideFromPopover();
        }
        this.onHidden.emit(this);
    };
    PopOverDirective.prototype.getElement = function () {
        return this.viewContainerRef.element.nativeElement;
    };
    PopOverDirective.ɵfac = function PopOverDirective_Factory(t) { return new (t || PopOverDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
    PopOverDirective.ɵdir = i0.ɵɵdefineDirective({ type: PopOverDirective, selectors: [["", "popover", ""]], hostBindings: function PopOverDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function PopOverDirective_click_HostBindingHandler() { return ctx.showOrHideOnClick(); })("focusin", function PopOverDirective_focusin_HostBindingHandler() { return ctx.showOnHover(); })("mouseenter", function PopOverDirective_mouseenter_HostBindingHandler() { return ctx.showOnHover(); })("focusout", function PopOverDirective_focusout_HostBindingHandler() { return ctx.hideOnHover(); })("mouseleave", function PopOverDirective_mouseleave_HostBindingHandler() { return ctx.hideOnHover(); });
        } }, inputs: { content: ["popover", "content"], popoverDisabled: "popoverDisabled", popoverAlways: "popoverAlways", popoverAnimation: "popoverAnimation", popoverPlacement: "popoverPlacement", popoverTitle: "popoverTitle", popoverOnHover: "popoverOnHover", popoverDismissTimeout: "popoverDismissTimeout" }, outputs: { onShown: "onShown", onHidden: "onHidden" }, features: [i0.ɵɵNgOnChangesFeature] });
    return PopOverDirective;
}());
export { PopOverDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopOverDirective, [{
        type: Directive,
        args: [{
                selector: '[popover]',
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }]; }, { content: [{
            type: Input,
            args: ['popover']
        }], popoverDisabled: [{
            type: Input
        }], popoverAlways: [{
            type: Input
        }], popoverAnimation: [{
            type: Input
        }], popoverPlacement: [{
            type: Input
        }], popoverTitle: [{
            type: Input
        }], popoverOnHover: [{
            type: Input
        }], popoverDismissTimeout: [{
            type: Input
        }], onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], showOrHideOnClick: [{
            type: HostListener,
            args: ['click']
        }], showOnHover: [{
            type: HostListener,
            args: ['focusin']
        }, {
            type: HostListener,
            args: ['mouseenter']
        }], hideOnHover: [{
            type: HostListener,
            args: ['focusout']
        }, {
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wT3Zlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wb3BvdmVyL1BvcE92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFDTCxTQUFTLEVBR1QsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVsRDtJQVFFLDBCQUFzQixnQkFBa0MsRUFBWSxRQUFrQztRQUFoRixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFKNUYscUJBQWdCLEdBQUcsY0FBYyxDQUFDO1FBbUI1QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQywwQkFBcUIsR0FBVyxDQUFDLENBQUM7UUFHbEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRS9DLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztJQXRCeUQsQ0FBQztJQXdCMUcsc0RBQXNEO0lBQ3RELGtCQUFrQjtJQUNsQixzREFBc0Q7SUFFdEQsNENBQWlCLEdBRGpCO1FBRUUsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDL0MsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFJRCxzQ0FBVyxHQUZYO1FBR0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNoRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBSUQsc0NBQVcsR0FGWDtRQUdFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJ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LGlCQUFhOzsyQkFsQjFCO0NBMEtDLEFBM0pELElBMkpDO1NBeEpZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBSDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUN0Qjs7a0JBUUUsS0FBSzttQkFBQyxTQUFTOztrQkFFZixLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFHTCxNQUFNOztrQkFFTixNQUFNOztrQkFNTixZQUFZO21CQUFDLE9BQU87O2tCQVFwQixZQUFZO21CQUFDLFNBQVM7O2tCQUN0QixZQUFZO21CQUFDLFlBQVk7O2tCQVF6QixZQUFZO21CQUFDLFVBQVU7O2tCQUN2QixZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BPdmVyQ29udGVudCB9IGZyb20gJy4vUG9wT3ZlckNvbnRlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcG9wb3Zlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BPdmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJvdGVjdGVkIFBvcG92ZXJDb21wb25lbnQgPSBQb3BPdmVyQ29udGVudDtcbiAgcHJvdGVjdGVkIHBvcG92ZXI6IENvbXBvbmVudFJlZjxQb3BPdmVyQ29udGVudD47XG4gIHByb3RlY3RlZCB2aXNpYmxlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cblxuICBASW5wdXQoJ3BvcG92ZXInKVxuICBjb250ZW50OiBzdHJpbmcgfCBQb3BPdmVyQ29udGVudDtcbiAgQElucHV0KClcbiAgcG9wb3ZlckRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwb3BvdmVyQWx3YXlzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwb3BvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwb3BvdmVyUGxhY2VtZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwb3BvdmVyT25Ib3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwb3BvdmVyRGlzbWlzc1RpbWVvdXQ6IG51bWJlciA9IDA7XG5cbiAgQE91dHB1dCgpXG4gIG9uU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBvcE92ZXJEaXJlY3RpdmU+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9wT3ZlckRpcmVjdGl2ZT4oKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRXZlbnQgbGlzdGVuZXJzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHNob3dPckhpZGVPbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvcG92ZXJPbkhvdmVyIHx8IHRoaXMucG9wb3ZlckRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c2luJylcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIHNob3dPbkhvdmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyT25Ib3ZlciB8fCB0aGlzLnBvcG92ZXJEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JylcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIGhpZGVPbkhvdmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyT25Ib3ZlciB8fCB0aGlzLnBvcG92ZXJEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICBpZiAoY2hhbmdlc1sncG9wb3ZlckRpc2FibGVkJ10pIHtcbiAgICAgIGlmIChjaGFuZ2VzWydwb3BvdmVyRGlzYWJsZWQnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydwb3BvdmVyQWx3YXlzJ10pIHtcbiAgICAgIGlmIChjaGFuZ2VzWydwb3BvdmVyQWx3YXlzJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLlBvcG92ZXJDb21wb25lbnQpO1xuICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBvcG92ZXIgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgICAgY29uc3QgcG9wb3ZlciA9IHRoaXMucG9wb3Zlci5pbnN0YW5jZSBhcyBQb3BPdmVyQ29udGVudDtcbiAgICAgIHBvcG92ZXIucG9wb3ZlciA9IHRoaXM7XG4gICAgICBwb3BvdmVyLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgYXMgc3RyaW5nO1xuICAgICAgaWYgKHRoaXMucG9wb3ZlclBsYWNlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcG92ZXIucGxhY2VtZW50ID0gdGhpcy5wb3BvdmVyUGxhY2VtZW50O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9wb3ZlckFuaW1hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcG92ZXIuYW5pbWF0aW9uID0gdGhpcy5wb3BvdmVyQW5pbWF0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9wb3ZlclRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9wb3Zlci50aXRsZSA9IHRoaXMucG9wb3ZlclRpdGxlO1xuICAgICAgfVxuXG4gICAgICBwb3BvdmVyLm9uQ2xvc2VGcm9tT3V0c2lkZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgaWYgKHRoaXMucG9wb3ZlckRpc21pc3NUaW1lb3V0ID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSgpLCB0aGlzLnBvcG92ZXJEaXNtaXNzVGltZW91dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBvcG92ZXIgPSB0aGlzLmNvbnRlbnQgYXMgUG9wT3ZlckNvbnRlbnQ7XG4gICAgICBwb3BvdmVyLnBvcG92ZXIgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMucG9wb3ZlclBsYWNlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcG92ZXIucGxhY2VtZW50ID0gdGhpcy5wb3BvdmVyUGxhY2VtZW50O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9wb3ZlckFuaW1hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcG92ZXIuYW5pbWF0aW9uID0gdGhpcy5wb3BvdmVyQW5pbWF0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9wb3ZlclRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9wb3Zlci50aXRsZSA9IHRoaXMucG9wb3ZlclRpdGxlO1xuICAgICAgfVxuXG4gICAgICBwb3BvdmVyLm9uQ2xvc2VGcm9tT3V0c2lkZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgaWYgKHRoaXMucG9wb3ZlckRpc21pc3NUaW1lb3V0ID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSgpLCB0aGlzLnBvcG92ZXJEaXNtaXNzVGltZW91dCk7XG4gICAgICB9XG4gICAgICBwb3BvdmVyLnNob3coKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5wb3BvdmVyKSB7XG4gICAgICB0aGlzLnBvcG92ZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRlbnQgaW5zdGFuY2VvZiBQb3BPdmVyQ29udGVudCkge1xuICAgICAgKHRoaXMuY29udGVudCBhcyBQb3BPdmVyQ29udGVudCkuaGlkZUZyb21Qb3BvdmVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5vbkhpZGRlbi5lbWl0KHRoaXMpO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19