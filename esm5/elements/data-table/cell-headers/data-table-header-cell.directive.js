import { __extends } from "tslib";
import { Directive, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';
import { CdkHeaderCell, CdkColumnDef } from '@angular/cdk/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
var NovoDataTableHeaderCell = /** @class */ (function (_super) {
    __extends(NovoDataTableHeaderCell, _super);
    function NovoDataTableHeaderCell(columnDef, elementRef, renderer) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.role = 'columnheader';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-column-header-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-header-cell');
        return _this;
    }
    NovoDataTableHeaderCell.prototype.ngOnInit = function () {
        if (this.column.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.column.width + "px");
        }
    };
    NovoDataTableHeaderCell.ɵfac = function NovoDataTableHeaderCell_Factory(t) { return new (t || NovoDataTableHeaderCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    NovoDataTableHeaderCell.ɵdir = i0.ɵɵdefineDirective({ type: NovoDataTableHeaderCell, selectors: [["novo-data-table-header-cell"]], hostVars: 1, hostBindings: function NovoDataTableHeaderCell_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
        } }, inputs: { column: "column" }, features: [i0.ɵɵInheritDefinitionFeature] });
    return NovoDataTableHeaderCell;
}(CdkHeaderCell));
export { NovoDataTableHeaderCell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableHeaderCell, [{
        type: Directive,
        args: [{
                selector: 'novo-data-table-header-cell',
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }], column: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUlqRTtJQUdnRCwyQ0FBYTtJQU8zRCxpQ0FBWSxTQUF1QixFQUFVLFVBQXNCLEVBQVUsUUFBbUI7UUFBaEcsWUFDRSxrQkFBTSxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBSTdCO1FBTDRDLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUx6RixVQUFJLEdBQUcsY0FBYyxDQUFDO1FBTzNCLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSx3QkFBc0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDOUgsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGlCQUFlLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQzdGLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDOztJQUM3RSxDQUFDO0lBRU0sMENBQVEsR0FBZjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQUksQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBSSxDQUFDLENBQUM7U0FDMUY7SUFDSCxDQUFDO2tHQXBCVSx1QkFBdUI7Z0VBQXZCLHVCQUF1Qjs7O2tDQVJwQztDQTZCQyxBQXhCRCxDQUdnRCxhQUFhLEdBcUI1RDtTQXJCWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7a0JBRUUsV0FBVzttQkFBQyxXQUFXOztrQkFHdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrSGVhZGVyQ2VsbCwgQ2RrQ29sdW1uRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuaW1wb3J0IHsgSURhdGFUYWJsZUNvbHVtbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtaGVhZGVyLWNlbGwnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlSGVhZGVyQ2VsbDxUPiBleHRlbmRzIENka0hlYWRlckNlbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tZGF0YS10YWJsZS1oZWFkZXItY2VsbCcpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi53aWR0aCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgfVxuICB9XG59XG4iXX0=