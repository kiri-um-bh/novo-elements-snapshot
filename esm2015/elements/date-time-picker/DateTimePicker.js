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
const DATE_TIME_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoDateTimePickerElement)),
    multi: true,
};
export class NovoDateTimePickerElement {
    /**
     * @param {?} labels
     * @param {?} element
     */
    constructor(labels, element) {
        this.labels = labels;
        this.element = element;
        // Select callback for output
        this.onSelect = new EventEmitter(false);
        this.componentTabState = 'date';
        this.datePickerValue = new Date();
        this.timePickerValue = new Date();
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    toggleView(tab) {
        this.componentTabState = tab;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDateLabels(value) {
        this.selectedLabel = this.labels.formatDateWithFormat(value, {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTimeLabels(value) {
        /** @type {?} */
        let hours = value.getHours();
        /** @type {?} */
        const minutes = value.getMinutes();
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
        this.minutes = minutes.toString().length === 1 ? `0${minutes.toString()}` : minutes.toString();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDateSelected(event) {
        this.datePickerValue = event.date;
        this.model = this.createFullDateValue(this.datePickerValue, this.timePickerValue);
        this.setDateLabels(this.model);
        this.onSelect.emit({ date: this.model });
        this._onChange(this.model);
        this.toggleView('time');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTimeSelected(event) {
        this.timePickerValue = event.date;
        this.model = this.createFullDateValue(this.model, this.timePickerValue);
        this.setTimeLabels(this.model);
        this.onSelect.emit({ date: this.model });
        this._onChange(this.model);
    }
    /**
     * @param {?} datePickerValue
     * @param {?} timePickerValue
     * @return {?}
     */
    createFullDateValue(datePickerValue, timePickerValue) {
        return dateFns.setMilliseconds(dateFns.setSeconds(dateFns.setMinutes(dateFns.setHours(datePickerValue, dateFns.getHours(timePickerValue)), dateFns.getMinutes(timePickerValue)), dateFns.getSeconds(timePickerValue)), dateFns.getMilliseconds(timePickerValue));
    }
    // ValueAccessor Functions
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
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
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
}
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
                template: `
    <div class="date-time-container">
      <div class="date-time-tabs">
        <span
          class="date-tab"
          (click)="toggleView('date')"
          [@dateTextState]="componentTabState"
          data-automation-id="novo-date-time-date-tab"
          >{{ selectedLabel }}</span
        >
        <span
          class="time-tab"
          (click)="toggleView('time')"
          [@timeTextState]="componentTabState"
          data-automation-id="novo-date-time-time-tab"
        >
          <span class="hours" data-automation-id="novo-time-picker-hours">{{ hours }}</span
          >:<span class="minutes" data-automation-id="novo-time-picker-minutes">{{ minutes }}</span>
          <span *ngIf="!military" class="meridian"> {{ meridian }}</span>
        </span>
        <i class="date-time-indicator" [@indicatorState]="componentTabState"></i>
      </div>
      <div class="view-container" [@containerState]="componentTabState">
        <div class="calendar">
          <novo-date-picker
            (onSelect)="onDateSelected($event)"
            [(ngModel)]="model"
            inline="true"
            [minYear]="minYear"
            [maxYear]="maxYear"
            [start]="start"
            [end]="end"
          ></novo-date-picker>
        </div>
        <div class="time-picker">
          <novo-time-picker (onSelect)="onTimeSelected($event)" [(ngModel)]="model" [military]="military" inline="true"></novo-time-picker>
        </div>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
NovoDateTimePickerElement.ctorParameters = () => [
    { type: NovoLabelService },
    { type: ElementRef }
];
NovoDateTimePickerElement.propDecorators = {
    minYear: [{ type: Input }],
    maxYear: [{ type: Input }],
    start: [{ type: Input }],
    end: [{ type: Input }],
    military: [{ type: Input }],
    onSelect: [{ type: Output }]
};
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
    /**
     * @type {?}
     * @private
     */
    NovoDateTimePickerElement.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS10aW1lLXBpY2tlci9EYXRlVGltZVBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOztBQUVwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7OztNQUcvRCwrQkFBK0IsR0FBRztJQUN0QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBNEdELE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBNEJwQyxZQUFtQixNQUF3QixFQUFVLE9BQW1CO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTs7UUFkeEUsYUFBUSxHQUFzQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxzQkFBaUIsR0FBVyxNQUFNLENBQUM7UUFLbkMsb0JBQWUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25DLG9CQUFlLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUduQyxjQUFT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QUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDdEQsQ0FBQztvQkFDRixPQUFPLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3hCLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDOzRCQUNKLFNBQVMsRUFBRSxnQkFBZ0I7eUJBQzVCLENBQUMsQ0FDSDt3QkFDRCxLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQzs0QkFDSixTQUFTLEVBQUUsbUJBQW1CO3lCQUMvQixDQUFDLENBQ0g7d0JBQ0QsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQ3RELENBQUM7aUJBQ0g7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Q1Q7YUFDRjs7OztZQWxIUSxnQkFBZ0I7WUFQaEIsVUFBVTs7O3NCQTJIaEIsS0FBSztzQkFFTCxLQUFLO29CQUVMLEtBQUs7a0JBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQUlMLE1BQU07Ozs7SUFaUCw0Q0FDYTs7SUFDYiw0Q0FDYTs7SUFDYiwwQ0FDVzs7SUFDWCx3Q0FDUzs7SUFDVCw2Q0FDYzs7SUFHZCw2Q0FDc0Q7O0lBRXRELHNEQUFtQzs7SUFDbkMsa0RBQXNCOztJQUN0QiwwQ0FBYzs7SUFDZCw0Q0FBZ0I7O0lBQ2hCLDZDQUFpQjs7SUFDakIsb0RBQW1DOztJQUNuQyxvREFBbUM7O0lBRW5DLDBDQUFXOztJQUNYLDhDQUErQjs7SUFDL0IsK0NBQWdDOztJQUVwQiwyQ0FBK0I7Ozs7O0lBQUUsNENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBEQVRFX1RJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0RhdGVUaW1lUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRlLXRpbWUtcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbREFURV9USU1FX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkYXRlVGV4dFN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzAuNicsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ2RhdGUgPD0+IHRpbWUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3RpbWVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzAuNicsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAndGltZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMS4wJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignZGF0ZSA8PT4gdGltZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW5kaWNhdG9yU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ2RhdGUgPD0+IHRpbWUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2NvbnRhaW5lclN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignZGF0ZSA8PT4gdGltZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRhdGUtdGltZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXRpbWUtdGFic1wiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwiZGF0ZS10YWJcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVWaWV3KCdkYXRlJylcIlxuICAgICAgICAgIFtAZGF0ZVRleHRTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiXG4gICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRlLXRpbWUtZGF0ZS10YWJcIlxuICAgICAgICAgID57eyBzZWxlY3RlZExhYmVsIH19PC9zcGFuXG4gICAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzcz1cInRpbWUtdGFiXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlVmlldygndGltZScpXCJcbiAgICAgICAgICBbQHRpbWVUZXh0U3RhdGVdPVwiY29tcG9uZW50VGFiU3RhdGVcIlxuICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0ZS10aW1lLXRpbWUtdGFiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91cnNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLWhvdXJzXCI+e3sgaG91cnMgfX08L3NwYW5cbiAgICAgICAgICA+OjxzcGFuIGNsYXNzPVwibWludXRlc1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tdGltZS1waWNrZXItbWludXRlc1wiPnt7IG1pbnV0ZXMgfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhbWlsaXRhcnlcIiBjbGFzcz1cIm1lcmlkaWFuXCI+IHt7IG1lcmlkaWFuIH19PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzPVwiZGF0ZS10aW1lLWluZGljYXRvclwiIFtAaW5kaWNhdG9yU3RhdGVdPVwiY29tcG9uZW50VGFiU3RhdGVcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWNvbnRhaW5lclwiIFtAY29udGFpbmVyU3RhdGVdPVwiY29tcG9uZW50VGFiU3RhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyXCI+XG4gICAgICAgICAgPG5vdm8tZGF0ZS1waWNrZXJcbiAgICAgICAgICAgIChvblNlbGVjdCk9XCJvbkRhdGVTZWxlY3RlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWxcIlxuICAgICAgICAgICAgaW5saW5lPVwidHJ1ZVwiXG4gICAgICAgICAgICBbbWluWWVhcl09XCJtaW5ZZWFyXCJcbiAgICAgICAgICAgIFttYXhZZWFyXT1cIm1heFllYXJcIlxuICAgICAgICAgICAgW3N0YXJ0XT1cInN0YXJ0XCJcbiAgICAgICAgICAgIFtlbmRdPVwiZW5kXCJcbiAgICAgICAgICA+PC9ub3ZvLWRhdGUtcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtcGlja2VyXCI+XG4gICAgICAgICAgPG5vdm8tdGltZS1waWNrZXIgKG9uU2VsZWN0KT1cIm9uVGltZVNlbGVjdGVkKCRldmVudClcIiBbKG5nTW9kZWwpXT1cIm1vZGVsXCIgW21pbGl0YXJ5XT1cIm1pbGl0YXJ5XCIgaW5saW5lPVwidHJ1ZVwiPjwvbm92by10aW1lLXBpY2tlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGVUaW1lUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgbWluWWVhcjogYW55O1xuICBASW5wdXQoKVxuICBtYXhZZWFyOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0OiBhbnk7XG4gIEBJbnB1dCgpXG4gIGVuZDogYW55O1xuICBASW5wdXQoKVxuICBtaWxpdGFyeTogYW55O1xuXG4gIC8vIFNlbGVjdCBjYWxsYmFjayBmb3Igb3V0cHV0XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICBjb21wb25lbnRUYWJTdGF0ZTogc3RyaW5nID0gJ2RhdGUnO1xuICBzZWxlY3RlZExhYmVsOiBzdHJpbmc7XG4gIGhvdXJzOiBzdHJpbmc7XG4gIG1pbnV0ZXM6IHN0cmluZztcbiAgbWVyaWRpYW46IHN0cmluZztcbiAgZGF0ZVBpY2tlclZhbHVlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgdGltZVBpY2tlclZhbHVlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICBtb2RlbDogYW55O1xuICBfb25DaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIHRvZ2dsZVZpZXcodGFiOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBvbmVudFRhYlN0YXRlID0gdGFiO1xuICB9XG5cbiAgc2V0RGF0ZUxhYmVscyh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KHZhbHVlLCB7XG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0VGltZUxhYmVscyh2YWx1ZTogRGF0ZSkge1xuICAgIGxldCBob3VycyA9IHZhbHVlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbWludXRlcyA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcblxuICAgIHRoaXMubWVyaWRpYW4gPSB2YWx1ZS50b0xvY2FsZVRpbWVTdHJpbmcoKS5zbGljZSgtMik7XG5cbiAgICBpZiAoIXRoaXMubWlsaXRhcnkpIHtcbiAgICAgIGhvdXJzID0gdGhpcy5tZXJpZGlhbiA9PT0gJ1BNJyAmJiBob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzO1xuXG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIDEyXG4gICAgICBpZiAodGhpcy5tZXJpZGlhbiA9PT0gJ1BNJyAmJiBob3VycyA9PT0gMjQpIHtcbiAgICAgICAgaG91cnMgPSAxMjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZXJpZGlhbiA9PT0gJ0FNJyAmJiBob3VycyA9PT0gMCkge1xuICAgICAgICBob3VycyA9IDEyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaG91cnMgPSBob3Vycy50b1N0cmluZygpO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXMudG9TdHJpbmcoKS5sZW5ndGggPT09IDEgPyBgMCR7bWludXRlcy50b1N0cmluZygpfWAgOiBtaW51dGVzLnRvU3RyaW5nKCk7XG4gIH1cblxuICBvbkRhdGVTZWxlY3RlZChldmVudDogeyBtb250aD86IGFueTsgeWVhcj86IGFueTsgZGF5PzogYW55OyBkYXRlPzogRGF0ZSB9KSB7XG4gICAgdGhpcy5kYXRlUGlja2VyVmFsdWUgPSBldmVudC5kYXRlO1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmNyZWF0ZUZ1bGxEYXRlVmFsdWUodGhpcy5kYXRlUGlja2VyVmFsdWUsIHRoaXMudGltZVBpY2tlclZhbHVlKTtcbiAgICB0aGlzLnNldERhdGVMYWJlbHModGhpcy5tb2RlbCk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgZGF0ZTogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLnRvZ2dsZVZpZXcoJ3RpbWUnKTtcbiAgfVxuXG4gIG9uVGltZVNlbGVjdGVkKGV2ZW50OiB7IGhvdXJzPzogbnVtYmVyOyBtaW51dGVzPzogbnVtYmVyOyBtZXJpZGlhbj86IHN0cmluZzsgZGF0ZT86IERhdGU7IHRleHQ/OiBzdHJpbmcgfSkge1xuICAgIHRoaXMudGltZVBpY2tlclZhbHVlID0gZXZlbnQuZGF0ZTtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5jcmVhdGVGdWxsRGF0ZVZhbHVlKHRoaXMubW9kZWwsIHRoaXMudGltZVBpY2tlclZhbHVlKTtcbiAgICB0aGlzLnNldFRpbWVMYWJlbHModGhpcy5tb2RlbCk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgZGF0ZTogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIGNyZWF0ZUZ1bGxEYXRlVmFsdWUoZGF0ZVBpY2tlclZhbHVlOiBEYXRlLCB0aW1lUGlja2VyVmFsdWU6IERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZUZucy5zZXRNaWxsaXNlY29uZHMoXG4gICAgICBkYXRlRm5zLnNldFNlY29uZHMoXG4gICAgICAgIGRhdGVGbnMuc2V0TWludXRlcyhkYXRlRm5zLnNldEhvdXJzKGRhdGVQaWNrZXJWYWx1ZSwgZGF0ZUZucy5nZXRIb3Vycyh0aW1lUGlja2VyVmFsdWUpKSwgZGF0ZUZucy5nZXRNaW51dGVzKHRpbWVQaWNrZXJWYWx1ZSkpLFxuICAgICAgICBkYXRlRm5zLmdldFNlY29uZHModGltZVBpY2tlclZhbHVlKSxcbiAgICAgICksXG4gICAgICBkYXRlRm5zLmdldE1pbGxpc2Vjb25kcyh0aW1lUGlja2VyVmFsdWUpLFxuICAgICk7XG4gIH1cblxuICAvLyBWYWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eShtb2RlbCkpIHtcbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgRGF0ZSgpO1xuICAgIH0gZWxzZSBpZiAoIWlzTmFOKG1vZGVsKSkge1xuICAgICAgdGhpcy5tb2RlbCA9IG5ldyBEYXRlKG1vZGVsKTtcbiAgICB9XG4gICAgdGhpcy5kYXRlUGlja2VyVmFsdWUgPSB0aGlzLm1vZGVsO1xuICAgIHRoaXMudGltZVBpY2tlclZhbHVlID0gdGhpcy5tb2RlbDtcbiAgICBpZiAoSGVscGVycy5pc0RhdGUodGhpcy5tb2RlbCkpIHtcbiAgICAgIHRoaXMuc2V0RGF0ZUxhYmVscyh0aGlzLm1vZGVsKTtcbiAgICAgIHRoaXMuc2V0VGltZUxhYmVscyh0aGlzLm1vZGVsKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19