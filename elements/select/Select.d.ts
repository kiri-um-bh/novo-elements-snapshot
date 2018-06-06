import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
import { NovoLabelService } from '../../services/novo-label-service';
export declare class NovoSelectElement implements OnInit, OnChanges {
    element: ElementRef;
    labels: NovoLabelService;
    ref: ChangeDetectorRef;
    name: string;
    options: Array<any>;
    placeholder: string;
    readonly: boolean;
    headerConfig: any;
    onSelect: EventEmitter<any>;
    selectedIndex: number;
    empty: boolean;
    header: any;
    createdItem: any;
    selected: any;
    model: any;
    onModelChange: Function;
    onModelTouched: Function;
    filterTerm: string;
    filterTermTimeout: any;
    filteredOptions: any;
    /** Element for the panel containing the autocomplete options. */
    overlay: NovoOverlayTemplateComponent;
    constructor(element: ElementRef, labels: NovoLabelService, ref: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes?: SimpleChanges): void;
    /** BEGIN: Convenient Panel Methods. */
    openPanel(): void;
    closePanel(): void;
    readonly panelOpen: boolean;
    /** END: Convenient Panel Methods. */
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    setValueAndClose(event: any | null): void;
    select(option: any, i: any, fireEvents?: boolean): void;
    clear(): void;
    onKeyDown(event: KeyboardEvent): void;
    scrollToSelected(): void;
    scrollToIndex(index: number): void;
    toggleHeader(event: any, forceValue: any): void;
    highlight(match: any, query: any): any;
    escapeRegexp(queryToEscape: any): any;
    saveHeader(): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
}
