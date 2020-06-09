import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { IFieldInteractionEvent } from './FormInterfaces';
export declare class NovoFormGroup extends FormGroup {
    fieldInteractionEvents: EventEmitter<IFieldInteractionEvent>;
    layout: string;
    edit: boolean;
    currentEntity: string;
    currentEntityId: string;
    associations: object;
    _value: any;
    get value(): any;
    set value(v: any);
    enableAllControls(): void;
    disableAllControls(): void;
}
