/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/table-cell/TableCell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Vendor
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
// APP
import { BaseRenderer } from './../base-renderer/BaseRenderer';
import { ComponentUtils } from './../../../../utils/component-utils/ComponentUtils';
var TableCell = /** @class */ (function () {
    function TableCell(element, componentUtils) {
        this.element = element;
        this.componentUtils = componentUtils;
        this.value = '';
        this.element = element;
        this.componentUtils = componentUtils;
    }
    /**
     * @return {?}
     */
    TableCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.column._type = this.column.type || 'text';
        if (this.column.renderer) {
            if (this.column.renderer.prototype instanceof BaseRenderer) {
                this.column._type = 'custom';
                /** @type {?} */
                var componentRef = (/** @type {?} */ (this.componentUtils.append(this.column.renderer, this.container)));
                componentRef.instance.meta = this.column;
                componentRef.instance.data = this.row;
                componentRef.instance.value = this.form && this.hasEditor ? this.form.value[this.column.name] : this.row[this.column.name];
                // TODO - save ref to this and update in the valueChanges below!!
            }
            else {
                // TODO - wtf to do here?
                this.value = this.column.renderer(this.row);
            }
        }
        else {
            this.value = this.form && this.hasEditor ? this.form.value[this.column.name] : this.row[this.column.name];
        }
        if (this.form && this.hasEditor) {
            this.valueChangeSubscription = this.form.valueChanges
                .pipe(debounceTime(300), distinctUntilChanged())
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.value = value[_this.column.name];
            }));
        }
    };
    /**
     * @return {?}
     */
    TableCell.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableCell.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (this.column.onClick) {
            this.column.onClick(this.row);
        }
    };
    TableCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-table-cell',
                    template: "\n    <div [ngSwitch]=\"column._type\">\n      <span #container></span>\n      <date-cell *ngSwitchCase=\"'date'\" [value]=\"value\"></date-cell>\n      <a *ngSwitchCase=\"'link'\" (click)=\"onClick($event)\">{{ value }}</a> <span *ngSwitchDefault>{{ value }}</span>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    TableCell.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentUtils }
    ]; };
    TableCell.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: true },] }],
        column: [{ type: Input }],
        row: [{ type: Input }],
        form: [{ type: Input }],
        hasEditor: [{ type: Input }]
    };
    return TableCell;
}());
export { TableCell };
if (false) {
    /** @type {?} */
    TableCell.prototype.container;
    /** @type {?} */
    TableCell.prototype.column;
    /** @type {?} */
    TableCell.prototype.row;
    /** @type {?} */
    TableCell.prototype.form;
    /** @type {?} */
    TableCell.prototype.hasEditor;
    /** @type {?} */
    TableCell.prototype.value;
    /**
     * @type {?}
     * @private
     */
    TableCell.prototype.valueChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    TableCell.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TableCell.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVDZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy90YWJsZS1jZWxsL1RhYmxlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQVUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXBGO0lBMEJFLG1CQUFvQixPQUFtQixFQUFVLGNBQThCO1FBQTNELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFIeEUsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUlyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsNEJBQVE7OztJQUFSO1FBQUEsaUJBNEJDO1FBM0JDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztRQUMvQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxZQUFZLFlBQVksRUFBRTtnQkFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDOztvQkFDdkIsWUFBWSxHQUFH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QUFFLG1DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBCYXNlUmVuZGVyZXIgfSBmcm9tICcuLy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYmxlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbHVtbi5fdHlwZVwiPlxuICAgICAgPHNwYW4gI2NvbnRhaW5lcj48L3NwYW4+XG4gICAgICA8ZGF0ZS1jZWxsICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIiBbdmFsdWVdPVwidmFsdWVcIj48L2RhdGUtY2VsbD5cbiAgICAgIDxhICpuZ1N3aXRjaENhc2U9XCInbGluaydcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+e3sgdmFsdWUgfX08L2E+IDxzcGFuICpuZ1N3aXRjaERlZmF1bHQ+e3sgdmFsdWUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGNvbHVtbjogYW55O1xuICBASW5wdXQoKVxuICByb3c6IGFueTtcbiAgQElucHV0KClcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKVxuICBoYXNFZGl0b3I6IGJvb2xlYW47XG5cbiAgcHVibGljIHZhbHVlOiBhbnkgPSAnJztcbiAgcHJpdmF0ZSB2YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY29tcG9uZW50VXRpbHMgPSBjb21wb25lbnRVdGlscztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29sdW1uLl90eXBlID0gdGhpcy5jb2x1bW4udHlwZSB8fCAndGV4dCc7XG4gICAgaWYgKHRoaXMuY29sdW1uLnJlbmRlcmVyKSB7XG4gICAgICBpZiAodGhpcy5jb2x1bW4ucmVuZGVyZXIucHJvdG90eXBlIGluc3RhbmNlb2YgQmFzZVJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuY29sdW1uLl90eXBlID0gJ2N1c3RvbSc7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRoaXMuY29sdW1uLnJlbmRlcmVyLCB0aGlzLmNvbnRhaW5lcikgYXMgYW55O1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubWV0YSA9IHRoaXMuY29sdW1uO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YSA9IHRoaXMucm93O1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UudmFsdWUgPSB0aGlzLmZvcm0gJiYgdGhpcy5oYXNFZGl0b3IgPyB0aGlzLmZvcm0udmFsdWVbdGhpcy5jb2x1bW4ubmFtZV0gOiB0aGlzLnJvd1t0aGlzLmNvbHVtbi5uYW1lXTtcbiAgICAgICAgLy8gVE9ETyAtIHNhdmUgcmVmIHRvIHRoaXMgYW5kIHVwZGF0ZSBpbiB0aGUgdmFsdWVDaGFuZ2VzIGJlbG93ISFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE8gLSB3dGYgdG8gZG8gaGVyZT9cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY29sdW1uLnJlbmRlcmVyKHRoaXMucm93KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybSAmJiB0aGlzLmhhc0VkaXRvciA/IHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbHVtbi5uYW1lXSA6IHRoaXMucm93W3RoaXMuY29sdW1uLm5hbWVdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm0gJiYgdGhpcy5oYXNFZGl0b3IpIHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVbdGhpcy5jb2x1bW4ubmFtZV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2x1bW4ub25DbGljaykge1xuICAgICAgdGhpcy5jb2x1bW4ub25DbGljayh0aGlzLnJvdyk7XG4gICAgfVxuICB9XG59XG4iXX0=