import { Directive, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkAccordion } from '@angular/cdk/accordion';
import * as i0 from "@angular/core";
/**
 * Directive for a Material Design Accordion.
 */
export class NovoAccordion extends CdkAccordion {
    constructor() {
        super(...arguments);
        this._hideToggle = false;
        /**
         * The display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the reset of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        this.displayMode = 'default';
    }
    /** Whether the expansion indicator should be hidden. */
    get hideToggle() {
        return this._hideToggle;
    }
    set hideToggle(show) {
        this._hideToggle = coerceBooleanProperty(show);
    }
}
NovoAccordion.ɵfac = function NovoAccordion_Factory(t) { return ɵNovoAccordion_BaseFactory(t || NovoAccordion); };
NovoAccordion.ɵdir = i0.ɵɵdefineDirective({ type: NovoAccordion, selectors: [["novo-accordion"]], hostAttrs: [1, "novo-accordion"], inputs: { hideToggle: "hideToggle", displayMode: "displayMode" }, exportAs: ["novoAccordion"], features: [i0.ɵɵInheritDefinitionFeature] });
const ɵNovoAccordion_BaseFactory = i0.ɵɵgetInheritedFactory(NovoAccordion);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoAccordion, [{
        type: Directive,
        args: [{
                selector: 'novo-accordion',
                exportAs: 'novoAccordion',
                host: {
                    class: 'novo-accordion',
                },
            }]
    }], null, { hideToggle: [{
            type: Input
        }], displayMode: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2V4cGFuc2lvbi9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUt0RDs7R0FFRztBQVFILE1BQU0sT0FBTyxhQUFjLFNBQVEsWUFBWTtJQVAvQzs7UUFnQlUsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFckM7Ozs7Ozs7V0FPRztRQUVILGdCQUFXLEdBQTZCLFNBQVMsQ0FBQztLQUNuRDtJQXBCQyx3REFBd0Q7SUFDeEQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxJQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0dBUlUsYUFBYTtrREFBYixhQUFhOzREQUFiLGFBQWE7a0RBQWIsYUFBYTtjQVB6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsZ0JBQWdCO2lCQUN4QjthQUNGOztrQkFHRSxLQUFLOztrQkFpQkwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBDZGtBY2NvcmRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYWNjb3JkaW9uJztcblxuLyoqIE5vdm9BY2NvcmRpb24ncyBkaXNwbGF5IG1vZGVzLiAqL1xuZXhwb3J0IHR5cGUgTm92b0FjY29yZGlvbkRpc3BsYXlNb2RlID0gJ2RlZmF1bHQnIHwgJ2ZsYXQnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSBmb3IgYSBNYXRlcmlhbCBEZXNpZ24gQWNjb3JkaW9uLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjY29yZGlvbicsXG4gIGV4cG9ydEFzOiAnbm92b0FjY29yZGlvbicsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tYWNjb3JkaW9uJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjY29yZGlvbiBleHRlbmRzIENka0FjY29yZGlvbiB7XG4gIC8qKiBXaGV0aGVyIHRoZSBleHBhbnNpb24gaW5kaWNhdG9yIHNob3VsZCBiZSBoaWRkZW4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBoaWRlVG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRlVG9nZ2xlO1xuICB9XG4gIHNldCBoaWRlVG9nZ2xlKHNob3c6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlVG9nZ2xlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNob3cpO1xuICB9XG4gIHByaXZhdGUgX2hpZGVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGRpc3BsYXkgbW9kZSB1c2VkIGZvciBhbGwgZXhwYW5zaW9uIHBhbmVscyBpbiB0aGUgYWNjb3JkaW9uLiBDdXJyZW50bHkgdHdvIGRpc3BsYXlcbiAgICogbW9kZXMgZXhpc3Q6XG4gICAqICBkZWZhdWx0IC0gYSBndXR0ZXItbGlrZSBzcGFjaW5nIGlzIHBsYWNlZCBhcm91bmQgYW55IGV4cGFuZGVkIHBhbmVsLCBwbGFjaW5nIHRoZSBleHBhbmRlZFxuICAgKiAgICAgcGFuZWwgYXQgYSBkaWZmZXJlbnQgZWxldmF0aW9uIGZyb20gdGhlIHJlc2V0IG9mIHRoZSBhY2NvcmRpb24uXG4gICAqICBmbGF0IC0gbm8gc3BhY2luZyBpcyBwbGFjZWQgYXJvdW5kIGV4cGFuZGVkIHBhbmVscywgc2hvd2luZyBhbGwgcGFuZWxzIGF0IHRoZSBzYW1lXG4gICAqICAgICBlbGV2YXRpb24uXG4gICAqL1xuICBASW5wdXQoKVxuICBkaXNwbGF5TW9kZTogTm92b0FjY29yZGlvbkRpc3BsYXlNb2RlID0gJ2RlZmF1bHQnO1xufVxuIl19