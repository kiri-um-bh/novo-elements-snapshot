import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NovoControlGroupAddConfig } from './ControlGroup';
import { NovoFormGroup } from './NovoFormGroup';
import { FormUtils } from '../../utils/form-utils/FormUtils';
export declare class NovoEmbeddedFormGroupElement implements OnInit, OnChanges {
    private formUtils;
    private ref;
    private fb;
    onCanRemove: Function;
    add: NovoControlGroupAddConfig;
    remove: boolean;
    private _remove;
    edit: boolean;
    private _edit;
    canEdit: Function;
    canRemove: Function;
    control: any;
    parentForm: any;
    controls: any[];
    onRemove: EventEmitter<{
        value: any;
        index: any;
    }>;
    onEdit: EventEmitter<{
        value: any;
        index: any;
    }>;
    onAdd: EventEmitter<any>;
    change: EventEmitter<any>;
    key: string;
    form: NovoFormGroup;
    initialValue: any;
    currentIndex: number;
    disabledArray: {
        edit: boolean;
        remove: boolean;
    }[];
    controlLabels: {
        value: string;
        width: number;
        required: boolean;
        key: string;
    }[];
    constructor(formUtils: FormUtils, ref: ChangeDetectorRef, fb: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(): void;
    onChange(event: any): void;
    onRemoveEvent(event: any): void;
    addNewControl(value?: {}): void;
    removeControl(index: number, emitEvent?: boolean): void;
    editControl(index: number): void;
    resetAddRemove(): void;
    private checkCanEdit;
    private checkCanRemove;
    private getNewControls;
    buildControl(value?: {}): NovoFormGroup;
}
