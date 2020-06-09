import { __read, __spread } from "tslib";
// NG2
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from './../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../list/List";
function NovoTimePickerElement_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, ":");
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.hours);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.minutes);
} }
function NovoTimePickerElement_div_3_span_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵlistener("click", function NovoTimePickerElement_div_3_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r7); var period_r5 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.setPeriod($event, period_r5, true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var period_r5 = ctx.$implicit;
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r4.meridian == period_r5);
    i0.ɵɵattribute("data-automation-id", period_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(period_r5);
} }
function NovoTimePickerElement_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, NovoTimePickerElement_div_3_span_1_Template, 2, 4, "span", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.MERIDIANS);
} }
function NovoTimePickerElement_div_4_novo_list_item_2_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 17);
} }
function NovoTimePickerElement_div_4_novo_list_item_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 15);
    i0.ɵɵlistener("click", function NovoTimePickerElement_div_4_novo_list_item_2_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r12); var increment_r9 = ctx.$implicit; var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.setValue($event, increment_r9); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NovoTimePickerElement_div_4_novo_list_item_2_i_3_Template, 1, 0, "i", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var increment_r9 = ctx.$implicit;
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", increment_r9 == ctx_r8.selected);
    i0.ɵɵattribute("data-automation-id", increment_r9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(increment_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", increment_r9 == ctx_r8.selected);
} }
function NovoTimePickerElement_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "novo-list", 13);
    i0.ɵɵtemplate(2, NovoTimePickerElement_div_4_novo_list_item_2_Template, 4, 5, "novo-list-item", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.increments);
} }
var _c0 = function (a0) { return { active: a0 }; };
function NovoTimePickerElement_div_5_span_9_Template(rf, ctx) { if (rf & 1) {
    var _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵlistener("click", function NovoTimePickerElement_div_5_span_9_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r17); var hour_r15 = ctx.$implicit; var ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.setHours($event, hour_r15, true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var hour_r15 = ctx.$implicit;
    var ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r13.activeHour == hour_r15));
    i0.ɵɵattribute("data-automation-id", hour_r15);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hour_r15);
} }
function NovoTimePickerElement_div_5_span_11_Template(rf, ctx) { if (rf & 1) {
    var _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵlistener("click", function NovoTimePickerElement_div_5_span_11_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r20); var minute_r18 = ctx.$implicit; var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.setMinutes($event, minute_r18, true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var minute_r18 = ctx.$implicit;
    var ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r14.activeMinute == minute_r18));
    i0.ɵɵattribute("data-automation-id", minute_r18);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(minute_r18);
} }
var _c1 = function (a0) { return { between: a0 }; };
function NovoTimePickerElement_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelement(3, "span", 21);
    i0.ɵɵelementStart(4, "span", 22);
    i0.ɵɵelement(5, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 24);
    i0.ɵɵelement(7, "span", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 26);
    i0.ɵɵtemplate(9, NovoTimePickerElement_div_5_span_9_Template, 2, 5, "span", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 28);
    i0.ɵɵtemplate(11, NovoTimePickerElement_div_5_span_11_Template, 2, 5, "span", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r3.hoursClass);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r3.minutesClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r3.inBetween));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.HOURS);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.MINUTES);
} }
// Value accessor for the component (supports ngModel)
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
    NovoTimePickerElement.prototype.flatten = function (arr) {
        var _a;
        return (_a = Array.prototype).concat.apply(_a, __spread(arr));
    };
    NovoTimePickerElement.prototype.ngOnInit = function () {
        if (this.military) {
            this.HOURS = __spread(['0'], this.HOURS, ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']);
            this.increments = this.flatten(__spread(this.HOURS.map(function (hour) { return [hour + ":00", hour + ":15", hour + ":30", hour + ":45"]; })));
        }
        else {
            var hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
            this.increments = this.flatten(__spread(hours.map(function (hour) { return [hour + ":00 AM", hour + ":15 AM", hour + ":30 AM", hour + ":45 AM"]; }), hours.map(function (hour) { return [hour + ":00 PM", hour + ":15 PM", hour + ":30 PM", hour + ":45 PM"]; })));
        }
        this.ngOnChanges();
    };
    NovoTimePickerElement.prototype.ngOnChanges = function (changes) {
        if (this.model) {
            this.init(this.model, false);
        }
        else {
            this.selected = null;
            this.init(new Date(), false);
        }
    };
    NovoTimePickerElement.prototype.init = function (value, dispatch) {
        var _value = new Date(value);
        var hours = _value.getHours();
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
    NovoTimePickerElement.prototype.checkBetween = function (value) {
        this.inBetween = this.MINUTES.indexOf(String(value)) < 0;
    };
    NovoTimePickerElement.prototype.setValue = function (event, value) {
        Helpers.swallowEvent(event);
        this.selected = value;
        var _a = __read(value.split(' '), 2), time = _a[0], meridian = _a[1];
        var _b = __read(time.split(':'), 2), hours = _b[0], minutes = _b[1];
        this.hours = hours;
        this.minutes = minutes;
        this.meridian = meridian;
        this.dispatchChange();
    };
    NovoTimePickerElement.prototype.setHours = function (event, hours, dispatch) {
        Helpers.swallowEvent(event);
        this.hours = hours;
        this.hoursClass = "hour-" + hours;
        this.activeHour = hours;
        if (dispatch) {
            this.dispatchChange();
        }
    };
    NovoTimePickerElement.prototype.setMinutes = function (event, minutes, dispatch) {
        Helpers.swallowEvent(event);
        this.minutes = minutes;
        this.minutesClass = "min-" + minutes;
        this.activeMinute = minutes;
        this.checkBetween(minutes);
        if (dispatch) {
            this.dispatchChange();
        }
    };
    NovoTimePickerElement.prototype.setPeriod = function (event, period, dispatch) {
        Helpers.swallowEvent(event);
        this.meridian = period;
        if (dispatch) {
            this.dispatchChange();
        }
    };
    NovoTimePickerElement.prototype.dispatchChange = function () {
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
    NovoTimePickerElement.prototype.writeValue = function (model) {
        this.model = model;
        if (Helpers.isDate(model)) {
            this.init(model, false);
        }
    };
    NovoTimePickerElement.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NovoTimePickerElement.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    NovoTimePickerElement.ɵfac = function NovoTimePickerElement_Factory(t) { return new (t || NovoTimePickerElement)(); };
    NovoTimePickerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTimePickerElement, selectors: [["novo-time-picker"]], hostVars: 2, hostBindings: function NovoTimePickerElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("military", ctx.military);
        } }, inputs: { military: "military", analog: "analog", inline: "inline" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([TIME_PICKER_VALUE_ACCESSOR]), i0.ɵɵNgOnChangesFeature], decls: 6, vars: 8, consts: [[1, "digital"], [1, "digital--inner"], ["class", "digital--clock", 4, "ngIf"], ["class", "control-block", 4, "ngIf"], ["class", "increments", 4, "ngIf"], ["class", "analog", 4, "ngIf"], [1, "digital--clock"], ["data-automation-id", "novo-time-picker-hours", 1, "hours"], ["data-automation-id", "novo-time-picker-minutes", 1, "minutes"], [1, "control-block"], ["class", "digital--period", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "digital--period", 3, "click"], [1, "increments"], ["direction", "vertical", "data-automation-id", "novo-time-picker-increments"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "bhi-check", 4, "ngIf"], [1, "bhi-check"], [1, "analog"], [1, "analog--inner"], [1, "analog--face"], [1, "analog--center"], [1, "analog--hand--hours", 3, "ngClass"], [1, "analog--ball"], [1, "analog--hand--minutes", 3, "ngClass"], [1, "analog--ball", 3, "ngClass"], [1, "analog--hours"], ["class", "analog--hour", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "analog--minutes"], ["class", "analog--minute", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "analog--hour", 3, "ngClass", "click"], [1, "analog--minute", 3, "ngClass", "click"]], template: function NovoTimePickerElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, NovoTimePickerElement_span_2_Template, 6, 2, "span", 2);
            i0.ɵɵtemplate(3, NovoTimePickerElement_div_3_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, NovoTimePickerElement_div_4_Template, 3, 1, "div", 4);
            i0.ɵɵtemplate(5, NovoTimePickerElement_div_5_Template, 12, 7, "div", 5);
        } if (rf & 2) {
            i0.ɵɵclassProp("inline", ctx.inline)("military", ctx.military);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.inline);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.military);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.analog);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.analog);
        } }, directives: [i1.NgIf, i1.NgForOf, i2.NovoListElement, i2.NovoListItemElement, i2.NovoItemContentElement, i1.NgClass], encapsulation: 2 });
    return NovoTimePickerElement;
}());
export { NovoTimePickerElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTimePickerElement, [{
        type: Component,
        args: [{
                selector: 'novo-time-picker',
                providers: [TIME_PICKER_VALUE_ACCESSOR],
                template: "\n        <div class=\"digital\" [class.inline]=\"inline\" [class.military]=\"military\">\n            <div class=\"digital--inner\">\n                <span class=\"digital--clock\" *ngIf=\"!inline\">\n                    <span class=\"hours\" data-automation-id=\"novo-time-picker-hours\">{{hours}}</span>:<span class=\"minutes\" data-automation-id=\"novo-time-picker-minutes\">{{minutes}}</span>\n                </span>\n                <div class=\"control-block\" *ngIf=\"!military\">\n                    <span *ngFor=\"let period of MERIDIANS\" class=\"digital--period\" [class.active]=\"meridian==period\" (click)=\"setPeriod($event, period, true)\" [attr.data-automation-id]=\"period\">{{period}}</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"increments\" *ngIf=\"!analog\">\n            <novo-list direction=\"vertical\" data-automation-id=\"novo-time-picker-increments\">\n                <novo-list-item *ngFor=\"let increment of increments\" (click)=\"setValue($event, increment)\" [class.active]=\"increment==selected\" [attr.data-automation-id]=\"increment\">\n                    <item-content>{{increment}}</item-content>\n                    <i *ngIf=\"increment==selected\" class=\"bhi-check\"></i>\n                </novo-list-item>\n            </novo-list>\n        </div>\n        <div class=\"analog\" *ngIf=\"analog\">\n            <div class=\"analog--inner\">\n                <div class=\"analog--face\">\n                    <span class=\"analog--center\"></span>\n                    <span class=\"analog--hand--hours\" [ngClass]=\"hoursClass\">\n                        <span class=\"analog--ball\"></span>\n                    </span>\n                    <span class=\"analog--hand--minutes\" [ngClass]=\"minutesClass\">\n                        <span class=\"analog--ball\" [ngClass]=\"{between: inBetween}\"></span>\n                    </span>\n                </div>\n                <div class=\"analog--hours\">\n                    <span *ngFor=\"let hour of HOURS\" class=\"analog--hour\" [ngClass]=\"{active: activeHour == hour}\" (click)=\"setHours($event, hour, true)\" [attr.data-automation-id]=\"hour\">{{hour}}</span>\n                </div>\n                <div class=\"analog--minutes\">\n                    <span *ngFor=\"let minute of MINUTES\" class=\"analog--minute\" [ngClass]=\"{active: activeMinute == minute}\" (click)=\"setMinutes($event, minute, true)\" [attr.data-automation-id]=\"minute\">{{minute}}</span>\n                </div>\n            </div>\n        </div>\n    ",
                host: {
                    '[class.military]': 'military',
                },
            }]
    }], null, { military: [{
            type: Input
        }], analog: [{
            type: Input
        }], inline: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90aW1lLXBpY2tlci9UaW1lUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztJQWVoQywrQkFDSTtJQUFBLCtCQUFnRTtJQUFBLFlBQVM7SUFBQSxpQkFBTztJQUFBLGlCQUFDO0lBQUEsK0JBQW9FO0lBQUEsWUFBVztJQUFBLGlCQUFPO0lBQzNLLGlCQUFPOzs7SUFENkQsZUFBUztJQUFULGtDQUFTO0lBQTRFLGVBQVc7SUFBWCxvQ0FBVzs7OztJQUdoSyxnQ0FBOEs7SUFBN0UsK09BQW1DLElBQUksS0FBRTtJQUFvQyxZQUFVO0lBQUEsaUJBQU87Ozs7SUFBaEksc0RBQWlDO0lBQTJDLCtDQUFrQztJQUFDLGVBQVU7SUFBViwrQkFBVTs7O0lBRDVMLDhCQUNJO0lBQUEsK0VBQThLO0lBQ2xMLGlCQUFNOzs7SUFESSxlQUFnQztJQUFoQywwQ0FBZ0M7OztJQVF0Qyx3QkFBcUQ7Ozs7SUFGekQsMENBQ0k7SUFEaUQsOFFBQXFDO0lBQ3RGLG9DQUFjO0lBQUEsWUFBYTtJQUFBLGlCQUFlO0lBQzFDLDBGQUFpRDtJQUNyRCxpQkFBaUI7Ozs7SUFIMEUseURBQW9DO0lBQUMsa0RBQXFDO0lBQ25KLGVBQWE7SUFBYixrQ0FBYTtJQUN4QixlQUEyQjtJQUEzQixzREFBMkI7OztJQUoxQywrQkFDSTtJQUFBLHFDQUNJO0lBQUEsbUdBQ0k7SUFHUixpQkFBWTtJQUNoQixpQkFBTTs7O0lB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LEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBUSU1FX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9UaW1lUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10aW1lLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW1RJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpZ2l0YWxcIiBbY2xhc3MuaW5saW5lXT1cImlubGluZVwiIFtjbGFzcy5taWxpdGFyeV09XCJtaWxpdGFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpZ2l0YWwtLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkaWdpdGFsLS1jbG9ja1wiICpuZ0lmPVwiIWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1ob3Vyc1wiPnt7aG91cnN9fTwvc3Bhbj46PHNwYW4gY2xhc3M9XCJtaW51dGVzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1taW51dGVzXCI+e3ttaW51dGVzfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWJsb2NrXCIgKm5nSWY9XCIhbWlsaXRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHBlcmlvZCBvZiBNRVJJRElBTlNcIiBjbGFzcz1cImRpZ2l0YWwtLXBlcmlvZFwiIFtjbGFzcy5hY3RpdmVdPVwibWVyaWRpYW49PXBlcmlvZFwiIChjbGljayk9XCJzZXRQZXJpb2QoJGV2ZW50LCBwZXJpb2QsIHRydWUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cInBlcmlvZFwiPnt7cGVyaW9kfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmNyZW1lbnRzXCIgKm5nSWY9XCIhYW5hbG9nXCI+XG4gICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by10aW1lLXBpY2tlci1pbmNyZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBpbmNyZW1lbnQgb2YgaW5jcmVtZW50c1wiIChjbGljayk9XCJzZXRWYWx1ZSgkZXZlbnQsIGluY3JlbWVudClcIiBbY2xhc3MuYWN0aXZlXT1cImluY3JlbWVudD09c2VsZWN0ZWRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaW5jcmVtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+e3tpbmNyZW1lbnR9fTwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImluY3JlbWVudD09c2VsZWN0ZWRcIiBjbGFzcz1cImJoaS1jaGVja1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5hbG9nXCIgKm5nSWY9XCJhbmFsb2dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2ctLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuYWxvZy0tZmFjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0tY2VudGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0taGFuZC0taG91cnNcIiBbbmdDbGFzc109XCJob3Vyc0NsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0tYmFsbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuYWxvZy0taGFuZC0tbWludXRlc1wiIFtuZ0NsYXNzXT1cIm1pbnV0ZXNDbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbmFsb2ctLWJhbGxcIiBbbmdDbGFzc109XCJ7YmV0d2VlbjogaW5CZXR3ZWVufVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2ctLWhvdXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBob3VyIG9mIEhPVVJTXCIgY2xhc3M9XCJhbmFsb2ctLWhvdXJcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBhY3RpdmVIb3VyID09IGhvdXJ9XCIgKGNsaWNrKT1cInNldEhvdXJzKCRldmVudCwgaG91ciwgdHJ1ZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaG91clwiPnt7aG91cn19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmFsb2ctLW1pbnV0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IG1pbnV0ZSBvZiBNSU5VVEVTXCIgY2xhc3M9XCJhbmFsb2ctLW1pbnV0ZVwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IGFjdGl2ZU1pbnV0ZSA9PSBtaW51dGV9XCIgKGNsaWNrKT1cInNldE1pbnV0ZXMoJGV2ZW50LCBtaW51dGUsIHRydWUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm1pbnV0ZVwiPnt7bWludXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubWlsaXRhcnldJzogJ21pbGl0YXJ5JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RpbWVQaWNrZXJFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgbWlsaXRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYW5hbG9nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlubGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGhvdXJzOiBudW1iZXIgPSAxMjtcbiAgbWludXRlczogbnVtYmVyID0gMDtcbiAgdmFsdWU6IGFueSA9IG51bGw7XG4gIG1lcmlkaWFuOiBzdHJpbmc7XG4gIGluQmV0d2VlbjogYm9vbGVhbjtcbiAgaG91cnNDbGFzczogc3RyaW5nO1xuICBhY3RpdmVIb3VyO1xuICBtaW51dGVzQ2xhc3M6IHN0cmluZztcbiAgYWN0aXZlTWludXRlO1xuICBpbmNyZW1lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDogc3RyaW5nO1xuICBNRVJJRElBTlM6IEFycmF5PHN0cmluZz4gPSBbJ2FtJywgJ3BtJ107XG4gIE1JTlVURVM6IEFycmF5PHN0cmluZz4gPSBbJzA1JywgJzEwJywgJzE1JywgJzIwJywgJzI1JywgJzMwJywgJzM1JywgJzQwJywgJzQ1JywgJzUwJywgJzU1JywgJzAwJ107XG4gIEhPVVJTOiBBcnJheTxzdHJpbmc+ID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddO1xuICBtb2RlbDogYW55O1xuICBfb25DaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgZmxhdHRlbihhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5hcnIpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLm1pbGl0YXJ5KSB7XG4gICAgICB0aGlzLkhPVVJTID0gWycwJywgLi4udGhpcy5IT1VSUywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJ107XG4gICAgICB0aGlzLmluY3JlbWVudHMgPSB0aGlzLmZsYXR0ZW4oWy4uLnRoaXMuSE9VUlMubWFwKChob3VyKSA9PiBbYCR7aG91cn06MDBgLCBgJHtob3VyfToxNWAsIGAke2hvdXJ9OjMwYCwgYCR7aG91cn06NDVgXSldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaG91cnM6IEFycmF5PHN0cmluZz4gPSBbJzEyJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJ107XG4gICAgICB0aGlzLmluY3JlbWVudHMgPSB0aGlzLmZsYXR0ZW4oW1xuICAgICAgICAuLi5ob3Vycy5tYXAoKGhvdXIpID0+IFtgJHtob3VyfTowMCBBTWAsIGAke2hvdXJ9OjE1IEFNYCwgYCR7aG91cn06MzAgQU1gLCBgJHtob3VyfTo0NSBBTWBdKSxcbiAgICAgICAgLi4uaG91cnMubWFwKChob3VyKSA9PiBbYCR7aG91cn06MDAgUE1gLCBgJHtob3VyfToxNSBQTWAsIGAke2hvdXJ9OjMwIFBNYCwgYCR7aG91cn06NDUgUE1gXSksXG4gICAgICBdKTtcbiAgICB9XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy5pbml0KHRoaXMubW9kZWwsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICB0aGlzLmluaXQobmV3IERhdGUoKSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQodmFsdWUsIGRpc3BhdGNoKSB7XG4gICAgY29uc3QgX3ZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xuICAgIGxldCBob3Vyczogc3RyaW5nIHwgbnVtYmVyID0gX3ZhbHVlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXM6IHN0cmluZyB8IG51bWJlciA9IF92YWx1ZS5nZXRNaW51dGVzKCk7XG5cbiAgICBpZiAoIXRoaXMubWlsaXRhcnkpIHtcbiAgICAgIHRoaXMubWVyaWRpYW4gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuICAgICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgICAgaG91cnMgPSBob3VycyB8fCAxMjtcbiAgICB9XG4gICAgbWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzO1xuXG4gICAgdGhpcy5zZXRIb3VycyhudWxsLCBob3VycywgZGlzcGF0Y2gpO1xuICAgIHRoaXMuc2V0TWludXRlcyhudWxsLCBtaW51dGVzLCBkaXNwYXRjaCk7XG4gICAgdGhpcy5jaGVja0JldHdlZW4obWludXRlcyk7XG4gIH1cblxuICBjaGVja0JldHdlZW4odmFsdWUpIHtcbiAgICB0aGlzLmluQmV0d2VlbiA9IHRoaXMuTUlOVVRFUy5pbmRleE9mKFN0cmluZyh2YWx1ZSkpIDwgMDtcbiAgfVxuXG4gIHNldFZhbHVlKGV2ZW50LCB2YWx1ZSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgY29uc3QgW3RpbWUsIG1lcmlkaWFuXSA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IHRpbWUuc3BsaXQoJzonKTtcbiAgICB0aGlzLmhvdXJzID0gaG91cnM7XG4gICAgdGhpcy5taW51dGVzID0gbWludXRlcztcbiAgICB0aGlzLm1lcmlkaWFuID0gbWVyaWRpYW47XG5cbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gIH1cblxuICBzZXRIb3VycyhldmVudCwgaG91cnMsIGRpc3BhdGNoKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuaG91cnMgPSBob3VycztcbiAgICB0aGlzLmhvdXJzQ2xhc3MgPSBgaG91ci0ke2hvdXJzfWA7XG4gICAgdGhpcy5hY3RpdmVIb3VyID0gaG91cnM7XG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRNaW51dGVzKGV2ZW50LCBtaW51dGVzLCBkaXNwYXRjaCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzO1xuICAgIHRoaXMubWludXRlc0NsYXNzID0gYG1pbi0ke21pbnV0ZXN9YDtcbiAgICB0aGlzLmFjdGl2ZU1pbnV0ZSA9IG1pbnV0ZXM7XG4gICAgdGhpcy5jaGVja0JldHdlZW4obWludXRlcyk7XG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRQZXJpb2QoZXZlbnQsIHBlcmlvZCwgZGlzcGF0Y2gpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5tZXJpZGlhbiA9IHBlcmlvZDtcblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlKCkge1xuICAgIGxldCBob3VycyA9IE51bWJlcih0aGlzLmhvdXJzKTtcblxuICAgIGlmICghdGhpcy5taWxpdGFyeSkge1xuICAgICAgaG91cnMgPSB0aGlzLm1lcmlkaWFuLnRvTG93ZXJDYXNlKCkgPT09ICdwbScgPyBob3VycyArIDEyIDogaG91cnM7XG5cbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgMTJcbiAgICAgIGlmICh0aGlzLm1lcmlkaWFuLnRvTG93ZXJDYXNlKCkgPT09ICdwbScgJiYgaG91cnMgPT09IDI0KSB7XG4gICAgICAgIGhvdXJzID0gMTI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVyaWRpYW4udG9Mb3dlckNhc2UoKSA9PT0gJ2FtJyAmJiBob3VycyA9PT0gMTIpIHtcbiAgICAgICAgaG91cnMgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gbmV3IERhdGUoKTtcbiAgICB2YWx1ZS5zZXRIb3Vycyhob3Vycyk7XG4gICAgdmFsdWUuc2V0TWludXRlcyh0aGlzLm1pbnV0ZXMpO1xuICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG4gICAgdGhpcy52YWx1ZSA9IGAke3RoaXMuaG91cnN9OiR7dGhpcy5taW51dGVzfSAke3RoaXMubWVyaWRpYW59YDtcbiAgICB0aGlzLm9uU2VsZWN0Lm5leHQoe1xuICAgICAgaG91cnMsXG4gICAgICBtaW51dGVzOiB0aGlzLm1pbnV0ZXMsXG4gICAgICBtZXJpZGlhbjogdGhpcy5tZXJpZGlhbixcbiAgICAgIGRhdGU6IHZhbHVlLFxuICAgICAgdGV4dDogdGhpcy52YWx1ZSxcbiAgICB9KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvLyBWYWx1ZUFjY2Vzc29yIEZ1bmN0aW9uc1xuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKEhlbHBlcnMuaXNEYXRlKG1vZGVsKSkge1xuICAgICAgdGhpcy5pbml0KG1vZGVsLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==