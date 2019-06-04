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
var DataTableBigDecimalRendererPipe = /** @class */ (function () {
    function DataTableBigDecimalRendererPipe(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    DataTableBigDecimalRendererPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    function (value, column) {
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            var val = interpolateCell(value, column);
            return this.labels.formatBigDecimal(Number(val));
        }
        return '';
    };
    DataTableBigDecimalRendererPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'dataTableBigDecimalRenderer',
                    pure: true,
                },] }
    ];
    /** @nocollapse */
    DataTableBigDecimalRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DataTableBigDecimalRendererPipe;
}());
export { DataTableBigDecimalRendererPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableBigDecimalRendererPipe.prototype.labels;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5waXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUucGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQUU5QyxNQUFNLFVBQVUsZUFBZSxDQUFJLEtBQVUsRUFBRSxHQUF3QjtJQUNyRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7UUFDZCxPQUFPLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7O0FBRUQ7SUFBQTtJQVdBLENBQUM7Ozs7OztJQU5DLDRDQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLE1BQTJCO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU8sZUFBZSxDQUFJLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Z0JBVkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLElBQUksRUFBRSxJQUFJO2lCQUNYOztJQVFELCtCQUFDO0NBQUEsQUFYRCxJQVdDO1NBUFksd0JBQXdCOzs7O0FBU3JDO0lBS0UsbUNBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7O0lBQ2hELDZDQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLE1BQTJCO1FBQy9DLElBQUks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QTJCO29CQUNqQyxJQUFJLEVBQUUsSUFBSTtpQkFDWDs7OztnQkF4R1EsZ0JBQWdCOztJQWtIekIsb0NBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSw2QkFBNkI7Ozs7OztJQUM1QiwrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVDb2x1bW4gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWU6IGFueSwgY29sOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICByZXR1cm4gSGVscGVycy5pbnRlcnBvbGF0ZVdpdGhGYWxsYmFjayhjb2wuZm9ybWF0LCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVJbnRlcnBvbGF0ZScsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUludGVycG9sYXRlUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVEYXRlUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVEYXRlUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGxldCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZSh2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlRGF0ZVRpbWVSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZURhdGVUaW1lUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGxldCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVUaW1lUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVUaW1lUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGxldCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0VGltZSh2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlTnVtYmVyUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVOdW1iZXJSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4sIGlzUGVyY2VudDogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGxldCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICBpZiAoaXNQZXJjZW50ICYmIEhlbHBlcnMuaXNOdW1iZXIodmFsKSkge1xuICAgICAgICB2YWwgPSBgJHtOdW1iZXIodmFsKSAqIDEwMH1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGAke3RoaXMubGFiZWxzLmZvcm1hdE51bWJlcih2YWwpfSR7aXNQZXJjZW50ID8gJyUnIDogJyd9YDtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZUJpZ0RlY2ltYWxSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUJpZ0RlY2ltYWxSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgbGV0IHZhbCA9IGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVscy5mb3JtYXRCaWdEZWNpbWFsKE51bWJlcih2YWwpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZUN1cnJlbmN5UmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDdXJyZW5jeVJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBsZXQgdmFsID0gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxzLmZvcm1hdEN1cnJlbmN5KE51bWJlcih2YWwpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iXX0=