/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
/**
 * @template T
 * @param {?} value
 * @param {?} col
 * @return {?}
 */
export function interpolateCell(value, col) {
    if (col.format) {
        return Helpers.interpolateWithFallback(col.format, value);
    }
    return value;
}
/**
 * @template T
 */
var DataTableInterpolatePipe = /** @class */ (function () {
    function DataTableInterpolatePipe() {
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    DataTableInterpolatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    function (value, column) {
        if (!Helpers.isEmpty(value)) {
            return interpolateCell(value, column);
        }
        return '';
    };
    DataTableInterpolatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'dataTableInterpolate',
                    pure: true,
                },] }
    ];
    return DataTableInterpolatePipe;
}());
export { DataTableInterpolatePipe };
/**
 * @template T
 */
var DateTableDateRendererPipe = /** @class */ (function () {
    function DateTableDateRendererPipe(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    DateTableDateRendererPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    function (value, column) {
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            var val = interpolateCell(value, column);
            return this.labels.formatDate(val);
        }
        return '';
    };
    DateTableDateRendererPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'dataTableDateRenderer',
                    pure: true,
                },] }
    ];
    /** @nocollapse */
    DateTableDateRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateTableDateRendererPipe;
}());
export { DateTableDateRendererPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateTableDateRendererPipe.prototype.labels;
}
/**
 * @template T
 */
var DateTableDateTimeRendererPipe = /** @class */ (function () {
    function DateTableDateTimeRendererPipe(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    DateTableDateTimeRendererPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    function (value, column) {
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            var val = interpolateCell(value, column);
            return this.labels.formatDateShort(val);
        }
        return '';
    };
    DateTableDateTimeRendererPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'dataTableDateTimeRenderer',
                    pure: true,
                },] }
    ];
    /** @nocollapse */
    DateTableDateTimeRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateTableDateTimeRendererPipe;
}());
export { DateTableDateTimeRendererPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateTableDateTimeRendererPipe.prototype.labels;
}
/**
 * @template T
 */
var DateTableTimeRendererPipe = /** @class */ (function () {
    function DateTableTimeRendererPipe(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    DateTableTimeRendererPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    function (value, column) {
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            var val = interpolateCell(value, column);
            return this.labels.formatTime(val);
        }
        return '';
    };
    DateTableTimeRendererPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'dataTableTimeRenderer',
                    pure: true,
                },] }
    ];
    /** @nocollapse */
    DateTableTimeRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateTableTimeRendererPipe;
}());
export { DateTableTimeRendererPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateTableTimeRendererPipe.prototype.labels;
}
/**
 * @template T
 */
var DateTableNumberRendererPipe = /** @class */ (function () {
    function DateTableNumberRendererPipe(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @param {?=} isPercent
     * @return {?}
     */
    DateTableNumberRendererPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} column
     * @param {?=} isPercent
     * @return {?}
     */
    function (value, column, isPercent) {
        if (isPercent === void 0) { isPercent = false; }
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            var val = interpolateCell(value, column);
            if (isPercent && Helpers.isNumber(val)) {
                val = "" + Number(val) * 100;
            }
            return "" + this.labels.formatNumber(val) + (isPercent ? '%' : '');
        }
        return '';
    };
    DateTableNumberRendererPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'dataTableNumberRenderer',
                    pure: true,
                },] }
    ];
    /** @nocollapse */
    DateTableNumberRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateTableNumberRendererPipe;
}());
export { DateTableNumberRendererPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateTableNumberRendererPipe.prototype.labels;
}
/**
 * @template T
 */
var DateTableCurrencyRendererPipe = /** @class */ (function () {
    function DateTableCurrencyRendererPipe(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    DateTableCurrencyRendererPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    function (value, column) {
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            var val = interpolateCell(value, column);
            return this.labels.formatCurrency(Number(val));
        }
        return '';
    };
    DateTableCurrencyRendererPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'dataTableCurrencyRenderer',
                    pure: true,
                },] }
    ];
    /** @nocollapse */
    DateTableCurrencyRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateTableCurrencyRendererPipe;
}());
export { DateTableCurrencyRendererPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateTableCurrencyRendererPipe.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5waXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUucGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQUU5QyxNQUFNLFVBQVUsZUFBZSxDQUFJLEtBQVUsRUFBRSxHQUF3QjtJQUNyRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7UUFDZCxPQUFPLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7O0FBRUQ7SUFBQTtJQVdBLENBQUM7Ozs7OztJQU5DLDRDQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLE1BQTJCO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU8sZUFBZSxDQUFJLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Z0JBVkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLElBQUksRUFBRSxJQUFJO2lCQUNYOztJQVFELCtCQUFDO0NBQUEsQUFYRCxJQVdDO1NBUFksd0JBQXdCOzs7O0FBU3JDO0lBS0UsbUNBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7O0lBQ2hELDZDQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLE1BQTJCO1FBQy9DLElBQUks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QUNYOzs7O2dCQXZFUSxnQkFBZ0I7O0lBb0Z6QixrQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBWlksMkJBQTJCOzs7Ozs7SUFDMUIsNkNBQWdDOzs7OztBQWE5QztJQUtFLHVDQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUNoRCxpREFBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxNQUEyQjtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs7Z0JBQ3ZCLEdBQUcsR0FBRyxlQUFlLENBQUksS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLDJCQUEyQjtvQkFDakMsSUFBSSxFQUFFLElBQUk7aUJBQ1g7Ozs7Z0JBekZRLGdCQUFnQjs7SUFtR3pCLG9DQUFDO0NBQUEsQUFiRCxJQWFDO1NBVFksNkJBQTZCOzs7Ozs7SUFDNUIsK0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJRGF0YVRhYmxlQ29sdW1uIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlOiBhbnksIGNvbDogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgcmV0dXJuIEhlbHBlcnMuaW50ZXJwb2xhdGVXaXRoRmFsbGJhY2soY29sLmZvcm1hdCwgdmFsdWUpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlSW50ZXJwb2xhdGUnLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVJbnRlcnBvbGF0ZVBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlRGF0ZVJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlRGF0ZVJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBsZXQgdmFsID0gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxzLmZvcm1hdERhdGUodmFsKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZURhdGVUaW1lUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVEYXRlVGltZVJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBsZXQgdmFsID0gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxzLmZvcm1hdERhdGVTaG9ydCh2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlVGltZVJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlVGltZVJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBsZXQgdmFsID0gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxzLmZvcm1hdFRpbWUodmFsKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZU51bWJlclJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlTnVtYmVyUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+LCBpc1BlcmNlbnQ6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBsZXQgdmFsID0gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgICAgaWYgKGlzUGVyY2VudCAmJiBIZWxwZXJzLmlzTnVtYmVyKHZhbCkpIHtcbiAgICAgICAgdmFsID0gYCR7TnVtYmVyKHZhbCkgKiAxMDB9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgJHt0aGlzLmxhYmVscy5mb3JtYXROdW1iZXIodmFsKX0ke2lzUGVyY2VudCA/ICclJyA6ICcnfWA7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVDdXJyZW5jeVJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlQ3VycmVuY3lSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgbGV0IHZhbCA9IGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVscy5mb3JtYXRDdXJyZW5jeShOdW1iZXIodmFsKSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIl19