import { EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NovoLabelService } from '../../services/novo-label-service';
export declare type TabbedGroupPickerSchema = {
    typeName: string;
    typeLabel: string;
    valueField: string;
    labelField: string;
} & (ParentSchema | ChildSchema);
export declare type ParentSchema = {
    childTypeName: string;
    data: Array<ParentOption>;
};
declare type ParentOption = {
    selected?: boolean;
    indeterminate?: boolean;
    children: Array<{
        selected?: boolean;
    }>;
} & {
    [key: string]: any;
};
export declare type ChildSchema = {
    data: Array<{
        selected?: boolean;
    } & {
        [key: string]: any;
    }>;
};
export declare type TabbedGroupPickerQuickSelect = {
    label: string;
    selected?: boolean;
    childTypeName?: string;
    children?: (({
        selected?: boolean;
    } & object) | (number))[];
    all?: boolean;
};
export declare class NovoTabbedGroupPickerElement implements OnInit {
    labelService: NovoLabelService;
    private ref;
    buttonConfig: {
        theme: string;
        side: string;
        icon: string;
        label: string;
    };
    schemata: TabbedGroupPickerSchema[];
    quickSelectConfig: {
        label: string;
        items: TabbedGroupPickerQuickSelect[];
    };
    displaySchemata: TabbedGroupPickerSchema[];
    selectionChange: EventEmitter<any>;
    displaySchemaIndex: number;
    displaySchema: TabbedGroupPickerSchema;
    filterText: BehaviorSubject<string>;
    searchLabel: string;
    loading: boolean;
    constructor(labelService: NovoLabelService, ref: ChangeDetectorRef);
    ngOnInit(): void;
    setupDisplayData(): void;
    createChildrenReferences(): void;
    makeCompareFunction<T>(key: string): (a: T | {
        [key: string]: T;
    }, b: {
        [key: string]: T;
    }) => 1 | -1 | 0 | undefined;
    replaceChildrenWithReferences(parent: {
        children: any[];
    }, sortedData: ChildSchema['data'], compareFunction: (a: any, b: any) => 1 | -1 | 0, warnFunction: (child: any) => void): void;
    makeWarningFunction(parentLabel: string, childLabel: string, childValueField: any): (child: any) => void;
    onItemToggled(item: {
        selected?: boolean;
        children?: Array<{
            selected?: boolean;
        }>;
    }): void;
    updateChildren(parentIsSelected: boolean, children: {
        selected?: boolean;
    }[]): void;
    updateParents(): void;
    getSelectedState: (childArray: {
        selected?: boolean;
        indeterminate?: boolean;
    }[]) => "selected" | "indeterminate";
    emitSelectedValues(): void;
    onClearFilter(event: any): void;
    onFilter(event: {
        target: {
            value: string;
        };
    }): void;
    filter: (searchTerm: string) => void;
}
export {};
