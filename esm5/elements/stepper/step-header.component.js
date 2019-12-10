/**
 * @fileoverview added by tsickle
 * Generated from: elements/stepper/step-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { NovoStepLabel } from './step-label.component';
import { CdkStepHeader } from '@angular/cdk/stepper';
var NovoStepHeader = /** @class */ (function (_super) {
    tslib_1.__extends(NovoStepHeader, _super);
    function NovoStepHeader(_focusMonitor, _element) {
        var _this = _super.call(this, _element) || this;
        _this._focusMonitor = _focusMonitor;
        _this._element = _element;
        _focusMonitor.monitor(_element.nativeElement, true);
        return _this;
    }
    Object.defineProperty(NovoStepHeader.prototype, "index", {
        /** Index of the given step. */
        get: /**
         * Index of the given step.
         * @return {?}
         */
        function () {
            return this._index;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._index = coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoStepHeader.prototype, "selected", {
        /** Whether the given step is selected. */
        get: /**
         * Whether the given step is selected.
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoStepHeader.prototype, "active", {
        /** Whether the given step label is active. */
        get: /**
         * Whether the given step label is active.
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._active = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoStepHeader.prototype, "touched", {
        /** Whether the given step label is active. */
        get: /**
         * Whether the given step label is active.
         * @return {?}
         */
        function () {
            return this.selected || this.state === 'edit' || this.state === 'done';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoStepHeader.prototype, "optional", {
        /** Whether the given step is optional. */
        get: /**
         * Whether the given step is optional.
         * @return {?}
         */
        function () {
            return this._optional;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._optional = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoStepHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._element.nativeElement);
    };
    /** Returns string label of given step if it is a text label. */
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    NovoStepHeader.prototype._stringLabel = /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    function () {
        return this.label instanceof NovoStepLabel ? null : this.label;
    };
    /** Returns NovoStepLabel if the label of given step is a template label. */
    /**
     * Returns NovoStepLabel if the label of given step is a template label.
     * @return {?}
     */
    NovoStepHeader.prototype._templateLabel = /**
     * Returns NovoStepLabel if the label of given step is a template label.
     * @return {?}
     */
    function () {
        return this.label instanceof NovoStepLabel ? this.label : null;
    };
    /** Returns the host HTML element. */
    /**
     * Returns the host HTML element.
     * @return {?}
     */
    NovoStepHeader.prototype._getHostElement = /**
     * Returns the host HTML element.
     * @return {?}
     */
    function () {
        return this._element.nativeElement;
    };
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
                    styles: ["@-webkit-keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@keyframes rotate{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}75%{-webkit-transform:rotateZ(200deg);transform:rotateZ(200deg)}100%{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@keyframes half-rotate{0%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}75%{-webkit-transform:rotateZ(100deg);transform:rotateZ(100deg)}100%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@keyframes rotateBack{0%{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}100%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes show{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}75%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.novo-step-header{overflow:visible;outline:0;cursor:pointer;position:relative}.novo-step-optional{font-size:12px}.novo-step-icon,.novo-step-icon-not-touched{border-radius:50%;height:24px;width:24px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex}.novo-step-icon .novo-step-number,.novo-step-icon-not-touched .novo-step-number{font-size:1em;min-width:1.6em;height:1.6em;box-shadow:2px 2px 0 rgba(0,0,0,.2);display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border-radius:4px}.novo-step-icon .novo-step-number{background:#4a89dc;color:#fff}.novo-step-icon-not-touched .novo-step-number{background:#a9adbb;color:#fff}.novo-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;text-align:center;padding:4px 0}.novo-step-text-label{text-align:center;text-overflow:ellipsis;overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    NovoStepHeader.ctorParameters = function () { return [
        { type: FocusMonitor },
        { type: ElementRef }
    ]; };
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
    return NovoStepHeader;
}(CdkStepHeader));
export { NovoStepHeader };
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
    /**
     * @type {?}
     * @private
     */
    NovoStepHeader.prototype._index;
    /**
     * @type {?}
     * @private
     */
    NovoStepHeader.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    NovoStepHeader.prototype._active;
    /**
     * @type {?}
     * @private
     */
    NovoStepHeader.prototype._optional;
    /**
     * @type {?}
     * @private
     */
    NovoStepHeader.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    NovoStepHeader.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N0ZXBwZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQTBCLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQ7SUFXb0MsMENBQWE7SUFnRS9DLHdCQUFvQixhQUEyQixFQUFVLFFBQW9CO1FBQTdFLFlBQ0Usa0JBQU0sUUFBUSxDQUFDLFNBRWhCO1FBSG1CLG1CQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBWTtRQUUzRSxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQ3RELENBQUM7SUEvQ0Qsc0JBQ0ksaUNBQUs7UUFGVCwrQkFBK0I7Ozs7O1FBQy9CO1lBRUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBQ0QsVUFBVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BSEE7SUFPRCxzQkFDSSxvQ0FBUTtRQUZaLDBDQUEwQzs7Ozs7UUFDMUM7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEtBQWM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FIQTtJQU9ELHNCQUNJLGtDQUFNO1FBRlYsOENBQThDOzs7OztRQUM5QztZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQUNELFVBQVcsS0FBYztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksbUNBQU87UUFEWCw4Q0FBOEM7Ozs7O1FBQzlDO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDO1FBQ3pFLENBQUM7OztPQUFBO0lBR0Qsc0JBQ0ksb0NBQVE7UUFGWiwwQ0FBMEM7Ozs7O1FBQzFDO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBQ0QsVUFBYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BSEE7Ozs7SUFXRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnRUFBZ0U7Ozs7O0lBQ2hFLHFDQUFZOzs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLFlBQVksYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDakUsQ0FBQztJQUVELDRFQUE0RTs7Ozs7SUFDNUUsdUNBQWM7Ozs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRSxDQUFDO0lBRUQscUNBQXFDOzs7OztJQUNyQyx3Q0FBZTs7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUNyQyxDQUFDOztnQkFqR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGczQkFBeUM7b0JBRXpDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsa0JBQWtCO3dCQUN6QixJQUFJLEVBQUUsS0FBSztxQkFDWjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQWhCUSxZQUFZO2dCQUV3QixVQUFVOzs7d0JBZ0JwRCxLQUFLO3dCQUVMLEtBQUs7dUJBRUwsS0FBSzt3QkFHTCxLQUFLO3dCQUlMLEtBQUs7Z0NBSUwsS0FBSzt3QkFJTCxLQUFLOzJCQVVMLEtBQUs7eUJBVUwsS0FBSzsyQkFlTCxLQUFLOztJQWdDUixxQkFBQztDQUFBLEFBbEdELENBV29DLGFBQWEsR0F1RmhEO1NBdkZZLGNBQWM7OztJQUN6QiwrQkFDYzs7SUFDZCwrQkFDYzs7SUFDZCw4QkFDYTs7Ozs7SUFFYiwrQkFDYzs7Ozs7SUFHZCwrQkFDOEI7Ozs7O0lBRzlCLHVDQUNtRDs7Ozs7SUFVbkQsZ0NBQXVCOzs7OztJQVV2QixtQ0FBMkI7Ozs7O0lBVTNCLGlDQUF5Qjs7Ozs7SUFlekIsbUNBQTJCOzs7OztJQUVmLHVDQUFtQzs7Ozs7SUFBRSxrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvU3RlcExhYmVsIH0gZnJvbSAnLi9zdGVwLWxhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZGtTdGVwSGVhZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXN0ZXAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLXN0ZXAtaGVhZGVyJyxcbiAgICByb2xlOiAndGFiJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3RlcEhlYWRlciBleHRlbmRzIENka1N0ZXBIZWFkZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIC8qKiBTdGF0ZSBvZiB0aGUgZ2l2ZW4gc3RlcC4gKi9cbiAgQElucHV0KClcbiAgc3RhdGU6IHN0cmluZztcblxuICAvKiogTGFiZWwgb2YgdGhlIGdpdmVuIHN0ZXAuICovXG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBOb3ZvU3RlcExhYmVsIHwgc3RyaW5nO1xuXG4gIC8qKiBPdmVycmlkZXMgZm9yIHRoZSBoZWFkZXIgaWNvbnMsIHBhc3NlZCBpbiB2aWEgdGhlIHN0ZXBwZXIuICovXG4gIEBJbnB1dCgpXG4gIGljb25PdmVycmlkZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9O1xuXG4gIC8qKiBJbmRleCBvZiB0aGUgZ2l2ZW4gc3RlcC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICB9XG4gIHNldCBpbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW5kZXggPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlcjtcblxuICAvKiogV2hldGhlciB0aGUgZ2l2ZW4gc3RlcCBpcyBzZWxlY3RlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGdpdmVuIHN0ZXAgbGFiZWwgaXMgYWN0aXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cbiAgc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBzdGVwIGxhYmVsIGlzIGFjdGl2ZS4gKi9cbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgfHwgdGhpcy5zdGF0ZSA9PT0gJ2VkaXQnIHx8IHRoaXMuc3RhdGUgPT09ICdkb25lJztcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBzdGVwIGlzIG9wdGlvbmFsLiAqL1xuICBASW5wdXQoKVxuICBnZXQgb3B0aW9uYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbmFsO1xuICB9XG4gIHNldCBvcHRpb25hbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX29wdGlvbmFsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9vcHRpb25hbDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvciwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKF9lbGVtZW50KTtcbiAgICBfZm9jdXNNb25pdG9yLm1vbml0b3IoX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgdHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHN0cmluZyBsYWJlbCBvZiBnaXZlbiBzdGVwIGlmIGl0IGlzIGEgdGV4dCBsYWJlbC4gKi9cbiAgX3N0cmluZ0xhYmVsKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmxhYmVsIGluc3RhbmNlb2YgTm92b1N0ZXBMYWJlbCA/IG51bGwgOiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgLyoqIFJldHVybnMgTm92b1N0ZXBMYWJlbCBpZiB0aGUgbGFiZWwgb2YgZ2l2ZW4gc3RlcCBpcyBhIHRlbXBsYXRlIGxhYmVsLiAqL1xuICBfdGVtcGxhdGVMYWJlbCgpOiBOb3ZvU3RlcExhYmVsIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWwgaW5zdGFuY2VvZiBOb3ZvU3RlcExhYmVsID8gdGhpcy5sYWJlbCA6IG51bGw7XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgaG9zdCBIVE1MIGVsZW1lbnQuICovXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=