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
        this.position = 'default';
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
                var clickedOutside = _this.panelOpen &&
                    clickTarget !== _this.getConnectedElement().nativeElement &&
                    !_this.getConnectedElement().nativeElement.contains(clickTarget) &&
                    (!!_this.overlayRef && !_this.overlayRef.overlayElement.contains(clickTarget)) &&
                    !_this.elementIsInNestedOverlay(clickTarget);
                if (_this.panelOpen && !!_this.overlayRef && _this.overlayRef.overlayElement.contains(clickTarget) && _this.closeOnSelect) {
                    _this.select.emit(event);
                }
                return clickedOutside;
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
    /**
     * Supports the following position strategies:
     * 'default', 'right', 'bottom', 'center', 'bottom-left', 'bottom-right', 'top-left', 'top-right'
     * @protected
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.getPosition = /**
     * Supports the following position strategies:
     * 'default', 'right', 'bottom', 'center', 'bottom-left', 'bottom-right', 'top-left', 'top-right'
     * @protected
     * @return {?}
     */
    function () {
        if (this.position === 'center') {
            return this.overlay
                .position()
                .connectedTo(this.getConnectedElement(), { originX: 'start', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' });
        }
        var _a = tslib_1.__read(this.position.includes('right') ? ['end', 'start'] : ['start', 'end'], 2), originX = _a[0], fallbackX = _a[1];
        var _b = tslib_1.__read(this.position.includes('top') ? ['top', 'bottom'] : ['bottom', 'top'], 2), originY = _b[0], overlayY = _b[1];
        /** @type {?} */
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
     * @param {?} el
     * @return {?}
     */
    NovoOverlayTemplateComponent.prototype.elementIsInNestedOverlay = /**
     * @protected
     * @param {?} el
     * @return {?}
     */
    function (el) {
        while (el.parentNode) {
            if (el.id && el.id.includes('novo-overlay')) {
                return this.id < el.id;
            }
            el = el.parentNode;
        }
        return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9vdmVybGF5L092ZXJsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLE9BQU8sRUFDUCxhQUFhLEdBSWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUzQyxPQUFPLEVBQTRCLEVBQUUsSUFBSSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRDtJQWtERSxzQ0FDWSxPQUFnQixFQUNoQixnQkFBa0MsRUFDbEMsSUFBWSxFQUNaLGlCQUFvQyxFQUdwQyxRQUFhO1FBTmIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBR3BDLGFBQVEsR0FBUixRQUFRLENBQUs7UUEvQ2xCLE9BQUUsR0FBVyxrQkFBZ0IsSUFBSSxDQUFDLEdBQUcsRUFBSSxDQUFDO1FBUTFDLGFBQVEsR0FVRyxTQUFTLENBQUM7UUFFckIsbUJBQWMsR0FBcUMsWUFBWSxDQUFDO1FBTWhFLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFpQnBELENBQUM7Ozs7SUFFRyxrREFBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBSSxtREFBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFDVyxnREFBTTs7OztRQUtqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQVJELFVBQ2tCLEtBQWlCO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7OztJQU1NLGdEQUFTOzs7SUFBaEI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLFVBQVU7OztRQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0saURBQVU7OztJQUFqQjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7UUFBQztZQUNaLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUNwRCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN6QixLQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDL0M7WUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxzREFBZTs7OztJQUF0QixVQUF1QixLQUFVO1FBQy9CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBTUQsc0JBQVcsNkRBQW1CO1FBSjlCOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLEtBQUs7WUFDViwyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLGtCQUFrQixDQUN4QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFHRCxzQkFBYyw0REFBa0I7UUFEaEMsMERBQTBEOzs7Ozs7UUFDMUQ7WUFBQSxpQkFvQkM7WUFuQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLE9BQU8sWUFBWSxFQUFFLENBQUM7YUFDdkI7WUFFRCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDNUYsTUFBTTs7OztZQUFDLFVBQUMsS0FBOEI7O29CQUM5QixXQUFXLEdBQWdCLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQWU7O29CQUN0RCxjQUFjLEdBQ2xCLEtBQUksQ0FBQyxTQUFTO29CQUNkLFdBQVcsS0FBSyxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxhQUFhO29CQUN4RCxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO29CQUMvRCxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM1RSxDQUFDLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUM7Z0JBQzdDLElBQUksS0FBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTtvQkFDckgsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3pCO2dCQUNELE9BQU8sY0FBYyxDQUFDO1lBQ3hCLENBQUMsRUFBQyxDQUNILENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRzs7Ozs7OztJQUNPLGdFQUF5Qjs7Ozs7O0lBQW5DO1FBQUEsaUJBa0JDOztZQWpCTyxXQUFXLEdBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRixvREFBb0Q7UUFDcEQseUVBQXlFO1FBQ3pFLE9BQU8sQ0FDTCxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2YsSUFBSTtRQUNILDZFQUE2RTtRQUM3RSwrRUFBK0U7UUFDL0UsU0FBUzs7O1FBQUM7WUFDUixPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNsQyxDQUFDLEVBQUM7UUFDRix5Q0FBeUM7UUFDekMsS0FBSyxFQUFFLENBQ1I7WUFDRCxnREFBZ0Q7YUFDL0MsU0FBUzs7OztRQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMsb0RBQWE7Ozs7O0lBQXZCLFVBQXdCLFFBQTBCO1FBQWxELGlCQUlDO1FBSEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBRVMscURBQWM7Ozs7SUFBeEI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQUVTLHVEQUFnQjs7OztJQUExQjs7WUFDUSxNQUFNLEdBQWtCLElBQUksYUFBYSxFQUFFO1FBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEM7YUFBTTtZQUNMLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM3QjtRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUVqRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ08sa0RBQVc7Ozs7OztJQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTztpQkFDaEIsUUFBUSxFQUFFO2lCQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQzNILG9CQUFvQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDbEcsb0JBQW9CLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDN0c7UUFFSyxJQUFBLDZGQUF1SCxFQUF0SCxlQUFPLEVBQUUsaUJBQTZHO1FBQ3ZILElBQUEsNkZBQW9ILEVBQW5ILGVBQU8sRUFBRSxnQkFBMEc7O1lBRXRILFFBQVEsR0FBOEIsSUFBSSxDQUFDLE9BQU87YUFDbkQsUUFBUSxFQUFFO2FBQ1YsV0FBVyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQzthQUM5RixhQUFhLENBQUMsS0FBSyxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDOUIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUMvSDthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDNUcsUUFBUSxHQUFHLFFBQVE7aUJBQ2hCLG9CQUFvQixDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQzVGLG9CQUFvQixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDekcsb0JBQW9CLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDN0csSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMxQyxRQUFRLEdBQUcsUUFBUTtxQkFDaEIsb0JBQW9CLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztxQkFDL0Ysb0JBQW9CLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDakg7U0FDRjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRVMsd0RBQWlCOzs7O0lBQTNCO1FBQ0UsUUFBUSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzNCLEtBQUssT0FBTztnQkFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0MsS0FBSyxZQUFZO2dCQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwRDtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs7OztJQUVTLGlEQUFVOzs7O0lBQXBCO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6RDtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Ozs7SUFFUywwREFBbUI7Ozs7SUFBN0I7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRVMsK0RBQXdCOzs7OztJQUFsQyxVQUFtQyxFQUFFO1FBQ25DLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDcEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRVMsbURBQVk7Ozs7SUFBdEI7UUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNoRixDQUFDOztnQkE1UkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSwwSkFJVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBcEJDLE9BQU87Z0JBTFAsZ0JBQWdCO2dCQU5oQixNQUFNO2dCQU5OLGlCQUFpQjtnREFvRmQsUUFBUSxZQUNSLE1BQU0sU0FBQyxRQUFROzs7MkJBNUNqQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt3QkFFeEMsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBR3BDLEtBQUs7aUNBWUwsS0FBSzt3QkFFTCxLQUFLO3lCQUVMLEtBQUs7Z0NBRUwsS0FBSzt5QkFHTCxNQUFNOzBCQUVOLE1BQU07eUJBNEJOLEtBQUs7O0lBeU5SLG1DQUFDO0NBQUEsQUE3UkQsSUE2UkM7U0FwUlksNEJBQTRCOzs7SUFDdkMsMENBQWlEOztJQUVqRCxnREFDa0M7O0lBQ2xDLDZDQUN5Qjs7SUFFekIsZ0RBVzRCOztJQUM1QixzREFDdUU7O0lBQ3ZFLDZDQUNxQjs7SUFDckIsOENBQ3NCOztJQUN0QixxREFDcUM7O0lBRXJDLDhDQUNzRDs7SUFDdEQsK0NBQ3VEOztJQUV2RCxrREFBcUM7O0lBQ3JDLDhDQUFtQzs7Ozs7SUFHbkMsa0VBQW1EOzs7OztJQUNuRCwrQ0FBNEI7Ozs7O0lBRzFCLCtDQUEwQjs7Ozs7SUFDMUIsd0RBQTRDOzs7OztJQUM1Qyw0Q0FBc0I7Ozs7O0lBQ3RCLHlEQUE4Qzs7Ozs7SUFDOUMsZ0RBRXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhclxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MsXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWYsXG4gIFNjcm9sbFN0cmF0ZWd5LFxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBWZW5kb3JcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tb3ZlcmxheS10ZW1wbGF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tb3ZlcmxheS1wYW5lbFwiIHJvbGU9XCJsaXN0Ym94XCIgW2lkXT1cImlkXCIgI3BhbmVsPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpZDogc3RyaW5nID0gYG5vdm8tb3ZlcmxheS0ke0RhdGUubm93KCl9YDtcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCdwYW5lbCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwdWJsaWMgcGFuZWw6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBvc2l0aW9uOlxuICAgIHwgJ2RlZmF1bHQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnYWJvdmUtYmVsb3cnXG4gICAgfCAncmlnaHQtYWJvdmUtYmVsb3cnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2JvdHRvbSdcbiAgICB8ICdib3R0b20tbGVmdCdcbiAgICB8ICdib3R0b20tcmlnaHQnXG4gICAgfCAndG9wLWxlZnQnXG4gICAgfCAndG9wLXJpZ2h0JyA9ICdkZWZhdWx0JztcbiAgQElucHV0KClcbiAgcHVibGljIHNjcm9sbFN0cmF0ZWd5OiAncmVwb3NpdGlvbicgfCAnYmxvY2snIHwgJ2Nsb3NlJyA9ICdyZXBvc2l0aW9uJztcbiAgQElucHV0KClcbiAgcHVibGljIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjbG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIHB1YmxpYyBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XG5cbiAgLy8gVGhlIHN1YnNjcmlwdGlvbiBmb3IgY2xvc2luZyBhY3Rpb25zIChzb21lIGFyZSBib3VuZCB0byBkb2N1bWVudClcbiAgcHJvdGVjdGVkIGNsb3NpbmdBY3Rpb25zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3BhcmVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KERPQ1VNRU5UKVxuICAgIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICApIHt9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveU92ZXJsYXkoKTtcbiAgfVxuXG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGFyZW50KHZhbHVlOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gICAgdGhpcy5jaGVja1NpemVzKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudCgpOiBFbGVtZW50UmVmIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG5cbiAgcHVibGljIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5jcmVhdGVPdmVybGF5KHRoaXMudGVtcGxhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrU2l6ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgdGhpcy5jbG9zaW5nQWN0aW9uc1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlVG9DbG9zaW5nQWN0aW9ucygpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuY2xvc2luZ0FjdGlvbnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2luZy5lbWl0KHRydWUpO1xuICAgICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25DbG9zaW5nQWN0aW9uKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHN0cmVhbSBvZiBhY3Rpb25zIHRoYXQgc2hvdWxkIGNsb3NlIHRoZSBhdXRvY29tcGxldGUgcGFuZWwsIGluY2x1ZGluZ1xuICAgKiB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZCwgb24gYmx1ciwgYW5kIHdoZW4gVEFCIGlzIHByZXNzZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhbmVsQ2xvc2luZ0FjdGlvbnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAvLyB0aGlzLm92ZXJsYXlUZW1wbGF0ZS5fa2V5TWFuYWdlci50YWJPdXQsXG4gICAgICB0aGlzLm91dHNpZGVDbGlja1N0cmVhbSxcbiAgICApO1xuICB9XG5cbiAgLyoqIFN0cmVhbSBvZiBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgYXV0b2NvbXBsZXRlIHBhbmVsLiAqL1xuICBwcm90ZWN0ZWQgZ2V0IG91dHNpZGVDbGlja1N0cmVhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmICghdGhpcy5kb2N1bWVudCkge1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVPZigpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ21vdXNlZG93bicpLCBmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ3RvdWNoZW5kJykpLnBpcGUoXG4gICAgICBmaWx0ZXIoKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRPdXRzaWRlOiBib29sZWFuID1cbiAgICAgICAgICB0aGlzLnBhbmVsT3BlbiAmJlxuICAgICAgICAgIGNsaWNrVGFyZ2V0ICE9PSB0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICAgIXRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmXG4gICAgICAgICAgKCEhdGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpKSAmJlxuICAgICAgICAgICF0aGlzLmVsZW1lbnRJc0luTmVzdGVkT3ZlcmxheShjbGlja1RhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLnBhbmVsT3BlbiAmJiAhIXRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmIHRoaXMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0LmVtaXQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGlja2VkT3V0c2lkZTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgbGlzdGVucyB0byBhIHN0cmVhbSBvZiBwYW5lbCBjbG9zaW5nIGFjdGlvbnMgYW5kIHJlc2V0cyB0aGVcbiAgICogc3RyZWFtIGV2ZXJ5IHRpbWUgdGhlIG9wdGlvbiBsaXN0IGNoYW5nZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3Vic2NyaWJlVG9DbG9zaW5nQWN0aW9ucygpOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IGZpcnN0U3RhYmxlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnpvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShmaXJzdCgpKTtcbiAgICAvLyBjb25zdCB2YWx1ZUNoYW5nZXMgPSBPYnNlcnZhYmxlLmZyb20odGhpcy52YWx1ZSk7XG4gICAgLy8gV2hlbiB0aGUgem9uZSBpcyBzdGFibGUgaW5pdGlhbGx5LCBhbmQgd2hlbiB0aGUgb3B0aW9uIGxpc3QgY2hhbmdlcy4uLlxuICAgIHJldHVybiAoXG4gICAgICBtZXJnZShmaXJzdFN0YWJsZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHN0cmVhbSBvZiBwYW5lbENsb3NpbmdBY3Rpb25zLCByZXBsYWNpbmcgYW55IHByZXZpb3VzIHN0cmVhbXNcbiAgICAgICAgICAvLyB0aGF0IHdlcmUgY3JlYXRlZCwgYW5kIGZsYXR0ZW4gaXQgc28gb3VyIHN0cmVhbSBvbmx5IGVtaXRzIGNsb3NpbmcgZXZlbnRzLi4uXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhbmVsQ2xvc2luZ0FjdGlvbnM7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gd2hlbiB0aGUgZmlyc3QgY2xvc2luZyBldmVudCBvY2N1cnMuLi5cbiAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICApXG4gICAgICAgIC8vIHNldCB0aGUgdmFsdWUsIGNsb3NlIHRoZSBwYW5lbCwgYW5kIGNvbXBsZXRlLlxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB0aGlzLm9uQ2xvc2luZ0FjdGlvbihldmVudCkpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVPdmVybGF5KHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZVBhbmVsKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdCBjb25maWc6IE92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZygpO1xuXG4gICAgaWYgKCF0aGlzLndpZHRoKSB7XG4gICAgICBjb25maWcud2lkdGggPSB0aGlzLmdldEhvc3RXaWR0aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhlaWdodCkge1xuICAgICAgY29uZmlnLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgIGNvbmZpZy5oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICAgIGNvbmZpZy5kaXJlY3Rpb24gPSAnbHRyJztcbiAgICBjb25maWcuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLmdldFNjcm9sbFN0cmF0ZWd5KCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcG9zaXRpb24gc3RyYXRlZ2llczpcbiAgICogJ2RlZmF1bHQnLCAncmlnaHQnLCAnYm90dG9tJywgJ2NlbnRlcicsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0J1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldFBvc2l0aW9uKCk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnY2VudGVyJykge1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVxuICAgICAgICAucG9zaXRpb24oKVxuICAgICAgICAuY29ubmVjdGVkVG8odGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCksIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgW29yaWdpblgsIGZhbGxiYWNrWF06IEhvcml6b250YWxDb25uZWN0aW9uUG9zW10gPSB0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCdyaWdodCcpID8gWydlbmQnLCAnc3RhcnQnXSA6IFsnc3RhcnQnLCAnZW5kJ107XG4gICAgY29uc3QgW29yaWdpblksIG92ZXJsYXlZXTogVmVydGljYWxDb25uZWN0aW9uUG9zW10gPSB0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCd0b3AnKSA/IFsndG9wJywgJ2JvdHRvbSddIDogWydib3R0b20nLCAndG9wJ107XG5cbiAgICBsZXQgc3RyYXRlZ3k6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuY29ubmVjdGVkVG8odGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCksIHsgb3JpZ2luWCwgb3JpZ2luWSB9LCB7IG92ZXJsYXlYOiBvcmlnaW5YLCBvdmVybGF5WSB9KVxuICAgICAgLndpdGhEaXJlY3Rpb24oJ2x0cicpO1xuXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICBzdHJhdGVneSA9IHN0cmF0ZWd5LndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAndG9wJyB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24gPT09ICdyaWdodCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ2RlZmF1bHQnIHx8IHRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ2Fib3ZlLWJlbG93JykpIHtcbiAgICAgIHN0cmF0ZWd5ID0gc3RyYXRlZ3lcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWCwgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogZmFsbGJhY2tYLCBvdmVybGF5WTogJ3RvcCcgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAnYm90dG9tJyB9KTtcbiAgICAgIGlmICghdGhpcy5wb3NpdGlvbi5pbmNsdWRlcygnYWJvdmUtYmVsb3cnKSkge1xuICAgICAgICBzdHJhdGVneSA9IHN0cmF0ZWd5XG4gICAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWCwgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAnY2VudGVyJyB9LCB7IG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAnY2VudGVyJyB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cmF0ZWd5O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNjcm9sbFN0cmF0ZWd5KCk6IFNjcm9sbFN0cmF0ZWd5IHtcbiAgICBzd2l0Y2ggKHRoaXMuc2Nyb2xsU3RyYXRlZ3kpIHtcbiAgICAgIGNhc2UgJ2Jsb2NrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG4gICAgICBjYXNlICdyZXBvc2l0aW9uJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjaGVja1NpemVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIGlmICghdGhpcy53aWR0aCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkud2lkdGggPSB0aGlzLmdldEhvc3RXaWR0aCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKSk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbm5lY3RlZEVsZW1lbnQoKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGVsZW1lbnRJc0luTmVzdGVkT3ZlcmxheShlbCk6IGJvb2xlYW4ge1xuICAgIHdoaWxlIChlbC5wYXJlbnROb2RlKSB7XG4gICAgICBpZiAoZWwuaWQgJiYgZWwuaWQuaW5jbHVkZXMoJ25vdm8tb3ZlcmxheScpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkIDwgZWwuaWQ7XG4gICAgICB9XG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRIb3N0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgfVxufVxuIl19