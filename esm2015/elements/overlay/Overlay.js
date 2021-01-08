// Angular
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, TemplateRef, ViewChild, ViewContainerRef, } from '@angular/core';
// Vendor
import { fromEvent, merge, of as observableOf } from 'rxjs';
import { filter, first, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
const _c0 = ["panel"];
function NovoOverlayTemplateComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0, 1);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r0.id);
} }
const _c1 = ["*"];
export class NovoOverlayTemplateComponent {
    constructor(overlay, viewContainerRef, zone, changeDetectorRef, document) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.document = document;
        this.id = `novo-overlay-${Date.now()}`;
        this.position = 'default';
        this.scrollStrategy = 'reposition';
        this.closeOnSelect = true;
        this.select = new EventEmitter();
        this.closing = new EventEmitter();
    }
    ngOnDestroy() {
        this.destroyOverlay();
    }
    get panelOpen() {
        return this.overlayRef && this.overlayRef.hasAttached();
    }
    set parent(value) {
        this._parent = value;
        this.checkSizes();
    }
    get parent() {
        return this._parent;
    }
    openPanel() {
        if (!this.overlayRef) {
            this.createOverlay(this.template);
        }
        else {
            this.checkSizes();
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.closingActionsSubscription = this.subscribeToClosingActions();
        }
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            if (this.overlayRef) {
                this.overlayRef.updatePosition();
            }
        });
    }
    closePanel() {
        this.zone.run(() => {
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.overlayRef.detach();
                this.closingActionsSubscription.unsubscribe();
            }
            this.closing.emit(true);
            if (this.panelOpen) {
                this.changeDetectorRef.markForCheck();
            }
        });
    }
    onClosingAction(event) {
        this.closePanel();
    }
    /**
     * A stream of actions that should close the autocomplete panel, including
     * when an option is selected, on blur, and when TAB is pressed.
     */
    get panelClosingActions() {
        return merge(
        // this.overlayTemplate._keyManager.tabOut,
        this.outsideClickStream);
    }
    /** Stream of clicks outside of the autocomplete panel. */
    get outsideClickStream() {
        if (!this.document) {
            return observableOf();
        }
        return merge(fromEvent(this.document, 'mouseup'), fromEvent(this.document, 'touchend')).pipe(filter((event) => {
            const clickTarget = event.target;
            const clicked = this.panelOpen &&
                clickTarget !== this.getConnectedElement().nativeElement &&
                !this.getConnectedElement().nativeElement.contains(clickTarget) &&
                !!this.overlayRef &&
                !this.overlayRef.overlayElement.contains(clickTarget);
            // &&!Array.from(document.querySelectorAll('.cdk-overlay-container')).some((el) => el.contains(clickTarget));
            if (this.panelOpen && !!this.overlayRef && this.overlayRef.overlayElement.contains(clickTarget) && this.closeOnSelect) {
                this.select.emit(event);
            }
            return clicked;
        }));
    }
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */
    subscribeToClosingActions() {
        const firstStable = this.zone.onStable.asObservable().pipe(first());
        // const valueChanges = Observable.from(this.value);
        // When the zone is stable initially, and when the option list changes...
        return (merge(firstStable)
            .pipe(
        // create a new stream of panelClosingActions, replacing any previous streams
        // that were created, and flatten it so our stream only emits closing events...
        switchMap(() => {
            return this.panelClosingActions;
        }), 
        // when the first closing event occurs...
        first())
            // set the value, close the panel, and complete.
            .subscribe((event) => this.onClosingAction(event)));
    }
    createOverlay(template) {
        this.portal = new TemplatePortal(template, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.backdropClick().subscribe(() => this.closePanel());
    }
    destroyOverlay() {
        if (this.overlayRef) {
            this.closePanel();
            this.overlayRef.dispose();
            this.overlayRef = undefined;
        }
    }
    getOverlayConfig() {
        const config = new OverlayConfig();
        if (!this.width) {
            config.width = this.getHostWidth();
        }
        else {
            config.width = this.width;
        }
        if (this.height) {
            config.height = this.height;
        }
        config.positionStrategy = this.getPosition();
        config.hasBackdrop = false;
        config.direction = 'ltr';
        config.scrollStrategy = this.getScrollStrategy();
        return config;
    }
    /**
     * Supports the following position strategies:
     * 'default', 'right', 'bottom', 'center', 'bottom-left', 'bottom-right', 'top-left', 'top-right'
     */
    getPosition() {
        if (this.position === 'center') {
            return this.overlay
                .position()
                .connectedTo(this.getConnectedElement(), { originX: 'start', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' });
        }
        const [originX, fallbackX] = this.position.includes('right') ? ['end', 'start'] : ['start', 'end'];
        const [originY, overlayY] = this.position.includes('top') ? ['top', 'bottom'] : ['bottom', 'top'];
        let strategy = this.overlay
            .position()
            .connectedTo(this.getConnectedElement(), { originX, originY }, { overlayX: originX, overlayY })
            .withDirection('ltr');
        if (this.position === 'bottom') {
            strategy = strategy.withFallbackPosition({ originX: fallbackX, originY: 'bottom' }, { overlayX: fallbackX, overlayY: 'top' });
        }
        else if (this.position === 'right' || this.position === 'default' || this.position.includes('above-below')) {
            strategy = strategy
                .withFallbackPosition({ originX, originY: 'top' }, { overlayX: originX, overlayY: 'bottom' })
                .withFallbackPosition({ originX: fallbackX, originY: 'bottom' }, { overlayX: fallbackX, overlayY: 'top' })
                .withFallbackPosition({ originX: fallbackX, originY: 'top' }, { overlayX: fallbackX, overlayY: 'bottom' });
            if (!this.position.includes('above-below')) {
                strategy = strategy
                    .withFallbackPosition({ originX, originY: 'center' }, { overlayX: originX, overlayY: 'center' })
                    .withFallbackPosition({ originX: fallbackX, originY: 'center' }, { overlayX: fallbackX, overlayY: 'center' });
            }
        }
        return strategy;
    }
    getScrollStrategy() {
        switch (this.scrollStrategy) {
            case 'block':
                return this.overlay.scrollStrategies.block();
            case 'reposition':
                return this.overlay.scrollStrategies.reposition();
            default:
                return this.overlay.scrollStrategies.close();
        }
    }
    checkSizes() {
        if (this.overlayRef) {
            if (!this.width) {
                this.overlayRef.getConfig().width = this.getHostWidth();
            }
            if (this.height) {
                this.overlayRef.getConfig().height = this.height;
            }
            this.overlayRef.updateSize(this.overlayRef.getConfig());
            this.overlayRef.updatePosition();
            this.changeDetectorRef.markForCheck();
        }
    }
    getConnectedElement() {
        return this.parent;
    }
    getHostWidth() {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
}
NovoOverlayTemplateComponent.ɵfac = function NovoOverlayTemplateComponent_Factory(t) { return new (t || NovoOverlayTemplateComponent)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(DOCUMENT, 8)); };
NovoOverlayTemplateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoOverlayTemplateComponent, selectors: [["novo-overlay-template"]], viewQuery: function NovoOverlayTemplateComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, true);
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panel = _t.first);
    } }, inputs: { position: "position", scrollStrategy: "scrollStrategy", width: "width", height: "height", closeOnSelect: "closeOnSelect", parent: "parent" }, outputs: { select: "select", closing: "closing" }, ngContentSelectors: _c1, decls: 1, vars: 0, consts: [["role", "listbox", 1, "novo-overlay-panel", 3, "id"], ["panel", ""]], template: function NovoOverlayTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NovoOverlayTemplateComponent_ng_template_0_Template, 3, 1, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoOverlayTemplateComponent, [{
        type: Component,
        args: [{
                selector: 'novo-overlay-template',
                template: `
    <ng-template>
      <div class="novo-overlay-panel" role="listbox" [id]="id" #panel><ng-content></ng-content></div>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ViewContainerRef }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { template: [{
            type: ViewChild,
            args: [TemplateRef]
        }], panel: [{
            type: ViewChild,
            args: ['panel']
        }], position: [{
            type: Input
        }], scrollStrategy: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], closeOnSelect: [{
            type: Input
        }], select: [{
            type: Output
        }], closing: [{
            type: Output
        }], parent: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL292ZXJsYXkvT3ZlcmxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FBQ1YsT0FBTyxFQUdMLE9BQU8sRUFDUCxhQUFhLEdBSWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsU0FBUztBQUNULE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFjLEVBQUUsSUFBSSxZQUFZLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztJQU1wRCxpQ0FBZ0U7SUFBQSxrQkFBWTtJQUFhLGlCQUFNOzs7SUFBaEQsOEJBQVM7OztBQUs5RCxNQUFNLE9BQU8sNEJBQTRCO0lBeUN2QyxZQUNZLE9BQWdCLEVBQ2hCLGdCQUFrQyxFQUNsQyxJQUFZLEVBQ1osaUJBQW9DLEVBR3BDLFFBQWE7UUFOYixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FB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dGVudCI6WyIvLyBBbmd1bGFyXG5pbXBvcnQge1xuICBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgU2Nyb2xsU3RyYXRlZ3ksXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1vdmVybGF5LXRlbXBsYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1vdmVybGF5LXBhbmVsXCIgcm9sZT1cImxpc3Rib3hcIiBbaWRdPVwiaWRcIiAjcGFuZWw+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIGlkOiBzdHJpbmcgPSBgbm92by1vdmVybGF5LSR7RGF0ZS5ub3coKX1gO1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpXG4gIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgncGFuZWwnKVxuICBwdWJsaWMgcGFuZWw6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBvc2l0aW9uOlxuICAgIHwgJ2RlZmF1bHQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnYWJvdmUtYmVsb3cnXG4gICAgfCAncmlnaHQtYWJvdmUtYmVsb3cnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2JvdHRvbSdcbiAgICB8ICdib3R0b20tbGVmdCdcbiAgICB8ICdib3R0b20tcmlnaHQnXG4gICAgfCAndG9wLWxlZnQnXG4gICAgfCAndG9wLXJpZ2h0JyA9ICdkZWZhdWx0JztcbiAgQElucHV0KClcbiAgcHVibGljIHNjcm9sbFN0cmF0ZWd5OiAncmVwb3NpdGlvbicgfCAnYmxvY2snIHwgJ2Nsb3NlJyA9ICdyZXBvc2l0aW9uJztcbiAgQElucHV0KClcbiAgcHVibGljIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjbG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIHB1YmxpYyBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XG5cbiAgLy8gVGhlIHN1YnNjcmlwdGlvbiBmb3IgY2xvc2luZyBhY3Rpb25zIChzb21lIGFyZSBib3VuZCB0byBkb2N1bWVudClcbiAgcHJvdGVjdGVkIGNsb3NpbmdBY3Rpb25zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3BhcmVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KERPQ1VNRU5UKVxuICAgIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICApIHt9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveU92ZXJsYXkoKTtcbiAgfVxuXG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGFyZW50KHZhbHVlOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gICAgdGhpcy5jaGVja1NpemVzKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudCgpOiBFbGVtZW50UmVmIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG5cbiAgcHVibGljIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5jcmVhdGVPdmVybGF5KHRoaXMudGVtcGxhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrU2l6ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgdGhpcy5jbG9zaW5nQWN0aW9uc1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlVG9DbG9zaW5nQWN0aW9ucygpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuY2xvc2luZ0FjdGlvbnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2luZy5lbWl0KHRydWUpO1xuICAgICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25DbG9zaW5nQWN0aW9uKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHN0cmVhbSBvZiBhY3Rpb25zIHRoYXQgc2hvdWxkIGNsb3NlIHRoZSBhdXRvY29tcGxldGUgcGFuZWwsIGluY2x1ZGluZ1xuICAgKiB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZCwgb24gYmx1ciwgYW5kIHdoZW4gVEFCIGlzIHByZXNzZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhbmVsQ2xvc2luZ0FjdGlvbnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAvLyB0aGlzLm92ZXJsYXlUZW1wbGF0ZS5fa2V5TWFuYWdlci50YWJPdXQsXG4gICAgICB0aGlzLm91dHNpZGVDbGlja1N0cmVhbSxcbiAgICApO1xuICB9XG5cbiAgLyoqIFN0cmVhbSBvZiBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgYXV0b2NvbXBsZXRlIHBhbmVsLiAqL1xuICBwcm90ZWN0ZWQgZ2V0IG91dHNpZGVDbGlja1N0cmVhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmICghdGhpcy5kb2N1bWVudCkge1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVPZigpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ21vdXNldXAnKSwgZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQsICd0b3VjaGVuZCcpKS5waXBlKFxuICAgICAgZmlsdGVyKChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBjbGlja2VkOiBib29sZWFuID1cbiAgICAgICAgICB0aGlzLnBhbmVsT3BlbiAmJlxuICAgICAgICAgIGNsaWNrVGFyZ2V0ICE9PSB0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICAgIXRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmXG4gICAgICAgICAgISF0aGlzLm92ZXJsYXlSZWYgJiZcbiAgICAgICAgICAhdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KTtcbiAgICAgICAgLy8gJiYhQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2RrLW92ZXJsYXktY29udGFpbmVyJykpLnNvbWUoKGVsKSA9PiBlbC5jb250YWlucyhjbGlja1RhcmdldCkpO1xuICAgICAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgISF0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJiB0aGlzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpY2tlZDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgbGlzdGVucyB0byBhIHN0cmVhbSBvZiBwYW5lbCBjbG9zaW5nIGFjdGlvbnMgYW5kIHJlc2V0cyB0aGVcbiAgICogc3RyZWFtIGV2ZXJ5IHRpbWUgdGhlIG9wdGlvbiBsaXN0IGNoYW5nZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3Vic2NyaWJlVG9DbG9zaW5nQWN0aW9ucygpOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IGZpcnN0U3RhYmxlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnpvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShmaXJzdCgpKTtcbiAgICAvLyBjb25zdCB2YWx1ZUNoYW5nZXMgPSBPYnNlcnZhYmxlLmZyb20odGhpcy52YWx1ZSk7XG4gICAgLy8gV2hlbiB0aGUgem9uZSBpcyBzdGFibGUgaW5pdGlhbGx5LCBhbmQgd2hlbiB0aGUgb3B0aW9uIGxpc3QgY2hhbmdlcy4uLlxuICAgIHJldHVybiAoXG4gICAgICBtZXJnZShmaXJzdFN0YWJsZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHN0cmVhbSBvZiBwYW5lbENsb3NpbmdBY3Rpb25zLCByZXBsYWNpbmcgYW55IHByZXZpb3VzIHN0cmVhbXNcbiAgICAgICAgICAvLyB0aGF0IHdlcmUgY3JlYXRlZCwgYW5kIGZsYXR0ZW4gaXQgc28gb3VyIHN0cmVhbSBvbmx5IGVtaXRzIGNsb3NpbmcgZXZlbnRzLi4uXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhbmVsQ2xvc2luZ0FjdGlvbnM7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gd2hlbiB0aGUgZmlyc3QgY2xvc2luZyBldmVudCBvY2N1cnMuLi5cbiAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICApXG4gICAgICAgIC8vIHNldCB0aGUgdmFsdWUsIGNsb3NlIHRoZSBwYW5lbCwgYW5kIGNvbXBsZXRlLlxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB0aGlzLm9uQ2xvc2luZ0FjdGlvbihldmVudCkpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVPdmVybGF5KHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZVBhbmVsKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdCBjb25maWc6IE92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZygpO1xuXG4gICAgaWYgKCF0aGlzLndpZHRoKSB7XG4gICAgICBjb25maWcud2lkdGggPSB0aGlzLmdldEhvc3RXaWR0aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhlaWdodCkge1xuICAgICAgY29uZmlnLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgIGNvbmZpZy5oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICAgIGNvbmZpZy5kaXJlY3Rpb24gPSAnbHRyJztcbiAgICBjb25maWcuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLmdldFNjcm9sbFN0cmF0ZWd5KCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcG9zaXRpb24gc3RyYXRlZ2llczpcbiAgICogJ2RlZmF1bHQnLCAncmlnaHQnLCAnYm90dG9tJywgJ2NlbnRlcicsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0J1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldFBvc2l0aW9uKCk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnY2VudGVyJykge1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVxuICAgICAgICAucG9zaXRpb24oKVxuICAgICAgICAuY29ubmVjdGVkVG8odGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCksIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgW29yaWdpblgsIGZhbGxiYWNrWF06IEhvcml6b250YWxDb25uZWN0aW9uUG9zW10gPSB0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCdyaWdodCcpID8gWydlbmQnLCAnc3RhcnQnXSA6IFsnc3RhcnQnLCAnZW5kJ107XG4gICAgY29uc3QgW29yaWdpblksIG92ZXJsYXlZXTogVmVydGljYWxDb25uZWN0aW9uUG9zW10gPSB0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCd0b3AnKSA/IFsndG9wJywgJ2JvdHRvbSddIDogWydib3R0b20nLCAndG9wJ107XG5cbiAgICBsZXQgc3RyYXRlZ3k6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuY29ubmVjdGVkVG8odGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCksIHsgb3JpZ2luWCwgb3JpZ2luWSB9LCB7IG92ZXJsYXlYOiBvcmlnaW5YLCBvdmVybGF5WSB9KVxuICAgICAgLndpdGhEaXJlY3Rpb24oJ2x0cicpO1xuXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICBzdHJhdGVneSA9IHN0cmF0ZWd5LndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAndG9wJyB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24gPT09ICdyaWdodCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ2RlZmF1bHQnIHx8IHRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ2Fib3ZlLWJlbG93JykpIHtcbiAgICAgIHN0cmF0ZWd5ID0gc3RyYXRlZ3lcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWCwgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogZmFsbGJhY2tYLCBvdmVybGF5WTogJ3RvcCcgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAnYm90dG9tJyB9KTtcbiAgICAgIGlmICghdGhpcy5wb3NpdGlvbi5pbmNsdWRlcygnYWJvdmUtYmVsb3cnKSkge1xuICAgICAgICBzdHJhdGVneSA9IHN0cmF0ZWd5XG4gICAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWCwgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAnY2VudGVyJyB9LCB7IG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAnY2VudGVyJyB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cmF0ZWd5O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNjcm9sbFN0cmF0ZWd5KCk6IFNjcm9sbFN0cmF0ZWd5IHtcbiAgICBzd2l0Y2ggKHRoaXMuc2Nyb2xsU3RyYXRlZ3kpIHtcbiAgICAgIGNhc2UgJ2Jsb2NrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG4gICAgICBjYXNlICdyZXBvc2l0aW9uJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjaGVja1NpemVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIGlmICghdGhpcy53aWR0aCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkud2lkdGggPSB0aGlzLmdldEhvc3RXaWR0aCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKSk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbm5lY3RlZEVsZW1lbnQoKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEhvc3RXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICB9XG59XG4iXX0=