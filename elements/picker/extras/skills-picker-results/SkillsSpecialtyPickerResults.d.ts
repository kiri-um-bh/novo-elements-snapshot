import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { NovoLabelService } from '../../../../services/novo-label-service';
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import * as i0 from "@angular/core";
export declare class SkillsSpecialtyPickerResults extends BasePickerResults {
    element: ElementRef;
    labels: NovoLabelService;
    active: boolean;
    limitedTo: boolean;
    limit: number;
    total: number;
    constructor(element: ElementRef, labels: NovoLabelService, ref: ChangeDetectorRef);
    getListElement(): any;
    /**
     * @name structureArray
     * @param collection - the data once getData resolves it
     *
     * @description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     */
    structureArray(collection: any): any;
    static ɵfac: i0.ɵɵFactoryDef<SkillsSpecialtyPickerResults, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SkillsSpecialtyPickerResults, "skill-specialty-picker-results", never, {}, {}, never, never>;
}
