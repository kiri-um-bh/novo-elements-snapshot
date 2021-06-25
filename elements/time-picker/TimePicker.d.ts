import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class NovoTimePickerElement implements ControlValueAccessor, OnInit, OnChanges {
    military: boolean;
    analog: boolean;
    inline: boolean;
    onSelect: EventEmitter<any>;
    hours: number;
    minutes: number;
    value: any;
    meridian: string;
    inBetween: boolean;
    hoursClass: string;
    activeHour: any;
    minutesClass: string;
    activeMinute: any;
    increments: string[];
    selected: string;
    MERIDIANS: Array<string>;
    MINUTES: Array<string>;
    HOURS: Array<string>;
    model: any;
    _onChange: Function;
    _onTouched: Function;
    flatten(arr: any): any[];
    ngOnInit(): void;
    ngOnChanges(changes?: SimpleChanges): void;
    init(value: any, dispatch: any): void;
    checkBetween(value: any): void;
    setValue(event: any, value: any): void;
    setHours(event: any, hours: any, dispatch: any): void;
    setMinutes(event: any, minutes: any, dispatch: any): void;
    setPeriod(event: any, period: any, dispatch: any): void;
    dispatchChange(): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NovoTimePickerElement, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NovoTimePickerElement, "novo-time-picker", never, { "military": "military"; "analog": "analog"; "inline": "inline"; }, { "onSelect": "onSelect"; }, never, never>;
}

//# sourceMappingURL=TimePicker.d.ts.map