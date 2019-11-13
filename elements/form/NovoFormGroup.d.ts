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
    associatedKey?: {
        name: string;
        value: string | number | boolean;
    };
    value: any;
    enableAllControls(): void;
    disableAllControls(): void;
}
