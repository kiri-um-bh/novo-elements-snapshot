import { AfterContentInit, QueryList } from '@angular/core';
import { NovoFieldElement } from './field';
import * as i0 from "@angular/core";
export declare class NovoFieldsElement implements AfterContentInit {
    _fields: QueryList<NovoFieldElement>;
    _appearance: 'horizontal' | 'vertical';
    get appearance(): any;
    set appearance(value: any);
    fullWidth: boolean;
    ngAfterContentInit(): any;
    private _updateFieldAppearance;
    static ɵfac: i0.ɵɵFactoryDef<NovoFieldsElement, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoFieldsElement, "novo-fields", never, { "appearance": "appearance"; "fullWidth": "fullWidth"; }, {}, ["_fields"], ["*"]>;
}
