/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Directive, EventEmitter, Host, Input, Output, Optional, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, startWith, take } from 'rxjs/operators';
import { NovoAccordion } from './accordion';
import { novoExpansionAnimations } from './expansion-animations';
import { NovoExpansionPanelContent } from './expansion-panel-content';
/**
 * Counter for generating unique element ids.
 * @type {?}
 */
let uniqueId = 0;
/**
 * `<novo-expansion-panel>`
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the NovoAccordion directive attached.
 */
export class NovoExpansionPanel extends CdkAccordionItem {
    /**
     * @param {?} accordion
     * @param {?} _changeDetectorRef
     * @param {?} _uniqueSelectionDispatcher
     * @param {?} _viewContainerRef
     */
    constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef) {
        super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
        this._viewContainerRef = _viewContainerRef;
        this._hideToggle = false;
        this._padding = true;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.expandedChange = new EventEmitter();
        /**
         * Stream that emits for changes in `\@Input` properties.
         */
        this._inputChanges = new Subject();
        /**
         * ID for the associated header element. Used for a11y labelling.
         */
        this._headerId = `novo-expansion-panel-header-${uniqueId++}`;
        this.accordion = accordion;
    }
    /**
     * Whether the toggle indicator should be hidden.
     * @return {?}
     */
    get hideToggle() {
        return this._hideToggle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hideToggle(value) {
        this._hideToggle = coerceBooleanProperty(value);
    }
    /**
     * @return {?}
     */
    get padding() {
        return this._padding;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set padding(value) {
        this._padding = coerceBooleanProperty(value);
    }
    /**
     * Whether the expansion indicator should be hidden.
     * @return {?}
     */
    _getHideToggle() {
        if (this.accordion) {
            return this.accordion.hideToggle;
        }
        return this.hideToggle;
    }
    /**
     * Determines whether the expansion panel should have spacing between it and its siblings.
     * @return {?}
     */
    _hasSpacing() {
        if (this.accordion) {
            return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
        }
        return false;
    }
    /**
     * Gets the expanded state string.
     * @return {?}
     */
    _getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened
                .pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1))
                .subscribe(() => {
                this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
            });
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._inputChanges.next(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._inputChanges.complete();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _bodyAnimation(event) {
        /** @type {?} */
        const classList = event.element.classList;
        /** @type {?} */
        const cssClass = 'novo-expanded';
        const { phaseName, toState } = event;
        // Toggle the body's `overflow: hidden` class when closing starts or when expansion ends in
        // order to prevent the cases where switching too early would cause the animation to jump.
        // Note that we do it directly on the DOM element to avoid the slight delay that comes
        // with doing it via change detection.
        if (phaseName === 'done' && toState === 'expanded') {
            classList.add(cssClass);
        }
        else if (phaseName === 'start' && toState === 'collapsed') {
            classList.remove(cssClass);
        }
    }
}
NovoExpansionPanel.decorators = [
    { type: Component, args: [{
                selector: 'novo-expansion-panel',
                exportAs: 'novoExpansionPanel',
                template: "<ng-content select=\"novo-expansion-panel-header\"></ng-content>\n<div class=\"novo-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimation($event)\"\n     (@bodyExpansion.start)=\"_bodyAnimation($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"novo-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"novo-action-row\"></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [novoExpansionAnimations.bodyExpansion],
                host: {
                    class: 'novo-expansion-panel',
                    '[class.novo-expanded]': 'expanded',
                    '[class.novo-expansion-panel-spacing]': '_hasSpacing()',
                    '[class.novo-expansion-panel-padding]': 'padding',
                },
                styles: ["@-webkit-keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.novo-expansion-panel{background:#fff;color:#3d464d;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:content-box;display:block;margin:0 16px;transition:margin 225ms ease-in-out}.novo-action-row{border-top-color:#3d464d}.novo-expansion-panel:not(.novo-expanded) .novo-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.novo-expansion-panel:not(.novo-expanded) .novo-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.novo-expansion-panel:not(.novo-expanded) .novo-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.novo-expansion-panel-header-title{color:#3d464d}.novo-expansion-indicator::after,.novo-expansion-panel-header-description{color:#999}.novo-expansion-panel-header[aria-disabled=true]{color:#999;pointer-events:none}.novo-expansion-panel-header[aria-disabled=true] .novo-expansion-panel-header-description,.novo-expansion-panel-header[aria-disabled=true] .novo-expansion-panel-header-title{color:inherit}.novo-expansion-panel.novo-expanded[theme=company]{border-top:3px solid #39d}.novo-expansion-panel.novo-expanded[theme=candidate]{border-top:3px solid #4b7}.novo-expansion-panel.novo-expanded[theme=navigation]{border-top:3px solid #2f384f}.novo-expansion-panel.novo-expanded[theme=lead]{border-top:3px solid #a69}.novo-expansion-panel.novo-expanded[theme=contact]{border-top:3px solid #fa4}.novo-expansion-panel.novo-expanded[theme=opportunity]{border-top:3px solid #625}.novo-expansion-panel.novo-expanded[theme=job]{border-top:3px solid #b56}.novo-expansion-panel.novo-expanded[theme=earnCode],.novo-expansion-panel.novo-expanded[theme=jobCode]{border-top:3px solid #696d79}.novo-expansion-panel.novo-expanded[theme=sendout]{border-top:3px solid #747884}.novo-expansion-panel.novo-expanded[theme=placement]{border-top:3px solid #0b344f}.novo-expansion-panel.novo-expanded[theme=corporateuser],.novo-expansion-panel.novo-expanded[theme=credential],.novo-expansion-panel.novo-expanded[theme=distributionList],.novo-expansion-panel.novo-expanded[theme=task],.novo-expansion-panel.novo-expanded[theme=user]{border-top:3px solid #4f5361}.novo-expansion-panel.novo-expanded[theme=aqua]{border-top:3px solid #3bafda}.novo-expansion-panel.novo-expanded[theme=ocean]{border-top:3px solid #4a89dc}.novo-expansion-panel.novo-expanded[theme=mint]{border-top:3px solid #37bc9b}.novo-expansion-panel.novo-expanded[theme=grass]{border-top:3px solid #8cc152}.novo-expansion-panel.novo-expanded[theme=sunflower]{border-top:3px solid #f6b042}.novo-expansion-panel.novo-expanded[theme=bittersweet]{border-top:3px solid #eb6845}.novo-expansion-panel.novo-expanded[theme=grapefruit]{border-top:3px solid #da4453}.novo-expansion-panel.novo-expanded[theme=carnation]{border-top:3px solid #d770ad}.novo-expansion-panel.novo-expanded[theme=lavender]{border-top:3px solid #967adc}.novo-expansion-panel.novo-expanded[theme=positive]{border-top:3px solid #4a89dc}.novo-expansion-panel.novo-expanded[theme=success]{border-top:3px solid #8cc152}.novo-expansion-panel.novo-expanded[theme=negative]{border-top:3px solid #da4453}.novo-expansion-panel.novo-expanded[theme=warning]{border-top:3px solid #f6b042}.novo-expansion-panel.novo-expanded[theme=black]{border-top:3px solid #000}.novo-expansion-panel.novo-expanded[theme=dark]{border-top:3px solid #3d464d}.novo-expansion-panel.novo-expanded[theme=pulse]{border-top:3px solid #3bafda}.novo-expansion-panel.novo-expanded[theme=neutral]{border-top:3px solid #4f5361}.novo-expansion-panel.novo-expanded[theme=navy]{border-top:3px solid #0d2d42}.novo-expansion-panel.novo-expanded[theme=contract]{border-top:3px solid #fa4}.novo-expansion-panel.novo-expanded[theme=mountain]{border-top:3px solid #9678b6}.novo-expansion-panel.novo-expanded[theme=submission]{border-top:3px solid #a9adbb}.novo-expansion-panel.novo-expanded[theme=note]{border-top:3px solid #747884}.novo-expansion-panel.novo-expanded[theme=background]{border-top:3px solid #f4f4f4}.novo-expansion-panel.novo-expanded[theme=white]{border-top:3px solid #fff}.novo-expansion-panel.novo-expanded[theme=grey]{border-top:3px solid #999}.novo-expansion-panel.novo-expanded[theme=off-white]{border-top:3px solid #f4f4f4}.novo-expansion-panel.novo-expanded[theme=light]{border-top:3px solid #d9dadc}.novo-expansion-panel.novo-expanded{margin:16px 4px}.novo-expansion-panel.novo-expanded:first-child{margin-top:0}.novo-expansion-panel.novo-expanded:last-child{margin-bottom:0}.novo-expansion-panel-content{overflow:hidden}.novo-expansion-panel-content.novo-expanded{overflow:visible}.novo-expansion-panel-padding .novo-expansion-panel-body{padding:0 24px 16px}.novo-accordion .novo-expansion-panel-spacing:first-child{margin-top:0}.novo-accordion .novo-expansion-panel-spacing:last-child{margin-bottom:0}.novo-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.novo-action-row button.novo-button{margin-left:8px}[dir=rtl] .novo-action-row button.novo-button{margin-left:0;margin-right:8px}"]
            }] }
];
/** @nocollapse */
NovoExpansionPanel.ctorParameters = () => [
    { type: NovoAccordion, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef },
    { type: UniqueSelectionDispatcher },
    { type: ViewContainerRef }
];
NovoExpansionPanel.propDecorators = {
    disabled: [{ type: Input }],
    expanded: [{ type: Input }],
    hideToggle: [{ type: Input }],
    padding: [{ type: Input }],
    opened: [{ type: Output }],
    closed: [{ type: Output }],
    expandedChange: [{ type: Output }],
    _lazyContent: [{ type: ContentChild, args: [NovoExpansionPanelContent,] }]
};
if (false) {
    /** @type {?} */
    NovoExpansionPanel.prototype.disabled;
    /** @type {?} */
    NovoExpansionPanel.prototype.expanded;
    /**
     * @type {?}
     * @private
     */
    NovoExpansionPanel.prototype._hideToggle;
    /**
     * @type {?}
     * @private
     */
    NovoExpansionPanel.prototype._padding;
    /** @type {?} */
    NovoExpansionPanel.prototype.opened;
    /** @type {?} */
    NovoExpansionPanel.prototype.closed;
    /** @type {?} */
    NovoExpansionPanel.prototype.expandedChange;
    /**
     * Stream that emits for changes in `\@Input` properties.
     * @type {?}
     */
    NovoExpansionPanel.prototype._inputChanges;
    /**
     * Optionally defined accordion the expansion panel belongs to.
     * @type {?}
     */
    NovoExpansionPanel.prototype.accordion;
    /**
     * Content that will be rendered lazily.
     * @type {?}
     */
    NovoExpansionPanel.prototype._lazyContent;
    /**
     * Portal holding the user's content.
     * @type {?}
     */
    NovoExpansionPanel.prototype._portal;
    /**
     * ID for the associated header element. Used for a11y labelling.
     * @type {?}
     */
    NovoExpansionPanel.prototype._headerId;
    /**
     * @type {?}
     * @private
     */
    NovoExpansionPanel.prototype._viewContainerRef;
}
export class NovoExpansionPanelActionRow {
}
NovoExpansionPanelActionRow.decorators = [
    { type: Directive, args: [{
                selector: 'novo-action-row',
                host: {
                    class: 'novo-action-row',
                },
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2V4cGFuc2lvbi9leHBhbnNpb24tcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUVSLGdCQUFnQixFQUNoQixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztJQU1sRSxRQUFRLEdBQUcsQ0FBQzs7Ozs7OztBQXVCaEIsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjs7Ozs7OztJQStDdEQsWUFHRSxTQUF3QixFQUN4QixrQkFBcUMsRUFDckMsMEJBQXFELEVBQzdDLGlCQUFtQztRQUUzQyxLQUFLLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLDBC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SUFHeEMscUNBQXdCOzs7OztJQUd4Qix1Q0FBd0Q7Ozs7O0lBUXRELCtDQUEyQzs7QUEwRS9DLE1BQU0sT0FBTywyQkFBMkI7OztZQU52QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxpQkFBaUI7aUJBQ3pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ2RrQWNjb3JkaW9uSXRlbSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFVuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3RhcnRXaXRoLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTm92b0FjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IG5vdm9FeHBhbnNpb25BbmltYXRpb25zIH0gZnJvbSAnLi9leHBhbnNpb24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOb3ZvRXhwYW5zaW9uUGFuZWxDb250ZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtY29udGVudCc7XG5cbi8qKiBOb3ZvRXhwYW5zaW9uUGFuZWwncyBzdGF0ZXMuICovXG5leHBvcnQgdHlwZSBOb3ZvRXhwYW5zaW9uUGFuZWxTdGF0ZSA9ICdleHBhbmRlZCcgfCAnY29sbGFwc2VkJztcblxuLyoqIENvdW50ZXIgZm9yIGdlbmVyYXRpbmcgdW5pcXVlIGVsZW1lbnQgaWRzLiAqL1xubGV0IHVuaXF1ZUlkID0gMDtcblxuLyoqXG4gKiBgPG5vdm8tZXhwYW5zaW9uLXBhbmVsPmBcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBhcyBhIHNpbmdsZSBlbGVtZW50IHRvIHNob3cgZXhwYW5kYWJsZSBjb250ZW50LCBvciBhcyBvbmUgb2ZcbiAqIG11bHRpcGxlIGNoaWxkcmVuIG9mIGFuIGVsZW1lbnQgd2l0aCB0aGUgTm92b0FjY29yZGlvbiBkaXJlY3RpdmUgYXR0YWNoZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzdHlsZVVybHM6IFsnLi9leHBhbnNpb24tcGFuZWwuc2NzcyddLFxuICBzZWxlY3RvcjogJ25vdm8tZXhwYW5zaW9uLXBhbmVsJyxcbiAgZXhwb3J0QXM6ICdub3ZvRXhwYW5zaW9uUGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLXBhbmVsLmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW25vdm9FeHBhbnNpb25BbmltYXRpb25zLmJvZHlFeHBhbnNpb25dLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWV4cGFuZGVkXSc6ICdleHBhbmRlZCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5nXSc6ICdfaGFzU3BhY2luZygpJyxcbiAgICAnW2NsYXNzLm5vdm8tZXhwYW5zaW9uLXBhbmVsLXBhZGRpbmddJzogJ3BhZGRpbmcnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uUGFuZWwgZXh0ZW5kcyBDZGtBY2NvcmRpb25JdGVtIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZXhwYW5kZWQ6IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIHRoZSB0b2dnbGUgaW5kaWNhdG9yIHNob3VsZCBiZSBoaWRkZW4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBoaWRlVG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRlVG9nZ2xlO1xuICB9XG4gIHNldCBoaWRlVG9nZ2xlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZVRvZ2dsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGlkZVRvZ2dsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwYWRkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wYWRkaW5nO1xuICB9XG4gIHNldCBwYWRkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcGFkZGluZyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfcGFkZGluZyA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIG9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBleHBhbmRlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBmb3IgY2hhbmdlcyBpbiBgQElucHV0YCBwcm9wZXJ0aWVzLiAqL1xuICByZWFkb25seSBfaW5wdXRDaGFuZ2VzID0gbmV3IFN1YmplY3Q8U2ltcGxlQ2hhbmdlcz4oKTtcblxuICAvKiogT3B0aW9uYWxseSBkZWZpbmVkIGFjY29yZGlvbiB0aGUgZXhwYW5zaW9uIHBhbmVsIGJlbG9uZ3MgdG8uICovXG4gIGFjY29yZGlvbjogTm92b0FjY29yZGlvbjtcblxuICAvKiogQ29udGVudCB0aGF0IHdpbGwgYmUgcmVuZGVyZWQgbGF6aWx5LiAqL1xuICBAQ29udGVudENoaWxkKE5vdm9FeHBhbnNpb25QYW5lbENvbnRlbnQpXG4gIF9sYXp5Q29udGVudDogTm92b0V4cGFuc2lvblBhbmVsQ29udGVudDtcblxuICAvKiogUG9ydGFsIGhvbGRpbmcgdGhlIHVzZXIncyBjb250ZW50LiAqL1xuICBfcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcblxuICAvKiogSUQgZm9yIHRoZSBhc3NvY2lhdGVkIGhlYWRlciBlbGVtZW50LiBVc2VkIGZvciBhMTF5IGxhYmVsbGluZy4gKi9cbiAgX2hlYWRlcklkID0gYG5vdm8tZXhwYW5zaW9uLXBhbmVsLWhlYWRlci0ke3VuaXF1ZUlkKyt9YDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBIb3N0KClcbiAgICBhY2NvcmRpb246IE5vdm9BY2NvcmRpb24sXG4gICAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBfdW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcjogVW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICApIHtcbiAgICBzdXBlcihhY2NvcmRpb24sIF9jaGFuZ2VEZXRlY3RvclJlZiwgX3VuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXIpO1xuICAgIHRoaXMuYWNjb3JkaW9uID0gYWNjb3JkaW9uO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGV4cGFuc2lvbiBpbmRpY2F0b3Igc2hvdWxkIGJlIGhpZGRlbi4gKi9cbiAgX2dldEhpZGVUb2dnbGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuYWNjb3JkaW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY2NvcmRpb24uaGlkZVRvZ2dsZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaGlkZVRvZ2dsZTtcbiAgfVxuXG4gIC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGV4cGFuc2lvbiBwYW5lbCBzaG91bGQgaGF2ZSBzcGFjaW5nIGJldHdlZW4gaXQgYW5kIGl0cyBzaWJsaW5ncy4gKi9cbiAgX2hhc1NwYWNpbmcoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuYWNjb3JkaW9uKSB7XG4gICAgICByZXR1cm4gKHRoaXMuZXhwYW5kZWQgPyB0aGlzLmFjY29yZGlvbi5kaXNwbGF5TW9kZSA6IHRoaXMuX2dldEV4cGFuZGVkU3RhdGUoKSkgPT09ICdkZWZhdWx0JztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGV4cGFuZGVkIHN0YXRlIHN0cmluZy4gKi9cbiAgX2dldEV4cGFuZGVkU3RhdGUoKTogTm92b0V4cGFuc2lvblBhbmVsU3RhdGUge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLl9sYXp5Q29udGVudCkge1xuICAgICAgLy8gUmVuZGVyIHRoZSBjb250ZW50IGFzIHNvb24gYXMgdGhlIHBhbmVsIGJlY29tZXMgb3Blbi5cbiAgICAgIHRoaXMub3BlbmVkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5leHBhbmRlZCAmJiAhdGhpcy5fcG9ydGFsKSxcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLl9sYXp5Q29udGVudC5fdGVtcGxhdGUsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5faW5wdXRDaGFuZ2VzLm5leHQoY2hhbmdlcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuX2lucHV0Q2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgX2JvZHlBbmltYXRpb24oZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZXZlbnQuZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSAnbm92by1leHBhbmRlZCc7XG4gICAgY29uc3QgeyBwaGFzZU5hbWUsIHRvU3RhdGUgfSA9IGV2ZW50O1xuXG4gICAgLy8gVG9nZ2xlIHRoZSBib2R5J3MgYG92ZXJmbG93OiBoaWRkZW5gIGNsYXNzIHdoZW4gY2xvc2luZyBzdGFydHMgb3Igd2hlbiBleHBhbnNpb24gZW5kcyBpblxuICAgIC8vIG9yZGVyIHRvIHByZXZlbnQgdGhlIGNhc2VzIHdoZXJlIHN3aXRjaGluZyB0b28gZWFybHkgd291bGQgY2F1c2UgdGhlIGFuaW1hdGlvbiB0byBqdW1wLlxuICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyBpdCBkaXJlY3RseSBvbiB0aGUgRE9NIGVsZW1lbnQgdG8gYXZvaWQgdGhlIHNsaWdodCBkZWxheSB0aGF0IGNvbWVzXG4gICAgLy8gd2l0aCBkb2luZyBpdCB2aWEgY2hhbmdlIGRldGVjdGlvbi5cbiAgICBpZiAocGhhc2VOYW1lID09PSAnZG9uZScgJiYgdG9TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgfSBlbHNlIGlmIChwaGFzZU5hbWUgPT09ICdzdGFydCcgJiYgdG9TdGF0ZSA9PT0gJ2NvbGxhcHNlZCcpIHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGlvbi1yb3cnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWFjdGlvbi1yb3cnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uUGFuZWxBY3Rpb25Sb3cge31cbiJdfQ==