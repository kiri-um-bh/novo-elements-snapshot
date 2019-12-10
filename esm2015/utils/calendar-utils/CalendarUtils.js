/**
 * @fileoverview added by tsickle
 * Generated from: utils/calendar-utils/CalendarUtils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJVdGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9jYWxlbmRhci11dGlscy9DYWxlbmRhclV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7O01BRTlCLG1CQUFtQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7TUFDdEMsWUFBWSxHQUFXLENBQUM7O01BQ3hCLFlBQVksR0FBVyxFQUFFOztNQUN6QixlQUFlLEdBQVcsRUFBRTs7QUFFbEMsTUFBWSxxQkFBcUI7SUFDL0IsS0FBSyxHQUFBO0lBQ0wsUUFBUSxHQUFBO0lBQ1IsUUFBUSxHQUFBO0VBQ1Q7Ozs7Ozs7O0FBRUQsb0RBSUM7OztJQUhDLCtDQUFxQjs7SUFDckIsa0RBQWU7O0lBQ2YsZ0RBQWM7Ozs7O0FBR2hCLDZCQU1DOzs7SUFMQyx1QkFBVzs7SUFDWCx5QkFBZ0I7O0lBQ2hCLDBCQUFpQjs7SUFDakIsMkJBQWtCOztJQUNsQiw0QkFBbUI7Ozs7O0FBR3JCLGdDQUdDOzs7SUFGQyw2QkFBZ0I7O0lBQ2hCLCtCQUFrQjs7Ozs7QUFHcEIsaUNBSUM7OztJQUhDLDRCQUFjOztJQUNkLCtCQUFrQjs7Ozs7SUFDbEIsbURBQWtEOzs7OztBQUdwRCxtQ0FpQkM7OztJQWhCQywyQkFBWTs7SUFDWiw4QkFBWTs7SUFDWiw0QkFBVzs7SUFDWCw4QkFBYzs7SUFDZCxvQ0FBcUI7O0lBQ3JCLDhCQUFrQjs7SUFDbEIsNkJBQWM7O0lBQ2QsaUNBQWlDOztJQUNqQyxnQ0FBd0I7O0lBQ3hCLCtCQUFpQjs7SUFDakIsaUNBQWtCOztJQUNsQixrQ0FHRTs7SUFDRixrQ0FBb0I7Ozs7O0FBR3RCLG1DQVFDOzs7SUFQQyw4QkFBcUI7O0lBQ3JCLCtCQUFlOztJQUNmLDZCQUFhOztJQUNiLHlDQUEwQjs7SUFDMUIsc0NBQXVCOztJQUN2Qiw0QkFBYTs7SUFD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RUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQ2hGLE1BQU0sQ0FBQyxNQUFNLENBQ2Q7O1VBQ0ssZUFBZSxHQUFXLGVBQWUsR0FBRyxZQUFZOztVQUN4RCxjQUFjLEdBQVMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFFekQsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDdkMsUUFBUSxHQUF5QixFQUFFO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUN2QyxJQUFJLEdBQVMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDO1lBQy9GLElBQUksSUFBSSxJQUFJLFdBQVcsSUFBSSxJQUFJLEdBQUcsU0FBUyxFQUFFO2dCQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNaLElBQUk7b0JBQ0osT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDO2lCQUNqQixDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMxQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IFdFRUtFTkRfREFZX05VTUJFUlM6IG51bWJlcltdID0gWzAsIDZdO1xuY29uc3QgREFZU19JTl9XRUVLOiBudW1iZXIgPSA3O1xuY29uc3QgSE9VUlNfSU5fREFZOiBudW1iZXIgPSAyNDtcbmNvbnN0IE1JTlVURVNfSU5fSE9VUjogbnVtYmVyID0gNjA7XG5cbmV4cG9ydCBlbnVtIENhbGVuZGFyRXZlbnRSZXNwb25zZSB7XG4gIE1heWJlLFxuICBBY2NlcHRlZCxcbiAgUmVqZWN0ZWQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50IHtcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIG5ld1N0YXJ0OiBEYXRlO1xuICBuZXdFbmQ/OiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtEYXkge1xuICBkYXRlOiBEYXRlO1xuICBpc1Bhc3Q6IGJvb2xlYW47XG4gIGlzVG9kYXk6IGJvb2xlYW47XG4gIGlzRnV0dXJlOiBib29sZWFuO1xuICBpc1dlZWtlbmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRDb2xvciB7XG4gIHByaW1hcnk6IHN0cmluZztcbiAgc2Vjb25kYXJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRBY3Rpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICBjc3NDbGFzcz86IHN0cmluZztcbiAgb25DbGljayh7IGV2ZW50IH06IHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfSk6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhckV2ZW50IHtcbiAgaWQ/OiBudW1iZXI7XG4gIHN0YXJ0OiBEYXRlO1xuICBlbmQ/OiBEYXRlO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgY29sb3I6IEV2ZW50Q29sb3I7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHJlc3BvbnNlPzogQ2FsZW5kYXJFdmVudFJlc3BvbnNlO1xuICBhY3Rpb25zPzogRXZlbnRBY3Rpb25bXTtcbiAgYWxsRGF5PzogYm9vbGVhbjtcbiAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gIHJlc2l6YWJsZT86IHtcbiAgICBiZWZvcmVTdGFydD86IGJvb2xlYW47XG4gICAgYWZ0ZXJFbmQ/OiBib29sZWFuO1xuICB9O1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtWaWV3RXZlbnQge1xuICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHNwYW46IG51bWJlcjtcbiAgc3RhcnRzQmVmb3JlV2VlazogYm9vbGVhbjtcbiAgZW5kc0FmdGVyV2VlazogYm9vbGVhbjtcbiAgdG9wPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1ZpZXdFdmVudFJvdyB7XG4gIHJvdzogV2Vla1ZpZXdFdmVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoVmlld0RheSBleHRlbmRzIFdlZWtEYXkge1xuICBpbk1vbnRoOiBib29sZWFuO1xuICBldmVudHM6IENhbGVuZGFyRXZlbnRbXTtcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBjc3NDbGFzcz86IHN0cmluZztcbiAgYmFkZ2VUb3RhbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoVmlldyB7XG4gIHJvd09mZnNldHM6IG51bWJlcltdO1xuICBkYXlzOiBNb250aFZpZXdEYXlbXTtcbiAgdG90YWxEYXlzVmlzaWJsZUluV2VlazogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdFdmVudCB7XG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgc3RhcnRzQmVmb3JlRGF5OiBib29sZWFuO1xuICBlbmRzQWZ0ZXJEYXk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5VmlldyB7XG4gIGV2ZW50czogRGF5Vmlld0V2ZW50W107XG4gIHdpZHRoOiBudW1iZXI7XG4gIGFsbERheUV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdIb3VyU2VnbWVudCB7XG4gIGlzU3RhcnQ6IGJvb2xlYW47XG4gIGRhdGU6IERhdGU7XG4gIGNzc0NsYXNzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdIb3VyIHtcbiAgc2VnbWVudHM6IERheVZpZXdIb3VyU2VnbWVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElzRXZlbnRJblBlcmlvZEFyZ3Mge1xuICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgcGVyaW9kU3RhcnQ6IERhdGU7XG4gIHBlcmlvZEVuZDogRGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRFdmVudHNJblBlcmlvZEFyZ3Mge1xuICBldmVudHM6IENhbGVuZGFyRXZlbnRbXTtcbiAgcGVyaW9kU3RhcnQ6IERhdGU7XG4gIHBlcmlvZEVuZDogRGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXREYXlWaWV3QXJncyB7XG4gIGV2ZW50cz86IENhbGVuZGFyRXZlbnRbXTtcbiAgdmlld0RhdGU6IERhdGU7XG4gIGhvdXJTZWdtZW50czogbnVtYmVyO1xuICBkYXlTdGFydDoge1xuICAgIGhvdXI6IG51bWJlcjtcbiAgICBtaW51dGU6IG51bWJlcjtcbiAgfTtcbiAgZGF5RW5kOiB7XG4gICAgaG91cjogbnVtYmVyO1xuICAgIG1pbnV0ZTogbnVtYmVyO1xuICB9O1xuICBldmVudFdpZHRoOiBudW1iZXI7XG4gIHNlZ21lbnRIZWlnaHQ6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gZ2V0RXhjbHVkZWREYXlzKHsgc3RhcnREYXRlLCBkYXlzLCBleGNsdWRlZCB9OiB7IHN0YXJ0RGF0ZTogRGF0ZTsgZGF5czogbnVtYmVyOyBleGNsdWRlZDogbnVtYmVyW10gfSk6IG51bWJlciB7XG4gIGlmIChleGNsdWRlZC5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgbGV0IGRheTogbnVtYmVyID0gc3RhcnREYXRlLmdldERheSgpO1xuICBsZXQgcmVkdWNlOiBudW1iZXIgPSAwO1xuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF5czsgaSsrKSB7XG4gICAgaWYgKGRheSA9PT0gREFZU19JTl9XRUVLKSB7XG4gICAgICBkYXkgPSAwO1xuICAgIH1cbiAgICBpZiAoZXhjbHVkZWQuc29tZSgoZSkgPT4gZSA9PT0gZGF5KSkge1xuICAgICAgcmVkdWNlKys7XG4gICAgfVxuICAgIGRheSsrO1xuICB9XG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtWaWV3RXZlbnRTcGFuKHtcbiAgZXZlbnQsXG4gIG9mZnNldCxcbiAgc3RhcnRPZldlZWssXG4gIGV4Y2x1ZGVkLFxufToge1xuICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHN0YXJ0T2ZXZWVrOiBEYXRlO1xuICBleGNsdWRlZDogbnVtYmVyW107XG59KTogbnVtYmVyIHtcbiAgY29uc3QgYmVnaW46IERhdGUgPSBldmVudC5zdGFydCA8IHN0YXJ0T2ZXZWVrID8gc3RhcnRPZldlZWsgOiBldmVudC5zdGFydDtcbiAgbGV0IHNwYW46IG51bWJlciA9IDE7XG4gIGlmIChldmVudC5lbmQpIHtcbiAgICBzcGFuID0gZGF0ZUZucy5kaWZmZXJlbmNlSW5EYXlzKGRhdGVGbnMuYWRkTWludXRlcyhkYXRlRm5zLmVuZE9mRGF5KGV2ZW50LmVuZCksIDEpLCBkYXRlRm5zLnN0YXJ0T2ZEYXkoYmVnaW4pKTtcbiAgfVxuICBjb25zdCB0b3RhbExlbmd0aDogbnVtYmVyID0gb2Zmc2V0ICsgc3BhbjtcbiAgaWYgKHRvdGFsTGVuZ3RoID4gREFZU19JTl9XRUVLKSB7XG4gICAgc3BhbiA9IERBWVNfSU5fV0VFSyAtIG9mZnNldDtcbiAgfVxuICByZXR1cm4gc3BhbiAtIGdldEV4Y2x1ZGVkRGF5cyh7IHN0YXJ0RGF0ZTogYmVnaW4sIGRheXM6IHNwYW4sIGV4Y2x1ZGVkIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1ZpZXdFdmVudE9mZnNldCh7XG4gIGV2ZW50LFxuICBzdGFydE9mV2VlayxcbiAgZXhjbHVkZWQgPSBbXSxcbn06IHtcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIHN0YXJ0T2ZXZWVrOiBEYXRlO1xuICBleGNsdWRlZD86IG51bWJlcltdO1xufSk6IG51bWJlciB7XG4gIGlmIChldmVudC5zdGFydCA8IHN0YXJ0T2ZXZWVrKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc3QgZGlzdGFuY2U6IG51bWJlciA9IGRhdGVGbnMuZGlmZmVyZW5jZUluRGF5cyhldmVudC5zdGFydCwgc3RhcnRPZldlZWspO1xuICByZXR1cm4gZGlzdGFuY2UgLSBnZXRFeGNsdWRlZERheXMoeyBzdGFydERhdGU6IHN0YXJ0T2ZXZWVrLCBkYXlzOiBkaXN0YW5jZSwgZXhjbHVkZWQgfSk7XG59XG5cbmZ1bmN0aW9uIGlzRXZlbnRJc1BlcmlvZCh7IGV2ZW50LCBwZXJpb2RTdGFydCwgcGVyaW9kRW5kIH06IElzRXZlbnRJblBlcmlvZEFyZ3MpOiBib29sZWFuIHtcbiAgY29uc3QgZXZlbnRTdGFydDogRGF0ZSA9IGV2ZW50LnN0YXJ0O1xuICBjb25zdCBldmVudEVuZDogRGF0ZSA9IGV2ZW50LmVuZCB8fCBldmVudC5zdGFydDtcblxuICBpZiAoZXZlbnRTdGFydCA+IHBlcmlvZFN0YXJ0ICYmIGV2ZW50U3RhcnQgPCBwZXJpb2RFbmQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChldmVudEVuZCA+IHBlcmlvZFN0YXJ0ICYmIGV2ZW50RW5kIDwgcGVyaW9kRW5kKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZXZlbnRTdGFydCA8IHBlcmlvZFN0YXJ0ICYmIGV2ZW50RW5kID4gcGVyaW9kRW5kKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZGF0ZUZucy5pc1NhbWVTZWNvbmQoZXZlbnRTdGFydCwgcGVyaW9kU3RhcnQpIHx8IGRhdGVGbnMuaXNTYW1lU2Vjb25kKGV2ZW50U3RhcnQsIHBlcmlvZEVuZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChkYXRlRm5zLmlzU2FtZVNlY29uZChldmVudEVuZCwgcGVyaW9kU3RhcnQpIHx8IGRhdGVGbnMuaXNTYW1lU2Vjb25kKGV2ZW50RW5kLCBwZXJpb2RFbmQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50c0luUGVyaW9kKHsgZXZlbnRzLCBwZXJpb2RTdGFydCwgcGVyaW9kRW5kIH06IEdldEV2ZW50c0luUGVyaW9kQXJncyk6IENhbGVuZGFyRXZlbnRbXSB7XG4gIHJldHVybiBldmVudHMuZmlsdGVyKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4gaXNFdmVudElzUGVyaW9kKHsgZXZlbnQsIHBlcmlvZFN0YXJ0LCBwZXJpb2RFbmQgfSkpO1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudHNJblRpbWVSYW5nZShldmVudHM6IENhbGVuZGFyRXZlbnRbXSwgZGF5U3RhcnQ6IGFueSwgZGF5RW5kOiBhbnkpIHtcbiAgcmV0dXJuIGV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZXZlbnRTdGFydDogRGF0ZSA9IGV2ZW50LnN0YXJ0O1xuICAgIGNvbnN0IGV2ZW50RW5kOiBEYXRlID0gZXZlbnQuZW5kIHx8IGV2ZW50U3RhcnQ7XG5cbiAgICBjb25zdCBzdGFydE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZkRheShldmVudFN0YXJ0KSwgZGF5U3RhcnQuaG91ciksIGRheVN0YXJ0Lm1pbnV0ZSk7XG4gICAgY29uc3QgZW5kT2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mTWludXRlKGV2ZW50U3RhcnQpLCBkYXlFbmQuaG91ciksIGRheUVuZC5taW51dGUpO1xuXG4gICAgcmV0dXJuIGRhdGVGbnMuaXNBZnRlcihldmVudEVuZCwgc3RhcnRPZlZpZXcpICYmIGRhdGVGbnMuaXNCZWZvcmUoZXZlbnRTdGFydCwgZW5kT2ZWaWV3KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtEYXkoeyBkYXRlIH06IHsgZGF0ZTogRGF0ZSB9KTogV2Vla0RheSB7XG4gIGNvbnN0IHRvZGF5OiBEYXRlID0gZGF0ZUZucy5zdGFydE9mRGF5KG5ldyBEYXRlKCkpO1xuICByZXR1cm4ge1xuICAgIGRhdGUsXG4gICAgaXNQYXN0OiBkYXRlIDwgdG9kYXksXG4gICAgaXNUb2RheTogZGF0ZUZucy5pc1NhbWVEYXkoZGF0ZSwgdG9kYXkpLFxuICAgIGlzRnV0dXJlOiBkYXRlID4gdG9kYXksXG4gICAgaXNXZWVrZW5kOiBXRUVLRU5EX0RBWV9OVU1CRVJTLmluZGV4T2YoZGF0ZUZucy5nZXREYXkoZGF0ZSkpID4gLTEsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrVmlld0hlYWRlcih7XG4gIHZpZXdEYXRlLFxuICB3ZWVrU3RhcnRzT24sXG4gIGV4Y2x1ZGVkID0gW10sXG59OiB7XG4gIHZpZXdEYXRlOiBEYXRlO1xuICB3ZWVrU3RhcnRzT246IG51bWJlcjtcbiAgZXhjbHVkZWQ/OiBudW1iZXJbXTtcbn0pOiBXZWVrRGF5W10ge1xuICBjb25zdCBzdGFydDogRGF0ZSA9IGRhdGVGbnMuc3RhcnRPZldlZWsodmlld0RhdGUsIHsgd2Vla1N0YXJ0c09uIH0pO1xuICBjb25zdCBkYXlzOiBXZWVrRGF5W10gPSBbXTtcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IERBWVNfSU5fV0VFSzsgaSsrKSB7XG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9IGRhdGVGbnMuYWRkRGF5cyhzdGFydCwgaSk7XG4gICAgaWYgKCFleGNsdWRlZC5zb21lKChlKSA9PiBkYXRlLmdldERheSgpID09PSBlKSkge1xuICAgICAgZGF5cy5wdXNoKGdldFdlZWtEYXkoeyBkYXRlIH0pKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF5cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtWaWV3KHtcbiAgZXZlbnRzID0gW10sXG4gIHZpZXdEYXRlLFxuICB3ZWVrU3RhcnRzT24sXG4gIGV4Y2x1ZGVkID0gW10sXG4gIGhvdXJTZWdtZW50cyxcbiAgc2VnbWVudEhlaWdodCxcbiAgZGF5U3RhcnQsXG4gIGRheUVuZCxcbn06IHtcbiAgZXZlbnRzPzogQ2FsZW5kYXJFdmVudFtdO1xuICB2aWV3RGF0ZTogRGF0ZTtcbiAgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG4gIGV4Y2x1ZGVkPzogbnVtYmVyW107XG4gIGhvdXJTZWdtZW50czogbnVtYmVyO1xuICBzZWdtZW50SGVpZ2h0OiBudW1iZXI7XG4gIGRheVN0YXJ0OiBhbnk7XG4gIGRheUVuZDogYW55O1xufSk6IFdlZWtWaWV3RXZlbnRSb3dbXSB7XG4gIGlmICghZXZlbnRzKSB7XG4gICAgZXZlbnRzID0gW107XG4gIH1cblxuICBjb25zdCBzdGFydE9mVmlld1dlZWs6IERhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZXZWVrKHZpZXdEYXRlLCB7IHdlZWtTdGFydHNPbiB9KTtcbiAgY29uc3QgZW5kT2ZWaWV3V2VlazogRGF0ZSA9IGRhdGVGbnMuZW5kT2ZXZWVrKHZpZXdEYXRlLCB7IHdlZWtTdGFydHNPbiB9KTtcbiAgY29uc3QgbWF4UmFuZ2U6IG51bWJlciA9IERBWVNfSU5fV0VFSyAtIGV4Y2x1ZGVkLmxlbmd0aDtcblxuICBjb25zdCBldmVudHNNYXBwZWQ6IFdlZWtWaWV3RXZlbnRbXSA9IGdldEV2ZW50c0luVGltZVJhbmdlKFxuICAgIGdldEV2ZW50c0luUGVyaW9kKHsgZXZlbnRzLCBwZXJpb2RTdGFydDogc3RhcnRPZlZpZXdXZWVrLCBwZXJpb2RFbmQ6IGVuZE9mVmlld1dlZWsgfSksXG4gICAgZGF5U3RhcnQsXG4gICAgZGF5RW5kLFxuICApXG4gICAgLm1hcCgoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldDogbnVtYmVyID0gZ2V0V2Vla1ZpZXdFdmVudE9mZnNldCh7IGV2ZW50LCBzdGFydE9mV2Vlazogc3RhcnRPZlZpZXdXZWVrLCBleGNsdWRlZCB9KTtcbiAgICAgIGNvbnN0IHNwYW46IG51bWJlciA9IDE7IC8vIGdldFdlZWtWaWV3RXZlbnRTcGFuKHsgZXZlbnQsIG9mZnNldCwgc3RhcnRPZldlZWs6IHN0YXJ0T2ZWaWV3V2VlaywgZXhjbHVkZWQgfSk7XG4gICAgICByZXR1cm4geyBldmVudCwgb2Zmc2V0LCBzcGFuIH07XG4gICAgfSlcbiAgICAuZmlsdGVyKChlKSA9PiBlLm9mZnNldCA8IG1heFJhbmdlKVxuICAgIC5maWx0ZXIoKGUpID0+IGUuc3BhbiA+IDApXG4gICAgLm1hcCgoZW50cnkpID0+ICh7XG4gICAgICBldmVudDogZW50cnkuZXZlbnQsXG4gICAgICBvZmZzZXQ6IGVudHJ5Lm9mZnNldCxcbiAgICAgIHNwYW46IGVudHJ5LnNwYW4sXG4gICAgICBzdGFydHNCZWZvcmVXZWVrOiBlbnRyeS5ldmVudC5zdGFydCA8IHN0YXJ0T2ZWaWV3V2VlayxcbiAgICAgIGVuZHNBZnRlcldlZWs6IChlbnRyeS5ldmVudC5lbmQgfHwgZW50cnkuZXZlbnQuc3RhcnQpID4gZW5kT2ZWaWV3V2VlayxcbiAgICAgIHRvcDogMCxcbiAgICB9KSlcbiAgICAuc29ydChcbiAgICAgIChpdGVtQSwgaXRlbUIpOiBudW1iZXIgPT4ge1xuICAgICAgICBjb25zdCBzdGFydFNlY29uZHNEaWZmOiBudW1iZXIgPSBkYXRlRm5zLmRpZmZlcmVuY2VJblNlY29uZHMoaXRlbUEuZXZlbnQuc3RhcnQsIGl0ZW1CLmV2ZW50LnN0YXJ0KTtcbiAgICAgICAgaWYgKHN0YXJ0U2Vjb25kc0RpZmYgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZGF0ZUZucy5kaWZmZXJlbmNlSW5TZWNvbmRzKGl0ZW1CLmV2ZW50LmVuZCB8fCBpdGVtQi5ldmVudC5zdGFydCwgaXRlbUEuZXZlbnQuZW5kIHx8IGl0ZW1BLmV2ZW50LnN0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhcnRTZWNvbmRzRGlmZjtcbiAgICAgIH0sXG4gICAgKVxuICAgIC5tYXAoKGVudHJ5OiBXZWVrVmlld0V2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGFydE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZkRheShlbnRyeS5ldmVudC5zdGFydCksIGRheVN0YXJ0LmhvdXIpLCBkYXlTdGFydC5taW51dGUpO1xuICAgICAgY29uc3QgZW5kT2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKFxuICAgICAgICBkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZk1pbnV0ZShkYXRlRm5zLmVuZE9mRGF5KGVudHJ5LmV2ZW50LnN0YXJ0KSksIGRheUVuZC5ob3VyKSxcbiAgICAgICAgZGF5RW5kLm1pbnV0ZSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGV2ZW50U3RhcnQ6IERhdGUgPSBlbnRyeS5ldmVudC5zdGFydDtcbiAgICAgIGNvbnN0IGV2ZW50RW5kOiBEYXRlID0gZW50cnkuZXZlbnQuZW5kIHx8IGV2ZW50U3RhcnQ7XG5cbiAgICAgIGNvbnN0IGhvdXJIZWlnaHRNb2RpZmllcjogbnVtYmVyID0gKGhvdXJTZWdtZW50cyAqIHNlZ21lbnRIZWlnaHQpIC8gTUlOVVRFU19JTl9IT1VSO1xuXG4gICAgICBpZiAoZXZlbnRTdGFydCA+IHN0YXJ0T2ZWaWV3KSB7XG4gICAgICAgIGVudHJ5LnRvcCArPSBkYXRlRm5zLmRpZmZlcmVuY2VJbk1pbnV0ZXMoZXZlbnRTdGFydCwgc3RhcnRPZlZpZXcpO1xuICAgICAgfVxuXG4gICAgICBlbnRyeS50b3AgKj0gaG91ckhlaWdodE1vZGlmaWVyO1xuXG4gICAgICBjb25zdCBzdGFydHNCZWZvcmVEYXk6IGJvb2xlYW4gPSBldmVudFN0YXJ0IDwgc3RhcnRPZlZpZXc7XG4gICAgICBjb25zdCBlbmRzQWZ0ZXJEYXk6IGJvb2xlYW4gPSBldmVudEVuZCA+IGVuZE9mVmlldztcblxuICAgICAgY29uc3Qgc3RhcnREYXRlOiBEYXRlID0gc3RhcnRzQmVmb3JlRGF5ID8gc3RhcnRPZlZpZXcgOiBldmVudFN0YXJ0O1xuICAgICAgY29uc3QgZW5kRGF0ZTogRGF0ZSA9IGVuZHNBZnRlckRheSA/IGVuZE9mVmlldyA6IGV2ZW50RW5kO1xuXG4gICAgICBsZXQgaGVpZ2h0OiBudW1iZXIgPSBkYXRlRm5zLmRpZmZlcmVuY2VJbk1pbnV0ZXMoZW5kRGF0ZSwgc3RhcnREYXRlKTtcblxuICAgICAgaWYgKCFlbnRyeS5ldmVudC5lbmQpIHtcbiAgICAgICAgaGVpZ2h0ID0gc2VnbWVudEhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodCAqPSBob3VySGVpZ2h0TW9kaWZpZXI7XG4gICAgICB9XG5cbiAgICAgIGVudHJ5LmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgcmV0dXJuIGVudHJ5O1xuICAgIH0pO1xuXG4gIGNvbnN0IGV2ZW50Um93czogV2Vla1ZpZXdFdmVudFJvd1tdID0gW107XG4gIGNvbnN0IGFsbG9jYXRlZEV2ZW50czogV2Vla1ZpZXdFdmVudFtdID0gW107XG5cbiAgZXZlbnRzTWFwcGVkLmZvckVhY2goKGV2ZW50OiBXZWVrVmlld0V2ZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGFsbG9jYXRlZEV2ZW50cy5pbmRleE9mKGV2ZW50KSA9PT0gLTEpIHtcbiAgICAgIGFsbG9jYXRlZEV2ZW50cy5wdXNoKGV2ZW50KTtcblxuICAgICAgY29uc3Qgb3RoZXJSb3dFdmVudHM6IFdlZWtWaWV3RXZlbnRbXSA9IGV2ZW50c01hcHBlZC5zbGljZShpbmRleCArIDEpLmZpbHRlcigobmV4dEV2ZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXh0RXZlbnQudG9wID09PSBldmVudC50b3AgJiYgbmV4dEV2ZW50Lm9mZnNldCA9PT0gZXZlbnQub2Zmc2V0O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChvdGhlclJvd0V2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCB0b3RhbEV2ZW50c0ZvclJvdyA9IG90aGVyUm93RXZlbnRzLmxlbmd0aCArIDE7XG5cbiAgICAgICAgZXZlbnQuc3BhbiA9IDEgLyB0b3RhbEV2ZW50c0ZvclJvdztcblxuICAgICAgICBsZXQgbmV4dE9mZnNldCA9IGV2ZW50LnNwYW4gKyBldmVudC5vZmZzZXQ7XG5cbiAgICAgICAgb3RoZXJSb3dFdmVudHMuZm9yRWFjaCgobmV4dEV2ZW50OiBXZWVrVmlld0V2ZW50KSA9PiB7XG4gICAgICAgICAgbmV4dEV2ZW50Lm9mZnNldCA9IG5leHRPZmZzZXQ7XG4gICAgICAgICAgbmV4dEV2ZW50LnNwYW4gPSBldmVudC5zcGFuO1xuICAgICAgICAgIG5leHRPZmZzZXQgPSBuZXh0RXZlbnQuc3BhbiArIG5leHRFdmVudC5vZmZzZXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFsbG9jYXRlZEV2ZW50cy5wdXNoKC4uLm90aGVyUm93RXZlbnRzKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnRSb3dzLnB1c2goe1xuICAgICAgICByb3c6IFtldmVudCwgLi4ub3RoZXJSb3dFdmVudHNdLFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRSb3dzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGhWaWV3KHtcbiAgZXZlbnRzID0gW10sXG4gIHZpZXdEYXRlLFxuICB3ZWVrU3RhcnRzT24sXG4gIGV4Y2x1ZGVkID0gW10sXG59OiB7XG4gIGV2ZW50cz86IENhbGVuZGFyRXZlbnRbXTtcbiAgdmlld0RhdGU6IERhdGU7XG4gIHdlZWtTdGFydHNPbjogbnVtYmVyO1xuICBleGNsdWRlZD86IG51bWJlcltdO1xufSk6IE1vbnRoVmlldyB7XG4gIGlmICghZXZlbnRzKSB7XG4gICAgZXZlbnRzID0gW107XG4gIH1cblxuICBjb25zdCBzdGFydDogRGF0ZSA9IGRhdGVGbnMuc3RhcnRPZldlZWsoZGF0ZUZucy5zdGFydE9mTW9udGgodmlld0RhdGUpLCB7IHdlZWtTdGFydHNPbiB9KTtcbiAgY29uc3QgZW5kOiBEYXRlID0gZGF0ZUZucy5lbmRPZldlZWsoZGF0ZUZucy5lbmRPZk1vbnRoKHZpZXdEYXRlKSwgeyB3ZWVrU3RhcnRzT24gfSk7XG4gIGNvbnN0IGV2ZW50c0luTW9udGg6IENhbGVuZGFyRXZlbnRbXSA9IGdldEV2ZW50c0luUGVyaW9kKHtcbiAgICBldmVudHMsXG4gICAgcGVyaW9kU3RhcnQ6IHN0YXJ0LFxuICAgIHBlcmlvZEVuZDogZW5kLFxuICB9KTtcbiAgY29uc3QgZGF5czogTW9udGhWaWV3RGF5W10gPSBbXTtcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGRhdGVGbnMuZGlmZmVyZW5jZUluRGF5cyhlbmQsIHN0YXJ0KSArIDE7IGkrKykge1xuICAgIGNvbnN0IGRhdGU6IERhdGUgPSBkYXRlRm5zLmFkZERheXMoc3RhcnQsIGkpO1xuICAgIGlmICghZXhjbHVkZWQuc29tZSgoZSkgPT4gZGF0ZS5nZXREYXkoKSA9PT0gZSkpIHtcbiAgICAgIGNvbnN0IGRheTogTW9udGhWaWV3RGF5ID0gZ2V0V2Vla0RheSh7IGRhdGUgfSkgYXMgTW9udGhWaWV3RGF5O1xuICAgICAgY29uc3QgY2FsRXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBnZXRFdmVudHNJblBlcmlvZCh7XG4gICAgICAgIGV2ZW50czogZXZlbnRzSW5Nb250aCxcbiAgICAgICAgcGVyaW9kU3RhcnQ6IGRhdGVGbnMuc3RhcnRPZkRheShkYXRlKSxcbiAgICAgICAgcGVyaW9kRW5kOiBkYXRlRm5zLmVuZE9mRGF5KGRhdGUpLFxuICAgICAgfSk7XG4gICAgICBkYXkuaW5Nb250aCA9IGRhdGVGbnMuaXNTYW1lTW9udGgoZGF0ZSwgdmlld0RhdGUpO1xuICAgICAgZGF5LmV2ZW50cyA9IGNhbEV2ZW50cztcbiAgICAgIGRheS5iYWRnZVRvdGFsID0gY2FsRXZlbnRzLmxlbmd0aDtcbiAgICAgIGRheXMucHVzaChkYXkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvdGFsRGF5c1Zpc2libGVJbldlZWs6IG51bWJlciA9IERBWVNfSU5fV0VFSyAtIGV4Y2x1ZGVkLmxlbmd0aDtcbiAgY29uc3Qgcm93czogbnVtYmVyID0gTWF0aC5mbG9vcihkYXlzLmxlbmd0aCAvIHRvdGFsRGF5c1Zpc2libGVJbldlZWspO1xuICBjb25zdCByb3dPZmZzZXRzOiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgcm93T2Zmc2V0cy5wdXNoKGkgKiB0b3RhbERheXNWaXNpYmxlSW5XZWVrKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcm93T2Zmc2V0cyxcbiAgICB0b3RhbERheXNWaXNpYmxlSW5XZWVrLFxuICAgIGRheXMsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlWaWV3KHsgZXZlbnRzID0gW10sIHZpZXdEYXRlLCBob3VyU2VnbWVudHMsIGRheVN0YXJ0LCBkYXlFbmQsIGV2ZW50V2lkdGgsIHNlZ21lbnRIZWlnaHQgfTogR2V0RGF5Vmlld0FyZ3MpOiBEYXlWaWV3IHtcbiAgaWYgKCFldmVudHMpIHtcbiAgICBldmVudHMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0T2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mRGF5KHZpZXdEYXRlKSwgZGF5U3RhcnQuaG91ciksIGRheVN0YXJ0Lm1pbnV0ZSk7XG4gIGNvbnN0IGVuZE9mVmlldzogRGF0ZSA9IGRhdGVGbnMuc2V0TWludXRlcyhcbiAgICBkYXRlRm5zLnNldEhvdXJzKGRhdGVGbnMuc3RhcnRPZk1pbnV0ZShkYXRlRm5zLmVuZE9mRGF5KHZpZXdEYXRlKSksIGRheUVuZC5ob3VyKSxcbiAgICBkYXlFbmQubWludXRlLFxuICApO1xuICBjb25zdCBwcmV2aW91c0RheUV2ZW50czogRGF5Vmlld0V2ZW50W10gPSBbXTtcblxuICBjb25zdCBkYXlWaWV3RXZlbnRzOiBEYXlWaWV3RXZlbnRbXSA9IGdldEV2ZW50c0luVGltZVJhbmdlKFxuICAgIGdldEV2ZW50c0luUGVyaW9kKHtcbiAgICAgIGV2ZW50czogZXZlbnRzLmZpbHRlcigoZXZlbnQ6IENhbGVuZGFyRXZlbnQpID0+ICFldmVudC5hbGxEYXkpLFxuICAgICAgcGVyaW9kU3RhcnQ6IHN0YXJ0T2ZWaWV3LFxuICAgICAgcGVyaW9kRW5kOiBlbmRPZlZpZXcsXG4gICAgfSksXG4gICAgZGF5U3RhcnQsXG4gICAgZGF5RW5kLFxuICApXG4gICAgLnNvcnQoKGV2ZW50QTogQ2FsZW5kYXJFdmVudCwgZXZlbnRCOiBDYWxlbmRhckV2ZW50KSA9PiB7XG4gICAgICByZXR1cm4gZXZlbnRBLnN0YXJ0LnZhbHVlT2YoKSAtIGV2ZW50Qi5zdGFydC52YWx1ZU9mKCk7XG4gICAgfSlcbiAgICAubWFwKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnRTdGFydDogRGF0ZSA9IGV2ZW50LnN0YXJ0O1xuICAgICAgY29uc3QgZXZlbnRFbmQ6IERhdGUgPSBldmVudC5lbmQgfHwgZXZlbnRTdGFydDtcbiAgICAgIGNvbnN0IHN0YXJ0c0JlZm9yZURheTogYm9vbGVhbiA9IGV2ZW50U3RhcnQgPCBzdGFydE9mVmlldztcbiAgICAgIGNvbnN0IGVuZHNBZnRlckRheTogYm9vbGVhbiA9IGV2ZW50RW5kID4gZW5kT2ZWaWV3O1xuICAgICAgY29uc3QgaG91ckhlaWdodE1vZGlmaWVyOiBudW1iZXIgPSAoaG91clNlZ21lbnRzICogc2VnbWVudEhlaWdodCkgLyBNSU5VVEVTX0lOX0hPVVI7XG5cbiAgICAgIGxldCB0b3A6IG51bWJlciA9IDA7XG5cbiAgICAgIGlmIChldmVudFN0YXJ0ID4gc3RhcnRPZlZpZXcpIHtcbiAgICAgICAgdG9wICs9IGRhdGVGbnMuZGlmZmVyZW5jZUluTWludXRlcyhldmVudFN0YXJ0LCBzdGFydE9mVmlldyk7XG4gICAgICB9XG5cbiAgICAgIHRvcCAqPSBob3VySGVpZ2h0TW9kaWZpZXI7XG5cbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZTogRGF0ZSA9IHN0YXJ0c0JlZm9yZURheSA/IHN0YXJ0T2ZWaWV3IDogZXZlbnRTdGFydDtcbiAgICAgIGNvbnN0IGVuZERhdGU6IERhdGUgPSBlbmRzQWZ0ZXJEYXkgPyBlbmRPZlZpZXcgOiBldmVudEVuZDtcblxuICAgICAgbGV0IGhlaWdodDogbnVtYmVyID0gZGF0ZUZucy5kaWZmZXJlbmNlSW5NaW51dGVzKGVuZERhdGUsIHN0YXJ0RGF0ZSk7XG5cbiAgICAgIGlmICghZXZlbnQuZW5kKSB7XG4gICAgICAgIGhlaWdodCA9IHNlZ21lbnRIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWlnaHQgKj0gaG91ckhlaWdodE1vZGlmaWVyO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBib3R0b206IG51bWJlciA9IHRvcCArIGhlaWdodDtcblxuICAgICAgY29uc3Qgb3ZlcmxhcHBpbmdQcmV2aW91c0V2ZW50czogRGF5Vmlld0V2ZW50W10gPSBwcmV2aW91c0RheUV2ZW50cy5maWx0ZXIoKHByZXZpb3VzRXZlbnQ6IERheVZpZXdFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91c0V2ZW50VG9wOiBudW1iZXIgPSBwcmV2aW91c0V2ZW50LnRvcDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNFdmVudEJvdHRvbTogbnVtYmVyID0gcHJldmlvdXNFdmVudC50b3AgKyBwcmV2aW91c0V2ZW50LmhlaWdodDtcblxuICAgICAgICBpZiAodG9wIDwgcHJldmlvdXNFdmVudEJvdHRvbSAmJiBwcmV2aW91c0V2ZW50Qm90dG9tIDwgYm90dG9tKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNFdmVudFRvcCA8PSB0b3AgJiYgYm90dG9tIDw9IHByZXZpb3VzRXZlbnRCb3R0b20pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGVmdDogbnVtYmVyID0gMDtcblxuICAgICAgd2hpbGUgKG92ZXJsYXBwaW5nUHJldmlvdXNFdmVudHMuc29tZSgocHJldmlvdXNFdmVudCkgPT4gcHJldmlvdXNFdmVudC5sZWZ0ID09PSBsZWZ0KSkge1xuICAgICAgICBsZWZ0ICs9IGV2ZW50V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRheUV2ZW50OiBEYXlWaWV3RXZlbnQgPSB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoOiBldmVudFdpZHRoLFxuICAgICAgICB0b3AsXG4gICAgICAgIGxlZnQsXG4gICAgICAgIHN0YXJ0c0JlZm9yZURheSxcbiAgICAgICAgZW5kc0FmdGVyRGF5LFxuICAgICAgfTtcblxuICAgICAgaWYgKGhlaWdodCA+IDApIHtcbiAgICAgICAgcHJldmlvdXNEYXlFdmVudHMucHVzaChkYXlFdmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXlFdmVudDtcbiAgICB9KVxuICAgIC5maWx0ZXIoKGRheUV2ZW50OiBEYXlWaWV3RXZlbnQpID0+IGRheUV2ZW50LmhlaWdodCA+IDApO1xuXG4gIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBNYXRoLm1heCguLi5kYXlWaWV3RXZlbnRzLm1hcCgoZXZlbnQ6IERheVZpZXdFdmVudCkgPT4gZXZlbnQubGVmdCArIGV2ZW50LndpZHRoKSk7XG4gIGNvbnN0IGFsbERheUV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gZ2V0RXZlbnRzSW5QZXJpb2Qoe1xuICAgIGV2ZW50czogZXZlbnRzLmZpbHRlcigoZXZlbnQ6IENhbGVuZGFyRXZlbnQpID0+IGV2ZW50LmFsbERheSksXG4gICAgcGVyaW9kU3RhcnQ6IGRhdGVGbnMuc3RhcnRPZkRheShzdGFydE9mVmlldyksXG4gICAgcGVyaW9kRW5kOiBkYXRlRm5zLmVuZE9mRGF5KGVuZE9mVmlldyksXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZXZlbnRzOiBkYXlWaWV3RXZlbnRzLFxuICAgIHdpZHRoLFxuICAgIGFsbERheUV2ZW50cyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheVZpZXdIb3VyR3JpZCh7XG4gIHZpZXdEYXRlLFxuICBob3VyU2VnbWVudHMsXG4gIGRheVN0YXJ0LFxuICBkYXlFbmQsXG59OiB7XG4gIHZpZXdEYXRlOiBEYXRlO1xuICBob3VyU2VnbWVudHM6IG51bWJlcjtcbiAgZGF5U3RhcnQ6IGFueTtcbiAgZGF5RW5kOiBhbnk7XG59KTogRGF5Vmlld0hvdXJbXSB7XG4gIGNvbnN0IGhvdXJzOiBEYXlWaWV3SG91cltdID0gW107XG5cbiAgY29uc3Qgc3RhcnRPZlZpZXc6IERhdGUgPSBkYXRlRm5zLnNldE1pbnV0ZXMoZGF0ZUZucy5zZXRIb3VycyhkYXRlRm5zLnN0YXJ0T2ZEYXkodmlld0RhdGUpLCBkYXlTdGFydC5ob3VyKSwgZGF5U3RhcnQubWludXRlKTtcbiAgY29uc3QgZW5kT2ZWaWV3OiBEYXRlID0gZGF0ZUZucy5zZXRNaW51dGVzKFxuICAgIGRhdGVGbnMuc2V0SG91cnMoZGF0ZUZucy5zdGFydE9mTWludXRlKGRhdGVGbnMuZW5kT2ZEYXkodmlld0RhdGUpKSwgZGF5RW5kLmhvdXIpLFxuICAgIGRheUVuZC5taW51dGUsXG4gICk7XG4gIGNvbnN0IHNlZ21lbnREdXJhdGlvbjogbnVtYmVyID0gTUlOVVRFU19JTl9IT1VSIC8gaG91clNlZ21lbnRzO1xuICBjb25zdCBzdGFydE9mVmlld0RheTogRGF0ZSA9IGRhdGVGbnMuc3RhcnRPZkRheSh2aWV3RGF0ZSk7XG5cbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEhPVVJTX0lOX0RBWTsgaSsrKSB7XG4gICAgY29uc3Qgc2VnbWVudHM6IERheVZpZXdIb3VyU2VnbWVudFtdID0gW107XG4gICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGhvdXJTZWdtZW50czsgaisrKSB7XG4gICAgICBjb25zdCBkYXRlOiBEYXRlID0gZGF0ZUZucy5hZGRNaW51dGVzKGRhdGVGbnMuYWRkSG91cnMoc3RhcnRPZlZpZXdEYXksIGkpLCBqICogc2VnbWVudER1cmF0aW9uKTtcbiAgICAgIGlmIChkYXRlID49IHN0YXJ0T2ZWaWV3ICYmIGRhdGUgPCBlbmRPZlZpZXcpIHtcbiAgICAgICAgc2VnbWVudHMucHVzaCh7XG4gICAgICAgICAgZGF0ZSxcbiAgICAgICAgICBpc1N0YXJ0OiBqID09PSAwLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGhvdXJzLnB1c2goeyBzZWdtZW50cyB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaG91cnM7XG59XG4iXX0=