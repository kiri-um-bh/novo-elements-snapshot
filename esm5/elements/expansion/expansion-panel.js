/**
 * @fileoverview added by tsickle
 * Generated from: elements/expansion/expansion-panel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var uniqueId = 0;
/**
 * `<novo-expansion-panel>`
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the NovoAccordion directive attached.
 */
var NovoExpansionPanel = /** @class */ (function (_super) {
    tslib_1.__extends(NovoExpansionPanel, _super);
    function NovoExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef) {
        var _this = _super.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher) || this;
        _this._viewContainerRef = _viewContainerRef;
        _this._hideToggle = false;
        _this._padding = true;
        _this.opened = new EventEmitter();
        _this.closed = new EventEmitter();
        _this.expandedChange = new EventEmitter();
        /**
         * Stream that emits for changes in `\@Input` properties.
         */
        _this._inputChanges = new Subject();
        /**
         * ID for the associated header element. Used for a11y labelling.
         */
        _this._headerId = "novo-expansion-panel-header-" + uniqueId++;
        _this.accordion = accordion;
        return _this;
    }
    Object.defineProperty(NovoExpansionPanel.prototype, "hideToggle", {
        /** Whether the toggle indicator should be hidden. */
        get: /**
         * Whether the toggle indicator should be hidden.
         * @return {?}
         */
        function () {
            return this._hideToggle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideToggle = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoExpansionPanel.prototype, "padding", {
        get: /**
         * @return {?}
         */
        function () {
            return this._padding;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._padding = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the expansion indicator should be hidden. */
    /**
     * Whether the expansion indicator should be hidden.
     * @return {?}
     */
    NovoExpansionPanel.prototype._getHideToggle = /**
     * Whether the expansion indicator should be hidden.
     * @return {?}
     */
    function () {
        if (this.accordion) {
            return this.accordion.hideToggle;
        }
        return this.hideToggle;
    };
    /** Determines whether the expansion panel should have spacing between it and its siblings. */
    /**
     * Determines whether the expansion panel should have spacing between it and its siblings.
     * @return {?}
     */
    NovoExpansionPanel.prototype._hasSpacing = /**
     * Determines whether the expansion panel should have spacing between it and its siblings.
     * @return {?}
     */
    function () {
        if (this.accordion) {
            return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
        }
        return false;
    };
    /** Gets the expanded state string. */
    /**
     * Gets the expanded state string.
     * @return {?}
     */
    NovoExpansionPanel.prototype._getExpandedState = /**
     * Gets the expanded state string.
     * @return {?}
     */
    function () {
        return this.expanded ? 'expanded' : 'collapsed';
    };
    /**
     * @return {?}
     */
    NovoExpansionPanel.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened
                .pipe(startWith(null), filter((/**
             * @return {?}
             */
            function () { return _this.expanded && !_this._portal; })), take(1))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this._portal = new TemplatePortal(_this._lazyContent._template, _this._viewContainerRef);
            }));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NovoExpansionPanel.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._inputChanges.next(changes);
    };
    /**
     * @return {?}
     */
    NovoExpansionPanel.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this._inputChanges.complete();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoExpansionPanel.prototype._bodyAnimation = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var classList = event.element.classList;
        /** @type {?} */
        var cssClass = 'novo-expanded';
        var phaseName = event.phaseName, toState = event.toState;
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
    };
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
                    styles: ["@-webkit-keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.novo-expansion-panel{background:#fff;color:#3d464d;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:content-box;display:block;margin:0 16px;-webkit-transition:margin 225ms ease-in-out;transition:margin 225ms ease-in-out}.novo-action-row{border-top-color:#3d464d}.novo-expansion-panel:not(.novo-expanded) .novo-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.novo-expansion-panel:not(.novo-expanded) .novo-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.novo-expansion-panel:not(.novo-expanded) .novo-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.novo-expansion-panel-header-title{color:#3d464d}.novo-expansion-indicator::after,.novo-expansion-panel-header-description{color:#999}.novo-expansion-panel-header[aria-disabled=true]{color:#999;pointer-events:none}.novo-expansion-panel-header[aria-disabled=true] .novo-expansion-panel-header-description,.novo-expansion-panel-header[aria-disabled=true] .novo-expansion-panel-header-title{color:inherit}.novo-expansion-panel.novo-expanded[theme=company]{border-top:3px solid #39d}.novo-expansion-panel.novo-expanded[theme=candidate]{border-top:3px solid #4b7}.novo-expansion-panel.novo-expanded[theme=navigation]{border-top:3px solid #2f384f}.novo-expansion-panel.novo-expanded[theme=lead]{border-top:3px solid #a69}.novo-expansion-panel.novo-expanded[theme=contact]{border-top:3px solid #fa4}.novo-expansion-panel.novo-expanded[theme=opportunity]{border-top:3px solid #625}.novo-expansion-panel.novo-expanded[theme=job]{border-top:3px solid #b56}.novo-expansion-panel.novo-expanded[theme=earnCode],.novo-expansion-panel.novo-expanded[theme=jobCode]{border-top:3px solid #696d79}.novo-expansion-panel.novo-expanded[theme=sendout]{border-top:3px solid #747884}.novo-expansion-panel.novo-expanded[theme=placement]{border-top:3px solid #0b344f}.novo-expansion-panel.novo-expanded[theme=corporateuser],.novo-expansion-panel.novo-expanded[theme=credential],.novo-expansion-panel.novo-expanded[theme=distributionList],.novo-expansion-panel.novo-expanded[theme=task],.novo-expansion-panel.novo-expanded[theme=user]{border-top:3px solid #4f5361}.novo-expansion-panel.novo-expanded[theme=aqua]{border-top:3px solid #3bafda}.novo-expansion-panel.novo-expanded[theme=ocean]{border-top:3px solid #4a89dc}.novo-expansion-panel.novo-expanded[theme=mint]{border-top:3px solid #37bc9b}.novo-expansion-panel.novo-expanded[theme=grass]{border-top:3px solid #8cc152}.novo-expansion-panel.novo-expanded[theme=sunflower]{border-top:3px solid #f6b042}.novo-expansion-panel.novo-expanded[theme=bittersweet]{border-top:3px solid #eb6845}.novo-expansion-panel.novo-expanded[theme=grapefruit]{border-top:3px solid #da4453}.novo-expansion-panel.novo-expanded[theme=carnation]{border-top:3px solid #d770ad}.novo-expansion-panel.novo-expanded[theme=lavender]{border-top:3px solid #967adc}.novo-expansion-panel.novo-expanded[theme=positive]{border-top:3px solid #4a89dc}.novo-expansion-panel.novo-expanded[theme=success]{border-top:3px solid #8cc152}.novo-expansion-panel.novo-expanded[theme=negative]{border-top:3px solid #da4453}.novo-expansion-panel.novo-expanded[theme=warning]{border-top:3px solid #f6b042}.novo-expansion-panel.novo-expanded[theme=black]{border-top:3px solid #000}.novo-expansion-panel.novo-expanded[theme=dark]{border-top:3px solid #3d464d}.novo-expansion-panel.novo-expanded[theme=pulse]{border-top:3px solid #3bafda}.novo-expansion-panel.novo-expanded[theme=neutral]{border-top:3px solid #4f5361}.novo-expansion-panel.novo-expanded[theme=navy]{border-top:3px solid #0d2d42}.novo-expansion-panel.novo-expanded[theme=contract]{border-top:3px solid #454ea0}.novo-expansion-panel.novo-expanded[theme=mountain]{border-top:3px solid #9678b6}.novo-expansion-panel.novo-expanded[theme=billableCharge],.novo-expansion-panel.novo-expanded[theme=invoiceStatement],.novo-expansion-panel.novo-expanded[theme=payableCharge]{border-top:3px solid #696d79}.novo-expansion-panel.novo-expanded[theme=submission]{border-top:3px solid #a9adbb}.novo-expansion-panel.novo-expanded[theme=note]{border-top:3px solid #747884}.novo-expansion-panel.novo-expanded[theme=empty]{border-top:3px solid #cccdcc}.novo-expansion-panel.novo-expanded[theme=background]{border-top:3px solid #f4f4f4}.novo-expansion-panel.novo-expanded[theme=white]{border-top:3px solid #fff}.novo-expansion-panel.novo-expanded[theme=grey]{border-top:3px solid #999}.novo-expansion-panel.novo-expanded[theme=off-white]{border-top:3px solid #f4f4f4}.novo-expansion-panel.novo-expanded[theme=light]{border-top:3px solid #d9dadc}.novo-expansion-panel.novo-expanded{margin:16px 4px}.novo-expansion-panel.novo-expanded:first-child{margin-top:0}.novo-expansion-panel.novo-expanded:last-child{margin-bottom:0}.novo-expansion-panel-content{overflow:hidden}.novo-expansion-panel-content.novo-expanded{overflow:visible}.novo-expansion-panel-padding .novo-expansion-panel-body{padding:0 24px 16px}.novo-accordion .novo-expansion-panel-spacing:first-child{margin-top:0}.novo-accordion .novo-expansion-panel-spacing:last-child{margin-bottom:0}.novo-action-row{border-top-style:solid;border-top-width:1px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:end;justify-content:flex-end;padding:16px 8px 16px 24px}.novo-action-row button.novo-button{margin-left:8px}[dir=rtl] .novo-action-row button.novo-button{margin-left:0;margin-right:8px}"]
                }] }
    ];
    /** @nocollapse */
    NovoExpansionPanel.ctorParameters = function () { return [
        { type: NovoAccordion, decorators: [{ type: Optional }, { type: Host }] },
        { type: ChangeDetectorRef },
        { type: UniqueSelectionDispatcher },
        { type: ViewContainerRef }
    ]; };
    NovoExpansionPanel.propDecorators = {
        disabled: [{ type: Input }],
        expanded: [{ type: Input }],
        hideToggle: [{ type: Input }],
        padding: [{ type: Input }],
        opened: [{ type: Output }],
        closed: [{ type: Output }],
        expandedChange: [{ type: Output }],
        _lazyContent: [{ type: ContentChild, args: [NovoExpansionPanelContent, { static: false },] }]
    };
    return NovoExpansionPanel;
}(CdkAccordionItem));
export { NovoExpansionPanel };
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
var NovoExpansionPanelActionRow = /** @class */ (function () {
    function NovoExpansionPanelActionRow() {
    }
    NovoExpansionPanelActionRow.decorators = [
        { type: Directive, args: [{
                    selector: 'novo-action-row',
                    host: {
                        class: 'novo-action-row',
                    },
                },] }
    ];
    return NovoExpansionPanelActionRow;
}());
export { NovoExpansionPanelActionRow };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2V4cGFuc2lvbi9leHBhbnNpb24tcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBRVIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0lBTWxFLFFBQVEsR0FBRyxDQUFDOzs7Ozs7O0FBUWhCO0lBZXdDLDhDQUFnQjtJQStDdEQsNEJBR0UsU0FBd0IsRUFDeEIsa0JBQXFDLEVBQ3JDLDBCQUFxRCxFQUM3QyxpQkFBbUM7UUFON0MsWUFRRSxrQkFBTSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsMEJBQTBCLENBQUMsU0FFakU7UUFK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Z0IsR0F1SHZEO1NBdkhZLGtCQUFrQjs7O0lBQzdCLHNDQUNrQjs7SUFDbEIsc0NBQ2tCOzs7OztJQVNsQix5Q0FBNEI7Ozs7O0lBUzVCLHNDQUF3Qjs7SUFFeEIsb0NBQ2dEOztJQUNoRCxvQ0FDZ0Q7O0lBQ2hELDRDQUMyRDs7Ozs7SUFHM0QsMkNBQXNEOzs7OztJQUd0RCx1Q0FBeUI7Ozs7O0lBR3pCLDBDQUN3Qzs7Ozs7SUFHeEMscUNBQXdCOzs7OztJQUd4Qix1Q0FBd0Q7Ozs7O0lBUXRELCtDQUEyQzs7QUFvRS9DO0lBQUE7SUFNMEMsQ0FBQzs7Z0JBTjFDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGlCQUFpQjtxQkFDekI7aUJBQ0Y7O0lBQ3lDLGtDQUFDO0NBQUEsQUFOM0MsSUFNMkM7U0FBOUIsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENka0FjY29yZGlvbkl0ZW0gfSBmcm9tICdAYW5ndWxhci9jZGsvYWNjb3JkaW9uJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBVbmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5vdm9BY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgeyBub3ZvRXhwYW5zaW9uQW5pbWF0aW9ucyB9IGZyb20gJy4vZXhwYW5zaW9uLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTm92b0V4cGFuc2lvblBhbmVsQ29udGVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQnO1xuXG4vKiogTm92b0V4cGFuc2lvblBhbmVsJ3Mgc3RhdGVzLiAqL1xuZXhwb3J0IHR5cGUgTm92b0V4cGFuc2lvblBhbmVsU3RhdGUgPSAnZXhwYW5kZWQnIHwgJ2NvbGxhcHNlZCc7XG5cbi8qKiBDb3VudGVyIGZvciBnZW5lcmF0aW5nIHVuaXF1ZSBlbGVtZW50IGlkcy4gKi9cbmxldCB1bmlxdWVJZCA9IDA7XG5cbi8qKlxuICogYDxub3ZvLWV4cGFuc2lvbi1wYW5lbD5gXG4gKlxuICogVGhpcyBjb21wb25lbnQgY2FuIGJlIHVzZWQgYXMgYSBzaW5nbGUgZWxlbWVudCB0byBzaG93IGV4cGFuZGFibGUgY29udGVudCwgb3IgYXMgb25lIG9mXG4gKiBtdWx0aXBsZSBjaGlsZHJlbiBvZiBhbiBlbGVtZW50IHdpdGggdGhlIE5vdm9BY2NvcmRpb24gZGlyZWN0aXZlIGF0dGFjaGVkLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5zaW9uLXBhbmVsLnNjc3MnXSxcbiAgc2VsZWN0b3I6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbCcsXG4gIGV4cG9ydEFzOiAnbm92b0V4cGFuc2lvblBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtub3ZvRXhwYW5zaW9uQW5pbWF0aW9ucy5ib2R5RXhwYW5zaW9uXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1leHBhbnNpb24tcGFuZWwnLFxuICAgICdbY2xhc3Mubm92by1leHBhbmRlZF0nOiAnZXhwYW5kZWQnLFxuICAgICdbY2xhc3Mubm92by1leHBhbnNpb24tcGFuZWwtc3BhY2luZ10nOiAnX2hhc1NwYWNpbmcoKScsXG4gICAgJ1tjbGFzcy5ub3ZvLWV4cGFuc2lvbi1wYW5lbC1wYWRkaW5nXSc6ICdwYWRkaW5nJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0V4cGFuc2lvblBhbmVsIGV4dGVuZHMgQ2RrQWNjb3JkaW9uSXRlbSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGV4cGFuZGVkOiBib29sZWFuO1xuICAvKiogV2hldGhlciB0aGUgdG9nZ2xlIGluZGljYXRvciBzaG91bGQgYmUgaGlkZGVuLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaGlkZVRvZ2dsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZVRvZ2dsZTtcbiAgfVxuICBzZXQgaGlkZVRvZ2dsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVUb2dnbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hpZGVUb2dnbGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgcGFkZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFkZGluZztcbiAgfVxuICBzZXQgcGFkZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3BhZGRpbmcgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3BhZGRpbmcgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBvcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZXhwYW5kZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgZm9yIGNoYW5nZXMgaW4gYEBJbnB1dGAgcHJvcGVydGllcy4gKi9cbiAgcmVhZG9ubHkgX2lucHV0Q2hhbmdlcyA9IG5ldyBTdWJqZWN0PFNpbXBsZUNoYW5nZXM+KCk7XG5cbiAgLyoqIE9wdGlvbmFsbHkgZGVmaW5lZCBhY2NvcmRpb24gdGhlIGV4cGFuc2lvbiBwYW5lbCBiZWxvbmdzIHRvLiAqL1xuICBhY2NvcmRpb246IE5vdm9BY2NvcmRpb247XG5cbiAgLyoqIENvbnRlbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIGxhemlseS4gKi9cbiAgQENvbnRlbnRDaGlsZChOb3ZvRXhwYW5zaW9uUGFuZWxDb250ZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgX2xhenlDb250ZW50OiBOb3ZvRXhwYW5zaW9uUGFuZWxDb250ZW50O1xuXG4gIC8qKiBQb3J0YWwgaG9sZGluZyB0aGUgdXNlcidzIGNvbnRlbnQuICovXG4gIF9wb3J0YWw6IFRlbXBsYXRlUG9ydGFsO1xuXG4gIC8qKiBJRCBmb3IgdGhlIGFzc29jaWF0ZWQgaGVhZGVyIGVsZW1lbnQuIFVzZWQgZm9yIGExMXkgbGFiZWxsaW5nLiAqL1xuICBfaGVhZGVySWQgPSBgbm92by1leHBhbnNpb24tcGFuZWwtaGVhZGVyLSR7dW5pcXVlSWQrK31gO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEhvc3QoKVxuICAgIGFjY29yZGlvbjogTm92b0FjY29yZGlvbixcbiAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIF91bmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyOiBVbmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICkge1xuICAgIHN1cGVyKGFjY29yZGlvbiwgX2NoYW5nZURldGVjdG9yUmVmLCBfdW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcik7XG4gICAgdGhpcy5hY2NvcmRpb24gPSBhY2NvcmRpb247XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgZXhwYW5zaW9uIGluZGljYXRvciBzaG91bGQgYmUgaGlkZGVuLiAqL1xuICBfZ2V0SGlkZVRvZ2dsZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5hY2NvcmRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmFjY29yZGlvbi5oaWRlVG9nZ2xlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5oaWRlVG9nZ2xlO1xuICB9XG5cbiAgLyoqIERldGVybWluZXMgd2hldGhlciB0aGUgZXhwYW5zaW9uIHBhbmVsIHNob3VsZCBoYXZlIHNwYWNpbmcgYmV0d2VlbiBpdCBhbmQgaXRzIHNpYmxpbmdzLiAqL1xuICBfaGFzU3BhY2luZygpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5hY2NvcmRpb24pIHtcbiAgICAgIHJldHVybiAodGhpcy5leHBhbmRlZCA/IHRoaXMuYWNjb3JkaW9uLmRpc3BsYXlNb2RlIDogdGhpcy5fZ2V0RXhwYW5kZWRTdGF0ZSgpKSA9PT0gJ2RlZmF1bHQnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgZXhwYW5kZWQgc3RhdGUgc3RyaW5nLiAqL1xuICBfZ2V0RXhwYW5kZWRTdGF0ZSgpOiBOb3ZvRXhwYW5zaW9uUGFuZWxTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kZWQgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCc7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuX2xhenlDb250ZW50KSB7XG4gICAgICAvLyBSZW5kZXIgdGhlIGNvbnRlbnQgYXMgc29vbiBhcyB0aGUgcGFuZWwgYmVjb21lcyBvcGVuLlxuICAgICAgdGhpcy5vcGVuZWRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmV4cGFuZGVkICYmICF0aGlzLl9wb3J0YWwpLFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuX2xhenlDb250ZW50Ll90ZW1wbGF0ZSwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLl9pbnB1dENoYW5nZXMubmV4dChjaGFuZ2VzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5faW5wdXRDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICBfYm9keUFuaW1hdGlvbihldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBldmVudC5lbGVtZW50LmNsYXNzTGlzdDtcbiAgICBjb25zdCBjc3NDbGFzcyA9ICdub3ZvLWV4cGFuZGVkJztcbiAgICBjb25zdCB7IHBoYXNlTmFtZSwgdG9TdGF0ZSB9ID0gZXZlbnQ7XG5cbiAgICAvLyBUb2dnbGUgdGhlIGJvZHkncyBgb3ZlcmZsb3c6IGhpZGRlbmAgY2xhc3Mgd2hlbiBjbG9zaW5nIHN0YXJ0cyBvciB3aGVuIGV4cGFuc2lvbiBlbmRzIGluXG4gICAgLy8gb3JkZXIgdG8gcHJldmVudCB0aGUgY2FzZXMgd2hlcmUgc3dpdGNoaW5nIHRvbyBlYXJseSB3b3VsZCBjYXVzZSB0aGUgYW5pbWF0aW9uIHRvIGp1bXAuXG4gICAgLy8gTm90ZSB0aGF0IHdlIGRvIGl0IGRpcmVjdGx5IG9uIHRoZSBET00gZWxlbWVudCB0byBhdm9pZCB0aGUgc2xpZ2h0IGRlbGF5IHRoYXQgY29tZXNcbiAgICAvLyB3aXRoIGRvaW5nIGl0IHZpYSBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgIGlmIChwaGFzZU5hbWUgPT09ICdkb25lJyAmJiB0b1N0YXRlID09PSAnZXhwYW5kZWQnKSB7XG4gICAgICBjbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9IGVsc2UgaWYgKHBoYXNlTmFtZSA9PT0gJ3N0YXJ0JyAmJiB0b1N0YXRlID09PSAnY29sbGFwc2VkJykge1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aW9uLXJvdycsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tYWN0aW9uLXJvdycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9FeHBhbnNpb25QYW5lbEFjdGlvblJvdyB7fVxuIl19