/**
 * @fileoverview added by tsickle
 * Generated from: elements/date-time-picker/DateTimePicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ElementRef, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import * as dateFns from 'date-fns';
// APP
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var DATE_TIME_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoDateTimePickerElement; })),
    multi: true,
};
var NovoDateTimePickerElement = /** @class */ (function () {
    function NovoDateTimePickerElement(labels, element) {
        this.labels = labels;
        this.element = element;
        this.weekStart = 0;
        // Select callback for output
        this.onSelect = new EventEmitter(false);
        this.componentTabState = 'date';
        this.datePickerValue = new Date();
        this.timePickerValue = new Date();
        this._onChange = (/**
         * @return {?}
         */
        function () { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    NovoDateTimePickerElement.prototype.toggleView = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.componentTabState = tab;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoDateTimePickerElement.prototype.setDateLabels = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectedLabel = this.labels.formatDateWithFormat(value, {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoDateTimePickerElement.prototype.setTimeLabels = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var hours = value.getHours();
        /** @type {?} */
        var minutes = value.getMinutes();
        this.meridian = value.toLocaleTimeString().slice(-2);
        if (!this.military) {
            hours = this.meridian === 'PM' && hours > 12 ? hours - 12 : hours;
            // Special case for 12
            if (this.meridian === 'PM' && hours === 24) {
                hours = 12;
            }
            else if (this.meridian === 'AM' && hours === 0) {
                hours = 12;
            }
        }
        this.hours = hours.toString();
        this.minutes = minutes.toString().length === 1 ? "0" + minutes.toString() : minutes.toString();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDateTimePickerElement.prototype.onDateSelected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.datePickerValue = event.date;
        this.model = this.createFullDateValue(this.datePickerValue, this.timePickerValue);
        this.setDateLabels(this.model);
        this.onSelect.emit({ date: this.model });
        this._onChange(this.model);
        this.toggleView('time');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDateTimePickerElement.prototype.onTimeSelected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.timePickerValue = event.date;
        this.model = this.createFullDateValue(this.model, this.timePickerValue);
        this.setTimeLabels(this.model);
        this.onSelect.emit({ date: this.model });
        this._onChange(this.model);
    };
    /**
     * @param {?} datePickerValue
     * @param {?} timePickerValue
     * @return {?}
     */
    NovoDateTimePickerElement.prototype.createFullDateValue = /**
     * @param {?} datePickerValue
     * @param {?} timePickerValue
     * @return {?}
     */
    function (datePickerValue, timePickerValue) {
        return dateFns.setMilliseconds(dateFns.setSeconds(dateFns.setMinutes(dateFns.setHours(datePickerValue, dateFns.getHours(timePickerValue)), dateFns.getMinutes(timePickerValue)), dateFns.getSeconds(timePickerValue)), dateFns.getMilliseconds(timePickerValue));
    };
    // ValueAccessor Functions
    // ValueAccessor Functions
    /**
     * @param {?} model
     * @return {?}
     */
    NovoDateTimePickerElement.prototype.writeValue = 
    // ValueAccessor Functions
    /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
        if (Helpers.isEmpty(model)) {
            this.model = new Date();
        }
        else if (!isNaN(model)) {
            this.model = new Date(model);
        }
        this.datePickerValue = this.model;
        this.timePickerValue = this.model;
        if (Helpers.isDate(this.model)) {
            this.setDateLabels(this.model);
            this.setTimeLabels(this.model);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoDateTimePickerElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoDateTimePickerElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    NovoDateTimePickerElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-date-time-picker',
                    providers: [DATE_TIME_PICKER_VALUE_ACCESSOR],
                    animations: [
                        trigger('dateTextState', [
                            state('date', style({
                                opacity: '1.0',
                            })),
                            state('time', style({
                                opacity: '0.6',
                            })),
                            transition('date <=> time', animate('200ms ease-in')),
                        ]),
                        trigger('timeTextState', [
                            state('date', style({
                                opacity: '0.6',
                            })),
                            state('time', style({
                                opacity: '1.0',
                            })),
                            transition('date <=> time', animate('200ms ease-in')),
                        ]),
                        trigger('indicatorState', [
                            state('date', style({
                                transform: 'translateX(0%)',
                            })),
                            state('time', style({
                                transform: 'translateX(100%)',
                            })),
                            transition('date <=> time', animate('200ms ease-in')),
                        ]),
                        trigger('containerState', [
                            state('date', style({
                                transform: 'translateX(0%)',
                            })),
                            state('time', style({
                                transform: 'translateX(-100%)',
                            })),
                            transition('date <=> time', animate('200ms ease-in')),
                        ]),
                    ],
                    template: "\n    <div class=\"date-time-container\">\n      <div class=\"date-time-tabs\">\n        <span\n          class=\"date-tab\"\n          (click)=\"toggleView('date')\"\n          [@dateTextState]=\"componentTabState\"\n          data-automation-id=\"novo-date-time-date-tab\"\n          >{{ selectedLabel }}</span\n        >\n        <span\n          class=\"time-tab\"\n          (click)=\"toggleView('time')\"\n          [@timeTextState]=\"componentTabState\"\n          data-automation-id=\"novo-date-time-time-tab\"\n        >\n          <span class=\"hours\" data-automation-id=\"novo-time-picker-hours\">{{ hours }}</span\n          >:<span class=\"minutes\" data-automation-id=\"novo-time-picker-minutes\">{{ minutes }}</span>\n          <span *ngIf=\"!military\" class=\"meridian\"> {{ meridian }}</span>\n        </span>\n        <i class=\"date-time-indicator\" [@indicatorState]=\"componentTabState\"></i>\n      </div>\n      <div class=\"view-container\" [@containerState]=\"componentTabState\">\n        <div class=\"calendar\">\n          <novo-date-picker\n            (onSelect)=\"onDateSelected($event)\"\n            [(ngModel)]=\"model\"\n            inline=\"true\"\n            [minYear]=\"minYear\"\n            [maxYear]=\"maxYear\"\n            [start]=\"start\"\n            [end]=\"end\"\n            [weekStart]=\"weekStart\"\n          ></novo-date-picker>\n        </div>\n        <div class=\"time-picker\">\n          <novo-time-picker (onSelect)=\"onTimeSelected($event)\" [(ngModel)]=\"model\" [military]=\"military\" inline=\"true\"></novo-time-picker>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoDateTimePickerElement.ctorParameters = function () { return [
        { type: NovoLabelService },
        { type: ElementRef }
    ]; };
    NovoDateTimePickerElement.propDecorators = {
        minYear: [{ type: Input }],
        maxYear: [{ type: Input }],
        start: [{ type: Input }],
        end: [{ type: Input }],
        military: [{ type: Input }],
        weekStart: [{ type: Input }],
        onSelect: [{ type: Output }]
    };
    return NovoDateTimePickerElement;
}());
export { NovoDateTimePickerElement };
if (false) {
    /** @type {?} */
    NovoDateTimePickerElement.prototype.minYear;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.maxYear;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.start;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.end;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.military;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.weekStart;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.onSelect;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.componentTabState;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.selectedLabel;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.hours;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.minutes;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.meridian;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.datePickerValue;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.timePickerValue;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.model;
    /** @type {?} */
    NovoDateTimePickerElement.prototype._onChange;
    /** @type {?} */
    NovoDateTimePickerElement.prototype._onTouched;
    /** @type {?} */
    NovoDateTimePickerElement.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoDateTimePickerElement.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS10aW1lLXBpY2tlci9EYXRlVGltZVBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOztBQUVwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7OztJQUcvRCwrQkFBK0IsR0FBRztJQUN0QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUM7SUFDeEQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBeUlFLG1DQUFtQixNQUF3QixFQUFVLE9BQW1CO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQWxCeEUsY0FBUyxHQUFXLENBQUMsQ0FBQzs7UUFJdEIsYUFBUSxHQUFzQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxzQkFBaUIsR0FBVyxNQUFNLENBQUM7UUFLbkMsb0JBQWUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25DLG9CQUFlLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FB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Q0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO2dDQUNKLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzlCLENBQUMsQ0FDSDs0QkFDRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzt5QkFDdEQsQ0FBQzt3QkFDRixPQUFPLENBQUMsZ0JBQWdCLEVBQUU7NEJBQ3hCLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO2dDQUNKLFNBQVMsRUFBRSxnQkFBZ0I7NkJBQzVCLENBQUMsQ0FDSDs0QkFDRCxLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQztnQ0FDSixTQUFTLEVBQUUsbUJBQW1COzZCQUMvQixDQUFDLENBQ0g7NEJBQ0QsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7eUJBQ3RELENBQUM7cUJBQ0g7b0JBQ0QsUUFBUSxFQUFFLGttREF3Q1Q7aUJBQ0Y7Ozs7Z0JBbkhRLGdCQUFnQjtnQkFQaEIsVUFBVTs7OzBCQTRIaEIsS0FBSzswQkFFTCxLQUFLO3dCQUVMLEtBQUs7c0JBRUwsS0FBSzsyQkFFTCxLQUFLOzRCQUVMLEtBQUs7MkJBSUwsTUFBTTs7SUFvR1QsZ0NBQUM7Q0FBQSxBQTlORCxJQThOQztTQW5IWSx5QkFBeUI7OztJQUNwQyw0Q0FDYTs7SUFDYiw0Q0FDYTs7SUFDYiwwQ0FDVzs7SUFDWCx3Q0FDUzs7SUFDVCw2Q0FDYzs7SUFDZCw4Q0FDc0I7O0lBR3RCLDZDQUNzRDs7SUFFdEQsc0RBQW1DOztJQUNuQyxrREFBc0I7O0lBQ3RCLDBDQUFjOztJQUNkLDRDQUFnQjs7SUFDaEIsNkNBQWlCOztJQUNqQixvREFBbUM7O0lBQ25DLG9EQUFtQzs7SUFFbkMsMENBQVc7O0lBQ1gsOENBQStCOztJQUMvQiwrQ0FBZ0M7O0lBRXBCLDJDQUErQjs7Ozs7SUFBRSw0Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfVElNRV9QSUNLRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0ZVRpbWVQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGUtdGltZS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtEQVRFX1RJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RhdGVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEuMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAndGltZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignZGF0ZSA8PT4gdGltZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcigndGltZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdkYXRlIDw9PiB0aW1lJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdpbmRpY2F0b3JTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAndGltZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignZGF0ZSA8PT4gdGltZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignY29udGFpbmVyU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdkYXRlIDw9PiB0aW1lJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZS10aW1lLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGUtdGltZS10YWJzXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJkYXRlLXRhYlwiXG4gICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVZpZXcoJ2RhdGUnKVwiXG4gICAgICAgICAgW0BkYXRlVGV4dFN0YXRlXT1cImNvbXBvbmVudFRhYlN0YXRlXCJcbiAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGUtdGltZS1kYXRlLXRhYlwiXG4gICAgICAgICAgPnt7IHNlbGVjdGVkTGFiZWwgfX08L3NwYW5cbiAgICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwidGltZS10YWJcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVWaWV3KCd0aW1lJylcIlxuICAgICAgICAgIFtAdGltZVRleHRTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiXG4gICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRlLXRpbWUtdGltZS10YWJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Vyc1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tdGltZS1waWNrZXItaG91cnNcIj57eyBob3VycyB9fTwvc3BhblxuICAgICAgICAgID46PHNwYW4gY2xhc3M9XCJtaW51dGVzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1taW51dGVzXCI+e3sgbWludXRlcyB9fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFtaWxpdGFyeVwiIGNsYXNzPVwibWVyaWRpYW5cIj4ge3sgbWVyaWRpYW4gfX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGkgY2xhc3M9XCJkYXRlLXRpbWUtaW5kaWNhdG9yXCIgW0BpbmRpY2F0b3JTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInZpZXctY29udGFpbmVyXCIgW0Bjb250YWluZXJTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgICA8bm92by1kYXRlLXBpY2tlclxuICAgICAgICAgICAgKG9uU2VsZWN0KT1cIm9uRGF0ZVNlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbFwiXG4gICAgICAgICAgICBpbmxpbmU9XCJ0cnVlXCJcbiAgICAgICAgICAgIFttaW5ZZWFyXT1cIm1pblllYXJcIlxuICAgICAgICAgICAgW21heFllYXJdPVwibWF4WWVhclwiXG4gICAgICAgICAgICBbc3RhcnRdPVwic3RhcnRcIlxuICAgICAgICAgICAgW2VuZF09XCJlbmRcIlxuICAgICAgICAgICAgW3dlZWtTdGFydF09XCJ3ZWVrU3RhcnRcIlxuICAgICAgICAgID48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1waWNrZXJcIj5cbiAgICAgICAgICA8bm92by10aW1lLXBpY2tlciAob25TZWxlY3QpPVwib25UaW1lU2VsZWN0ZWQoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwibW9kZWxcIiBbbWlsaXRhcnldPVwibWlsaXRhcnlcIiBpbmxpbmU9XCJ0cnVlXCI+PC9ub3ZvLXRpbWUtcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0ZVRpbWVQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBtaW5ZZWFyOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1heFllYXI6IGFueTtcbiAgQElucHV0KClcbiAgc3RhcnQ6IGFueTtcbiAgQElucHV0KClcbiAgZW5kOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1pbGl0YXJ5OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHdlZWtTdGFydDogbnVtYmVyID0gMDtcblxuICAvLyBTZWxlY3QgY2FsbGJhY2sgZm9yIG91dHB1dFxuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgY29tcG9uZW50VGFiU3RhdGU6IHN0cmluZyA9ICdkYXRlJztcbiAgc2VsZWN0ZWRMYWJlbDogc3RyaW5nO1xuICBob3Vyczogc3RyaW5nO1xuICBtaW51dGVzOiBzdHJpbmc7XG4gIG1lcmlkaWFuOiBzdHJpbmc7XG4gIGRhdGVQaWNrZXJWYWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHRpbWVQaWNrZXJWYWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgbW9kZWw6IGFueTtcbiAgX29uQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBfb25Ub3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICB0b2dnbGVWaWV3KHRhYjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnRUYWJTdGF0ZSA9IHRhYjtcbiAgfVxuXG4gIHNldERhdGVMYWJlbHModmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh2YWx1ZSwge1xuICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRpbWVMYWJlbHModmFsdWU6IERhdGUpIHtcbiAgICBsZXQgaG91cnMgPSB2YWx1ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSB2YWx1ZS5nZXRNaW51dGVzKCk7XG5cbiAgICB0aGlzLm1lcmlkaWFuID0gdmFsdWUudG9Mb2NhbGVUaW1lU3RyaW5nKCkuc2xpY2UoLTIpO1xuXG4gICAgaWYgKCF0aGlzLm1pbGl0YXJ5KSB7XG4gICAgICBob3VycyA9IHRoaXMubWVyaWRpYW4gPT09ICdQTScgJiYgaG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiBob3VycztcblxuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciAxMlxuICAgICAgaWYgKHRoaXMubWVyaWRpYW4gPT09ICdQTScgJiYgaG91cnMgPT09IDI0KSB7XG4gICAgICAgIGhvdXJzID0gMTI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVyaWRpYW4gPT09ICdBTScgJiYgaG91cnMgPT09IDApIHtcbiAgICAgICAgaG91cnMgPSAxMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhvdXJzID0gaG91cnMudG9TdHJpbmcoKTtcbiAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzLnRvU3RyaW5nKCkubGVuZ3RoID09PSAxID8gYDAke21pbnV0ZXMudG9TdHJpbmcoKX1gIDogbWludXRlcy50b1N0cmluZygpO1xuICB9XG5cbiAgb25EYXRlU2VsZWN0ZWQoZXZlbnQ6IHsgbW9udGg/OiBhbnk7IHllYXI/OiBhbnk7IGRheT86IGFueTsgZGF0ZT86IERhdGUgfSkge1xuICAgIHRoaXMuZGF0ZVBpY2tlclZhbHVlID0gZXZlbnQuZGF0ZTtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5jcmVhdGVGdWxsRGF0ZVZhbHVlKHRoaXMuZGF0ZVBpY2tlclZhbHVlLCB0aGlzLnRpbWVQaWNrZXJWYWx1ZSk7XG4gICAgdGhpcy5zZXREYXRlTGFiZWxzKHRoaXMubW9kZWwpO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7IGRhdGU6IHRoaXMubW9kZWwgfSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgdGhpcy50b2dnbGVWaWV3KCd0aW1lJyk7XG4gIH1cblxuICBvblRpbWVTZWxlY3RlZChldmVudDogeyBob3Vycz86IG51bWJlcjsgbWludXRlcz86IG51bWJlcjsgbWVyaWRpYW4/OiBzdHJpbmc7IGRhdGU/OiBEYXRlOyB0ZXh0Pzogc3RyaW5nIH0pIHtcbiAgICB0aGlzLnRpbWVQaWNrZXJWYWx1ZSA9IGV2ZW50LmRhdGU7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuY3JlYXRlRnVsbERhdGVWYWx1ZSh0aGlzLm1vZGVsLCB0aGlzLnRpbWVQaWNrZXJWYWx1ZSk7XG4gICAgdGhpcy5zZXRUaW1lTGFiZWxzKHRoaXMubW9kZWwpO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7IGRhdGU6IHRoaXMubW9kZWwgfSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5tb2RlbCk7XG4gIH1cblxuICBjcmVhdGVGdWxsRGF0ZVZhbHVlKGRhdGVQaWNrZXJWYWx1ZTogRGF0ZSwgdGltZVBpY2tlclZhbHVlOiBEYXRlKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuc2V0TWlsbGlzZWNvbmRzKFxuICAgICAgZGF0ZUZucy5zZXRTZWNvbmRzKFxuICAgICAgICBkYXRlRm5zLnNldE1pbnV0ZXMoZGF0ZUZucy5zZXRIb3VycyhkYXRlUGlja2VyVmFsdWUsIGRhdGVGbnMuZ2V0SG91cnModGltZVBpY2tlclZhbHVlKSksIGRhdGVGbnMuZ2V0TWludXRlcyh0aW1lUGlja2VyVmFsdWUpKSxcbiAgICAgICAgZGF0ZUZucy5nZXRTZWNvbmRzKHRpbWVQaWNrZXJWYWx1ZSksXG4gICAgICApLFxuICAgICAgZGF0ZUZucy5nZXRNaWxsaXNlY29uZHModGltZVBpY2tlclZhbHVlKSxcbiAgICApO1xuICB9XG5cbiAgLy8gVmFsdWVBY2Nlc3NvciBGdW5jdGlvbnNcbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkobW9kZWwpKSB7XG4gICAgICB0aGlzLm1vZGVsID0gbmV3IERhdGUoKTtcbiAgICB9IGVsc2UgaWYgKCFpc05hTihtb2RlbCkpIHtcbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgRGF0ZShtb2RlbCk7XG4gICAgfVxuICAgIHRoaXMuZGF0ZVBpY2tlclZhbHVlID0gdGhpcy5tb2RlbDtcbiAgICB0aGlzLnRpbWVQaWNrZXJWYWx1ZSA9IHRoaXMubW9kZWw7XG4gICAgaWYgKEhlbHBlcnMuaXNEYXRlKHRoaXMubW9kZWwpKSB7XG4gICAgICB0aGlzLnNldERhdGVMYWJlbHModGhpcy5tb2RlbCk7XG4gICAgICB0aGlzLnNldFRpbWVMYWJlbHModGhpcy5tb2RlbCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==