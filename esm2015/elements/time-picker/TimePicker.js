/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aW1lLXBpY2tlci9UaW1lUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7TUFHMUMsMEJBQTBCLEdBQUc7SUFDakMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFnREQsTUFBTTtJQTlDTjtRQWdERSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFVBQUssR0FBUSxJQUFJLENBQUM7UUFPbEIsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUUxQixjQUFTLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLFlBQU8sR0FBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xHLFVBQUssR0FBa0IsQ0FBQyxHQUFHLEVB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ekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OztZQWhORixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FzQ1A7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLGtCQUFrQixFQUFFLFVBQVU7aUJBQy9CO2FBQ0Y7Ozt1QkFFRSxLQUFLO3FCQUVMLEtBQUs7cUJBRUwsS0FBSzt1QkFFTCxNQUFNOzs7O0lBTlAseUNBQzBCOztJQUMxQix1Q0FDd0I7O0lBQ3hCLHVDQUN3Qjs7SUFDeEIseUNBQ2lEOztJQUVqRCxzQ0FBbUI7O0lBQ25CLHdDQUFvQjs7SUFDcEIsc0NBQWtCOztJQUNsQix5Q0FBaUI7O0lBQ2pCLDBDQUFtQjs7SUFDbkIsMkNBQW1COztJQUNuQiwyQ0FBVzs7SUFDWCw2Q0FBcUI7O0lBQ3JCLDZDQUFhOztJQUNiLDJDQUEwQjs7SUFDMUIseUNBQWlCOztJQUNqQiwwQ0FBd0M7O0lBQ3hDLHdDQUFrRzs7SUFDbEcsc0NBQXVGOztJQUN2RixzQ0FBVzs7SUFDWCwwQ0FBK0I7O0lBQy9CLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFRJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1RpbWVQaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRpbWUtcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbVElNRV9QSUNLRVJfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlnaXRhbFwiIFtjbGFzcy5pbmxpbmVdPVwiaW5saW5lXCIgW2NsYXNzLm1pbGl0YXJ5XT1cIm1pbGl0YXJ5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlnaXRhbC0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRpZ2l0YWwtLWNsb2NrXCIgKm5nSWY9XCIhaW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91cnNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLWhvdXJzXCI+e3tob3Vyc319PC9zcGFuPjo8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLW1pbnV0ZXNcIj57e21pbnV0ZXN9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtYmxvY2tcIiAqbmdJZj1cIiFtaWxpdGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgcGVyaW9kIG9mIE1FUklESUFOU1wiIGNsYXNzPVwiZGlnaXRhbC0tcGVyaW9kXCIgW2NsYXNzLmFjdGl2ZV09XCJtZXJpZGlhbj09cGVyaW9kXCIgKGNsaWNrKT1cInNldFBlcmlvZCgkZXZlbnQsIHBlcmlvZCwgdHJ1ZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwicGVyaW9kXCI+e3twZXJpb2R9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluY3JlbWVudHNcIiAqbmdJZj1cIiFhbmFsb2dcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXRpbWUtcGlja2VyLWluY3JlbWVudHNcIj5cbiAgICAgICAgICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGluY3JlbWVudCBvZiBpbmNyZW1lbnRzXCIgKGNsaWNrKT1cInNldFZhbHVlKCRldmVudCwgaW5jcmVtZW50KVwiIFtjbGFzcy5hY3RpdmVdPVwiaW5jcmVtZW50PT1zZWxlY3RlZFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJpbmNyZW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD57e2luY3JlbWVudH19PC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiaW5jcmVtZW50PT1zZWxlY3RlZFwiIGNsYXNzPVwiYmhpLWNoZWNrXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2dcIiAqbmdJZj1cImFuYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5hbG9nLS1mYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1jZW50ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1oYW5kLS1ob3Vyc1wiIFtuZ0NsYXNzXT1cImhvdXJzQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1iYWxsXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1oYW5kLS1taW51dGVzXCIgW25nQ2xhc3NdPVwibWludXRlc0NsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0tYmFsbFwiIFtuZ0NsYXNzXT1cIntiZXR3ZWVuOiBpbkJldHdlZW59XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0taG91cnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGhvdXIgb2YgSE9VUlNcIiBjbGFzcz1cImFuYWxvZy0taG91clwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IGFjdGl2ZUhvdXIgPT0gaG91cn1cIiAoY2xpY2spPVwic2V0SG91cnMoJGV2ZW50LCBob3VyLCB0cnVlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJob3VyXCI+e3tob3VyfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0tbWludXRlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgbWludXRlIG9mIE1JTlVURVNcIiBjbGFzcz1cImFuYWxvZy0tbWludXRlXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTogYWN0aXZlTWludXRlID09IG1pbnV0ZX1cIiAoY2xpY2spPVwic2V0TWludXRlcygkZXZlbnQsIG1pbnV0ZSwgdHJ1ZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwibWludXRlXCI+e3ttaW51dGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5taWxpdGFyeV0nOiAnbWlsaXRhcnknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGltZVBpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBtaWxpdGFyeTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBhbmFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaW5saW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaG91cnM6IG51bWJlciA9IDEyO1xuICBtaW51dGVzOiBudW1iZXIgPSAwO1xuICB2YWx1ZTogYW55ID0gbnVsbDtcbiAgbWVyaWRpYW46IHN0cmluZztcbiAgaW5CZXR3ZWVuOiBib29sZWFuO1xuICBob3Vyc0NsYXNzOiBzdHJpbmc7XG4gIGFjdGl2ZUhvdXI7XG4gIG1pbnV0ZXNDbGFzczogc3RyaW5nO1xuICBhY3RpdmVNaW51dGU7XG4gIGluY3JlbWVudHM6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkOiBzdHJpbmc7XG4gIE1FUklESUFOUzogQXJyYXk8c3RyaW5nPiA9IFsnYW0nLCAncG0nXTtcbiAgTUlOVVRFUzogQXJyYXk8c3RyaW5nPiA9IFsnMDUnLCAnMTAnLCAnMTUnLCAnMjAnLCAnMjUnLCAnMzAnLCAnMzUnLCAnNDAnLCAnNDUnLCAnNTAnLCAnNTUnLCAnMDAnXTtcbiAgSE9VUlM6IEFycmF5PHN0cmluZz4gPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ107XG4gIG1vZGVsOiBhbnk7XG4gIF9vbkNoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgX29uVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBmbGF0dGVuKGFycikge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLmFycik7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubWlsaXRhcnkpIHtcbiAgICAgIHRoaXMuSE9VUlMgPSBbJzAnLCAuLi50aGlzLkhPVVJTLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnXTtcbiAgICAgIHRoaXMuaW5jcmVtZW50cyA9IHRoaXMuZmxhdHRlbihbLi4udGhpcy5IT1VSUy5tYXAoKGhvdXIpID0+IFtgJHtob3VyfTowMGAsIGAke2hvdXJ9OjE1YCwgYCR7aG91cn06MzBgLCBgJHtob3VyfTo0NWBdKV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaG91cnM6IEFycmF5PHN0cmluZz4gPSBbJzEyJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJ107XG4gICAgICB0aGlzLmluY3JlbWVudHMgPSB0aGlzLmZsYXR0ZW4oW1xuICAgICAgICAuLi5ob3Vycy5tYXAoKGhvdXIpID0+IFtgJHtob3VyfTowMCBBTWAsIGAke2hvdXJ9OjE1IEFNYCwgYCR7aG91cn06MzAgQU1gLCBgJHtob3VyfTo0NSBBTWBdKSxcbiAgICAgICAgLi4uaG91cnMubWFwKChob3VyKSA9PiBbYCR7aG91cn06MDAgUE1gLCBgJHtob3VyfToxNSBQTWAsIGAke2hvdXJ9OjMwIFBNYCwgYCR7aG91cn06NDUgUE1gXSksXG4gICAgICBdKTtcbiAgICB9XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy5pbml0KHRoaXMubW9kZWwsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICB0aGlzLmluaXQobmV3IERhdGUoKSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQodmFsdWUsIGRpc3BhdGNoKSB7XG4gICAgbGV0IF92YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICBsZXQgaG91cnM6IHN0cmluZyB8IG51bWJlciA9IF92YWx1ZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzOiBzdHJpbmcgfCBudW1iZXIgPSBfdmFsdWUuZ2V0TWludXRlcygpO1xuXG4gICAgaWYgKCF0aGlzLm1pbGl0YXJ5KSB7XG4gICAgICB0aGlzLm1lcmlkaWFuID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcbiAgICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICAgIGhvdXJzID0gaG91cnMgfHwgMTI7XG4gICAgfVxuICAgIG1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyBgMCR7bWludXRlc31gIDogbWludXRlcztcblxuICAgIHRoaXMuc2V0SG91cnMobnVsbCwgaG91cnMsIGRpc3BhdGNoKTtcbiAgICB0aGlzLnNldE1pbnV0ZXMobnVsbCwgbWludXRlcywgZGlzcGF0Y2gpO1xuICAgIHRoaXMuY2hlY2tCZXR3ZWVuKG1pbnV0ZXMpO1xuICB9XG5cbiAgY2hlY2tCZXR3ZWVuKHZhbHVlKSB7XG4gICAgdGhpcy5pbkJldHdlZW4gPSB0aGlzLk1JTlVURVMuaW5kZXhPZihTdHJpbmcodmFsdWUpKSA8IDA7XG4gIH1cblxuICBzZXRWYWx1ZShldmVudCwgdmFsdWUpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIGxldCBbdGltZSwgbWVyaWRpYW5dID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICBsZXQgW2hvdXJzLCBtaW51dGVzXSA9IHRpbWUuc3BsaXQoJzonKTtcbiAgICB0aGlzLmhvdXJzID0gaG91cnM7XG4gICAgdGhpcy5taW51dGVzID0gbWludXRlcztcbiAgICB0aGlzLm1lcmlkaWFuID0gbWVyaWRpYW47XG5cbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gIH1cblxuICBzZXRIb3VycyhldmVudCwgaG91cnMsIGRpc3BhdGNoKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuaG91cnMgPSBob3VycztcbiAgICB0aGlzLmhvdXJzQ2xhc3MgPSBgaG91ci0ke2hvdXJzfWA7XG4gICAgdGhpcy5hY3RpdmVIb3VyID0gaG91cnM7XG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRNaW51dGVzKGV2ZW50LCBtaW51dGVzLCBkaXNwYXRjaCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzO1xuICAgIHRoaXMubWludXRlc0NsYXNzID0gYG1pbi0ke21pbnV0ZXN9YDtcbiAgICB0aGlzLmFjdGl2ZU1pbnV0ZSA9IG1pbnV0ZXM7XG4gICAgdGhpcy5jaGVja0JldHdlZW4obWludXRlcyk7XG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRQZXJpb2QoZXZlbnQsIHBlcmlvZCwgZGlzcGF0Y2gpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5tZXJpZGlhbiA9IHBlcmlvZDtcblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlKCkge1xuICAgIGxldCBob3VycyA9IE51bWJlcih0aGlzLmhvdXJzKTtcblxuICAgIGlmICghdGhpcy5taWxpdGFyeSkge1xuICAgICAgaG91cnMgPSB0aGlzLm1lcmlkaWFuLnRvTG93ZXJDYXNlKCkgPT09ICdwbScgPyBob3VycyArIDEyIDogaG91cnM7XG5cbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgMTJcbiAgICAgIGlmICh0aGlzLm1lcmlkaWFuLnRvTG93ZXJDYXNlKCkgPT09ICdwbScgJiYgaG91cnMgPT09IDI0KSB7XG4gICAgICAgIGhvdXJzID0gMTI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVyaWRpYW4udG9Mb3dlckNhc2UoKSA9PT0gJ2FtJyAmJiBob3VycyA9PT0gMTIpIHtcbiAgICAgICAgaG91cnMgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB2YWx1ZSA9IG5ldyBEYXRlKCk7XG4gICAgdmFsdWUuc2V0SG91cnMoaG91cnMpO1xuICAgIHZhbHVlLnNldE1pbnV0ZXModGhpcy5taW51dGVzKTtcbiAgICB2YWx1ZS5zZXRTZWNvbmRzKDApO1xuICAgIHRoaXMudmFsdWUgPSBgJHt0aGlzLmhvdXJzfToke3RoaXMubWludXRlc30gJHt0aGlzLm1lcmlkaWFufWA7XG4gICAgdGhpcy5vblNlbGVjdC5uZXh0KHtcbiAgICAgIGhvdXJzOiBob3VycyxcbiAgICAgIG1pbnV0ZXM6IHRoaXMubWludXRlcyxcbiAgICAgIG1lcmlkaWFuOiB0aGlzLm1lcmlkaWFuLFxuICAgICAgZGF0ZTogdmFsdWUsXG4gICAgICB0ZXh0OiB0aGlzLnZhbHVlLFxuICAgIH0pO1xuICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFZhbHVlQWNjZXNzb3IgRnVuY3Rpb25zXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICBpZiAoSGVscGVycy5pc0RhdGUobW9kZWwpKSB7XG4gICAgICB0aGlzLmluaXQobW9kZWwsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19