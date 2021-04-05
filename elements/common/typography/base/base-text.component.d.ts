import { TypographySize, TypographyWeight } from '../text.types';
import * as i0 from "@angular/core";
export declare class NovoBaseTextElement {
    size: TypographySize;
    weight: TypographyWeight;
    color: string;
    get hb_isSizeSmall(): boolean;
    get hb_isSizeLarge(): boolean;
    get hb_isSizeDefault(): boolean;
    get hb_isWeightThin(): boolean;
    get hb_isWeightMedium(): boolean;
    get hb_isWeightBold(): boolean;
    get hb_isWeightDefault(): boolean;
    get hb_color(): string;
    disabled: boolean;
    muted: boolean;
    error: boolean;
    marginBefore: boolean;
    marginAfter: boolean;
    static ɵfac: i0.ɵɵFactoryDef<NovoBaseTextElement, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NovoBaseTextElement, never, never, { "size": "size"; "weight": "weight"; "color": "color"; "disabled": "disabled"; "muted": "muted"; "error": "error"; "marginBefore": "marginBefore"; "marginAfter": "marginAfter"; }, {}, never>;
}
