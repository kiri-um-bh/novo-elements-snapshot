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
    value: any;
    enableAllControls(overrides?: string[]): void;
    disableAllControls(): void;
}
