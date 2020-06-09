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
var DataTableInterpolatePipe = /** @class */ (function () {
    function DataTableInterpolatePipe() {
    }
    DataTableInterpolatePipe.prototype.transform = function (value, column) {
        if (!Helpers.isEmpty(value)) {
            return interpolateCell(value, column);
        }
        return '';
    };
    DataTableInterpolatePipe.ɵfac = function DataTableInterpolatePipe_Factory(t) { return new (t || DataTableInterpolatePipe)(); };
    DataTableInterpolatePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableInterpolate", type: DataTableInterpolatePipe, pure: true });
    return DataTableInterpolatePipe;
}());
export { DataTableInterpolatePipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTableInterpolatePipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableInterpolate',
                pure: true,
            }]
    }], null, null); })();
var DateTableDateRendererPipe = /** @class */ (function () {
    function DateTableDateRendererPipe(labels) {
        this.labels = labels;
    }
    DateTableDateRendererPipe.prototype.transform = function (value, column) {
        if (!Helpers.isEmpty(value)) {
            return column.format ? value : this.labels.formatDate(interpolateCell(value, column));
        }
        return '';
    };
    DateTableDateRendererPipe.ɵfac = function DateTableDateRendererPipe_Factory(t) { return new (t || DateTableDateRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    DateTableDateRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableDateRenderer", type: DateTableDateRendererPipe, pure: true });
    return DateTableDateRendererPipe;
}());
export { DateTableDateRendererPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableDateRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableDateRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
var DateTableDateTimeRendererPipe = /** @class */ (function () {
    function DateTableDateTimeRendererPipe(labels) {
        this.labels = labels;
    }
    DateTableDateTimeRendererPipe.prototype.transform = function (value, column) {
        if (!Helpers.isEmpty(value)) {
            return column.format ? value : this.labels.formatDateShort(interpolateCell(value, column));
        }
        return '';
    };
    DateTableDateTimeRendererPipe.ɵfac = function DateTableDateTimeRendererPipe_Factory(t) { return new (t || DateTableDateTimeRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    DateTableDateTimeRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableDateTimeRenderer", type: DateTableDateTimeRendererPipe, pure: true });
    return DateTableDateTimeRendererPipe;
}());
export { DateTableDateTimeRendererPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableDateTimeRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableDateTimeRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
var DateTableTimeRendererPipe = /** @class */ (function () {
    function DateTableTimeRendererPipe(labels) {
        this.labels = labels;
    }
    DateTableTimeRendererPipe.prototype.transform = function (value, column) {
        if (!Helpers.isEmpty(value)) {
            return column.format ? value : this.labels.formatTime(interpolateCell(value, column));
        }
        return '';
    };
    DateTableTimeRendererPipe.ɵfac = function DateTableTimeRendererPipe_Factory(t) { return new (t || DateTableTimeRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    DateTableTimeRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableTimeRenderer", type: DateTableTimeRendererPipe, pure: true });
    return DateTableTimeRendererPipe;
}());
export { DateTableTimeRendererPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableTimeRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableTimeRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
var DateTableNumberRendererPipe = /** @class */ (function () {
    function DateTableNumberRendererPipe(labels) {
        this.labels = labels;
    }
    DateTableNumberRendererPipe.prototype.transform = function (value, column, isPercent) {
        if (isPercent === void 0) { isPercent = false; }
        if (!Helpers.isEmpty(value)) {
            var val = interpolateCell(value, column);
            if (isPercent && Helpers.isNumber(val)) {
                val = "" + Number(val) * 100;
            }
            return "" + this.labels.formatNumber(val) + (isPercent ? '%' : '');
        }
        return '';
    };
    DateTableNumberRendererPipe.ɵfac = function DateTableNumberRendererPipe_Factory(t) { return new (t || DateTableNumberRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    DateTableNumberRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableNumberRenderer", type: DateTableNumberRendererPipe, pure: true });
    return DateTableNumberRendererPipe;
}());
export { DateTableNumberRendererPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableNumberRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableNumberRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
var DataTableBigDecimalRendererPipe = /** @class */ (function () {
    function DataTableBigDecimalRendererPipe(labels) {
        this.labels = labels;
    }
    DataTableBigDecimalRendererPipe.prototype.transform = function (value, column) {
        if (!Helpers.isEmpty(value)) {
            var val = interpolateCell(value, column);
            return this.labels.formatBigDecimal(Number(val));
        }
        return '';
    };
    DataTableBigDecimalRendererPipe.ɵfac = function DataTableBigDecimalRendererPipe_Factory(t) { return new (t || DataTableBigDecimalRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    DataTableBigDecimalRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableBigDecimalRenderer", type: DataTableBigDecimalRendererPipe, pure: true });
    return DataTableBigDecimalRendererPipe;
}());
export { DataTableBigDecimalRendererPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataTableBigDecimalRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableBigDecimalRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
var DateTableCurrencyRendererPipe = /** @class */ (function () {
    function DateTableCurrencyRendererPipe(labels) {
        this.labels = labels;
    }
    DateTableCurrencyRendererPipe.prototype.transform = function (value, column) {
        if (!Helpers.isEmpty(value)) {
            var val = interpolateCell(value, column);
            return this.labels.formatCurrency(Number(val));
        }
        return '';
    };
    DateTableCurrencyRendererPipe.ɵfac = function DateTableCurrencyRendererPipe_Factory(t) { return new (t || DateTableCurrencyRendererPipe)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    DateTableCurrencyRendererPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dataTableCurrencyRenderer", type: DateTableCurrencyRendererPipe, pure: true });
    return DateTableCurrencyRendererPipe;
}());
export { DateTableCurrencyRendererPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateTableCurrencyRendererPipe, [{
        type: Pipe,
        args: [{
                name: 'dataTableCurrencyRenderer',
                pure: true,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5waXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUucGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFOUMsTUFBTSxVQUFVLGVBQWUsQ0FBSSxLQUFVLEVBQUUsR0FBd0I7SUFDckUsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ2QsT0FBTyxPQUFPLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMzRDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVEO0lBQUE7S0FXQztJQU5DLDRDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsTUFBMkI7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxlQUFlLENBQUksS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO29HQU5VLHdCQUF3QjsyRkFBeEIsd0JBQXdCO21DQWpCckM7Q0F3QkMsQUFYRCxJQVdDO1NBUFksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FKcEMsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLElBQUksRUFBRSxJQUFJO2FBQ1g7O0FBVUQ7SUFLRSxtQ0FBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBQ2hELDZDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsTUFBMkI7UUFDL0MsSUFBSSxD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VSw2QkFBNkI7cUdBQTdCLDZCQUE2Qjt3Q0F6RzFDO0NBa0hDLEFBYkQsSUFhQztTQVRZLDZCQUE2QjtrREFBN0IsNkJBQTZCO2NBSnpDLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsMkJBQTJCO2dCQUNqQyxJQUFJLEVBQUUsSUFBSTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJRGF0YVRhYmxlQ29sdW1uIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlOiBhbnksIGNvbDogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgcmV0dXJuIEhlbHBlcnMuaW50ZXJwb2xhdGVXaXRoRmFsbGJhY2soY29sLmZvcm1hdCwgdmFsdWUpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlSW50ZXJwb2xhdGUnLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVJbnRlcnBvbGF0ZVBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlRGF0ZVJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlRGF0ZVJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY29sdW1uLmZvcm1hdCA/IHZhbHVlIDogdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZShpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbikpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZGF0YVRhYmxlRGF0ZVRpbWVSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZURhdGVUaW1lUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjb2x1bW4uZm9ybWF0ID8gdmFsdWUgOiB0aGlzLmxhYmVscy5mb3JtYXREYXRlU2hvcnQoaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZVRpbWVSZW5kZXJlcicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZVRpbWVSZW5kZXJlclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBzdHJpbmcge1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNvbHVtbi5mb3JtYXQgPyB2YWx1ZSA6IHRoaXMubGFiZWxzLmZvcm1hdFRpbWUoaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZU51bWJlclJlbmRlcmVyJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlTnVtYmVyUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+LCBpc1BlcmNlbnQ6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBsZXQgdmFsID0gaW50ZXJwb2xhdGVDZWxsPFQ+KHZhbHVlLCBjb2x1bW4pO1xuICAgICAgaWYgKGlzUGVyY2VudCAmJiBIZWxwZXJzLmlzTnVtYmVyKHZhbCkpIHtcbiAgICAgICAgdmFsID0gYCR7TnVtYmVyKHZhbCkgKiAxMDB9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgJHt0aGlzLmxhYmVscy5mb3JtYXROdW1iZXIodmFsKX0ke2lzUGVyY2VudCA/ICclJyA6ICcnfWA7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdkYXRhVGFibGVCaWdEZWNpbWFsUmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVCaWdEZWNpbWFsUmVuZGVyZXJQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogc3RyaW5nIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGludGVycG9sYXRlQ2VsbDxUPih2YWx1ZSwgY29sdW1uKTtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVscy5mb3JtYXRCaWdEZWNpbWFsKE51bWJlcih2YWwpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGFUYWJsZUN1cnJlbmN5UmVuZGVyZXInLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDdXJyZW5jeVJlbmRlcmVyUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IHN0cmluZyB7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICBjb25zdCB2YWwgPSBpbnRlcnBvbGF0ZUNlbGw8VD4odmFsdWUsIGNvbHVtbik7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0Q3VycmVuY3koTnVtYmVyKHZhbCkpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiJdfQ==