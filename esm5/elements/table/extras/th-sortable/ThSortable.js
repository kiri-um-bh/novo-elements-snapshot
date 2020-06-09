// NG2
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
var ThSortable = /** @class */ (function () {
    function ThSortable() {
        this.onSortChange = new EventEmitter();
    }
    ThSortable.prototype.onToggleSort = function (event) {
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
    ThSortable.ɵfac = function ThSortable_Factory(t) { return new (t || ThSortable)(); };
    ThSortable.ɵdir = i0.ɵɵdefineDirective({ type: ThSortable, selectors: [["", "novoThSortable", ""]], hostBindings: function ThSortable_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ThSortable_click_HostBindingHandler($event) { return ctx.onToggleSort($event); });
        } }, inputs: { config: ["novoThSortable", "config"], column: "column" }, outputs: { onSortChange: "onSortChange" } });
    return ThSortable;
}());
export { ThSortable };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThSortable, [{
        type: Directive,
        args: [{
                selector: '[novoThSortable]',
                host: {
                    '(click)': 'onToggleSort($event)',
                },
            }]
    }], null, { config: [{
            type: Input,
            args: ['novoThSortable']
        }], column: [{
            type: Input
        }], onSortChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTb3J0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvdGgtc29ydGFibGUvVGhTb3J0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkU7SUFBQTtRQVlFLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7S0FvQnREO0lBbEJDLGlDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtZQUNoRyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUN4QixLQUFLLEtBQUs7b0JBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUMxQixNQUFNO2dCQUNSO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDekIsTUFBTTthQUNUO1lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzt3RUF6QlUsVUFBVTttREFBVixVQUFVO2lHQUFWLHdCQUNOOztxQkFWUDtDQW1DQyxBQWhDRCxJQWdDQztTQTFCWSxVQUFVO2tEQUFWLFVBQVU7Y0FOdEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsc0JBQXNCO2lCQUNsQzthQUNGOztrQkFFRSxLQUFLO21CQUFDLGdCQUFnQjs7a0JBRXRCLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvVGhTb3J0YWJsZV0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnb25Ub2dnbGVTb3J0KCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUaFNvcnRhYmxlIHtcbiAgQElucHV0KCdub3ZvVGhTb3J0YWJsZScpXG4gIGNvbmZpZzogYW55O1xuICBASW5wdXQoKVxuICBjb2x1bW46IGFueTtcbiAgQE91dHB1dCgpXG4gIG9uU29ydENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgb25Ub2dnbGVTb3J0KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbHVtbiAmJiB0aGlzLmNvbmZpZy5zb3J0aW5nICE9PSBmYWxzZSAmJiB0aGlzLmNvbHVtbi5zb3J0aW5nICE9PSBmYWxzZSkge1xuICAgICAgc3dpdGNoICh0aGlzLmNvbHVtbi5zb3J0KSB7XG4gICAgICAgIGNhc2UgJ2FzYyc6XG4gICAgICAgICAgdGhpcy5jb2x1bW4uc29ydCA9ICdkZXNjJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmNvbHVtbi5zb3J0ID0gJ2FzYyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub25Tb3J0Q2hhbmdlLmVtaXQodGhpcy5jb2x1bW4pO1xuICAgIH1cbiAgfVxufVxuIl19