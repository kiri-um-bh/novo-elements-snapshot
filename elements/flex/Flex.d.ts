import * as i0 from "@angular/core";
export declare class NovoFlexElement {
    get display(): string;
    direction: string;
    align: string;
    justify: string;
    wrap: string;
    gap: string;
    static ɵfac: i0.ɵɵFactoryDef<NovoFlexElement, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoFlexElement, "novo-flex,novo-row", never, { "direction": "direction"; "align": "align"; "justify": "justify"; "wrap": "wrap"; "gap": "gap"; }, {}, never, ["*"]>;
}
export declare class NovoStackElement extends NovoFlexElement {
    direction: string;
    align: string;
    static ɵfac: i0.ɵɵFactoryDef<NovoStackElement, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoStackElement, "novo-stack,novo-column", never, { "direction": "direction"; "align": "align"; }, {}, never, ["*"]>;
}
