/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/data-table.pipes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            return column.format ? value : this.labels.formatDate(interpolateCell(value, column));
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
/** @nocollapse */
DateTableDateRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
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
            return column.format ? value : this.labels.formatDateShort(interpolateCell(value, column));
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
/** @nocollapse */
DateTableDateTimeRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
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
            return column.format ? value : this.labels.formatTime(interpolateCell(value, column));
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
/** @nocollapse */
DateTableTimeRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
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
/** @nocollapse */
DateTableNumberRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
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
export class DataTableBigDecimalRendererPipe {
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
            const val = interpolateCell(value, column);
            return this.labels.formatBigDecimal(Number(val));
        }
        return '';
    }
}
DataTableBigDecimalRendererPipe.decorators = [
    { type: Pipe, args: [{
                name: 'dataTableBigDecimalRenderer',
                pure: true,
            },] }
];
/** @nocollapse */
DataTableBigDecimalRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
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
            const val = interpolateCell(value, column);
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
/** @nocollapse */
DateTableCurrencyRendererPipe.ctorParameters = () => [
    { type: NovoLabelService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateTableCurrencyRendererPipe.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5waXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUucGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7QUFFOUMsTUFBTSxVQUFVLGVBQWUsQ0FBSSxLQUFVLEVBQUUsR0FBd0I7SUFDckUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ2QsT0FBTyxPQUFPLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMzRDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7OztBQU1ELE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUNuQyxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQTJCO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU8sZUFBZSxDQUFJLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7O1lBVkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLElBQUksRUFBRSxJQUFJO2FBQ1g7Ozs7O0FBY0QsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUNwQyxZQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUNoRCxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQTJCO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxF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L2NvcmUnO1xuXG5pbXBvcnQgeyBJRGF0YVRhYmxlQ29sdW1uIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlOiBhbnksIGNvbDogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgcmV0dXJuIEhlbHBlcnMuaW50ZXJwb2xhdGVXaXRoRmFsbGJhY2soY29sLmZvcm1hdCwgdmFsdWUpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlSW50ZXJwb2xhdGUnLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVJbnRlcnBvbGF0ZVBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlRGF0ZVJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlRGF0ZVJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY29sdW1uLmZvcm1hdCA/IHZhbHVlIDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZShpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbikpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlRGF0ZVRpbWVSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZURhdGVUaW1lUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjb2x1bW4uZm9ybWF0ID8gdmFsdWUgOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlU2hvcnQoaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZVRpbWVSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZVRpbWVSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNvbHVtbi5mb3JtYXQgPyB2YWx1ZSA6IHRoaXMubGFiZWxzLmZvcm1hdFRpbWUoaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZU51bWJlclJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlTnVtYmVyUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+LCBpc1BlcmNlbnQ6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBsZXQgdmFsID0gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgICAgaWYgKGlzUGVyY2VudCAmJiBIZWxwZXJzLmlzTnVtYmVyKHZhbCkpIHtcbiAgICAgICAgdmFsID0gYCR7TnVtYmVyKHZhbCkgKiAxMDB9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgJHt0aGlzLmxhYmVscy5mb3JtYXROdW1iZXIodmFsKX0ke2lzUGVyY2VudCA/ICclJyA6ICcnfWA7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVCaWdEZWNpbWFsUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVCaWdEZWNpbWFsUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVscy5mb3JtYXRCaWdEZWNpbWFsKE51bWJlcih2YWwpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZUN1cnJlbmN5UmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDdXJyZW5jeVJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBjb25zdCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0Q3VycmVuY3koTnVtYmVyKHZhbCkpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiJdfQ==