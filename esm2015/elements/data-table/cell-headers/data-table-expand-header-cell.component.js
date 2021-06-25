import { CdkColumnDef, CdkHeaderCell } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { NovoDataTable } from '../data-table.component';
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
NovoDataTableExpandHeaderCell.decorators = [
    { type: Component, args: [{
                selector: 'novo-data-table-expand-header-cell',
                template: `
    <i class="bhi-next data-table-icon" novo-data-table-expander="true" (click)="expandAll()" [class.expanded]="expanded"></i>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NovoDataTableExpandHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NovoDataTable },
    { type: ChangeDetectorRef }
];
NovoDataTableExpandHeaderCell.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvY2VsbC1oZWFkZXJzL2RhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBVXhELE1BQU0sT0FBTyw2QkFBaUMsU0FBUSxhQUFhO0lBT2pFLFlBQ0UsU0FBdUIsRUFDdkIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWCxTQUEyQixFQUMzQixHQUFzQjtRQUU5QixLQUFLLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSHJCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVnpCLFNBQUksR0FBRyxjQUFjLENBQUM7UUFFdEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQVcvQixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsNkJBQTZCLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDckksUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNCQUFzQixTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3BHLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBWlEsWUFBWTtZQUMyQyxVQUFVO1lBQTBCLFNBQVM7WUFFcEcsYUFBYTtZQUZZLGlCQUFpQjs7O21CQWFoRCxXQUFXLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NvbHVtbkRlZiwgQ2RrSGVhZGVyQ2VsbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGUgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLWV4cGFuZC1oZWFkZXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJiaGktbmV4dCBkYXRhLXRhYmxlLWljb25cIiBub3ZvLWRhdGEtdGFibGUtZXhwYW5kZXI9XCJ0cnVlXCIgKGNsaWNrKT1cImV4cGFuZEFsbCgpXCIgW2NsYXNzLmV4cGFuZGVkXT1cImV4cGFuZGVkXCI+PC9pPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUV4cGFuZEhlYWRlckNlbGw8VD4gZXh0ZW5kcyBDZGtIZWFkZXJDZWxsIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGV4cGFuZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGRhdGFUYWJsZTogTm92b0RhdGFUYWJsZTxUPixcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWV4cGFuZC1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tZXhwYW5kLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsJyk7XG5cbiAgICB0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbiA9IHRoaXMuZGF0YVRhYmxlLnN0YXRlLmV4cGFuZFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5leHBhbmRlZCA9IHRoaXMuZGF0YVRhYmxlLmFsbEN1cnJlbnRSb3dzRXhwYW5kZWQoKTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5leHBhbmRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVRhYmxlLmV4cGFuZFJvd3MoIXRoaXMuZXhwYW5kZWQpO1xuICB9XG59XG4iXX0=