import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NovoChipElement {
    set type(type: string);
    disabled: boolean;
    select: EventEmitter<any>;
    remove: EventEmitter<any>;
    deselect: EventEmitter<any>;
    entity: string;
    _type: string;
    onRemove(e: any): boolean;
    onSelect(e: any): boolean;
    onDeselect(e: any): boolean;
    static ɵfac: i0.ɵɵFactoryDef<NovoChipElement, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoChipElement, "chip,novo-chip", never, { "type": "type"; "disabled": "disabled"; }, { "select": "select"; "remove": "remove"; "deselect": "deselect"; }, never, ["*"]>;
}
