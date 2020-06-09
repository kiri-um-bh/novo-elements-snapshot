import { TemplateRef, AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NovoFormGroup } from './NovoFormGroup';
import { BaseControl } from './controls/BaseControl';
import { FormUtils } from './../../utils/form-utils/FormUtils';
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
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
    set vertical(v: boolean);
    get vertical(): boolean;
    private _vertical;
    add: NovoControlGroupAddConfig;
    set remove(v: boolean);
    get remove(): boolean;
    private _remove;
    set edit(v: boolean);
    get edit(): boolean;
    private _edit;
    set collapsible(v: boolean);
    get collapsible(): boolean;
    private _collapsible;
    form: NovoFormGroup;
    controls: BaseControl[];
    key: string;
    label: string;
    description: string;
    emptyMessage: string;
    set icon(v: string);
    get icon(): string;
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
    static ɵfac: i0.ɵɵFactoryDef<NovoControlGroup, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoControlGroup, "novo-control-group", never, { "vertical": "vertical"; "add": "add"; "remove": "remove"; "edit": "edit"; "collapsible": "collapsible"; "form": "form"; "controls": "controls"; "key": "key"; "label": "label"; "description": "description"; "emptyMessage": "emptyMessage"; "icon": "icon"; "initialValue": "initialValue"; "canEdit": "canEdit"; "canRemove": "canRemove"; "rowTemplate": "rowTemplate"; "columnLabelTemplate": "columnLabelTemplate"; }, { "onRemove": "onRemove"; "onEdit": "onEdit"; "onAdd": "onAdd"; "change": "change"; }, never, never>;
}
