/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/date-cell/DateCell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input } from '@angular/core';
// APP
import { BaseRenderer } from '../base-renderer/BaseRenderer';
import { NovoLabelService } from '../../../../services/novo-label-service';
export class DateCell extends BaseRenderer {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        super();
        this.labels = labels;
    }
    /**
     * @return {?}
     */
    getFormattedDate() {
        return this.labels.formatDate(this.value);
    }
}
DateCell.decorators = [
    { type: Component, args: [{
                selector: 'date-cell',
                template: `
        <div class="date-cell">
            <label>{{ getFormattedDate() }}</label>
        </div>
    `
            }] }
];
/** @nocollapse */
DateCell.ctorParameters = () => [
    { type: NovoLabelService }
];
DateCell.propDecorators = {
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DateCell.prototype.value;
    /** @type {?} */
    DateCell.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUNlbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL2RhdGUtY2VsbC9EYXRlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBVTNFLE1BQU0sT0FBTyxRQUFTLFNBQVEsWUFBWTs7OztJQUd4QyxZQUFtQixNQUF3QjtRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQURTLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBRTNDLENBQUM7Ozs7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7O0tBSVA7YUFDSjs7OztZQVRRLGdCQUFnQjs7O29CQVd0QixLQUFLOzs7O0lBQU4seUJBQ1c7O0lBQ0MsMEJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1jZWxsXCI+XG4gICAgICAgICAgICA8bGFiZWw+e3sgZ2V0Rm9ybWF0dGVkRGF0ZSgpIH19PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUNlbGwgZXh0ZW5kcyBCYXNlUmVuZGVyZXIge1xuICBASW5wdXQoKVxuICB2YWx1ZTogYW55O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGb3JtYXR0ZWREYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzLmZvcm1hdERhdGUodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==