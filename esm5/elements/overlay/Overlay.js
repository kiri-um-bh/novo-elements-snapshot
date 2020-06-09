import { __read } from "tslib";
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
var _c0 = ["panel"];
function NovoOverlayTemplateComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0, 1);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r0.id);
} }
var _c1 = ["*"];
var NovoOverlayTemplateComponent = /** @class */ (function () {
    function NovoOverlayTemplateComponent(overlay, viewContainerRef, zone, changeDetectorRef, document) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.document = document;
        this.id = "novo-overlay-" + Date.now();
        this.position = 'default';
        this.scrollStrategy = 'reposition';
        this.closeOnSelect = true;
        this.select = new EventEmitter();
        this.closing = new EventEmitter();
    }
    NovoOverlayTemplateComponent.prototype.ngOnDestroy = function () {
        this.destroyOverlay();
    };
    Object.defineProperty(NovoOverlayTemplateComponent.prototype, "panelOpen", {
        get: function () {
            return this.overlayRef && this.overlayRef.hasAttached();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoOverlayTemplateComponent.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (value) {
            this._parent = value;
            this.checkSizes();
        },
        enumerable: true,
        configurable: true
    });
    NovoOverlayTemplateComponent.prototype.openPanel = function () {
        var _this = this;
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
        setTimeout(function () {
            if (_this.overlayRef) {
                _this.overlayRef.updatePosition();
            }
        });
    };
    NovoOverlayTemplateComponent.prototype.closePanel = function () {
        var _this = this;
        this.zone.run(function () {
            if (_this.overlayRef && _this.overlayRef.hasAttached()) {
                _this.overlayRef.detach();
                _this.closingActionsSubscription.unsubscribe();
            }
            _this.closing.emit(true);
            if (_this.panelOpen) {
                _this.changeDetectorRef.markForCheck();
            }
        });
    };
    NovoOverlayTemplateComponent.prototype.onClosingAction = function (event) {
        this.closePanel();
    };
    Object.defineProperty(NovoOverlayTemplateComponent.prototype, "panelClosingActions", {
        /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         */
        get: function () {
            return merge(
            // this.overlayTemplate._keyManager.tabOut,
            this.outsideClickStream);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoOverlayTemplateComponent.prototype, "outsideClickStream", {
        /** Stream of clicks outside of the autocomplete panel. */
        get: function () {
            var _this = this;
            if (!this.document) {
                return observableOf();
            }
            return merge(fromEvent(this.document, 'mousedown'), fromEvent(this.document, 'touchend')).pipe(filter(function (event) {
                var clickTarget = event.target;
                var clicked = _this.panelOpen &&
                    clickTarget !== _this.getConnectedElement().nativeElement &&
                    !_this.getConnectedElement().nativeElement.contains(clickTarget) &&
                    (!!_this.overlayRef && !_this.overlayRef.overlayElement.contains(clickTarget));
                if (_this.panelOpen && !!_this.overlayRef && _this.overlayRef.overlayElement.contains(clickTarget) && _this.closeOnSelect) {
                    _this.select.emit(event);
                }
                return clicked;
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */
    NovoOverlayTemplateComponent.prototype.subscribeToClosingActions = function () {
        var _this = this;
        var firstStable = this.zone.onStable.asObservable().pipe(first());
        // const valueChanges = Observable.from(this.value);
        // When the zone is stable initially, and when the option list changes...
        return (merge(firstStable)
            .pipe(
        // create a new stream of panelClosingActions, replacing any previous streams
        // that were created, and flatten it so our stream only emits closing events...
        switchMap(function () {
            return _this.panelClosingActions;
        }), 
        // when the first closing event occurs...
        first())
            // set the value, close the panel, and complete.
            .subscribe(function (event) { return _this.onClosingAction(event); }));
    };
    NovoOverlayTemplateComponent.prototype.createOverlay = function (template) {
        var _this = this;
        this.portal = new TemplatePortal(template, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.backdropClick().subscribe(function () { return _this.closePanel(); });
    };
    NovoOverlayTemplateComponent.prototype.destroyOverlay = function () {
        if (this.overlayRef) {
            this.closePanel();
            this.overlayRef.dispose();
            this.overlayRef = undefined;
        }
    };
    NovoOverlayTemplateComponent.prototype.getOverlayConfig = function () {
        var config = new OverlayConfig();
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
    };
    /**
     * Supports the following position strategies:
     * 'default', 'right', 'bottom', 'center', 'bottom-left', 'bottom-right', 'top-left', 'top-right'
     */
    NovoOverlayTemplateComponent.prototype.getPosition = function () {
        if (this.position === 'center') {
            return this.overlay
                .position()
                .connectedTo(this.getConnectedElement(), { originX: 'start', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' });
        }
        var _a = __read(this.position.includes('right') ? ['end', 'start'] : ['start', 'end'], 2), originX = _a[0], fallbackX = _a[1];
        var _b = __read(this.position.includes('top') ? ['top', 'bottom'] : ['bottom', 'top'], 2), originY = _b[0], overlayY = _b[1];
        var strategy = this.overlay
            .position()
            .connectedTo(this.getConnectedElement(), { originX: originX, originY: originY }, { overlayX: originX, overlayY: overlayY })
            .withDirection('ltr');
        if (this.position === 'bottom') {
            strategy = strategy.withFallbackPosition({ originX: fallbackX, originY: 'bottom' }, { overlayX: fallbackX, overlayY: 'top' });
        }
        else if (this.position === 'right' || this.position === 'default' || this.position.includes('above-below')) {
            strategy = strategy
                .withFallbackPosition({ originX: originX, originY: 'top' }, { overlayX: originX, overlayY: 'bottom' })
                .withFallbackPosition({ originX: fallbackX, originY: 'bottom' }, { overlayX: fallbackX, overlayY: 'top' })
                .withFallbackPosition({ originX: fallbackX, originY: 'top' }, { overlayX: fallbackX, overlayY: 'bottom' });
            if (!this.position.includes('above-below')) {
                strategy = strategy
                    .withFallbackPosition({ originX: originX, originY: 'center' }, { overlayX: originX, overlayY: 'center' })
                    .withFallbackPosition({ originX: fallbackX, originY: 'center' }, { overlayX: fallbackX, overlayY: 'center' });
            }
        }
        return strategy;
    };
    NovoOverlayTemplateComponent.prototype.getScrollStrategy = function () {
        switch (this.scrollStrategy) {
            case 'block':
                return this.overlay.scrollStrategies.block();
            case 'reposition':
                return this.overlay.scrollStrategies.reposition();
            default:
                return this.overlay.scrollStrategies.close();
        }
    };
    NovoOverlayTemplateComponent.prototype.checkSizes = function () {
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
    };
    NovoOverlayTemplateComponent.prototype.getConnectedElement = function () {
        return this.parent;
    };
    NovoOverlayTemplateComponent.prototype.getHostWidth = function () {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
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
    return NovoOverlayTemplateComponent;
}());
export { NovoOverlayTemplateComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoOverlayTemplateComponent, [{
        type: Component,
        args: [{
                selector: 'novo-overlay-template',
                template: "\n    <ng-template>\n      <div class=\"novo-overlay-panel\" role=\"listbox\" [id]=\"id\" #panel><ng-content></ng-content></div>\n    </ng-template>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9vdmVybGF5L092ZXJsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFHTCxPQUFPLEVBQ1AsYUFBYSxHQUlkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxTQUFTO0FBQ1QsT0FBTyxFQUE0QixFQUFFLElBQUksWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0lBTXBELGlDQUFnRTtJQUFBLGtCQUFZO0lBQWEsaUJBQU07OztJQUFoRCw4QkFBUzs7O0FBSjlEO0lBa0RFLHNDQUNZLE9BQWdCLEVBQ2hCLGdCQUFrQyxFQUNsQyxJQUFZLEVBQ1osaUJBQW9DLEVBR3BDLFFBQWE7UUFOYixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFHcEMsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQS9DbEIsT0FBRSxHQUFXLGtCQUFnQixJQUFJLENBQUMsR0FB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Q0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFUywwREFBbUIsR0FBN0I7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVTLG1EQUFZLEdBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDaEYsQ0FBQzs0R0F4UVUsNEJBQTRCLGlMQStDN0IsUUFBUTtxRUEvQ1AsNEJBQTRCOzJCQUc1QixXQUFXOzs7Ozs7OztZQVRwQiwwRkFDRTs7dUNBcENOO0NBa1RDLEFBbFJELElBa1JDO1NBelFZLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBVHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsMEpBSVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O3NCQStDSSxRQUFROztzQkFDUixNQUFNO3VCQUFDLFFBQVE7O2tCQTVDakIsU0FBUzttQkFBQyxXQUFXOztrQkFFckIsU0FBUzttQkFBQyxPQUFPOztrQkFHakIsS0FBSzs7a0JBWUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBR0wsTUFBTTs7a0JBRU4sTUFBTTs7a0JBNEJOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgU2Nyb2xsU3RyYXRlZ3ksXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBvZiBhcyBvYnNlcnZhYmxlT2YsIG1lcmdlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1vdmVybGF5LXRlbXBsYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1vdmVybGF5LXBhbmVsXCIgcm9sZT1cImxpc3Rib3hcIiBbaWRdPVwiaWRcIiAjcGFuZWw+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIGlkOiBzdHJpbmcgPSBgbm92by1vdmVybGF5LSR7RGF0ZS5ub3coKX1gO1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpXG4gIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgncGFuZWwnKVxuICBwdWJsaWMgcGFuZWw6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBvc2l0aW9uOlxuICAgIHwgJ2RlZmF1bHQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnYWJvdmUtYmVsb3cnXG4gICAgfCAncmlnaHQtYWJvdmUtYmVsb3cnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2JvdHRvbSdcbiAgICB8ICdib3R0b20tbGVmdCdcbiAgICB8ICdib3R0b20tcmlnaHQnXG4gICAgfCAndG9wLWxlZnQnXG4gICAgfCAndG9wLXJpZ2h0JyA9ICdkZWZhdWx0JztcbiAgQElucHV0KClcbiAgcHVibGljIHNjcm9sbFN0cmF0ZWd5OiAncmVwb3NpdGlvbicgfCAnYmxvY2snIHwgJ2Nsb3NlJyA9ICdyZXBvc2l0aW9uJztcbiAgQElucHV0KClcbiAgcHVibGljIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjbG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIHB1YmxpYyBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XG5cbiAgLy8gVGhlIHN1YnNjcmlwdGlvbiBmb3IgY2xvc2luZyBhY3Rpb25zIChzb21lIGFyZSBib3VuZCB0byBkb2N1bWVudClcbiAgcHJvdGVjdGVkIGNsb3NpbmdBY3Rpb25zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3BhcmVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KERPQ1VNRU5UKVxuICAgIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICApIHt9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveU92ZXJsYXkoKTtcbiAgfVxuXG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGFyZW50KHZhbHVlOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gICAgdGhpcy5jaGVja1NpemVzKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudCgpOiBFbGVtZW50UmVmIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG5cbiAgcHVibGljIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5jcmVhdGVPdmVybGF5KHRoaXMudGVtcGxhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrU2l6ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgdGhpcy5jbG9zaW5nQWN0aW9uc1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlVG9DbG9zaW5nQWN0aW9ucygpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuY2xvc2luZ0FjdGlvbnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2luZy5lbWl0KHRydWUpO1xuICAgICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25DbG9zaW5nQWN0aW9uKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHN0cmVhbSBvZiBhY3Rpb25zIHRoYXQgc2hvdWxkIGNsb3NlIHRoZSBhdXRvY29tcGxldGUgcGFuZWwsIGluY2x1ZGluZ1xuICAgKiB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZCwgb24gYmx1ciwgYW5kIHdoZW4gVEFCIGlzIHByZXNzZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhbmVsQ2xvc2luZ0FjdGlvbnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAvLyB0aGlzLm92ZXJsYXlUZW1wbGF0ZS5fa2V5TWFuYWdlci50YWJPdXQsXG4gICAgICB0aGlzLm91dHNpZGVDbGlja1N0cmVhbSxcbiAgICApO1xuICB9XG5cbiAgLyoqIFN0cmVhbSBvZiBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgYXV0b2NvbXBsZXRlIHBhbmVsLiAqL1xuICBwcm90ZWN0ZWQgZ2V0IG91dHNpZGVDbGlja1N0cmVhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmICghdGhpcy5kb2N1bWVudCkge1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVPZigpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ21vdXNlZG93bicpLCBmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ3RvdWNoZW5kJykpLnBpcGUoXG4gICAgICBmaWx0ZXIoKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNsaWNrZWQ6IGJvb2xlYW4gPVxuICAgICAgICAgIHRoaXMucGFuZWxPcGVuICYmXG4gICAgICAgICAgY2xpY2tUYXJnZXQgIT09IHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAhdGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkubmF0aXZlRWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiZcbiAgICAgICAgICAoISF0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkpO1xuICAgICAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgISF0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJiB0aGlzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpY2tlZDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgbGlzdGVucyB0byBhIHN0cmVhbSBvZiBwYW5lbCBjbG9zaW5nIGFjdGlvbnMgYW5kIHJlc2V0cyB0aGVcbiAgICogc3RyZWFtIGV2ZXJ5IHRpbWUgdGhlIG9wdGlvbiBsaXN0IGNoYW5nZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3Vic2NyaWJlVG9DbG9zaW5nQWN0aW9ucygpOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IGZpcnN0U3RhYmxlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnpvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShmaXJzdCgpKTtcbiAgICAvLyBjb25zdCB2YWx1ZUNoYW5nZXMgPSBPYnNlcnZhYmxlLmZyb20odGhpcy52YWx1ZSk7XG4gICAgLy8gV2hlbiB0aGUgem9uZSBpcyBzdGFibGUgaW5pdGlhbGx5LCBhbmQgd2hlbiB0aGUgb3B0aW9uIGxpc3QgY2hhbmdlcy4uLlxuICAgIHJldHVybiAoXG4gICAgICBtZXJnZShmaXJzdFN0YWJsZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHN0cmVhbSBvZiBwYW5lbENsb3NpbmdBY3Rpb25zLCByZXBsYWNpbmcgYW55IHByZXZpb3VzIHN0cmVhbXNcbiAgICAgICAgICAvLyB0aGF0IHdlcmUgY3JlYXRlZCwgYW5kIGZsYXR0ZW4gaXQgc28gb3VyIHN0cmVhbSBvbmx5IGVtaXRzIGNsb3NpbmcgZXZlbnRzLi4uXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhbmVsQ2xvc2luZ0FjdGlvbnM7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gd2hlbiB0aGUgZmlyc3QgY2xvc2luZyBldmVudCBvY2N1cnMuLi5cbiAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICApXG4gICAgICAgIC8vIHNldCB0aGUgdmFsdWUsIGNsb3NlIHRoZSBwYW5lbCwgYW5kIGNvbXBsZXRlLlxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB0aGlzLm9uQ2xvc2luZ0FjdGlvbihldmVudCkpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVPdmVybGF5KHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZVBhbmVsKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdCBjb25maWc6IE92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZygpO1xuXG4gICAgaWYgKCF0aGlzLndpZHRoKSB7XG4gICAgICBjb25maWcud2lkdGggPSB0aGlzLmdldEhvc3RXaWR0aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhlaWdodCkge1xuICAgICAgY29uZmlnLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgIGNvbmZpZy5oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICAgIGNvbmZpZy5kaXJlY3Rpb24gPSAnbHRyJztcbiAgICBjb25maWcuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLmdldFNjcm9sbFN0cmF0ZWd5KCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcG9zaXRpb24gc3RyYXRlZ2llczpcbiAgICogJ2RlZmF1bHQnLCAncmlnaHQnLCAnYm90dG9tJywgJ2NlbnRlcicsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0J1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldFBvc2l0aW9uKCk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnY2VudGVyJykge1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVxuICAgICAgICAucG9zaXRpb24oKVxuICAgICAgICAuY29ubmVjdGVkVG8odGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCksIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgW29yaWdpblgsIGZhbGxiYWNrWF06IEhvcml6b250YWxDb25uZWN0aW9uUG9zW10gPSB0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCdyaWdodCcpID8gWydlbmQnLCAnc3RhcnQnXSA6IFsnc3RhcnQnLCAnZW5kJ107XG4gICAgY29uc3QgW29yaWdpblksIG92ZXJsYXlZXTogVmVydGljYWxDb25uZWN0aW9uUG9zW10gPSB0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCd0b3AnKSA/IFsndG9wJywgJ2JvdHRvbSddIDogWydib3R0b20nLCAndG9wJ107XG5cbiAgICBsZXQgc3RyYXRlZ3k6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuY29ubmVjdGVkVG8odGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCksIHsgb3JpZ2luWCwgb3JpZ2luWSB9LCB7IG92ZXJsYXlYOiBvcmlnaW5YLCBvdmVybGF5WSB9KVxuICAgICAgLndpdGhEaXJlY3Rpb24oJ2x0cicpO1xuXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICBzdHJhdGVneSA9IHN0cmF0ZWd5LndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAndG9wJyB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24gPT09ICdyaWdodCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ2RlZmF1bHQnIHx8IHRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ2Fib3ZlLWJlbG93JykpIHtcbiAgICAgIHN0cmF0ZWd5ID0gc3RyYXRlZ3lcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWCwgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogZmFsbGJhY2tYLCBvdmVybGF5WTogJ3RvcCcgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAnYm90dG9tJyB9KTtcbiAgICAgIGlmICghdGhpcy5wb3NpdGlvbi5pbmNsdWRlcygnYWJvdmUtYmVsb3cnKSkge1xuICAgICAgICBzdHJhdGVneSA9IHN0cmF0ZWd5XG4gICAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWCwgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAnY2VudGVyJyB9LCB7IG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAnY2VudGVyJyB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cmF0ZWd5O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNjcm9sbFN0cmF0ZWd5KCk6IFNjcm9sbFN0cmF0ZWd5IHtcbiAgICBzd2l0Y2ggKHRoaXMuc2Nyb2xsU3RyYXRlZ3kpIHtcbiAgICAgIGNhc2UgJ2Jsb2NrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG4gICAgICBjYXNlICdyZXBvc2l0aW9uJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjaGVja1NpemVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIGlmICghdGhpcy53aWR0aCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkud2lkdGggPSB0aGlzLmdldEhvc3RXaWR0aCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKSk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbm5lY3RlZEVsZW1lbnQoKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEhvc3RXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICB9XG59XG4iXX0=