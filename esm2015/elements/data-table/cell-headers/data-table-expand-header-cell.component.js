import { CdkColumnDef, CdkHeaderCell } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { NovoDataTable } from '../data-table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "../data-table.component";
export class NovoDataTableExpandHeaderCell extends CdkHeaderCell {
    constructor(columnDef, elementRef, renderer, dataTable, ref) {
        super(columnDef, elementRef);
        this.dataTable = dataTable;
        this.ref = ref;
        this.role = 'columnheader';
        this.expanded = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-expand-column-header-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-expand-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-expand-header-cell');
        this.expandSubscription = this.dataTable.state.expandSource.subscribe(() => {
            this.expanded = this.dataTable.allCurrentRowsExpanded();
            this.ref.markForCheck();
        });
    }
    ngOnDestroy() {
        if (this.expandSubscription) {
            this.expandSubscription.unsubscribe();
        }
    }
    expandAll() {
        this.dataTable.expandRows(!this.expanded);
    }
}
NovoDataTableExpandHeaderCell.ɵfac = function NovoDataTableExpandHeaderCell_Factory(t) { return new (t || NovoDataTableExpandHeaderCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.NovoDataTable), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoDataTableExpandHeaderCell.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDataTableExpandHeaderCell, selectors: [["novo-data-table-expand-header-cell"]], hostVars: 1, hostBindings: function NovoDataTableExpandHeaderCell_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("role", ctx.role);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 2, consts: [["novo-data-table-expander", "true", 1, "bhi-next", "data-table-icon", 3, "click"]], template: function NovoDataTableExpandHeaderCell_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "i", 0);
        i0.ɵɵlistener("click", function NovoDataTableExpandHeaderCell_Template_i_click_0_listener() { return ctx.expandAll(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("expanded", ctx.expanded);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableExpandHeaderCell, [{
        type: Component,
        args: [{
                selector: 'novo-data-table-expand-header-cell',
                template: `
    <i class="bhi-next data-table-icon" novo-data-table-expander="true" (click)="expandAll()" [class.expanded]="expanded"></i>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i2.NovoDataTable }, { type: i0.ChangeDetectorRef }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvY2VsbC1oZWFkZXJzL2RhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBVXhELE1BQU0sT0FBTyw2QkFBaUMsU0FBUSxhQUFhO0lBT2pFLFlBQ0UsU0FBdUIsRUFDdkIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWCxTQUEyQixFQUMzQixHQUFzQjtRQUU5QixLQUFLLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSHJCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVnpCLFNBQUksR0FBRyxjQUFjLENBQUM7UUFFdEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQVcvQixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsNkJBQTZCLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDckksUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNCQUFzQixTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3BHLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDOzswR0FqQ1UsNkJBQTZCO2tFQUE3Qiw2QkFBNkI7OztRQUp0Qyw0QkFBMEg7UUFBdEQscUdBQVMsZUFBVyxJQUFDO1FBQTZCLGlCQUFJOztRQUFoQyx3Q0FBMkI7O2tEQUk1Ryw2QkFBNkI7Y0FQekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsV0FBVzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ29sdW1uRGVmLCBDZGtIZWFkZXJDZWxsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZSB9IGZyb20gJy4uL2RhdGEtdGFibGUuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBjbGFzcz1cImJoaS1uZXh0IGRhdGEtdGFibGUtaWNvblwiIG5vdm8tZGF0YS10YWJsZS1leHBhbmRlcj1cInRydWVcIiAoY2xpY2spPVwiZXhwYW5kQWxsKClcIiBbY2xhc3MuZXhwYW5kZWRdPVwiZXhwYW5kZWRcIj48L2k+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlRXhwYW5kSGVhZGVyQ2VsbDxUPiBleHRlbmRzIENka0hlYWRlckNlbGwgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgZXhwYW5kU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZGF0YVRhYmxlOiBOb3ZvRGF0YVRhYmxlPFQ+LFxuICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tZXhwYW5kLWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1leHBhbmQtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGwnKTtcblxuICAgIHRoaXMuZXhwYW5kU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRhVGFibGUuc3RhdGUuZXhwYW5kU291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5kYXRhVGFibGUuYWxsQ3VycmVudFJvd3NFeHBhbmRlZCgpO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXhwYW5kU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhVGFibGUuZXhwYW5kUm93cyghdGhpcy5leHBhbmRlZCk7XG4gIH1cbn1cbiJdfQ==