import { EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NovoLabelService } from '../../services/novo-label-service';
export declare type TabbedGroupPickerSchema = {
    typeName: string;
    typeLabel: string;
    valueField: string;
    labelField: string;
} & ({
    childTypeName?: string;
} | {
    parentTypeName?: string;
});
export declare type TabbedGroupPickerQuickSelect = {
    typeName: string;
    label: string;
    active?: boolean;
    all?: boolean;
    values?: any[];
};
export declare type SelectableItem = {
    selected?: boolean;
};
export declare type TabbedGroupPickerData = {
    [key: string]: SelectableItem[];
};
export declare class NovoTabbedGroupPickerElement implements OnInit {
    labelService: NovoLabelService;
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
    data: TabbedGroupPickerData;
    displayData: TabbedGroupPickerData;
    selectionChange: EventEmitter<any>;
    activeSchema: TabbedGroupPickerSchema;
    filterText: BehaviorSubject<string>;
    searchLabel: string;
    loading: boolean;
    constructor(labelService: NovoLabelService);
    ngOnInit(): void;
    setActiveSchema(newActiveSchema: TabbedGroupPickerSchema): void;
    validateData(): void;
    validateQuickSelectConfig(): void;
    onDataListItemClicked(activeSchema: TabbedGroupPickerSchema, item: SelectableItem): void;
    onItemToggled(schema: TabbedGroupPickerSchema): void;
    onQuickSelectListItemClicked(quickSelect: TabbedGroupPickerQuickSelect): void;
    onQuickSelectToggled(quickSelect: TabbedGroupPickerQuickSelect): void;
    updateQuickSelectCheckboxes(activeSchema: TabbedGroupPickerSchema): void;
    emitSelectedValues(): void;
    getSelectedValues: () => {};
    onClearFilter(event: any): void;
    onFilter(event: {
        target: {
            value: string;
        };
    }): void;
    filter: (searchTerm: string) => {};
}
