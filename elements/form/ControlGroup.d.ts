import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NovoFormGroup } from './NovoFormGroup';
import { BaseControl } from './controls/BaseControl';
import { FormUtils } from '../../utils/form-utils/FormUtils';
export interface NovoControlGroupAddConfig {
    label: string;
}
export interface NovoControlGroupRowConfig {
    edit: boolean;
    remove: boolean;
}
export declare class NovoControlGroup implements AfterContentInit, OnChanges, OnDestroy {
    private formUtils;
    private fb;
    private ref;
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
    columnLabelTemplate: TemplateRef<any>;
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
    constructor(formUtils: FormUtils, fb: FormBuilder, ref: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onChange(): void;
    resetAddRemove(): void;
    addNewControl(value?: {}): void;
    removeControl(index: number, emitEvent?: boolean): void;
    editControl(index: number): void;
    toggle(event: MouseEvent): void;
    private buildNestedFormGroup;
    private clearControls;
    private checkCanEdit;
    private checkCanRemove;
    private getNewControls;
    private assignIndexes;
    private onFieldInteractionEvent;
}
