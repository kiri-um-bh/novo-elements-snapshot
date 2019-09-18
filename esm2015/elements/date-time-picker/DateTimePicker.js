/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef(() => NovoDateTimePickerElement),
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
        this._onChange = () => { };
        this._onTouched = () => { };
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
        let minutes = value.getMinutes();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS10aW1lLXBpY2tlci9EYXRlVGltZVBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7O0FBRXBDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O01BRy9ELCtCQUErQixHQUFHO0lBQ3RDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBNEdELE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBNEJwQyxZQUFtQixNQUF3QixFQUFVLE9BQW1CO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTs7UUFkeEUsYUFBUSxHQUFzQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxzQkFBaUIsR0FBVyxNQUFNLENBQUM7UUFLbkMsb0JBQWUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25DLG9CQUFlLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUduQyxjQUFTLEdB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TyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUN0RCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDeEIsS0FBSyxDQUNILE1BQU0sRUFDTixLQUFLLENBQUM7NEJBQ0osU0FBUyxFQUFFLGdCQUFnQjt5QkFDNUIsQ0FBQyxDQUNIO3dCQUNELEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDOzRCQUNKLFNBQVMsRUFBRSxtQkFBbUI7eUJBQy9CLENBQUMsQ0FDSDt3QkFDRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDdEQsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVDVDthQUNGOzs7O1lBbEhRLGdCQUFnQjtZQVBoQixVQUFVOzs7c0JBMkhoQixLQUFLO3NCQUVMLEtBQUs7b0JBRUwsS0FBSztrQkFFTCxLQUFLO3VCQUVMLEtBQUs7dUJBSUwsTUFBTTs7OztJQVpQLDRDQUNhOztJQUNiLDRDQUNhOztJQUNiLDBDQUNXOztJQUNYLHdDQUNTOztJQUNULDZDQUNjOztJQUdkLDZDQUNzRDs7SUFFdEQsc0RBQW1DOztJQUNuQyxrREFBc0I7O0lBQ3RCLDBDQUFjOztJQUNkLDRDQUFnQjs7SUFDaEIsNkNBQWlCOztJQUNqQixvREFBbUM7O0lBQ25DLG9EQUFtQzs7SUFFbkMsMENBQVc7O0lBQ1gsOENBQStCOztJQUMvQiwrQ0FBZ0M7O0lBRXBCLDJDQUErQjs7Ozs7SUFBRSw0Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IERBVEVfVElNRV9QSUNLRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0ZVRpbWVQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGUtdGltZS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtEQVRFX1RJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RhdGVUZXh0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEuMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAndGltZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignZGF0ZSA8PT4gdGltZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcigndGltZVRleHRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMC42JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxLjAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdkYXRlIDw9PiB0aW1lJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdpbmRpY2F0b3JTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAndGltZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignZGF0ZSA8PT4gdGltZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignY29udGFpbmVyU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdkYXRlIDw9PiB0aW1lJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZS10aW1lLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGUtdGltZS10YWJzXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJkYXRlLXRhYlwiXG4gICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVZpZXcoJ2RhdGUnKVwiXG4gICAgICAgICAgW0BkYXRlVGV4dFN0YXRlXT1cImNvbXBvbmVudFRhYlN0YXRlXCJcbiAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGUtdGltZS1kYXRlLXRhYlwiXG4gICAgICAgICAgPnt7IHNlbGVjdGVkTGFiZWwgfX08L3NwYW5cbiAgICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwidGltZS10YWJcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVWaWV3KCd0aW1lJylcIlxuICAgICAgICAgIFtAdGltZVRleHRTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiXG4gICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRlLXRpbWUtdGltZS10YWJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Vyc1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tdGltZS1waWNrZXItaG91cnNcIj57eyBob3VycyB9fTwvc3BhblxuICAgICAgICAgID46PHNwYW4gY2xhc3M9XCJtaW51dGVzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1taW51dGVzXCI+e3sgbWludXRlcyB9fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFtaWxpdGFyeVwiIGNsYXNzPVwibWVyaWRpYW5cIj4ge3sgbWVyaWRpYW4gfX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGkgY2xhc3M9XCJkYXRlLXRpbWUtaW5kaWNhdG9yXCIgW0BpbmRpY2F0b3JTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInZpZXctY29udGFpbmVyXCIgW0Bjb250YWluZXJTdGF0ZV09XCJjb21wb25lbnRUYWJTdGF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgICA8bm92by1kYXRlLXBpY2tlclxuICAgICAgICAgICAgKG9uU2VsZWN0KT1cIm9uRGF0ZVNlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbFwiXG4gICAgICAgICAgICBpbmxpbmU9XCJ0cnVlXCJcbiAgICAgICAgICAgIFttaW5ZZWFyXT1cIm1pblllYXJcIlxuICAgICAgICAgICAgW21heFllYXJdPVwibWF4WWVhclwiXG4gICAgICAgICAgICBbc3RhcnRdPVwic3RhcnRcIlxuICAgICAgICAgICAgW2VuZF09XCJlbmRcIlxuICAgICAgICAgID48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1waWNrZXJcIj5cbiAgICAgICAgICA8bm92by10aW1lLXBpY2tlciAob25TZWxlY3QpPVwib25UaW1lU2VsZWN0ZWQoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwibW9kZWxcIiBbbWlsaXRhcnldPVwibWlsaXRhcnlcIiBpbmxpbmU9XCJ0cnVlXCI+PC9ub3ZvLXRpbWUtcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0ZVRpbWVQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBtaW5ZZWFyOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1heFllYXI6IGFueTtcbiAgQElucHV0KClcbiAgc3RhcnQ6IGFueTtcbiAgQElucHV0KClcbiAgZW5kOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1pbGl0YXJ5OiBhbnk7XG5cbiAgLy8gU2VsZWN0IGNhbGxiYWNrIGZvciBvdXRwdXRcbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIGNvbXBvbmVudFRhYlN0YXRlOiBzdHJpbmcgPSAnZGF0ZSc7XG4gIHNlbGVjdGVkTGFiZWw6IHN0cmluZztcbiAgaG91cnM6IHN0cmluZztcbiAgbWludXRlczogc3RyaW5nO1xuICBtZXJpZGlhbjogc3RyaW5nO1xuICBkYXRlUGlja2VyVmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICB0aW1lUGlja2VyVmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIG1vZGVsOiBhbnk7XG4gIF9vbkNoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgX29uVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgdG9nZ2xlVmlldyh0YWI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29tcG9uZW50VGFiU3RhdGUgPSB0YWI7XG4gIH1cblxuICBzZXREYXRlTGFiZWxzKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5zZWxlY3RlZExhYmVsID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQodmFsdWUsIHtcbiAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgfSk7XG4gIH1cblxuICBzZXRUaW1lTGFiZWxzKHZhbHVlOiBEYXRlKSB7XG4gICAgbGV0IGhvdXJzID0gdmFsdWUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlcyA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcblxuICAgIHRoaXMubWVyaWRpYW4gPSB2YWx1ZS50b0xvY2FsZVRpbWVTdHJpbmcoKS5zbGljZSgtMik7XG5cbiAgICBpZiAoIXRoaXMubWlsaXRhcnkpIHtcbiAgICAgIGhvdXJzID0gdGhpcy5tZXJpZGlhbiA9PT0gJ1BNJyAmJiBob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzO1xuXG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIDEyXG4gICAgICBpZiAodGhpcy5tZXJpZGlhbiA9PT0gJ1BNJyAmJiBob3VycyA9PT0gMjQpIHtcbiAgICAgICAgaG91cnMgPSAxMjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZXJpZGlhbiA9PT0gJ0FNJyAmJiBob3VycyA9PT0gMCkge1xuICAgICAgICBob3VycyA9IDEyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaG91cnMgPSBob3Vycy50b1N0cmluZygpO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXMudG9TdHJpbmcoKS5sZW5ndGggPT09IDEgPyBgMCR7bWludXRlcy50b1N0cmluZygpfWAgOiBtaW51dGVzLnRvU3RyaW5nKCk7XG4gIH1cblxuICBvbkRhdGVTZWxlY3RlZChldmVudDogeyBtb250aD86IGFueTsgeWVhcj86IGFueTsgZGF5PzogYW55OyBkYXRlPzogRGF0ZSB9KSB7XG4gICAgdGhpcy5kYXRlUGlja2VyVmFsdWUgPSBldmVudC5kYXRlO1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmNyZWF0ZUZ1bGxEYXRlVmFsdWUodGhpcy5kYXRlUGlja2VyVmFsdWUsIHRoaXMudGltZVBpY2tlclZhbHVlKTtcbiAgICB0aGlzLnNldERhdGVMYWJlbHModGhpcy5tb2RlbCk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgZGF0ZTogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLnRvZ2dsZVZpZXcoJ3RpbWUnKTtcbiAgfVxuXG4gIG9uVGltZVNlbGVjdGVkKGV2ZW50OiB7IGhvdXJzPzogbnVtYmVyOyBtaW51dGVzPzogbnVtYmVyOyBtZXJpZGlhbj86IHN0cmluZzsgZGF0ZT86IERhdGU7IHRleHQ/OiBzdHJpbmcgfSkge1xuICAgIHRoaXMudGltZVBpY2tlclZhbHVlID0gZXZlbnQuZGF0ZTtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5jcmVhdGVGdWxsRGF0ZVZhbHVlKHRoaXMubW9kZWwsIHRoaXMudGltZVBpY2tlclZhbHVlKTtcbiAgICB0aGlzLnNldFRpbWVMYWJlbHModGhpcy5tb2RlbCk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgZGF0ZTogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIGNyZWF0ZUZ1bGxEYXRlVmFsdWUoZGF0ZVBpY2tlclZhbHVlOiBEYXRlLCB0aW1lUGlja2VyVmFsdWU6IERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZUZucy5zZXRNaWxsaXNlY29uZHMoXG4gICAgICBkYXRlRm5zLnNldFNlY29uZHMoXG4gICAgICAgIGRhdGVGbnMuc2V0TWludXRlcyhkYXRlRm5zLnNldEhvdXJzKGRhdGVQaWNrZXJWYWx1ZSwgZGF0ZUZucy5nZXRIb3Vycyh0aW1lUGlja2VyVmFsdWUpKSwgZGF0ZUZucy5nZXRNaW51dGVzKHRpbWVQaWNrZXJWYWx1ZSkpLFxuICAgICAgICBkYXRlRm5zLmdldFNlY29uZHModGltZVBpY2tlclZhbHVlKSxcbiAgICAgICksXG4gICAgICBkYXRlRm5zLmdldE1pbGxpc2Vjb25kcyh0aW1lUGlja2VyVmFsdWUpLFxuICAgICk7XG4gIH1cblxuICAvLyBWYWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eShtb2RlbCkpIHtcbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgRGF0ZSgpO1xuICAgIH0gZWxzZSBpZiAoIWlzTmFOKG1vZGVsKSkge1xuICAgICAgdGhpcy5tb2RlbCA9IG5ldyBEYXRlKG1vZGVsKTtcbiAgICB9XG4gICAgdGhpcy5kYXRlUGlja2VyVmFsdWUgPSB0aGlzLm1vZGVsO1xuICAgIHRoaXMudGltZVBpY2tlclZhbHVlID0gdGhpcy5tb2RlbDtcbiAgICBpZiAoSGVscGVycy5pc0RhdGUodGhpcy5tb2RlbCkpIHtcbiAgICAgIHRoaXMuc2V0RGF0ZUxhYmVscyh0aGlzLm1vZGVsKTtcbiAgICAgIHRoaXMuc2V0VGltZUxhYmVscyh0aGlzLm1vZGVsKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19