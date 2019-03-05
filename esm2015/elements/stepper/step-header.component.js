/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { NovoStepLabel } from './step-label.component';
export class NovoStepHeader {
    /**
     * @param {?} _focusMonitor
     * @param {?} _element
     */
    constructor(_focusMonitor, _element) {
        this._focusMonitor = _focusMonitor;
        this._element = _element;
        _focusMonitor.monitor(_element.nativeElement, true);
    }
    /**
     * Index of the given step.
     * @return {?}
     */
    get index() {
        return this._index;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set index(value) {
        this._index = coerceNumberProperty(value);
    }
    /**
     * Whether the given step is selected.
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        this._selected = coerceBooleanProperty(value);
    }
    /**
     * Whether the given step label is active.
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set active(value) {
        this._active = coerceBooleanProperty(value);
    }
    /**
     * Whether the given step label is active.
     * @return {?}
     */
    get touched() {
        return this.selected || this.state === 'edit' || this.state === 'done';
    }
    /**
     * Whether the given step is optional.
     * @return {?}
     */
    get optional() {
        return this._optional;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set optional(value) {
        this._optional = coerceBooleanProperty(value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._element.nativeElement);
    }
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    _stringLabel() {
        return this.label instanceof NovoStepLabel ? null : this.label;
    }
    /**
     * Returns NovoStepLabel if the label of given step is a template label.
     * @return {?}
     */
    _templateLabel() {
        return this.label instanceof NovoStepLabel ? this.label : null;
    }
    /**
     * Returns the host HTML element.
     * @return {?}
     */
    _getHostElement() {
        return this._element.nativeElement;
    }
}
NovoStepHeader.decorators = [
    { type: Component, args: [{
                selector: 'novo-step-header',
                template: "<div [class.novo-step-icon]=\"touched\"\n     [class.novo-step-icon-not-touched]=\"!touched\">\n  <ng-container *ngIf=\"icon\">\n    <novo-icon size=\"small\" raised=\"true\" [theme]=\"theme\">{{icon}}</novo-icon>\n  </ng-container>\n  <ng-container *ngIf=\"!icon\">\n    <span class=\"novo-step-number\">{{index + 1}}</span>\n  </ng-container>\n</div>\n<div class=\"novo-step-label\"\n     [class.novo-step-label-active]=\"active\"\n     [class.novo-step-label-selected]=\"selected\">\n  <!-- If there is a label template, use it. -->\n  <ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\">\n  </ng-container>\n  <!-- It there is no label template, fall back to the text label. -->\n  <div class=\"novo-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n</div>\n<novo-step-status [state]=\"state\"></novo-step-status>\n",
                host: {
                    class: 'novo-step-header',
                    role: 'tab',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@-webkit-keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.novo-step-header{overflow:visible;outline:0;cursor:pointer;position:relative}.novo-step-optional{font-size:12px}.novo-step-icon,.novo-step-icon-not-touched{border-radius:50%;height:24px;width:24px;align-items:center;justify-content:center;display:flex}.novo-step-icon .novo-step-number,.novo-step-icon-not-touched .novo-step-number{font-size:1em;min-width:1.6em;height:1.6em;box-shadow:2px 2px 0 rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;border-radius:4px}.novo-step-icon .novo-step-number{background:#4a89dc;color:#fff}.novo-step-icon-not-touched .novo-step-number{background:#a9adbb;color:#fff}.novo-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;text-align:center;padding:4px 0}.novo-step-text-label{text-align:center;text-overflow:ellipsis;overflow:hidden}"]
            }] }
];
NovoStepHeader.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ElementRef }
];
NovoStepHeader.propDecorators = {
    theme: [{ type: Input }],
    color: [{ type: Input }],
    icon: [{ type: Input }],
    state: [{ type: Input }],
    label: [{ type: Input }],
    iconOverrides: [{ type: Input }],
    index: [{ type: Input }],
    selected: [{ type: Input }],
    active: [{ type: Input }],
    optional: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoStepHeader.prototype.theme;
    /** @type {?} */
    NovoStepHeader.prototype.color;
    /** @type {?} */
    NovoStepHeader.prototype.icon;
    /**
     * State of the given step.
     * @type {?}
     */
    NovoStepHeader.prototype.state;
    /**
     * Label of the given step.
     * @type {?}
     */
    NovoStepHeader.prototype.label;
    /**
     * Overrides for the header icons, passed in via the stepper.
     * @type {?}
     */
    NovoStepHeader.prototype.iconOverrides;
    /** @type {?} */
    NovoStepHeader.prototype._index;
    /** @type {?} */
    NovoStepHeader.prototype._selected;
    /** @type {?} */
    NovoStepHeader.prototype._active;
    /** @type {?} */
    NovoStepHeader.prototype._optional;
    /** @type {?} */
    NovoStepHeader.prototype._focusMonitor;
    /** @type {?} */
    NovoStepHeader.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N0ZXBwZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUEwQixNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFhdkQsTUFBTTs7Ozs7SUFnRUosWUFBb0IsYUFBMkIsRUFBVSxRQUFvQjtRQUF6RCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDM0UsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBOUNELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUNELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUlELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUlELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUlELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUN6RSxDQUFDOzs7OztJQUdELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBT0QsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFHRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBR0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRSxDQUFDOzs7OztJQUdELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3JDLENBQUM7OztZQWhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsZzNCQUF5QztnQkFFekMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O1lBZlEsWUFBWTtZQUV3QixVQUFVOzs7b0JBZXBELEtBQUs7b0JBRUwsS0FBSzttQkFFTCxLQUFLO29CQUdMLEtBQUs7b0JBSUwsS0FBSzs0QkFJTCxLQUFLO29CQUlMLEtBQUs7dUJBVUwsS0FBSztxQkFVTCxLQUFLO3VCQWVMLEtBQUs7Ozs7SUF0RE4sK0JBQ2M7O0lBQ2QsK0JBQ2M7O0lBQ2QsOEJBQ2E7Ozs7O0lBRWIsK0JBQ2M7Ozs7O0lBR2QsK0JBQzhCOzs7OztJQUc5Qix1Q0FDbUQ7O0lBVW5ELGdDQUF1Qjs7SUFVdkIsbUNBQTJCOztJQVUzQixpQ0FBeUI7O0lBZXpCLG1DQUEyQjs7SUFFZix1Q0FBbUM7O0lBQUUsa0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5LCBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b1N0ZXBMYWJlbCB9IGZyb20gJy4vc3RlcC1sYWJlbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXN0ZXAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLXN0ZXAtaGVhZGVyJyxcbiAgICByb2xlOiAndGFiJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3RlcEhlYWRlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgLyoqIFN0YXRlIG9mIHRoZSBnaXZlbiBzdGVwLiAqL1xuICBASW5wdXQoKVxuICBzdGF0ZTogc3RyaW5nO1xuXG4gIC8qKiBMYWJlbCBvZiB0aGUgZ2l2ZW4gc3RlcC4gKi9cbiAgQElucHV0KClcbiAgbGFiZWw6IE5vdm9TdGVwTGFiZWwgfCBzdHJpbmc7XG5cbiAgLyoqIE92ZXJyaWRlcyBmb3IgdGhlIGhlYWRlciBpY29ucywgcGFzc2VkIGluIHZpYSB0aGUgc3RlcHBlci4gKi9cbiAgQElucHV0KClcbiAgaWNvbk92ZXJyaWRlczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH07XG5cbiAgLyoqIEluZGV4IG9mIHRoZSBnaXZlbiBzdGVwLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gIH1cbiAgc2V0IGluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbmRleCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9pbmRleDogbnVtYmVyO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBzdGVwIGlzIHNlbGVjdGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlbGVjdGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9zZWxlY3RlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZ2l2ZW4gc3RlcCBsYWJlbCBpcyBhY3RpdmUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGdpdmVuIHN0ZXAgbGFiZWwgaXMgYWN0aXZlLiAqL1xuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCB8fCB0aGlzLnN0YXRlID09PSAnZWRpdCcgfHwgdGhpcy5zdGF0ZSA9PT0gJ2RvbmUnO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGdpdmVuIHN0ZXAgaXMgb3B0aW9uYWwuICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcHRpb25hbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uYWw7XG4gIH1cbiAgc2V0IG9wdGlvbmFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb3B0aW9uYWwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX29wdGlvbmFsOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgX2ZvY3VzTW9uaXRvci5tb25pdG9yKF9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICAvKiogUmV0dXJucyBzdHJpbmcgbGFiZWwgb2YgZ2l2ZW4gc3RlcCBpZiBpdCBpcyBhIHRleHQgbGFiZWwuICovXG4gIF9zdHJpbmdMYWJlbCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbCBpbnN0YW5jZW9mIE5vdm9TdGVwTGFiZWwgPyBudWxsIDogdGhpcy5sYWJlbDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIE5vdm9TdGVwTGFiZWwgaWYgdGhlIGxhYmVsIG9mIGdpdmVuIHN0ZXAgaXMgYSB0ZW1wbGF0ZSBsYWJlbC4gKi9cbiAgX3RlbXBsYXRlTGFiZWwoKTogTm92b1N0ZXBMYWJlbCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmxhYmVsIGluc3RhbmNlb2YgTm92b1N0ZXBMYWJlbCA/IHRoaXMubGFiZWwgOiBudWxsO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGhvc3QgSFRNTCBlbGVtZW50LiAqL1xuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19