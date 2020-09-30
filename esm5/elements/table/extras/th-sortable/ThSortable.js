/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTb3J0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvdGgtc29ydGFibGUvVGhTb3J0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkU7SUFBQTtRQVlFLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFvQnZELENBQUM7Ozs7O0lBbEJDLGlDQUFZOzs7O0lBQVosVUFBYSxLQUFLO1FBQ2hCLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtZQUNoRyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUN4QixLQUFLLEtBQUs7b0JBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUMxQixNQUFNO2dCQUNSO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDekIsTUFBTTthQUNUO1lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLHNCQUFzQjtxQkFDbEM7aUJBQ0Y7Ozt5QkFFRSxLQUFLLFNBQUMsZ0JBQWdCO3lCQUV0QixLQUFLOytCQUVMLE1BQU07O0lBcUJULGlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0ExQlksVUFBVTs7O0lBQ3JCLDRCQUNZOztJQUNaLDRCQUNZOztJQUNaLGtDQUNxRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9UaFNvcnRhYmxlXScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdvblRvZ2dsZVNvcnQoJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRoU29ydGFibGUge1xuICBASW5wdXQoJ25vdm9UaFNvcnRhYmxlJylcbiAgY29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGNvbHVtbjogYW55O1xuICBAT3V0cHV0KClcbiAgb25Tb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBvblRvZ2dsZVNvcnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29sdW1uICYmIHRoaXMuY29uZmlnLnNvcnRpbmcgIT09IGZhbHNlICYmIHRoaXMuY29sdW1uLnNvcnRpbmcgIT09IGZhbHNlKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuY29sdW1uLnNvcnQpIHtcbiAgICAgICAgY2FzZSAnYXNjJzpcbiAgICAgICAgICB0aGlzLmNvbHVtbi5zb3J0ID0gJ2Rlc2MnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuY29sdW1uLnNvcnQgPSAnYXNjJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGhpcy5vblNvcnRDaGFuZ2UuZW1pdCh0aGlzLmNvbHVtbik7XG4gICAgfVxuICB9XG59XG4iXX0=