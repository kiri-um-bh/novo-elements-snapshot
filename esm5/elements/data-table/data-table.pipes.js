/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    DateTableDateRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateTableDateRendererPipe;
}());
export { DateTableDateRendererPipe };
if (false) {
    /** @type {?} */
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
    DateTableDateTimeRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateTableDateTimeRendererPipe;
}());
export { DateTableDateTimeRendererPipe };
if (false) {
    /** @type {?} */
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
    DateTableTimeRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateTableTimeRendererPipe;
}());
export { DateTableTimeRendererPipe };
if (false) {
    /** @type {?} */
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
    DateTableNumberRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateTableNumberRendererPipe;
}());
export { DateTableNumberRendererPipe };
if (false) {
    /** @type {?} */
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
    DateTableCurrencyRendererPipe.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateTableCurrencyRendererPipe;
}());
export { DateTableCurrencyRendererPipe };
if (false) {
    /** @type {?} */
    DateTableCurrencyRendererPipe.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5waXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUucGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQUU5QyxNQUFNLDBCQUE2QixLQUFVLEVBQUUsR0FBd0I7SUFDckUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ2QsT0FBTyxPQUFPLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMzRDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7OztBQUVEO0lBQUE7SUFXQSxDQUFDOzs7Ozs7SUFOQyw0Q0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxNQUEyQjtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLGVBQWUsQ0FBSSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7O2dCQVZGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixJQUFJLEVBQUUsSUFBSTtpQkFDWDs7SUFRRCwrQkFBQztDQUFBLEFBWEQsSUFXQztTQVBZLHdCQUF3Qjs7OztBQVNyQztJQUtFLG1DQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUNoRCw2Q0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxNQUEyQjtRQUMvQyxJQUFJLENBQUMsT0FB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O0lBb0Z6QixrQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBWlksMkJBQTJCOzs7SUFDMUIsNkNBQWdDOzs7OztBQWE5QztJQUtFLHVDQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUNoRCxpREFBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxNQUEyQjtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs7Z0JBQ3ZCLEdBQUcsR0FBRyxlQUFlLENBQUksS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLDJCQUEyQjtvQkFDakMsSUFBSSxFQUFFLElBQUk7aUJBQ1g7OztnQkF6RlEsZ0JBQWdCOztJQW1HekIsb0NBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSw2QkFBNkI7OztJQUM1QiwrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElEYXRhVGFibGVDb2x1bW4gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWU6IGFueSwgY29sOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICByZXR1cm4gSGVscGVycy5pbnRlcnBvbGF0ZVdpdGhGYWxsYmFjayhjb2wuZm9ybWF0LCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVJbnRlcnBvbGF0ZScsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUludGVycG9sYXRlUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVEYXRlUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVEYXRlUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGxldCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZSh2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlRGF0ZVRpbWVSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZURhdGVUaW1lUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGxldCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVUaW1lUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVUaW1lUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGxldCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0VGltZSh2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlTnVtYmVyUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVOdW1iZXJSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4sIGlzUGVyY2VudDogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGxldCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICBpZiAoaXNQZXJjZW50ICYmIEhlbHBlcnMuaXNOdW1iZXIodmFsKSkge1xuICAgICAgICB2YWwgPSBgJHtOdW1iZXIodmFsKSAqIDEwMH1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGAke3RoaXMubGFiZWxzLmZvcm1hdE51bWJlcih2YWwpfSR7aXNQZXJjZW50ID8gJyUnIDogJyd9YDtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZUN1cnJlbmN5UmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDdXJyZW5jeVJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBsZXQgdmFsID0gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxzLmZvcm1hdEN1cnJlbmN5KE51bWJlcih2YWwpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iXX0=