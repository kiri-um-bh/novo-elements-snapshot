// NG2
import { ElementRef, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import * as dateFns from 'date-fns';
// APP
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../date-picker/DatePicker";
import * as i4 from "@angular/forms";
import * as i5 from "../time-picker/TimePicker";
function NovoDateTimePickerElement_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.meridian, "");
} }
// Value accessor for the component (supports ngModel)
var DATE_TIME_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoDateTimePickerElement; }),
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
        this._onChange = function () { };
        this._onTouched = function () { };
    }
    NovoDateTimePickerElement.prototype.toggleView = function (tab) {
        this.componentTabState = tab;
    };
    NovoDateTimePickerElement.prototype.setDateLabels = function (value) {
        this.selectedLabel = this.labels.formatDateWithFormat(value, {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
    };
    NovoDateTimePickerElement.prototype.setTimeLabels = function (value) {
        var hours = value.getHours();
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
    NovoDateTimePickerElement.prototype.onDateSelected = function (event) {
        this.datePickerValue = event.date;
        this.model = this.createFullDateValue(this.datePickerValue, this.timePickerValue);
        this.setDateLabels(this.model);
        this.onSelect.emit({ date: this.model });
        this._onChange(this.model);
        this.toggleView('time');
    };
    NovoDateTimePickerElement.prototype.onTimeSelected = function (event) {
        this.timePickerValue = event.date;
        this.model = this.createFullDateValue(this.model, this.timePickerValue);
        this.setTimeLabels(this.model);
        this.onSelect.emit({ date: this.model });
        this._onChange(this.model);
    };
    NovoDateTimePickerElement.prototype.createFullDateValue = function (datePickerValue, timePickerValue) {
        return dateFns.setMilliseconds(dateFns.setSeconds(dateFns.setMinutes(dateFns.setHours(datePickerValue, dateFns.getHours(timePickerValue)), dateFns.getMinutes(timePickerValue)), dateFns.getSeconds(timePickerValue)), dateFns.getMilliseconds(timePickerValue));
    };
    // ValueAccessor Functions
    NovoDateTimePickerElement.prototype.writeValue = function (model) {
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
    NovoDateTimePickerElement.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NovoDateTimePickerElement.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    NovoDateTimePickerElement.ɵfac = function NovoDateTimePickerElement_Factory(t) { return new (t || NovoDateTimePickerElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    NovoDateTimePickerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDateTimePickerElement, selectors: [["novo-date-time-picker"]], inputs: { minYear: "minYear", maxYear: "maxYear", start: "start", end: "end", military: "military", weekStart: "weekStart" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([DATE_TIME_PICKER_VALUE_ACCESSOR])], decls: 17, vars: 16, consts: [[1, "date-time-container"], [1, "date-time-tabs"], ["data-automation-id", "novo-date-time-date-tab", 1, "date-tab", 3, "click"], ["data-automation-id", "novo-date-time-time-tab", 1, "time-tab", 3, "click"], ["data-automation-id", "novo-time-picker-hours", 1, "hours"], ["data-automation-id", "novo-time-picker-minutes", 1, "minutes"], ["class", "meridian", 4, "ngIf"], [1, "date-time-indicator"], [1, "view-container"], [1, "calendar"], ["inline", "true", 3, "ngModel", "minYear", "maxYear", "start", "end", "weekStart", "onSelect", "ngModelChange"], [1, "time-picker"], ["inline", "true", 3, "ngModel", "military", "onSelect", "ngModelChange"], [1, "meridian"]], template: function NovoDateTimePickerElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵlistener("click", function NovoDateTimePickerElement_Template_span_click_2_listener() { return ctx.toggleView("date"); });
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵlistener("click", function NovoDateTimePickerElement_Template_span_click_4_listener() { return ctx.toggleView("time"); });
            i0.ɵɵelementStart(5, "span", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, ":");
            i0.ɵɵelementStart(8, "span", 5);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, NovoDateTimePickerElement_span_10_Template, 2, 1, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "i", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 8);
            i0.ɵɵelementStart(13, "div", 9);
            i0.ɵɵelementStart(14, "novo-date-picker", 10);
            i0.ɵɵlistener("onSelect", function NovoDateTimePickerElement_Template_novo_date_picker_onSelect_14_listener($event) { return ctx.onDateSelected($event); })("ngModelChange", function NovoDateTimePickerElement_Template_novo_date_picker_ngModelChange_14_listener($event) { return ctx.model = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 11);
            i0.ɵɵelementStart(16, "novo-time-picker", 12);
            i0.ɵɵlistener("onSelect", function NovoDateTimePickerElement_Template_novo_time_picker_onSelect_16_listener($event) { return ctx.onTimeSelected($event); })("ngModelChange", function NovoDateTimePickerElement_Template_novo_time_picker_ngModelChange_16_listener($event) { return ctx.model = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("@dateTextState", ctx.componentTabState);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.selectedLabel);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("@timeTextState", ctx.componentTabState);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.hours);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.minutes);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.military);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("@indicatorState", ctx.componentTabState);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("@containerState", ctx.componentTabState);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.model)("minYear", ctx.minYear)("maxYear", ctx.maxYear)("start", ctx.start)("end", ctx.end)("weekStart", ctx.weekStart);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.model)("military", ctx.military);
        } }, directives: [i2.NgIf, i3.NovoDatePickerElement, i4.NgControlStatus, i4.NgModel, i5.NovoTimePickerElement], encapsulation: 2, data: { animation: [
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
            ] } });
    return NovoDateTimePickerElement;
}());
export { NovoDateTimePickerElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDateTimePickerElement, [{
        type: Component,
        args: [{
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
                template: "\n    <div class=\"date-time-container\">\n      <div class=\"date-time-tabs\">\n        <span\n          class=\"date-tab\"\n          (click)=\"toggleView('date')\"\n          [@dateTextState]=\"componentTabState\"\n          data-automation-id=\"novo-date-time-date-tab\"\n          >{{ selectedLabel }}</span\n        >\n        <span\n          class=\"time-tab\"\n          (click)=\"toggleView('time')\"\n          [@timeTextState]=\"componentTabState\"\n          data-automation-id=\"novo-date-time-time-tab\"\n        >\n          <span class=\"hours\" data-automation-id=\"novo-time-picker-hours\">{{ hours }}</span\n          >:<span class=\"minutes\" data-automation-id=\"novo-time-picker-minutes\">{{ minutes }}</span>\n          <span *ngIf=\"!military\" class=\"meridian\"> {{ meridian }}</span>\n        </span>\n        <i class=\"date-time-indicator\" [@indicatorState]=\"componentTabState\"></i>\n      </div>\n      <div class=\"view-container\" [@containerState]=\"componentTabState\">\n        <div class=\"calendar\">\n          <novo-date-picker\n            (onSelect)=\"onDateSelected($event)\"\n            [(ngModel)]=\"model\"\n            inline=\"true\"\n            [minYear]=\"minYear\"\n            [maxYear]=\"maxYear\"\n            [start]=\"start\"\n            [end]=\"end\"\n            [weekStart]=\"weekStart\"\n          ></novo-date-picker>\n        </div>\n        <div class=\"time-picker\">\n          <novo-time-picker (onSelect)=\"onTimeSelected($event)\" [(ngModel)]=\"model\" [military]=\"military\" inline=\"true\"></novo-time-picker>\n        </div>\n      </div>\n    </div>\n  ",
            }]
    }], function () { return [{ type: i1.NovoLabelService }, { type: i0.ElementRef }]; }, { minYear: [{
            type: Input
        }], maxYear: [{
            type: Input
        }], start: [{
            type: Input
        }], end: [{
            type: Input
        }], military: [{
            type: Input
        }], weekStart: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS10aW1lLXBpY2tlci9EYXRlVGltZVBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLFNBQVM7QUFDVCxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUNwQyxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7OztJQTRGM0QsZ0NBQTBDO0lBQUEsWUFBYztJQUFBLGlCQUFPOzs7SUFBckIsZUFBYztJQUFkLCtDQUFjOztBQTFGbEUsc0RBQXNEO0FBQ3RELElBQU0sK0JBQStCLEdBQUc7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsQ0FBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRjtJQXlJRSxtQ0FBbUIsTUFBd0IsRUFBVSxPQUFtQjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFsQnhFLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFdEIsNkJBQTZCO1FBRTdCLGFBQVEsR0FBc0IsSUFBSSxZQUFZ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LE1BQU0sRUFDTixLQUFLLENBQUM7NEJBQ0osU0FBUyxFQUFFLGdCQUFnQjt5QkFDNUIsQ0FBQyxDQUNIO3dCQUNELEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDOzRCQUNKLFNBQVMsRUFBRSxrQkFBa0I7eUJBQzlCLENBQUMsQ0FDSDt3QkFDRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDdEQsQ0FBQztvQkFDRixPQUFPLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3hCLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDOzRCQUNKLFNBQVMsRUFBRSxnQkFBZ0I7eUJBQzVCLENBQUMsQ0FDSDt3QkFDRCxLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQzs0QkFDSixTQUFTLEVBQUUsbUJBQW1CO3lCQUMvQixDQUFDLENBQ0g7d0JBQ0QsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQ3RELENBQUM7aUJBQ0g7Z0JBQ0QsUUFBUSxFQUFFLGttREF3Q1Q7YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBSUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgREFURV9USU1FX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9EYXRlVGltZVBpY2tlckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0ZS10aW1lLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW0RBVEVfVElNRV9QSUNLRVJfVkFMVUVfQUNDRVNTT1JdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGF0ZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMS4wJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdkYXRlIDw9PiB0aW1lJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCd0aW1lVGV4dFN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEuMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ2RhdGUgPD0+IHRpbWUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2luZGljYXRvclN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdkYXRlIDw9PiB0aW1lJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdjb250YWluZXJTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAndGltZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ2RhdGUgPD0+IHRpbWUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkYXRlLXRpbWUtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS10aW1lLXRhYnNcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzcz1cImRhdGUtdGFiXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlVmlldygnZGF0ZScpXCJcbiAgICAgICAgICBbQGRhdGVUZXh0U3RhdGVdPVwiY29tcG9uZW50VGFiU3RhdGVcIlxuICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0ZS10aW1lLWRhdGUtdGFiXCJcbiAgICAgICAgICA+e3sgc2VsZWN0ZWRMYWJlbCB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJ0aW1lLXRhYlwiXG4gICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVZpZXcoJ3RpbWUnKVwiXG4gICAgICAgICAgW0B0aW1lVGV4dFN0YXRlXT1cImNvbXBvbmVudFRhYlN0YXRlXCJcbiAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGUtdGltZS10aW1lLXRhYlwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1ob3Vyc1wiPnt7IGhvdXJzIH19PC9zcGFuXG4gICAgICAgICAgPjo8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLW1pbnV0ZXNcIj57eyBtaW51dGVzIH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIW1pbGl0YXJ5XCIgY2xhc3M9XCJtZXJpZGlhblwiPiB7eyBtZXJpZGlhbiB9fTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aSBjbGFzcz1cImRhdGUtdGltZS1pbmRpY2F0b3JcIiBbQGluZGljYXRvclN0YXRlXT1cImNvbXBvbmVudFRhYlN0YXRlXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidmlldy1jb250YWluZXJcIiBbQGNvbnRhaW5lclN0YXRlXT1cImNvbXBvbmVudFRhYlN0YXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiPlxuICAgICAgICAgIDxub3ZvLWRhdGUtcGlja2VyXG4gICAgICAgICAgICAob25TZWxlY3QpPVwib25EYXRlU2VsZWN0ZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsXCJcbiAgICAgICAgICAgIGlubGluZT1cInRydWVcIlxuICAgICAgICAgICAgW21pblllYXJdPVwibWluWWVhclwiXG4gICAgICAgICAgICBbbWF4WWVhcl09XCJtYXhZZWFyXCJcbiAgICAgICAgICAgIFtzdGFydF09XCJzdGFydFwiXG4gICAgICAgICAgICBbZW5kXT1cImVuZFwiXG4gICAgICAgICAgICBbd2Vla1N0YXJ0XT1cIndlZWtTdGFydFwiXG4gICAgICAgICAgPjwvbm92by1kYXRlLXBpY2tlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlclwiPlxuICAgICAgICAgIDxub3ZvLXRpbWUtcGlja2VyIChvblNlbGVjdCk9XCJvblRpbWVTZWxlY3RlZCgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJtb2RlbFwiIFttaWxpdGFyeV09XCJtaWxpdGFyeVwiIGlubGluZT1cInRydWVcIj48L25vdm8tdGltZS1waWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRlVGltZVBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIG1pblllYXI6IGFueTtcbiAgQElucHV0KClcbiAgbWF4WWVhcjogYW55O1xuICBASW5wdXQoKVxuICBzdGFydDogYW55O1xuICBASW5wdXQoKVxuICBlbmQ6IGFueTtcbiAgQElucHV0KClcbiAgbWlsaXRhcnk6IGFueTtcbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0OiBudW1iZXIgPSAwO1xuXG4gIC8vIFNlbGVjdCBjYWxsYmFjayBmb3Igb3V0cHV0XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICBjb21wb25lbnRUYWJTdGF0ZTogc3RyaW5nID0gJ2RhdGUnO1xuICBzZWxlY3RlZExhYmVsOiBzdHJpbmc7XG4gIGhvdXJzOiBzdHJpbmc7XG4gIG1pbnV0ZXM6IHN0cmluZztcbiAgbWVyaWRpYW46IHN0cmluZztcbiAgZGF0ZVBpY2tlclZhbHVlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgdGltZVBpY2tlclZhbHVlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICBtb2RlbDogYW55O1xuICBfb25DaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIHRvZ2dsZVZpZXcodGFiOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBvbmVudFRhYlN0YXRlID0gdGFiO1xuICB9XG5cbiAgc2V0RGF0ZUxhYmVscyh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHZhbHVlLCB7XG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0VGltZUxhYmVscyh2YWx1ZTogRGF0ZSkge1xuICAgIGxldCBob3VycyA9IHZhbHVlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbWludXRlcyA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcblxuICAgIHRoaXMubWVyaWRpYW4gPSB2YWx1ZS50b0xvY2FsZVRpbWVTdHJpbmcoKS5zbGljZSgtMik7XG5cbiAgICBpZiAoIXRoaXMubWlsaXRhcnkpIHtcbiAgICAgIGhvdXJzID0gdGhpcy5tZXJpZGlhbiA9PT0gJ1BNJyAmJiBob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzO1xuXG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIDEyXG4gICAgICBpZiAodGhpcy5tZXJpZGlhbiA9PT0gJ1BNJyAmJiBob3VycyA9PT0gMjQpIHtcbiAgICAgICAgaG91cnMgPSAxMjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZXJpZGlhbiA9PT0gJ0FNJyAmJiBob3VycyA9PT0gMCkge1xuICAgICAgICBob3VycyA9IDEyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaG91cnMgPSBob3Vycy50b1N0cmluZygpO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXMudG9TdHJpbmcoKS5sZW5ndGggPT09IDEgPyBgMCR7bWludXRlcy50b1N0cmluZygpfWAgOiBtaW51dGVzLnRvU3RyaW5nKCk7XG4gIH1cblxuICBvbkRhdGVTZWxlY3RlZChldmVudDogeyBtb250aD86IGFueTsgeWVhcj86IGFueTsgZGF5PzogYW55OyBkYXRlPzogRGF0ZSB9KSB7XG4gICAgdGhpcy5kYXRlUGlja2VyVmFsdWUgPSBldmVudC5kYXRlO1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmNyZWF0ZUZ1bGxEYXRlVmFsdWUodGhpcy5kYXRlUGlja2VyVmFsdWUsIHRoaXMudGltZVBpY2tlclZhbHVlKTtcbiAgICB0aGlzLnNldERhdGVMYWJlbHModGhpcy5tb2RlbCk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgZGF0ZTogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLnRvZ2dsZVZpZXcoJ3RpbWUnKTtcbiAgfVxuXG4gIG9uVGltZVNlbGVjdGVkKGV2ZW50OiB7IGhvdXJzPzogbnVtYmVyOyBtaW51dGVzPzogbnVtYmVyOyBtZXJpZGlhbj86IHN0cmluZzsgZGF0ZT86IERhdGU7IHRleHQ/OiBzdHJpbmcgfSkge1xuICAgIHRoaXMudGltZVBpY2tlclZhbHVlID0gZXZlbnQuZGF0ZTtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5jcmVhdGVGdWxsRGF0ZVZhbHVlKHRoaXMubW9kZWwsIHRoaXMudGltZVBpY2tlclZhbHVlKTtcbiAgICB0aGlzLnNldFRpbWVMYWJlbHModGhpcy5tb2RlbCk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgZGF0ZTogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIGNyZWF0ZUZ1bGxEYXRlVmFsdWUoZGF0ZVBpY2tlclZhbHVlOiBEYXRlLCB0aW1lUGlja2VyVmFsdWU6IERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZUZucy5zZXRNaWxsaXNlY29uZHMoXG4gICAgICBkYXRlRm5zLnNldFNlY29uZHMoXG4gICAgICAgIGRhdGVGbnMuc2V0TWludXRlcyhkYXRlRm5zLnNldEhvdXJzKGRhdGVQaWNrZXJWYWx1ZSwgZGF0ZUZucy5nZXRIb3Vycyh0aW1lUGlja2VyVmFsdWUpKSwgZGF0ZUZucy5nZXRNaW51dGVzKHRpbWVQaWNrZXJWYWx1ZSkpLFxuICAgICAgICBkYXRlRm5zLmdldFNlY29uZHModGltZVBpY2tlclZhbHVlKSxcbiAgICAgICksXG4gICAgICBkYXRlRm5zLmdldE1pbGxpc2Vjb25kcyh0aW1lUGlja2VyVmFsdWUpLFxuICAgICk7XG4gIH1cblxuICAvLyBWYWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eShtb2RlbCkpIHtcbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgRGF0ZSgpO1xuICAgIH0gZWxzZSBpZiAoIWlzTmFOKG1vZGVsKSkge1xuICAgICAgdGhpcy5tb2RlbCA9IG5ldyBEYXRlKG1vZGVsKTtcbiAgICB9XG4gICAgdGhpcy5kYXRlUGlja2VyVmFsdWUgPSB0aGlzLm1vZGVsO1xuICAgIHRoaXMudGltZVBpY2tlclZhbHVlID0gdGhpcy5tb2RlbDtcbiAgICBpZiAoSGVscGVycy5pc0RhdGUodGhpcy5tb2RlbCkpIHtcbiAgICAgIHRoaXMuc2V0RGF0ZUxhYmVscyh0aGlzLm1vZGVsKTtcbiAgICAgIHRoaXMuc2V0VGltZUxhYmVscyh0aGlzLm1vZGVsKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19