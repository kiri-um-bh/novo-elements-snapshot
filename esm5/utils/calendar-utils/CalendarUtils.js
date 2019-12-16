/**
 * @fileoverview added by tsickle
 * Generated from: utils/calendar-utils/CalendarUtils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as dateFns from 'date-fns';
/** @type {?} */
var WEEKEND_DAY_NUMBERS = [0, 6];
/** @type {?} */
var DAYS_IN_WEEK = 7;
/** @type {?} */
var HOURS_IN_DAY = 24;
/** @type {?} */
var MINUTES_IN_HOUR = 60;
/** @enum {number} */
var CalendarEventResponse = {
    Maybe: 0,
    Accepted: 1,
    Rejected: 2,
};
export { CalendarEventResponse };
CalendarEventResponse[CalendarEventResponse.Maybe] = 'Maybe';
CalendarEventResponse[CalendarEventResponse.Accepted] = 'Accepted';
CalendarEventResponse[CalendarEventResponse.Rejected] = 'Rejected';
/**
 * @record
 */
export function CalendarEventTimesChangedEvent() { }
if (false) {
    /** @type {?} */
    CalendarEventTimesChangedEvent.prototype.event;
    /** @type {?} */
    CalendarEventTimesChangedEvent.prototype.newStart;
    /** @type {?|undefined} */
    CalendarEventTimesChangedEvent.prototype.newEnd;
}
/**
 * @record
 */
export function WeekDay() { }
if (false) {
    /** @type {?} */
    WeekDay.prototype.date;
    /** @type {?} */
    WeekDay.prototype.isPast;
    /** @type {?} */
    WeekDay.prototype.isToday;
    /** @type {?} */
    WeekDay.prototype.isFuture;
    /** @type {?} */
    WeekDay.prototype.isWeekend;
}
/**
 * @record
 */
export function EventColor() { }
if (false) {
    /** @type {?} */
    EventColor.prototype.primary;
    /** @type {?} */
    EventColor.prototype.secondary;
}
/**
 * @record
 */
export function EventAction() { }
if (false) {
    /** @type {?} */
    EventAction.prototype.label;
    /** @type {?|undefined} */
    EventAction.prototype.cssClass;
    /**
     * @param {?} __0
     * @return {?}
     */
    EventAction.prototype.onClick = function (__0) { };
}
/**
 * @record
 */
export function CalendarEvent() { }
if (false) {
    /** @type {?|undefined} */
    CalendarEvent.prototype.id;
    /** @type {?} */
    CalendarEvent.prototype.start;
    /** @type {?|undefined} */
    CalendarEvent.prototype.end;
    /** @type {?} */
    CalendarEvent.prototype.title;
    /** @type {?|undefined} */
    CalendarEvent.prototype.description;
    /** @type {?} */
    CalendarEvent.prototype.color;
    /** @type {?|undefined} */
    CalendarEvent.prototype.type;
    /** @type {?|undefined} */
    CalendarEvent.prototype.response;
    /** @type {?|undefined} */
    CalendarEvent.prototype.actions;
    /** @type {?|undefined} */
    CalendarEvent.prototype.allDay;
    /** @type {?|undefined} */
    CalendarEvent.prototype.cssClass;
    /** @type {?|undefined} */
    CalendarEvent.prototype.resizable;
    /** @type {?|undefined} */
    CalendarEvent.prototype.draggable;
}
/**
 * @record
 */
export function WeekViewEvent() { }
if (false) {
    /** @type {?} */
    WeekViewEvent.prototype.event;
    /** @type {?} */
    WeekViewEvent.prototype.offset;
    /** @type {?} */
    WeekViewEvent.prototype.span;
    /** @type {?} */
    WeekViewEvent.prototype.startsBeforeWeek;
    /** @type {?} */
    WeekViewEvent.prototype.endsAfterWeek;
    /** @type {?|undefined} */
    WeekViewEvent.prototype.top;
    /** @type {?|undefined} */
    WeekViewEvent.prototype.height;
}
/**
 * @record
 */
export function WeekViewEventRow() { }
if (false) {
    /** @type {?} */
    WeekViewEventRow.prototype.row;
}
/**
 * @record
 */
export function MonthViewDay() { }
if (false) {
    /** @type {?} */
    MonthViewDay.prototype.inMonth;
    /** @type {?} */
    MonthViewDay.prototype.events;
    /** @type {?|undefined} */
    MonthViewDay.prototype.backgroundColor;
    /** @type {?|undefined} */
    MonthViewDay.prototype.cssClass;
    /** @type {?} */
    MonthViewDay.prototype.badgeTotal;
}
/**
 * @record
 */
export function MonthView() { }
if (false) {
    /** @type {?} */
    MonthView.prototype.rowOffsets;
    /** @type {?} */
    MonthView.prototype.days;
    /** @type {?} */
    MonthView.prototype.totalDaysVisibleInWeek;
}
/**
 * @record
 */
export function DayViewEvent() { }
if (false) {
    /** @type {?} */
    DayViewEvent.prototype.event;
    /** @type {?} */
    DayViewEvent.prototype.height;
    /** @type {?} */
    DayViewEvent.prototype.width;
    /** @type {?} */
    DayViewEvent.prototype.top;
    /** @type {?} */
    DayViewEvent.prototype.left;
    /** @type {?} */
    DayViewEvent.prototype.startsBeforeDay;
    /** @type {?} */
    DayViewEvent.prototype.endsAfterDay;
}
/**
 * @record
 */
export function DayView() { }
if (false) {
    /** @type {?} */
    DayView.prototype.events;
    /** @type {?} */
    DayView.prototype.width;
    /** @type {?} */
    DayView.prototype.allDayEvents;
}
/**
 * @record
 */
export function DayViewHourSegment() { }
if (false) {
    /** @type {?} */
    DayViewHourSegment.prototype.isStart;
    /** @type {?} */
    DayViewHourSegment.prototype.date;
    /** @type {?|undefined} */
    DayViewHourSegment.prototype.cssClass;
}
/**
 * @record
 */
export function DayViewHour() { }
if (false) {
    /** @type {?} */
    DayViewHour.prototype.segments;
}
/**
 * @record
 */
export function IsEventInPeriodArgs() { }
if (false) {
    /** @type {?} */
    IsEventInPeriodArgs.prototype.event;
    /** @type {?} */
    IsEventInPeriodArgs.prototype.periodStart;
    /** @type {?} */
    IsEventInPeriodArgs.prototype.periodEnd;
}
/**
 * @record
 */
export function GetEventsInPeriodArgs() { }
if (false) {
    /** @type {?} */
    GetEventsInPeriodArgs.prototype.events;
    /** @type {?} */
    GetEventsInPeriodArgs.prototype.periodStart;
    /** @type {?} */
    GetEventsInPeriodArgs.prototype.periodEnd;
}
/**
 * @record
 */
