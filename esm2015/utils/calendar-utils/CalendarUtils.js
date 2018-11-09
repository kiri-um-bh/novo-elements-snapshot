/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as dateFns from 'date-fns';
/** @type {?} */
const WEEKEND_DAY_NUMBERS = [0, 6];
/** @type {?} */
const DAYS_IN_WEEK = 7;
/** @type {?} */
const HOURS_IN_DAY = 24;
/** @type {?} */
const MINUTES_IN_HOUR = 60;
/** @enum {number} */
const CalendarEventResponse = {
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
function getExcludedDays({ startDate, days, excluded }) {
    if (excluded.length < 1) {
        return 0;
    }
    /** @type {?} */
    let day = startDate.getDay();
    /** @type {?} */
    let reduce = 0;
    for (let i = 0; i < days; i++) {
        if (day === DAYS_IN_WEEK) {
            day = 0;
        }
        if (excluded.some((e) => e === day)) {
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
function getWeekViewEventSpan({ event, offset, startOfWeek, excluded, }) {
    /** @type {?} */
    const begin = event.start < startOfWeek ? startOfWeek : event.start;
    /** @type {?} */
    let span = 1;
    if (event.end) {
        span = dateFns.differenceInDays(dateFns.addMinutes(dateFns.endOfDay(event.end), 1), dateFns.startOfDay(begin));
    }
    /** @type {?} */
    const totalLength = offset + span;
    if (totalLength > DAYS_IN_WEEK) {
        span = DAYS_IN_WEEK - offset;
    }
    return span - getExcludedDays({ startDate: begin, days: span, excluded });
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getWeekViewEventOffset({ event, startOfWeek, excluded = [], }) {
    if (event.start < startOfWeek) {
        return 0;
    }
    /** @type {?} */
    const distance = dateFns.differenceInDays(event.start, startOfWeek);
    return distance - getExcludedDays({ startDate: startOfWeek, days: distance, excluded });
}
/**
 * @param {?} __0
 * @return {?}
 */
function isEventIsPeriod({ event, periodStart, periodEnd }) {
    /** @type {?} */
    const eventStart = event.start;
    /** @type {?} */
    const eventEnd = event.end || event.start;
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
function getEventsInPeriod({ events, periodStart, periodEnd }) {
    return events.filter((event) => isEventIsPeriod({ event, periodStart, periodEnd }));
}
/**
 * @param {?} events
 * @param {?} dayStart
 * @param {?} dayEnd
 * @return {?}
 */
function getEventsInTimeRange(events, dayStart, dayEnd) {
    return events.filter((event) => {
        /** @type {?} */
        const eventStart = event.start;
        /** @type {?} */
        const eventEnd = event.end || eventStart;
        /** @type {?} */
        const startOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfDay(eventStart), dayStart.hour), dayStart.minute);
        /** @type {?} */
        const endOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfMinute(eventStart), dayEnd.hour), dayEnd.minute);
        return dateFns.isAfter(eventEnd, startOfView) && dateFns.isBefore(eventStart, endOfView);
    });
}
/**
 * @param {?} __0
 * @return {?}
 */
function getWeekDay({ date }) {
    /** @type {?} */
    const today = dateFns.startOfDay(new Date());
    return {
        date,
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
export function getWeekViewHeader({ viewDate, weekStartsOn, excluded = [], }) {
    /** @type {?} */
    const start = dateFns.startOfWeek(viewDate, { weekStartsOn });
    /** @type {?} */
    const days = [];
    for (let i = 0; i < DAYS_IN_WEEK; i++) {
        /** @type {?} */
        const date = dateFns.addDays(start, i);
        if (!excluded.some((e) => date.getDay() === e)) {
            days.push(getWeekDay({ date }));
        }
    }
    return days;
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getWeekView({ events = [], viewDate, weekStartsOn, excluded = [], hourSegments, segmentHeight, dayStart, dayEnd, }) {
    if (!events) {
        events = [];
    }
    /** @type {?} */
    const startOfViewWeek = dateFns.startOfWeek(viewDate, { weekStartsOn });
    /** @type {?} */
    const endOfViewWeek = dateFns.endOfWeek(viewDate, { weekStartsOn });
    /** @type {?} */
    const maxRange = DAYS_IN_WEEK - excluded.length;
    /** @type {?} */
    const eventsMapped = getEventsInTimeRange(getEventsInPeriod({ events, periodStart: startOfViewWeek, periodEnd: endOfViewWeek }), dayStart, dayEnd)
        .map((event) => {
        /** @type {?} */
        const offset = getWeekViewEventOffset({ event, startOfWeek: startOfViewWeek, excluded });
        /** @type {?} */
        const span = 1;
        return { event, offset, span };
    })
        .filter((e) => e.offset < maxRange)
        .filter((e) => e.span > 0)
        .map((entry) => ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < startOfViewWeek,
        endsAfterWeek: (entry.event.end || entry.event.start) > endOfViewWeek,
        top: 0,
    }))
        .sort((itemA, itemB) => {
        /** @type {?} */
        const startSecondsDiff = dateFns.differenceInSeconds(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return dateFns.differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    })
        .map((entry) => {
        /** @type {?} */
        const startOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfDay(entry.event.start), dayStart.hour), dayStart.minute);
        /** @type {?} */
        const endOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfMinute(dateFns.endOfDay(entry.event.start)), dayEnd.hour), dayEnd.minute);
        /** @type {?} */
        const eventStart = entry.event.start;
        /** @type {?} */
        const eventEnd = entry.event.end || eventStart;
        /** @type {?} */
        const hourHeightModifier = (hourSegments * segmentHeight) / MINUTES_IN_HOUR;
        if (eventStart > startOfView) {
            entry.top += dateFns.differenceInMinutes(eventStart, startOfView);
        }
        entry.top *= hourHeightModifier;
        /** @type {?} */
        const startsBeforeDay = eventStart < startOfView;
        /** @type {?} */
        const endsAfterDay = eventEnd > endOfView;
        /** @type {?} */
        const startDate = startsBeforeDay ? startOfView : eventStart;
        /** @type {?} */
        const endDate = endsAfterDay ? endOfView : eventEnd;
        /** @type {?} */
        let height = dateFns.differenceInMinutes(endDate, startDate);
        if (!entry.event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        entry.height = height;
        return entry;
    });
    /** @type {?} */
    const eventRows = [];
    /** @type {?} */
    const allocatedEvents = [];
    eventsMapped.forEach((event, index) => {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            /** @type {?} */
            const otherRowEvents = eventsMapped.slice(index + 1).filter((nextEvent) => {
                return nextEvent.top === event.top && nextEvent.offset === event.offset;
            });
            if (otherRowEvents.length > 0) {
                /** @type {?} */
                let totalEventsForRow = otherRowEvents.length + 1;
                event.span = 1 / totalEventsForRow;
                /** @type {?} */
                let nextOffset = event.span + event.offset;
                otherRowEvents.forEach((nextEvent) => {
                    nextEvent.offset = nextOffset;
                    nextEvent.span = event.span;
                    nextOffset = nextEvent.span + nextEvent.offset;
                });
                allocatedEvents.push(...otherRowEvents);
            }
            eventRows.push({
                row: [event, ...otherRowEvents],
            });
        }
    });
    return eventRows;
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getMonthView({ events = [], viewDate, weekStartsOn, excluded = [], }) {
    if (!events) {
        events = [];
    }
    /** @type {?} */
    const start = dateFns.startOfWeek(dateFns.startOfMonth(viewDate), { weekStartsOn });
    /** @type {?} */
    const end = dateFns.endOfWeek(dateFns.endOfMonth(viewDate), { weekStartsOn });
    /** @type {?} */
    const eventsInMonth = getEventsInPeriod({
        events,
        periodStart: start,
        periodEnd: end,
    });
    /** @type {?} */
    const days = [];
    for (let i = 0; i < dateFns.differenceInDays(end, start) + 1; i++) {
        /** @type {?} */
        const date = dateFns.addDays(start, i);
        if (!excluded.some((e) => date.getDay() === e)) {
            /** @type {?} */
            const day = (/** @type {?} */ (getWeekDay({ date })));
            /** @type {?} */
            const calEvents = getEventsInPeriod({
                events: eventsInMonth,
                periodStart: dateFns.startOfDay(date),
                periodEnd: dateFns.endOfDay(date),
            });
            day.inMonth = dateFns.isSameMonth(date, viewDate);
            day.events = calEvents;
            day.badgeTotal = calEvents.length;
            days.push(day);
        }
    }
    /** @type {?} */
    const totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    /** @type {?} */
    const rows = Math.floor(days.length / totalDaysVisibleInWeek);
    /** @type {?} */
    const rowOffsets = [];
    for (let i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets,
        totalDaysVisibleInWeek,
        days,
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getDayView({ events = [], viewDate, hourSegments, dayStart, dayEnd, eventWidth, segmentHeight }) {
    if (!events) {
        events = [];
    }
    /** @type {?} */
    const startOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfDay(viewDate), dayStart.hour), dayStart.minute);
    /** @type {?} */
    const endOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfMinute(dateFns.endOfDay(viewDate)), dayEnd.hour), dayEnd.minute);
    /** @type {?} */
    const previousDayEvents = [];
    /** @type {?} */
    const dayViewEvents = getEventsInTimeRange(getEventsInPeriod({
        events: events.filter((event) => !event.allDay),
        periodStart: startOfView,
        periodEnd: endOfView,
    }), dayStart, dayEnd)
        .sort((eventA, eventB) => {
        return eventA.start.valueOf() - eventB.start.valueOf();
    })
        .map((event) => {
        /** @type {?} */
        const eventStart = event.start;
        /** @type {?} */
        const eventEnd = event.end || eventStart;
        /** @type {?} */
        const startsBeforeDay = eventStart < startOfView;
        /** @type {?} */
        const endsAfterDay = eventEnd > endOfView;
        /** @type {?} */
        const hourHeightModifier = (hourSegments * segmentHeight) / MINUTES_IN_HOUR;
        /** @type {?} */
        let top = 0;
        if (eventStart > startOfView) {
            top += dateFns.differenceInMinutes(eventStart, startOfView);
        }
        top *= hourHeightModifier;
        /** @type {?} */
        const startDate = startsBeforeDay ? startOfView : eventStart;
        /** @type {?} */
        const endDate = endsAfterDay ? endOfView : eventEnd;
        /** @type {?} */
        let height = dateFns.differenceInMinutes(endDate, startDate);
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        /** @type {?} */
        const bottom = top + height;
        /** @type {?} */
        const overlappingPreviousEvents = previousDayEvents.filter((previousEvent) => {
            /** @type {?} */
            const previousEventTop = previousEvent.top;
            /** @type {?} */
            const previousEventBottom = previousEvent.top + previousEvent.height;
            if (top < previousEventBottom && previousEventBottom < bottom) {
                return true;
            }
            else if (previousEventTop <= top && bottom <= previousEventBottom) {
                return true;
            }
            return false;
        });
        /** @type {?} */
        let left = 0;
        while (overlappingPreviousEvents.some((previousEvent) => previousEvent.left === left)) {
            left += eventWidth;
        }
        /** @type {?} */
        const dayEvent = {
            event,
            height,
            width: eventWidth,
            top,
            left,
            startsBeforeDay,
            endsAfterDay,
        };
        if (height > 0) {
            previousDayEvents.push(dayEvent);
        }
        return dayEvent;
    })
        .filter((dayEvent) => dayEvent.height > 0);
    /** @type {?} */
    const width = Math.max(...dayViewEvents.map((event) => event.left + event.width));
    /** @type {?} */
    const allDayEvents = getEventsInPeriod({
        events: events.filter((event) => event.allDay),
        periodStart: dateFns.startOfDay(startOfView),
        periodEnd: dateFns.endOfDay(endOfView),
    });
    return {
        events: dayViewEvents,
        width,
        allDayEvents,
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
export function getDayViewHourGrid({ viewDate, hourSegments, dayStart, dayEnd, }) {
    /** @type {?} */
    const hours = [];
    /** @type {?} */
    const startOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfDay(viewDate), dayStart.hour), dayStart.minute);
    /** @type {?} */
    const endOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfMinute(dateFns.endOfDay(viewDate)), dayEnd.hour), dayEnd.minute);
    /** @type {?} */
    const segmentDuration = MINUTES_IN_HOUR / hourSegments;
    /** @type {?} */
    const startOfViewDay = dateFns.startOfDay(viewDate);
    for (let i = 0; i < HOURS_IN_DAY; i++) {
        /** @type {?} */
        const segments = [];
        for (let j = 0; j < hourSegments; j++) {
            /** @type {?} */
            const date = dateFns.addMinutes(dateFns.addHours(startOfViewDay, i), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date,
                    isStart: j === 0,
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments });
        }
    }
    return hours;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJVdGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQzs7TUFFOUIsbUJBQW1CLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztNQUN0QyxZQUFZLEdBQVcsQ0FBQzs7TUFDeEIsWUFBWSxHQUFXLEVBQUU7O01BQ3pCLGVBQWUsR0FBVyxFQUFFOzs7SUFHaEMsUUFBSztJQUNMLFdBQVE7SUFDUixXQUFROzs7Ozs7Ozs7QUFHVixvREFJQzs7O0lBSEMsK0NBQXFCOztJQUNyQixrREFBZTs7SUFDZixnREFBYzs7Ozs7QUFHaEIsNkJBTUM7OztJQUxDLHVCQUFXOztJQUNYLHlCQUFnQjs7SUFDaEIsMEJBQWlCOztJQUNqQiwyQkFBa0I7O0lBQ2xCLDRCQUFtQjs7Ozs7QUFHckIsZ0NBR0M7OztJQUZDLDZCQUFnQjs7SUFDaEIsK0JBQWtCOzs7OztBQUdwQixpQ0FJQzs7O0lBSEMsNEJBQWM7O0lBQ2QsK0JBQWtCOzs7OztJQUNsQixtREFBa0Q7Ozs7O0FBR3BELG1DQWlCQzs7O0lBaEJDLDJCQUFZOztJQUNaLDhCQUFZOztJQUNaLDRCQUFXOztJQUNYLDhCQUFjOztJQUNkLG9DQUFxQjs7SUFDckIsOEJBQWtCOztJQUNsQiw2QkFBYzs7SUFDZCxpQ0FBaUM7O0lBQ2pDLGdDQUF3Qjs7SUFDeEIsK0JBQWlCOztJQUNqQixpQ0FBa0I7O0lBQ2xCLGtDQUdFOztJQUNGLGtDQUFvQjs7Ozs7QUFHdEIsbUNBUUM7OztJQVBDLDhCQUFxQjs7SUFDckIsK0JBQWU7O0lBQ2YsNkJBQWE7O0lBQ2IseUNBQTBCOztJQUMxQixzQ0FBdUI7O0lBQ3ZCLDRCQUFhOztJQUNiLCtCQUFnQjs7Ozs7QUFHbEIsc0NBRUM7OztJQURDLCtCQUFx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QyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBRXpELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2NBQ3ZDLFFBQVEsR0FBeUIsRUFBRTtRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDdkMsSUFBSSxHQUFTLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQztZQUMvRixJQUFJLElBQUksSUFBSSxXQUFXLElBQUksSUFBSSxHQUFHLFNBQVMsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDWixJQUFJO29CQUNKLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztpQkFDakIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUNELElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDMUI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBXRUVLRU5EX0RBWV9OVU1CRVJTOiBudW1iZXJbXSA9IFswLCA2XTtcbmNvbnN0IERBWVNfSU5fV0VFSzogbnVtYmVyID0gNztcbmNvbnN0IEhPVVJTX0lOX0RBWTogbnVtYmVyID0gMjQ7XG5jb25zdCBNSU5VVEVTX0lOX0hPVVI6IG51bWJlciA9IDYwO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhckV2ZW50UmVzcG9uc2Uge1xuICBNYXliZSxcbiAgQWNjZXB0ZWQsXG4gIFJlamVjdGVkLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudCB7XG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICBuZXdTdGFydDogRGF0ZTtcbiAgbmV3RW5kPzogRGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWVrRGF5IHtcbiAgZGF0ZTogRGF0ZTtcbiAgaXNQYXN0OiBib29sZWFuO1xuICBpc1RvZGF5OiBib29sZWFuO1xuICBpc0Z1dHVyZTogYm9vbGVhbjtcbiAgaXNXZWVrZW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50Q29sb3Ige1xuICBwcmltYXJ5OiBzdHJpbmc7XG4gIHNlY29uZGFyeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50QWN0aW9uIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gIG9uQ2xpY2soeyBldmVudCB9OiB7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0pOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJFdmVudCB7XG4gIGlkPzogbnVtYmVyO1xuICBzdGFydDogRGF0ZTtcbiAgZW5kPzogRGF0ZTtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGNvbG9yOiBFdmVudENvbG9yO1xuICB0eXBlPzogc3RyaW5nO1xuICByZXNwb25zZT86IENhbGVuZGFyRXZlbnRSZXNwb25zZTtcbiAgYWN0aW9ucz86IEV2ZW50QWN0aW9uW107XG4gIGFsbERheT86IGJvb2xlYW47XG4gIGNzc0NsYXNzPzogc3RyaW5nO1xuICByZXNpemFibGU/OiB7XG4gICAgYmVmb3JlU3RhcnQ/OiBib29sZWFuO1xuICAgIGFmdGVyRW5kPzogYm9vbGVhbjtcbiAgfTtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWVrVmlld0V2ZW50IHtcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIG9mZnNldDogbnVtYmVyO1xuICBzcGFuOiBudW1iZXI7XG4gIHN0YXJ0c0JlZm9yZVdlZWs6IGJvb2xlYW47XG4gIGVuZHNBZnRlcldlZWs6IGJvb2xlYW47XG4gIHRvcD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtWaWV3RXZlbnRSb3cge1xuICByb3c6IFdlZWtWaWV3RXZlbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb250aFZpZXdEYXkgZXh0ZW5kcyBXZWVrRGF5IHtcbiAgaW5Nb250aDogYm9vbGVhbjtcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W107XG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gIGJhZGdlVG90YWw6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb250aFZpZXcge1xuICByb3dPZmZzZXRzOiBudW1iZXJbXTtcbiAgZGF5czogTW9udGhWaWV3RGF5W107XG4gIHRvdGFsRGF5c1Zpc2libGVJbldlZWs6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXlWaWV3RXZlbnQge1xuICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHN0YXJ0c0JlZm9yZURheTogYm9vbGVhbjtcbiAgZW5kc0FmdGVyRGF5OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXcge1xuICBldmVudHM6IERheVZpZXdFdmVudFtdO1xuICB3aWR0aDogbnVtYmVyO1xuICBhbGxEYXlFdmVudHM6IENhbGVuZGFyRXZlbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXlWaWV3SG91clNlZ21lbnQge1xuICBpc1N0YXJ0OiBib29sZWFuO1xuICBkYXRlOiBEYXRlO1xuICBjc3NDbGFzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXlWaWV3SG91ciB7XG4gIHNlZ21lbnRzOiBEYXlWaWV3SG91clNlZ21lbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJc0V2ZW50SW5QZXJpb2RBcmdzIHtcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIHBlcmlvZFN0YXJ0OiBEYXRlO1xuICBwZXJpb2RFbmQ6IERhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0RXZlbnRzSW5QZXJpb2RBcmdzIHtcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W107XG4gIHBlcmlvZFN0YXJ0OiBEYXRlO1xuICBwZXJpb2RFbmQ6IERhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0RGF5Vmlld0FyZ3Mge1xuICBldmVudHM/OiBDYWxlbmRhckV2ZW50W107XG4gIHZpZXdEYXRlOiBEYXRlO1xuICBob3VyU2VnbWVudHM6IG51bWJlcjtcbiAgZGF5U3RhcnQ6IHtcbiAgICBob3VyOiBudW1iZXI7XG4gICAgbWludXRlOiBudW1iZXI7XG4gIH07XG4gIGRheUVuZDoge1xuICAgIGhvdXI6IG51bWJlcjtcbiAgICBtaW51dGU6IG51bWJlcjtcbiAgfTtcbiAgZXZlbnRXaWR0aDogbnVtYmVyO1xuICBzZWdtZW50SGVpZ2h0OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGdldEV4Y2x1ZGVkRGF5cyh7IHN0YXJ0RGF0ZSwgZGF5cywgZXhjbHVkZWQgfTogeyBzdGFydERhdGU6IERhdGU7IGRheXM6IG51bWJlcjsgZXhjbHVkZWQ6IG51bWJlcltdIH0pOiBudW1iZXIge1xuICBpZiAoZXhjbHVkZWQubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGxldCBkYXk6IG51bWJlciA9IHN0YXJ0RGF0ZS5nZXREYXkoKTtcbiAgbGV0IHJlZHVjZTogbnVtYmVyID0gMDtcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGRheXM7IGkrKykge1xuICAgIGlmIChkYXkgPT09IERBWVNfSU5fV0VFSykge1xuICAgICAgZGF5ID0gMDtcbiAgICB9XG4gICAgaWYgKGV4Y2x1ZGVkLnNvbWUoKGUpID0+IGUgPT09IGRheSkpIHtcbiAgICAgIHJlZHVjZSsrO1xuICAgIH1cbiAgICBkYXkrKztcbiAgfVxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrVmlld0V2ZW50U3Bhbih7XG4gIGV2ZW50LFxuICBvZmZzZXQsXG4gIHN0YXJ0T2ZXZWVrLFxuICBleGNsdWRlZCxcbn06IHtcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIG9mZnNldDogbnVtYmVyO1xuICBzdGFydE9mV2VlazogRGF0ZTtcbiAgZXhjbHVkZWQ6IG51bWJlcltdO1xufSk6IG51bWJlciB7XG4gIGNvbnN0IGJlZ2luOiBEYXRlID0gZXZlbnQuc3RhcnQgPCBzdGFydE9mV2VlayA/IHN0YXJ0T2ZXZWVrIDogZXZlbnQuc3RhcnQ7XG4gIGxldCBzcGFuOiBudW1iZXIgPSAxO1xuICBpZiAoZXZlbnQuZW5kKSB7XG4gICAgc3BhbiA9IGRhdGVGbnMuZGlmZmVyZW5jZUluRGF5cyhkYXRlRm5zLmFkZE1pbnV0ZXMoZGF0ZUZucy5lbmRPZkRheShldmVudC5lbmQpLCAxKSwgZGF0ZUZucy5zdGFydE9mRGF5KGJlZ2luKSk7XG4gIH1cbiAgY29uc3QgdG90YWxMZW5ndGg6IG51bWJlciA9IG9mZnNldCArIHNwYW47XG4gIGlmICh0b3RhbExlbmd0aCA+IERBWVNfSU5fV0VFSykge1xuICAgIHNwYW4gPSBEQVlTX0lOX1dFRUsgLSBvZmZzZXQ7XG4gIH1cbiAgcmV0dXJuIHNwYW4gLSBnZXRFeGNsdWRlZERheXMoeyBzdGFydERhdGU6IGJlZ2luLCBkYXlzOiBzcGFuLCBleGNsdWRlZCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtWaWV3RXZlbnRPZmZzZXQoe1xuICBldmVudCxcbiAgc3RhcnRPZldlZWssXG4gIGV4Y2x1ZGVkID0gW10sXG59OiB7XG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICBzdGFydE9mV2VlazogRGF0ZTtcbiAgZXhjbHVkZWQ/OiBudW1iZXJbXTtcbn0pOiBudW1iZXIge1xuICBpZiAoZXZlbnQuc3RhcnQgPCBzdGFydE9mV2Vlaykge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGNvbnN0IGRpc3RhbmNlOiBudW1iZXIgPSBkYXRlRm5zLmRpZmZlcmVuY2VJbkRheXMoZXZlbnQuc3RhcnQsIHN0YXJ0T2ZXZWVrKTtcbiAgcmV0dXJuIGRpc3RhbmNlIC0gZ2V0RXhjbHVkZWREYXlzKHsgc3RhcnREYXRlOiBzdGFydE9mV2VlaywgZGF5czogZGlzdGFuY2UsIGV4Y2x1ZGVkIH0pO1xufVxuXG5mdW5jdGlvbiBpc0V2ZW50SXNQZXJpb2QoeyBldmVudCwgcGVyaW9kU3RhcnQsIHBlcmlvZEVuZCB9OiBJc0V2ZW50SW5QZXJpb2RBcmdzKTogYm9vbGVhbiB7XG4gIGNvbnN0IGV2ZW50U3RhcnQ6IERhdGUgPSBldmVudC5zdGFydDtcbiAgY29uc3QgZXZlbnRFbmQ6IERhdGUgPSBldmVudC5lbmQgfHwgZXZlbnQuc3RhcnQ7XG5cbiAgaWYgKGV2ZW50U3RhcnQgPiBwZXJpb2RTdGFydCAmJiBldmVudFN0YXJ0IDwgcGVyaW9kRW5kKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZXZlbnRFbmQgPiBwZXJpb2RTdGFydCAmJiBldmVudEVuZCA8IHBlcmlvZEVuZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGV2ZW50U3RhcnQgPCBwZXJpb2RTdGFydCAmJiBldmVudEVuZCA+IHBlcmlvZEVuZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGRhdGVGbnMuaXNTYW1lU2Vjb25kKGV2ZW50U3RhcnQsIHBlcmlvZFN0YXJ0KSB8fCBkYXRlRm5zLmlzU2FtZVNlY29uZChldmVudFN0YXJ0LCBwZXJpb2RFbmQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZGF0ZUZucy5pc1NhbWVTZWNvbmQoZXZlbnRFbmQsIHBlcmlvZFN0YXJ0KSB8fCBkYXRlRm5zLmlzU2FtZVNlY29uZChldmVudEVuZCwgcGVyaW9kRW5kKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudHNJblBlcmlvZCh7IGV2ZW50cywgcGVyaW9kU3RhcnQsIHBlcmlvZEVuZCB9OiBHZXRFdmVudHNJblBlcmlvZEFyZ3MpOiBDYWxlbmRhckV2ZW50W10ge1xuICByZXR1cm4gZXZlbnRzLmZpbHRlcigoZXZlbnQ6IENhbGVuZGFyRXZlbnQpID0+IGlzRXZlbnRJc1BlcmlvZCh7IGV2ZW50LCBwZXJpb2RTdGFydCwgcGVyaW9kRW5kIH0pKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRzSW5UaW1lUmFuZ2UoZXZlbnRzOiBDYWxlbmRhckV2ZW50W10sIGRheVN0YXJ0OiBhbnksIGRheUVuZDogYW55KSB7XG4gIHJldHVybiBldmVudHMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50U3RhcnQ6IERhdGUgPSBldmVudC5zdGFydDtcbiAgICBjb25zdCBldmVudEVuZDogRGF0ZSA9IGV2ZW50LmVuZCB8fCBldmVudFN0YXJ0O1xuXG4gICAgY29uc3Qgc3RhcnRPZlZpZXc6IERhdGUgPSBkYXRlRm5zLnNldE1pbnV0ZXMoZGF0ZUZucy5zZXRIb3VycyhkYXRlRm5zLnN0YXJ0T2ZEYXkoZXZlbnRTdGFydCksIGRheVN0YXJ0LmhvdXIpLCBkYXlTdGFydC5taW51dGUpO1xuICAgIGNvbnN0IGVuZE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZk1pbnV0ZShldmVudFN0YXJ0KSwgZGF5RW5kLmhvdXIpLCBkYXlFbmQubWludXRlKTtcblxuICAgIHJldHVybiBkYXRlRm5zLmlzQWZ0ZXIoZXZlbnRFbmQsIHN0YXJ0T2ZWaWV3KSAmJiBkYXRlRm5zLmlzQmVmb3JlKGV2ZW50U3RhcnQsIGVuZE9mVmlldyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrRGF5KHsgZGF0ZSB9OiB7IGRhdGU6IERhdGUgfSk6IFdlZWtEYXkge1xuICBjb25zdCB0b2RheTogRGF0ZSA9IGRhdGVGbnMuc3RhcnRPZkRheShuZXcgRGF0ZSgpKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRlLFxuICAgIGlzUGFzdDogZGF0ZSA8IHRvZGF5LFxuICAgIGlzVG9kYXk6IGRhdGVGbnMuaXNTYW1lRGF5KGRhdGUsIHRvZGF5KSxcbiAgICBpc0Z1dHVyZTogZGF0ZSA+IHRvZGF5LFxuICAgIGlzV2Vla2VuZDogV0VFS0VORF9EQVlfTlVNQkVSUy5pbmRleE9mKGRhdGVGbnMuZ2V0RGF5KGRhdGUpKSA+IC0xLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1ZpZXdIZWFkZXIoe1xuICB2aWV3RGF0ZSxcbiAgd2Vla1N0YXJ0c09uLFxuICBleGNsdWRlZCA9IFtdLFxufToge1xuICB2aWV3RGF0ZTogRGF0ZTtcbiAgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG4gIGV4Y2x1ZGVkPzogbnVtYmVyW107XG59KTogV2Vla0RheVtdIHtcbiAgY29uc3Qgc3RhcnQ6IERhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZXZWVrKHZpZXdEYXRlLCB7IHdlZWtTdGFydHNPbiB9KTtcbiAgY29uc3QgZGF5czogV2Vla0RheVtdID0gW107XG4gIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBEQVlTX0lOX1dFRUs7IGkrKykge1xuICAgIGNvbnN0IGRhdGU6IERhdGUgPSBkYXRlRm5zLmFkZERheXMoc3RhcnQsIGkpO1xuICAgIGlmICghZXhjbHVkZWQuc29tZSgoZSkgPT4gZGF0ZS5nZXREYXkoKSA9PT0gZSkpIHtcbiAgICAgIGRheXMucHVzaChnZXRXZWVrRGF5KHsgZGF0ZSB9KSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRheXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrVmlldyh7XG4gIGV2ZW50cyA9IFtdLFxuICB2aWV3RGF0ZSxcbiAgd2Vla1N0YXJ0c09uLFxuICBleGNsdWRlZCA9IFtdLFxuICBob3VyU2VnbWVudHMsXG4gIHNlZ21lbnRIZWlnaHQsXG4gIGRheVN0YXJ0LFxuICBkYXlFbmQsXG59OiB7XG4gIGV2ZW50cz86IENhbGVuZGFyRXZlbnRbXTtcbiAgdmlld0RhdGU6IERhdGU7XG4gIHdlZWtTdGFydHNPbjogbnVtYmVyO1xuICBleGNsdWRlZD86IG51bWJlcltdO1xuICBob3VyU2VnbWVudHM6IG51bWJlcjtcbiAgc2VnbWVudEhlaWdodDogbnVtYmVyO1xuICBkYXlTdGFydDogYW55O1xuICBkYXlFbmQ6IGFueTtcbn0pOiBXZWVrVmlld0V2ZW50Um93W10ge1xuICBpZiAoIWV2ZW50cykge1xuICAgIGV2ZW50cyA9IFtdO1xuICB9XG5cbiAgY29uc3Qgc3RhcnRPZlZpZXdXZWVrOiBEYXRlID0gZGF0ZUZucy5zdGFydE9mV2Vlayh2aWV3RGF0ZSwgeyB3ZWVrU3RhcnRzT24gfSk7XG4gIGNvbnN0IGVuZE9mVmlld1dlZWs6IERhdGUgPSBkYXRlRm5zLmVuZE9mV2Vlayh2aWV3RGF0ZSwgeyB3ZWVrU3RhcnRzT24gfSk7XG4gIGNvbnN0IG1heFJhbmdlOiBudW1iZXIgPSBEQVlTX0lOX1dFRUsgLSBleGNsdWRlZC5sZW5ndGg7XG5cbiAgY29uc3QgZXZlbnRzTWFwcGVkOiBXZWVrVmlld0V2ZW50W10gPSBnZXRFdmVudHNJblRpbWVSYW5nZShcbiAgICBnZXRFdmVudHNJblBlcmlvZCh7IGV2ZW50cywgcGVyaW9kU3RhcnQ6IHN0YXJ0T2ZWaWV3V2VlaywgcGVyaW9kRW5kOiBlbmRPZlZpZXdXZWVrIH0pLFxuICAgIGRheVN0YXJ0LFxuICAgIGRheUVuZCxcbiAgKVxuICAgIC5tYXAoKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IGdldFdlZWtWaWV3RXZlbnRPZmZzZXQoeyBldmVudCwgc3RhcnRPZldlZWs6IHN0YXJ0T2ZWaWV3V2VlaywgZXhjbHVkZWQgfSk7XG4gICAgICBjb25zdCBzcGFuOiBudW1iZXIgPSAxOyAvLyBnZXRXZWVrVmlld0V2ZW50U3Bhbih7IGV2ZW50LCBvZmZzZXQsIHN0YXJ0T2ZXZWVrOiBzdGFydE9mVmlld1dlZWssIGV4Y2x1ZGVkIH0pO1xuICAgICAgcmV0dXJuIHsgZXZlbnQsIG9mZnNldCwgc3BhbiB9O1xuICAgIH0pXG4gICAgLmZpbHRlcigoZSkgPT4gZS5vZmZzZXQgPCBtYXhSYW5nZSlcbiAgICAuZmlsdGVyKChlKSA9PiBlLnNwYW4gPiAwKVxuICAgIC5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgZXZlbnQ6IGVudHJ5LmV2ZW50LFxuICAgICAgb2Zmc2V0OiBlbnRyeS5vZmZzZXQsXG4gICAgICBzcGFuOiBlbnRyeS5zcGFuLFxuICAgICAgc3RhcnRzQmVmb3JlV2VlazogZW50cnkuZXZlbnQuc3RhcnQgPCBzdGFydE9mVmlld1dlZWssXG4gICAgICBlbmRzQWZ0ZXJXZWVrOiAoZW50cnkuZXZlbnQuZW5kIHx8IGVudHJ5LmV2ZW50LnN0YXJ0KSA+IGVuZE9mVmlld1dlZWssXG4gICAgICB0b3A6IDAsXG4gICAgfSkpXG4gICAgLnNvcnQoXG4gICAgICAoaXRlbUEsIGl0ZW1CKTogbnVtYmVyID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRTZWNvbmRzRGlmZjogbnVtYmVyID0gZGF0ZUZucy5kaWZmZXJlbmNlSW5TZWNvbmRzKGl0ZW1BLmV2ZW50LnN0YXJ0LCBpdGVtQi5ldmVudC5zdGFydCk7XG4gICAgICAgIGlmIChzdGFydFNlY29uZHNEaWZmID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGVGbnMuZGlmZmVyZW5jZUluU2Vjb25kcyhpdGVtQi5ldmVudC5lbmQgfHwgaXRlbUIuZXZlbnQuc3RhcnQsIGl0ZW1BLmV2ZW50LmVuZCB8fCBpdGVtQS5ldmVudC5zdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXJ0U2Vjb25kc0RpZmY7XG4gICAgICB9LFxuICAgIClcbiAgICAubWFwKChlbnRyeTogV2Vla1ZpZXdFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRPZlZpZXc6IERhdGUgPSBkYXRlRm5zLnNldE1pbnV0ZXMoZGF0ZUZucy5zZXRIb3VycyhkYXRlRm5zLnN0YXJ0T2ZEYXkoZW50cnkuZXZlbnQuc3RhcnQpLCBkYXlTdGFydC5ob3VyKSwgZGF5U3RhcnQubWludXRlKTtcbiAgICAgIGNvbnN0IGVuZE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhcbiAgICAgICAgZGF0ZUZucy5zZXRIb3VycyhkYXRlRm5zLnN0YXJ0T2ZNaW51dGUoZGF0ZUZucy5lbmRPZkRheShlbnRyeS5ldmVudC5zdGFydCkpLCBkYXlFbmQuaG91ciksXG4gICAgICAgIGRheUVuZC5taW51dGUsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBldmVudFN0YXJ0OiBEYXRlID0gZW50cnkuZXZlbnQuc3RhcnQ7XG4gICAgICBjb25zdCBldmVudEVuZDogRGF0ZSA9IGVudHJ5LmV2ZW50LmVuZCB8fCBldmVudFN0YXJ0O1xuXG4gICAgICBjb25zdCBob3VySGVpZ2h0TW9kaWZpZXI6IG51bWJlciA9IChob3VyU2VnbWVudHMgKiBzZWdtZW50SGVpZ2h0KSAvIE1JTlVURVNfSU5fSE9VUjtcblxuICAgICAgaWYgKGV2ZW50U3RhcnQgPiBzdGFydE9mVmlldykge1xuICAgICAgICBlbnRyeS50b3AgKz0gZGF0ZUZucy5kaWZmZXJlbmNlSW5NaW51dGVzKGV2ZW50U3RhcnQsIHN0YXJ0T2ZWaWV3KTtcbiAgICAgIH1cblxuICAgICAgZW50cnkudG9wICo9IGhvdXJIZWlnaHRNb2RpZmllcjtcblxuICAgICAgY29uc3Qgc3RhcnRzQmVmb3JlRGF5OiBib29sZWFuID0gZXZlbnRTdGFydCA8IHN0YXJ0T2ZWaWV3O1xuICAgICAgY29uc3QgZW5kc0FmdGVyRGF5OiBib29sZWFuID0gZXZlbnRFbmQgPiBlbmRPZlZpZXc7XG5cbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZTogRGF0ZSA9IHN0YXJ0c0JlZm9yZURheSA/IHN0YXJ0T2ZWaWV3IDogZXZlbnRTdGFydDtcbiAgICAgIGNvbnN0IGVuZERhdGU6IERhdGUgPSBlbmRzQWZ0ZXJEYXkgPyBlbmRPZlZpZXcgOiBldmVudEVuZDtcblxuICAgICAgbGV0IGhlaWdodDogbnVtYmVyID0gZGF0ZUZucy5kaWZmZXJlbmNlSW5NaW51dGVzKGVuZERhdGUsIHN0YXJ0RGF0ZSk7XG5cbiAgICAgIGlmICghZW50cnkuZXZlbnQuZW5kKSB7XG4gICAgICAgIGhlaWdodCA9IHNlZ21lbnRIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWlnaHQgKj0gaG91ckhlaWdodE1vZGlmaWVyO1xuICAgICAgfVxuXG4gICAgICBlbnRyeS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9KTtcblxuICBjb25zdCBldmVudFJvd3M6IFdlZWtWaWV3RXZlbnRSb3dbXSA9IFtdO1xuICBjb25zdCBhbGxvY2F0ZWRFdmVudHM6IFdlZWtWaWV3RXZlbnRbXSA9IFtdO1xuXG4gIGV2ZW50c01hcHBlZC5mb3JFYWNoKChldmVudDogV2Vla1ZpZXdFdmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmIChhbGxvY2F0ZWRFdmVudHMuaW5kZXhPZihldmVudCkgPT09IC0xKSB7XG4gICAgICBhbGxvY2F0ZWRFdmVudHMucHVzaChldmVudCk7XG5cbiAgICAgIGNvbnN0IG90aGVyUm93RXZlbnRzOiBXZWVrVmlld0V2ZW50W10gPSBldmVudHNNYXBwZWQuc2xpY2UoaW5kZXggKyAxKS5maWx0ZXIoKG5leHRFdmVudCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV4dEV2ZW50LnRvcCA9PT0gZXZlbnQudG9wICYmIG5leHRFdmVudC5vZmZzZXQgPT09IGV2ZW50Lm9mZnNldDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob3RoZXJSb3dFdmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgdG90YWxFdmVudHNGb3JSb3cgPSBvdGhlclJvd0V2ZW50cy5sZW5ndGggKyAxO1xuXG4gICAgICAgIGV2ZW50LnNwYW4gPSAxIC8gdG90YWxFdmVudHNGb3JSb3c7XG5cbiAgICAgICAgbGV0IG5leHRPZmZzZXQgPSBldmVudC5zcGFuICsgZXZlbnQub2Zmc2V0O1xuXG4gICAgICAgIG90aGVyUm93RXZlbnRzLmZvckVhY2goKG5leHRFdmVudDogV2Vla1ZpZXdFdmVudCkgPT4ge1xuICAgICAgICAgIG5leHRFdmVudC5vZmZzZXQgPSBuZXh0T2Zmc2V0O1xuICAgICAgICAgIG5leHRFdmVudC5zcGFuID0gZXZlbnQuc3BhbjtcbiAgICAgICAgICBuZXh0T2Zmc2V0ID0gbmV4dEV2ZW50LnNwYW4gKyBuZXh0RXZlbnQub2Zmc2V0O1xuICAgICAgICB9KTtcblxuICAgICAgICBhbGxvY2F0ZWRFdmVudHMucHVzaCguLi5vdGhlclJvd0V2ZW50cyk7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50Um93cy5wdXNoKHtcbiAgICAgICAgcm93OiBbZXZlbnQsIC4uLm90aGVyUm93RXZlbnRzXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50Um93cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoVmlldyh7XG4gIGV2ZW50cyA9IFtdLFxuICB2aWV3RGF0ZSxcbiAgd2Vla1N0YXJ0c09uLFxuICBleGNsdWRlZCA9IFtdLFxufToge1xuICBldmVudHM/OiBDYWxlbmRhckV2ZW50W107XG4gIHZpZXdEYXRlOiBEYXRlO1xuICB3ZWVrU3RhcnRzT246IG51bWJlcjtcbiAgZXhjbHVkZWQ/OiBudW1iZXJbXTtcbn0pOiBNb250aFZpZXcge1xuICBpZiAoIWV2ZW50cykge1xuICAgIGV2ZW50cyA9IFtdO1xuICB9XG5cbiAgY29uc3Qgc3RhcnQ6IERhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZXZWVrKGRhdGVGbnMuc3RhcnRPZk1vbnRoKHZpZXdEYXRlKSwgeyB3ZWVrU3RhcnRzT24gfSk7XG4gIGNvbnN0IGVuZDogRGF0ZSA9IGRhdGVGbnMuZW5kT2ZXZWVrKGRhdGVGbnMuZW5kT2ZNb250aCh2aWV3RGF0ZSksIHsgd2Vla1N0YXJ0c09uIH0pO1xuICBjb25zdCBldmVudHNJbk1vbnRoOiBDYWxlbmRhckV2ZW50W10gPSBnZXRFdmVudHNJblBlcmlvZCh7XG4gICAgZXZlbnRzLFxuICAgIHBlcmlvZFN0YXJ0OiBzdGFydCxcbiAgICBwZXJpb2RFbmQ6IGVuZCxcbiAgfSk7XG4gIGNvbnN0IGRheXM6IE1vbnRoVmlld0RheVtdID0gW107XG4gIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBkYXRlRm5zLmRpZmZlcmVuY2VJbkRheXMoZW5kLCBzdGFydCkgKyAxOyBpKyspIHtcbiAgICBjb25zdCBkYXRlOiBEYXRlID0gZGF0ZUZucy5hZGREYXlzKHN0YXJ0LCBpKTtcbiAgICBpZiAoIWV4Y2x1ZGVkLnNvbWUoKGUpID0+IGRhdGUuZ2V0RGF5KCkgPT09IGUpKSB7XG4gICAgICBjb25zdCBkYXk6IE1vbnRoVmlld0RheSA9IGdldFdlZWtEYXkoeyBkYXRlIH0pIGFzIE1vbnRoVmlld0RheTtcbiAgICAgIGNvbnN0IGNhbEV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gZ2V0RXZlbnRzSW5QZXJpb2Qoe1xuICAgICAgICBldmVudHM6IGV2ZW50c0luTW9udGgsXG4gICAgICAgIHBlcmlvZFN0YXJ0OiBkYXRlRm5zLnN0YXJ0T2ZEYXkoZGF0ZSksXG4gICAgICAgIHBlcmlvZEVuZDogZGF0ZUZucy5lbmRPZkRheShkYXRlKSxcbiAgICAgIH0pO1xuICAgICAgZGF5LmluTW9udGggPSBkYXRlRm5zLmlzU2FtZU1vbnRoKGRhdGUsIHZpZXdEYXRlKTtcbiAgICAgIGRheS5ldmVudHMgPSBjYWxFdmVudHM7XG4gICAgICBkYXkuYmFkZ2VUb3RhbCA9IGNhbEV2ZW50cy5sZW5ndGg7XG4gICAgICBkYXlzLnB1c2goZGF5KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0b3RhbERheXNWaXNpYmxlSW5XZWVrOiBudW1iZXIgPSBEQVlTX0lOX1dFRUsgLSBleGNsdWRlZC5sZW5ndGg7XG4gIGNvbnN0IHJvd3M6IG51bWJlciA9IE1hdGguZmxvb3IoZGF5cy5sZW5ndGggLyB0b3RhbERheXNWaXNpYmxlSW5XZWVrKTtcbiAgY29uc3Qgcm93T2Zmc2V0czogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgIHJvd09mZnNldHMucHVzaChpICogdG90YWxEYXlzVmlzaWJsZUluV2Vlayk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJvd09mZnNldHMsXG4gICAgdG90YWxEYXlzVmlzaWJsZUluV2VlayxcbiAgICBkYXlzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5Vmlldyh7IGV2ZW50cyA9IFtdLCB2aWV3RGF0ZSwgaG91clNlZ21lbnRzLCBkYXlTdGFydCwgZGF5RW5kLCBldmVudFdpZHRoLCBzZWdtZW50SGVpZ2h0IH06IEdldERheVZpZXdBcmdzKTogRGF5VmlldyB7XG4gIGlmICghZXZlbnRzKSB7XG4gICAgZXZlbnRzID0gW107XG4gIH1cblxuICBjb25zdCBzdGFydE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZkRheSh2aWV3RGF0ZSksIGRheVN0YXJ0LmhvdXIpLCBkYXlTdGFydC5taW51dGUpO1xuICBjb25zdCBlbmRPZlZpZXc6IERhdGUgPSBkYXRlRm5zLnNldE1pbnV0ZXMoXG4gICAgZGF0ZUZucy5zZXRIb3VycyhkYXRlRm5zLnN0YXJ0T2ZNaW51dGUoZGF0ZUZucy5lbmRPZkRheSh2aWV3RGF0ZSkpLCBkYXlFbmQuaG91ciksXG4gICAgZGF5RW5kLm1pbnV0ZSxcbiAgKTtcbiAgY29uc3QgcHJldmlvdXNEYXlFdmVudHM6IERheVZpZXdFdmVudFtdID0gW107XG5cbiAgY29uc3QgZGF5Vmlld0V2ZW50czogRGF5Vmlld0V2ZW50W10gPSBnZXRFdmVudHNJblRpbWVSYW5nZShcbiAgICBnZXRFdmVudHNJblBlcmlvZCh7XG4gICAgICBldmVudHM6IGV2ZW50cy5maWx0ZXIoKGV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PiAhZXZlbnQuYWxsRGF5KSxcbiAgICAgIHBlcmlvZFN0YXJ0OiBzdGFydE9mVmlldyxcbiAgICAgIHBlcmlvZEVuZDogZW5kT2ZWaWV3LFxuICAgIH0pLFxuICAgIGRheVN0YXJ0LFxuICAgIGRheUVuZCxcbiAgKVxuICAgIC5zb3J0KChldmVudEE6IENhbGVuZGFyRXZlbnQsIGV2ZW50QjogQ2FsZW5kYXJFdmVudCkgPT4ge1xuICAgICAgcmV0dXJuIGV2ZW50QS5zdGFydC52YWx1ZU9mKCkgLSBldmVudEIuc3RhcnQudmFsdWVPZigpO1xuICAgIH0pXG4gICAgLm1hcCgoZXZlbnQ6IENhbGVuZGFyRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50U3RhcnQ6IERhdGUgPSBldmVudC5zdGFydDtcbiAgICAgIGNvbnN0IGV2ZW50RW5kOiBEYXRlID0gZXZlbnQuZW5kIHx8IGV2ZW50U3RhcnQ7XG4gICAgICBjb25zdCBzdGFydHNCZWZvcmVEYXk6IGJvb2xlYW4gPSBldmVudFN0YXJ0IDwgc3RhcnRPZlZpZXc7XG4gICAgICBjb25zdCBlbmRzQWZ0ZXJEYXk6IGJvb2xlYW4gPSBldmVudEVuZCA+IGVuZE9mVmlldztcbiAgICAgIGNvbnN0IGhvdXJIZWlnaHRNb2RpZmllcjogbnVtYmVyID0gKGhvdXJTZWdtZW50cyAqIHNlZ21lbnRIZWlnaHQpIC8gTUlOVVRFU19JTl9IT1VSO1xuXG4gICAgICBsZXQgdG9wOiBudW1iZXIgPSAwO1xuXG4gICAgICBpZiAoZXZlbnRTdGFydCA+IHN0YXJ0T2ZWaWV3KSB7XG4gICAgICAgIHRvcCArPSBkYXRlRm5zLmRpZmZlcmVuY2VJbk1pbnV0ZXMoZXZlbnRTdGFydCwgc3RhcnRPZlZpZXcpO1xuICAgICAgfVxuXG4gICAgICB0b3AgKj0gaG91ckhlaWdodE1vZGlmaWVyO1xuXG4gICAgICBjb25zdCBzdGFydERhdGU6IERhdGUgPSBzdGFydHNCZWZvcmVEYXkgPyBzdGFydE9mVmlldyA6IGV2ZW50U3RhcnQ7XG4gICAgICBjb25zdCBlbmREYXRlOiBEYXRlID0gZW5kc0FmdGVyRGF5ID8gZW5kT2ZWaWV3IDogZXZlbnRFbmQ7XG5cbiAgICAgIGxldCBoZWlnaHQ6IG51bWJlciA9IGRhdGVGbnMuZGlmZmVyZW5jZUluTWludXRlcyhlbmREYXRlLCBzdGFydERhdGUpO1xuXG4gICAgICBpZiAoIWV2ZW50LmVuZCkge1xuICAgICAgICBoZWlnaHQgPSBzZWdtZW50SGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0ICo9IGhvdXJIZWlnaHRNb2RpZmllcjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYm90dG9tOiBudW1iZXIgPSB0b3AgKyBoZWlnaHQ7XG5cbiAgICAgIGNvbnN0IG92ZXJsYXBwaW5nUHJldmlvdXNFdmVudHM6IERheVZpZXdFdmVudFtdID0gcHJldmlvdXNEYXlFdmVudHMuZmlsdGVyKChwcmV2aW91c0V2ZW50OiBEYXlWaWV3RXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNFdmVudFRvcDogbnVtYmVyID0gcHJldmlvdXNFdmVudC50b3A7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzRXZlbnRCb3R0b206IG51bWJlciA9IHByZXZpb3VzRXZlbnQudG9wICsgcHJldmlvdXNFdmVudC5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRvcCA8IHByZXZpb3VzRXZlbnRCb3R0b20gJiYgcHJldmlvdXNFdmVudEJvdHRvbSA8IGJvdHRvbSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzRXZlbnRUb3AgPD0gdG9wICYmIGJvdHRvbSA8PSBwcmV2aW91c0V2ZW50Qm90dG9tKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgbGV0IGxlZnQ6IG51bWJlciA9IDA7XG5cbiAgICAgIHdoaWxlIChvdmVybGFwcGluZ1ByZXZpb3VzRXZlbnRzLnNvbWUoKHByZXZpb3VzRXZlbnQpID0+IHByZXZpb3VzRXZlbnQubGVmdCA9PT0gbGVmdCkpIHtcbiAgICAgICAgbGVmdCArPSBldmVudFdpZHRoO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXlFdmVudDogRGF5Vmlld0V2ZW50ID0ge1xuICAgICAgICBldmVudCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aDogZXZlbnRXaWR0aCxcbiAgICAgICAgdG9wLFxuICAgICAgICBsZWZ0LFxuICAgICAgICBzdGFydHNCZWZvcmVEYXksXG4gICAgICAgIGVuZHNBZnRlckRheSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChoZWlnaHQgPiAwKSB7XG4gICAgICAgIHByZXZpb3VzRGF5RXZlbnRzLnB1c2goZGF5RXZlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF5RXZlbnQ7XG4gICAgfSlcbiAgICAuZmlsdGVyKChkYXlFdmVudDogRGF5Vmlld0V2ZW50KSA9PiBkYXlFdmVudC5oZWlnaHQgPiAwKTtcblxuICBjb25zdCB3aWR0aDogbnVtYmVyID0gTWF0aC5tYXgoLi4uZGF5Vmlld0V2ZW50cy5tYXAoKGV2ZW50OiBEYXlWaWV3RXZlbnQpID0+IGV2ZW50LmxlZnQgKyBldmVudC53aWR0aCkpO1xuICBjb25zdCBhbGxEYXlFdmVudHM6IENhbGVuZGFyRXZlbnRbXSA9IGdldEV2ZW50c0luUGVyaW9kKHtcbiAgICBldmVudHM6IGV2ZW50cy5maWx0ZXIoKGV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PiBldmVudC5hbGxEYXkpLFxuICAgIHBlcmlvZFN0YXJ0OiBkYXRlRm5zLnN0YXJ0T2ZEYXkoc3RhcnRPZlZpZXcpLFxuICAgIHBlcmlvZEVuZDogZGF0ZUZucy5lbmRPZkRheShlbmRPZlZpZXcpLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGV2ZW50czogZGF5Vmlld0V2ZW50cyxcbiAgICB3aWR0aCxcbiAgICBhbGxEYXlFdmVudHMsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlWaWV3SG91ckdyaWQoe1xuICB2aWV3RGF0ZSxcbiAgaG91clNlZ21lbnRzLFxuICBkYXlTdGFydCxcbiAgZGF5RW5kLFxufToge1xuICB2aWV3RGF0ZTogRGF0ZTtcbiAgaG91clNlZ21lbnRzOiBudW1iZXI7XG4gIGRheVN0YXJ0OiBhbnk7XG4gIGRheUVuZDogYW55O1xufSk6IERheVZpZXdIb3VyW10ge1xuICBjb25zdCBob3VyczogRGF5Vmlld0hvdXJbXSA9IFtdO1xuXG4gIGNvbnN0IHN0YXJ0T2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mRGF5KHZpZXdEYXRlKSwgZGF5U3RhcnQuaG91ciksIGRheVN0YXJ0Lm1pbnV0ZSk7XG4gIGNvbnN0IGVuZE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhcbiAgICBkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZk1pbnV0ZShkYXRlRm5zLmVuZE9mRGF5KHZpZXdEYXRlKSksIGRheUVuZC5ob3VyKSxcbiAgICBkYXlFbmQubWludXRlLFxuICApO1xuICBjb25zdCBzZWdtZW50RHVyYXRpb246IG51bWJlciA9IE1JTlVURVNfSU5fSE9VUiAvIGhvdXJTZWdtZW50cztcbiAgY29uc3Qgc3RhcnRPZlZpZXdEYXk6IERhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZEYXkodmlld0RhdGUpO1xuXG4gIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBIT1VSU19JTl9EQVk7IGkrKykge1xuICAgIGNvbnN0IHNlZ21lbnRzOiBEYXlWaWV3SG91clNlZ21lbnRbXSA9IFtdO1xuICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBob3VyU2VnbWVudHM7IGorKykge1xuICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IGRhdGVGbnMuYWRkTWludXRlcyhkYXRlRm5zLmFkZEhvdXJzKHN0YXJ0T2ZWaWV3RGF5LCBpKSwgaiAqIHNlZ21lbnREdXJhdGlvbik7XG4gICAgICBpZiAoZGF0ZSA+PSBzdGFydE9mVmlldyAmJiBkYXRlIDwgZW5kT2ZWaWV3KSB7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goe1xuICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgaXNTdGFydDogaiA9PT0gMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBob3Vycy5wdXNoKHsgc2VnbWVudHMgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhvdXJzO1xufVxuIl19