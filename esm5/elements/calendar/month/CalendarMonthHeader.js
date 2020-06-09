import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import * as dateFns from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../button/Button";
import * as i3 from "../pipe/Month.pipe";
import * as i4 from "../pipe/Weekday.pipe";
function NovoCalendarMonthHeaderElement_ng_template_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "weekday");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var day_r4 = ctx.$implicit;
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("calendar-past", day_r4.isPast)("calendar-today", day_r4.isToday)("calendar-future", day_r4.isFuture)("calendar-weekend", day_r4.isWeekend);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 9, day_r4.date, ctx_r3.locale), " ");
} }
function NovoCalendarMonthHeaderElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "button", 4);
    i0.ɵɵlistener("click", function NovoCalendarMonthHeaderElement_ng_template_0_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.prevMonth($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 6);
    i0.ɵɵlistener("click", function NovoCalendarMonthHeaderElement_ng_template_0_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.nextMonth($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵtemplate(8, NovoCalendarMonthHeaderElement_ng_template_0_div_8_Template, 3, 12, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 2, ctx_r1.viewDate, ctx_r1.locale));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.days);
} }
function NovoCalendarMonthHeaderElement_ng_template_2_Template(rf, ctx) { }
var _c0 = function (a0, a1, a2) { return { days: a0, locale: a1, viewDate: a2 }; };
var NovoCalendarMonthHeaderElement = /** @class */ (function () {
    function NovoCalendarMonthHeaderElement() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    NovoCalendarMonthHeaderElement.prototype.prevMonth = function (event) {
        this.viewDateChange.emit(dateFns.subMonths(this.viewDate, 1));
    };
    NovoCalendarMonthHeaderElement.prototype.nextMonth = function (event) {
        this.viewDateChange.emit(dateFns.addMonths(this.viewDate, 1));
    };
    NovoCalendarMonthHeaderElement.ɵfac = function NovoCalendarMonthHeaderElement_Factory(t) { return new (t || NovoCalendarMonthHeaderElement)(); };
    NovoCalendarMonthHeaderElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarMonthHeaderElement, selectors: [["novo-calendar-month-header"]], inputs: { viewDate: "viewDate", days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { viewDateChange: "viewDateChange" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "calendar-header"], [1, "calendar-header-top"], ["theme", "icon", "icon", "previous", 3, "click"], [1, "calendar-month"], ["theme", "icon", "icon", "next", 3, "click"], [1, "calendar-weekdays"], ["class", "calendar-weekday", 3, "calendar-past", "calendar-today", "calendar-future", "calendar-weekend", 4, "ngFor", "ngForOf"], [1, "calendar-weekday"]], template: function NovoCalendarMonthHeaderElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NovoCalendarMonthHeaderElement_ng_template_0_Template, 9, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NovoCalendarMonthHeaderElement_ng_template_2_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx.days, ctx.locale, ctx.viewDate));
        } }, directives: [i1.NgTemplateOutlet, i2.NovoButtonElement, i1.NgForOf], pipes: [i3.MonthPipe, i4.WeekdayPipe], encapsulation: 2 });
    return NovoCalendarMonthHeaderElement;
}());
export { NovoCalendarMonthHeaderElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarMonthHeaderElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar-month-header',
                template: "\n    <ng-template #defaultTemplate>\n      <div class=\"calendar-header\">\n        <div class=\"calendar-header-top\">\n          <button theme=\"icon\" icon=\"previous\" (click)=\"prevMonth($event)\"></button>\n          <div class=\"calendar-month\">{{ viewDate | month:locale }}</div>\n          <button theme=\"icon\" icon=\"next\" (click)=\"nextMonth($event)\"></button>\n        </div>\n        <div class=\"calendar-weekdays\">\n          <div\n            class=\"calendar-weekday\"\n            *ngFor=\"let day of days\"\n            [class.calendar-past]=\"day.isPast\"\n            [class.calendar-today]=\"day.isToday\"\n            [class.calendar-future]=\"day.isFuture\"\n            [class.calendar-weekend]=\"day.isWeekend\">\n            {{ day.date | weekday:locale }}\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, viewDate: viewDate}\">\n    </ng-template>\n  ",
            }]
    }], null, { viewDate: [{
            type: Input
        }], days: [{
            type: Input
        }], locale: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], viewDateChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJNb250aEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9tb250aC9DYWxlbmRhck1vbnRoSGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBGLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOzs7Ozs7O0lBYTFCLDhCQU9FO0lBQUEsWUFDRjs7SUFBQSxpQkFBTTs7OztJQUxKLDhDQUFrQyxrQ0FBQSxvQ0FBQSxzQ0FBQTtJQUlsQyxlQUNGO0lBREUsaUZBQ0Y7Ozs7SUFmSiw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsaUNBQTBFO0lBQXJDLG1OQUEyQjtJQUFDLGlCQUFTO0lBQzFFLDhCQUE0QjtJQUFBLFlBQTZCOztJQUFBLGlCQUFNO0lBQy9ELGlDQUFzRTtJQUFyQyxtTkFBMkI7SUFBQyxpQkFBUztJQUN4RSxpQkFBTTtJQUNOLDhCQUNFO0lBQUEsOEZBT0U7SUFFSixpQkFBTTtJQUNSLGlCQUFNOzs7SUFkMEIsZUFBNkI7SUFBN0IsMEVBQTZCO0lBTXZELGVBQXdCO0lBQXhCLHFDQUF3Qjs7OztBQWJwQztJQUFBO1FBMENFOztXQUVHO1FBRUgsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQVN6RDtJQVBDLGtEQUFTLEdBQVQsVUFBVSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxrREFBUyxHQUFULFVBQVUsS0FBWTtRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO2dIQXpCVSw4QkFBOEI7dUVBQTlCLDhCQUE4QjtZQTFCdkMsZ0lBQ0U7WUFtQkYsK0ZBR0E7OztZQUZFLGVBQXNEO1lBQXRELDREQUFzRCwyRkFBQTs7eUNBNUI1RDtDQTJEQyxBQXZERCxJQXVEQztTQTFCWSw4QkFBOEI7a0RBQTlCLDhCQUE4QjtjQTdCMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRSw2aENBeUJUO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLEtBQUs7O2tCQU1MLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlZWtEYXkgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhbGVuZGFyLW1vbnRoLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1oZWFkZXItdG9wXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwicHJldmlvdXNcIiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIj48L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItbW9udGhcIj57eyB2aWV3RGF0ZSB8IG1vbnRoOmxvY2FsZSB9fTwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cIm5leHRcIiAoY2xpY2spPVwibmV4dE1vbnRoKCRldmVudClcIj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci13ZWVrZGF5c1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY2FsZW5kYXItd2Vla2RheVwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXNcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbGVuZGFyLXBhc3RdPVwiZGF5LmlzUGFzdFwiXG4gICAgICAgICAgICBbY2xhc3MuY2FsZW5kYXItdG9kYXldPVwiZGF5LmlzVG9kYXlcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbGVuZGFyLWZ1dHVyZV09XCJkYXkuaXNGdXR1cmVcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbGVuZGFyLXdlZWtlbmRdPVwiZGF5LmlzV2Vla2VuZFwiPlxuICAgICAgICAgICAge3sgZGF5LmRhdGUgfCB3ZWVrZGF5OmxvY2FsZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntkYXlzOiBkYXlzLCBsb2NhbGU6IGxvY2FsZSwgdmlld0RhdGU6IHZpZXdEYXRlfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhck1vbnRoSGVhZGVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIEBJbnB1dCgpXG4gIGRheXM6IFdlZWtEYXlbXTtcblxuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZpZXcgZGF0ZSBpcyBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgdmlld0RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcmV2TW9udGgoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KGRhdGVGbnMuc3ViTW9udGhzKHRoaXMudmlld0RhdGUsIDEpKTtcbiAgfVxuXG4gIG5leHRNb250aChldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQoZGF0ZUZucy5hZGRNb250aHModGhpcy52aWV3RGF0ZSwgMSkpO1xuICB9XG59XG4iXX0=