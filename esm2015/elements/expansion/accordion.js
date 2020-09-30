/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkAccordion } from '@angular/cdk/accordion';
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
    /**
     * Whether the expansion indicator should be hidden.
     * @return {?}
     */
    get hideToggle() {
        return this._hideToggle;
    }
    /**
     * @param {?} show
     * @return {?}
     */
    set hideToggle(show) {
        this._hideToggle = coerceBooleanProperty(show);
    }
}
NovoAccordion.decorators = [
    { type: Directive, args: [{
                selector: 'novo-accordion',
                exportAs: 'novoAccordion',
                host: {
                    class: 'novo-accordion',
                },
            },] }
];
NovoAccordion.propDecorators = {
    hideToggle: [{ type: Input }],
    displayMode: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoAccordion.prototype._hideToggle;
    /**
     * The display mode used for all expansion panels in the accordion. Currently two display
     * modes exist:
     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
     *     panel at a different elevation from the reset of the accordion.
     *  flat - no spacing is placed around expanded panels, showing all panels at the same
     *     elevation.
     * @type {?}
     */
    NovoAccordion.prototype.displayMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2V4cGFuc2lvbi9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQWV0RCxNQUFNLE9BQU8sYUFBYyxTQUFRLFlBQVk7SUFQL0M7O1FBZ0JVLGdCQUFXLEdBQVksS0FBSyxDQUFDOzs7Ozs7Ozs7UUFXckMsZ0JBQVcsR0FBNkIsU0FBUyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBbkJDLElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7OztJQUNELElBQUksVUFBVSxDQUFDLElBQWE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsZ0JBQWdCO2lCQUN4QjthQUNGOzs7eUJBR0UsS0FBSzswQkFpQkwsS0FBSzs7Ozs7OztJQVZOLG9DQUFxQzs7Ozs7Ozs7OztJQVVyQyxvQ0FDa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQ2RrQWNjb3JkaW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2FjY29yZGlvbic7XG5cbi8qKiBOb3ZvQWNjb3JkaW9uJ3MgZGlzcGxheSBtb2Rlcy4gKi9cbmV4cG9ydCB0eXBlIE5vdm9BY2NvcmRpb25EaXNwbGF5TW9kZSA9ICdkZWZhdWx0JyB8ICdmbGF0JztcblxuLyoqXG4gKiBEaXJlY3RpdmUgZm9yIGEgTWF0ZXJpYWwgRGVzaWduIEFjY29yZGlvbi5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1hY2NvcmRpb24nLFxuICBleHBvcnRBczogJ25vdm9BY2NvcmRpb24nLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWFjY29yZGlvbicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY2NvcmRpb24gZXh0ZW5kcyBDZGtBY2NvcmRpb24ge1xuICAvKiogV2hldGhlciB0aGUgZXhwYW5zaW9uIGluZGljYXRvciBzaG91bGQgYmUgaGlkZGVuLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaGlkZVRvZ2dsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZVRvZ2dsZTtcbiAgfVxuICBzZXQgaGlkZVRvZ2dsZShzaG93OiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZVRvZ2dsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzaG93KTtcbiAgfVxuICBwcml2YXRlIF9oaWRlVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXNwbGF5IG1vZGUgdXNlZCBmb3IgYWxsIGV4cGFuc2lvbiBwYW5lbHMgaW4gdGhlIGFjY29yZGlvbi4gQ3VycmVudGx5IHR3byBkaXNwbGF5XG4gICAqIG1vZGVzIGV4aXN0OlxuICAgKiAgZGVmYXVsdCAtIGEgZ3V0dGVyLWxpa2Ugc3BhY2luZyBpcyBwbGFjZWQgYXJvdW5kIGFueSBleHBhbmRlZCBwYW5lbCwgcGxhY2luZyB0aGUgZXhwYW5kZWRcbiAgICogICAgIHBhbmVsIGF0IGEgZGlmZmVyZW50IGVsZXZhdGlvbiBmcm9tIHRoZSByZXNldCBvZiB0aGUgYWNjb3JkaW9uLlxuICAgKiAgZmxhdCAtIG5vIHNwYWNpbmcgaXMgcGxhY2VkIGFyb3VuZCBleHBhbmRlZCBwYW5lbHMsIHNob3dpbmcgYWxsIHBhbmVscyBhdCB0aGUgc2FtZVxuICAgKiAgICAgZWxldmF0aW9uLlxuICAgKi9cbiAgQElucHV0KClcbiAgZGlzcGxheU1vZGU6IE5vdm9BY2NvcmRpb25EaXNwbGF5TW9kZSA9ICdkZWZhdWx0Jztcbn1cbiJdfQ==