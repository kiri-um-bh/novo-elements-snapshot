import { EventEmitter, InjectionToken } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const NOVO_INPUT_FORMAT: InjectionToken<NovoInputFormat<any>>;
export interface NovoInputFormat<T = any> extends ControlValueAccessor {
    valueChange: EventEmitter<any>;
    formatValue(value: T): string;
}
