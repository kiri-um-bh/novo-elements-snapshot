import { Pipe } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
export function interpolateCell(value, col) {
    if (col.format) {
        return Helpers.interpolateWithFallback(col.format, value);
    }
    return value;
}
export class DataTableInterpolatePipe {
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            return interpolateCell(value, column);
        }
        return '';
    }
}
DataTableInterpolatePipe.ɵfac = function DataTableInterpolatePipe_Factory(t) { return new (t || DataTableInterpolatePipe)(); };
DataTableInterpolatePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableInterpolate", type: DataTableInterpolatePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTableInterpolatePipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableInterpolate',
                pure: true,
            }]
    }], null, null); })();
export class DateTableDateRendererPipe {
    constructor(labels) {
        this.labels = labels;
    }
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            return column.format ? value : this.labels.formatDate(interpolateCell(value, column));
        }
        return '';
    }
}
DateTableDateRendererPipe.ɵfac = function DateTableDateRendererPipe_Factory(t) { return new (t || DateTableDateRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
DateTableDateRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableDateRenderer", type: DateTableDateRendererPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableDateRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableDateRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
export class DateTableDateTimeRendererPipe {
    constructor(labels) {
        this.labels = labels;
    }
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            return column.format ? value : this.labels.formatDateShort(interpolateCell(value, column));
        }
        return '';
    }
}
DateTableDateTimeRendererPipe.ɵfac = function DateTableDateTimeRendererPipe_Factory(t) { return new (t || DateTableDateTimeRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
DateTableDateTimeRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableDateTimeRenderer", type: DateTableDateTimeRendererPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableDateTimeRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableDateTimeRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
export class DateTableTimeRendererPipe {
    constructor(labels) {
        this.labels = labels;
    }
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            return column.format ? value : this.labels.formatTime(interpolateCell(value, column));
        }
        return '';
    }
}
DateTableTimeRendererPipe.ɵfac = function DateTableTimeRendererPipe_Factory(t) { return new (t || DateTableTimeRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
DateTableTimeRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableTimeRenderer", type: DateTableTimeRendererPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableTimeRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableTimeRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
export class DateTableNumberRendererPipe {
    constructor(labels) {
        this.labels = labels;
    }
    transform(value, column, isPercent = false) {
        if (!Helpers.isEmpty(value)) {
            let val = interpolateCell(value, column);
            if (isPercent && Helpers.isNumber(val)) {
                val = `${Number(val) * 100}`;
            }
            return `${this.labels.formatNumber(val)}${isPercent ? '%' : ''}`;
        }
        return '';
    }
}
DateTableNumberRendererPipe.ɵfac = function DateTableNumberRendererPipe_Factory(t) { return new (t || DateTableNumberRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
DateTableNumberRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableNumberRenderer", type: DateTableNumberRendererPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableNumberRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableNumberRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
export class DataTableBigDecimalRendererPipe {
    constructor(labels) {
        this.labels = labels;
    }
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            const val = interpolateCell(value, column);
            return this.labels.formatBigDecimal(Number(val));
        }
        return '';
    }
}
DataTableBigDecimalRendererPipe.ɵfac = function DataTableBigDecimalRendererPipe_Factory(t) { return new (t || DataTableBigDecimalRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
DataTableBigDecimalRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableBigDecimalRenderer", type: DataTableBigDecimalRendererPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTableBigDecimalRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableBigDecimalRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
export class DateTableCurrencyRendererPipe {
    constructor(labels) {
        this.labels = labels;
    }
    transform(value, column) {
        if (!Helpers.isEmpty(value)) {
            const val = interpolateCell(value, column);
            return this.labels.formatCurrency(Number(val));
        }
        return '';
    }
}
DateTableCurrencyRendererPipe.ɵfac = function DateTableCurrencyRendererPipe_Factory(t) { return new (t || DateTableCurrencyRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
DateTableCurrencyRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableCurrencyRenderer", type: DateTableCurrencyRendererPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableCurrencyRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableCurrencyRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5waXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUucGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFOUMsTUFBTSxVQUFVLGVBQWUsQ0FBSSxLQUFVLEVBQUUsR0FBd0I7SUFDckUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ2QsT0FBTyxPQUFPLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMzRDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQU1ELE1BQU0sT0FBTyx3QkFBd0I7SUFDbkMsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUEyQjtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLGVBQWUsQ0FBSSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7O2dHQU5VLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FKcEMsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLElBQUksRUFBRSxJQUFJO2FBQ1g7O0FBY0QsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQyxZQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7SUFDaEQsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUEyQjtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FB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cm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSURhdGFUYWJsZUNvbHVtbiB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZTogYW55LCBjb2w6IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICBpZiAoY29sLmZvcm1hdCkge1xuICAgIHJldHVybiBIZWxwZXJzLmludGVycG9sYXRlV2l0aEZhbGxiYWNrKGNvbC5mb3JtYXQsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZUludGVycG9sYXRlJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlSW50ZXJwb2xhdGVQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZURhdGVSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZURhdGVSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNvbHVtbi5mb3JtYXQgPyB2YWx1ZSA6IHRoaXMubGFiZWxzLmZvcm1hdERhdGUoaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZURhdGVUaW1lUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVEYXRlVGltZVJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY29sdW1uLmZvcm1hdCA/IHZhbHVlIDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVUaW1lUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVUaW1lUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjb2x1bW4uZm9ybWF0ID8gdmFsdWUgOiB0aGlzLmxhYmVscy5mb3JtYXRUaW1lKGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVOdW1iZXJSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZU51bWJlclJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPiwgaXNQZXJjZW50OiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgbGV0IHZhbCA9IGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICAgIGlmIChpc1BlcmNlbnQgJiYgSGVscGVycy5pc051bWJlcih2YWwpKSB7XG4gICAgICAgIHZhbCA9IGAke051bWJlcih2YWwpICogMTAwfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYCR7dGhpcy5sYWJlbHMuZm9ybWF0TnVtYmVyKHZhbCl9JHtpc1BlcmNlbnQgPyAnJScgOiAnJ31gO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlQmlnRGVjaW1hbFJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQmlnRGVjaW1hbFJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBjb25zdCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0QmlnRGVjaW1hbChOdW1iZXIodmFsKSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVDdXJyZW5jeVJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlQ3VycmVuY3lSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgY29uc3QgdmFsID0gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxzLmZvcm1hdEN1cnJlbmN5KE51bWJlcih2YWwpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iXX0=