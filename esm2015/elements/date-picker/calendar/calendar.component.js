// NG2
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Vendor
import { addMonths, isDate, isSameDay, setMonth, setYear, startOfDay, startOfMonth, subMonths } from 'date-fns';
import { NovoLabelService } from '../../../services/novo-label-service';
// APP
import { Helpers } from '../../../utils/Helpers';
import { MultiDateSelectionStrategy, RangeSelectionStrategy, WeekSelectionStrategy } from '../strategies';
import { DefaultDateSelectionStrategy } from '../strategies/default-selection.strategy';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/novo-label-service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
import * as i4 from "../month-view/month-view.component";
import * as i5 from "../month-select/month-select.component";
import * as i6 from "../year-select/year-select.component";
function NovoCalendarElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵlistener("click", function NovoCalendarElement_ng_container_2_Template_span_click_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.openView($event, "months"); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 9);
    i0.ɵɵlistener("click", function NovoCalendarElement_ng_container_2_Template_span_click_4_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.openView($event, "years"); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const month_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("secondary", i_r5 > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(month_r4.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(month_r4.date == null ? null : month_r4.date.getFullYear());
} }
function NovoCalendarElement_ng_container_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "span", 1);
    i0.ɵɵlistener("click", function NovoCalendarElement_ng_container_5_ng_container_1_div_1_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.prevMonth($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 7);
    i0.ɵɵelementStart(3, "span", 8);
    i0.ɵɵlistener("click", function NovoCalendarElement_ng_container_5_ng_container_1_div_1_Template_span_click_3_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.openView($event, "months"); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 9);
    i0.ɵɵlistener("click", function NovoCalendarElement_ng_container_5_ng_container_1_div_1_Template_span_click_5_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(3); return ctx_r16.openView($event, "years"); });
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 3);
    i0.ɵɵlistener("click", function NovoCalendarElement_ng_container_5_ng_container_1_div_1_Template_span_click_7_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.nextMonth($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(month_r10.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(month_r10.date == null ? null : month_r10.date.getFullYear());
} }
function NovoCalendarElement_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoCalendarElement_ng_container_5_ng_container_1_div_1_Template, 8, 2, "div", 10);
    i0.ɵɵelementStart(2, "novo-month-view", 11);
    i0.ɵɵlistener("select", function NovoCalendarElement_ng_container_5_ng_container_1_Template_novo_month_view_select_2_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.dateSelected($event); })("hover", function NovoCalendarElement_ng_container_5_ng_container_1_Template_novo_month_view_hover_2_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.updatePreview($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const month_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.layout === "vertical" && i_r11 > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("activeDate", month_r10.date)("selected", ctx_r9.selected)("preview", ctx_r9.preview)("overlays", ctx_r9.overlays)("isRange", ctx_r9._isRange())("hideOverflowDays", ctx_r9.months.length > 1)("weekStartsOn", ctx_r9.weekStartsOn);
} }
function NovoCalendarElement_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoCalendarElement_ng_container_5_ng_container_1_Template, 3, 8, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.months);
} }
function NovoCalendarElement_novo_month_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-month-select", 12);
    i0.ɵɵlistener("select", function NovoCalendarElement_novo_month_select_6_Template_novo_month_select_select_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.monthSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected);
} }
function NovoCalendarElement_novo_year_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-year-select", 12);
    i0.ɵɵlistener("select", function NovoCalendarElement_novo_year_select_7_Template_novo_year_select_select_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.yearSelected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected);
} }
export class NovoCalendarElement {
    constructor(labels, element, cdr, _sanitizer) {
        this.labels = labels;
        this.element = element;
        this.cdr = cdr;
        this._sanitizer = _sanitizer;
        // Default view mode (select days)
        this.activeView = 'days';
        this.layout = 'horizontal';
        this._selected = [];
        this.selectedChange = new EventEmitter();
        this.preview = [];
        this.previewChange = new EventEmitter();
        this.activeDateChange = new EventEmitter();
        this.overlays = [];
        this._mode = 'single';
        this._numberOfMonths = [0];
        this._weekStartsOn = 0;
        this._strategy = new DefaultDateSelectionStrategy();
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value ? value.filter(isDate).map((d) => startOfDay(d)) : [];
    }
    get activeDate() {
        return this._activeDate;
    }
    set activeDate(value) {
        if (!isSameDay(value, this._activeDate)) {
            this._activeDate = value;
            this.activeDateChange.next(value);
            this.updateView(value);
        }
    }
    get weekStartsOn() {
        return this._weekStartsOn;
    }
    set weekStartsOn(value) {
        this._weekStartsOn = value;
        if (this.mode === 'week') {
            this._strategy = new WeekSelectionStrategy(this.weekStartsOn);
        }
    }
    get numberOfMonths() {
        return this._numberOfMonths.length;
    }
    set numberOfMonths(value) {
        this._numberOfMonths = Array.from(Array(Number(value)).keys());
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        if (this._mode !== value) {
            this._mode = value;
            switch (value) {
                case 'multiple':
                    this._strategy = new MultiDateSelectionStrategy();
                    break;
                case 'range':
                    this._strategy = new RangeSelectionStrategy();
                    break;
                case 'week':
                    this._strategy = new WeekSelectionStrategy(this.weekStartsOn);
                    break;
                case 'single':
                default:
                    this._strategy = new DefaultDateSelectionStrategy();
                    break;
            }
        }
    }
    get hb_width() {
        if (this.layout === 'vertical') {
            return this._sanitizer.bypassSecurityTrustStyle(`min-content`);
        }
        return this._sanitizer.bypassSecurityTrustStyle(`min-content`);
    }
    get hb_horiztonal() {
        return this.layout !== 'vertical';
    }
    get hb_vertical() {
        return this.layout === 'vertical';
    }
    ngOnInit() {
        if (!this.activeDate) {
            this.activeDate = this.selected ? this.selected[0] : new Date();
        }
        this.updateView(this.activeDate);
    }
    updateView(activeDate) {
        this.activeDate = new Date(activeDate ? new Date(activeDate) : new Date());
        this.months = [];
        const month = startOfMonth(this.activeDate);
        for (const i of this._numberOfMonths) {
            const date = addMonths(month, i);
            const label = this.labels.formatDateWithFormat(date, { month: 'short' });
            this.months.push({ date, label });
        }
    }
    setToday() {
        const tmp = new Date();
        this.updateView(tmp);
        // Go back to days
        this.openView(null, 'days');
    }
    monthSelected({ event, month }) {
        const date = this.activeDate ? this.activeDate : new Date().getMonth();
        const tmp = setMonth(date, month);
        this.updateView(tmp);
        // Go back to days
        this.openView(null, 'days');
    }
    yearSelected({ event, year }) {
        const date = this.activeDate ? this.activeDate : new Date();
        const tmp = setYear(date, year);
        this.updateView(tmp);
        // Go back to days
        this.openView(null, 'days');
    }
    dateSelected({ event, day }) {
        // Helpers.swallowEvent(event);
        this.selected = this._strategy.selectionFinished(day.date, this.selected, event);
        this.selectedChange.emit(this.selected);
        this.cdr.markForCheck();
    }
    updatePreview({ event, day }) {
        this.preview = this._strategy.createPreview(day.date, this.selected, event);
        this.previewChange.emit(this.preview);
    }
    prevMonth(event) {
        Helpers.swallowEvent(event);
        const tmp = subMonths(this.activeDate, 1);
        this.updateView(tmp);
        console.log('selection', this.selected);
    }
    nextMonth(event) {
        Helpers.swallowEvent(event);
        const tmp = addMonths(this.activeDate, 1);
        this.updateView(tmp);
        console.log('selection', this.selected);
    }
    openView(event, type) {
        Helpers.swallowEvent(event);
        // If they click the toggle two time in a row, close it (go back to days)
        if (type === this.activeView) {
            this.activeView = 'days';
        }
        else {
            this.activeView = type;
        }
        // Make sure to scroll the selected one into view
        if (this.activeView === 'years' || this.activeView === 'months') {
            setTimeout(() => {
                const container = this.element.nativeElement.querySelector(`.calendar-content.${this.activeView}`);
                const selectedItem = this.element.nativeElement.querySelector(`.calendar-content.${this.activeView} .${this.activeView === 'years' ? 'year' : 'month'}.selected`);
                if (container && selectedItem) {
                    container.scrollTop = selectedItem.offsetTop - 100;
                }
            });
        }
    }
    _isRange() {
        return ['week', 'range'].includes(this.mode);
    }
}
NovoCalendarElement.ɵfac = function NovoCalendarElement_Factory(t) { return new (t || NovoCalendarElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
NovoCalendarElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCalendarElement, selectors: [["novo-calendar"]], hostVars: 6, hostBindings: function NovoCalendarElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.hb_width);
        i0.ɵɵclassProp("layout-horizontal", ctx.hb_horiztonal)("layout-vertical", ctx.hb_vertical);
    } }, inputs: { minYear: "minYear", maxYear: "maxYear", activeView: "activeView", layout: "layout", selected: "selected", preview: "preview", overlays: "overlays", activeDate: "activeDate", weekStartsOn: "weekStartsOn", numberOfMonths: "numberOfMonths", mode: "mode" }, outputs: { selectedChange: "selectedChange", previewChange: "previewChange", activeDateChange: "activeDateChange" }, decls: 8, vars: 5, consts: [[1, "calendar-header"], ["data-automation-id", "calendar-previous", 1, "previous", 3, "click"], [4, "ngFor", "ngForOf"], ["data-automation-id", "calendar-next", 1, "next", 3, "click"], [1, "calendar-content", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "activeDate", "selected", "select", 4, "ngSwitchCase"], [1, "heading"], ["data-automation-id", "header-month", 1, "month", 3, "click"], ["data-automation-id", "header-year", 1, "year", 3, "click"], ["class", "calendar-header", 4, "ngIf"], [1, "month-view", 3, "activeDate", "selected", "preview", "overlays", "isRange", "hideOverflowDays", "weekStartsOn", "select", "hover"], [3, "activeDate", "selected", "select"]], template: function NovoCalendarElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵlistener("click", function NovoCalendarElement_Template_span_click_1_listener($event) { return ctx.prevMonth($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, NovoCalendarElement_ng_container_2_Template, 6, 4, "ng-container", 2);
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵlistener("click", function NovoCalendarElement_Template_span_click_3_listener($event) { return ctx.nextMonth($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "section", 4);
        i0.ɵɵtemplate(5, NovoCalendarElement_ng_container_5_Template, 2, 1, "ng-container", 5);
        i0.ɵɵtemplate(6, NovoCalendarElement_novo_month_select_6_Template, 1, 2, "novo-month-select", 6);
        i0.ɵɵtemplate(7, NovoCalendarElement_novo_year_select_7_Template, 1, 2, "novo-year-select", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.months);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitch", ctx.activeView);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "days");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "months");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "years");
    } }, directives: [i3.NgForOf, i3.NgSwitch, i3.NgSwitchCase, i3.NgIf, i4.NovoMonthViewElement, i5.NovoMonthSelectElement, i6.NovoYearSelectElement], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}.layout-horizontal[_nghost-%COMP%]   .calendar-content[_ngcontent-%COMP%]{flex-flow:row nowrap}.layout-horizontal[_nghost-%COMP%]   .month-view[_ngcontent-%COMP%] + .month-view[_ngcontent-%COMP%]{border-collapse:unset;border-left:1px solid #d9dadc;margin-left:.5rem;padding-left:.5rem}.layout-vertical[_nghost-%COMP%]   .calendar-content[_ngcontent-%COMP%]{flex-flow:column nowrap}.layout-vertical[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .heading.secondary[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]{-moz-user-select:none;-webkit-user-select:none;background:#fff;color:#3d464d;display:block;position:relative;text-align:center;user-select:none;width:100%}[_nghost-%COMP%]   .calendar-content[_ngcontent-%COMP%]{display:flex;height:-webkit-min-content;height:-moz-min-content;height:min-content;left:0;overflow:hidden;position:static;top:0;width:100%}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]{-webkit-user-select:none;border-bottom:1px solid #f4f4f4;border-collapse:collapse;cursor:default;display:flex;flex-flow:row nowrap;justify-content:space-between;padding:14px 0;width:100%}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;height:15px;width:30px}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:after{border-bottom:4px solid transparent;border-right:4px solid #aaa;border-top:4px solid transparent;content:\"\";display:inline-block;height:0;vertical-align:middle;width:0}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover:after{border-right:4px solid #4a89dc;cursor:pointer}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#4a89dc;display:inline-block;flex:1;font-weight:600;vertical-align:middle}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]{border-radius:2px;padding:3px 8px}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]:hover{background:#4a89dc;color:#fff;cursor:pointer}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{border-radius:2px;padding:3px 8px}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]:hover{background:#4a89dc;color:#fff;cursor:pointer}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;height:15px;width:30px}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:before{border-bottom:4px solid transparent;border-left:4px solid #aaa;border-top:4px solid transparent;content:\"\";display:inline-block;height:0;vertical-align:middle;width:0}[_nghost-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover:before{border-left:4px solid #4a89dc;cursor:pointer;opacity:1}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCalendarElement, [{
        type: Component,
        args: [{
                selector: 'novo-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.scss'],
            }]
    }], function () { return [{ type: i1.NovoLabelService }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.DomSanitizer }]; }, { minYear: [{
            type: Input
        }], maxYear: [{
            type: Input
        }], activeView: [{
            type: Input
        }], layout: [{
            type: Input
        }], selected: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], preview: [{
            type: Input
        }], previewChange: [{
            type: Output
        }], activeDateChange: [{
            type: Output
        }], overlays: [{
            type: Input
        }], activeDate: [{
            type: Input
        }], weekStartsOn: [{
            type: Input
        }], numberOfMonths: [{
            type: Input
        }], mode: [{
            type: Input
        }], hb_width: [{
            type: HostBinding,
            args: ['style.width']
        }], hb_horiztonal: [{
            type: HostBinding,
            args: ['class.layout-horizontal']
        }], hb_vertical: [{
            type: HostBinding,
            args: ['class.layout-vertical']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS1waWNrZXIvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvZGF0ZS1waWNrZXIvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsU0FBUztBQUNULE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFTakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7O0lDZnRGLDZCQUNFO0lBQUEsK0JBQ0U7SUFBQSwrQkFDb0M7SUFEaEIscU1BQTBCLFFBQVEsS0FBRTtJQUNwQixZQUFpQjtJQUFBLGlCQUFPO0lBQzVELCtCQUNtQztJQURoQixxTUFBMEIsT0FBTyxLQUFFO0lBQ25CLFlBQStCO0lB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TUFBTTtZQUdQLGdCQUFnQjtrQkFEZixNQUFNO1lBSVAsUUFBUTtrQkFEUCxLQUFLO1lBWUYsVUFBVTtrQkFEYixLQUFLO1lBYUYsWUFBWTtrQkFEZixLQUFLO1lBWUYsY0FBYztrQkFEakIsS0FBSztZQVNGLElBQUk7a0JBRFAsS0FBSztZQTBCRixRQUFRO2tCQURYLFdBQVc7bUJBQUMsYUFBYTtZQVN0QixhQUFhO2tCQURoQixXQUFXO21CQUFDLHlCQUF5QjtZQU1sQyxXQUFXO2tCQURkLFdBQVc7bUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBhZGRNb250aHMsIGlzRGF0ZSwgaXNTYW1lRGF5LCBzZXRNb250aCwgc2V0WWVhciwgc3RhcnRPZkRheSwgc3RhcnRPZk1vbnRoLCBzdWJNb250aHMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHtcbiAgRGF0ZVBpY2tlclNlbGVjdE1vZGVzLFxuICBOb3ZvRGF0ZVNlbGVjdEV2ZW50LFxuICBOb3ZvRGF0ZVNlbGVjdGlvblN0cmF0ZWd5LFxuICBOb3ZvTW9udGhTZWxlY3RFdmVudCxcbiAgTm92b1llYXJTZWxlY3RFdmVudCxcbiAgT3ZlcmxheURhdGUsXG59IGZyb20gJy4uL2RhdGUtcGlja2VyLnR5cGVzJztcbmltcG9ydCB7IE11bHRpRGF0ZVNlbGVjdGlvblN0cmF0ZWd5LCBSYW5nZVNlbGVjdGlvblN0cmF0ZWd5LCBXZWVrU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi9zdHJhdGVnaWVzJztcbmltcG9ydCB7IERlZmF1bHREYXRlU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi9zdHJhdGVnaWVzL2RlZmF1bHQtc2VsZWN0aW9uLnN0cmF0ZWd5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYWxlbmRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYWxlbmRhckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBtaW5ZZWFyOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFllYXI6IHN0cmluZyB8IG51bWJlcjtcbiAgLy8gRGVmYXVsdCB2aWV3IG1vZGUgKHNlbGVjdCBkYXlzKVxuICBASW5wdXQoKVxuICBhY3RpdmVWaWV3OiBzdHJpbmcgPSAnZGF5cyc7XG4gIEBJbnB1dCgpXG4gIGxheW91dDogc3RyaW5nID0gJ2hvcml6b250YWwnO1xuXG4gIF9zZWxlY3RlZDogRGF0ZVtdID0gW107XG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3RlZCgpOiBEYXRlW10ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuICBzZXQgc2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlID8gdmFsdWUuZmlsdGVyKGlzRGF0ZSkubWFwKChkKSA9PiBzdGFydE9mRGF5KGQpKSA6IFtdO1xuICB9XG4gIEBPdXRwdXQoKVxuICBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpXG4gIHByZXZpZXc6IERhdGVbXSA9IFtdO1xuICBAT3V0cHV0KClcbiAgcHJldmlld0NoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBhY3RpdmVEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgb3ZlcmxheXM6IE92ZXJsYXlEYXRlW10gPSBbXTtcblxuICBfYWN0aXZlRGF0ZTogRGF0ZTtcbiAgX21vZGU6IERhdGVQaWNrZXJTZWxlY3RNb2RlcyA9ICdzaW5nbGUnO1xuICBfbnVtYmVyT2ZNb250aHM6IG51bWJlcltdID0gWzBdO1xuICBfd2Vla1N0YXJ0c09uOiBudW1iZXIgPSAwO1xuICBfc3RyYXRlZ3k6IE5vdm9EYXRlU2VsZWN0aW9uU3RyYXRlZ3k8YW55PiA9IG5ldyBEZWZhdWx0RGF0ZVNlbGVjdGlvblN0cmF0ZWd5KCk7XG5cbiAgbW9udGhzOiBhbnk7XG5cbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGU7XG4gIH1cbiAgc2V0IGFjdGl2ZURhdGUodmFsdWUpIHtcbiAgICBpZiAoIWlzU2FtZURheSh2YWx1ZSwgdGhpcy5fYWN0aXZlRGF0ZSkpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5uZXh0KHZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlVmlldyh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHdlZWtTdGFydHNPbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93ZWVrU3RhcnRzT247XG4gIH1cbiAgc2V0IHdlZWtTdGFydHNPbih2YWx1ZSkge1xuICAgIHRoaXMuX3dlZWtTdGFydHNPbiA9IHZhbHVlO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xuICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBuZXcgV2Vla1NlbGVjdGlvblN0cmF0ZWd5KHRoaXMud2Vla1N0YXJ0c09uKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgbnVtYmVyT2ZNb250aHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZNb250aHMubGVuZ3RoO1xuICB9XG4gIHNldCBudW1iZXJPZk1vbnRocyh2YWx1ZSkge1xuICAgIHRoaXMuX251bWJlck9mTW9udGhzID0gQXJyYXkuZnJvbShBcnJheShOdW1iZXIodmFsdWUpKS5rZXlzKCkpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IG1vZGUoKTogRGF0ZVBpY2tlclNlbGVjdE1vZGVzIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICBzZXQgbW9kZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9tb2RlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlICdtdWx0aXBsZSc6XG4gICAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBuZXcgTXVsdGlEYXRlU2VsZWN0aW9uU3RyYXRlZ3koKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gbmV3IFJhbmdlU2VsZWN0aW9uU3RyYXRlZ3koKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBuZXcgV2Vla1NlbGVjdGlvblN0cmF0ZWd5KHRoaXMud2Vla1N0YXJ0c09uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2luZ2xlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLl9zdHJhdGVneSA9IG5ldyBEZWZhdWx0RGF0ZVNlbGVjdGlvblN0cmF0ZWd5KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gIGdldCBoYl93aWR0aCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBtaW4tY29udGVudGApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgbWluLWNvbnRlbnRgKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGF5b3V0LWhvcml6b250YWwnKVxuICBnZXQgaGJfaG9yaXp0b25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXQgIT09ICd2ZXJ0aWNhbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxheW91dC12ZXJ0aWNhbCcpXG4gIGdldCBoYl92ZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXQgPT09ICd2ZXJ0aWNhbCc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlRGF0ZSkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5zZWxlY3RlZCA/IHRoaXMuc2VsZWN0ZWRbMF0gOiBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5hY3RpdmVEYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoYWN0aXZlRGF0ZTogRGF0ZSkge1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKGFjdGl2ZURhdGUgPyBuZXcgRGF0ZShhY3RpdmVEYXRlKSA6IG5ldyBEYXRlKCkpO1xuICAgIHRoaXMubW9udGhzID0gW107XG4gICAgY29uc3QgbW9udGggPSBzdGFydE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcbiAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy5fbnVtYmVyT2ZNb250aHMpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBhZGRNb250aHMobW9udGgsIGkpO1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdChkYXRlLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuICAgICAgdGhpcy5tb250aHMucHVzaCh7IGRhdGUsIGxhYmVsIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFRvZGF5KCkge1xuICAgIGNvbnN0IHRtcCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCk7XG4gICAgLy8gR28gYmFjayB0byBkYXlzXG4gICAgdGhpcy5vcGVuVmlldyhudWxsLCAnZGF5cycpO1xuICB9XG5cbiAgbW9udGhTZWxlY3RlZCh7IGV2ZW50LCBtb250aCB9OiBOb3ZvTW9udGhTZWxlY3RFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUgPyB0aGlzLmFjdGl2ZURhdGUgOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XG4gICAgY29uc3QgdG1wID0gc2V0TW9udGgoZGF0ZSwgbW9udGgpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXApO1xuICAgIC8vIEdvIGJhY2sgdG8gZGF5c1xuICAgIHRoaXMub3BlblZpZXcobnVsbCwgJ2RheXMnKTtcbiAgfVxuXG4gIHllYXJTZWxlY3RlZCh7IGV2ZW50LCB5ZWFyIH06IE5vdm9ZZWFyU2VsZWN0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5hY3RpdmVEYXRlID8gdGhpcy5hY3RpdmVEYXRlIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCB0bXAgPSBzZXRZZWFyKGRhdGUsIHllYXIpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXApO1xuICAgIC8vIEdvIGJhY2sgdG8gZGF5c1xuICAgIHRoaXMub3BlblZpZXcobnVsbCwgJ2RheXMnKTtcbiAgfVxuXG4gIGRhdGVTZWxlY3RlZCh7IGV2ZW50LCBkYXkgfTogTm92b0RhdGVTZWxlY3RFdmVudCkge1xuICAgIC8vIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5fc3RyYXRlZ3kuc2VsZWN0aW9uRmluaXNoZWQoZGF5LmRhdGUsIHRoaXMuc2VsZWN0ZWQsIGV2ZW50KTtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB1cGRhdGVQcmV2aWV3KHsgZXZlbnQsIGRheSB9OiBOb3ZvRGF0ZVNlbGVjdEV2ZW50KSB7XG4gICAgdGhpcy5wcmV2aWV3ID0gdGhpcy5fc3RyYXRlZ3kuY3JlYXRlUHJldmlldyhkYXkuZGF0ZSwgdGhpcy5zZWxlY3RlZCwgZXZlbnQpO1xuICAgIHRoaXMucHJldmlld0NoYW5nZS5lbWl0KHRoaXMucHJldmlldyk7XG4gIH1cblxuICBwcmV2TW9udGgoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IHRtcCA9IHN1Yk1vbnRocyh0aGlzLmFjdGl2ZURhdGUsIDEpO1xuICAgIHRoaXMudXBkYXRlVmlldyh0bXApO1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3Rpb24nLCB0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIG5leHRNb250aChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgY29uc3QgdG1wID0gYWRkTW9udGhzKHRoaXMuYWN0aXZlRGF0ZSwgMSk7XG4gICAgdGhpcy51cGRhdGVWaWV3KHRtcCk7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGlvbicsIHRoaXMuc2VsZWN0ZWQpO1xuICB9XG5cbiAgb3BlblZpZXcoZXZlbnQ6IEV2ZW50LCB0eXBlOiBzdHJpbmcpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG5cbiAgICAvLyBJZiB0aGV5IGNsaWNrIHRoZSB0b2dnbGUgdHdvIHRpbWUgaW4gYSByb3csIGNsb3NlIGl0IChnbyBiYWNrIHRvIGRheXMpXG4gICAgaWYgKHR5cGUgPT09IHRoaXMuYWN0aXZlVmlldykge1xuICAgICAgdGhpcy5hY3RpdmVWaWV3ID0gJ2RheXMnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZVZpZXcgPSB0eXBlO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB0byBzY3JvbGwgdGhlIHNlbGVjdGVkIG9uZSBpbnRvIHZpZXdcbiAgICBpZiAodGhpcy5hY3RpdmVWaWV3ID09PSAneWVhcnMnIHx8IHRoaXMuYWN0aXZlVmlldyA9PT0gJ21vbnRocycpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuY2FsZW5kYXItY29udGVudC4ke3RoaXMuYWN0aXZlVmlld31gKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmNhbGVuZGFyLWNvbnRlbnQuJHt0aGlzLmFjdGl2ZVZpZXd9IC4ke3RoaXMuYWN0aXZlVmlldyA9PT0gJ3llYXJzJyA/ICd5ZWFyJyA6ICdtb250aCd9LnNlbGVjdGVkYCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gc2VsZWN0ZWRJdGVtLm9mZnNldFRvcCAtIDEwMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2lzUmFuZ2UoKSB7XG4gICAgcmV0dXJuIFsnd2VlaycsICdyYW5nZSddLmluY2x1ZGVzKHRoaXMubW9kZSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYWxlbmRhci1oZWFkZXJcIj5cbiAgPHNwYW4gY2xhc3M9XCJwcmV2aW91c1wiIChjbGljayk9XCJwcmV2TW9udGgoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNhbGVuZGFyLXByZXZpb3VzXCI+PC9zcGFuPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtb250aCBvZiBtb250aHM7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJoZWFkaW5nXCIgW2NsYXNzLnNlY29uZGFyeV09XCJpID4gMFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtb250aFwiIChjbGljayk9XCJvcGVuVmlldygkZXZlbnQsICdtb250aHMnKVwiXG4gICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cImhlYWRlci1tb250aFwiPnt7IG1vbnRoLmxhYmVsIH19PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ5ZWFyXCIgKGNsaWNrKT1cIm9wZW5WaWV3KCRldmVudCwgJ3llYXJzJylcIlxuICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJoZWFkZXIteWVhclwiPnt7IG1vbnRoLmRhdGU/LmdldEZ1bGxZZWFyKCkgfX08L3NwYW4+XG4gICAgPC9zcGFuPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPHNwYW4gY2xhc3M9XCJuZXh0XCIgKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItbmV4dFwiPjwvc3Bhbj5cbjwvZGl2PlxuPHNlY3Rpb24gY2xhc3M9XCJjYWxlbmRhci1jb250ZW50XCIgW25nU3dpdGNoXT1cImFjdGl2ZVZpZXdcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RheXMnXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbW9udGggb2YgbW9udGhzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaGVhZGVyXCIgKm5nSWY9XCJsYXlvdXQ9PT0ndmVydGljYWwnICYmIGkgPiAwXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJldmlvdXNcIiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjYWxlbmRhci1wcmV2aW91c1wiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb250aFwiIChjbGljayk9XCJvcGVuVmlldygkZXZlbnQsICdtb250aHMnKVwiXG4gICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJoZWFkZXItbW9udGhcIj57eyBtb250aC5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInllYXJcIiAoY2xpY2spPVwib3BlblZpZXcoJGV2ZW50LCAneWVhcnMnKVwiXG4gICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJoZWFkZXIteWVhclwiPnt7IG1vbnRoLmRhdGU/LmdldEZ1bGxZZWFyKCkgfX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuZXh0XCIgKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2FsZW5kYXItbmV4dFwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5vdm8tbW9udGgtdmlld1xuICAgICAgICBjbGFzcz1cIm1vbnRoLXZpZXdcIlxuICAgICAgICBbYWN0aXZlRGF0ZV09XCJtb250aC5kYXRlXCJcbiAgICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICAgICAgW3ByZXZpZXddPVwicHJldmlld1wiXG4gICAgICAgIFtvdmVybGF5c109XCJvdmVybGF5c1wiXG4gICAgICAgIFtpc1JhbmdlXT1cIl9pc1JhbmdlKClcIlxuICAgICAgICBbaGlkZU92ZXJmbG93RGF5c109XCJtb250aHMubGVuZ3RoID4gMVwiXG4gICAgICAgIFt3ZWVrU3RhcnRzT25dPVwid2Vla1N0YXJ0c09uXCJcbiAgICAgICAgKHNlbGVjdCk9XCJkYXRlU2VsZWN0ZWQoJGV2ZW50KVwiXG4gICAgICAgIChob3Zlcik9XCJ1cGRhdGVQcmV2aWV3KCRldmVudClcIj48L25vdm8tbW9udGgtdmlldz5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxub3ZvLW1vbnRoLXNlbGVjdFxuICAgICpuZ1N3aXRjaENhc2U9XCInbW9udGhzJ1wiXG4gICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICAoc2VsZWN0KT1cIm1vbnRoU2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8L25vdm8tbW9udGgtc2VsZWN0PlxuICA8bm92by15ZWFyLXNlbGVjdFxuICAgICpuZ1N3aXRjaENhc2U9XCIneWVhcnMnXCJcbiAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxuICAgIChzZWxlY3QpPVwieWVhclNlbGVjdGVkKCRldmVudClcIj5cbiAgPC9ub3ZvLXllYXItc2VsZWN0PlxuPC9zZWN0aW9uPiJdfQ==