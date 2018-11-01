/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ElementRef, Input, Renderer2, HostBinding, Component, ChangeDetectionStrategy, TemplateRef, EventEmitter, } from '@angular/core';
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';
/**
 * @template T
 */
var NovoDataTableCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoDataTableCell, _super);
    function NovoDataTableCell(columnDef, elementRef, renderer) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.role = 'gridcell';
        _this.subscriptions = [];
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-cell');
        return _this;
    }
    /**
     * @return {?}
     */
    NovoDataTableCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.column.cellClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.column.cellClass(this.row));
        }
        this.calculateWidths();
        this.subscriptions.push(this.resized.subscribe(function (column) {
            if (column === _this.column) {
                _this.calculateWidths();
            }
        }));
    };
    /**
     * @return {?}
     */
    NovoDataTableCell.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    /**
     * @return {?}
     */
    NovoDataTableCell.prototype.calculateWidths = /**
     * @return {?}
     */
    function () {
        if (this.column.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.column.width + "px");
        }
    };
    NovoDataTableCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-data-table-cell',
                    template: "\n    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: row, col: column}\"></ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NovoDataTableCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NovoDataTableCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        row: [{ type: Input }],
        template: [{ type: Input }],
        column: [{ type: Input }],
        resized: [{ type: Input }]
    };
    return NovoDataTableCell;
}(CdkCell));
export { NovoDataTableCell };
if (false) {
    /** @type {?} */
    NovoDataTableCell.prototype.role;
    /** @type {?} */
    NovoDataTableCell.prototype.row;
    /** @type {?} */
    NovoDataTableCell.prototype.template;
    /** @type {?} */
    NovoDataTableCell.prototype.column;
    /** @type {?} */
    NovoDataTableCell.prototype.resized;
    /** @type {?} */
    NovoDataTableCell.prototype.subscriptions;
    /** @type {?} */
    NovoDataTableCell.prototype.elementRef;
    /** @type {?} */
    NovoDataTableCell.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2NlbGxzL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCx1QkFBdUIsRUFFdkIsV0FBVyxFQUNYLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBSzNEO0lBTzBDLDZDQUFPO0lBYy9DLDJCQUFZLFNBQXVCLEVBQVUsVUFBc0IsRUFBVSxRQUFtQjtRQUFoRyxZQUNFLGtCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FJN0I7UUFMNEMsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxjQUFRLEdBQVIsUUFBUSxDQUFXO1FBWnpGLFVBQUksR0FBRyxVQUFVLENBQUM7UUFVakIsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBSXpDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxpQkFBZSxTQUFTLENBQUMsb0JBQXNCLENBQUMsQ0FBQztRQUN2SCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsaUJBQWUsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDN0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDLENBQUM7O0lBQ3RFLENBQUM7Ozs7SUFFTSxvQ0FBUTs7O0lBQWY7UUFBQSxpQkFZQztRQVhDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEY7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBMkI7WUFDakQsSUFBSSxNQUFNLEtBQUssS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDMUIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSx1Q0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUEwQjtZQUNwRCxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU8sMkNBQWU7OztJQUF2QjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQUksQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBSSxDQUFDLENBQUM7U0FDMUY7SUFDSCxDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxnSEFFVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OztnQkFYaUIsWUFBWTtnQkFYNUIsVUFBVTtnQkFFVixTQUFTOzs7dUJBc0JSLFdBQVcsU0FBQyxXQUFXO3NCQUd2QixLQUFLOzJCQUVMLEtBQUs7eUJBRUwsS0FBSzswQkFFTCxLQUFLOztJQXNDUix3QkFBQztDQUFBLEFBdkRELENBTzBDLE9BQU8sR0FnRGhEO1NBaERZLGlCQUFpQjs7O0lBQzVCLGlDQUN5Qjs7SUFFekIsZ0NBQ2M7O0lBQ2QscUNBQ2tDOztJQUNsQyxtQ0FDbUM7O0lBQ25DLG9DQUNrRDs7SUFDbEQsMENBQTJDOztJQUVOLHVDQUE4Qjs7SUFBRSxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBIb3N0QmluZGluZyxcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrQ2VsbCwgQ2RrQ29sdW1uRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuaW1wb3J0IHsgSURhdGFUYWJsZUNvbHVtbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IHJvdywgY29sOiBjb2x1bW59XCI+PC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlQ2VsbDxUPiBleHRlbmRzIENka0NlbGwgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnZ3JpZGNlbGwnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3c6IFQ7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPjtcbiAgQElucHV0KClcbiAgcHVibGljIHJlc2l6ZWQ6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ29sdW1uPFQ+PjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLWRhdGEtdGFibGUtY2VsbCcpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi5jZWxsQ2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY29sdW1uLmNlbGxDbGFzcyh0aGlzLnJvdykpO1xuICAgIH1cbiAgICB0aGlzLmNhbGN1bGF0ZVdpZHRocygpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5yZXNpemVkLnN1YnNjcmliZSgoY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4gPT09IHRoaXMuY29sdW1uKSB7XG4gICAgICAgICAgdGhpcy5jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVXaWR0aHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uLndpZHRoKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==