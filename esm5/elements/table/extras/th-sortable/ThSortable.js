/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/th-sortable/ThSortable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Directive, EventEmitter, Input, Output } from '@angular/core';
var ThSortable = /** @class */ (function () {
    function ThSortable() {
        this.onSortChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ThSortable.prototype.onToggleSort = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.preventDefault();
        }
        if (this.config && this.column && this.config.sorting !== false && this.column.sorting !== false) {
            switch (this.column.sort) {
                case 'asc':
                    this.column.sort = 'desc';
                    break;
                default:
                    this.column.sort = 'asc';
                    break;
            }
            this.onSortChange.emit(this.column);
        }
    };
    ThSortable.decorators = [
        { type: Directive, args: [{
                    selector: '[novoThSortable]',
                    host: {
                        '(click)': 'onToggleSort($event)',
                    },
                },] }
    ];
    ThSortable.propDecorators = {
        config: [{ type: Input, args: ['novoThSortable',] }],
        column: [{ type: Input }],
        onSortChange: [{ type: Output }]
    };
    return ThSortable;
}());
export { ThSortable };
if (false) {
    /** @type {?} */
    ThSortable.prototype.config;
    /** @type {?} */
    ThSortable.prototype.column;
    /** @type {?} */
    ThSortable.prototype.onSortChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTb3J0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvdGgtc29ydGFibGUvVGhTb3J0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBQUE7UUFZRSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBb0J2RCxDQUFDOzs7OztJQWxCQyxpQ0FBWTs7OztJQUFaLFVBQWEsS0FBSztRQUNoQixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDaEcsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDeEIsS0FBSyxLQUFLO29CQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztvQkFDMUIsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQ3pCLE1BQU07YUFDVDtZQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSxzQkFBc0I7cUJBQ2xDO2lCQUNGOzs7eUJBRUUsS0FBSyxTQUFDLGdCQUFnQjt5QkFFdEIsS0FBSzsrQkFFTCxNQUFNOztJQXFCVCxpQkFBQztDQUFBLEFBaENELElBZ0NDO1NBMUJZLFVBQVU7OztJQUNyQiw0QkFDWTs7SUFDWiw0QkFDWTs7SUFDWixrQ0FDcUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvVGhTb3J0YWJsZV0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnb25Ub2dnbGVTb3J0KCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUaFNvcnRhYmxlIHtcbiAgQElucHV0KCdub3ZvVGhTb3J0YWJsZScpXG4gIGNvbmZpZzogYW55O1xuICBASW5wdXQoKVxuICBjb2x1bW46IGFueTtcbiAgQE91dHB1dCgpXG4gIG9uU29ydENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgb25Ub2dnbGVTb3J0KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbHVtbiAmJiB0aGlzLmNvbmZpZy5zb3J0aW5nICE9PSBmYWxzZSAmJiB0aGlzLmNvbHVtbi5zb3J0aW5nICE9PSBmYWxzZSkge1xuICAgICAgc3dpdGNoICh0aGlzLmNvbHVtbi5zb3J0KSB7XG4gICAgICAgIGNhc2UgJ2FzYyc6XG4gICAgICAgICAgdGhpcy5jb2x1bW4uc29ydCA9ICdkZXNjJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmNvbHVtbi5zb3J0ID0gJ2FzYyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub25Tb3J0Q2hhbmdlLmVtaXQodGhpcy5jb2x1bW4pO1xuICAgIH1cbiAgfVxufVxuIl19