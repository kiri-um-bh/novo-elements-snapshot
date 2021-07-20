import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import * as i0 from "@angular/core";
/** Error state matcher that matches when a control is invalid and dirty. */
export declare class ShowOnDirtyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    static ɵfac: i0.ɵɵFactoryDef<ShowOnDirtyErrorStateMatcher, never>;
    static ɵprov: i0.ɵɵInjectableDef<ShowOnDirtyErrorStateMatcher>;
}
/** Provider that defines how form controls behave with regards to displaying error messages. */
export declare class ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    static ɵfac: i0.ɵɵFactoryDef<ErrorStateMatcher, never>;
    static ɵprov: i0.ɵɵInjectableDef<ErrorStateMatcher>;
}
