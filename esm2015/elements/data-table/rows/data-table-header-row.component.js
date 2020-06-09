import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { CdkHeaderRow, CDK_ROW_TEMPLATE } from '@angular/cdk/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
export class NovoDataTableHeaderRow extends CdkHeaderRow {
    constructor() {
        super(...arguments);
        this.rowClass = 'novo-data-table-header-row';
        this.fixedHeader = false;
        this.role = 'row';
    }
}
NovoDataTableHeaderRow.ɵfac = function NovoDataTableHeaderRow_Factory(t) { return ɵNovoDataTableHeaderRow_BaseFactory(t || NovoDataTableHeaderRow); };
NovoDataTableHeaderRow.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDataTableHeaderRow, selectors: [["novo-data-table-header-row"]], hostVars: 5, hostBindings: function NovoDataTableHeaderRow_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("role", ctx.role);
        i0.ɵɵclassMap(ctx.rowClass);
        i0.ɵɵclassProp("fixed-header", ctx.fixedHeader);
    } }, inputs: { fixedHeader: "fixedHeader" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function NovoDataTableHeaderRow_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
    } }, directives: [i1.CdkCellOutlet], encapsulation: 2, changeDetection: 0 });
const ɵNovoDataTableHeaderRow_BaseFactory = i0.ɵɵgetInheritedFactory(NovoDataTableHeaderRow);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableHeaderRow, [{
        type: Component,
        args: [{
                selector: 'novo-data-table-header-row',
                template: CDK_ROW_TEMPLATE,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { rowClass: [{
            type: HostBinding,
            args: ['class']
        }], fixedHeader: [{
            type: HostBinding,
            args: ['class.fixed-header']
        }, {
            type: Input
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3Jvd3MvZGF0YS10YWJsZS1oZWFkZXItcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFPcEUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFlBQVk7SUFMeEQ7O1FBT1MsYUFBUSxHQUFHLDRCQUE0QixDQUFDO1FBR3hDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLFNBQUksR0FBRyxLQUFLLENBQUM7S0FDckI7OzJIQVJZLHNCQUFzQjsyREFBdEIsc0JBQXNCOzs7Ozs7O3FFQUF0QixzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLFdBQVc7bUJBQUMsT0FBTzs7a0JBRW5CLFdBQVc7bUJBQUMsb0JBQW9COztrQkFDaEMsS0FBSzs7a0JBRUwsV0FBVzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtIZWFkZXJSb3csIENES19ST1dfVEVNUExBVEUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtaGVhZGVyLXJvdycsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUhlYWRlclJvdyBleHRlbmRzIENka0hlYWRlclJvdyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwdWJsaWMgcm93Q2xhc3MgPSAnbm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3cnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkLWhlYWRlcicpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaXhlZEhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ3Jvdyc7XG59XG4iXX0=