export function GetDayViewArgs() { }
if (false) {
    /** @type {?|undefined} */
    GetDayViewArgs.prototype.events;
    /** @type {?} */
    GetDayViewArgs.prototype.viewDate;
    /** @type {?} */
    GetDayViewArgs.prototype.hourSegments;
    /** @type {?} */
    GetDayViewArgs.prototype.dayStart;
    /** @type {?} */
    GetDayViewArgs.prototype.dayEnd;
    /** @type {?} */
    GetDayViewArgs.prototype.eventWidth;
    /** @type {?} */
    GetDayViewArgs.prototype.segmentHeight;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getExcludedDays(_a) {
    var startDate = _a.startDate, days = _a.days, excluded = _a.excluded;
    if (excluded.length < 1) {
        return 0;
    }
    /** @type {?} */
    var day = startDate.getDay();
    /** @type {?} */
    var reduce = 0;
    for (var i = 0; i < days; i++) {
        if (day === DAYS_IN_WEEK) {
            day = 0;
        }
        if (excluded.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e === day; }))) {
            reduce++;
        }
        day++;
    }
    return reduce;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getWeekViewEventSpan(_a) {
    var event = _a.event, offset = _a.offset, startOfWeek = _a.startOfWeek, excluded = _a.excluded;
    /** @type {?} */
    var begin = event.start < startOfWeek ? startOfWeek : event.start;
    /** @type {?} */
    var span = 1;
    if (event.end) {
        span = dateFns.differenceInDays(dateFns.addMinutes(dateFns.endOfDay(event.end), 1), dateFns.startOfDay(begin));
    }
    /** @type {?} */
    var totalLength = offset + span;
    if (totalLength > DAYS_IN_WEEK) {
        span = DAYS_IN_WEEK - offset;
    }
    return span - getExcludedDays({ startDate: begin, days: span, excluded: excluded });
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getWeekViewEventOffset(_a) {
    var event = _a.event, startOfWeek = _a.startOfWeek, _b = _a.excluded, excluded = _b === void 0 ? [] : _b;
    if (event.start < startOfWeek) {
        return 0;
    }
    /** @type {?} */
    var distance = dateFns.differenceInDays(event.start, startOfWeek);
    return distance - getExcludedDays({ startDate: startOfWeek, days: distance, excluded: excluded });
}
/**
 * @param {?} __0
 * @return {?}
 */
function isEventIsPeriod(_a) {
    var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    /** @type {?} */
    var eventStart = event.start;
    /** @type {?} */
    var eventEnd = event.end || event.start;
    if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
    }
    if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
    }
    if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
    }
    if (dateFns.isSameSecond(eventStart, periodStart) || dateFns.isSameSecond(eventStart, periodEnd)) {
        return true;
    }
    if (dateFns.isSameSecond(eventEnd, periodStart) || dateFns.isSameSecond(eventEnd, periodEnd)) {
        return true;
    }
    return false;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEventsInPeriod(_a) {
    var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    return events.filter((/**
     * @param {?} event
     * @return {?}
     */
    function (event) { return isEventIsPeriod({ event: event, periodStart: periodStart, periodEnd: periodEnd }); }));
}
/**
 * @param {?} events
 * @param {?} dayStart
 * @param {?} dayEnd
 * @return {?}
 */
function getEventsInTimeRange(events, dayStart, dayEnd) {
    return events.filter((/**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var eventStart = event.start;
        /** @type {?} */
        var eventEnd = event.end || eventStart;
        /** @type {?} */
        var startOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfDay(eventStart), dayStart.hour), dayStart.minute);
        /** @type {?} */
        var endOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfMinute(eventStart), dayEnd.hour), dayEnd.minute);
        return dateFns.isAfter(eventEnd, startOfView) && dateFns.isBefore(eventStart, endOfView);
    }));
}
/**
 * @param {?} __0
 * @return {?}
 */
