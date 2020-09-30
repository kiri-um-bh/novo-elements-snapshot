/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from './../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const TIME_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoTimePickerElement),
    multi: true,
};
export class NovoTimePickerElement {
    constructor() {
        this.military = false;
        this.analog = false;
        this.inline = false;
        this.onSelect = new EventEmitter();
        this.hours = 12;
        this.minutes = 0;
        this.value = null;
        this.increments = [];
        this.MERIDIANS = ['am', 'pm'];
        this.MINUTES = ['05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '00'];
        this.HOURS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        this._onChange = () => { };
        this._onTouched = () => { };
    }
    /**
     * @param {?} arr
     * @return {?}
     */
    flatten(arr) {
        return Array.prototype.concat(...arr);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.military) {
            this.HOURS = ['0', ...this.HOURS, '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
            this.increments = this.flatten([...this.HOURS.map((hour) => [`${hour}:00`, `${hour}:15`, `${hour}:30`, `${hour}:45`])]);
        }
        else {
            /** @type {?} */
            let hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
            this.increments = this.flatten([
                ...hours.map((hour) => [`${hour}:00 AM`, `${hour}:15 AM`, `${hour}:30 AM`, `${hour}:45 AM`]),
                ...hours.map((hour) => [`${hour}:00 PM`, `${hour}:15 PM`, `${hour}:30 PM`, `${hour}:45 PM`]),
            ]);
        }
        this.ngOnChanges();
    }
    /**
     * @param {?=} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.model) {
            this.init(this.model, false);
        }
        else {
            this.selected = null;
            this.init(new Date(), false);
        }
    }
    /**
     * @param {?} value
     * @param {?} dispatch
     * @return {?}
     */
    init(value, dispatch) {
        /** @type {?} */
        let _value = new Date(value);
        /** @type {?} */
        let hours = _value.getHours();
        /** @type {?} */
        let minutes = _value.getMinutes();
        if (!this.military) {
            this.meridian = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours || 12;
        }
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        this.setHours(null, hours, dispatch);
        this.setMinutes(null, minutes, dispatch);
        this.checkBetween(minutes);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    checkBetween(value) {
        this.inBetween = this.MINUTES.indexOf(String(value)) < 0;
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    setValue(event, value) {
        Helpers.swallowEvent(event);
        this.selected = value;
        let [time, meridian] = value.split(' ');
        let [hours, minutes] = time.split(':');
        this.hours = hours;
        this.minutes = minutes;
        this.meridian = meridian;
        this.dispatchChange();
    }
    /**
     * @param {?} event
     * @param {?} hours
     * @param {?} dispatch
     * @return {?}
     */
    setHours(event, hours, dispatch) {
        Helpers.swallowEvent(event);
        this.hours = hours;
        this.hoursClass = `hour-${hours}`;
        this.activeHour = hours;
        if (dispatch) {
            this.dispatchChange();
        }
    }
    /**
     * @param {?} event
     * @param {?} minutes
     * @param {?} dispatch
     * @return {?}
     */
    setMinutes(event, minutes, dispatch) {
        Helpers.swallowEvent(event);
        this.minutes = minutes;
        this.minutesClass = `min-${minutes}`;
        this.activeMinute = minutes;
        this.checkBetween(minutes);
        if (dispatch) {
            this.dispatchChange();
        }
    }
    /**
     * @param {?} event
     * @param {?} period
     * @param {?} dispatch
     * @return {?}
     */
    setPeriod(event, period, dispatch) {
        Helpers.swallowEvent(event);
        this.meridian = period;
        if (dispatch) {
            this.dispatchChange();
        }
    }
    /**
     * @return {?}
     */
    dispatchChange() {
        /** @type {?} */
        let hours = Number(this.hours);
        if (!this.military) {
            hours = this.meridian.toLowerCase() === 'pm' ? hours + 12 : hours;
            // Special case for 12
            if (this.meridian.toLowerCase() === 'pm' && hours === 24) {
                hours = 12;
            }
            else if (this.meridian.toLowerCase() === 'am' && hours === 12) {
                hours = 0;
            }
        }
        /** @type {?} */
        let value = new Date();
        value.setHours(hours);
        value.setMinutes(this.minutes);
        value.setSeconds(0);
        this.value = `${this.hours}:${this.minutes} ${this.meridian}`;
        this.onSelect.next({
            hours: hours,
            minutes: this.minutes,
            meridian: this.meridian,
            date: value,
            text: this.value,
        });
        this._onChange(value);
    }
    // ValueAccessor Functions
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        this.model = model;
        if (Helpers.isDate(model)) {
            this.init(model, false);
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
NovoTimePickerElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-time-picker',
                providers: [TIME_PICKER_VALUE_ACCESSOR],
                template: `
        <div class="digital" [class.inline]="inline" [class.military]="military">
            <div class="digital--inner">
                <span class="digital--clock" *ngIf="!inline">
                    <span class="hours" data-automation-id="novo-time-picker-hours">{{hours}}</span>:<span class="minutes" data-automation-id="novo-time-picker-minutes">{{minutes}}</span>
                </span>
                <div class="control-block" *ngIf="!military">
                    <span *ngFor="let period of MERIDIANS" class="digital--period" [class.active]="meridian==period" (click)="setPeriod($event, period, true)" [attr.data-automation-id]="period">{{period}}</span>
                </div>
            </div>
        </div>
        <div class="increments" *ngIf="!analog">
            <novo-list direction="vertical" data-automation-id="novo-time-picker-increments">
                <novo-list-item *ngFor="let increment of increments" (click)="setValue($event, increment)" [class.active]="increment==selected" [attr.data-automation-id]="increment">
                    <item-content>{{increment}}</item-content>
                    <i *ngIf="increment==selected" class="bhi-check"></i>
                </novo-list-item>
            </novo-list>
        </div>
        <div class="analog" *ngIf="analog">
            <div class="analog--inner">
                <div class="analog--face">
                    <span class="analog--center"></span>
                    <span class="analog--hand--hours" [ngClass]="hoursClass">
                        <span class="analog--ball"></span>
                    </span>
                    <span class="analog--hand--minutes" [ngClass]="minutesClass">
                        <span class="analog--ball" [ngClass]="{between: inBetween}"></span>
                    </span>
                </div>
                <div class="analog--hours">
                    <span *ngFor="let hour of HOURS" class="analog--hour" [ngClass]="{active: activeHour == hour}" (click)="setHours($event, hour, true)" [attr.data-automation-id]="hour">{{hour}}</span>
                </div>
                <div class="analog--minutes">
                    <span *ngFor="let minute of MINUTES" class="analog--minute" [ngClass]="{active: activeMinute == minute}" (click)="setMinutes($event, minute, true)" [attr.data-automation-id]="minute">{{minute}}</span>
                </div>
            </div>
        </div>
    `,
                host: {
                    '[class.military]': 'military',
                }
            }] }
];
NovoTimePickerElement.propDecorators = {
    military: [{ type: Input }],
    analog: [{ type: Input }],
    inline: [{ type: Input }],
    onSelect: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoTimePickerElement.prototype.military;
    /** @type {?} */
    NovoTimePickerElement.prototype.analog;
    /** @type {?} */
    NovoTimePickerElement.prototype.inline;
    /** @type {?} */
    NovoTimePickerElement.prototype.onSelect;
    /** @type {?} */
    NovoTimePickerElement.prototype.hours;
    /** @type {?} */
    NovoTimePickerElement.prototype.minutes;
    /** @type {?} */
    NovoTimePickerElement.prototype.value;
    /** @type {?} */
    NovoTimePickerElement.prototype.meridian;
    /** @type {?} */
    NovoTimePickerElement.prototype.inBetween;
    /** @type {?} */
    NovoTimePickerElement.prototype.hoursClass;
    /** @type {?} */
    NovoTimePickerElement.prototype.activeHour;
    /** @type {?} */
    NovoTimePickerElement.prototype.minutesClass;
    /** @type {?} */
    NovoTimePickerElement.prototype.activeMinute;
    /** @type {?} */
    NovoTimePickerElement.prototype.increments;
    /** @type {?} */
    NovoTimePickerElement.prototype.selected;
    /** @type {?} */
    NovoTimePickerElement.prototype.MERIDIANS;
    /** @type {?} */
    NovoTimePickerElement.prototype.MINUTES;
    /** @type {?} */
    NovoTimePickerElement.prototype.HOURS;
    /** @type {?} */
    NovoTimePickerElement.prototype.model;
    /** @type {?} */
    NovoTimePickerElement.prototype._onChange;
    /** @type {?} */
    NovoTimePickerElement.prototype._onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aW1lLXBpY2tlci9UaW1lUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7TUFHMUMsMEJBQTBCLEdBQUc7SUFDakMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFnREQsTUFBTSxPQUFPLHFCQUFxQjtJQTlDbEM7UUFnREUsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixVQUFLLEdBQVEsSUFBSSxDQUFDO1FBT2xCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFFMUIsY0FBUyxHQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxZQUFPLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRyxVQUFLLEdBQWtC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Q0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUFoTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0NQO2dCQUNILElBQUksRUFBRTtvQkFDSixrQkFBa0IsRUFBRSxVQUFVO2lCQUMvQjthQUNGOzs7dUJBRUUsS0FBSztxQkFFTCxLQUFLO3FCQUVMLEtBQUs7dUJBRUwsTUFBTTs7OztJQU5QLHlDQUMwQjs7SUFDMUIsdUNBQ3dCOztJQUN4Qix1Q0FDd0I7O0lBQ3hCLHlDQUNpRDs7SUFFakQsc0NBQW1COztJQUNuQix3Q0FBb0I7O0lBQ3BCLHNDQUFrQjs7SUFDbEIseUNBQWlCOztJQUNqQiwwQ0FBbUI7O0lBQ25CLDJDQUFtQjs7SUFDbkIsMkNBQVc7O0lBQ1gsNkNBQXFCOztJQUNyQiw2Q0FBYTs7SUFDYiwyQ0FBMEI7O0lBQzFCLHlDQUFpQjs7SUFDakIsMENBQXdDOztJQUN4Qyx3Q0FBa0c7O0lBQ2xHLHNDQUF1Rjs7SUFDdkYsc0NBQVc7O0lBQ1gsMENBQStCOztJQUMvQiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBUSU1FX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9UaW1lUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10aW1lLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW1RJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpZ2l0YWxcIiBbY2xhc3MuaW5saW5lXT1cImlubGluZVwiIFtjbGFzcy5taWxpdGFyeV09XCJtaWxpdGFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpZ2l0YWwtLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkaWdpdGFsLS1jbG9ja1wiICpuZ0lmPVwiIWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1ob3Vyc1wiPnt7aG91cnN9fTwvc3Bhbj46PHNwYW4gY2xhc3M9XCJtaW51dGVzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1taW51dGVzXCI+e3ttaW51dGVzfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWJsb2NrXCIgKm5nSWY9XCIhbWlsaXRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHBlcmlvZCBvZiBNRVJJRElBTlNcIiBjbGFzcz1cImRpZ2l0YWwtLXBlcmlvZFwiIFtjbGFzcy5hY3RpdmVdPVwibWVyaWRpYW49PXBlcmlvZFwiIChjbGljayk9XCJzZXRQZXJpb2QoJGV2ZW50LCBwZXJpb2QsIHRydWUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cInBlcmlvZFwiPnt7cGVyaW9kfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmNyZW1lbnRzXCIgKm5nSWY9XCIhYW5hbG9nXCI+XG4gICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1pbmNyZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBpbmNyZW1lbnQgb2YgaW5jcmVtZW50c1wiIChjbGljayk9XCJzZXRWYWx1ZSgkZXZlbnQsIGluY3JlbWVudClcIiBbY2xhc3MuYWN0aXZlXT1cImluY3JlbWVudD09c2VsZWN0ZWRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaW5jcmVtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+e3tpbmNyZW1lbnR9fTwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImluY3JlbWVudD09c2VsZWN0ZWRcIiBjbGFzcz1cImJoaS1jaGVja1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5hbG9nXCIgKm5nSWY9XCJhbmFsb2dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2ctLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0tZmFjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0tY2VudGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0taGFuZC0taG91cnNcIiBbbmdDbGFzc109XCJob3Vyc0NsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0tYmFsbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0taGFuZC0tbWludXRlc1wiIFtuZ0NsYXNzXT1cIm1pbnV0ZXNDbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbmFsb2ctLWJhbGxcIiBbbmdDbGFzc109XCJ7YmV0d2VlbjogaW5CZXR3ZWVufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2ctLWhvdXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBob3VyIG9mIEhPVVJTXCIgY2xhc3M9XCJhbmFsb2ctLWhvdXJcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBhY3RpdmVIb3VyID09IGhvdXJ9XCIgKGNsaWNrKT1cInNldEhvdXJzKCRldmVudCwgaG91ciwgdHJ1ZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaG91clwiPnt7aG91cn19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2ctLW1pbnV0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IG1pbnV0ZSBvZiBNSU5VVEVTXCIgY2xhc3M9XCJhbmFsb2ctLW1pbnV0ZVwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IGFjdGl2ZU1pbnV0ZSA9PSBtaW51dGV9XCIgKGNsaWNrKT1cInNldE1pbnV0ZXMoJGV2ZW50LCBtaW51dGUsIHRydWUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm1pbnV0ZVwiPnt7bWludXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubWlsaXRhcnldJzogJ21pbGl0YXJ5JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RpbWVQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgbWlsaXRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYW5hbG9nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlubGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGhvdXJzOiBudW1iZXIgPSAxMjtcbiAgbWludXRlczogbnVtYmVyID0gMDtcbiAgdmFsdWU6IGFueSA9IG51bGw7XG4gIG1lcmlkaWFuOiBzdHJpbmc7XG4gIGluQmV0d2VlbjogYm9vbGVhbjtcbiAgaG91cnNDbGFzczogc3RyaW5nO1xuICBhY3RpdmVIb3VyO1xuICBtaW51dGVzQ2xhc3M6IHN0cmluZztcbiAgYWN0aXZlTWludXRlO1xuICBpbmNyZW1lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDogc3RyaW5nO1xuICBNRVJJRElBTlM6IEFycmF5PHN0cmluZz4gPSBbJ2FtJywgJ3BtJ107XG4gIE1JTlVURVM6IEFycmF5PHN0cmluZz4gPSBbJzA1JywgJzEwJywgJzE1JywgJzIwJywgJzI1JywgJzMwJywgJzM1JywgJzQwJywgJzQ1JywgJzUwJywgJzU1JywgJzAwJ107XG4gIEhPVVJTOiBBcnJheTxzdHJpbmc+ID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddO1xuICBtb2RlbDogYW55O1xuICBfb25DaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgZmxhdHRlbihhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5hcnIpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLm1pbGl0YXJ5KSB7XG4gICAgICB0aGlzLkhPVVJTID0gWycwJywgLi4udGhpcy5IT1VSUywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJ107XG4gICAgICB0aGlzLmluY3JlbWVudHMgPSB0aGlzLmZsYXR0ZW4oWy4uLnRoaXMuSE9VUlMubWFwKChob3VyKSA9PiBbYCR7aG91cn06MDBgLCBgJHtob3VyfToxNWAsIGAke2hvdXJ9OjMwYCwgYCR7aG91cn06NDVgXSldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGhvdXJzOiBBcnJheTxzdHJpbmc+ID0gWycxMicsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMSddO1xuICAgICAgdGhpcy5pbmNyZW1lbnRzID0gdGhpcy5mbGF0dGVuKFtcbiAgICAgICAgLi4uaG91cnMubWFwKChob3VyKSA9PiBbYCR7aG91cn06MDAgQU1gLCBgJHtob3VyfToxNSBBTWAsIGAke2hvdXJ9OjMwIEFNYCwgYCR7aG91cn06NDUgQU1gXSksXG4gICAgICAgIC4uLmhvdXJzLm1hcCgoaG91cikgPT4gW2Ake2hvdXJ9OjAwIFBNYCwgYCR7aG91cn06MTUgUE1gLCBgJHtob3VyfTozMCBQTWAsIGAke2hvdXJ9OjQ1IFBNYF0pLFxuICAgICAgXSk7XG4gICAgfVxuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgIHRoaXMuaW5pdCh0aGlzLm1vZGVsLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgdGhpcy5pbml0KG5ldyBEYXRlKCksIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBpbml0KHZhbHVlLCBkaXNwYXRjaCkge1xuICAgIGxldCBfdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgbGV0IGhvdXJzOiBzdHJpbmcgfCBudW1iZXIgPSBfdmFsdWUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlczogc3RyaW5nIHwgbnVtYmVyID0gX3ZhbHVlLmdldE1pbnV0ZXMoKTtcblxuICAgIGlmICghdGhpcy5taWxpdGFyeSkge1xuICAgICAgdGhpcy5tZXJpZGlhbiA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG4gICAgICBob3VycyA9IGhvdXJzICUgMTI7XG4gICAgICBob3VycyA9IGhvdXJzIHx8IDEyO1xuICAgIH1cbiAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XG5cbiAgICB0aGlzLnNldEhvdXJzKG51bGwsIGhvdXJzLCBkaXNwYXRjaCk7XG4gICAgdGhpcy5zZXRNaW51dGVzKG51bGwsIG1pbnV0ZXMsIGRpc3BhdGNoKTtcbiAgICB0aGlzLmNoZWNrQmV0d2VlbihtaW51dGVzKTtcbiAgfVxuXG4gIGNoZWNrQmV0d2Vlbih2YWx1ZSkge1xuICAgIHRoaXMuaW5CZXR3ZWVuID0gdGhpcy5NSU5VVEVTLmluZGV4T2YoU3RyaW5nKHZhbHVlKSkgPCAwO1xuICB9XG5cbiAgc2V0VmFsdWUoZXZlbnQsIHZhbHVlKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICBsZXQgW3RpbWUsIG1lcmlkaWFuXSA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgbGV0IFtob3VycywgbWludXRlc10gPSB0aW1lLnNwbGl0KCc6Jyk7XG4gICAgdGhpcy5ob3VycyA9IGhvdXJzO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XG4gICAgdGhpcy5tZXJpZGlhbiA9IG1lcmlkaWFuO1xuXG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICB9XG5cbiAgc2V0SG91cnMoZXZlbnQsIGhvdXJzLCBkaXNwYXRjaCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmhvdXJzID0gaG91cnM7XG4gICAgdGhpcy5ob3Vyc0NsYXNzID0gYGhvdXItJHtob3Vyc31gO1xuICAgIHRoaXMuYWN0aXZlSG91ciA9IGhvdXJzO1xuXG4gICAgaWYgKGRpc3BhdGNoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0TWludXRlcyhldmVudCwgbWludXRlcywgZGlzcGF0Y2gpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5taW51dGVzID0gbWludXRlcztcbiAgICB0aGlzLm1pbnV0ZXNDbGFzcyA9IGBtaW4tJHttaW51dGVzfWA7XG4gICAgdGhpcy5hY3RpdmVNaW51dGUgPSBtaW51dGVzO1xuICAgIHRoaXMuY2hlY2tCZXR3ZWVuKG1pbnV0ZXMpO1xuXG4gICAgaWYgKGRpc3BhdGNoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UGVyaW9kKGV2ZW50LCBwZXJpb2QsIGRpc3BhdGNoKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMubWVyaWRpYW4gPSBwZXJpb2Q7XG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBkaXNwYXRjaENoYW5nZSgpIHtcbiAgICBsZXQgaG91cnMgPSBOdW1iZXIodGhpcy5ob3Vycyk7XG5cbiAgICBpZiAoIXRoaXMubWlsaXRhcnkpIHtcbiAgICAgIGhvdXJzID0gdGhpcy5tZXJpZGlhbi50b0xvd2VyQ2FzZSgpID09PSAncG0nID8gaG91cnMgKyAxMiA6IGhvdXJzO1xuXG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIDEyXG4gICAgICBpZiAodGhpcy5tZXJpZGlhbi50b0xvd2VyQ2FzZSgpID09PSAncG0nICYmIGhvdXJzID09PSAyNCkge1xuICAgICAgICBob3VycyA9IDEyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1lcmlkaWFuLnRvTG93ZXJDYXNlKCkgPT09ICdhbScgJiYgaG91cnMgPT09IDEyKSB7XG4gICAgICAgIGhvdXJzID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdmFsdWUgPSBuZXcgRGF0ZSgpO1xuICAgIHZhbHVlLnNldEhvdXJzKGhvdXJzKTtcbiAgICB2YWx1ZS5zZXRNaW51dGVzKHRoaXMubWludXRlcyk7XG4gICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICB0aGlzLnZhbHVlID0gYCR7dGhpcy5ob3Vyc306JHt0aGlzLm1pbnV0ZXN9ICR7dGhpcy5tZXJpZGlhbn1gO1xuICAgIHRoaXMub25TZWxlY3QubmV4dCh7XG4gICAgICBob3VyczogaG91cnMsXG4gICAgICBtaW51dGVzOiB0aGlzLm1pbnV0ZXMsXG4gICAgICBtZXJpZGlhbjogdGhpcy5tZXJpZGlhbixcbiAgICAgIGRhdGU6IHZhbHVlLFxuICAgICAgdGV4dDogdGhpcy52YWx1ZSxcbiAgICB9KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvLyBWYWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKEhlbHBlcnMuaXNEYXRlKG1vZGVsKSkge1xuICAgICAgdGhpcy5pbml0KG1vZGVsLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==