/**
 * @fileoverview added by tsickle
 * Generated from: elements/overlay/Overlay.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, TemplateRef, ViewChild, ViewContainerRef, } from '@angular/core';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
// Vendor
import { of as observableOf, merge, fromEvent } from 'rxjs';
import { filter, first, switchMap } from 'rxjs/operators';
var NovoOverlayTemplateComponent = /** @class */ (function () {
    function NovoOverlayTemplateComponent(overlay, viewContainerRef, zone, changeDetectorRef, document) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.document = document;
        this.id = "novo-overlay-" + Date.now();
        this.scrollStrategy = 'reposition';
        this.closeOnSelect = true;
        this.select = new EventEmitter();
        this.closing = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyOverlay();
    };
    Object.defineProperty(NovoOverlayTemplateComponent.prototype, "panelOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.overlayRef && this.overlayRef.hasAttached();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoOverlayTemplateComponent.prototype, "parent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._parent = value;
            this.checkSizes();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.openPanel = /**
     * @return {?}
     */
    function () {
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.overlayRef) {
                _this.overlayRef.updatePosition();
            }
        }));
    };
    /**
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run((/**
         * @return {?}
         */
        function () {
            if (_this.overlayRef && _this.overlayRef.hasAttached()) {
                _this.overlayRef.detach();
                _this.closingActionsSubscription.unsubscribe();
            }
            _this.closing.emit(true);
            if (_this.panelOpen) {
                _this.changeDetectorRef.markForCheck();
            }
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.onClosingAction = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.closePanel();
    };
    Object.defineProperty(NovoOverlayTemplateComponent.prototype, "panelClosingActions", {
        /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         */
        get: /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         * @return {?}
         */
        function () {
            return merge(
            // this.overlayTemplate._keyManager.tabOut,
            this.outsideClickStream);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoOverlayTemplateComponent.prototype, "outsideClickStream", {
        /** Stream of clicks outside of the autocomplete panel. */
        get: /**
         * Stream of clicks outside of the autocomplete panel.
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.document) {
                return observableOf();
            }
            return merge(fromEvent(this.document, 'mousedown'), fromEvent(this.document, 'touchend')).pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var clickTarget = (/** @type {?} */ (event.target));
                /** @type {?} */
                var clicked = _this.panelOpen &&
                    clickTarget !== _this.getConnectedElement().nativeElement &&
                    !_this.getConnectedElement().nativeElement.contains(clickTarget) &&
                    (!!_this.overlayRef && !_this.overlayRef.overlayElement.contains(clickTarget));
                if (_this.panelOpen && !!_this.overlayRef && _this.overlayRef.overlayElement.contains(clickTarget) && _this.closeOnSelect) {
                    _this.select.emit(event);
                }
                return clicked;
            })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     * @protected
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.subscribeToClosingActions = /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var firstStable = this.zone.onStable.asObservable().pipe(first());
        // const valueChanges = Observable.from(this.value);
        // When the zone is stable initially, and when the option list changes...
        return (merge(firstStable)
            .pipe(
        // create a new stream of panelClosingActions, replacing any previous streams
        // that were created, and flatten it so our stream only emits closing events...
        switchMap((/**
         * @return {?}
         */
        function () {
            return _this.panelClosingActions;
        })), 
        // when the first closing event occurs...
        first())
            // set the value, close the panel, and complete.
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onClosingAction(event); })));
    };
    /**
     * @protected
     * @param {?} template
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.createOverlay = /**
     * @protected
     * @param {?} template
     * @return {?}
     */
    function (template) {
        var _this = this;
        this.portal = new TemplatePortal(template, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.backdropClick().subscribe((/**
         * @return {?}
         */
        function () { return _this.closePanel(); }));
    };
    /**
     * @protected
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.destroyOverlay = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.closePanel();
            this.overlayRef.dispose();
            this.overlayRef = undefined;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.getOverlayConfig = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
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
        config.positionStrategy = this.getPosition(this.position);
        config.hasBackdrop = false;
        config.direction = 'ltr';
        config.scrollStrategy = this.getScrollStrategy();
        return config;
    };
    /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.getPosition = /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    function (position) {
        return this.overlay
            .position()
            .flexibleConnectedTo(this.getConnectedElement())
            .withPositions(this._getPositions(position));
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype._getPositions = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (position === 'center') {
            return [
                { originX: 'start', originY: 'center', overlayX: 'start', overlayY: 'center' },
                { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'top' },
                { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'bottom' },
            ];
        }
        /** @type {?} */
        var positions = [];
        var _a = tslib_1.__read(position.includes('right') ? ['end', 'start'] : ['start', 'end'], 2), originX = _a[0], fallbackX = _a[1];
        var _b = tslib_1.__read(position.includes('top') ? ['top', 'bottom'] : ['bottom', 'top'], 2), originY = _b[0], overlayY = _b[1];
        positions.push({ originX: originX, originY: originY, overlayX: originX, overlayY: overlayY });
        if (position === 'bottom') {
            positions.push({ originX: fallbackX, originY: 'bottom', overlayX: fallbackX, overlayY: 'top' });
        }
        else if (position === 'right' || position === 'default' || position.includes('above-below')) {
            positions.push({ originX: originX, originY: 'top', overlayX: originX, overlayY: 'bottom' });
            positions.push({ originX: fallbackX, originY: 'bottom', overlayX: fallbackX, overlayY: 'top' });
            positions.push({ originX: fallbackX, originY: 'top', overlayX: fallbackX, overlayY: 'bottom' });
            if (!position.includes('above-below')) {
                positions.push({ originX: originX, originY: 'center', overlayX: originX, overlayY: 'center' });
                positions.push({ originX: fallbackX, originY: 'center', overlayX: fallbackX, overlayY: 'center' });
            }
        }
        return positions;
    };
    /**
     * @protected
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.getScrollStrategy = /**
     * @protected
     * @return {?}
     */
    function () {
        switch (this.scrollStrategy) {
            case 'block':
                return this.overlay.scrollStrategies.block();
            case 'reposition':
                return this.overlay.scrollStrategies.reposition();
            default:
                return this.overlay.scrollStrategies.close();
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.checkSizes = /**
     * @protected
     * @return {?}
     */
    function () {
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
    /**
     * @protected
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.getConnectedElement = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.parent;
    };
    /**
     * @protected
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.getHostWidth = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
    NovoOverlayTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'novo-overlay-template',
                    template: "\n    <ng-template>\n      <div class=\"novo-overlay-panel\" role=\"listbox\" [id]=\"id\" #panel><ng-content></ng-content></div>\n    </ng-template>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoOverlayTemplateComponent.ctorParameters = function () { return [
        { type: Overlay },
        { type: ViewContainerRef },
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NovoOverlayTemplateComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
        panel: [{ type: ViewChild, args: ['panel', { static: false },] }],
        position: [{ type: Input }],
        scrollStrategy: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        closeOnSelect: [{ type: Input }],
        select: [{ type: Output }],
        closing: [{ type: Output }],
        parent: [{ type: Input }]
    };
    return NovoOverlayTemplateComponent;
}());
export { NovoOverlayTemplateComponent };
if (false) {
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.id;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.template;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.panel;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.position;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.scrollStrategy;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.width;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.height;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.closeOnSelect;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.select;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.closing;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.overlayRef;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.portal;
    /**
     * @type {?}
     * @protected
     */
    NovoOverlayTemplateComponent.prototype.closingActionsSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoOverlayTemplateComponent.prototype._parent;
    /**
     * @type {?}
     * @protected
     */
    NovoOverlayTemplateComponent.prototype.overlay;
    /**
     * @type {?}
     * @protected
     */
    NovoOverlayTemplateComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @protected
     */
    NovoOverlayTemplateComponent.prototype.zone;
    /**
     * @type {?}
     * @protected
     */
    NovoOverlayTemplateComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @protected
     */
    NovoOverlayTemplateComponent.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9vdmVybGF5L092ZXJsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLE9BQU8sRUFDUCxhQUFhLEdBTWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUzQyxPQUFPLEVBQTRCLEVBQUUsSUFBSSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWMxRDtJQXdDRSxzQ0FDWSxPQUFnQixFQUNoQixnQkFBa0MsRUFDbEMsSUFBWSxFQUNaLGlCQUFvQyxFQUdwQyxRQUFhO1FBTmIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBR3BDLGFBQVEsR0FBUixRQUFRLENBQUs7UUFyQ2xCLE9BQUUsR0FBVyxrQkFBZ0IsSUFBSSxDQUFDLEdBQUcsRUFBSSxDQUFDO1FBVTFDLG1CQUFjLEdBQXFDLFlBQVksQ0FBQztRQU1oRSxrQkFBYSxHQUFZLElBQUksQ0FBQztR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bnRlbnQiOlsiLy8gQW5ndWxhclxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MsXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWYsXG4gIFNjcm9sbFN0cmF0ZWd5LFxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBvZiBhcyBvYnNlcnZhYmxlT2YsIG1lcmdlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgT3ZlcmxheVBvc2l0aW9uID1cbiAgfCAnZGVmYXVsdCdcbiAgfCAncmlnaHQnXG4gIHwgJ2Fib3ZlLWJlbG93J1xuICB8ICdyaWdodC1hYm92ZS1iZWxvdydcbiAgfCAnY2VudGVyJ1xuICB8ICdib3R0b20nXG4gIHwgJ2JvdHRvbS1sZWZ0J1xuICB8ICdib3R0b20tcmlnaHQnXG4gIHwgJ3RvcC1sZWZ0J1xuICB8ICd0b3AtcmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW92ZXJsYXktdGVtcGxhdGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLW92ZXJsYXktcGFuZWxcIiByb2xlPVwibGlzdGJveFwiIFtpZF09XCJpZFwiICNwYW5lbD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaWQ6IHN0cmluZyA9IGBub3ZvLW92ZXJsYXktJHtEYXRlLm5vdygpfWA7XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgncGFuZWwnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHVibGljIHBhbmVsOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwb3NpdGlvbjogT3ZlcmxheVBvc2l0aW9uO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2Nyb2xsU3RyYXRlZ3k6ICdyZXBvc2l0aW9uJyB8ICdibG9jaycgfCAnY2xvc2UnID0gJ3JlcG9zaXRpb24nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KClcbiAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcHVibGljIGNsb3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcbiAgcHVibGljIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcblxuICAvLyBUaGUgc3Vic2NyaXB0aW9uIGZvciBjbG9zaW5nIGFjdGlvbnMgKHNvbWUgYXJlIGJvdW5kIHRvIGRvY3VtZW50KVxuICBwcm90ZWN0ZWQgY2xvc2luZ0FjdGlvbnNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcGFyZW50OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoRE9DVU1FTlQpXG4gICAgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksXG4gICkge31cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95T3ZlcmxheSgpO1xuICB9XG5cbiAgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwYXJlbnQodmFsdWU6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmNoZWNrU2l6ZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFyZW50KCk6IEVsZW1lbnRSZWYge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cblxuICBwdWJsaWMgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLmNyZWF0ZU92ZXJsYXkodGhpcy50ZW1wbGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tTaXplcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XG4gICAgICB0aGlzLmNsb3NpbmdBY3Rpb25zU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVUb0Nsb3NpbmdBY3Rpb25zKCk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5jbG9zaW5nQWN0aW9uc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbG9zaW5nLmVtaXQodHJ1ZSk7XG4gICAgICBpZiAodGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsb3NpbmdBY3Rpb24oZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgc3RyZWFtIG9mIGFjdGlvbnMgdGhhdCBzaG91bGQgY2xvc2UgdGhlIGF1dG9jb21wbGV0ZSBwYW5lbCwgaW5jbHVkaW5nXG4gICAqIHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLCBvbiBibHVyLCBhbmQgd2hlbiBUQUIgaXMgcHJlc3NlZC5cbiAgICovXG4gIHB1YmxpYyBnZXQgcGFuZWxDbG9zaW5nQWN0aW9ucygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBtZXJnZShcbiAgICAgIC8vIHRoaXMub3ZlcmxheVRlbXBsYXRlLl9rZXlNYW5hZ2VyLnRhYk91dCxcbiAgICAgIHRoaXMub3V0c2lkZUNsaWNrU3RyZWFtLFxuICAgICk7XG4gIH1cblxuICAvKiogU3RyZWFtIG9mIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBhdXRvY29tcGxldGUgcGFuZWwuICovXG4gIHByb3RlY3RlZCBnZXQgb3V0c2lkZUNsaWNrU3RyZWFtKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKCF0aGlzLmRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKGZyb21FdmVudCh0aGlzLmRvY3VtZW50LCAnbW91c2Vkb3duJyksIGZyb21FdmVudCh0aGlzLmRvY3VtZW50LCAndG91Y2hlbmQnKSkucGlwZShcbiAgICAgIGZpbHRlcigoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgY2xpY2tlZDogYm9vbGVhbiA9XG4gICAgICAgICAgdGhpcy5wYW5lbE9wZW4gJiZcbiAgICAgICAgICBjbGlja1RhcmdldCAhPT0gdGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkubmF0aXZlRWxlbWVudCAmJlxuICAgICAgICAgICF0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJlxuICAgICAgICAgICghIXRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSk7XG4gICAgICAgIGlmICh0aGlzLnBhbmVsT3BlbiAmJiAhIXRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmIHRoaXMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0LmVtaXQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGlja2VkO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBsaXN0ZW5zIHRvIGEgc3RyZWFtIG9mIHBhbmVsIGNsb3NpbmcgYWN0aW9ucyBhbmQgcmVzZXRzIHRoZVxuICAgKiBzdHJlYW0gZXZlcnkgdGltZSB0aGUgb3B0aW9uIGxpc3QgY2hhbmdlcy5cbiAgICovXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVUb0Nsb3NpbmdBY3Rpb25zKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3QgZmlyc3RTdGFibGU6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuem9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKGZpcnN0KCkpO1xuICAgIC8vIGNvbnN0IHZhbHVlQ2hhbmdlcyA9IE9ic2VydmFibGUuZnJvbSh0aGlzLnZhbHVlKTtcbiAgICAvLyBXaGVuIHRoZSB6b25lIGlzIHN0YWJsZSBpbml0aWFsbHksIGFuZCB3aGVuIHRoZSBvcHRpb24gbGlzdCBjaGFuZ2VzLi4uXG4gICAgcmV0dXJuIChcbiAgICAgIG1lcmdlKGZpcnN0U3RhYmxlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgc3RyZWFtIG9mIHBhbmVsQ2xvc2luZ0FjdGlvbnMsIHJlcGxhY2luZyBhbnkgcHJldmlvdXMgc3RyZWFtc1xuICAgICAgICAgIC8vIHRoYXQgd2VyZSBjcmVhdGVkLCBhbmQgZmxhdHRlbiBpdCBzbyBvdXIgc3RyZWFtIG9ubHkgZW1pdHMgY2xvc2luZyBldmVudHMuLi5cbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFuZWxDbG9zaW5nQWN0aW9ucztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyB3aGVuIHRoZSBmaXJzdCBjbG9zaW5nIGV2ZW50IG9jY3Vycy4uLlxuICAgICAgICAgIGZpcnN0KCksXG4gICAgICAgIClcbiAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZSwgY2xvc2UgdGhlIHBhbmVsLCBhbmQgY29tcGxldGUuXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHRoaXMub25DbG9zaW5nQWN0aW9uKGV2ZW50KSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU92ZXJsYXkodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0ZW1wbGF0ZSwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlUGFuZWwoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveU92ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xuICAgIGNvbnN0IGNvbmZpZzogT3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKCk7XG5cbiAgICBpZiAoIXRoaXMud2lkdGgpIHtcbiAgICAgIGNvbmZpZy53aWR0aCA9IHRoaXMuZ2V0SG9zdFdpZHRoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICBjb25maWcuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgIGNvbmZpZy5oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICAgIGNvbmZpZy5kaXJlY3Rpb24gPSAnbHRyJztcbiAgICBjb25maWcuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLmdldFNjcm9sbFN0cmF0ZWd5KCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBvc2l0aW9uKHBvc2l0aW9uOiBPdmVybGF5UG9zaXRpb24pOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKSlcbiAgICAgIC53aXRoUG9zaXRpb25zKHRoaXMuX2dldFBvc2l0aW9ucyhwb3NpdGlvbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UG9zaXRpb25zKHBvc2l0aW9uOiBPdmVybGF5UG9zaXRpb24pOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10ge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcicsIG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2NlbnRlcicgfSxcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW107XG5cbiAgICBjb25zdCBbb3JpZ2luWCwgZmFsbGJhY2tYXTogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3NbXSA9IHBvc2l0aW9uLmluY2x1ZGVzKCdyaWdodCcpID8gWydlbmQnLCAnc3RhcnQnXSA6IFsnc3RhcnQnLCAnZW5kJ107XG4gICAgY29uc3QgW29yaWdpblksIG92ZXJsYXlZXTogVmVydGljYWxDb25uZWN0aW9uUG9zW10gPSBwb3NpdGlvbi5pbmNsdWRlcygndG9wJykgPyBbJ3RvcCcsICdib3R0b20nXSA6IFsnYm90dG9tJywgJ3RvcCddO1xuXG4gICAgcG9zaXRpb25zLnB1c2goeyBvcmlnaW5YLCBvcmlnaW5ZLCBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVkgfSk7XG5cbiAgICBpZiAocG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICBwb3NpdGlvbnMucHVzaCh7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAndG9wJyB9KTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAncmlnaHQnIHx8IHBvc2l0aW9uID09PSAnZGVmYXVsdCcgfHwgcG9zaXRpb24uaW5jbHVkZXMoJ2Fib3ZlLWJlbG93JykpIHtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHsgb3JpZ2luWCwgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlYOiBvcmlnaW5YLCBvdmVybGF5WTogJ2JvdHRvbScgfSk7XG4gICAgICBwb3NpdGlvbnMucHVzaCh7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAndG9wJyB9KTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVg6IGZhbGxiYWNrWCwgb3ZlcmxheVk6ICdib3R0b20nIH0pO1xuICAgICAgaWYgKCFwb3NpdGlvbi5pbmNsdWRlcygnYWJvdmUtYmVsb3cnKSkge1xuICAgICAgICBwb3NpdGlvbnMucHVzaCh7IG9yaWdpblg6IG9yaWdpblgsIG9yaWdpblk6ICdjZW50ZXInLCBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVk6ICdjZW50ZXInIH0pO1xuICAgICAgICBwb3NpdGlvbnMucHVzaCh7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ2NlbnRlcicsIG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAnY2VudGVyJyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNjcm9sbFN0cmF0ZWd5KCk6IFNjcm9sbFN0cmF0ZWd5IHtcbiAgICBzd2l0Y2ggKHRoaXMuc2Nyb2xsU3RyYXRlZ3kpIHtcbiAgICAgIGNhc2UgJ2Jsb2NrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG4gICAgICBjYXNlICdyZXBvc2l0aW9uJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjaGVja1NpemVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIGlmICghdGhpcy53aWR0aCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkud2lkdGggPSB0aGlzLmdldEhvc3RXaWR0aCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKSk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbm5lY3RlZEVsZW1lbnQoKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEhvc3RXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICB9XG59XG4iXX0=