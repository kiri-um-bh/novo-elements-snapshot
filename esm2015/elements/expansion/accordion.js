import { CdkAccordion } from '@angular/cdk/accordion';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, Input } from '@angular/core';
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
const ɵNovoAccordion_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoAccordion);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZXhwYW5zaW9uL2FjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS2pEOztHQUVHO0FBUUgsTUFBTSxPQUFPLGFBQWMsU0FBUSxZQUFZO0lBUC9DOztRQWdCVSxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUVyQzs7Ozs7OztXQU9HO1FBRUgsZ0JBQVcsR0FBNkIsU0FBUyxDQUFDO0tBQ25EO0lBcEJDLHdEQUF3RDtJQUN4RCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLElBQWE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnR0FSVSxhQUFhO2tEQUFiLGFBQWE7MEVBQWIsYUFBYTtrREFBYixhQUFhO2NBUHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxnQkFBZ0I7aUJBQ3hCO2FBQ0Y7Z0JBSUssVUFBVTtrQkFEYixLQUFLO1lBa0JOLFdBQVc7a0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0FjY29yZGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIE5vdm9BY2NvcmRpb24ncyBkaXNwbGF5IG1vZGVzLiAqL1xuZXhwb3J0IHR5cGUgTm92b0FjY29yZGlvbkRpc3BsYXlNb2RlID0gJ2RlZmF1bHQnIHwgJ2ZsYXQnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSBmb3IgYSBNYXRlcmlhbCBEZXNpZ24gQWNjb3JkaW9uLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjY29yZGlvbicsXG4gIGV4cG9ydEFzOiAnbm92b0FjY29yZGlvbicsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tYWNjb3JkaW9uJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjY29yZGlvbiBleHRlbmRzIENka0FjY29yZGlvbiB7XG4gIC8qKiBXaGV0aGVyIHRoZSBleHBhbnNpb24gaW5kaWNhdG9yIHNob3VsZCBiZSBoaWRkZW4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBoaWRlVG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRlVG9nZ2xlO1xuICB9XG4gIHNldCBoaWRlVG9nZ2xlKHNob3c6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlVG9nZ2xlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNob3cpO1xuICB9XG4gIHByaXZhdGUgX2hpZGVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGRpc3BsYXkgbW9kZSB1c2VkIGZvciBhbGwgZXhwYW5zaW9uIHBhbmVscyBpbiB0aGUgYWNjb3JkaW9uLiBDdXJyZW50bHkgdHdvIGRpc3BsYXlcbiAgICogbW9kZXMgZXhpc3Q6XG4gICAqICBkZWZhdWx0IC0gYSBndXR0ZXItbGlrZSBzcGFjaW5nIGlzIHBsYWNlZCBhcm91bmQgYW55IGV4cGFuZGVkIHBhbmVsLCBwbGFjaW5nIHRoZSBleHBhbmRlZFxuICAgKiAgICAgcGFuZWwgYXQgYSBkaWZmZXJlbnQgZWxldmF0aW9uIGZyb20gdGhlIHJlc2V0IG9mIHRoZSBhY2NvcmRpb24uXG4gICAqICBmbGF0IC0gbm8gc3BhY2luZyBpcyBwbGFjZWQgYXJvdW5kIGV4cGFuZGVkIHBhbmVscywgc2hvd2luZyBhbGwgcGFuZWxzIGF0IHRoZSBzYW1lXG4gICAqICAgICBlbGV2YXRpb24uXG4gICAqL1xuICBASW5wdXQoKVxuICBkaXNwbGF5TW9kZTogTm92b0FjY29yZGlvbkRpc3BsYXlNb2RlID0gJ2RlZmF1bHQnO1xufVxuIl19