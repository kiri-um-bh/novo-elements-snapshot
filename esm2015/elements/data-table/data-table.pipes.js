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
export class DataTableInterpolatePipe {
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            return interpolateCell(value, column);
        }
        return '';
    }
}
DataTableInterpolatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'dataTableInterpolate',
                pure: true,
            },] }
];
/**
 * @template T
 */
export class DateTableDateRendererPipe {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            let val = interpolateCell(value, column);
            return this.labels.formatDate(val);
        }
        return '';
    }
}
DateTableDateRendererPipe.decorators = [
    { type: Pipe, args: [{
                name: 'dataTableDateRenderer',
                pure: true,
            },] }
];
DateTableDateRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
if (false) {
    /** @type {?} */
    DateTableDateRendererPipe.prototype.labels;
}
/**
 * @template T
 */
export class DateTableDateTimeRendererPipe {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            let val = interpolateCell(value, column);
            return this.labels.formatDateShort(val);
        }
        return '';
    }
}
DateTableDateTimeRendererPipe.decorators = [
    { type: Pipe, args: [{
                name: 'dataTableDateTimeRenderer',
                pure: true,
            },] }
];
DateTableDateTimeRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
if (false) {
    /** @type {?} */
    DateTableDateTimeRendererPipe.prototype.labels;
}
/**
 * @template T
 */
export class DateTableTimeRendererPipe {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            let val = interpolateCell(value, column);
            return this.labels.formatTime(val);
        }
        return '';
    }
}
DateTableTimeRendererPipe.decorators = [
    { type: Pipe, args: [{
                name: 'dataTableTimeRenderer',
                pure: true,
            },] }
];
DateTableTimeRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
if (false) {
    /** @type {?} */
    DateTableTimeRendererPipe.prototype.labels;
}
/**
 * @template T
 */
export class DateTableNumberRendererPipe {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @param {?=} isPercent
     * @return {?}
     */
    transform(value, column, isPercent = false) {
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            let val = interpolateCell(value, column);
            if (isPercent && Helpers.isNumber(val)) {
                val = `${Number(val) * 100}`;
            }
            return `${this.labels.formatNumber(val)}${isPercent ? '%' : ''}`;
        }
        return '';
    }
}
DateTableNumberRendererPipe.decorators = [
    { type: Pipe, args: [{
                name: 'dataTableNumberRenderer',
                pure: true,
            },] }
];
DateTableNumberRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
if (false) {
    /** @type {?} */
    DateTableNumberRendererPipe.prototype.labels;
}
/**
 * @template T
 */
export class DateTableCurrencyRendererPipe {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            /** @type {?} */
            let val = interpolateCell(value, column);
            return this.labels.formatCurrency(Number(val));
        }
        return '';
    }
}
DateTableCurrencyRendererPipe.decorators = [
    { type: Pipe, args: [{
                name: 'dataTableCurrencyRenderer',
                pure: true,
            },] }
];
DateTableCurrencyRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
if (false) {
    /** @type {?} */
    DateTableCurrencyRendererPipe.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5waXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUucGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQUU5QyxNQUFNLDBCQUE2QixLQUFVLEVBQUUsR0FBd0I7SUFDckUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ2QsT0FBTyxPQUFPLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMzRDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7OztBQU1ELE1BQU07Ozs7OztJQUNKLFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBMkI7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxlQUFlLENBQUksS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7WUFWRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsSUFBSSxFQUFFLElBQUk7YUFDWDs7Ozs7QUFjRCxNQUFNOzs7O0lBQ0osWUFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFDaEQsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUEyQjtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs7Z0JBQ3ZCLEdBQUcsR0FBRyxlQUFlLENBQUksS0FB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TUFBTSxDQUFDO1lBQzNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7OztZQVpGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsMkJBQTJCO2dCQUNqQyxJQUFJLEVBQUUsSUFBSTthQUNYOzs7WUF6RlEsZ0JBQWdCOzs7O0lBMkZYLCtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSURhdGFUYWJsZUNvbHVtbiB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZTogYW55LCBjb2w6IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICBpZiAoY29sLmZvcm1hdCkge1xuICAgIHJldHVybiBIZWxwZXJzLmludGVycG9sYXRlV2l0aEZhbGxiYWNrKGNvbC5mb3JtYXQsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZUludGVycG9sYXRlJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlSW50ZXJwb2xhdGVQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZURhdGVSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZURhdGVSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgbGV0IHZhbCA9IGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVscy5mb3JtYXREYXRlKHZhbCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVEYXRlVGltZVJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlRGF0ZVRpbWVSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgbGV0IHZhbCA9IGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVscy5mb3JtYXREYXRlU2hvcnQodmFsKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZVRpbWVSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZVRpbWVSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgbGV0IHZhbCA9IGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVscy5mb3JtYXRUaW1lKHZhbCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVOdW1iZXJSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZU51bWJlclJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPiwgaXNQZXJjZW50OiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgbGV0IHZhbCA9IGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICAgIGlmIChpc1BlcmNlbnQgJiYgSGVscGVycy5pc051bWJlcih2YWwpKSB7XG4gICAgICAgIHZhbCA9IGAke051bWJlcih2YWwpICogMTAwfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYCR7dGhpcy5sYWJlbHMuZm9ybWF0TnVtYmVyKHZhbCl9JHtpc1BlcmNlbnQgPyAnJScgOiAnJ31gO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlQ3VycmVuY3lSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUN1cnJlbmN5UmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGxldCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0Q3VycmVuY3koTnVtYmVyKHZhbCkpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiJdfQ==