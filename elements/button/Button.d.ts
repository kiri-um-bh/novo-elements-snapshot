import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NovoButtonElement {
    element: ElementRef;
    /**
     * The text color of the button. Should be used for Icon buttons. see theme.
     */
    color: string;
    /**
     * The side of the button to display the icon.
     * @deprecated
     */
    side: string;
    /**
     * 	Sets the size of the button. One of: small, medium, large
     */
    size: string;
    /**
     * The base styling to apply to the button.
     */
    theme: string;
    /**
     * Conditionally show a spinner over the top of a button.
     */
    loading: boolean;
    /**
     * Optionally display `bullhorn-icon` with the button along with the text.
     * @deprecated
     */
    set icon(icon: string);
    get icon(): string;
    /**
     * Make the button non-interactive.
     */
    disabled: boolean;
    private _icon;
    constructor(element: ElementRef);
    static ɵfac: i0.ɵɵFactoryDef<NovoButtonElement, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoButtonElement, "button[theme],novo-button", never, { "color": "color"; "side": "side"; "size": "size"; "theme": "theme"; "loading": "loading"; "icon": "icon"; "disabled": "disabled"; }, {}, never, ["*"]>;
}
