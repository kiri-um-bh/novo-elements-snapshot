/**
 * @fileoverview added by tsickle
 * Generated from: elements/expansion/expansion-panel-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ENTER, SPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, Host, Input, ViewEncapsulation, } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { filter } from 'rxjs/operators';
import { novoExpansionAnimations } from './expansion-animations';
import { NovoExpansionPanel } from './expansion-panel';
/**
 * `<novo-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<novo-expansion-panel>`.
 */
export class NovoExpansionPanelHeader {
    /**
     * @param {?} panel
     * @param {?} _element
     * @param {?} _changeDetectorRef
     */
    constructor(panel, _element, _changeDetectorRef) {
        this.panel = panel;
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = Subscription.EMPTY;
        // Since the toggle state depends on an @Input on the panel, we
        // need to  subscribe and trigger change detection manually.
        this._parentChangeSubscription = merge(panel.opened, panel.closed, panel._inputChanges.pipe(filter((/**
         * @param {?} changes
         * @return {?}
         */
        (changes) => !!(changes.hideToggle || changes.disabled))))).subscribe((/**
         * @return {?}
         */
        () => this._changeDetectorRef.markForCheck()));
        // _focusMonitor.monitor(_element.nativeElement);
    }
    /**
     * Toggles the expanded state of the panel.
     * @return {?}
     */
    _toggle() {
        this.panel.toggle();
    }
    /**
     * Gets whether the panel is expanded.
     * @return {?}
     */
    _isExpanded() {
        return this.panel.expanded;
    }
    /**
     * Gets the expanded state string of the panel.
     * @return {?}
     */
    _getExpandedState() {
        return this.panel._getExpandedState();
    }
    /**
     * Gets the panel id.
     * @return {?}
     */
    _getPanelId() {
        return this.panel.id;
    }
    /**
     * Gets whether the expand indicator should be shown.
     * @return {?}
     */
    _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
    }
    /**
     * Handle keydown event calling to toggle() if appropriate.
     * @param {?} event
     * @return {?}
     */
    _keydown(event) {
        switch (event.keyCode) {
            // Toggle for space and enter keys.
            case SPACE:
            case ENTER:
                event.preventDefault();
                this._toggle();
                break;
            default:
                return;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._parentChangeSubscription.unsubscribe();
        // this._focusMonitor.stopMonitoring(this._element.nativeElement);
    }
}
NovoExpansionPanelHeader.decorators = [
    { type: Component, args: [{
                selector: 'novo-expansion-panel-header',
                template: "<span class=\"novo-content\">\n  <ng-content select=\"novo-panel-title\"></ng-content>\n  <ng-content select=\"novo-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"novo-expansion-indicator\"></span>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [novoExpansionAnimations.indicatorRotate, novoExpansionAnimations.expansionHeaderHeight],
                host: {
                    class: 'novo-expansion-panel-header',
                    role: 'button',
                    '[attr.id]': 'panel._headerId',
                    '[attr.tabindex]': 'panel.disabled ? -1 : 0',
                    '[attr.aria-controls]': '_getPanelId()',
                    '[attr.aria-expanded]': '_isExpanded()',
                    '[attr.aria-disabled]': 'panel.disabled',
                    '[class.novo-expanded]': '_isExpanded()',
                    '(click)': '_toggle()',
                    '(keydown)': '_keydown($event)',
                    '[@expansionHeight]': `{
        value: _getExpandedState(),
        params: {
          collapsedHeight: collapsedHeight,
          expandedHeight: expandedHeight
        }
    }`,
                },
                styles: [".novo-expansion-panel-header{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;padding:0 24px}.novo-expansion-panel-header:focus,.novo-expansion-panel-header:hover{outline:0}.novo-expansion-panel-header.novo-expanded:focus,.novo-expansion-panel-header.novo-expanded:hover{background:inherit}.novo-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.novo-content{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;overflow:hidden}.novo-expansion-panel-header-description,.novo-expansion-panel-header-title{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;margin-right:16px;-webkit-box-align:center;align-items:center}[dir=rtl] .novo-expansion-panel-header-description,[dir=rtl] .novo-expansion-panel-header-title{margin-right:0;margin-left:16px}.novo-expansion-panel-header-description{-webkit-box-flex:2;flex-grow:2}.novo-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;-webkit-transform:rotate(45deg);transform:rotate(45deg);vertical-align:middle}"]
            }] }
];
/** @nocollapse */
NovoExpansionPanelHeader.ctorParameters = () => [
    { type: NovoExpansionPanel, decorators: [{ type: Host }] },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NovoExpansionPanelHeader.propDecorators = {
    expandedHeight: [{ type: Input }],
    collapsedHeight: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoExpansionPanelHeader.prototype._parentChangeSubscription;
    /**
     * Height of the header while the panel is expanded.
     * @type {?}
     */
    NovoExpansionPanelHeader.prototype.expandedHeight;
    /**
     * Height of the header while the panel is collapsed.
     * @type {?}
     */
    NovoExpansionPanelHeader.prototype.collapsedHeight;
    /** @type {?} */
    NovoExpansionPanelHeader.prototype.panel;
    /**
     * @type {?}
     * @private
     */
    NovoExpansionPanelHeader.prototype._element;
    /**
     * @type {?}
     * @private
     */
    NovoExpansionPanelHeader.prototype._changeDetectorRef;
}
/**
 * `<novo-panel-description>`
 *
 * This direction is to be used inside of the NovoExpansionPanelHeader component.
 */
export class NovoExpansionPanelDescription {
}
NovoExpansionPanelDescription.decorators = [
    { type: Directive, args: [{
                selector: 'novo-panel-description',
                host: {
                    class: 'novo-expansion-panel-header-description',
                },
            },] }
];
/**
 * `<novo-panel-title>`
 *
 * This direction is to be used inside of the NovoExpansionPanelHeader component.
 */
export class NovoExpansionPanelTitle {
}
NovoExpansionPanelTitle.decorators = [
    { type: Directive, args: [{
                selector: 'novo-panel-title',
                host: {
                    class: 'novo-expansion-panel-header-title',
                },
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9leHBhbnNpb24vZXhwYW5zaW9uLXBhbmVsLWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFFTCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUFrQ3ZELE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUduQyxZQUNpQixLQUF5QixFQUNoQyxRQUFvQixFQUVwQixrQkFBcUM7UUFIOUIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUVwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBTnZDLDhCQUF5QixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFRckQsK0RBQStEO1FBQy9ELDREQUE0RDtRQUM1RCxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUNwQyxLQUFLLENBQUMsTUFBTSxFQUNaLEtBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxD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bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBub3ZvRXhwYW5zaW9uQW5pbWF0aW9ucyB9IGZyb20gJy4vZXhwYW5zaW9uLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTm92b0V4cGFuc2lvblBhbmVsIH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwnO1xuXG4vKipcbiAqIGA8bm92by1leHBhbnNpb24tcGFuZWwtaGVhZGVyPmBcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjb3JyZXNwb25kcyB0byB0aGUgaGVhZGVyIGVsZW1lbnQgb2YgYW4gYDxub3ZvLWV4cGFuc2lvbi1wYW5lbD5gLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbnNpb24tcGFuZWwtaGVhZGVyLnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbbm92b0V4cGFuc2lvbkFuaW1hdGlvbnMuaW5kaWNhdG9yUm90YXRlLCBub3ZvRXhwYW5zaW9uQW5pbWF0aW9ucy5leHBhbnNpb25IZWFkZXJIZWlnaHRdLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFxuICAgIHJvbGU6ICdidXR0b24nLFxuICAgICdbYXR0ci5pZF0nOiAncGFuZWwuX2hlYWRlcklkJyxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ3BhbmVsLmRpc2FibGVkID8gLTEgOiAwJyxcbiAgICAnW2F0dHIuYXJpYS1jb250cm9sc10nOiAnX2dldFBhbmVsSWQoKScsXG4gICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ19pc0V4cGFuZGVkKCknLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdwYW5lbC5kaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWV4cGFuZGVkXSc6ICdfaXNFeHBhbmRlZCgpJyxcbiAgICAnKGNsaWNrKSc6ICdfdG9nZ2xlKCknLFxuICAgICcoa2V5ZG93biknOiAnX2tleWRvd24oJGV2ZW50KScsXG4gICAgJ1tAZXhwYW5zaW9uSGVpZ2h0XSc6IGB7XG4gICAgICAgIHZhbHVlOiBfZ2V0RXhwYW5kZWRTdGF0ZSgpLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjb2xsYXBzZWRIZWlnaHQ6IGNvbGxhcHNlZEhlaWdodCxcbiAgICAgICAgICBleHBhbmRlZEhlaWdodDogZXhwYW5kZWRIZWlnaHRcbiAgICAgICAgfVxuICAgIH1gLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uUGFuZWxIZWFkZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9wYXJlbnRDaGFuZ2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwdWJsaWMgcGFuZWw6IE5vdm9FeHBhbnNpb25QYW5lbCxcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIC8vIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgLy8gU2luY2UgdGhlIHRvZ2dsZSBzdGF0ZSBkZXBlbmRzIG9uIGFuIEBJbnB1dCBvbiB0aGUgcGFuZWwsIHdlXG4gICAgLy8gbmVlZCB0byAgc3Vic2NyaWJlIGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gbWFudWFsbHkuXG4gICAgdGhpcy5fcGFyZW50Q2hhbmdlU3Vic2NyaXB0aW9uID0gbWVyZ2UoXG4gICAgICBwYW5lbC5vcGVuZWQsXG4gICAgICBwYW5lbC5jbG9zZWQsXG4gICAgICBwYW5lbC5faW5wdXRDaGFuZ2VzLnBpcGUoZmlsdGVyKChjaGFuZ2VzKSA9PiAhIShjaGFuZ2VzLmhpZGVUb2dnbGUgfHwgY2hhbmdlcy5kaXNhYmxlZCkpKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XG5cbiAgICAvLyBfZm9jdXNNb25pdG9yLm1vbml0b3IoX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICAvKiogSGVpZ2h0IG9mIHRoZSBoZWFkZXIgd2hpbGUgdGhlIHBhbmVsIGlzIGV4cGFuZGVkLiAqL1xuICBASW5wdXQoKVxuICBleHBhbmRlZEhlaWdodDogc3RyaW5nO1xuXG4gIC8qKiBIZWlnaHQgb2YgdGhlIGhlYWRlciB3aGlsZSB0aGUgcGFuZWwgaXMgY29sbGFwc2VkLiAqL1xuICBASW5wdXQoKVxuICBjb2xsYXBzZWRIZWlnaHQ6IHN0cmluZztcblxuICAvKiogVG9nZ2xlcyB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIHBhbmVsLiAqL1xuICBfdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMucGFuZWwudG9nZ2xlKCk7XG4gIH1cblxuICAvKiogR2V0cyB3aGV0aGVyIHRoZSBwYW5lbCBpcyBleHBhbmRlZC4gKi9cbiAgX2lzRXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFuZWwuZXhwYW5kZWQ7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgZXhwYW5kZWQgc3RhdGUgc3RyaW5nIG9mIHRoZSBwYW5lbC4gKi9cbiAgX2dldEV4cGFuZGVkU3RhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5fZ2V0RXhwYW5kZWRTdGF0ZSgpO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIHBhbmVsIGlkLiAqL1xuICBfZ2V0UGFuZWxJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhbmVsLmlkO1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciB0aGUgZXhwYW5kIGluZGljYXRvciBzaG91bGQgYmUgc2hvd24uICovXG4gIF9zaG93VG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5wYW5lbC5oaWRlVG9nZ2xlICYmICF0aGlzLnBhbmVsLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqIEhhbmRsZSBrZXlkb3duIGV2ZW50IGNhbGxpbmcgdG8gdG9nZ2xlKCkgaWYgYXBwcm9wcmlhdGUuICovXG4gIF9rZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAvLyBUb2dnbGUgZm9yIHNwYWNlIGFuZCBlbnRlciBrZXlzLlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9wYXJlbnRDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAvLyB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxufVxuXG4vKipcbiAqIGA8bm92by1wYW5lbC1kZXNjcmlwdGlvbj5gXG4gKlxuICogVGhpcyBkaXJlY3Rpb24gaXMgdG8gYmUgdXNlZCBpbnNpZGUgb2YgdGhlIE5vdm9FeHBhbnNpb25QYW5lbEhlYWRlciBjb21wb25lbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tcGFuZWwtZGVzY3JpcHRpb24nLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24nLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uUGFuZWxEZXNjcmlwdGlvbiB7fVxuXG4vKipcbiAqIGA8bm92by1wYW5lbC10aXRsZT5gXG4gKlxuICogVGhpcyBkaXJlY3Rpb24gaXMgdG8gYmUgdXNlZCBpbnNpZGUgb2YgdGhlIE5vdm9FeHBhbnNpb25QYW5lbEhlYWRlciBjb21wb25lbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tcGFuZWwtdGl0bGUnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uUGFuZWxUaXRsZSB7fVxuIl19