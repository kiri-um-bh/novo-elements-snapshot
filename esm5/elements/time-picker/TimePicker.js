/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from './../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var TIME_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoTimePickerElement; }),
    multi: true,
};
var NovoTimePickerElement = /** @class */ (function () {
    function NovoTimePickerElement() {
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
        this._onChange = function () { };
        this._onTouched = function () { };
    }
    /**
     * @param {?} arr
     * @return {?}
     */
    NovoTimePickerElement.prototype.flatten = /**
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        var _a;
        return (_a = Array.prototype).concat.apply(_a, tslib_1.__spread(arr));
    };
    /**
     * @return {?}
     */
    NovoTimePickerElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.military) {
            this.HOURS = tslib_1.__spread(['0'], this.HOURS, ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']);
            this.increments = this.flatten(tslib_1.__spread(this.HOURS.map(function (hour) { return [hour + ":00", hour + ":15", hour + ":30", hour + ":45"]; })));
        }
        else {
            /** @type {?} */
            var hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
            this.increments = this.flatten(tslib_1.__spread(hours.map(function (hour) { return [hour + ":00 AM", hour + ":15 AM", hour + ":30 AM", hour + ":45 AM"]; }), hours.map(function (hour) { return [hour + ":00 PM", hour + ":15 PM", hour + ":30 PM", hour + ":45 PM"]; })));
        }
        this.ngOnChanges();
    };
    /**
     * @param {?=} changes
     * @return {?}
     */
    NovoTimePickerElement.prototype.ngOnChanges = /**
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        if (this.model) {
            this.init(this.model, false);
        }
        else {
            this.selected = null;
            this.init(new Date(), false);
        }
    };
    /**
     * @param {?} value
     * @param {?} dispatch
     * @return {?}
     */
    NovoTimePickerElement.prototype.init = /**
     * @param {?} value
     * @param {?} dispatch
     * @return {?}
     */
    function (value, dispatch) {
        /** @type {?} */
        var _value = new Date(value);
        /** @type {?} */
        var hours = _value.getHours();
        /** @type {?} */
        var minutes = _value.getMinutes();
        if (!this.military) {
            this.meridian = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours || 12;
        }
        minutes = minutes < 10 ? "0" + minutes : minutes;
        this.setHours(null, hours, dispatch);
        this.setMinutes(null, minutes, dispatch);
        this.checkBetween(minutes);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoTimePickerElement.prototype.checkBetween = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inBetween = this.MINUTES.indexOf(String(value)) < 0;
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    NovoTimePickerElement.prototype.setValue = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        Helpers.swallowEvent(event);
        this.selected = value;
        var _a = tslib_1.__read(value.split(' '), 2), time = _a[0], meridian = _a[1];
        var _b = tslib_1.__read(time.split(':'), 2), hours = _b[0], minutes = _b[1];
        this.hours = hours;
        this.minutes = minutes;
        this.meridian = meridian;
        this.dispatchChange();
    };
    /**
     * @param {?} event
     * @param {?} hours
     * @param {?} dispatch
     * @return {?}
     */
    NovoTimePickerElement.prototype.setHours = /**
     * @param {?} event
     * @param {?} hours
     * @param {?} dispatch
     * @return {?}
     */
    function (event, hours, dispatch) {
        Helpers.swallowEvent(event);
        this.hours = hours;
        this.hoursClass = "hour-" + hours;
        this.activeHour = hours;
        if (dispatch) {
            this.dispatchChange();
        }
    };
    /**
     * @param {?} event
     * @param {?} minutes
     * @param {?} dispatch
     * @return {?}
     */
    NovoTimePickerElement.prototype.setMinutes = /**
     * @param {?} event
     * @param {?} minutes
     * @param {?} dispatch
     * @return {?}
     */
    function (event, minutes, dispatch) {
        Helpers.swallowEvent(event);
        this.minutes = minutes;
        this.minutesClass = "min-" + minutes;
        this.activeMinute = minutes;
        this.checkBetween(minutes);
        if (dispatch) {
            this.dispatchChange();
        }
    };
    /**
     * @param {?} event
     * @param {?} period
     * @param {?} dispatch
     * @return {?}
     */
    NovoTimePickerElement.prototype.setPeriod = /**
     * @param {?} event
     * @param {?} period
     * @param {?} dispatch
     * @return {?}
     */
    function (event, period, dispatch) {
        Helpers.swallowEvent(event);
        this.meridian = period;
        if (dispatch) {
            this.dispatchChange();
        }
    };
    /**
     * @return {?}
     */
    NovoTimePickerElement.prototype.dispatchChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hours = Number(this.hours);
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
        var value = new Date();
        value.setHours(hours);
        value.setMinutes(this.minutes);
        value.setSeconds(0);
        this.value = this.hours + ":" + this.minutes + " " + this.meridian;
        this.onSelect.next({
            hours: hours,
            minutes: this.minutes,
            meridian: this.meridian,
            date: value,
            text: this.value,
        });
        this._onChange(value);
    };
    // ValueAccessor Functions
    // ValueAccessor Functions
    /**
     * @param {?} model
     * @return {?}
     */
    NovoTimePickerElement.prototype.writeValue = 
    // ValueAccessor Functions
    /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
        if (Helpers.isDate(model)) {
            this.init(model, false);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoTimePickerElement.prototype.registerOnChange = /**
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
    NovoTimePickerElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    NovoTimePickerElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-time-picker',
                    providers: [TIME_PICKER_VALUE_ACCESSOR],
                    template: "\n        <div class=\"digital\" [class.inline]=\"inline\" [class.military]=\"military\">\n            <div class=\"digital--inner\">\n                <span class=\"digital--clock\" *ngIf=\"!inline\">\n                    <span class=\"hours\" data-automation-id=\"novo-time-picker-hours\">{{hours}}</span>:<span class=\"minutes\" data-automation-id=\"novo-time-picker-minutes\">{{minutes}}</span>\n                </span>\n                <div class=\"control-block\" *ngIf=\"!military\">\n                    <span *ngFor=\"let period of MERIDIANS\" class=\"digital--period\" [class.active]=\"meridian==period\" (click)=\"setPeriod($event, period, true)\" [attr.data-automation-id]=\"period\">{{period}}</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"increments\" *ngIf=\"!analog\">\n            <novo-list direction=\"vertical\" data-automation-id=\"novo-time-picker-increments\">\n                <novo-list-item *ngFor=\"let increment of increments\" (click)=\"setValue($event, increment)\" [class.active]=\"increment==selected\" [attr.data-automation-id]=\"increment\">\n                    <item-content>{{increment}}</item-content>\n                    <i *ngIf=\"increment==selected\" class=\"bhi-check\"></i>\n                </novo-list-item>\n            </novo-list>\n        </div>\n        <div class=\"analog\" *ngIf=\"analog\">\n            <div class=\"analog--inner\">\n                <div class=\"analog--face\">\n                    <span class=\"analog--center\"></span>\n                    <span class=\"analog--hand--hours\" [ngClass]=\"hoursClass\">\n                        <span class=\"analog--ball\"></span>\n                    </span>\n                    <span class=\"analog--hand--minutes\" [ngClass]=\"minutesClass\">\n                        <span class=\"analog--ball\" [ngClass]=\"{between: inBetween}\"></span>\n                    </span>\n                </div>\n                <div class=\"analog--hours\">\n                    <span *ngFor=\"let hour of HOURS\" class=\"analog--hour\" [ngClass]=\"{active: activeHour == hour}\" (click)=\"setHours($event, hour, true)\" [attr.data-automation-id]=\"hour\">{{hour}}</span>\n                </div>\n                <div class=\"analog--minutes\">\n                    <span *ngFor=\"let minute of MINUTES\" class=\"analog--minute\" [ngClass]=\"{active: activeMinute == minute}\" (click)=\"setMinutes($event, minute, true)\" [attr.data-automation-id]=\"minute\">{{minute}}</span>\n                </div>\n            </div>\n        </div>\n    ",
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
    return NovoTimePickerElement;
}());
export { NovoTimePickerElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aW1lLXBpY2tlci9UaW1lUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0lBRzFDLDBCQUEwQixHQUFHO0lBQ2pDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLENBQUM7SUFDcEQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBQUE7UUFnREUsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixVQUFLLEdBQVEsSUFBSSxDQUFDO1FBT2xCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFFMUIsY0FBUyxHQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxZQUFPLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRyxVQUFLLEdBQWtCLENBQUMsR0FBRyxF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SUFDSCxDQUFDOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixFQUFZO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsaURBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBaE5GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztvQkFDdkMsUUFBUSxFQUFFLG9oRkFzQ1A7b0JBQ0gsSUFBSSxFQUFFO3dCQUNKLGtCQUFrQixFQUFFLFVBQVU7cUJBQy9CO2lCQUNGOzs7MkJBRUUsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLEtBQUs7MkJBRUwsTUFBTTs7SUE0SlQsNEJBQUM7Q0FBQSxBQWpORCxJQWlOQztTQW5LWSxxQkFBcUI7OztJQUNoQyx5Q0FDMEI7O0lBQzFCLHVDQUN3Qjs7SUFDeEIsdUNBQ3dCOztJQUN4Qix5Q0FDaUQ7O0lBRWpELHNDQUFtQjs7SUFDbkIsd0NBQW9COztJQUNwQixzQ0FBa0I7O0lBQ2xCLHlDQUFpQjs7SUFDakIsMENBQW1COztJQUNuQiwyQ0FBbUI7O0lBQ25CLDJDQUFXOztJQUNYLDZDQUFxQjs7SUFDckIsNkNBQWE7O0lBQ2IsMkNBQTBCOztJQUMxQix5Q0FBaUI7O0lBQ2pCLDBDQUF3Qzs7SUFDeEMsd0NBQWtHOztJQUNsRyxzQ0FBdUY7O0lBQ3ZGLHNDQUFXOztJQUNYLDBDQUErQjs7SUFDL0IsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgVElNRV9QSUNLRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvVGltZVBpY2tlckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGltZS1waWNrZXInLFxuICBwcm92aWRlcnM6IFtUSU1FX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWdpdGFsXCIgW2NsYXNzLmlubGluZV09XCJpbmxpbmVcIiBbY2xhc3MubWlsaXRhcnldPVwibWlsaXRhcnlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWdpdGFsLS1pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGlnaXRhbC0tY2xvY2tcIiAqbmdJZj1cIiFpbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Vyc1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tdGltZS1waWNrZXItaG91cnNcIj57e2hvdXJzfX08L3NwYW4+OjxzcGFuIGNsYXNzPVwibWludXRlc1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tdGltZS1waWNrZXItbWludXRlc1wiPnt7bWludXRlc319PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC1ibG9ja1wiICpuZ0lmPVwiIW1pbGl0YXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBwZXJpb2Qgb2YgTUVSSURJQU5TXCIgY2xhc3M9XCJkaWdpdGFsLS1wZXJpb2RcIiBbY2xhc3MuYWN0aXZlXT1cIm1lcmlkaWFuPT1wZXJpb2RcIiAoY2xpY2spPVwic2V0UGVyaW9kKCRldmVudCwgcGVyaW9kLCB0cnVlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJwZXJpb2RcIj57e3BlcmlvZH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5jcmVtZW50c1wiICpuZ0lmPVwiIWFuYWxvZ1wiPlxuICAgICAgICAgICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tdGltZS1waWNrZXItaW5jcmVtZW50c1wiPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgaW5jcmVtZW50IG9mIGluY3JlbWVudHNcIiAoY2xpY2spPVwic2V0VmFsdWUoJGV2ZW50LCBpbmNyZW1lbnQpXCIgW2NsYXNzLmFjdGl2ZV09XCJpbmNyZW1lbnQ9PXNlbGVjdGVkXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImluY3JlbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50Pnt7aW5jcmVtZW50fX08L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJpbmNyZW1lbnQ9PXNlbGVjdGVkXCIgY2xhc3M9XCJiaGktY2hlY2tcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZ1wiICpuZ0lmPVwiYW5hbG9nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5hbG9nLS1pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2ctLWZhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbmFsb2ctLWNlbnRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbmFsb2ctLWhhbmQtLWhvdXJzXCIgW25nQ2xhc3NdPVwiaG91cnNDbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbmFsb2ctLWJhbGxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbmFsb2ctLWhhbmQtLW1pbnV0ZXNcIiBbbmdDbGFzc109XCJtaW51dGVzQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW5hbG9nLS1iYWxsXCIgW25nQ2xhc3NdPVwie2JldHdlZW46IGluQmV0d2Vlbn1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5hbG9nLS1ob3Vyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgaG91ciBvZiBIT1VSU1wiIGNsYXNzPVwiYW5hbG9nLS1ob3VyXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTogYWN0aXZlSG91ciA9PSBob3VyfVwiIChjbGljayk9XCJzZXRIb3VycygkZXZlbnQsIGhvdXIsIHRydWUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImhvdXJcIj57e2hvdXJ9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5hbG9nLS1taW51dGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBtaW51dGUgb2YgTUlOVVRFU1wiIGNsYXNzPVwiYW5hbG9nLS1taW51dGVcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBhY3RpdmVNaW51dGUgPT0gbWludXRlfVwiIChjbGljayk9XCJzZXRNaW51dGVzKCRldmVudCwgbWludXRlLCB0cnVlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJtaW51dGVcIj57e21pbnV0ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm1pbGl0YXJ5XSc6ICdtaWxpdGFyeScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UaW1lUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIG1pbGl0YXJ5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGFuYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBpbmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBob3VyczogbnVtYmVyID0gMTI7XG4gIG1pbnV0ZXM6IG51bWJlciA9IDA7XG4gIHZhbHVlOiBhbnkgPSBudWxsO1xuICBtZXJpZGlhbjogc3RyaW5nO1xuICBpbkJldHdlZW46IGJvb2xlYW47XG4gIGhvdXJzQ2xhc3M6IHN0cmluZztcbiAgYWN0aXZlSG91cjtcbiAgbWludXRlc0NsYXNzOiBzdHJpbmc7XG4gIGFjdGl2ZU1pbnV0ZTtcbiAgaW5jcmVtZW50czogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQ6IHN0cmluZztcbiAgTUVSSURJQU5TOiBBcnJheTxzdHJpbmc+ID0gWydhbScsICdwbSddO1xuICBNSU5VVEVTOiBBcnJheTxzdHJpbmc+ID0gWycwNScsICcxMCcsICcxNScsICcyMCcsICcyNScsICczMCcsICczNScsICc0MCcsICc0NScsICc1MCcsICc1NScsICcwMCddO1xuICBIT1VSUzogQXJyYXk8c3RyaW5nPiA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXTtcbiAgbW9kZWw6IGFueTtcbiAgX29uQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBfb25Ub3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGZsYXR0ZW4oYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoLi4uYXJyKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5taWxpdGFyeSkge1xuICAgICAgdGhpcy5IT1VSUyA9IFsnMCcsIC4uLnRoaXMuSE9VUlMsICcxMycsICcxNCcsICcxNScsICcxNicsICcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMyddO1xuICAgICAgdGhpcy5pbmNyZW1lbnRzID0gdGhpcy5mbGF0dGVuKFsuLi50aGlzLkhPVVJTLm1hcCgoaG91cikgPT4gW2Ake2hvdXJ9OjAwYCwgYCR7aG91cn06MTVgLCBgJHtob3VyfTozMGAsIGAke2hvdXJ9OjQ1YF0pXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBob3VyczogQXJyYXk8c3RyaW5nPiA9IFsnMTInLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnXTtcbiAgICAgIHRoaXMuaW5jcmVtZW50cyA9IHRoaXMuZmxhdHRlbihbXG4gICAgICAgIC4uLmhvdXJzLm1hcCgoaG91cikgPT4gW2Ake2hvdXJ9OjAwIEFNYCwgYCR7aG91cn06MTUgQU1gLCBgJHtob3VyfTozMCBBTWAsIGAke2hvdXJ9OjQ1IEFNYF0pLFxuICAgICAgICAuLi5ob3Vycy5tYXAoKGhvdXIpID0+IFtgJHtob3VyfTowMCBQTWAsIGAke2hvdXJ9OjE1IFBNYCwgYCR7aG91cn06MzAgUE1gLCBgJHtob3VyfTo0NSBQTWBdKSxcbiAgICAgIF0pO1xuICAgIH1cbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLmluaXQodGhpcy5tb2RlbCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICAgIHRoaXMuaW5pdChuZXcgRGF0ZSgpLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgaW5pdCh2YWx1ZSwgZGlzcGF0Y2gpIHtcbiAgICBsZXQgX3ZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xuICAgIGxldCBob3Vyczogc3RyaW5nIHwgbnVtYmVyID0gX3ZhbHVlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXM6IHN0cmluZyB8IG51bWJlciA9IF92YWx1ZS5nZXRNaW51dGVzKCk7XG5cbiAgICBpZiAoIXRoaXMubWlsaXRhcnkpIHtcbiAgICAgIHRoaXMubWVyaWRpYW4gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuICAgICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgICAgaG91cnMgPSBob3VycyB8fCAxMjtcbiAgICB9XG4gICAgbWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzO1xuXG4gICAgdGhpcy5zZXRIb3VycyhudWxsLCBob3VycywgZGlzcGF0Y2gpO1xuICAgIHRoaXMuc2V0TWludXRlcyhudWxsLCBtaW51dGVzLCBkaXNwYXRjaCk7XG4gICAgdGhpcy5jaGVja0JldHdlZW4obWludXRlcyk7XG4gIH1cblxuICBjaGVja0JldHdlZW4odmFsdWUpIHtcbiAgICB0aGlzLmluQmV0d2VlbiA9IHRoaXMuTUlOVVRFUy5pbmRleE9mKFN0cmluZyh2YWx1ZSkpIDwgMDtcbiAgfVxuXG4gIHNldFZhbHVlKGV2ZW50LCB2YWx1ZSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgbGV0IFt0aW1lLCBtZXJpZGlhbl0gPSB2YWx1ZS5zcGxpdCgnICcpO1xuICAgIGxldCBbaG91cnMsIG1pbnV0ZXNdID0gdGltZS5zcGxpdCgnOicpO1xuICAgIHRoaXMuaG91cnMgPSBob3VycztcbiAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzO1xuICAgIHRoaXMubWVyaWRpYW4gPSBtZXJpZGlhbjtcblxuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgfVxuXG4gIHNldEhvdXJzKGV2ZW50LCBob3VycywgZGlzcGF0Y2gpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5ob3VycyA9IGhvdXJzO1xuICAgIHRoaXMuaG91cnNDbGFzcyA9IGBob3VyLSR7aG91cnN9YDtcbiAgICB0aGlzLmFjdGl2ZUhvdXIgPSBob3VycztcblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldE1pbnV0ZXMoZXZlbnQsIG1pbnV0ZXMsIGRpc3BhdGNoKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XG4gICAgdGhpcy5taW51dGVzQ2xhc3MgPSBgbWluLSR7bWludXRlc31gO1xuICAgIHRoaXMuYWN0aXZlTWludXRlID0gbWludXRlcztcbiAgICB0aGlzLmNoZWNrQmV0d2VlbihtaW51dGVzKTtcblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFBlcmlvZChldmVudCwgcGVyaW9kLCBkaXNwYXRjaCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLm1lcmlkaWFuID0gcGVyaW9kO1xuXG4gICAgaWYgKGRpc3BhdGNoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGF0Y2hDaGFuZ2UoKSB7XG4gICAgbGV0IGhvdXJzID0gTnVtYmVyKHRoaXMuaG91cnMpO1xuXG4gICAgaWYgKCF0aGlzLm1pbGl0YXJ5KSB7XG4gICAgICBob3VycyA9IHRoaXMubWVyaWRpYW4udG9Mb3dlckNhc2UoKSA9PT0gJ3BtJyA/IGhvdXJzICsgMTIgOiBob3VycztcblxuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciAxMlxuICAgICAgaWYgKHRoaXMubWVyaWRpYW4udG9Mb3dlckNhc2UoKSA9PT0gJ3BtJyAmJiBob3VycyA9PT0gMjQpIHtcbiAgICAgICAgaG91cnMgPSAxMjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZXJpZGlhbi50b0xvd2VyQ2FzZSgpID09PSAnYW0nICYmIGhvdXJzID09PSAxMikge1xuICAgICAgICBob3VycyA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlID0gbmV3IERhdGUoKTtcbiAgICB2YWx1ZS5zZXRIb3Vycyhob3Vycyk7XG4gICAgdmFsdWUuc2V0TWludXRlcyh0aGlzLm1pbnV0ZXMpO1xuICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG4gICAgdGhpcy52YWx1ZSA9IGAke3RoaXMuaG91cnN9OiR7dGhpcy5taW51dGVzfSAke3RoaXMubWVyaWRpYW59YDtcbiAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgbWludXRlczogdGhpcy5taW51dGVzLFxuICAgICAgbWVyaWRpYW46IHRoaXMubWVyaWRpYW4sXG4gICAgICBkYXRlOiB2YWx1ZSxcbiAgICAgIHRleHQ6IHRoaXMudmFsdWUsXG4gICAgfSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgLy8gVmFsdWVBY2Nlc3NvciBGdW5jdGlvbnNcbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIGlmIChIZWxwZXJzLmlzRGF0ZShtb2RlbCkpIHtcbiAgICAgIHRoaXMuaW5pdChtb2RlbCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=