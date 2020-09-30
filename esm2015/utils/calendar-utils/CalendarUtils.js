/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (excluded.some((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e === day))) {
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
    return events.filter((/**
     * @param {?} event
     * @return {?}
     */
    (event) => isEventIsPeriod({ event, periodStart, periodEnd })));
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
    (event) => {
        /** @type {?} */
        const eventStart = event.start;
        /** @type {?} */
        const eventEnd = event.end || eventStart;
        /** @type {?} */
        const startOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfDay(eventStart), dayStart.hour), dayStart.minute);
        /** @type {?} */
        const endOfView = dateFns.setMinutes(dateFns.setHours(dateFns.startOfMinute(eventStart), dayEnd.hour), dayEnd.minute);
        return dateFns.isAfter(eventEnd, startOfView) && dateFns.isBefore(eventStart, endOfView);
    }));
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
        if (!excluded.some((/**
         * @param {?} e
         * @return {?}
         */
        (e) => date.getDay() === e))) {
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
        .map((/**
     * @param {?} event
     * @return {?}
     */
    (event) => {
        /** @type {?} */
        const offset = getWeekViewEventOffset({ event, startOfWeek: startOfViewWeek, excluded });
        /** @type {?} */
        const span = 1;
        return { event, offset, span };
    }))
        .filter((/**
     * @param {?} e
     * @return {?}
     */
    (e) => e.offset < maxRange))
        .filter((/**
     * @param {?} e
     * @return {?}
     */
    (e) => e.span > 0))
        .map((/**
     * @param {?} entry
     * @return {?}
     */
    (entry) => ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < startOfViewWeek,
        endsAfterWeek: (entry.event.end || entry.event.start) > endOfViewWeek,
        top: 0,
    })))
        .sort((/**
     * @param {?} itemA
     * @param {?} itemB
     * @return {?}
     */
    (itemA, itemB) => {
        /** @type {?} */
        const startSecondsDiff = dateFns.differenceInSeconds(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return dateFns.differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    }))
        .map((/**
     * @param {?} entry
     * @return {?}
     */
    (entry) => {
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
    }));
    /** @type {?} */
    const eventRows = [];
    /** @type {?} */
    const allocatedEvents = [];
    eventsMapped.forEach((/**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    (event, index) => {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            /** @type {?} */
            const otherRowEvents = eventsMapped.slice(index + 1).filter((/**
             * @param {?} nextEvent
             * @return {?}
             */
            (nextEvent) => {
                return nextEvent.top === event.top && nextEvent.offset === event.offset;
            }));
            if (otherRowEvents.length > 0) {
                /** @type {?} */
                let totalEventsForRow = otherRowEvents.length + 1;
                event.span = 1 / totalEventsForRow;
                /** @type {?} */
                let nextOffset = event.span + event.offset;
                otherRowEvents.forEach((/**
                 * @param {?} nextEvent
                 * @return {?}
                 */
                (nextEvent) => {
                    nextEvent.offset = nextOffset;
                    nextEvent.span = event.span;
                    nextOffset = nextEvent.span + nextEvent.offset;
                }));
                allocatedEvents.push(...otherRowEvents);
            }
            eventRows.push({
                row: [event, ...otherRowEvents],
            });
        }
    }));
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
        if (!excluded.some((/**
         * @param {?} e
         * @return {?}
         */
        (e) => date.getDay() === e))) {
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
        events: events.filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => !event.allDay)),
        periodStart: startOfView,
        periodEnd: endOfView,
    }), dayStart, dayEnd)
        .sort((/**
     * @param {?} eventA
     * @param {?} eventB
     * @return {?}
     */
    (eventA, eventB) => {
        return eventA.start.valueOf() - eventB.start.valueOf();
    }))
        .map((/**
     * @param {?} event
     * @return {?}
     */
    (event) => {
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
        const overlappingPreviousEvents = previousDayEvents.filter((/**
         * @param {?} previousEvent
         * @return {?}
         */
        (previousEvent) => {
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
        }));
        /** @type {?} */
        let left = 0;
        while (overlappingPreviousEvents.some((/**
         * @param {?} previousEvent
         * @return {?}
         */
        (previousEvent) => previousEvent.left === left))) {
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
    }))
        .filter((/**
     * @param {?} dayEvent
     * @return {?}
     */
    (dayEvent) => dayEvent.height > 0));
    /** @type {?} */
    const width = Math.max(...dayViewEvents.map((/**
     * @param {?} event
     * @return {?}
     */
    (event) => event.left + event.width)));
    /** @type {?} */
    const allDayEvents = getEventsInPeriod({
        events: events.filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.allDay)),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJVdGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQzs7TUFFOUIsbUJBQW1CLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztNQUN0QyxZQUFZLEdBQVcsQ0FBQzs7TUFDeEIsWUFBWSxHQUFXLEVBQUU7O01BQ3pCLGVBQWUsR0FBVyxFQUFFOzs7SUFHaEMsUUFBSztJQUNMLFdBQVE7SUFDUixXQUFROzs7Ozs7Ozs7QUFHVixvREFJQzs7O0lBSEMsK0NBQXFCOztJQUNyQixrREFBZTs7SUFDZixnREFBYzs7Ozs7QUFHaEIsNkJBTUM7OztJQUxDLHVCQUFXOztJQUNYLHlCQUFnQjs7SUFDaEIsMEJBQWlCOztJQUNqQiwyQkFBa0I7O0lBQ2xCLDRCQUFtQjs7Ozs7QUFHckIsZ0NBR0M7OztJQUZDLDZCQUFnQjs7SUFDaEIsK0JBQWtCOzs7OztBQUdwQixpQ0FJQzs7O0lBSEMsNEJBQWM7O0lBQ2QsK0JBQWtCOzs7OztJQUNsQixtREFBa0Q7Ozs7O0FBR3BELG1DQWlCQzs7O0lBaEJDLDJCQUFZOztJQUNaLDhCQUFZOztJQUNaLDRCQUFXOztJQUNYLDhCQUFjOztJQUNkLG9DQUFxQjs7SUFDckIsOEJBQWtCOztJQUNsQiw2QkFBYzs7SUFDZCxpQ0FBaUM7O0lBQ2pDLGdDQUF3Qjs7SUFDeEIsK0JBQWlCOztJQUNqQixpQ0FBa0I7O0lBQ2xCLGtDQUdFOztJQUNGLGtDQUFvQjs7Ozs7QUFHdEIsbUNBUUM7OztJQVBDLDhCQUFxQjs7SUFDckIsK0JBQWU7O0lBQ2YsNkJBQWE7O0lBQ2IseUNBQTBCOztJQUMxQixzQ0FBdUI7O0lBQ3ZCLDRCQUFhOztJQUNiLCtCQUFnQjs7Ozs7QUFHbEIsc0NBRUM7OztJQURDLCtCQUFx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QUFDLE1BQU0sQ0FDZDs7VUFDSyxlQUFlLEdBQVcsZUFBZSxHQUFHLFlBQVk7O1VBQ3hELGNBQWMsR0FBUyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUV6RCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUN2QyxRQUFRLEdBQXlCLEVBQUU7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQ3ZDLElBQUksR0FBUyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUM7WUFDL0YsSUFBSSxJQUFJLElBQUksV0FBVyxJQUFJLElBQUksR0FBRyxTQUFTLEVBQUU7Z0JBQzNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ1osSUFBSTtvQkFDSixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUJBQ2pCLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgV0VFS0VORF9EQVlfTlVNQkVSUzogbnVtYmVyW10gPSBbMCwgNl07XG5jb25zdCBEQVlTX0lOX1dFRUs6IG51bWJlciA9IDc7XG5jb25zdCBIT1VSU19JTl9EQVk6IG51bWJlciA9IDI0O1xuY29uc3QgTUlOVVRFU19JTl9IT1VSOiBudW1iZXIgPSA2MDtcblxuZXhwb3J0IGVudW0gQ2FsZW5kYXJFdmVudFJlc3BvbnNlIHtcbiAgTWF5YmUsXG4gIEFjY2VwdGVkLFxuICBSZWplY3RlZCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQge1xuICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgbmV3U3RhcnQ6IERhdGU7XG4gIG5ld0VuZD86IERhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla0RheSB7XG4gIGRhdGU6IERhdGU7XG4gIGlzUGFzdDogYm9vbGVhbjtcbiAgaXNUb2RheTogYm9vbGVhbjtcbiAgaXNGdXR1cmU6IGJvb2xlYW47XG4gIGlzV2Vla2VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudENvbG9yIHtcbiAgcHJpbWFyeTogc3RyaW5nO1xuICBzZWNvbmRhcnk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudEFjdGlvbiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNzc0NsYXNzPzogc3RyaW5nO1xuICBvbkNsaWNrKHsgZXZlbnQgfTogeyBldmVudDogQ2FsZW5kYXJFdmVudCB9KTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyRXZlbnQge1xuICBpZD86IG51bWJlcjtcbiAgc3RhcnQ6IERhdGU7XG4gIGVuZD86IERhdGU7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBjb2xvcjogRXZlbnRDb2xvcjtcbiAgdHlwZT86IHN0cmluZztcbiAgcmVzcG9uc2U/OiBDYWxlbmRhckV2ZW50UmVzcG9uc2U7XG4gIGFjdGlvbnM/OiBFdmVudEFjdGlvbltdO1xuICBhbGxEYXk/OiBib29sZWFuO1xuICBjc3NDbGFzcz86IHN0cmluZztcbiAgcmVzaXphYmxlPzoge1xuICAgIGJlZm9yZVN0YXJ0PzogYm9vbGVhbjtcbiAgICBhZnRlckVuZD86IGJvb2xlYW47XG4gIH07XG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1ZpZXdFdmVudCB7XG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgc3BhbjogbnVtYmVyO1xuICBzdGFydHNCZWZvcmVXZWVrOiBib29sZWFuO1xuICBlbmRzQWZ0ZXJXZWVrOiBib29sZWFuO1xuICB0b3A/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWVrVmlld0V2ZW50Um93IHtcbiAgcm93OiBXZWVrVmlld0V2ZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhWaWV3RGF5IGV4dGVuZHMgV2Vla0RheSB7XG4gIGluTW9udGg6IGJvb2xlYW47XG4gIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIGNzc0NsYXNzPzogc3RyaW5nO1xuICBiYWRnZVRvdGFsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhWaWV3IHtcbiAgcm93T2Zmc2V0czogbnVtYmVyW107XG4gIGRheXM6IE1vbnRoVmlld0RheVtdO1xuICB0b3RhbERheXNWaXNpYmxlSW5XZWVrOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5Vmlld0V2ZW50IHtcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICBzdGFydHNCZWZvcmVEYXk6IGJvb2xlYW47XG4gIGVuZHNBZnRlckRheTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXlWaWV3IHtcbiAgZXZlbnRzOiBEYXlWaWV3RXZlbnRbXTtcbiAgd2lkdGg6IG51bWJlcjtcbiAgYWxsRGF5RXZlbnRzOiBDYWxlbmRhckV2ZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5Vmlld0hvdXJTZWdtZW50IHtcbiAgaXNTdGFydDogYm9vbGVhbjtcbiAgZGF0ZTogRGF0ZTtcbiAgY3NzQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5Vmlld0hvdXIge1xuICBzZWdtZW50czogRGF5Vmlld0hvdXJTZWdtZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXNFdmVudEluUGVyaW9kQXJncyB7XG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICBwZXJpb2RTdGFydDogRGF0ZTtcbiAgcGVyaW9kRW5kOiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldEV2ZW50c0luUGVyaW9kQXJncyB7XG4gIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xuICBwZXJpb2RTdGFydDogRGF0ZTtcbiAgcGVyaW9kRW5kOiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldERheVZpZXdBcmdzIHtcbiAgZXZlbnRzPzogQ2FsZW5kYXJFdmVudFtdO1xuICB2aWV3RGF0ZTogRGF0ZTtcbiAgaG91clNlZ21lbnRzOiBudW1iZXI7XG4gIGRheVN0YXJ0OiB7XG4gICAgaG91cjogbnVtYmVyO1xuICAgIG1pbnV0ZTogbnVtYmVyO1xuICB9O1xuICBkYXlFbmQ6IHtcbiAgICBob3VyOiBudW1iZXI7XG4gICAgbWludXRlOiBudW1iZXI7XG4gIH07XG4gIGV2ZW50V2lkdGg6IG51bWJlcjtcbiAgc2VnbWVudEhlaWdodDogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBnZXRFeGNsdWRlZERheXMoeyBzdGFydERhdGUsIGRheXMsIGV4Y2x1ZGVkIH06IHsgc3RhcnREYXRlOiBEYXRlOyBkYXlzOiBudW1iZXI7IGV4Y2x1ZGVkOiBudW1iZXJbXSB9KTogbnVtYmVyIHtcbiAgaWYgKGV4Y2x1ZGVkLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBsZXQgZGF5OiBudW1iZXIgPSBzdGFydERhdGUuZ2V0RGF5KCk7XG4gIGxldCByZWR1Y2U6IG51bWJlciA9IDA7XG4gIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBkYXlzOyBpKyspIHtcbiAgICBpZiAoZGF5ID09PSBEQVlTX0lOX1dFRUspIHtcbiAgICAgIGRheSA9IDA7XG4gICAgfVxuICAgIGlmIChleGNsdWRlZC5zb21lKChlKSA9PiBlID09PSBkYXkpKSB7XG4gICAgICByZWR1Y2UrKztcbiAgICB9XG4gICAgZGF5Kys7XG4gIH1cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZnVuY3Rpb24gZ2V0V2Vla1ZpZXdFdmVudFNwYW4oe1xuICBldmVudCxcbiAgb2Zmc2V0LFxuICBzdGFydE9mV2VlayxcbiAgZXhjbHVkZWQsXG59OiB7XG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgc3RhcnRPZldlZWs6IERhdGU7XG4gIGV4Y2x1ZGVkOiBudW1iZXJbXTtcbn0pOiBudW1iZXIge1xuICBjb25zdCBiZWdpbjogRGF0ZSA9IGV2ZW50LnN0YXJ0IDwgc3RhcnRPZldlZWsgPyBzdGFydE9mV2VlayA6IGV2ZW50LnN0YXJ0O1xuICBsZXQgc3BhbjogbnVtYmVyID0gMTtcbiAgaWYgKGV2ZW50LmVuZCkge1xuICAgIHNwYW4gPSBkYXRlRm5zLmRpZmZlcmVuY2VJbkRheXMoZGF0ZUZucy5hZGRNaW51dGVzKGRhdGVGbnMuZW5kT2ZEYXkoZXZlbnQuZW5kKSwgMSksIGRhdGVGbnMuc3RhcnRPZkRheShiZWdpbikpO1xuICB9XG4gIGNvbnN0IHRvdGFsTGVuZ3RoOiBudW1iZXIgPSBvZmZzZXQgKyBzcGFuO1xuICBpZiAodG90YWxMZW5ndGggPiBEQVlTX0lOX1dFRUspIHtcbiAgICBzcGFuID0gREFZU19JTl9XRUVLIC0gb2Zmc2V0O1xuICB9XG4gIHJldHVybiBzcGFuIC0gZ2V0RXhjbHVkZWREYXlzKHsgc3RhcnREYXRlOiBiZWdpbiwgZGF5czogc3BhbiwgZXhjbHVkZWQgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrVmlld0V2ZW50T2Zmc2V0KHtcbiAgZXZlbnQsXG4gIHN0YXJ0T2ZXZWVrLFxuICBleGNsdWRlZCA9IFtdLFxufToge1xuICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgc3RhcnRPZldlZWs6IERhdGU7XG4gIGV4Y2x1ZGVkPzogbnVtYmVyW107XG59KTogbnVtYmVyIHtcbiAgaWYgKGV2ZW50LnN0YXJ0IDwgc3RhcnRPZldlZWspIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBkaXN0YW5jZTogbnVtYmVyID0gZGF0ZUZucy5kaWZmZXJlbmNlSW5EYXlzKGV2ZW50LnN0YXJ0LCBzdGFydE9mV2Vlayk7XG4gIHJldHVybiBkaXN0YW5jZSAtIGdldEV4Y2x1ZGVkRGF5cyh7IHN0YXJ0RGF0ZTogc3RhcnRPZldlZWssIGRheXM6IGRpc3RhbmNlLCBleGNsdWRlZCB9KTtcbn1cblxuZnVuY3Rpb24gaXNFdmVudElzUGVyaW9kKHsgZXZlbnQsIHBlcmlvZFN0YXJ0LCBwZXJpb2RFbmQgfTogSXNFdmVudEluUGVyaW9kQXJncyk6IGJvb2xlYW4ge1xuICBjb25zdCBldmVudFN0YXJ0OiBEYXRlID0gZXZlbnQuc3RhcnQ7XG4gIGNvbnN0IGV2ZW50RW5kOiBEYXRlID0gZXZlbnQuZW5kIHx8IGV2ZW50LnN0YXJ0O1xuXG4gIGlmIChldmVudFN0YXJ0ID4gcGVyaW9kU3RhcnQgJiYgZXZlbnRTdGFydCA8IHBlcmlvZEVuZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGV2ZW50RW5kID4gcGVyaW9kU3RhcnQgJiYgZXZlbnRFbmQgPCBwZXJpb2RFbmQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChldmVudFN0YXJ0IDwgcGVyaW9kU3RhcnQgJiYgZXZlbnRFbmQgPiBwZXJpb2RFbmQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChkYXRlRm5zLmlzU2FtZVNlY29uZChldmVudFN0YXJ0LCBwZXJpb2RTdGFydCkgfHwgZGF0ZUZucy5pc1NhbWVTZWNvbmQoZXZlbnRTdGFydCwgcGVyaW9kRW5kKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGRhdGVGbnMuaXNTYW1lU2Vjb25kKGV2ZW50RW5kLCBwZXJpb2RTdGFydCkgfHwgZGF0ZUZucy5pc1NhbWVTZWNvbmQoZXZlbnRFbmQsIHBlcmlvZEVuZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRzSW5QZXJpb2QoeyBldmVudHMsIHBlcmlvZFN0YXJ0LCBwZXJpb2RFbmQgfTogR2V0RXZlbnRzSW5QZXJpb2RBcmdzKTogQ2FsZW5kYXJFdmVudFtdIHtcbiAgcmV0dXJuIGV2ZW50cy5maWx0ZXIoKGV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PiBpc0V2ZW50SXNQZXJpb2QoeyBldmVudCwgcGVyaW9kU3RhcnQsIHBlcmlvZEVuZCB9KSk7XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50c0luVGltZVJhbmdlKGV2ZW50czogQ2FsZW5kYXJFdmVudFtdLCBkYXlTdGFydDogYW55LCBkYXlFbmQ6IGFueSkge1xuICByZXR1cm4gZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICBjb25zdCBldmVudFN0YXJ0OiBEYXRlID0gZXZlbnQuc3RhcnQ7XG4gICAgY29uc3QgZXZlbnRFbmQ6IERhdGUgPSBldmVudC5lbmQgfHwgZXZlbnRTdGFydDtcblxuICAgIGNvbnN0IHN0YXJ0T2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mRGF5KGV2ZW50U3RhcnQpLCBkYXlTdGFydC5ob3VyKSwgZGF5U3RhcnQubWludXRlKTtcbiAgICBjb25zdCBlbmRPZlZpZXc6IERhdGUgPSBkYXRlRm5zLnNldE1pbnV0ZXMoZGF0ZUZucy5zZXRIb3VycyhkYXRlRm5zLnN0YXJ0T2ZNaW51dGUoZXZlbnRTdGFydCksIGRheUVuZC5ob3VyKSwgZGF5RW5kLm1pbnV0ZSk7XG5cbiAgICByZXR1cm4gZGF0ZUZucy5pc0FmdGVyKGV2ZW50RW5kLCBzdGFydE9mVmlldykgJiYgZGF0ZUZucy5pc0JlZm9yZShldmVudFN0YXJ0LCBlbmRPZlZpZXcpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2Vla0RheSh7IGRhdGUgfTogeyBkYXRlOiBEYXRlIH0pOiBXZWVrRGF5IHtcbiAgY29uc3QgdG9kYXk6IERhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZEYXkobmV3IERhdGUoKSk7XG4gIHJldHVybiB7XG4gICAgZGF0ZSxcbiAgICBpc1Bhc3Q6IGRhdGUgPCB0b2RheSxcbiAgICBpc1RvZGF5OiBkYXRlRm5zLmlzU2FtZURheShkYXRlLCB0b2RheSksXG4gICAgaXNGdXR1cmU6IGRhdGUgPiB0b2RheSxcbiAgICBpc1dlZWtlbmQ6IFdFRUtFTkRfREFZX05VTUJFUlMuaW5kZXhPZihkYXRlRm5zLmdldERheShkYXRlKSkgPiAtMSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtWaWV3SGVhZGVyKHtcbiAgdmlld0RhdGUsXG4gIHdlZWtTdGFydHNPbixcbiAgZXhjbHVkZWQgPSBbXSxcbn06IHtcbiAgdmlld0RhdGU6IERhdGU7XG4gIHdlZWtTdGFydHNPbjogbnVtYmVyO1xuICBleGNsdWRlZD86IG51bWJlcltdO1xufSk6IFdlZWtEYXlbXSB7XG4gIGNvbnN0IHN0YXJ0OiBEYXRlID0gZGF0ZUZucy5zdGFydE9mV2Vlayh2aWV3RGF0ZSwgeyB3ZWVrU3RhcnRzT24gfSk7XG4gIGNvbnN0IGRheXM6IFdlZWtEYXlbXSA9IFtdO1xuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgREFZU19JTl9XRUVLOyBpKyspIHtcbiAgICBjb25zdCBkYXRlOiBEYXRlID0gZGF0ZUZucy5hZGREYXlzKHN0YXJ0LCBpKTtcbiAgICBpZiAoIWV4Y2x1ZGVkLnNvbWUoKGUpID0+IGRhdGUuZ2V0RGF5KCkgPT09IGUpKSB7XG4gICAgICBkYXlzLnB1c2goZ2V0V2Vla0RheSh7IGRhdGUgfSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1ZpZXcoe1xuICBldmVudHMgPSBbXSxcbiAgdmlld0RhdGUsXG4gIHdlZWtTdGFydHNPbixcbiAgZXhjbHVkZWQgPSBbXSxcbiAgaG91clNlZ21lbnRzLFxuICBzZWdtZW50SGVpZ2h0LFxuICBkYXlTdGFydCxcbiAgZGF5RW5kLFxufToge1xuICBldmVudHM/OiBDYWxlbmRhckV2ZW50W107XG4gIHZpZXdEYXRlOiBEYXRlO1xuICB3ZWVrU3RhcnRzT246IG51bWJlcjtcbiAgZXhjbHVkZWQ/OiBudW1iZXJbXTtcbiAgaG91clNlZ21lbnRzOiBudW1iZXI7XG4gIHNlZ21lbnRIZWlnaHQ6IG51bWJlcjtcbiAgZGF5U3RhcnQ6IGFueTtcbiAgZGF5RW5kOiBhbnk7XG59KTogV2Vla1ZpZXdFdmVudFJvd1tdIHtcbiAgaWYgKCFldmVudHMpIHtcbiAgICBldmVudHMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0T2ZWaWV3V2VlazogRGF0ZSA9IGRhdGVGbnMuc3RhcnRPZldlZWsodmlld0RhdGUsIHsgd2Vla1N0YXJ0c09uIH0pO1xuICBjb25zdCBlbmRPZlZpZXdXZWVrOiBEYXRlID0gZGF0ZUZucy5lbmRPZldlZWsodmlld0RhdGUsIHsgd2Vla1N0YXJ0c09uIH0pO1xuICBjb25zdCBtYXhSYW5nZTogbnVtYmVyID0gREFZU19JTl9XRUVLIC0gZXhjbHVkZWQubGVuZ3RoO1xuXG4gIGNvbnN0IGV2ZW50c01hcHBlZDogV2Vla1ZpZXdFdmVudFtdID0gZ2V0RXZlbnRzSW5UaW1lUmFuZ2UoXG4gICAgZ2V0RXZlbnRzSW5QZXJpb2QoeyBldmVudHMsIHBlcmlvZFN0YXJ0OiBzdGFydE9mVmlld1dlZWssIHBlcmlvZEVuZDogZW5kT2ZWaWV3V2VlayB9KSxcbiAgICBkYXlTdGFydCxcbiAgICBkYXlFbmQsXG4gIClcbiAgICAubWFwKChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0OiBudW1iZXIgPSBnZXRXZWVrVmlld0V2ZW50T2Zmc2V0KHsgZXZlbnQsIHN0YXJ0T2ZXZWVrOiBzdGFydE9mVmlld1dlZWssIGV4Y2x1ZGVkIH0pO1xuICAgICAgY29uc3Qgc3BhbjogbnVtYmVyID0gMTsgLy8gZ2V0V2Vla1ZpZXdFdmVudFNwYW4oeyBldmVudCwgb2Zmc2V0LCBzdGFydE9mV2Vlazogc3RhcnRPZlZpZXdXZWVrLCBleGNsdWRlZCB9KTtcbiAgICAgIHJldHVybiB7IGV2ZW50LCBvZmZzZXQsIHNwYW4gfTtcbiAgICB9KVxuICAgIC5maWx0ZXIoKGUpID0+IGUub2Zmc2V0IDwgbWF4UmFuZ2UpXG4gICAgLmZpbHRlcigoZSkgPT4gZS5zcGFuID4gMClcbiAgICAubWFwKChlbnRyeSkgPT4gKHtcbiAgICAgIGV2ZW50OiBlbnRyeS5ldmVudCxcbiAgICAgIG9mZnNldDogZW50cnkub2Zmc2V0LFxuICAgICAgc3BhbjogZW50cnkuc3BhbixcbiAgICAgIHN0YXJ0c0JlZm9yZVdlZWs6IGVudHJ5LmV2ZW50LnN0YXJ0IDwgc3RhcnRPZlZpZXdXZWVrLFxuICAgICAgZW5kc0FmdGVyV2VlazogKGVudHJ5LmV2ZW50LmVuZCB8fCBlbnRyeS5ldmVudC5zdGFydCkgPiBlbmRPZlZpZXdXZWVrLFxuICAgICAgdG9wOiAwLFxuICAgIH0pKVxuICAgIC5zb3J0KFxuICAgICAgKGl0ZW1BLCBpdGVtQik6IG51bWJlciA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0U2Vjb25kc0RpZmY6IG51bWJlciA9IGRhdGVGbnMuZGlmZmVyZW5jZUluU2Vjb25kcyhpdGVtQS5ldmVudC5zdGFydCwgaXRlbUIuZXZlbnQuc3RhcnQpO1xuICAgICAgICBpZiAoc3RhcnRTZWNvbmRzRGlmZiA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBkYXRlRm5zLmRpZmZlcmVuY2VJblNlY29uZHMoaXRlbUIuZXZlbnQuZW5kIHx8IGl0ZW1CLmV2ZW50LnN0YXJ0LCBpdGVtQS5ldmVudC5lbmQgfHwgaXRlbUEuZXZlbnQuc3RhcnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGFydFNlY29uZHNEaWZmO1xuICAgICAgfSxcbiAgICApXG4gICAgLm1hcCgoZW50cnk6IFdlZWtWaWV3RXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0T2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mRGF5KGVudHJ5LmV2ZW50LnN0YXJ0KSwgZGF5U3RhcnQuaG91ciksIGRheVN0YXJ0Lm1pbnV0ZSk7XG4gICAgICBjb25zdCBlbmRPZlZpZXc6IERhdGUgPSBkYXRlRm5zLnNldE1pbnV0ZXMoXG4gICAgICAgIGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mTWludXRlKGRhdGVGbnMuZW5kT2ZEYXkoZW50cnkuZXZlbnQuc3RhcnQpKSwgZGF5RW5kLmhvdXIpLFxuICAgICAgICBkYXlFbmQubWludXRlLFxuICAgICAgKTtcblxuICAgICAgY29uc3QgZXZlbnRTdGFydDogRGF0ZSA9IGVudHJ5LmV2ZW50LnN0YXJ0O1xuICAgICAgY29uc3QgZXZlbnRFbmQ6IERhdGUgPSBlbnRyeS5ldmVudC5lbmQgfHwgZXZlbnRTdGFydDtcblxuICAgICAgY29uc3QgaG91ckhlaWdodE1vZGlmaWVyOiBudW1iZXIgPSAoaG91clNlZ21lbnRzICogc2VnbWVudEhlaWdodCkgLyBNSU5VVEVTX0lOX0hPVVI7XG5cbiAgICAgIGlmIChldmVudFN0YXJ0ID4gc3RhcnRPZlZpZXcpIHtcbiAgICAgICAgZW50cnkudG9wICs9IGRhdGVGbnMuZGlmZmVyZW5jZUluTWludXRlcyhldmVudFN0YXJ0LCBzdGFydE9mVmlldyk7XG4gICAgICB9XG5cbiAgICAgIGVudHJ5LnRvcCAqPSBob3VySGVpZ2h0TW9kaWZpZXI7XG5cbiAgICAgIGNvbnN0IHN0YXJ0c0JlZm9yZURheTogYm9vbGVhbiA9IGV2ZW50U3RhcnQgPCBzdGFydE9mVmlldztcbiAgICAgIGNvbnN0IGVuZHNBZnRlckRheTogYm9vbGVhbiA9IGV2ZW50RW5kID4gZW5kT2ZWaWV3O1xuXG4gICAgICBjb25zdCBzdGFydERhdGU6IERhdGUgPSBzdGFydHNCZWZvcmVEYXkgPyBzdGFydE9mVmlldyA6IGV2ZW50U3RhcnQ7XG4gICAgICBjb25zdCBlbmREYXRlOiBEYXRlID0gZW5kc0FmdGVyRGF5ID8gZW5kT2ZWaWV3IDogZXZlbnRFbmQ7XG5cbiAgICAgIGxldCBoZWlnaHQ6IG51bWJlciA9IGRhdGVGbnMuZGlmZmVyZW5jZUluTWludXRlcyhlbmREYXRlLCBzdGFydERhdGUpO1xuXG4gICAgICBpZiAoIWVudHJ5LmV2ZW50LmVuZCkge1xuICAgICAgICBoZWlnaHQgPSBzZWdtZW50SGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0ICo9IGhvdXJIZWlnaHRNb2RpZmllcjtcbiAgICAgIH1cblxuICAgICAgZW50cnkuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICByZXR1cm4gZW50cnk7XG4gICAgfSk7XG5cbiAgY29uc3QgZXZlbnRSb3dzOiBXZWVrVmlld0V2ZW50Um93W10gPSBbXTtcbiAgY29uc3QgYWxsb2NhdGVkRXZlbnRzOiBXZWVrVmlld0V2ZW50W10gPSBbXTtcblxuICBldmVudHNNYXBwZWQuZm9yRWFjaCgoZXZlbnQ6IFdlZWtWaWV3RXZlbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoYWxsb2NhdGVkRXZlbnRzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xuICAgICAgYWxsb2NhdGVkRXZlbnRzLnB1c2goZXZlbnQpO1xuXG4gICAgICBjb25zdCBvdGhlclJvd0V2ZW50czogV2Vla1ZpZXdFdmVudFtdID0gZXZlbnRzTWFwcGVkLnNsaWNlKGluZGV4ICsgMSkuZmlsdGVyKChuZXh0RXZlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5leHRFdmVudC50b3AgPT09IGV2ZW50LnRvcCAmJiBuZXh0RXZlbnQub2Zmc2V0ID09PSBldmVudC5vZmZzZXQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG90aGVyUm93RXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHRvdGFsRXZlbnRzRm9yUm93ID0gb3RoZXJSb3dFdmVudHMubGVuZ3RoICsgMTtcblxuICAgICAgICBldmVudC5zcGFuID0gMSAvIHRvdGFsRXZlbnRzRm9yUm93O1xuXG4gICAgICAgIGxldCBuZXh0T2Zmc2V0ID0gZXZlbnQuc3BhbiArIGV2ZW50Lm9mZnNldDtcblxuICAgICAgICBvdGhlclJvd0V2ZW50cy5mb3JFYWNoKChuZXh0RXZlbnQ6IFdlZWtWaWV3RXZlbnQpID0+IHtcbiAgICAgICAgICBuZXh0RXZlbnQub2Zmc2V0ID0gbmV4dE9mZnNldDtcbiAgICAgICAgICBuZXh0RXZlbnQuc3BhbiA9IGV2ZW50LnNwYW47XG4gICAgICAgICAgbmV4dE9mZnNldCA9IG5leHRFdmVudC5zcGFuICsgbmV4dEV2ZW50Lm9mZnNldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWxsb2NhdGVkRXZlbnRzLnB1c2goLi4ub3RoZXJSb3dFdmVudHMpO1xuICAgICAgfVxuXG4gICAgICBldmVudFJvd3MucHVzaCh7XG4gICAgICAgIHJvdzogW2V2ZW50LCAuLi5vdGhlclJvd0V2ZW50c10sXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBldmVudFJvd3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aFZpZXcoe1xuICBldmVudHMgPSBbXSxcbiAgdmlld0RhdGUsXG4gIHdlZWtTdGFydHNPbixcbiAgZXhjbHVkZWQgPSBbXSxcbn06IHtcbiAgZXZlbnRzPzogQ2FsZW5kYXJFdmVudFtdO1xuICB2aWV3RGF0ZTogRGF0ZTtcbiAgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG4gIGV4Y2x1ZGVkPzogbnVtYmVyW107XG59KTogTW9udGhWaWV3IHtcbiAgaWYgKCFldmVudHMpIHtcbiAgICBldmVudHMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0OiBEYXRlID0gZGF0ZUZucy5zdGFydE9mV2VlayhkYXRlRm5zLnN0YXJ0T2ZNb250aCh2aWV3RGF0ZSksIHsgd2Vla1N0YXJ0c09uIH0pO1xuICBjb25zdCBlbmQ6IERhdGUgPSBkYXRlRm5zLmVuZE9mV2VlayhkYXRlRm5zLmVuZE9mTW9udGgodmlld0RhdGUpLCB7IHdlZWtTdGFydHNPbiB9KTtcbiAgY29uc3QgZXZlbnRzSW5Nb250aDogQ2FsZW5kYXJFdmVudFtdID0gZ2V0RXZlbnRzSW5QZXJpb2Qoe1xuICAgIGV2ZW50cyxcbiAgICBwZXJpb2RTdGFydDogc3RhcnQsXG4gICAgcGVyaW9kRW5kOiBlbmQsXG4gIH0pO1xuICBjb25zdCBkYXlzOiBNb250aFZpZXdEYXlbXSA9IFtdO1xuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF0ZUZucy5kaWZmZXJlbmNlSW5EYXlzKGVuZCwgc3RhcnQpICsgMTsgaSsrKSB7XG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9IGRhdGVGbnMuYWRkRGF5cyhzdGFydCwgaSk7XG4gICAgaWYgKCFleGNsdWRlZC5zb21lKChlKSA9PiBkYXRlLmdldERheSgpID09PSBlKSkge1xuICAgICAgY29uc3QgZGF5OiBNb250aFZpZXdEYXkgPSBnZXRXZWVrRGF5KHsgZGF0ZSB9KSBhcyBNb250aFZpZXdEYXk7XG4gICAgICBjb25zdCBjYWxFdmVudHM6IENhbGVuZGFyRXZlbnRbXSA9IGdldEV2ZW50c0luUGVyaW9kKHtcbiAgICAgICAgZXZlbnRzOiBldmVudHNJbk1vbnRoLFxuICAgICAgICBwZXJpb2RTdGFydDogZGF0ZUZucy5zdGFydE9mRGF5KGRhdGUpLFxuICAgICAgICBwZXJpb2RFbmQ6IGRhdGVGbnMuZW5kT2ZEYXkoZGF0ZSksXG4gICAgICB9KTtcbiAgICAgIGRheS5pbk1vbnRoID0gZGF0ZUZucy5pc1NhbWVNb250aChkYXRlLCB2aWV3RGF0ZSk7XG4gICAgICBkYXkuZXZlbnRzID0gY2FsRXZlbnRzO1xuICAgICAgZGF5LmJhZGdlVG90YWwgPSBjYWxFdmVudHMubGVuZ3RoO1xuICAgICAgZGF5cy5wdXNoKGRheSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdG90YWxEYXlzVmlzaWJsZUluV2VlazogbnVtYmVyID0gREFZU19JTl9XRUVLIC0gZXhjbHVkZWQubGVuZ3RoO1xuICBjb25zdCByb3dzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRheXMubGVuZ3RoIC8gdG90YWxEYXlzVmlzaWJsZUluV2Vlayk7XG4gIGNvbnN0IHJvd09mZnNldHM6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICByb3dPZmZzZXRzLnB1c2goaSAqIHRvdGFsRGF5c1Zpc2libGVJbldlZWspO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByb3dPZmZzZXRzLFxuICAgIHRvdGFsRGF5c1Zpc2libGVJbldlZWssXG4gICAgZGF5cyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheVZpZXcoeyBldmVudHMgPSBbXSwgdmlld0RhdGUsIGhvdXJTZWdtZW50cywgZGF5U3RhcnQsIGRheUVuZCwgZXZlbnRXaWR0aCwgc2VnbWVudEhlaWdodCB9OiBHZXREYXlWaWV3QXJncyk6IERheVZpZXcge1xuICBpZiAoIWV2ZW50cykge1xuICAgIGV2ZW50cyA9IFtdO1xuICB9XG5cbiAgY29uc3Qgc3RhcnRPZlZpZXc6IERhdGUgPSBkYXRlRm5zLnNldE1pbnV0ZXMoZGF0ZUZucy5zZXRIb3VycyhkYXRlRm5zLnN0YXJ0T2ZEYXkodmlld0RhdGUpLCBkYXlTdGFydC5ob3VyKSwgZGF5U3RhcnQubWludXRlKTtcbiAgY29uc3QgZW5kT2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKFxuICAgIGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mTWludXRlKGRhdGVGbnMuZW5kT2ZEYXkodmlld0RhdGUpKSwgZGF5RW5kLmhvdXIpLFxuICAgIGRheUVuZC5taW51dGUsXG4gICk7XG4gIGNvbnN0IHByZXZpb3VzRGF5RXZlbnRzOiBEYXlWaWV3RXZlbnRbXSA9IFtdO1xuXG4gIGNvbnN0IGRheVZpZXdFdmVudHM6IERheVZpZXdFdmVudFtdID0gZ2V0RXZlbnRzSW5UaW1lUmFuZ2UoXG4gICAgZ2V0RXZlbnRzSW5QZXJpb2Qoe1xuICAgICAgZXZlbnRzOiBldmVudHMuZmlsdGVyKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4gIWV2ZW50LmFsbERheSksXG4gICAgICBwZXJpb2RTdGFydDogc3RhcnRPZlZpZXcsXG4gICAgICBwZXJpb2RFbmQ6IGVuZE9mVmlldyxcbiAgICB9KSxcbiAgICBkYXlTdGFydCxcbiAgICBkYXlFbmQsXG4gIClcbiAgICAuc29ydCgoZXZlbnRBOiBDYWxlbmRhckV2ZW50LCBldmVudEI6IENhbGVuZGFyRXZlbnQpID0+IHtcbiAgICAgIHJldHVybiBldmVudEEuc3RhcnQudmFsdWVPZigpIC0gZXZlbnRCLnN0YXJ0LnZhbHVlT2YoKTtcbiAgICB9KVxuICAgIC5tYXAoKGV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBldmVudFN0YXJ0OiBEYXRlID0gZXZlbnQuc3RhcnQ7XG4gICAgICBjb25zdCBldmVudEVuZDogRGF0ZSA9IGV2ZW50LmVuZCB8fCBldmVudFN0YXJ0O1xuICAgICAgY29uc3Qgc3RhcnRzQmVmb3JlRGF5OiBib29sZWFuID0gZXZlbnRTdGFydCA8IHN0YXJ0T2ZWaWV3O1xuICAgICAgY29uc3QgZW5kc0FmdGVyRGF5OiBib29sZWFuID0gZXZlbnRFbmQgPiBlbmRPZlZpZXc7XG4gICAgICBjb25zdCBob3VySGVpZ2h0TW9kaWZpZXI6IG51bWJlciA9IChob3VyU2VnbWVudHMgKiBzZWdtZW50SGVpZ2h0KSAvIE1JTlVURVNfSU5fSE9VUjtcblxuICAgICAgbGV0IHRvcDogbnVtYmVyID0gMDtcblxuICAgICAgaWYgKGV2ZW50U3RhcnQgPiBzdGFydE9mVmlldykge1xuICAgICAgICB0b3AgKz0gZGF0ZUZucy5kaWZmZXJlbmNlSW5NaW51dGVzKGV2ZW50U3RhcnQsIHN0YXJ0T2ZWaWV3KTtcbiAgICAgIH1cblxuICAgICAgdG9wICo9IGhvdXJIZWlnaHRNb2RpZmllcjtcblxuICAgICAgY29uc3Qgc3RhcnREYXRlOiBEYXRlID0gc3RhcnRzQmVmb3JlRGF5ID8gc3RhcnRPZlZpZXcgOiBldmVudFN0YXJ0O1xuICAgICAgY29uc3QgZW5kRGF0ZTogRGF0ZSA9IGVuZHNBZnRlckRheSA/IGVuZE9mVmlldyA6IGV2ZW50RW5kO1xuXG4gICAgICBsZXQgaGVpZ2h0OiBudW1iZXIgPSBkYXRlRm5zLmRpZmZlcmVuY2VJbk1pbnV0ZXMoZW5kRGF0ZSwgc3RhcnREYXRlKTtcblxuICAgICAgaWYgKCFldmVudC5lbmQpIHtcbiAgICAgICAgaGVpZ2h0ID0gc2VnbWVudEhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodCAqPSBob3VySGVpZ2h0TW9kaWZpZXI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJvdHRvbTogbnVtYmVyID0gdG9wICsgaGVpZ2h0O1xuXG4gICAgICBjb25zdCBvdmVybGFwcGluZ1ByZXZpb3VzRXZlbnRzOiBEYXlWaWV3RXZlbnRbXSA9IHByZXZpb3VzRGF5RXZlbnRzLmZpbHRlcigocHJldmlvdXNFdmVudDogRGF5Vmlld0V2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzRXZlbnRUb3A6IG51bWJlciA9IHByZXZpb3VzRXZlbnQudG9wO1xuICAgICAgICBjb25zdCBwcmV2aW91c0V2ZW50Qm90dG9tOiBudW1iZXIgPSBwcmV2aW91c0V2ZW50LnRvcCArIHByZXZpb3VzRXZlbnQuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh0b3AgPCBwcmV2aW91c0V2ZW50Qm90dG9tICYmIHByZXZpb3VzRXZlbnRCb3R0b20gPCBib3R0b20pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c0V2ZW50VG9wIDw9IHRvcCAmJiBib3R0b20gPD0gcHJldmlvdXNFdmVudEJvdHRvbSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIGxldCBsZWZ0OiBudW1iZXIgPSAwO1xuXG4gICAgICB3aGlsZSAob3ZlcmxhcHBpbmdQcmV2aW91c0V2ZW50cy5zb21lKChwcmV2aW91c0V2ZW50KSA9PiBwcmV2aW91c0V2ZW50LmxlZnQgPT09IGxlZnQpKSB7XG4gICAgICAgIGxlZnQgKz0gZXZlbnRXaWR0aDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF5RXZlbnQ6IERheVZpZXdFdmVudCA9IHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGg6IGV2ZW50V2lkdGgsXG4gICAgICAgIHRvcCxcbiAgICAgICAgbGVmdCxcbiAgICAgICAgc3RhcnRzQmVmb3JlRGF5LFxuICAgICAgICBlbmRzQWZ0ZXJEYXksXG4gICAgICB9O1xuXG4gICAgICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgICAgICBwcmV2aW91c0RheUV2ZW50cy5wdXNoKGRheUV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRheUV2ZW50O1xuICAgIH0pXG4gICAgLmZpbHRlcigoZGF5RXZlbnQ6IERheVZpZXdFdmVudCkgPT4gZGF5RXZlbnQuaGVpZ2h0ID4gMCk7XG5cbiAgY29uc3Qgd2lkdGg6IG51bWJlciA9IE1hdGgubWF4KC4uLmRheVZpZXdFdmVudHMubWFwKChldmVudDogRGF5Vmlld0V2ZW50KSA9PiBldmVudC5sZWZ0ICsgZXZlbnQud2lkdGgpKTtcbiAgY29uc3QgYWxsRGF5RXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBnZXRFdmVudHNJblBlcmlvZCh7XG4gICAgZXZlbnRzOiBldmVudHMuZmlsdGVyKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4gZXZlbnQuYWxsRGF5KSxcbiAgICBwZXJpb2RTdGFydDogZGF0ZUZucy5zdGFydE9mRGF5KHN0YXJ0T2ZWaWV3KSxcbiAgICBwZXJpb2RFbmQ6IGRhdGVGbnMuZW5kT2ZEYXkoZW5kT2ZWaWV3KSxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudHM6IGRheVZpZXdFdmVudHMsXG4gICAgd2lkdGgsXG4gICAgYWxsRGF5RXZlbnRzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5Vmlld0hvdXJHcmlkKHtcbiAgdmlld0RhdGUsXG4gIGhvdXJTZWdtZW50cyxcbiAgZGF5U3RhcnQsXG4gIGRheUVuZCxcbn06IHtcbiAgdmlld0RhdGU6IERhdGU7XG4gIGhvdXJTZWdtZW50czogbnVtYmVyO1xuICBkYXlTdGFydDogYW55O1xuICBkYXlFbmQ6IGFueTtcbn0pOiBEYXlWaWV3SG91cltdIHtcbiAgY29uc3QgaG91cnM6IERheVZpZXdIb3VyW10gPSBbXTtcblxuICBjb25zdCBzdGFydE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZkRheSh2aWV3RGF0ZSksIGRheVN0YXJ0LmhvdXIpLCBkYXlTdGFydC5taW51dGUpO1xuICBjb25zdCBlbmRPZlZpZXc6IERhdGUgPSBkYXRlRm5zLnNldE1pbnV0ZXMoXG4gICAgZGF0ZUZucy5zZXRIb3VycyhkYXRlRm5zLnN0YXJ0T2ZNaW51dGUoZGF0ZUZucy5lbmRPZkRheSh2aWV3RGF0ZSkpLCBkYXlFbmQuaG91ciksXG4gICAgZGF5RW5kLm1pbnV0ZSxcbiAgKTtcbiAgY29uc3Qgc2VnbWVudER1cmF0aW9uOiBudW1iZXIgPSBNSU5VVEVTX0lOX0hPVVIgLyBob3VyU2VnbWVudHM7XG4gIGNvbnN0IHN0YXJ0T2ZWaWV3RGF5OiBEYXRlID0gZGF0ZUZucy5zdGFydE9mRGF5KHZpZXdEYXRlKTtcblxuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgSE9VUlNfSU5fREFZOyBpKyspIHtcbiAgICBjb25zdCBzZWdtZW50czogRGF5Vmlld0hvdXJTZWdtZW50W10gPSBbXTtcbiAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgaG91clNlZ21lbnRzOyBqKyspIHtcbiAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSBkYXRlRm5zLmFkZE1pbnV0ZXMoZGF0ZUZucy5hZGRIb3VycyhzdGFydE9mVmlld0RheSwgaSksIGogKiBzZWdtZW50RHVyYXRpb24pO1xuICAgICAgaWYgKGRhdGUgPj0gc3RhcnRPZlZpZXcgJiYgZGF0ZSA8IGVuZE9mVmlldykge1xuICAgICAgICBzZWdtZW50cy5wdXNoKHtcbiAgICAgICAgICBkYXRlLFxuICAgICAgICAgIGlzU3RhcnQ6IGogPT09IDAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgaG91cnMucHVzaCh7IHNlZ21lbnRzIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBob3Vycztcbn1cbiJdfQ==