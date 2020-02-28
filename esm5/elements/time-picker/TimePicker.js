/**
 * @fileoverview added by tsickle
 * Generated from: elements/time-picker/TimePicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoTimePickerElement; })),
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
            this.increments = this.flatten(tslib_1.__spread(this.HOURS.map((/**
             * @param {?} hour
             * @return {?}
             */
            function (hour) { return [hour + ":00", hour + ":15", hour + ":30", hour + ":45"]; }))));
        }
        else {
            /** @type {?} */
            var hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
            this.increments = this.flatten(tslib_1.__spread(hours.map((/**
             * @param {?} hour
             * @return {?}
             */
            function (hour) { return [hour + ":00 AM", hour + ":15 AM", hour + ":30 AM", hour + ":45 AM"]; })), hours.map((/**
             * @param {?} hour
             * @return {?}
             */
            function (hour) { return [hour + ":00 PM", hour + ":15 PM", hour + ":30 PM", hour + ":45 PM"]; }))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aW1lLXBpY2tlci9UaW1lUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztJQUcxQywwQkFBMEIsR0FBRztJQUNqQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLEVBQUM7SUFDcEQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBQUE7UUFnREUsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixVQUFLLEdBQVEsSUFBSSxDQUFDO1FBT2xCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFFMUIsY0FBUyxHQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxZQUFPLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRyxVQUFLLEdBQWtCLENBQUMsR0FB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QUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRUQsZ0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkFoTkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUN2QyxRQUFRLEVBQUUsb2hGQXNDUDtvQkFDSCxJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsVUFBVTtxQkFDL0I7aUJBQ0Y7OzsyQkFFRSxLQUFLO3lCQUVMLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxNQUFNOztJQTRKVCw0QkFBQztDQUFBLEFBak5ELElBaU5DO1NBbktZLHFCQUFxQjs7O0lBQ2hDLHlDQUMwQjs7SUFDMUIsdUNBQ3dCOztJQUN4Qix1Q0FDd0I7O0lBQ3hCLHlDQUNpRDs7SUFFakQsc0NBQW1COztJQUNuQix3Q0FBb0I7O0lBQ3BCLHNDQUFrQjs7SUFDbEIseUNBQWlCOztJQUNqQiwwQ0FBbUI7O0lBQ25CLDJDQUFtQjs7SUFDbkIsMkNBQVc7O0lBQ1gsNkNBQXFCOztJQUNyQiw2Q0FBYTs7SUFDYiwyQ0FBMEI7O0lBQzFCLHlDQUFpQjs7SUFDakIsMENBQXdDOztJQUN4Qyx3Q0FBa0c7O0lBQ2xHLHNDQUF1Rjs7SUFDdkYsc0NBQVc7O0lBQ1gsMENBQStCOztJQUMvQiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBUSU1FX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9UaW1lUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10aW1lLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW1RJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpZ2l0YWxcIiBbY2xhc3MuaW5saW5lXT1cImlubGluZVwiIFtjbGFzcy5taWxpdGFyeV09XCJtaWxpdGFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpZ2l0YWwtLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkaWdpdGFsLS1jbG9ja1wiICpuZ0lmPVwiIWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1ob3Vyc1wiPnt7aG91cnN9fTwvc3Bhbj46PHNwYW4gY2xhc3M9XCJtaW51dGVzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1taW51dGVzXCI+e3ttaW51dGVzfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWJsb2NrXCIgKm5nSWY9XCIhbWlsaXRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHBlcmlvZCBvZiBNRVJJRElBTlNcIiBjbGFzcz1cImRpZ2l0YWwtLXBlcmlvZFwiIFtjbGFzcy5hY3RpdmVdPVwibWVyaWRpYW49PXBlcmlvZFwiIChjbGljayk9XCJzZXRQZXJpb2QoJGV2ZW50LCBwZXJpb2QsIHRydWUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cInBlcmlvZFwiPnt7cGVyaW9kfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmNyZW1lbnRzXCIgKm5nSWY9XCIhYW5hbG9nXCI+XG4gICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1pbmNyZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBpbmNyZW1lbnQgb2YgaW5jcmVtZW50c1wiIChjbGljayk9XCJzZXRWYWx1ZSgkZXZlbnQsIGluY3JlbWVudClcIiBbY2xhc3MuYWN0aXZlXT1cImluY3JlbWVudD09c2VsZWN0ZWRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaW5jcmVtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+e3tpbmNyZW1lbnR9fTwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImluY3JlbWVudD09c2VsZWN0ZWRcIiBjbGFzcz1cImJoaS1jaGVja1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5hbG9nXCIgKm5nSWY9XCJhbmFsb2dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2ctLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0tZmFjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0tY2VudGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0taGFuZC0taG91cnNcIiBbbmdDbGFzc109XCJob3Vyc0NsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0tYmFsbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0taGFuZC0tbWludXRlc1wiIFtuZ0NsYXNzXT1cIm1pbnV0ZXNDbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbmFsb2ctLWJhbGxcIiBbbmdDbGFzc109XCJ7YmV0d2VlbjogaW5CZXR3ZWVufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2ctLWhvdXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBob3VyIG9mIEhPVVJTXCIgY2xhc3M9XCJhbmFsb2ctLWhvdXJcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBhY3RpdmVIb3VyID09IGhvdXJ9XCIgKGNsaWNrKT1cInNldEhvdXJzKCRldmVudCwgaG91ciwgdHJ1ZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaG91clwiPnt7aG91cn19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2ctLW1pbnV0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IG1pbnV0ZSBvZiBNSU5VVEVTXCIgY2xhc3M9XCJhbmFsb2ctLW1pbnV0ZVwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IGFjdGl2ZU1pbnV0ZSA9PSBtaW51dGV9XCIgKGNsaWNrKT1cInNldE1pbnV0ZXMoJGV2ZW50LCBtaW51dGUsIHRydWUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm1pbnV0ZVwiPnt7bWludXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubWlsaXRhcnldJzogJ21pbGl0YXJ5JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RpbWVQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgbWlsaXRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYW5hbG9nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlubGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGhvdXJzOiBudW1iZXIgPSAxMjtcbiAgbWludXRlczogbnVtYmVyID0gMDtcbiAgdmFsdWU6IGFueSA9IG51bGw7XG4gIG1lcmlkaWFuOiBzdHJpbmc7XG4gIGluQmV0d2VlbjogYm9vbGVhbjtcbiAgaG91cnNDbGFzczogc3RyaW5nO1xuICBhY3RpdmVIb3VyO1xuICBtaW51dGVzQ2xhc3M6IHN0cmluZztcbiAgYWN0aXZlTWludXRlO1xuICBpbmNyZW1lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDogc3RyaW5nO1xuICBNRVJJRElBTlM6IEFycmF5PHN0cmluZz4gPSBbJ2FtJywgJ3BtJ107XG4gIE1JTlVURVM6IEFycmF5PHN0cmluZz4gPSBbJzA1JywgJzEwJywgJzE1JywgJzIwJywgJzI1JywgJzMwJywgJzM1JywgJzQwJywgJzQ1JywgJzUwJywgJzU1JywgJzAwJ107XG4gIEhPVVJTOiBBcnJheTxzdHJpbmc+ID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddO1xuICBtb2RlbDogYW55O1xuICBfb25DaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgZmxhdHRlbihhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5hcnIpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLm1pbGl0YXJ5KSB7XG4gICAgICB0aGlzLkhPVVJTID0gWycwJywgLi4udGhpcy5IT1VSUywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJ107XG4gICAgICB0aGlzLmluY3JlbWVudHMgPSB0aGlzLmZsYXR0ZW4oWy4uLnRoaXMuSE9VUlMubWFwKChob3VyKSA9PiBbYCR7aG91cn06MDBgLCBgJHtob3VyfToxNWAsIGAke2hvdXJ9OjMwYCwgYCR7aG91cn06NDVgXSldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaG91cnM6IEFycmF5PHN0cmluZz4gPSBbJzEyJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJ107XG4gICAgICB0aGlzLmluY3JlbWVudHMgPSB0aGlzLmZsYXR0ZW4oW1xuICAgICAgICAuLi5ob3Vycy5tYXAoKGhvdXIpID0+IFtgJHtob3VyfTowMCBBTWAsIGAke2hvdXJ9OjE1IEFNYCwgYCR7aG91cn06MzAgQU1gLCBgJHtob3VyfTo0NSBBTWBdKSxcbiAgICAgICAgLi4uaG91cnMubWFwKChob3VyKSA9PiBbYCR7aG91cn06MDAgUE1gLCBgJHtob3VyfToxNSBQTWAsIGAke2hvdXJ9OjMwIFBNYCwgYCR7aG91cn06NDUgUE1gXSksXG4gICAgICBdKTtcbiAgICB9XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy5pbml0KHRoaXMubW9kZWwsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICB0aGlzLmluaXQobmV3IERhdGUoKSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQodmFsdWUsIGRpc3BhdGNoKSB7XG4gICAgY29uc3QgX3ZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xuICAgIGxldCBob3Vyczogc3RyaW5nIHwgbnVtYmVyID0gX3ZhbHVlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXM6IHN0cmluZyB8IG51bWJlciA9IF92YWx1ZS5nZXRNaW51dGVzKCk7XG5cbiAgICBpZiAoIXRoaXMubWlsaXRhcnkpIHtcbiAgICAgIHRoaXMubWVyaWRpYW4gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuICAgICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgICAgaG91cnMgPSBob3VycyB8fCAxMjtcbiAgICB9XG4gICAgbWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzO1xuXG4gICAgdGhpcy5zZXRIb3VycyhudWxsLCBob3VycywgZGlzcGF0Y2gpO1xuICAgIHRoaXMuc2V0TWludXRlcyhudWxsLCBtaW51dGVzLCBkaXNwYXRjaCk7XG4gICAgdGhpcy5jaGVja0JldHdlZW4obWludXRlcyk7XG4gIH1cblxuICBjaGVja0JldHdlZW4odmFsdWUpIHtcbiAgICB0aGlzLmluQmV0d2VlbiA9IHRoaXMuTUlOVVRFUy5pbmRleE9mKFN0cmluZyh2YWx1ZSkpIDwgMDtcbiAgfVxuXG4gIHNldFZhbHVlKGV2ZW50LCB2YWx1ZSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgY29uc3QgW3RpbWUsIG1lcmlkaWFuXSA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IHRpbWUuc3BsaXQoJzonKTtcbiAgICB0aGlzLmhvdXJzID0gaG91cnM7XG4gICAgdGhpcy5taW51dGVzID0gbWludXRlcztcbiAgICB0aGlzLm1lcmlkaWFuID0gbWVyaWRpYW47XG5cbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gIH1cblxuICBzZXRIb3VycyhldmVudCwgaG91cnMsIGRpc3BhdGNoKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuaG91cnMgPSBob3VycztcbiAgICB0aGlzLmhvdXJzQ2xhc3MgPSBgaG91ci0ke2hvdXJzfWA7XG4gICAgdGhpcy5hY3RpdmVIb3VyID0gaG91cnM7XG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRNaW51dGVzKGV2ZW50LCBtaW51dGVzLCBkaXNwYXRjaCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzO1xuICAgIHRoaXMubWludXRlc0NsYXNzID0gYG1pbi0ke21pbnV0ZXN9YDtcbiAgICB0aGlzLmFjdGl2ZU1pbnV0ZSA9IG1pbnV0ZXM7XG4gICAgdGhpcy5jaGVja0JldHdlZW4obWludXRlcyk7XG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRQZXJpb2QoZXZlbnQsIHBlcmlvZCwgZGlzcGF0Y2gpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5tZXJpZGlhbiA9IHBlcmlvZDtcblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlKCkge1xuICAgIGxldCBob3VycyA9IE51bWJlcih0aGlzLmhvdXJzKTtcblxuICAgIGlmICghdGhpcy5taWxpdGFyeSkge1xuICAgICAgaG91cnMgPSB0aGlzLm1lcmlkaWFuLnRvTG93ZXJDYXNlKCkgPT09ICdwbScgPyBob3VycyArIDEyIDogaG91cnM7XG5cbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgMTJcbiAgICAgIGlmICh0aGlzLm1lcmlkaWFuLnRvTG93ZXJDYXNlKCkgPT09ICdwbScgJiYgaG91cnMgPT09IDI0KSB7XG4gICAgICAgIGhvdXJzID0gMTI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVyaWRpYW4udG9Mb3dlckNhc2UoKSA9PT0gJ2FtJyAmJiBob3VycyA9PT0gMTIpIHtcbiAgICAgICAgaG91cnMgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gbmV3IERhdGUoKTtcbiAgICB2YWx1ZS5zZXRIb3Vycyhob3Vycyk7XG4gICAgdmFsdWUuc2V0TWludXRlcyh0aGlzLm1pbnV0ZXMpO1xuICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG4gICAgdGhpcy52YWx1ZSA9IGAke3RoaXMuaG91cnN9OiR7dGhpcy5taW51dGVzfSAke3RoaXMubWVyaWRpYW59YDtcbiAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgaG91cnMsXG4gICAgICBtaW51dGVzOiB0aGlzLm1pbnV0ZXMsXG4gICAgICBtZXJpZGlhbjogdGhpcy5tZXJpZGlhbixcbiAgICAgIGRhdGU6IHZhbHVlLFxuICAgICAgdGV4dDogdGhpcy52YWx1ZSxcbiAgICB9KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvLyBWYWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKEhlbHBlcnMuaXNEYXRlKG1vZGVsKSkge1xuICAgICAgdGhpcy5pbml0KG1vZGVsLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==