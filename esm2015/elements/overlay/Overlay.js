/**
 * @fileoverview added by tsickle
 * Generated from: elements/overlay/Overlay.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, TemplateRef, ViewChild, ViewContainerRef, } from '@angular/core';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
// Vendor
import { of as observableOf, merge, fromEvent } from 'rxjs';
import { filter, first, switchMap } from 'rxjs/operators';
export class NovoOverlayTemplateComponent {
    /**
     * @param {?} overlay
     * @param {?} viewContainerRef
     * @param {?} zone
     * @param {?} changeDetectorRef
     * @param {?} document
     */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyOverlay();
    }
    /**
     * @return {?}
     */
    get panelOpen() {
        return this.overlayRef && this.overlayRef.hasAttached();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set parent(value) {
        this._parent = value;
        this.checkSizes();
    }
    /**
     * @return {?}
     */
    get parent() {
        return this._parent;
    }
    /**
     * @return {?}
     */
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.overlayRef) {
                this.overlayRef.updatePosition();
            }
        }));
    }
    /**
     * @return {?}
     */
    closePanel() {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.overlayRef.detach();
                this.closingActionsSubscription.unsubscribe();
            }
            this.closing.emit(true);
            if (this.panelOpen) {
                this.changeDetectorRef.markForCheck();
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClosingAction(event) {
        this.closePanel();
    }
    /**
     * A stream of actions that should close the autocomplete panel, including
     * when an option is selected, on blur, and when TAB is pressed.
     * @return {?}
     */
    get panelClosingActions() {
        return merge(
        // this.overlayTemplate._keyManager.tabOut,
        this.outsideClickStream);
    }
    /**
     * Stream of clicks outside of the autocomplete panel.
     * @protected
     * @return {?}
     */
    get outsideClickStream() {
        if (!this.document) {
            return observableOf();
        }
        return merge(fromEvent(this.document, 'mousedown'), fromEvent(this.document, 'touchend')).pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const clickTarget = (/** @type {?} */ (event.target));
            /** @type {?} */
            const clickedOutside = this.panelOpen &&
                clickTarget !== this.getConnectedElement().nativeElement &&
                !this.getConnectedElement().nativeElement.contains(clickTarget) &&
                (!!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget)) &&
                !this.elementIsInNestedOverlay(clickTarget);
            if (this.panelOpen && !!this.overlayRef && this.overlayRef.overlayElement.contains(clickTarget) && this.closeOnSelect) {
                this.select.emit(event);
            }
            return clickedOutside;
        })));
    }
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     * @protected
     * @return {?}
     */
    subscribeToClosingActions() {
        /** @type {?} */
        const firstStable = this.zone.onStable.asObservable().pipe(first());
        // const valueChanges = Observable.from(this.value);
        // When the zone is stable initially, and when the option list changes...
        return (merge(firstStable)
            .pipe(
        // create a new stream of panelClosingActions, replacing any previous streams
        // that were created, and flatten it so our stream only emits closing events...
        switchMap((/**
         * @return {?}
         */
        () => {
            return this.panelClosingActions;
        })), 
        // when the first closing event occurs...
        first())
            // set the value, close the panel, and complete.
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onClosingAction(event))));
    }
    /**
     * @protected
     * @param {?} template
     * @return {?}
     */
    createOverlay(template) {
        this.portal = new TemplatePortal(template, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.backdropClick().subscribe((/**
         * @return {?}
         */
        () => this.closePanel()));
    }
    /**
     * @protected
     * @return {?}
     */
    destroyOverlay() {
        if (this.overlayRef) {
            this.closePanel();
            this.overlayRef.dispose();
            this.overlayRef = undefined;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getOverlayConfig() {
        /** @type {?} */
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
     * @protected
     * @return {?}
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
        /** @type {?} */
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
    /**
     * @protected
     * @return {?}
     */
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
    /**
     * @protected
     * @return {?}
     */
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
    /**
     * @protected
     * @return {?}
     */
    getConnectedElement() {
        return this.parent;
    }
    /**
     * @protected
     * @param {?} el
     * @return {?}
     */
    elementIsInNestedOverlay(el) {
        while (el.parentNode) {
            if (el.id && el.id.includes('novo-overlay')) {
                return this.id < el.id;
            }
            el = el.parentNode;
        }
        return false;
    }
    /**
     * @protected
     * @return {?}
     */
    getHostWidth() {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
}
NovoOverlayTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'novo-overlay-template',
                template: `
    <ng-template>
      <div class="novo-overlay-panel" role="listbox" [id]="id" #panel><ng-content></ng-content></div>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoOverlayTemplateComponent.ctorParameters = () => [
    { type: Overlay },
    { type: ViewContainerRef },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9vdmVybGF5L092ZXJsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBRU4sUUFBUSxFQUNSLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsT0FBTyxFQUNQLGFBQWEsR0FJZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTNDLE9BQU8sRUFBNEIsRUFBRSxJQUFJLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVzFELE1BQU0sT0FBTyw0QkFBNEI7Ozs7Ozs7O0lBeUN2QyxZQUNZLE9BQWdCLEVBQ2hCLGdCQUFrQyxFQUNsQyxJQUFZLEVBQ1osaUJBQW9DLEVBR3BDLFFBQWE7UUFOYixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFHcEMsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQS9DbEIsT0FBRSxHQUFXLGdCQUFnQixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQVExQyxhQUFRLEdBVUcsU0FBUyxDQUFDO1FBRXJCLG1CQUFjLEdBQXFDLFlBQVksQ0FBQztRQU1oRSxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0MsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBaUJwRCxDQUFDOzs7O0lBRUcsV0FBVztRQUNoQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRUQsSUFDVyxNQUFNLENBQUMsS0FBaUI7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUNsQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVNLFVBQVU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztRQUFDLEdBQUcsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQy9DO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLEtBQVU7UUFDL0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQU1ELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sS0FBSztRQUNWLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsa0JBQWtCLENBQ3hCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCxJQUFjLGtCQUFrQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVGLE1BQU07Ozs7UUFBQyxDQUFDLEtBQThCLEVBQUUsRUFBRTs7a0JBQ2xDLFdBQVcsR0FBZ0IsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBZTs7a0JBQ3RELGNBQWMsR0FDbEIsSUFBSSxDQUFDLFNBQVM7Z0JBQ2QsV0FBVyxLQUFLLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLGFBQWE7Z0JBQ3hELENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7Z0JBQy9ELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQztZQUM3QyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsT0FBTyxjQUFjLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFNUyx5QkFBeUI7O2NBQzNCLFdBQVcsR0FBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BGLG9EQUFvRDtRQUNwRCx5RUFBeUU7UUFDekUsT0FBTyxDQUNMLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDZixJQUFJO1FBQ0gsNkVBQTZFO1FBQzdFLCtFQUErRTtRQUMvRSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNsQyxDQUFDLEVBQUM7UUFDRix5Q0FBeUM7UUFDekMsS0FBSyxFQUFFLENBQ1I7WUFDRCxnREFBZ0Q7YUFDL0MsU0FBUzs7OztRQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQzFELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxhQUFhLENBQUMsUUFBMEI7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFFUyxjQUFjO1FBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRVMsZ0JBQWdCOztjQUNsQixNQUFNLEdBQWtCLElBQUksYUFBYSxFQUFFO1FBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEM7YUFBTTtZQUNMLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM3QjtRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUVqRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBTVMsV0FBVztRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU87aUJBQ2hCLFFBQVEsRUFBRTtpQkFDVixXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO2lCQUMzSCxvQkFBb0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQ2xHLG9CQUFvQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzdHO2NBRUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEdBQThCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2NBQ3ZILENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUE0QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzs7WUFFdEgsUUFBUSxHQUE4QixJQUFJLENBQUMsT0FBTzthQUNuRCxRQUFRLEVBQUU7YUFDVixXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQzlGLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM5QixRQUFRLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQy9IO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM1RyxRQUFRLEdBQUcsUUFBUTtpQkFDaEIsb0JBQW9CLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQzVGLG9CQUFvQixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDekcsb0JBQW9CLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDN0csSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMxQyxRQUFRLEdBQUcsUUFBUTtxQkFDaEIsb0JBQW9CLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7cUJBQy9GLG9CQUFvQixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2pIO1NBQ0Y7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVTLGlCQUFpQjtRQUN6QixRQUFRLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDM0IsS0FBSyxPQUFPO2dCQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQyxLQUFLLFlBQVk7Z0JBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BEO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7O0lBRVMsVUFBVTtRQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbEQ7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7OztJQUVTLG1CQUFtQjtRQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRVMsd0JBQXdCLENBQUMsRUFBRTtRQUNuQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUN4QjtZQUNELEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVTLFlBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDaEYsQ0FBQzs7O1lBNVJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQXBCQyxPQUFPO1lBTFAsZ0JBQWdCO1lBTmhCLE1BQU07WUFOTixpQkFBaUI7NENBb0ZkLFFBQVEsWUFDUixNQUFNLFNBQUMsUUFBUTs7O3VCQTVDakIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBRXhDLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3VCQUdwQyxLQUFLOzZCQVlMLEtBQUs7b0JBRUwsS0FBSztxQkFFTCxLQUFLOzRCQUVMLEtBQUs7cUJBR0wsTUFBTTtzQkFFTixNQUFNO3FCQTRCTixLQUFLOzs7O0lBMUROLDBDQUFpRDs7SUFFakQsZ0RBQ2tDOztJQUNsQyw2Q0FDeUI7O0lBRXpCLGdEQVc0Qjs7SUFDNUIsc0RBQ3VFOztJQUN2RSw2Q0FDcUI7O0lBQ3JCLDhDQUNzQjs7SUFDdEIscURBQ3FDOztJQUVyQyw4Q0FDc0Q7O0lBQ3RELCtDQUN1RDs7SUFFdkQsa0RBQXFDOztJQUNyQyw4Q0FBbUM7Ozs7O0lBR25DLGtFQUFtRDs7Ozs7SUFDbkQsK0NBQTRCOzs7OztJQUcxQiwrQ0FBMEI7Ozs7O0lBQzFCLHdEQUE0Qzs7Ozs7SUFDNUMsNENBQXNCOzs7OztJQUN0Qix5REFBOEM7Ozs7O0lBQzlDLGdEQUV1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXJcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIEhvcml6b250YWxDb25uZWN0aW9uUG9zLFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5UmVmLFxuICBTY3JvbGxTdHJhdGVneSxcbiAgVmVydGljYWxDb25uZWN0aW9uUG9zLFxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIG9mIGFzIG9ic2VydmFibGVPZiwgbWVyZ2UsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW92ZXJsYXktdGVtcGxhdGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLW92ZXJsYXktcGFuZWxcIiByb2xlPVwibGlzdGJveFwiIFtpZF09XCJpZFwiICNwYW5lbD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaWQ6IHN0cmluZyA9IGBub3ZvLW92ZXJsYXktJHtEYXRlLm5vdygpfWA7XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgncGFuZWwnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHVibGljIHBhbmVsOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwb3NpdGlvbjpcbiAgICB8ICdkZWZhdWx0J1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2Fib3ZlLWJlbG93J1xuICAgIHwgJ3JpZ2h0LWFib3ZlLWJlbG93J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdib3R0b20nXG4gICAgfCAnYm90dG9tLWxlZnQnXG4gICAgfCAnYm90dG9tLXJpZ2h0J1xuICAgIHwgJ3RvcC1sZWZ0J1xuICAgIHwgJ3RvcC1yaWdodCcgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzY3JvbGxTdHJhdGVneTogJ3JlcG9zaXRpb24nIHwgJ2Jsb2NrJyB8ICdjbG9zZScgPSAncmVwb3NpdGlvbic7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2xvc2luZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xuICBwdWJsaWMgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuXG4gIC8vIFRoZSBzdWJzY3JpcHRpb24gZm9yIGNsb3NpbmcgYWN0aW9ucyAoc29tZSBhcmUgYm91bmQgdG8gZG9jdW1lbnQpXG4gIHByb3RlY3RlZCBjbG9zaW5nQWN0aW9uc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9wYXJlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJvdGVjdGVkIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChET0NVTUVOVClcbiAgICBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3lPdmVybGF5KCk7XG4gIH1cblxuICBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBhcmVudCh2YWx1ZTogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICAgIHRoaXMuY2hlY2tTaXplcygpO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJlbnQoKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuY3JlYXRlT3ZlcmxheSh0aGlzLnRlbXBsYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja1NpemVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICAgIHRoaXMuY2xvc2luZ0FjdGlvbnNTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVRvQ2xvc2luZ0FjdGlvbnMoKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmNsb3NpbmdBY3Rpb25zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NpbmcuZW1pdCh0cnVlKTtcbiAgICAgIGlmICh0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQ2xvc2luZ0FjdGlvbihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICAvKipcbiAgICogQSBzdHJlYW0gb2YgYWN0aW9ucyB0aGF0IHNob3VsZCBjbG9zZSB0aGUgYXV0b2NvbXBsZXRlIHBhbmVsLCBpbmNsdWRpbmdcbiAgICogd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQsIG9uIGJsdXIsIGFuZCB3aGVuIFRBQiBpcyBwcmVzc2VkLlxuICAgKi9cbiAgcHVibGljIGdldCBwYW5lbENsb3NpbmdBY3Rpb25zKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgLy8gdGhpcy5vdmVybGF5VGVtcGxhdGUuX2tleU1hbmFnZXIudGFiT3V0LFxuICAgICAgdGhpcy5vdXRzaWRlQ2xpY2tTdHJlYW0sXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBTdHJlYW0gb2YgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGF1dG9jb21wbGV0ZSBwYW5lbC4gKi9cbiAgcHJvdGVjdGVkIGdldCBvdXRzaWRlQ2xpY2tTdHJlYW0oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQsICdtb3VzZWRvd24nKSwgZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQsICd0b3VjaGVuZCcpKS5waXBlKFxuICAgICAgZmlsdGVyKChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBjbGlja2VkT3V0c2lkZTogYm9vbGVhbiA9XG4gICAgICAgICAgdGhpcy5wYW5lbE9wZW4gJiZcbiAgICAgICAgICBjbGlja1RhcmdldCAhPT0gdGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkubmF0aXZlRWxlbWVudCAmJlxuICAgICAgICAgICF0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJlxuICAgICAgICAgICghIXRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSkgJiZcbiAgICAgICAgICAhdGhpcy5lbGVtZW50SXNJbk5lc3RlZE92ZXJsYXkoY2xpY2tUYXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgISF0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJiB0aGlzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpY2tlZE91dHNpZGU7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGxpc3RlbnMgdG8gYSBzdHJlYW0gb2YgcGFuZWwgY2xvc2luZyBhY3Rpb25zIGFuZCByZXNldHMgdGhlXG4gICAqIHN0cmVhbSBldmVyeSB0aW1lIHRoZSBvcHRpb24gbGlzdCBjaGFuZ2VzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHN1YnNjcmliZVRvQ2xvc2luZ0FjdGlvbnMoKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBmaXJzdFN0YWJsZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy56b25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlyc3QoKSk7XG4gICAgLy8gY29uc3QgdmFsdWVDaGFuZ2VzID0gT2JzZXJ2YWJsZS5mcm9tKHRoaXMudmFsdWUpO1xuICAgIC8vIFdoZW4gdGhlIHpvbmUgaXMgc3RhYmxlIGluaXRpYWxseSwgYW5kIHdoZW4gdGhlIG9wdGlvbiBsaXN0IGNoYW5nZXMuLi5cbiAgICByZXR1cm4gKFxuICAgICAgbWVyZ2UoZmlyc3RTdGFibGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBzdHJlYW0gb2YgcGFuZWxDbG9zaW5nQWN0aW9ucywgcmVwbGFjaW5nIGFueSBwcmV2aW91cyBzdHJlYW1zXG4gICAgICAgICAgLy8gdGhhdCB3ZXJlIGNyZWF0ZWQsIGFuZCBmbGF0dGVuIGl0IHNvIG91ciBzdHJlYW0gb25seSBlbWl0cyBjbG9zaW5nIGV2ZW50cy4uLlxuICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYW5lbENsb3NpbmdBY3Rpb25zO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIHdoZW4gdGhlIGZpcnN0IGNsb3NpbmcgZXZlbnQgb2NjdXJzLi4uXG4gICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgKVxuICAgICAgICAvLyBzZXQgdGhlIHZhbHVlLCBjbG9zZSB0aGUgcGFuZWwsIGFuZCBjb21wbGV0ZS5cbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4gdGhpcy5vbkNsb3NpbmdBY3Rpb24oZXZlbnQpKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlT3ZlcmxheSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xuICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VQYW5lbCgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZXN0cm95T3ZlcmxheSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgY29uc3QgY29uZmlnOiBPdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoKTtcblxuICAgIGlmICghdGhpcy53aWR0aCkge1xuICAgICAgY29uZmlnLndpZHRoID0gdGhpcy5nZXRIb3N0V2lkdGgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgIGNvbmZpZy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBjb25maWcucG9zaXRpb25TdHJhdGVneSA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICBjb25maWcuaGFzQmFja2Ryb3AgPSBmYWxzZTtcbiAgICBjb25maWcuZGlyZWN0aW9uID0gJ2x0cic7XG4gICAgY29uZmlnLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5nZXRTY3JvbGxTdHJhdGVneSgpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBTdXBwb3J0cyB0aGUgZm9sbG93aW5nIHBvc2l0aW9uIHN0cmF0ZWdpZXM6XG4gICAqICdkZWZhdWx0JywgJ3JpZ2h0JywgJ2JvdHRvbScsICdjZW50ZXInLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCdcbiAgICovXG4gIHByb3RlY3RlZCBnZXRQb3NpdGlvbigpOiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlcbiAgICAgICAgLnBvc2l0aW9uKClcbiAgICAgICAgLmNvbm5lY3RlZFRvKHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLCB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IFtvcmlnaW5YLCBmYWxsYmFja1hdOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvc1tdID0gdGhpcy5wb3NpdGlvbi5pbmNsdWRlcygncmlnaHQnKSA/IFsnZW5kJywgJ3N0YXJ0J10gOiBbJ3N0YXJ0JywgJ2VuZCddO1xuICAgIGNvbnN0IFtvcmlnaW5ZLCBvdmVybGF5WV06IFZlcnRpY2FsQ29ubmVjdGlvblBvc1tdID0gdGhpcy5wb3NpdGlvbi5pbmNsdWRlcygndG9wJykgPyBbJ3RvcCcsICdib3R0b20nXSA6IFsnYm90dG9tJywgJ3RvcCddO1xuXG4gICAgbGV0IHN0cmF0ZWd5OiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmNvbm5lY3RlZFRvKHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLCB7IG9yaWdpblgsIG9yaWdpblkgfSwgeyBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVkgfSlcbiAgICAgIC53aXRoRGlyZWN0aW9uKCdsdHInKTtcblxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgc3RyYXRlZ3kgPSBzdHJhdGVneS53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogZmFsbGJhY2tYLCBvdmVybGF5WTogJ3RvcCcgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnIHx8IHRoaXMucG9zaXRpb24gPT09ICdkZWZhdWx0JyB8fCB0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCdhYm92ZS1iZWxvdycpKSB7XG4gICAgICBzdHJhdGVneSA9IHN0cmF0ZWd5XG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblgsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6IG9yaWdpblgsIG92ZXJsYXlZOiAnYm90dG9tJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiBmYWxsYmFja1gsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6IGZhbGxiYWNrWCwgb3ZlcmxheVk6ICd0b3AnIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogZmFsbGJhY2tYLCBvdmVybGF5WTogJ2JvdHRvbScgfSk7XG4gICAgICBpZiAoIXRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ2Fib3ZlLWJlbG93JykpIHtcbiAgICAgICAgc3RyYXRlZ3kgPSBzdHJhdGVneVxuICAgICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblgsIG9yaWdpblk6ICdjZW50ZXInIH0sIHsgb3ZlcmxheVg6IG9yaWdpblgsIG92ZXJsYXlZOiAnY2VudGVyJyB9KVxuICAgICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6IGZhbGxiYWNrWCwgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogZmFsbGJhY2tYLCBvdmVybGF5WTogJ2NlbnRlcicgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHJhdGVneTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTY3JvbGxTdHJhdGVneSgpOiBTY3JvbGxTdHJhdGVneSB7XG4gICAgc3dpdGNoICh0aGlzLnNjcm9sbFN0cmF0ZWd5KSB7XG4gICAgICBjYXNlICdibG9jayc6XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpO1xuICAgICAgY2FzZSAncmVwb3NpdGlvbic6XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hlY2tTaXplcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICBpZiAoIXRoaXMud2lkdGgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLndpZHRoID0gdGhpcy5nZXRIb3N0V2lkdGgoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhlaWdodCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb25uZWN0ZWRFbGVtZW50KCk6IEVsZW1lbnRSZWYge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBlbGVtZW50SXNJbk5lc3RlZE92ZXJsYXkoZWwpOiBib29sZWFuIHtcbiAgICB3aGlsZSAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKGVsLmlkICYmIGVsLmlkLmluY2x1ZGVzKCdub3ZvLW92ZXJsYXknKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCA8IGVsLmlkO1xuICAgICAgfVxuICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SG9zdFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIH1cbn1cbiJdfQ==