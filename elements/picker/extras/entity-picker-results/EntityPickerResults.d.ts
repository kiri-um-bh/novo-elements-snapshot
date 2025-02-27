import { ElementRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
export declare class EntityPickerResult {
    labels: NovoLabelService;
    match: any;
    term: any;
    constructor(labels: NovoLabelService);
    /**
     * @description This function captures the whole query string and replace it with the string that will be used to
     * match.
     */
    escapeRegexp(queryToEscape: any): any;
    /**
     * @description This function should return a <strong>-tag wrapped HTML string.
     */
    highlight(match: any, query: any): any;
    getIconForResult(result?: any): string;
    renderTimestamp(date?: any): string;
    renderTimeNoOffset(dateStr?: string): string;
    getNameForResult(result?: any): string;
}
export declare class EntityPickerResults extends BasePickerResults {
    labels: NovoLabelService;
    select: EventEmitter<any>;
    constructor(element: ElementRef, labels: NovoLabelService, ref: ChangeDetectorRef);
    get hasNonErrorMessage(): boolean;
    getListElement(): any;
    selectMatch(event?: any, item?: any): boolean;
}
