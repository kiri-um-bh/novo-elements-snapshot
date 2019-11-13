import { TemplateRef, AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NovoFormGroup } from './NovoFormGroup';
import { BaseControl } from './controls/BaseControl';
import { FormUtils } from './../../utils/form-utils/FormUtils';
import { NovoLabelService } from '../../services/novo-label-service';
export interface NovoControlGroupAddConfig {
    label: string;
}
export interface NovoControlGroupRowConfig {
    edit: boolean;
    remove: boolean;
}
export declare class NovoControlGroup implements AfterContentInit, OnChanges {
    private formUtils;
    private fb;
    private ref;
    private labels;
    vertical: boolean;
    private _vertical;
    add: NovoControlGroupAddConfig;
    remove: boolean;
    private _remove;
    edit: boolean;
    private _edit;
    collapsible: boolean;
    private _collapsible;
    form: NovoFormGroup;
    controls: BaseControl[];
    key: string;
    label: string;
    description: string;
    emptyMessage: string;
    icon: string;
    private _icon;
    initialValue: {}[];
    canEdit: Function;
    canRemove: Function;
    rowTemplate: TemplateRef<any>;
    associatedKeyName: string;
    associatedKeyValue: string | number | boolean;
    onRemove: EventEmitter<any>;
    onEdit: EventEmitter<any>;
    onAdd: EventEmitter<any>;
    change: EventEmitter<any>;
    controlLabels: {
        value: string;
        width: number;
        required: boolean;
        key: string;
    }[];
    toggled: boolean;
    disabledArray: {
        edit: boolean;
        remove: boolean;
    }[];
    currentIndex: number;
    constructor(formUtils: FormUtils, fb: FormBuilder, ref: ChangeDetectorRef, labels: NovoLabelService);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(change: any): void;
    resetAddRemove(): void;
    addNewControl(value?: {}): void;
    buildControl(value?: {}): NovoFormGroup;
    removeControl(index: number, emitEvent?: boolean): void;
    editControl(index: number): void;
    toggle(event: MouseEvent): void;
    private clearControls;
    private checkCanEdit;
    private checkCanRemove;
    private getNewControls;
}
