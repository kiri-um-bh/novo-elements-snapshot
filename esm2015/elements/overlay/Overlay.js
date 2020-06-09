// Angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, TemplateRef, ViewChild, ViewContainerRef, } from '@angular/core';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
// Vendor
import { of as observableOf, merge, fromEvent } from 'rxjs';
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
        return merge(fromEvent(this.document, 'mousedown'), fromEvent(this.document, 'touchend')).pipe(filter((event) => {
            const clickTarget = event.target;
            const clicked = this.panelOpen &&
                clickTarget !== this.getConnectedElement().nativeElement &&
                !this.getConnectedElement().nativeElement.contains(clickTarget) &&
                (!!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9vdmVybGF5L092ZXJsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLE9BQU8sRUFDUCxhQUFhLEdBSWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLFNBQVM7QUFDVCxPQUFPLEVBQTRCLEVBQUUsSUFBSSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7SUFNcEQsaUNBQWdFO0lBQUEsa0JBQVk7SUFBYSxpQkFBTTs7O0lBQWhELDhCQUFTOzs7QUFLOUQsTUFBTSxPQUFPLDRCQUE0QjtJQXlDdkMsWUFDWSxPQUFnQixFQUNoQixnQkFBa0MsRUFDbEMsSUFBWSxFQUNaLGlCQUFvQyxFQUdwQyxRQUFhO1FBTmIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBR3BDLGFBQVEsR0FBUixRQUFRLENBQUs7UUEvQ2xCLE9BQUUsR0FBVyxnQkFB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QUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNsRDtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFUyxtQkFBbUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFUyxZQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ2hGLENBQUM7O3dHQXhRVSw0QkFBNEIsaUxBK0M3QixRQUFRO2lFQS9DUCw0QkFBNEI7dUJBRzVCLFdBQVc7Ozs7Ozs7O1FBVHBCLDBGQUNFOztrREFLTyw0QkFBNEI7Y0FUeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztzQkErQ0ksUUFBUTs7c0JBQ1IsTUFBTTt1QkFBQyxRQUFROztrQkE1Q2pCLFNBQVM7bUJBQUMsV0FBVzs7a0JBRXJCLFNBQVM7bUJBQUMsT0FBTzs7a0JBR2pCLEtBQUs7O2tCQVlMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUdMLE1BQU07O2tCQUVOLE1BQU07O2tCQTRCTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhclxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MsXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWYsXG4gIFNjcm9sbFN0cmF0ZWd5LFxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBWZW5kb3JcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tb3ZlcmxheS10ZW1wbGF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tb3ZlcmxheS1wYW5lbFwiIHJvbGU9XCJsaXN0Ym94XCIgW2lkXT1cImlkXCIgI3BhbmVsPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpZDogc3RyaW5nID0gYG5vdm8tb3ZlcmxheS0ke0RhdGUubm93KCl9YDtcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKVxuICBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJylcbiAgcHVibGljIHBhbmVsOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwb3NpdGlvbjpcbiAgICB8ICdkZWZhdWx0J1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2Fib3ZlLWJlbG93J1xuICAgIHwgJ3JpZ2h0LWFib3ZlLWJlbG93J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdib3R0b20nXG4gICAgfCAnYm90dG9tLWxlZnQnXG4gICAgfCAnYm90dG9tLXJpZ2h0J1xuICAgIHwgJ3RvcC1sZWZ0J1xuICAgIHwgJ3RvcC1yaWdodCcgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzY3JvbGxTdHJhdGVneTogJ3JlcG9zaXRpb24nIHwgJ2Jsb2NrJyB8ICdjbG9zZScgPSAncmVwb3NpdGlvbic7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2xvc2luZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xuICBwdWJsaWMgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuXG4gIC8vIFRoZSBzdWJzY3JpcHRpb24gZm9yIGNsb3NpbmcgYWN0aW9ucyAoc29tZSBhcmUgYm91bmQgdG8gZG9jdW1lbnQpXG4gIHByb3RlY3RlZCBjbG9zaW5nQWN0aW9uc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9wYXJlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJvdGVjdGVkIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChET0NVTUVOVClcbiAgICBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3lPdmVybGF5KCk7XG4gIH1cblxuICBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBhcmVudCh2YWx1ZTogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICAgIHRoaXMuY2hlY2tTaXplcygpO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJlbnQoKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuY3JlYXRlT3ZlcmxheSh0aGlzLnRlbXBsYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja1NpemVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICAgIHRoaXMuY2xvc2luZ0FjdGlvbnNTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVRvQ2xvc2luZ0FjdGlvbnMoKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmNsb3NpbmdBY3Rpb25zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NpbmcuZW1pdCh0cnVlKTtcbiAgICAgIGlmICh0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQ2xvc2luZ0FjdGlvbihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICAvKipcbiAgICogQSBzdHJlYW0gb2YgYWN0aW9ucyB0aGF0IHNob3VsZCBjbG9zZSB0aGUgYXV0b2NvbXBsZXRlIHBhbmVsLCBpbmNsdWRpbmdcbiAgICogd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQsIG9uIGJsdXIsIGFuZCB3aGVuIFRBQiBpcyBwcmVzc2VkLlxuICAgKi9cbiAgcHVibGljIGdldCBwYW5lbENsb3NpbmdBY3Rpb25zKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgLy8gdGhpcy5vdmVybGF5VGVtcGxhdGUuX2tleU1hbmFnZXIudGFiT3V0LFxuICAgICAgdGhpcy5vdXRzaWRlQ2xpY2tTdHJlYW0sXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBTdHJlYW0gb2YgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGF1dG9jb21wbGV0ZSBwYW5lbC4gKi9cbiAgcHJvdGVjdGVkIGdldCBvdXRzaWRlQ2xpY2tTdHJlYW0oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQsICdtb3VzZWRvd24nKSwgZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQsICd0b3VjaGVuZCcpKS5waXBlKFxuICAgICAgZmlsdGVyKChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBjbGlja2VkOiBib29sZWFuID1cbiAgICAgICAgICB0aGlzLnBhbmVsT3BlbiAmJlxuICAgICAgICAgIGNsaWNrVGFyZ2V0ICE9PSB0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICAgIXRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmXG4gICAgICAgICAgKCEhdGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpKTtcbiAgICAgICAgaWYgKHRoaXMucGFuZWxPcGVuICYmICEhdGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiYgdGhpcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3QuZW1pdChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsaWNrZWQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGxpc3RlbnMgdG8gYSBzdHJlYW0gb2YgcGFuZWwgY2xvc2luZyBhY3Rpb25zIGFuZCByZXNldHMgdGhlXG4gICAqIHN0cmVhbSBldmVyeSB0aW1lIHRoZSBvcHRpb24gbGlzdCBjaGFuZ2VzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHN1YnNjcmliZVRvQ2xvc2luZ0FjdGlvbnMoKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBmaXJzdFN0YWJsZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy56b25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlyc3QoKSk7XG4gICAgLy8gY29uc3QgdmFsdWVDaGFuZ2VzID0gT2JzZXJ2YWJsZS5mcm9tKHRoaXMudmFsdWUpO1xuICAgIC8vIFdoZW4gdGhlIHpvbmUgaXMgc3RhYmxlIGluaXRpYWxseSwgYW5kIHdoZW4gdGhlIG9wdGlvbiBsaXN0IGNoYW5nZXMuLi5cbiAgICByZXR1cm4gKFxuICAgICAgbWVyZ2UoZmlyc3RTdGFibGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBzdHJlYW0gb2YgcGFuZWxDbG9zaW5nQWN0aW9ucywgcmVwbGFjaW5nIGFueSBwcmV2aW91cyBzdHJlYW1zXG4gICAgICAgICAgLy8gdGhhdCB3ZXJlIGNyZWF0ZWQsIGFuZCBmbGF0dGVuIGl0IHNvIG91ciBzdHJlYW0gb25seSBlbWl0cyBjbG9zaW5nIGV2ZW50cy4uLlxuICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYW5lbENsb3NpbmdBY3Rpb25zO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIHdoZW4gdGhlIGZpcnN0IGNsb3NpbmcgZXZlbnQgb2NjdXJzLi4uXG4gICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgKVxuICAgICAgICAvLyBzZXQgdGhlIHZhbHVlLCBjbG9zZSB0aGUgcGFuZWwsIGFuZCBjb21wbGV0ZS5cbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4gdGhpcy5vbkNsb3NpbmdBY3Rpb24oZXZlbnQpKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlT3ZlcmxheSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xuICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VQYW5lbCgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZXN0cm95T3ZlcmxheSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgY29uc3QgY29uZmlnOiBPdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoKTtcblxuICAgIGlmICghdGhpcy53aWR0aCkge1xuICAgICAgY29uZmlnLndpZHRoID0gdGhpcy5nZXRIb3N0V2lkdGgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgIGNvbmZpZy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBjb25maWcucG9zaXRpb25TdHJhdGVneSA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICBjb25maWcuaGFzQmFja2Ryb3AgPSBmYWxzZTtcbiAgICBjb25maWcuZGlyZWN0aW9uID0gJ2x0cic7XG4gICAgY29uZmlnLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5nZXRTY3JvbGxTdHJhdGVneSgpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBTdXBwb3J0cyB0aGUgZm9sbG93aW5nIHBvc2l0aW9uIHN0cmF0ZWdpZXM6XG4gICAqICdkZWZhdWx0JywgJ3JpZ2h0JywgJ2JvdHRvbScsICdjZW50ZXInLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCdcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQb3NpdGlvbigpOiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlcbiAgICAgICAgLnBvc2l0aW9uKClcbiAgICAgICAgLmNvbm5lY3RlZFRvKHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLCB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IFtvcmlnaW5YLCBmYWxsYmFja1hdOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvc1tdID0gdGhpcy5wb3NpdGlvbi5pbmNsdWRlcygncmlnaHQnKSA/IFsnZW5kJywgJ3N0YXJ0J10gOiBbJ3N0YXJ0JywgJ2VuZCddO1xuICAgIGNvbnN0IFtvcmlnaW5ZLCBvdmVybGF5WV06IFZlcnRpY2FsQ29ubmVjdGlvblBvc1tdID0gdGhpcy5wb3NpdGlvbi5pbmNsdWRlcygndG9wJykgPyBbJ3RvcCcsICdib3R0b20nXSA6IFsnYm90dG9tJywgJ3RvcCddO1xuXG4gICAgbGV0IHN0cmF0ZWd5OiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmNvbm5lY3RlZFRvKHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLCB7IG9yaWdpblgsIG9yaWdpblkgfSwgeyBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVkgfSlcbiAgICAgIC53aXRoRGlyZWN0aW9uKCdsdHInKTtcblxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgc3RyYXRlZ3kgPSBzdHJhdGVneS53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogZmFsbGJhY2tYLCBvdmVybGF5WTogJ3RvcCcgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnIHx8IHRoaXMucG9zaXRpb24gPT09ICdkZWZhdWx0JyB8fCB0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCdhYm92ZS1iZWxvdycpKSB7XG4gICAgICBzdHJhdGVneSA9IHN0cmF0ZWd5XG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblgsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6IG9yaWdpblgsIG92ZXJsYXlZOiAnYm90dG9tJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiBmYWxsYmFja1gsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6IGZhbGxiYWNrWCwgb3ZlcmxheVk6ICd0b3AnIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogZmFsbGJhY2tYLCBvdmVybGF5WTogJ2JvdHRvbScgfSk7XG4gICAgICBpZiAoIXRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ2Fib3ZlLWJlbG93JykpIHtcbiAgICAgICAgc3RyYXRlZ3kgPSBzdHJhdGVneVxuICAgICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblgsIG9yaWdpblk6ICdjZW50ZXInIH0sIHsgb3ZlcmxheVg6IG9yaWdpblgsIG92ZXJsYXlZOiAnY2VudGVyJyB9KVxuICAgICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogZmFsbGJhY2tYLCBvdmVybGF5WTogJ2NlbnRlcicgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHJhdGVneTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTY3JvbGxTdHJhdGVneSgpOiBTY3JvbGxTdHJhdGVneSB7XG4gICAgc3dpdGNoICh0aGlzLnNjcm9sbFN0cmF0ZWd5KSB7XG4gICAgICBjYXNlICdibG9jayc6XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpO1xuICAgICAgY2FzZSAncmVwb3NpdGlvbic6XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hlY2tTaXplcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICBpZiAoIXRoaXMud2lkdGgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLndpZHRoID0gdGhpcy5nZXRIb3N0V2lkdGgoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhlaWdodCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb25uZWN0ZWRFbGVtZW50KCk6IEVsZW1lbnRSZWYge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRIb3N0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgfVxufVxuIl19