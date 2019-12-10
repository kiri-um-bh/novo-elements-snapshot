/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/th-sortable/ThSortable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Directive, EventEmitter, Input, Output } from '@angular/core';
export class ThSortable {
    constructor() {
        this.onSortChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onToggleSort(event) {
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
    }
}
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
if (false) {
    /** @type {?} */
    ThSortable.prototype.config;
    /** @type {?} */
    ThSortable.prototype.column;
    /** @type {?} */
    ThSortable.prototype.onSortChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTb3J0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvdGgtc29ydGFibGUvVGhTb3J0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLE1BQU0sT0FBTyxVQUFVO0lBTnZCO1FBWUUsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQW9CdkQsQ0FBQzs7Ozs7SUFsQkMsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQ2hHLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3hCLEtBQUssS0FBSztvQkFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7b0JBQzFCLE1BQU07Z0JBQ1I7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUN6QixNQUFNO2FBQ1Q7WUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsc0JBQXNCO2lCQUNsQzthQUNGOzs7cUJBRUUsS0FBSyxTQUFDLGdCQUFnQjtxQkFFdEIsS0FBSzsyQkFFTCxNQUFNOzs7O0lBSlAsNEJBQ1k7O0lBQ1osNEJBQ1k7O0lBQ1osa0NBQ3FEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1RoU29ydGFibGVdJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ29uVG9nZ2xlU29ydCgkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGhTb3J0YWJsZSB7XG4gIEBJbnB1dCgnbm92b1RoU29ydGFibGUnKVxuICBjb25maWc6IGFueTtcbiAgQElucHV0KClcbiAgY29sdW1uOiBhbnk7XG4gIEBPdXRwdXQoKVxuICBvblNvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG9uVG9nZ2xlU29ydChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb2x1bW4gJiYgdGhpcy5jb25maWcuc29ydGluZyAhPT0gZmFsc2UgJiYgdGhpcy5jb2x1bW4uc29ydGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5jb2x1bW4uc29ydCkge1xuICAgICAgICBjYXNlICdhc2MnOlxuICAgICAgICAgIHRoaXMuY29sdW1uLnNvcnQgPSAnZGVzYyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5jb2x1bW4uc29ydCA9ICdhc2MnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9uU29ydENoYW5nZS5lbWl0KHRoaXMuY29sdW1uKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==