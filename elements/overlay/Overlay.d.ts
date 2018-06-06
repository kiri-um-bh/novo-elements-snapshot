import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConnectedPositionStrategy, Overlay, OverlayConfig, OverlayRef, ScrollStrategy } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
export declare class NovoOverlayTemplateComponent implements OnDestroy {
    protected overlay: Overlay;
    protected viewContainerRef: ViewContainerRef;
    protected zone: NgZone;
    protected changeDetectorRef: ChangeDetectorRef;
    protected document: any;
    id: string;
    template: TemplateRef<any>;
    panel: ElementRef;
    position: string;
    scrollStrategy: 'reposition' | 'block' | 'close';
    width: number;
    height: number;
    closeOnSelect: boolean;
    select: EventEmitter<any>;
    closing: EventEmitter<any>;
    overlayRef: OverlayRef | null;
    portal: TemplatePortal<any>;
    protected closingActionsSubscription: Subscription;
    private _parent;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef, zone: NgZone, changeDetectorRef: ChangeDetectorRef, document: any);
    ngOnDestroy(): void;
    readonly panelOpen: boolean;
    parent: ElementRef;
    openPanel(): void;
    closePanel(): void;
    onClosingAction(event: any): void;
    /**
     * A stream of actions that should close the autocomplete panel, including
     * when an option is selected, on blur, and when TAB is pressed.
     */
    readonly panelClosingActions: Observable<any>;
    /** Stream of clicks outside of the autocomplete panel. */
    protected readonly outsideClickStream: Observable<any>;
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */
    protected subscribeToClosingActions(): Subscription;
    protected createOverlay(template: TemplateRef<any>): void;
    protected destroyOverlay(): void;
    protected getOverlayConfig(): OverlayConfig;
    protected getPosition(): ConnectedPositionStrategy;
    protected getScrollStrategy(): ScrollStrategy;
    protected checkSizes(): void;
    protected getConnectedElement(): ElementRef;
    protected getHostWidth(): number;
}