function getWeekDay(_a) {
    var date = _a.date;
    /** @type {?} */
    var today = dateFns.startOfDay(new Date());
    return {
        date: date,
        isPast: date < today,
        isToday: dateFns.isSameDay(date, today),
        isFuture: date > today,
        isWeekend: WEEKEND_DAY_NUMBERS.indexOf(dateFns.getDay(date)) > -1,
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getWeekViewHeader(_a) {
    var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b;
    /** @type {?} */
    var start = dateFns.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    /** @type {?} */
    var days = [];
    var _loop_1 = function (i) {
        /** @type {?} */
        var date = dateFns.addDays(start, i);
        if (!excluded.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return date.getDay() === e; }))) {
            days.push(getWeekDay({ date: date }));
        }
    };
    for (var i = 0; i < DAYS_IN_WEEK; i++) {
        _loop_1(i);
    }
    return days;
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getWeekView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, hourSegments = _a.hourSegments, segmentHeight = _a.segmentHeight, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    if (!events) {
        events = [];
    }
    /** @type {?} */
    var startOfViewWeek = dateFns.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    /** @type {?} */
    var endOfViewWeek = dateFns.endOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    /** @type {?} */
    var maxRange = DAYS_IN_WEEK - excluded.length;
    /** @type {?} */
    var eventsMapped = getEventsInTimeRange(getEventsInPeriod({ events: events, periodStart: startOfViewWeek, periodEnd: endOfViewWeek }), dayStart, dayEnd)
        .map((/**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var offset = getWeekViewEventOffset({ event: event, startOfWeek: startOfViewWeek, excluded: excluded });
        /** @type {?} */
        var span = 1;
        return { event: event, offset: offset, span: span };
    }))
        .filter((/**
     * @param {?} e
     * @return {?}
     */
    function (e) { return e.offset < maxRange; }))
        .filter((/**
     * @param {?} e
     * @return {?}
     */
    function (e) { return e.span > 0; }))
        .map((/**
     * @param {?} entry
     * @return {?}
     */
    function (entry) { return ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < startOfViewWeek,
        endsAfterWeek: (entry.event.end || entry.event.start) > endOfViewWeek,
        top: 0,
    }); }))
        .sort((/**
     * @param {?} itemA
     * @param {?} itemB
     * @return {?}
     */
    function (itemA, itemB) {
        /** @type {?} */
        var startSecondsDiff = dateFns.differenceInSeconds(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return dateFns.differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    }))
        .map((/**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        /** @type {?} */
        var startOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfDay(entry.event.start), dayStart.hour), dayStart.minute);
        /** @type {?} */
        var endOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfMinute(dateFns.endOfDay(entry.event.start)), dayEnd.hour), dayEnd.minute);
        /** @type {?} */
        var eventStart = entry.event.start;
        /** @type {?} */
        var eventEnd = entry.event.end || eventStart;
        /** @type {?} */
        var hourHeightModifier = (hourSegments * segmentHeight) / MINUTES_IN_HOUR;
        if (eventStart > startOfView) {
            entry.top += dateFns.differenceInMinutes(eventStart, startOfView);
        }
        entry.top *= hourHeightModifier;
        /** @type {?} */
        var startsBeforeDay = eventStart < startOfView;
        /** @type {?} */
        var endsAfterDay = eventEnd > endOfView;
        /** @type {?} */
        var startDate = startsBeforeDay ? startOfView : eventStart;
        /** @type {?} */
        var endDate = endsAfterDay ? endOfView : eventEnd;
        /** @type {?} */
        var height = dateFns.differenceInMinutes(endDate, startDate);
        if (!entry.event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        entry.height = height;
        return entry;
    }));
    /** @type {?} */
    var eventRows = [];
    /** @type {?} */
    var allocatedEvents = [];
    eventsMapped.forEach((/**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            /** @type {?} */
            var otherRowEvents = eventsMapped.slice(index + 1).filter((/**
             * @param {?} nextEvent
             * @return {?}
             */
            function (nextEvent) {
                return nextEvent.top === event.top && nextEvent.offset === event.offset;
            }));
            if (otherRowEvents.length > 0) {
                /** @type {?} */
                var totalEventsForRow = otherRowEvents.length + 1;
                event.span = 1 / totalEventsForRow;
                /** @type {?} */
                var nextOffset_1 = event.span + event.offset;
                otherRowEvents.forEach((/**
                 * @param {?} nextEvent
                 * @return {?}
                 */
                function (nextEvent) {
                    nextEvent.offset = nextOffset_1;
                    nextEvent.span = event.span;
                    nextOffset_1 = nextEvent.span + nextEvent.offset;
                }));
                allocatedEvents.push.apply(allocatedEvents, tslib_1.__spread(otherRowEvents));
            }
            eventRows.push({
                row: tslib_1.__spread([event], otherRowEvents),
            });
        }
    }));
    return eventRows;
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getMonthView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c;
    if (!events) {
        events = [];
    }
    /** @type {?} */
    var start = dateFns.startOfWeek(dateFns.startOfMonth(viewDate), { weekStartsOn: weekStartsOn });
    /** @type {?} */
    var end = dateFns.endOfWeek(dateFns.endOfMonth(viewDate), { weekStartsOn: weekStartsOn });
    /** @type {?} */
    var eventsInMonth = getEventsInPeriod({
        events: events,
        periodStart: start,
        periodEnd: end,
    });
    /** @type {?} */
    var days = [];
    var _loop_2 = function (i) {
        /** @type {?} */
        var date = dateFns.addDays(start, i);
        if (!excluded.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return date.getDay() === e; }))) {
            /** @type {?} */
            var day = (/** @type {?} */ (getWeekDay({ date: date })));
            /** @type {?} */
            var calEvents = getEventsInPeriod({
                events: eventsInMonth,
                periodStart: dateFns.startOfDay(date),
                periodEnd: dateFns.endOfDay(date),
            });
            day.inMonth = dateFns.isSameMonth(date, viewDate);
            day.events = calEvents;
            day.badgeTotal = calEvents.length;
            days.push(day);
        }
    };
    for (var i = 0; i < dateFns.differenceInDays(end, start) + 1; i++) {
        _loop_2(i);
    }
    /** @type {?} */
    var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    /** @type {?} */
    var rows = Math.floor(days.length / totalDaysVisibleInWeek);
    /** @type {?} */
    var rowOffsets = [];
    for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getDayView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight;
    if (!events) {
        events = [];
    }
    /** @type {?} */
    var startOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfDay(viewDate), dayStart.hour), dayStart.minute);
    /** @type {?} */
    var endOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfMinute(dateFns.endOfDay(viewDate)), dayEnd.hour), dayEnd.minute);
    /** @type {?} */
    var previousDayEvents = [];
    /** @type {?} */
    var dayViewEvents = getEventsInTimeRange(getEventsInPeriod({
        events: events.filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !event.allDay; })),
        periodStart: startOfView,
        periodEnd: endOfView,
    }), dayStart, dayEnd)
        .sort((/**
     * @param {?} eventA
     * @param {?} eventB
     * @return {?}
     */
    function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
    }))
        .map((/**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var eventStart = event.start;
        /** @type {?} */
        var eventEnd = event.end || eventStart;
        /** @type {?} */
        var startsBeforeDay = eventStart < startOfView;
        /** @type {?} */
        var endsAfterDay = eventEnd > endOfView;
        /** @type {?} */
        var hourHeightModifier = (hourSegments * segmentHeight) / MINUTES_IN_HOUR;
        /** @type {?} */
        var top = 0;
        if (eventStart > startOfView) {
            top += dateFns.differenceInMinutes(eventStart, startOfView);
        }
        top *= hourHeightModifier;
        /** @type {?} */
        var startDate = startsBeforeDay ? startOfView : eventStart;
        /** @type {?} */
        var endDate = endsAfterDay ? endOfView : eventEnd;
        /** @type {?} */
        var height = dateFns.differenceInMinutes(endDate, startDate);
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        /** @type {?} */
        var bottom = top + height;
        /** @type {?} */
        var overlappingPreviousEvents = previousDayEvents.filter((/**
         * @param {?} previousEvent
         * @return {?}
         */
        function (previousEvent) {
            /** @type {?} */
            var previousEventTop = previousEvent.top;
            /** @type {?} */
            var previousEventBottom = previousEvent.top + previousEvent.height;
            if (top < previousEventBottom && previousEventBottom < bottom) {
                return true;
            }
            else if (previousEventTop <= top && bottom <= previousEventBottom) {
                return true;
            }
            return false;
        }));
        /** @type {?} */
        var left = 0;
        while (overlappingPreviousEvents.some((/**
         * @param {?} previousEvent
         * @return {?}
         */
        function (previousEvent) { return previousEvent.left === left; }))) {
            left += eventWidth;
        }
        /** @type {?} */
        var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay,
        };
        if (height > 0) {
            previousDayEvents.push(dayEvent);
        }
        return dayEvent;
    }))
        .filter((/**
     * @param {?} dayEvent
     * @return {?}
     */
    function (dayEvent) { return dayEvent.height > 0; }));
    /** @type {?} */
    var width = Math.max.apply(Math, tslib_1.__spread(dayViewEvents.map((/**
     * @param {?} event
     * @return {?}
     */
    function (event) { return event.left + event.width; }))));
    /** @type {?} */
    var allDayEvents = getEventsInPeriod({
        events: events.filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.allDay; })),
        periodStart: dateFns.startOfDay(startOfView),
        periodEnd: dateFns.endOfDay(endOfView),
    });
    return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getDayViewHourGrid(_a) {
    var viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    /** @type {?} */
    var hours = [];
    /** @type {?} */
    var startOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfDay(viewDate), dayStart.hour), dayStart.minute);
    /** @type {?} */
    var endOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfMinute(dateFns.endOfDay(viewDate)), dayEnd.hour), dayEnd.minute);
    /** @type {?} */
    var segmentDuration = MINUTES_IN_HOUR / hourSegments;
    /** @type {?} */
    var startOfViewDay = dateFns.startOfDay(viewDate);
    for (var i = 0; i < HOURS_IN_DAY; i++) {
        /** @type {?} */
        var segments = [];
        for (var j = 0; j < hourSegments; j++) {
            /** @type {?} */
            var date = dateFns.addMinutes(dateFns.addHours(startOfViewDay, i), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date: date,
                    isStart: j === 0,
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments: segments });
        }
    }
    return hours;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJVdGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOztJQUU5QixtQkFBbUIsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7O0lBQ3RDLFlBQVksR0FBVyxDQUFDOztJQUN4QixZQUFZLEdBQVcsRUFBRTs7SUFDekIsZUFBZSxHQUFXLEVBQUU7O0FBRWxDLElBQVkscUJBQXFCO0lBQy9CLEtBQUssR0FBQTtJQUNMLFFBQVEsR0FBQTtJQUNSLFFBQVEsR0FBQTtFQUNUOzs7Ozs7OztBQUVELG9EQUlDOzs7SUFIQywrQ0FBcUI7O0lBQ3JCLGtEQUFlOztJQUNmLGdEQUFjOzs7OztBQUdoQiw2QkFNQzs7O0lBTEMsdUJBQVc7O0lBQ1gseUJBQWdCOztJQUNoQiwwQkFBaUI7O0lBQ2pCLDJCQUFrQjs7SUFDbEIsNEJBQW1COzs7OztBQUdyQixnQ0FHQzs7O0lBRkMsNkJBQWdCOztJQUNoQiwrQkFBa0I7Ozs7O0FBR3BCLGlDQUlDOzs7SUFIQyw0QkFBYzs7SUFDZCwrQkFBa0I7Ozs7O0lBQ2xCLG1EQUFrRDs7Ozs7QUFHcEQsbUNBaUJDOzs7SUFoQkMsMkJBQVk7O0lBQ1osOEJBQVk7O0lBQ1osNEJBQVc7O0lBQ1gsOEJBQWM7O0lBQ2Qsb0NBQXFCOztJQUNyQiw4QkFBa0I7O0lBQ2xCLDZCQUFjOztJQUNkLGlDQUFpQzs7SUFDakMsZ0NBQXdCOztJQUN4QiwrQkFBaUI7O0lBQ2pCLGlDQUFrQjs7SUFDbEIsa0NBR0U7O0lBQ0Ysa0NBQW9COzs7OztBQUd0QixtQ0FRQzs7O0lBUEMsOEJBQXFCOztJQUNyQiwrQkFBZTs7SUFDZiw2QkFBYTs7SUFDYix5Q0FBMEI7O0lBQzFCLHNDQUF1Qjs7SUFDdkIsNEJBQWE7O0lB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QUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IFdFRUtFTkRfREFZX05VTUJFUlM6IG51bWJlcltdID0gWzAsIDZdO1xuY29uc3QgREFZU19JTl9XRUVLOiBudW1iZXIgPSA3O1xuY29uc3QgSE9VUlNfSU5fREFZOiBudW1iZXIgPSAyNDtcbmNvbnN0IE1JTlVURVNfSU5fSE9VUjogbnVtYmVyID0gNjA7XG5cbmV4cG9ydCBlbnVtIENhbGVuZGFyRXZlbnRSZXNwb25zZSB7XG4gIE1heWJlLFxuICBBY2NlcHRlZCxcbiAgUmVqZWN0ZWQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50IHtcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIG5ld1N0YXJ0OiBEYXRlO1xuICBuZXdFbmQ/OiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtEYXkge1xuICBkYXRlOiBEYXRlO1xuICBpc1Bhc3Q6IGJvb2xlYW47XG4gIGlzVG9kYXk6IGJvb2xlYW47XG4gIGlzRnV0dXJlOiBib29sZWFuO1xuICBpc1dlZWtlbmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRDb2xvciB7XG4gIHByaW1hcnk6IHN0cmluZztcbiAgc2Vjb25kYXJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRBY3Rpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICBjc3NDbGFzcz86IHN0cmluZztcbiAgb25DbGljayh7IGV2ZW50IH06IHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfSk6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhckV2ZW50IHtcbiAgaWQ/OiBudW1iZXI7XG4gIHN0YXJ0OiBEYXRlO1xuICBlbmQ/OiBEYXRlO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgY29sb3I6IEV2ZW50Q29sb3I7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHJlc3BvbnNlPzogQ2FsZW5kYXJFdmVudFJlc3BvbnNlO1xuICBhY3Rpb25zPzogRXZlbnRBY3Rpb25bXTtcbiAgYWxsRGF5PzogYm9vbGVhbjtcbiAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gIHJlc2l6YWJsZT86IHtcbiAgICBiZWZvcmVTdGFydD86IGJvb2xlYW47XG4gICAgYWZ0ZXJFbmQ/OiBib29sZWFuO1xuICB9O1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtWaWV3RXZlbnQge1xuICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHNwYW46IG51bWJlcjtcbiAgc3RhcnRzQmVmb3JlV2VlazogYm9vbGVhbjtcbiAgZW5kc0FmdGVyV2VlazogYm9vbGVhbjtcbiAgdG9wPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1ZpZXdFdmVudFJvdyB7XG4gIHJvdzogV2Vla1ZpZXdFdmVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoVmlld0RheSBleHRlbmRzIFdlZWtEYXkge1xuICBpbk1vbnRoOiBib29sZWFuO1xuICBldmVudHM6IENhbGVuZGFyRXZlbnRbXTtcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBjc3NDbGFzcz86IHN0cmluZztcbiAgYmFkZ2VUb3RhbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoVmlldyB7XG4gIHJvd09mZnNldHM6IG51bWJlcltdO1xuICBkYXlzOiBNb250aFZpZXdEYXlbXTtcbiAgdG90YWxEYXlzVmlzaWJsZUluV2VlazogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdFdmVudCB7XG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgc3RhcnRzQmVmb3JlRGF5OiBib29sZWFuO1xuICBlbmRzQWZ0ZXJEYXk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5VmlldyB7XG4gIGV2ZW50czogRGF5Vmlld0V2ZW50W107XG4gIHdpZHRoOiBudW1iZXI7XG4gIGFsbERheUV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdIb3VyU2VnbWVudCB7XG4gIGlzU3RhcnQ6IGJvb2xlYW47XG4gIGRhdGU6IERhdGU7XG4gIGNzc0NsYXNzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdIb3VyIHtcbiAgc2VnbWVudHM6IERheVZpZXdIb3VyU2VnbWVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElzRXZlbnRJblBlcmlvZEFyZ3Mge1xuICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgcGVyaW9kU3RhcnQ6IERhdGU7XG4gIHBlcmlvZEVuZDogRGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRFdmVudHNJblBlcmlvZEFyZ3Mge1xuICBldmVudHM6IENhbGVuZGFyRXZlbnRbXTtcbiAgcGVyaW9kU3RhcnQ6IERhdGU7XG4gIHBlcmlvZEVuZDogRGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXREYXlWaWV3QXJncyB7XG4gIGV2ZW50cz86IENhbGVuZGFyRXZlbnRbXTtcbiAgdmlld0RhdGU6IERhdGU7XG4gIGhvdXJTZWdtZW50czogbnVtYmVyO1xuICBkYXlTdGFydDoge1xuICAgIGhvdXI6IG51bWJlcjtcbiAgICBtaW51dGU6IG51bWJlcjtcbiAgfTtcbiAgZGF5RW5kOiB7XG4gICAgaG91cjogbnVtYmVyO1xuICAgIG1pbnV0ZTogbnVtYmVyO1xuICB9O1xuICBldmVudFdpZHRoOiBudW1iZXI7XG4gIHNlZ21lbnRIZWlnaHQ6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gZ2V0RXhjbHVkZWREYXlzKHsgc3RhcnREYXRlLCBkYXlzLCBleGNsdWRlZCB9OiB7IHN0YXJ0RGF0ZTogRGF0ZTsgZGF5czogbnVtYmVyOyBleGNsdWRlZDogbnVtYmVyW10gfSk6IG51bWJlciB7XG4gIGlmIChleGNsdWRlZC5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgbGV0IGRheTogbnVtYmVyID0gc3RhcnREYXRlLmdldERheSgpO1xuICBsZXQgcmVkdWNlOiBudW1iZXIgPSAwO1xuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF5czsgaSsrKSB7XG4gICAgaWYgKGRheSA9PT0gREFZU19JTl9XRUVLKSB7XG4gICAgICBkYXkgPSAwO1xuICAgIH1cbiAgICBpZiAoZXhjbHVkZWQuc29tZSgoZSkgPT4gZSA9PT0gZGF5KSkge1xuICAgICAgcmVkdWNlKys7XG4gICAgfVxuICAgIGRheSsrO1xuICB9XG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtWaWV3RXZlbnRTcGFuKHtcbiAgZXZlbnQsXG4gIG9mZnNldCxcbiAgc3RhcnRPZldlZWssXG4gIGV4Y2x1ZGVkLFxufToge1xuICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHN0YXJ0T2ZXZWVrOiBEYXRlO1xuICBleGNsdWRlZDogbnVtYmVyW107XG59KTogbnVtYmVyIHtcbiAgY29uc3QgYmVnaW46IERhdGUgPSBldmVudC5zdGFydCA8IHN0YXJ0T2ZXZWVrID8gc3RhcnRPZldlZWsgOiBldmVudC5zdGFydDtcbiAgbGV0IHNwYW46IG51bWJlciA9IDE7XG4gIGlmIChldmVudC5lbmQpIHtcbiAgICBzcGFuID0gZGF0ZUZucy5kaWZmZXJlbmNlSW5EYXlzKGRhdGVGbnMuYWRkTWludXRlcyhkYXRlRm5zLmVuZE9mRGF5KGV2ZW50LmVuZCksIDEpLCBkYXRlRm5zLnN0YXJ0T2ZEYXkoYmVnaW4pKTtcbiAgfVxuICBjb25zdCB0b3RhbExlbmd0aDogbnVtYmVyID0gb2Zmc2V0ICsgc3BhbjtcbiAgaWYgKHRvdGFsTGVuZ3RoID4gREFZU19JTl9XRUVLKSB7XG4gICAgc3BhbiA9IERBWVNfSU5fV0VFSyAtIG9mZnNldDtcbiAgfVxuICByZXR1cm4gc3BhbiAtIGdldEV4Y2x1ZGVkRGF5cyh7IHN0YXJ0RGF0ZTogYmVnaW4sIGRheXM6IHNwYW4sIGV4Y2x1ZGVkIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1ZpZXdFdmVudE9mZnNldCh7XG4gIGV2ZW50LFxuICBzdGFydE9mV2VlayxcbiAgZXhjbHVkZWQgPSBbXSxcbn06IHtcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIHN0YXJ0T2ZXZWVrOiBEYXRlO1xuICBleGNsdWRlZD86IG51bWJlcltdO1xufSk6IG51bWJlciB7XG4gIGlmIChldmVudC5zdGFydCA8IHN0YXJ0T2ZXZWVrKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc3QgZGlzdGFuY2U6IG51bWJlciA9IGRhdGVGbnMuZGlmZmVyZW5jZUluRGF5cyhldmVudC5zdGFydCwgc3RhcnRPZldlZWspO1xuICByZXR1cm4gZGlzdGFuY2UgLSBnZXRFeGNsdWRlZERheXMoeyBzdGFydERhdGU6IHN0YXJ0T2ZXZWVrLCBkYXlzOiBkaXN0YW5jZSwgZXhjbHVkZWQgfSk7XG59XG5cbmZ1bmN0aW9uIGlzRXZlbnRJc1BlcmlvZCh7IGV2ZW50LCBwZXJpb2RTdGFydCwgcGVyaW9kRW5kIH06IElzRXZlbnRJblBlcmlvZEFyZ3MpOiBib29sZWFuIHtcbiAgY29uc3QgZXZlbnRTdGFydDogRGF0ZSA9IGV2ZW50LnN0YXJ0O1xuICBjb25zdCBldmVudEVuZDogRGF0ZSA9IGV2ZW50LmVuZCB8fCBldmVudC5zdGFydDtcblxuICBpZiAoZXZlbnRTdGFydCA+IHBlcmlvZFN0YXJ0ICYmIGV2ZW50U3RhcnQgPCBwZXJpb2RFbmQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChldmVudEVuZCA+IHBlcmlvZFN0YXJ0ICYmIGV2ZW50RW5kIDwgcGVyaW9kRW5kKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZXZlbnRTdGFydCA8IHBlcmlvZFN0YXJ0ICYmIGV2ZW50RW5kID4gcGVyaW9kRW5kKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZGF0ZUZucy5pc1NhbWVTZWNvbmQoZXZlbnRTdGFydCwgcGVyaW9kU3RhcnQpIHx8IGRhdGVGbnMuaXNTYW1lU2Vjb25kKGV2ZW50U3RhcnQsIHBlcmlvZEVuZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChkYXRlRm5zLmlzU2FtZVNlY29uZChldmVudEVuZCwgcGVyaW9kU3RhcnQpIHx8IGRhdGVGbnMuaXNTYW1lU2Vjb25kKGV2ZW50RW5kLCBwZXJpb2RFbmQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50c0luUGVyaW9kKHsgZXZlbnRzLCBwZXJpb2RTdGFydCwgcGVyaW9kRW5kIH06IEdldEV2ZW50c0luUGVyaW9kQXJncyk6IENhbGVuZGFyRXZlbnRbXSB7XG4gIHJldHVybiBldmVudHMuZmlsdGVyKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4gaXNFdmVudElzUGVyaW9kKHsgZXZlbnQsIHBlcmlvZFN0YXJ0LCBwZXJpb2RFbmQgfSkpO1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudHNJblRpbWVSYW5nZShldmVudHM6IENhbGVuZGFyRXZlbnRbXSwgZGF5U3RhcnQ6IGFueSwgZGF5RW5kOiBhbnkpIHtcbiAgcmV0dXJuIGV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZXZlbnRTdGFydDogRGF0ZSA9IGV2ZW50LnN0YXJ0O1xuICAgIGNvbnN0IGV2ZW50RW5kOiBEYXRlID0gZXZlbnQuZW5kIHx8IGV2ZW50U3RhcnQ7XG5cbiAgICBjb25zdCBzdGFydE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZkRheShldmVudFN0YXJ0KSwgZGF5U3RhcnQuaG91ciksIGRheVN0YXJ0Lm1pbnV0ZSk7XG4gICAgY29uc3QgZW5kT2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mTWludXRlKGV2ZW50U3RhcnQpLCBkYXlFbmQuaG91ciksIGRheUVuZC5taW51dGUpO1xuXG4gICAgcmV0dXJuIGRhdGVGbnMuaXNBZnRlcihldmVudEVuZCwgc3RhcnRPZlZpZXcpICYmIGRhdGVGbnMuaXNCZWZvcmUoZXZlbnRTdGFydCwgZW5kT2ZWaWV3KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtEYXkoeyBkYXRlIH06IHsgZGF0ZTogRGF0ZSB9KTogV2Vla0RheSB7XG4gIGNvbnN0IHRvZGF5OiBEYXRlID0gZGF0ZUZucy5zdGFydE9mRGF5KG5ldyBEYXRlKCkpO1xuICByZXR1cm4ge1xuICAgIGRhdGUsXG4gICAgaXNQYXN0OiBkYXRlIDwgdG9kYXksXG4gICAgaXNUb2RheTogZGF0ZUZucy5pc1NhbWVEYXkoZGF0ZSwgdG9kYXkpLFxuICAgIGlzRnV0dXJlOiBkYXRlID4gdG9kYXksXG4gICAgaXNXZWVrZW5kOiBXRUVLRU5EX0RBWV9OVU1CRVJTLmluZGV4T2YoZGF0ZUZucy5nZXREYXkoZGF0ZSkpID4gLTEsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrVmlld0hlYWRlcih7XG4gIHZpZXdEYXRlLFxuICB3ZWVrU3RhcnRzT24sXG4gIGV4Y2x1ZGVkID0gW10sXG59OiB7XG4gIHZpZXdEYXRlOiBEYXRlO1xuICB3ZWVrU3RhcnRzT246IG51bWJlcjtcbiAgZXhjbHVkZWQ/OiBudW1iZXJbXTtcbn0pOiBXZWVrRGF5W10ge1xuICBjb25zdCBzdGFydDogRGF0ZSA9IGRhdGVGbnMuc3RhcnRPZldlZWsodmlld0RhdGUsIHsgd2Vla1N0YXJ0c09uIH0pO1xuICBjb25zdCBkYXlzOiBXZWVrRGF5W10gPSBbXTtcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IERBWVNfSU5fV0VFSzsgaSsrKSB7XG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9IGRhdGVGbnMuYWRkRGF5cyhzdGFydCwgaSk7XG4gICAgaWYgKCFleGNsdWRlZC5zb21lKChlKSA9PiBkYXRlLmdldERheSgpID09PSBlKSkge1xuICAgICAgZGF5cy5wdXNoKGdldFdlZWtEYXkoeyBkYXRlIH0pKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF5cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtWaWV3KHtcbiAgZXZlbnRzID0gW10sXG4gIHZpZXdEYXRlLFxuICB3ZWVrU3RhcnRzT24sXG4gIGV4Y2x1ZGVkID0gW10sXG4gIGhvdXJTZWdtZW50cyxcbiAgc2VnbWVudEhlaWdodCxcbiAgZGF5U3RhcnQsXG4gIGRheUVuZCxcbn06IHtcbiAgZXZlbnRzPzogQ2FsZW5kYXJFdmVudFtdO1xuICB2aWV3RGF0ZTogRGF0ZTtcbiAgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG4gIGV4Y2x1ZGVkPzogbnVtYmVyW107XG4gIGhvdXJTZWdtZW50czogbnVtYmVyO1xuICBzZWdtZW50SGVpZ2h0OiBudW1iZXI7XG4gIGRheVN0YXJ0OiBhbnk7XG4gIGRheUVuZDogYW55O1xufSk6IFdlZWtWaWV3RXZlbnRSb3dbXSB7XG4gIGlmICghZXZlbnRzKSB7XG4gICAgZXZlbnRzID0gW107XG4gIH1cblxuICBjb25zdCBzdGFydE9mVmlld1dlZWs6IERhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZXZWVrKHZpZXdEYXRlLCB7IHdlZWtTdGFydHNPbiB9KTtcbiAgY29uc3QgZW5kT2ZWaWV3V2VlazogRGF0ZSA9IGRhdGVGbnMuZW5kT2ZXZWVrKHZpZXdEYXRlLCB7IHdlZWtTdGFydHNPbiB9KTtcbiAgY29uc3QgbWF4UmFuZ2U6IG51bWJlciA9IERBWVNfSU5fV0VFSyAtIGV4Y2x1ZGVkLmxlbmd0aDtcblxuICBjb25zdCBldmVudHNNYXBwZWQ6IFdlZWtWaWV3RXZlbnRbXSA9IGdldEV2ZW50c0luVGltZVJhbmdlKFxuICAgIGdldEV2ZW50c0luUGVyaW9kKHsgZXZlbnRzLCBwZXJpb2RTdGFydDogc3RhcnRPZlZpZXdXZWVrLCBwZXJpb2RFbmQ6IGVuZE9mVmlld1dlZWsgfSksXG4gICAgZGF5U3RhcnQsXG4gICAgZGF5RW5kLFxuICApXG4gICAgLm1hcCgoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldDogbnVtYmVyID0gZ2V0V2Vla1ZpZXdFdmVudE9mZnNldCh7IGV2ZW50LCBzdGFydE9mV2Vlazogc3RhcnRPZlZpZXdXZWVrLCBleGNsdWRlZCB9KTtcbiAgICAgIGNvbnN0IHNwYW46IG51bWJlciA9IDE7IC8vIGdldFdlZWtWaWV3RXZlbnRTcGFuKHsgZXZlbnQsIG9mZnNldCwgc3RhcnRPZldlZWs6IHN0YXJ0T2ZWaWV3V2VlaywgZXhjbHVkZWQgfSk7XG4gICAgICByZXR1cm4geyBldmVudCwgb2Zmc2V0LCBzcGFuIH07XG4gICAgfSlcbiAgICAuZmlsdGVyKChlKSA9PiBlLm9mZnNldCA8IG1heFJhbmdlKVxuICAgIC5maWx0ZXIoKGUpID0+IGUuc3BhbiA+IDApXG4gICAgLm1hcCgoZW50cnkpID0+ICh7XG4gICAgICBldmVudDogZW50cnkuZXZlbnQsXG4gICAgICBvZmZzZXQ6IGVudHJ5Lm9mZnNldCxcbiAgICAgIHNwYW46IGVudHJ5LnNwYW4sXG4gICAgICBzdGFydHNCZWZvcmVXZWVrOiBlbnRyeS5ldmVudC5zdGFydCA8IHN0YXJ0T2ZWaWV3V2VlayxcbiAgICAgIGVuZHNBZnRlcldlZWs6IChlbnRyeS5ldmVudC5lbmQgfHwgZW50cnkuZXZlbnQuc3RhcnQpID4gZW5kT2ZWaWV3V2VlayxcbiAgICAgIHRvcDogMCxcbiAgICB9KSlcbiAgICAuc29ydChcbiAgICAgIChpdGVtQSwgaXRlbUIpOiBudW1iZXIgPT4ge1xuICAgICAgICBjb25zdCBzdGFydFNlY29uZHNEaWZmOiBudW1iZXIgPSBkYXRlRm5zLmRpZmZlcmVuY2VJblNlY29uZHMoaXRlbUEuZXZlbnQuc3RhcnQsIGl0ZW1CLmV2ZW50LnN0YXJ0KTtcbiAgICAgICAgaWYgKHN0YXJ0U2Vjb25kc0RpZmYgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZGF0ZUZucy5kaWZmZXJlbmNlSW5TZWNvbmRzKGl0ZW1CLmV2ZW50LmVuZCB8fCBpdGVtQi5ldmVudC5zdGFydCwgaXRlbUEuZXZlbnQuZW5kIHx8IGl0ZW1BLmV2ZW50LnN0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhcnRTZWNvbmRzRGlmZjtcbiAgICAgIH0sXG4gICAgKVxuICAgIC5tYXAoKGVudHJ5OiBXZWVrVmlld0V2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGFydE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZkRheShlbnRyeS5ldmVudC5zdGFydCksIGRheVN0YXJ0LmhvdXIpLCBkYXlTdGFydC5taW51dGUpO1xuICAgICAgY29uc3QgZW5kT2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKFxuICAgICAgICBkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZk1pbnV0ZShkYXRlRm5zLmVuZE9mRGF5KGVudHJ5LmV2ZW50LnN0YXJ0KSksIGRheUVuZC5ob3VyKSxcbiAgICAgICAgZGF5RW5kLm1pbnV0ZSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGV2ZW50U3RhcnQ6IERhdGUgPSBlbnRyeS5ldmVudC5zdGFydDtcbiAgICAgIGNvbnN0IGV2ZW50RW5kOiBEYXRlID0gZW50cnkuZXZlbnQuZW5kIHx8IGV2ZW50U3RhcnQ7XG5cbiAgICAgIGNvbnN0IGhvdXJIZWlnaHRNb2RpZmllcjogbnVtYmVyID0gKGhvdXJTZWdtZW50cyAqIHNlZ21lbnRIZWlnaHQpIC8gTUlOVVRFU19JTl9IT1VSO1xuXG4gICAgICBpZiAoZXZlbnRTdGFydCA+IHN0YXJ0T2ZWaWV3KSB7XG4gICAgICAgIGVudHJ5LnRvcCArPSBkYXRlRm5zLmRpZmZlcmVuY2VJbk1pbnV0ZXMoZXZlbnRTdGFydCwgc3RhcnRPZlZpZXcpO1xuICAgICAgfVxuXG4gICAgICBlbnRyeS50b3AgKj0gaG91ckhlaWdodE1vZGlmaWVyO1xuXG4gICAgICBjb25zdCBzdGFydHNCZWZvcmVEYXk6IGJvb2xlYW4gPSBldmVudFN0YXJ0IDwgc3RhcnRPZlZpZXc7XG4gICAgICBjb25zdCBlbmRzQWZ0ZXJEYXk6IGJvb2xlYW4gPSBldmVudEVuZCA+IGVuZE9mVmlldztcblxuICAgICAgY29uc3Qgc3RhcnREYXRlOiBEYXRlID0gc3RhcnRzQmVmb3JlRGF5ID8gc3RhcnRPZlZpZXcgOiBldmVudFN0YXJ0O1xuICAgICAgY29uc3QgZW5kRGF0ZTogRGF0ZSA9IGVuZHNBZnRlckRheSA/IGVuZE9mVmlldyA6IGV2ZW50RW5kO1xuXG4gICAgICBsZXQgaGVpZ2h0OiBudW1iZXIgPSBkYXRlRm5zLmRpZmZlcmVuY2VJbk1pbnV0ZXMoZW5kRGF0ZSwgc3RhcnREYXRlKTtcblxuICAgICAgaWYgKCFlbnRyeS5ldmVudC5lbmQpIHtcbiAgICAgICAgaGVpZ2h0ID0gc2VnbWVudEhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodCAqPSBob3VySGVpZ2h0TW9kaWZpZXI7XG4gICAgICB9XG5cbiAgICAgIGVudHJ5LmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgcmV0dXJuIGVudHJ5O1xuICAgIH0pO1xuXG4gIGNvbnN0IGV2ZW50Um93czogV2Vla1ZpZXdFdmVudFJvd1tdID0gW107XG4gIGNvbnN0IGFsbG9jYXRlZEV2ZW50czogV2Vla1ZpZXdFdmVudFtdID0gW107XG5cbiAgZXZlbnRzTWFwcGVkLmZvckVhY2goKGV2ZW50OiBXZWVrVmlld0V2ZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGFsbG9jYXRlZEV2ZW50cy5pbmRleE9mKGV2ZW50KSA9PT0gLTEpIHtcbiAgICAgIGFsbG9jYXRlZEV2ZW50cy5wdXNoKGV2ZW50KTtcblxuICAgICAgY29uc3Qgb3RoZXJSb3dFdmVudHM6IFdlZWtWaWV3RXZlbnRbXSA9IGV2ZW50c01hcHBlZC5zbGljZShpbmRleCArIDEpLmZpbHRlcigobmV4dEV2ZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXh0RXZlbnQudG9wID09PSBldmVudC50b3AgJiYgbmV4dEV2ZW50Lm9mZnNldCA9PT0gZXZlbnQub2Zmc2V0O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChvdGhlclJvd0V2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCB0b3RhbEV2ZW50c0ZvclJvdyA9IG90aGVyUm93RXZlbnRzLmxlbmd0aCArIDE7XG5cbiAgICAgICAgZXZlbnQuc3BhbiA9IDEgLyB0b3RhbEV2ZW50c0ZvclJvdztcblxuICAgICAgICBsZXQgbmV4dE9mZnNldCA9IGV2ZW50LnNwYW4gKyBldmVudC5vZmZzZXQ7XG5cbiAgICAgICAgb3RoZXJSb3dFdmVudHMuZm9yRWFjaCgobmV4dEV2ZW50OiBXZWVrVmlld0V2ZW50KSA9PiB7XG4gICAgICAgICAgbmV4dEV2ZW50Lm9mZnNldCA9IG5leHRPZmZzZXQ7XG4gICAgICAgICAgbmV4dEV2ZW50LnNwYW4gPSBldmVudC5zcGFuO1xuICAgICAgICAgIG5leHRPZmZzZXQgPSBuZXh0RXZlbnQuc3BhbiArIG5leHRFdmVudC5vZmZzZXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFsbG9jYXRlZEV2ZW50cy5wdXNoKC4uLm90aGVyUm93RXZlbnRzKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnRSb3dzLnB1c2goe1xuICAgICAgICByb3c6IFtldmVudCwgLi4ub3RoZXJSb3dFdmVudHNdLFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRSb3dzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGhWaWV3KHtcbiAgZXZlbnRzID0gW10sXG4gIHZpZXdEYXRlLFxuICB3ZWVrU3RhcnRzT24sXG4gIGV4Y2x1ZGVkID0gW10sXG59OiB7XG4gIGV2ZW50cz86IENhbGVuZGFyRXZlbnRbXTtcbiAgdmlld0RhdGU6IERhdGU7XG4gIHdlZWtTdGFydHNPbjogbnVtYmVyO1xuICBleGNsdWRlZD86IG51bWJlcltdO1xufSk6IE1vbnRoVmlldyB7XG4gIGlmICghZXZlbnRzKSB7XG4gICAgZXZlbnRzID0gW107XG4gIH1cblxuICBjb25zdCBzdGFydDogRGF0ZSA9IGRhdGVGbnMuc3RhcnRPZldlZWsoZGF0ZUZucy5zdGFydE9mTW9udGgodmlld0RhdGUpLCB7IHdlZWtTdGFydHNPbiB9KTtcbiAgY29uc3QgZW5kOiBEYXRlID0gZGF0ZUZucy5lbmRPZldlZWsoZGF0ZUZucy5lbmRPZk1vbnRoKHZpZXdEYXRlKSwgeyB3ZWVrU3RhcnRzT24gfSk7XG4gIGNvbnN0IGV2ZW50c0luTW9udGg6IENhbGVuZGFyRXZlbnRbXSA9IGdldEV2ZW50c0luUGVyaW9kKHtcbiAgICBldmVudHMsXG4gICAgcGVyaW9kU3RhcnQ6IHN0YXJ0LFxuICAgIHBlcmlvZEVuZDogZW5kLFxuICB9KTtcbiAgY29uc3QgZGF5czogTW9udGhWaWV3RGF5W10gPSBbXTtcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGRhdGVGbnMuZGlmZmVyZW5jZUluRGF5cyhlbmQsIHN0YXJ0KSArIDE7IGkrKykge1xuICAgIGNvbnN0IGRhdGU6IERhdGUgPSBkYXRlRm5zLmFkZERheXMoc3RhcnQsIGkpO1xuICAgIGlmICghZXhjbHVkZWQuc29tZSgoZSkgPT4gZGF0ZS5nZXREYXkoKSA9PT0gZSkpIHtcbiAgICAgIGNvbnN0IGRheTogTW9udGhWaWV3RGF5ID0gZ2V0V2Vla0RheSh7IGRhdGUgfSkgYXMgTW9udGhWaWV3RGF5O1xuICAgICAgY29uc3QgY2FsRXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBnZXRFdmVudHNJblBlcmlvZCh7XG4gICAgICAgIGV2ZW50czogZXZlbnRzSW5Nb250aCxcbiAgICAgICAgcGVyaW9kU3RhcnQ6IGRhdGVGbnMuc3RhcnRPZkRheShkYXRlKSxcbiAgICAgICAgcGVyaW9kRW5kOiBkYXRlRm5zLmVuZE9mRGF5KGRhdGUpLFxuICAgICAgfSk7XG4gICAgICBkYXkuaW5Nb250aCA9IGRhdGVGbnMuaXNTYW1lTW9udGgoZGF0ZSwgdmlld0RhdGUpO1xuICAgICAgZGF5LmV2ZW50cyA9IGNhbEV2ZW50cztcbiAgICAgIGRheS5iYWRnZVRvdGFsID0gY2FsRXZlbnRzLmxlbmd0aDtcbiAgICAgIGRheXMucHVzaChkYXkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvdGFsRGF5c1Zpc2libGVJbldlZWs6IG51bWJlciA9IERBWVNfSU5fV0VFSyAtIGV4Y2x1ZGVkLmxlbmd0aDtcbiAgY29uc3Qgcm93czogbnVtYmVyID0gTWF0aC5mbG9vcihkYXlzLmxlbmd0aCAvIHRvdGFsRGF5c1Zpc2libGVJbldlZWspO1xuICBjb25zdCByb3dPZmZzZXRzOiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgcm93T2Zmc2V0cy5wdXNoKGkgKiB0b3RhbERheXNWaXNpYmxlSW5XZWVrKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcm93T2Zmc2V0cyxcbiAgICB0b3RhbERheXNWaXNpYmxlSW5XZWVrLFxuICAgIGRheXMsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlWaWV3KHsgZXZlbnRzID0gW10sIHZpZXdEYXRlLCBob3VyU2VnbWVudHMsIGRheVN0YXJ0LCBkYXlFbmQsIGV2ZW50V2lkdGgsIHNlZ21lbnRIZWlnaHQgfTogR2V0RGF5Vmlld0FyZ3MpOiBEYXlWaWV3IHtcbiAgaWYgKCFldmVudHMpIHtcbiAgICBldmVudHMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0T2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mRGF5KHZpZXdEYXRlKSwgZGF5U3RhcnQuaG91ciksIGRheVN0YXJ0Lm1pbnV0ZSk7XG4gIGNvbnN0IGVuZE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhcbiAgICBkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZk1pbnV0ZShkYXRlRm5zLmVuZE9mRGF5KHZpZXdEYXRlKSksIGRheUVuZC5ob3VyKSxcbiAgICBkYXlFbmQubWludXRlLFxuICApO1xuICBjb25zdCBwcmV2aW91c0RheUV2ZW50czogRGF5Vmlld0V2ZW50W10gPSBbXTtcblxuICBjb25zdCBkYXlWaWV3RXZlbnRzOiBEYXlWaWV3RXZlbnRbXSA9IGdldEV2ZW50c0luVGltZVJhbmdlKFxuICAgIGdldEV2ZW50c0luUGVyaW9kKHtcbiAgICAgIGV2ZW50czogZXZlbnRzLmZpbHRlcigoZXZlbnQ6IENhbGVuZGFyRXZlbnQpID0+ICFldmVudC5hbGxEYXkpLFxuICAgICAgcGVyaW9kU3RhcnQ6IHN0YXJ0T2ZWaWV3LFxuICAgICAgcGVyaW9kRW5kOiBlbmRPZlZpZXcsXG4gICAgfSksXG4gICAgZGF5U3RhcnQsXG4gICAgZGF5RW5kLFxuICApXG4gICAgLnNvcnQoKGV2ZW50QTogQ2FsZW5kYXJFdmVudCwgZXZlbnRCOiBDYWxlbmRhckV2ZW50KSA9PiB7XG4gICAgICByZXR1cm4gZXZlbnRBLnN0YXJ0LnZhbHVlT2YoKSAtIGV2ZW50Qi5zdGFydC52YWx1ZU9mKCk7XG4gICAgfSlcbiAgICAubWFwKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnRTdGFydDogRGF0ZSA9IGV2ZW50LnN0YXJ0O1xuICAgICAgY29uc3QgZXZlbnRFbmQ6IERhdGUgPSBldmVudC5lbmQgfHwgZXZlbnRTdGFydDtcbiAgICAgIGNvbnN0IHN0YXJ0c0JlZm9yZURheTogYm9vbGVhbiA9IGV2ZW50U3RhcnQgPCBzdGFydE9mVmlldztcbiAgICAgIGNvbnN0IGVuZHNBZnRlckRheTogYm9vbGVhbiA9IGV2ZW50RW5kID4gZW5kT2ZWaWV3O1xuICAgICAgY29uc3QgaG91ckhlaWdodE1vZGlmaWVyOiBudW1iZXIgPSAoaG91clNlZ21lbnRzICogc2VnbWVudEhlaWdodCkgLyBNSU5VVEVTX0lOX0hPVVI7XG5cbiAgICAgIGxldCB0b3A6IG51bWJlciA9IDA7XG5cbiAgICAgIGlmIChldmVudFN0YXJ0ID4gc3RhcnRPZlZpZXcpIHtcbiAgICAgICAgdG9wICs9IGRhdGVGbnMuZGlmZmVyZW5jZUluTWludXRlcyhldmVudFN0YXJ0LCBzdGFydE9mVmlldyk7XG4gICAgICB9XG5cbiAgICAgIHRvcCAqPSBob3VySGVpZ2h0TW9kaWZpZXI7XG5cbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZTogRGF0ZSA9IHN0YXJ0c0JlZm9yZURheSA/IHN0YXJ0T2ZWaWV3IDogZXZlbnRTdGFydDtcbiAgICAgIGNvbnN0IGVuZERhdGU6IERhdGUgPSBlbmRzQWZ0ZXJEYXkgPyBlbmRPZlZpZXcgOiBldmVudEVuZDtcblxuICAgICAgbGV0IGhlaWdodDogbnVtYmVyID0gZGF0ZUZucy5kaWZmZXJlbmNlSW5NaW51dGVzKGVuZERhdGUsIHN0YXJ0RGF0ZSk7XG5cbiAgICAgIGlmICghZXZlbnQuZW5kKSB7XG4gICAgICAgIGhlaWdodCA9IHNlZ21lbnRIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWlnaHQgKj0gaG91ckhlaWdodE1vZGlmaWVyO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBib3R0b206IG51bWJlciA9IHRvcCArIGhlaWdodDtcblxuICAgICAgY29uc3Qgb3ZlcmxhcHBpbmdQcmV2aW91c0V2ZW50czogRGF5Vmlld0V2ZW50W10gPSBwcmV2aW91c0RheUV2ZW50cy5maWx0ZXIoKHByZXZpb3VzRXZlbnQ6IERheVZpZXdFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91c0V2ZW50VG9wOiBudW1iZXIgPSBwcmV2aW91c0V2ZW50LnRvcDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNFdmVudEJvdHRvbTogbnVtYmVyID0gcHJldmlvdXNFdmVudC50b3AgKyBwcmV2aW91c0V2ZW50LmhlaWdodDtcblxuICAgICAgICBpZiAodG9wIDwgcHJldmlvdXNFdmVudEJvdHRvbSAmJiBwcmV2aW91c0V2ZW50Qm90dG9tIDwgYm90dG9tKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNFdmVudFRvcCA8PSB0b3AgJiYgYm90dG9tIDw9IHByZXZpb3VzRXZlbnRCb3R0b20pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGVmdDogbnVtYmVyID0gMDtcblxuICAgICAgd2hpbGUgKG92ZXJsYXBwaW5nUHJldmlvdXNFdmVudHMuc29tZSgocHJldmlvdXNFdmVudCkgPT4gcHJldmlvdXNFdmVudC5sZWZ0ID09PSBsZWZ0KSkge1xuICAgICAgICBsZWZ0ICs9IGV2ZW50V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRheUV2ZW50OiBEYXlWaWV3RXZlbnQgPSB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoOiBldmVudFdpZHRoLFxuICAgICAgICB0b3AsXG4gICAgICAgIGxlZnQsXG4gICAgICAgIHN0YXJ0c0JlZm9yZURheSxcbiAgICAgICAgZW5kc0FmdGVyRGF5LFxuICAgICAgfTtcblxuICAgICAgaWYgKGhlaWdodCA+IDApIHtcbiAgICAgICAgcHJldmlvdXNEYXlFdmVudHMucHVzaChkYXlFdmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXlFdmVudDtcbiAgICB9KVxuICAgIC5maWx0ZXIoKGRheUV2ZW50OiBEYXlWaWV3RXZlbnQpID0+IGRheUV2ZW50LmhlaWdodCA+IDApO1xuXG4gIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBNYXRoLm1heCguLi5kYXlWaWV3RXZlbnRzLm1hcCgoZXZlbnQ6IERheVZpZXdFdmVudCkgPT4gZXZlbnQubGVmdCArIGV2ZW50LndpZHRoKSk7XG4gIGNvbnN0IGFsbERheUV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gZ2V0RXZlbnRzSW5QZXJpb2Qoe1xuICAgIGV2ZW50czogZXZlbnRzLmZpbHRlcigoZXZlbnQ6IENhbGVuZGFyRXZlbnQpID0+IGV2ZW50LmFsbERheSksXG4gICAgcGVyaW9kU3RhcnQ6IGRhdGVGbnMuc3RhcnRPZkRheShzdGFydE9mVmlldyksXG4gICAgcGVyaW9kRW5kOiBkYXRlRm5zLmVuZE9mRGF5KGVuZE9mVmlldyksXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZXZlbnRzOiBkYXlWaWV3RXZlbnRzLFxuICAgIHdpZHRoLFxuICAgIGFsbERheUV2ZW50cyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheVZpZXdIb3VyR3JpZCh7XG4gIHZpZXdEYXRlLFxuICBob3VyU2VnbWVudHMsXG4gIGRheVN0YXJ0LFxuICBkYXlFbmQsXG59OiB7XG4gIHZpZXdEYXRlOiBEYXRlO1xuICBob3VyU2VnbWVudHM6IG51bWJlcjtcbiAgZGF5U3RhcnQ6IGFueTtcbiAgZGF5RW5kOiBhbnk7XG59KTogRGF5Vmlld0hvdXJbXSB7XG4gIGNvbnN0IGhvdXJzOiBEYXlWaWV3SG91cltdID0gW107XG5cbiAgY29uc3Qgc3RhcnRPZlZpZXc6IERhdGUgPSBkYXRlRm5zLnNldE1pbnV0ZXMoZGF0ZUZucy5zZXRIb3VycyhkYXRlRm5zLnN0YXJ0T2ZEYXkodmlld0RhdGUpLCBkYXlTdGFydC5ob3VyKSwgZGF5U3RhcnQubWludXRlKTtcbiAgY29uc3QgZW5kT2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKFxuICAgIGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mTWludXRlKGRhdGVGbnMuZW5kT2ZEYXkodmlld0RhdGUpKSwgZGF5RW5kLmhvdXIpLFxuICAgIGRheUVuZC5taW51dGUsXG4gICk7XG4gIGNvbnN0IHNlZ21lbnREdXJhdGlvbjogbnVtYmVyID0gTUlOVVRFU19JTl9IT1VSIC8gaG91clNlZ21lbnRzO1xuICBjb25zdCBzdGFydE9mVmlld0RheTogRGF0ZSA9IGRhdGVGbnMuc3RhcnRPZkRheSh2aWV3RGF0ZSk7XG5cbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEhPVVJTX0lOX0RBWTsgaSsrKSB7XG4gICAgY29uc3Qgc2VnbWVudHM6IERheVZpZXdIb3VyU2VnbWVudFtdID0gW107XG4gICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGhvdXJTZWdtZW50czsgaisrKSB7XG4gICAgICBjb25zdCBkYXRlOiBEYXRlID0gZGF0ZUZucy5hZGRNaW51dGVzKGRhdGVGbnMuYWRkSG91cnMoc3RhcnRPZlZpZXdEYXksIGkpLCBqICogc2VnbWVudER1cmF0aW9uKTtcbiAgICAgIGlmIChkYXRlID49IHN0YXJ0T2ZWaWV3ICYmIGRhdGUgPCBlbmRPZlZpZXcpIHtcbiAgICAgICAgc2VnbWVudHMucHVzaCh7XG4gICAgICAgICAgZGF0ZSxcbiAgICAgICAgICBpc1N0YXJ0OiBqID09PSAwLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGhvdXJzLnB1c2goeyBzZWdtZW50cyB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaG91cnM7XG59XG4iXX0=