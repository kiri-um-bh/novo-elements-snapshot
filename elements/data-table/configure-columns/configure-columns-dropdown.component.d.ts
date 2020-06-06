import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { BasePickerResults } from '../../picker/extras/base-picker-results/BasePickerResults';
export declare class ConfigureColumnsDropdown extends BasePickerResults implements OnChanges {
    columns: any;
    displayedColumns: any;
    applyColumnConfig: EventEmitter<boolean>;
    constructor(element: ElementRef, ref: ChangeDetectorRef);
    ngOnChanges(): void;
    saveColumns(emit?: boolean): void;
    clearQuickSearch(): void;
    processSearch(): void;
}
