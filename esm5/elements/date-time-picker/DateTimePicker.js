/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    useExisting: forwardRef(function () { return NovoDateTimePickerElement; }),
    multi: true,
};
var NovoDateTimePickerElement = /** @class */ (function () {
    function NovoDateTimePickerElement(labels, element) {
        this.labels = labels;
        this.element = element;
        // Select callback for output
        this.onSelect = new EventEmitter(false);
        this.componentTabState = 'date';
        this.datePickerValue = new Date();
        this.timePickerValue = new Date();
        this._onChange = function () { };
        this._onTouched = function () { };
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
        this.hours = hours.toString().length === 1 ? "0" + hours.toString() : hours.toString();
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
                    template: "\n        <div class=\"date-time-container\">\n            <div class=\"date-time-tabs\">\n                <span class=\"date-tab\" (click)=\"toggleView('date')\" [@dateTextState]=\"componentTabState\" data-automation-id=\"novo-date-time-date-tab\">{{selectedLabel}}</span>\n                <span class=\"time-tab\" (click)=\"toggleView('time')\" [@timeTextState]=\"componentTabState\" data-automation-id=\"novo-date-time-time-tab\">\n                    <span class=\"hours\" data-automation-id=\"novo-time-picker-hours\">{{hours}}</span>:<span\n                    class=\"minutes\" data-automation-id=\"novo-time-picker-minutes\">{{minutes}}</span>\n                    <span *ngIf=\"!military\" class=\"meridian\">{{meridian}}</span>\n                </span>\n                <i class=\"date-time-indicator\" [@indicatorState]=\"componentTabState\"></i>\n            </div>\n            <div class=\"view-container\" [@containerState]=\"componentTabState\">\n                <div class=\"calendar\">\n                    <novo-date-picker (onSelect)=\"onDateSelected($event)\" [(ngModel)]=\"model\" inline=\"true\" [minYear]=\"minYear\" [maxYear]=\"maxYear\" [start]=\"start\" [end]=\"end\"></novo-date-picker>\n                </div>\n                <div class=\"time-picker\">\n                    <novo-time-picker (onSelect)=\"onTimeSelected($event)\" [(ngModel)]=\"model\" [military]=\"military\" inline=\"true\"></novo-time-picker>\n                </div>\n            </div>\n        </div>\n    "
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
    /** @type {?} */
    NovoDateTimePickerElement.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS10aW1lLXBpY2tlci9EYXRlVGltZVBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7O0FBRXBDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0lBRy9ELCtCQUErQixHQUFHO0lBQ3RDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLENBQUM7SUFDeEQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBbUhFLG1DQUFtQixNQUF3QixFQUFVLE9BQW1CO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTs7UUFkeEUsYUFBUSxHQUFzQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxzQkFBaUIsR0FBVyxNQUFNLENBQUM7UUFLbkMsb0JBQWUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25DLG9CQUFlLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUduQyxjQUFTLEdBQWEsY0FBTyxDQUFDLENB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bXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfVElNRV9QSUNLRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0ZVRpbWVQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGUtdGltZS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtEQVRFX1RJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RhdGVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEuMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAndGltZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignZGF0ZSA8PT4gdGltZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcigndGltZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdkYXRlIDw9PiB0aW1lJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdpbmRpY2F0b3JTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAndGltZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignZGF0ZSA8PT4gdGltZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignY29udGFpbmVyU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdkYXRlIDw9PiB0aW1lJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtdGltZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXRpbWUtdGFic1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS10YWJcIiAoY2xpY2spPVwidG9nZ2xlVmlldygnZGF0ZScpXCIgW0BkYXRlVGV4dFN0YXRlXT1cImNvbXBvbmVudFRhYlN0YXRlXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRlLXRpbWUtZGF0ZS10YWJcIj57e3NlbGVjdGVkTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWUtdGFiXCIgKGNsaWNrKT1cInRvZ2dsZVZpZXcoJ3RpbWUnKVwiIFtAdGltZVRleHRTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0ZS10aW1lLXRpbWUtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91cnNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLWhvdXJzXCI+e3tob3Vyc319PC9zcGFuPjo8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1pbnV0ZXNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLW1pbnV0ZXNcIj57e21pbnV0ZXN9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhbWlsaXRhcnlcIiBjbGFzcz1cIm1lcmlkaWFuXCI+e3ttZXJpZGlhbn19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImRhdGUtdGltZS1pbmRpY2F0b3JcIiBbQGluZGljYXRvclN0YXRlXT1cImNvbXBvbmVudFRhYlN0YXRlXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlldy1jb250YWluZXJcIiBbQGNvbnRhaW5lclN0YXRlXT1cImNvbXBvbmVudFRhYlN0YXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWRhdGUtcGlja2VyIChvblNlbGVjdCk9XCJvbkRhdGVTZWxlY3RlZCgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJtb2RlbFwiIGlubGluZT1cInRydWVcIiBbbWluWWVhcl09XCJtaW5ZZWFyXCIgW21heFllYXJdPVwibWF4WWVhclwiIFtzdGFydF09XCJzdGFydFwiIFtlbmRdPVwiZW5kXCI+PC9ub3ZvLWRhdGUtcGlja2VyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bm92by10aW1lLXBpY2tlciAob25TZWxlY3QpPVwib25UaW1lU2VsZWN0ZWQoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwibW9kZWxcIiBbbWlsaXRhcnldPVwibWlsaXRhcnlcIiBpbmxpbmU9XCJ0cnVlXCI+PC9ub3ZvLXRpbWUtcGlja2VyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRlVGltZVBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIG1pblllYXI6IGFueTtcbiAgQElucHV0KClcbiAgbWF4WWVhcjogYW55O1xuICBASW5wdXQoKVxuICBzdGFydDogYW55O1xuICBASW5wdXQoKVxuICBlbmQ6IGFueTtcbiAgQElucHV0KClcbiAgbWlsaXRhcnk6IGFueTtcblxuICAvLyBTZWxlY3QgY2FsbGJhY2sgZm9yIG91dHB1dFxuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgY29tcG9uZW50VGFiU3RhdGU6IHN0cmluZyA9ICdkYXRlJztcbiAgc2VsZWN0ZWRMYWJlbDogc3RyaW5nO1xuICBob3Vyczogc3RyaW5nO1xuICBtaW51dGVzOiBzdHJpbmc7XG4gIG1lcmlkaWFuOiBzdHJpbmc7XG4gIGRhdGVQaWNrZXJWYWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHRpbWVQaWNrZXJWYWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgbW9kZWw6IGFueTtcbiAgX29uQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBfb25Ub3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICB0b2dnbGVWaWV3KHRhYjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnRUYWJTdGF0ZSA9IHRhYjtcbiAgfVxuXG4gIHNldERhdGVMYWJlbHModmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLnNlbGVjdGVkTGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdCh2YWx1ZSwge1xuICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRpbWVMYWJlbHModmFsdWU6IERhdGUpIHtcbiAgICBsZXQgaG91cnMgPSB2YWx1ZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gdmFsdWUuZ2V0TWludXRlcygpO1xuXG4gICAgdGhpcy5tZXJpZGlhbiA9IHZhbHVlLnRvTG9jYWxlVGltZVN0cmluZygpLnNsaWNlKC0yKTtcblxuICAgIGlmICghdGhpcy5taWxpdGFyeSkge1xuICAgICAgaG91cnMgPSB0aGlzLm1lcmlkaWFuID09PSAnUE0nICYmIGhvdXJzID4gMTIgPyBob3VycyAtIDEyIDogaG91cnM7XG5cbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgMTJcbiAgICAgIGlmICh0aGlzLm1lcmlkaWFuID09PSAnUE0nICYmIGhvdXJzID09PSAyNCkge1xuICAgICAgICBob3VycyA9IDEyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1lcmlkaWFuID09PSAnQU0nICYmIGhvdXJzID09PSAwKSB7XG4gICAgICAgIGhvdXJzID0gMTI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ob3VycyA9IGhvdXJzLnRvU3RyaW5nKCkubGVuZ3RoID09PSAxID8gYDAke2hvdXJzLnRvU3RyaW5nKCl9YCA6IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5taW51dGVzID0gbWludXRlcy50b1N0cmluZygpLmxlbmd0aCA9PT0gMSA/IGAwJHttaW51dGVzLnRvU3RyaW5nKCl9YCA6IG1pbnV0ZXMudG9TdHJpbmcoKTtcbiAgfVxuXG4gIG9uRGF0ZVNlbGVjdGVkKGV2ZW50OiB7IG1vbnRoPzogYW55OyB5ZWFyPzogYW55OyBkYXk/OiBhbnk7IGRhdGU/OiBEYXRlIH0pIHtcbiAgICB0aGlzLmRhdGVQaWNrZXJWYWx1ZSA9IGV2ZW50LmRhdGU7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuY3JlYXRlRnVsbERhdGVWYWx1ZSh0aGlzLmRhdGVQaWNrZXJWYWx1ZSwgdGhpcy50aW1lUGlja2VyVmFsdWUpO1xuICAgIHRoaXMuc2V0RGF0ZUxhYmVscyh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoeyBkYXRlOiB0aGlzLm1vZGVsIH0pO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMubW9kZWwpO1xuICAgIHRoaXMudG9nZ2xlVmlldygndGltZScpO1xuICB9XG5cbiAgb25UaW1lU2VsZWN0ZWQoZXZlbnQ6IHsgaG91cnM/OiBudW1iZXI7IG1pbnV0ZXM/OiBudW1iZXI7IG1lcmlkaWFuPzogc3RyaW5nOyBkYXRlPzogRGF0ZTsgdGV4dD86IHN0cmluZyB9KSB7XG4gICAgdGhpcy50aW1lUGlja2VyVmFsdWUgPSBldmVudC5kYXRlO1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmNyZWF0ZUZ1bGxEYXRlVmFsdWUodGhpcy5tb2RlbCwgdGhpcy50aW1lUGlja2VyVmFsdWUpO1xuICAgIHRoaXMuc2V0VGltZUxhYmVscyh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoeyBkYXRlOiB0aGlzLm1vZGVsIH0pO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMubW9kZWwpO1xuICB9XG5cbiAgY3JlYXRlRnVsbERhdGVWYWx1ZShkYXRlUGlja2VyVmFsdWU6IERhdGUsIHRpbWVQaWNrZXJWYWx1ZTogRGF0ZSkge1xuICAgIHJldHVybiBkYXRlRm5zLnNldE1pbGxpc2Vjb25kcyhcbiAgICAgIGRhdGVGbnMuc2V0U2Vjb25kcyhcbiAgICAgICAgZGF0ZUZucy5zZXRNaW51dGVzKGRhdGVGbnMuc2V0SG91cnMoZGF0ZVBpY2tlclZhbHVlLCBkYXRlRm5zLmdldEhvdXJzKHRpbWVQaWNrZXJWYWx1ZSkpLCBkYXRlRm5zLmdldE1pbnV0ZXModGltZVBpY2tlclZhbHVlKSksXG4gICAgICAgIGRhdGVGbnMuZ2V0U2Vjb25kcyh0aW1lUGlja2VyVmFsdWUpLFxuICAgICAgKSxcbiAgICAgIGRhdGVGbnMuZ2V0TWlsbGlzZWNvbmRzKHRpbWVQaWNrZXJWYWx1ZSksXG4gICAgKTtcbiAgfVxuXG4gIC8vIFZhbHVlQWNjZXNzb3IgRnVuY3Rpb25zXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KG1vZGVsKSkge1xuICAgICAgdGhpcy5tb2RlbCA9IG5ldyBEYXRlKCk7XG4gICAgfSBlbHNlIGlmICghaXNOYU4obW9kZWwpKSB7XG4gICAgICB0aGlzLm1vZGVsID0gbmV3IERhdGUobW9kZWwpO1xuICAgIH1cbiAgICB0aGlzLmRhdGVQaWNrZXJWYWx1ZSA9IHRoaXMubW9kZWw7XG4gICAgdGhpcy50aW1lUGlja2VyVmFsdWUgPSB0aGlzLm1vZGVsO1xuICAgIGlmIChIZWxwZXJzLmlzRGF0ZSh0aGlzLm1vZGVsKSkge1xuICAgICAgdGhpcy5zZXREYXRlTGFiZWxzKHRoaXMubW9kZWwpO1xuICAgICAgdGhpcy5zZXRUaW1lTGFiZWxzKHRoaXMubW9kZWwpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=