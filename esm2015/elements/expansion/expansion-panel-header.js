import { ENTER, SPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, Host, Input, ViewEncapsulation } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { novoExpansionAnimations } from './expansion-animations';
import { NovoExpansionPanel } from './expansion-panel';
/**
 * `<novo-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<novo-expansion-panel>`.
 */
export class NovoExpansionPanelHeader {
    constructor(panel, _element, 
    // private _focusMonitor: FocusMonitor,
    _changeDetectorRef) {
        this.panel = panel;
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = Subscription.EMPTY;
        // Since the toggle state depends on an @Input on the panel, we
        // need to  subscribe and trigger change detection manually.
        this._parentChangeSubscription = merge(panel.opened, panel.closed, panel._inputChanges.pipe(filter((changes) => !!(changes.hideToggle || changes.disabled)))).subscribe(() => this._changeDetectorRef.markForCheck());
        // _focusMonitor.monitor(_element.nativeElement);
    }
    /** Toggles the expanded state of the panel. */
    _toggle() {
        this.panel.toggle();
    }
    /** Gets whether the panel is expanded. */
    _isExpanded() {
        return this.panel.expanded;
    }
    /** Gets the expanded state string of the panel. */
    _getExpandedState() {
        return this.panel._getExpandedState();
    }
    /** Gets the panel id. */
    _getPanelId() {
        return this.panel.id;
    }
    /** Gets whether the expand indicator should be shown. */
    _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
    }
    /** Handle keydown event calling to toggle() if appropriate. */
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
                styles: [".novo-expansion-panel-header{align-items:center;display:flex;flex-direction:row;padding:0 24px}.novo-expansion-panel-header:focus,.novo-expansion-panel-header:hover{outline:none}.novo-expansion-panel-header.novo-expanded:focus,.novo-expansion-panel-header.novo-expanded:hover{background:inherit}.novo-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.novo-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.novo-expansion-panel-header-description,.novo-expansion-panel-header-title{align-items:center;display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .novo-expansion-panel-header-description,[dir=rtl] .novo-expansion-panel-header-title{margin-left:16px;margin-right:0}.novo-expansion-panel-header-description{flex-grow:2}.novo-expansion-indicator:after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"]
            },] }
];
NovoExpansionPanelHeader.ctorParameters = () => [
    { type: NovoExpansionPanel, decorators: [{ type: Host }] },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NovoExpansionPanelHeader.propDecorators = {
    expandedHeight: [{ type: Input }],
    collapsedHeight: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9leHBhbnNpb24vZXhwYW5zaW9uLXBhbmVsLWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hKLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV2RDs7OztHQUlHO0FBNEJILE1BQU0sT0FBTyx3QkFBd0I7SUFHbkMsWUFDaUIsS0FBeUIsRUFDaEMsUUFBb0I7SUFDNUIsdUNBQXVDO0lBQy9CLGtCQUFxQztRQUg5QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBRXBCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFOdkMsOEJBQXlCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQVFyRCwrREFBK0Q7UUFDL0QsNERBQTREO1FBQzVELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQ3BDLEtBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSyxDQUFDLE1BQU0sRUFDWixLQUFLLENB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IFNQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIElucHV0LCBPbkRlc3Ryb3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBub3ZvRXhwYW5zaW9uQW5pbWF0aW9ucyB9IGZyb20gJy4vZXhwYW5zaW9uLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTm92b0V4cGFuc2lvblBhbmVsIH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwnO1xuXG4vKipcbiAqIGA8bm92by1leHBhbnNpb24tcGFuZWwtaGVhZGVyPmBcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjb3JyZXNwb25kcyB0byB0aGUgaGVhZGVyIGVsZW1lbnQgb2YgYW4gYDxub3ZvLWV4cGFuc2lvbi1wYW5lbD5gLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbnNpb24tcGFuZWwtaGVhZGVyLnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbbm92b0V4cGFuc2lvbkFuaW1hdGlvbnMuaW5kaWNhdG9yUm90YXRlLCBub3ZvRXhwYW5zaW9uQW5pbWF0aW9ucy5leHBhbnNpb25IZWFkZXJIZWlnaHRdLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFxuICAgIHJvbGU6ICdidXR0b24nLFxuICAgICdbYXR0ci5pZF0nOiAncGFuZWwuX2hlYWRlcklkJyxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ3BhbmVsLmRpc2FibGVkID8gLTEgOiAwJyxcbiAgICAnW2F0dHIuYXJpYS1jb250cm9sc10nOiAnX2dldFBhbmVsSWQoKScsXG4gICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ19pc0V4cGFuZGVkKCknLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdwYW5lbC5kaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWV4cGFuZGVkXSc6ICdfaXNFeHBhbmRlZCgpJyxcbiAgICAnKGNsaWNrKSc6ICdfdG9nZ2xlKCknLFxuICAgICcoa2V5ZG93biknOiAnX2tleWRvd24oJGV2ZW50KScsXG4gICAgJ1tAZXhwYW5zaW9uSGVpZ2h0XSc6IGB7XG4gICAgICAgIHZhbHVlOiBfZ2V0RXhwYW5kZWRTdGF0ZSgpLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjb2xsYXBzZWRIZWlnaHQ6IGNvbGxhcHNlZEhlaWdodCxcbiAgICAgICAgICBleHBhbmRlZEhlaWdodDogZXhwYW5kZWRIZWlnaHRcbiAgICAgICAgfVxuICAgIH1gLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uUGFuZWxIZWFkZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9wYXJlbnRDaGFuZ2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwdWJsaWMgcGFuZWw6IE5vdm9FeHBhbnNpb25QYW5lbCxcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIC8vIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgLy8gU2luY2UgdGhlIHRvZ2dsZSBzdGF0ZSBkZXBlbmRzIG9uIGFuIEBJbnB1dCBvbiB0aGUgcGFuZWwsIHdlXG4gICAgLy8gbmVlZCB0byAgc3Vic2NyaWJlIGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gbWFudWFsbHkuXG4gICAgdGhpcy5fcGFyZW50Q2hhbmdlU3Vic2NyaXB0aW9uID0gbWVyZ2UoXG4gICAgICBwYW5lbC5vcGVuZWQsXG4gICAgICBwYW5lbC5jbG9zZWQsXG4gICAgICBwYW5lbC5faW5wdXRDaGFuZ2VzLnBpcGUoZmlsdGVyKChjaGFuZ2VzKSA9PiAhIShjaGFuZ2VzLmhpZGVUb2dnbGUgfHwgY2hhbmdlcy5kaXNhYmxlZCkpKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XG5cbiAgICAvLyBfZm9jdXNNb25pdG9yLm1vbml0b3IoX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICAvKiogSGVpZ2h0IG9mIHRoZSBoZWFkZXIgd2hpbGUgdGhlIHBhbmVsIGlzIGV4cGFuZGVkLiAqL1xuICBASW5wdXQoKVxuICBleHBhbmRlZEhlaWdodDogc3RyaW5nO1xuXG4gIC8qKiBIZWlnaHQgb2YgdGhlIGhlYWRlciB3aGlsZSB0aGUgcGFuZWwgaXMgY29sbGFwc2VkLiAqL1xuICBASW5wdXQoKVxuICBjb2xsYXBzZWRIZWlnaHQ6IHN0cmluZztcblxuICAvKiogVG9nZ2xlcyB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIHBhbmVsLiAqL1xuICBfdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMucGFuZWwudG9nZ2xlKCk7XG4gIH1cblxuICAvKiogR2V0cyB3aGV0aGVyIHRoZSBwYW5lbCBpcyBleHBhbmRlZC4gKi9cbiAgX2lzRXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFuZWwuZXhwYW5kZWQ7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgZXhwYW5kZWQgc3RhdGUgc3RyaW5nIG9mIHRoZSBwYW5lbC4gKi9cbiAgX2dldEV4cGFuZGVkU3RhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5fZ2V0RXhwYW5kZWRTdGF0ZSgpO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIHBhbmVsIGlkLiAqL1xuICBfZ2V0UGFuZWxJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhbmVsLmlkO1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciB0aGUgZXhwYW5kIGluZGljYXRvciBzaG91bGQgYmUgc2hvd24uICovXG4gIF9zaG93VG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5wYW5lbC5oaWRlVG9nZ2xlICYmICF0aGlzLnBhbmVsLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqIEhhbmRsZSBrZXlkb3duIGV2ZW50IGNhbGxpbmcgdG8gdG9nZ2xlKCkgaWYgYXBwcm9wcmlhdGUuICovXG4gIF9rZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAvLyBUb2dnbGUgZm9yIHNwYWNlIGFuZCBlbnRlciBrZXlzLlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9wYXJlbnRDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAvLyB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxufVxuXG4vKipcbiAqIGA8bm92by1wYW5lbC1kZXNjcmlwdGlvbj5gXG4gKlxuICogVGhpcyBkaXJlY3Rpb24gaXMgdG8gYmUgdXNlZCBpbnNpZGUgb2YgdGhlIE5vdm9FeHBhbnNpb25QYW5lbEhlYWRlciBjb21wb25lbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tcGFuZWwtZGVzY3JpcHRpb24nLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24nLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uUGFuZWxEZXNjcmlwdGlvbiB7IH1cblxuLyoqXG4gKiBgPG5vdm8tcGFuZWwtdGl0bGU+YFxuICpcbiAqIFRoaXMgZGlyZWN0aW9uIGlzIHRvIGJlIHVzZWQgaW5zaWRlIG9mIHRoZSBOb3ZvRXhwYW5zaW9uUGFuZWxIZWFkZXIgY29tcG9uZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLXBhbmVsLXRpdGxlJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0V4cGFuc2lvblBhbmVsVGl0bGUgeyB9XG4iXX0=