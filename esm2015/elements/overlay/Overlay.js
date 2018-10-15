/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        setTimeout(() => {
            if (this.overlayRef) {
                this.overlayRef.updatePosition();
            }
        });
    }
    /**
     * @return {?}
     */
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
     * @return {?}
     */
    get outsideClickStream() {
        if (!this.document) {
            return observableOf();
        }
        return merge(fromEvent(this.document, 'mousedown'), fromEvent(this.document, 'touchend')).pipe(filter((event) => {
            /** @type {?} */
            const clickTarget = (/** @type {?} */ (event.target));
            /** @type {?} */
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
        switchMap(() => {
            return this.panelClosingActions;
        }), 
        // when the first closing event occurs...
        first())
            // set the value, close the panel, and complete.
            .subscribe((event) => this.onClosingAction(event)));
    }
    /**
     * @param {?} template
     * @return {?}
     */
    createOverlay(template) {
        this.portal = new TemplatePortal(template, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.backdropClick().subscribe(() => this.closePanel());
    }
    /**
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
        let [originX, fallbackX] = this.position.includes('right') ? ['end', 'start'] : ['start', 'end'];
        let [originY, overlayY] = this.position.includes('top') ? ['top', 'bottom'] : ['bottom', 'top'];
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
                    .withFallbackPosition({ originX: originX, originY: 'center' }, { overlayX: originX, overlayY: 'center' })
                    .withFallbackPosition({ originX: fallbackX, originY: 'center' }, { overlayX: fallbackX, overlayY: 'center' });
            }
        }
        return strategy;
    }
    /**
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
     * @return {?}
     */
    getConnectedElement() {
        return this.parent;
    }
    /**
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
      <div class="novo-overlay-panel" role="listbox" [id]="id" #panel>
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NovoOverlayTemplateComponent.ctorParameters = () => [
    { type: Overlay },
    { type: ViewContainerRef },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NovoOverlayTemplateComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef,] }],
    panel: [{ type: ViewChild, args: ['panel',] }],
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
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.closingActionsSubscription;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype._parent;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.overlay;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.viewContainerRef;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.zone;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.changeDetectorRef;
    /** @type {?} */
    NovoOverlayTemplateComponent.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9vdmVybGF5L092ZXJsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFHTCxPQUFPLEVBQ1AsYUFBYSxHQUlkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0MsT0FBTyxFQUE0QixFQUFFLElBQUksWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFhMUQsTUFBTTs7Ozs7Ozs7SUF5Q0osWUFDWSxPQUFnQixFQUNoQixnQkFBa0MsRUFDbEMsSUFBWSxFQUNaLGlCQUFvQyxFQUdwQyxRQUFhO1FBTmIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBR3BDLGFBQVEsR0FBUixRQUFRLENBQUs7UUEvQ2xCLE9BQUUsR0FBVyxnQkFBZ0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFRMUMsYUFBUSxHQVVHLFNBQVMsQ0FBQztRQUVyQixtQkFBYyxHQUFxQyxZQUFZLENBQUM7UUFNaEUsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWlCcEQsQ0FBQzs7OztJQUVHLFdBQVc7UUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELElBQ1csTUFBTSxDQUFDLEtBQWlCO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztTQUNwRTtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQy9DO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLEtBQVU7UUFDL0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQU1ELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sS0FBSztRQUNWLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsa0JBQWtCLENBQ3hCLENBQUM7SUFDSixDQUFDOzs7OztJQUdELElBQWMsa0JBQWtCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU8sWUFBWSxFQUFFLENBQUM7U0FDdkI7UUFFRCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDNUYsTUFBTSxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFOztrQkFDbEMsV0FBVyxHQUFnQixtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFlOztrQkFDdEQsT0FBTyxHQUNYLElBQUksQ0FBQyxTQUFTO2dCQUNkLFdBQVcsS0FBSyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxhQUFhO2dCQUN4RCxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2dCQUMvRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDckgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBTVMseUJBQXlCOztjQUMzQixXQUFXLEdBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRixvREFBb0Q7UUFDcEQseUVBQXlFO1FBQ3pFLE9BQU8sQ0FDTCxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2YsSUFBSTtRQUNILDZFQUE2RTtRQUM3RSwrRUFBK0U7UUFDL0UsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ2xDLENBQUMsQ0FBQztRQUNGLHlDQUF5QztRQUN6QyxLQUFLLEVBQUUsQ0FDUjtZQUNELGdEQUFnRDthQUMvQyxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDMUQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRVMsYUFBYSxDQUFDLFFBQTBCO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRVMsY0FBYztRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRVMsZ0JBQWdCOztjQUNsQixNQUFNLEdBQWtCLElBQUksYUFBYSxFQUFFO1FBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEM7YUFBTTtZQUNMLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM3QjtRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUVqRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFNUyxXQUFXO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTztpQkFDaEIsUUFBUSxFQUFFO2lCQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQzNILG9CQUFvQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDbEcsb0JBQW9CLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDN0c7WUFFRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsR0FBOEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7WUFDdkgsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQTRCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDOztZQUVwSCxRQUFRLEdBQThCLElBQUksQ0FBQyxPQUFPO2FBQ25ELFFBQVEsRUFBRTthQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDOUYsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzlCLFFBQVEsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDL0g7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzVHLFFBQVEsR0FBRyxRQUFRO2lCQUNoQixvQkFBb0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztpQkFDNUYsb0JBQW9CLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2lCQUN6RyxvQkFBb0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM3RyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzFDLFFBQVEsR0FBRyxRQUFRO3FCQUNoQixvQkFBb0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7cUJBQ3hHLG9CQUFvQixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2pIO1NBQ0Y7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O0lBRVMsaUJBQWlCO1FBQ3pCLFFBQVEsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMzQixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9DLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEQ7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7OztJQUVTLFVBQVU7UUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6RDtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7OztJQUVTLG1CQUFtQjtRQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVTLFlBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDaEYsQ0FBQzs7O1lBblJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7OztHQU1UO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUF0QkMsT0FBTztZQUxQLGdCQUFnQjtZQU5oQixNQUFNO1lBTk4saUJBQWlCOzRDQXNGZCxRQUFRLFlBQ1IsTUFBTSxTQUFDLFFBQVE7Ozt1QkE1Q2pCLFNBQVMsU0FBQyxXQUFXO29CQUVyQixTQUFTLFNBQUMsT0FBTzt1QkFHakIsS0FBSzs2QkFZTCxLQUFLO29CQUVMLEtBQUs7cUJBRUwsS0FBSzs0QkFFTCxLQUFLO3FCQUdMLE1BQU07c0JBRU4sTUFBTTtxQkE0Qk4sS0FBSzs7OztJQTFETiwwQ0FBaUQ7O0lBRWpELGdEQUNrQzs7SUFDbEMsNkNBQ3lCOztJQUV6QixnREFXNEI7O0lBQzVCLHNEQUN1RTs7SUFDdkUsNkNBQ3FCOztJQUNyQiw4Q0FDc0I7O0lBQ3RCLHFEQUNxQzs7SUFFckMsOENBQ3NEOztJQUN0RCwrQ0FDdUQ7O0lBRXZELGtEQUFxQzs7SUFDckMsOENBQW1DOztJQUduQyxrRUFBbUQ7O0lBQ25ELCtDQUE0Qjs7SUFHMUIsK0NBQTBCOztJQUMxQix3REFBNEM7O0lBQzVDLDRDQUFzQjs7SUFDdEIseURBQThDOztJQUM5QyxnREFFdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgU2Nyb2xsU3RyYXRlZ3ksXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBvZiBhcyBvYnNlcnZhYmxlT2YsIG1lcmdlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1vdmVybGF5LXRlbXBsYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1vdmVybGF5LXBhbmVsXCIgcm9sZT1cImxpc3Rib3hcIiBbaWRdPVwiaWRcIiAjcGFuZWw+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIGlkOiBzdHJpbmcgPSBgbm92by1vdmVybGF5LSR7RGF0ZS5ub3coKX1gO1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpXG4gIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgncGFuZWwnKVxuICBwdWJsaWMgcGFuZWw6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBvc2l0aW9uOlxuICAgIHwgJ2RlZmF1bHQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnYWJvdmUtYmVsb3cnXG4gICAgfCAncmlnaHQtYWJvdmUtYmVsb3cnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2JvdHRvbSdcbiAgICB8ICdib3R0b20tbGVmdCdcbiAgICB8ICdib3R0b20tcmlnaHQnXG4gICAgfCAndG9wLWxlZnQnXG4gICAgfCAndG9wLXJpZ2h0JyA9ICdkZWZhdWx0JztcbiAgQElucHV0KClcbiAgcHVibGljIHNjcm9sbFN0cmF0ZWd5OiAncmVwb3NpdGlvbicgfCAnYmxvY2snIHwgJ2Nsb3NlJyA9ICdyZXBvc2l0aW9uJztcbiAgQElucHV0KClcbiAgcHVibGljIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjbG9zaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIHB1YmxpYyBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XG5cbiAgLy8gVGhlIHN1YnNjcmlwdGlvbiBmb3IgY2xvc2luZyBhY3Rpb25zIChzb21lIGFyZSBib3VuZCB0byBkb2N1bWVudClcbiAgcHJvdGVjdGVkIGNsb3NpbmdBY3Rpb25zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3BhcmVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KERPQ1VNRU5UKVxuICAgIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICApIHt9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveU92ZXJsYXkoKTtcbiAgfVxuXG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGFyZW50KHZhbHVlOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gICAgdGhpcy5jaGVja1NpemVzKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudCgpOiBFbGVtZW50UmVmIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG5cbiAgcHVibGljIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5jcmVhdGVPdmVybGF5KHRoaXMudGVtcGxhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrU2l6ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgdGhpcy5jbG9zaW5nQWN0aW9uc1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlVG9DbG9zaW5nQWN0aW9ucygpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuY2xvc2luZ0FjdGlvbnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2luZy5lbWl0KHRydWUpO1xuICAgICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25DbG9zaW5nQWN0aW9uKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHN0cmVhbSBvZiBhY3Rpb25zIHRoYXQgc2hvdWxkIGNsb3NlIHRoZSBhdXRvY29tcGxldGUgcGFuZWwsIGluY2x1ZGluZ1xuICAgKiB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZCwgb24gYmx1ciwgYW5kIHdoZW4gVEFCIGlzIHByZXNzZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhbmVsQ2xvc2luZ0FjdGlvbnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAvLyB0aGlzLm92ZXJsYXlUZW1wbGF0ZS5fa2V5TWFuYWdlci50YWJPdXQsXG4gICAgICB0aGlzLm91dHNpZGVDbGlja1N0cmVhbSxcbiAgICApO1xuICB9XG5cbiAgLyoqIFN0cmVhbSBvZiBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgYXV0b2NvbXBsZXRlIHBhbmVsLiAqL1xuICBwcm90ZWN0ZWQgZ2V0IG91dHNpZGVDbGlja1N0cmVhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmICghdGhpcy5kb2N1bWVudCkge1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVPZigpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ21vdXNlZG93bicpLCBmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ3RvdWNoZW5kJykpLnBpcGUoXG4gICAgICBmaWx0ZXIoKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNsaWNrZWQ6IGJvb2xlYW4gPVxuICAgICAgICAgIHRoaXMucGFuZWxPcGVuICYmXG4gICAgICAgICAgY2xpY2tUYXJnZXQgIT09IHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAhdGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkubmF0aXZlRWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiZcbiAgICAgICAgICAoISF0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkpO1xuICAgICAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgISF0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJiB0aGlzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpY2tlZDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgbGlzdGVucyB0byBhIHN0cmVhbSBvZiBwYW5lbCBjbG9zaW5nIGFjdGlvbnMgYW5kIHJlc2V0cyB0aGVcbiAgICogc3RyZWFtIGV2ZXJ5IHRpbWUgdGhlIG9wdGlvbiBsaXN0IGNoYW5nZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3Vic2NyaWJlVG9DbG9zaW5nQWN0aW9ucygpOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IGZpcnN0U3RhYmxlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnpvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShmaXJzdCgpKTtcbiAgICAvLyBjb25zdCB2YWx1ZUNoYW5nZXMgPSBPYnNlcnZhYmxlLmZyb20odGhpcy52YWx1ZSk7XG4gICAgLy8gV2hlbiB0aGUgem9uZSBpcyBzdGFibGUgaW5pdGlhbGx5LCBhbmQgd2hlbiB0aGUgb3B0aW9uIGxpc3QgY2hhbmdlcy4uLlxuICAgIHJldHVybiAoXG4gICAgICBtZXJnZShmaXJzdFN0YWJsZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHN0cmVhbSBvZiBwYW5lbENsb3NpbmdBY3Rpb25zLCByZXBsYWNpbmcgYW55IHByZXZpb3VzIHN0cmVhbXNcbiAgICAgICAgICAvLyB0aGF0IHdlcmUgY3JlYXRlZCwgYW5kIGZsYXR0ZW4gaXQgc28gb3VyIHN0cmVhbSBvbmx5IGVtaXRzIGNsb3NpbmcgZXZlbnRzLi4uXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhbmVsQ2xvc2luZ0FjdGlvbnM7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gd2hlbiB0aGUgZmlyc3QgY2xvc2luZyBldmVudCBvY2N1cnMuLi5cbiAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICApXG4gICAgICAgIC8vIHNldCB0aGUgdmFsdWUsIGNsb3NlIHRoZSBwYW5lbCwgYW5kIGNvbXBsZXRlLlxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB0aGlzLm9uQ2xvc2luZ0FjdGlvbihldmVudCkpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVPdmVybGF5KHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZVBhbmVsKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3lPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdCBjb25maWc6IE92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZygpO1xuXG4gICAgaWYgKCF0aGlzLndpZHRoKSB7XG4gICAgICBjb25maWcud2lkdGggPSB0aGlzLmdldEhvc3RXaWR0aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhlaWdodCkge1xuICAgICAgY29uZmlnLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgIGNvbmZpZy5oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICAgIGNvbmZpZy5kaXJlY3Rpb24gPSAnbHRyJztcbiAgICBjb25maWcuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLmdldFNjcm9sbFN0cmF0ZWd5KCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcG9zaXRpb24gc3RyYXRlZ2llczpcbiAgICogJ2RlZmF1bHQnLCAncmlnaHQnLCAnYm90dG9tJywgJ2NlbnRlcicsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0J1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldFBvc2l0aW9uKCk6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnY2VudGVyJykge1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVxuICAgICAgICAucG9zaXRpb24oKVxuICAgICAgICAuY29ubmVjdGVkVG8odGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCksIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSk7XG4gICAgfVxuXG4gICAgbGV0IFtvcmlnaW5YLCBmYWxsYmFja1hdOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvc1tdID0gdGhpcy5wb3NpdGlvbi5pbmNsdWRlcygncmlnaHQnKSA/IFsnZW5kJywgJ3N0YXJ0J10gOiBbJ3N0YXJ0JywgJ2VuZCddO1xuICAgIGxldCBbb3JpZ2luWSwgb3ZlcmxheVldOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3NbXSA9IHRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ3RvcCcpID8gWyd0b3AnLCAnYm90dG9tJ10gOiBbJ2JvdHRvbScsICd0b3AnXTtcblxuICAgIGxldCBzdHJhdGVneTogQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKSwgeyBvcmlnaW5YLCBvcmlnaW5ZIH0sIHsgb3ZlcmxheVg6IG9yaWdpblgsIG92ZXJsYXlZIH0pXG4gICAgICAud2l0aERpcmVjdGlvbignbHRyJyk7XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHN0cmF0ZWd5ID0gc3RyYXRlZ3kud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiBmYWxsYmFja1gsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6IGZhbGxiYWNrWCwgb3ZlcmxheVk6ICd0b3AnIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JyB8fCB0aGlzLnBvc2l0aW9uID09PSAnZGVmYXVsdCcgfHwgdGhpcy5wb3NpdGlvbi5pbmNsdWRlcygnYWJvdmUtYmVsb3cnKSkge1xuICAgICAgc3RyYXRlZ3kgPSBzdHJhdGVneVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiBvcmlnaW5YLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogZmFsbGJhY2tYLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiBmYWxsYmFja1gsIG92ZXJsYXlZOiAndG9wJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiBmYWxsYmFja1gsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6IGZhbGxiYWNrWCwgb3ZlcmxheVk6ICdib3R0b20nIH0pO1xuICAgICAgaWYgKCF0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCdhYm92ZS1iZWxvdycpKSB7XG4gICAgICAgIHN0cmF0ZWd5ID0gc3RyYXRlZ3lcbiAgICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiBvcmlnaW5YLCBvcmlnaW5ZOiAnY2VudGVyJyB9LCB7IG92ZXJsYXlYOiBvcmlnaW5YLCBvdmVybGF5WTogJ2NlbnRlcicgfSlcbiAgICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiBmYWxsYmFja1gsIG9yaWdpblk6ICdjZW50ZXInIH0sIHsgb3ZlcmxheVg6IGZhbGxiYWNrWCwgb3ZlcmxheVk6ICdjZW50ZXInIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyYXRlZ3k7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2Nyb2xsU3RyYXRlZ3koKTogU2Nyb2xsU3RyYXRlZ3kge1xuICAgIHN3aXRjaCAodGhpcy5zY3JvbGxTdHJhdGVneSkge1xuICAgICAgY2FzZSAnYmxvY2snOlxuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcbiAgICAgIGNhc2UgJ3JlcG9zaXRpb24nOlxuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGNoZWNrU2l6ZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgaWYgKCF0aGlzLndpZHRoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKS53aWR0aCA9IHRoaXMuZ2V0SG9zdFdpZHRoKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVNpemUodGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29ubmVjdGVkRWxlbWVudCgpOiBFbGVtZW50UmVmIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SG9zdFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIH1cbn1cbiJdfQ==