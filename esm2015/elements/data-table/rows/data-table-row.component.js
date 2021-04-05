import { CdkRow, CDK_ROW_TEMPLATE } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
export class NovoDataTableRow extends CdkRow {
    constructor() {
        super(...arguments);
        this.rowClass = 'novo-data-table-row';
        this.role = 'row';
    }
}
NovoDataTableRow.ɵfac = function NovoDataTableRow_Factory(t) { return ɵNovoDataTableRow_BaseFactory(t || NovoDataTableRow); };
NovoDataTableRow.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDataTableRow, selectors: [["novo-data-table-row"]], hostVars: 5, hostBindings: function NovoDataTableRow_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("role", ctx.role)("id", ctx.id)("data-automation-id", ctx.dataAutomationId);
        i0.ɵɵclassMap(ctx.rowClass);
    } }, inputs: { id: "id", dataAutomationId: "dataAutomationId" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function NovoDataTableRow_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
    } }, directives: [i1.CdkCellOutlet], encapsulation: 2, changeDetection: 0 });
const ɵNovoDataTableRow_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoDataTableRow);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableRow, [{
        type: Component,
        args: [{
                selector: 'novo-data-table-row',
                template: CDK_ROW_TEMPLATE,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { rowClass: [{
            type: HostBinding,
            args: ['class']
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], id: [{
            type: HostBinding,
            args: ['attr.id']
        }, {
            type: Input
        }], dataAutomationId: [{
            type: HostBinding,
            args: ['attr.data-automation-id']
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9yb3dzL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPdkYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLE1BQU07SUFMNUM7O1FBT1MsYUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBRWpDLFNBQUksR0FBRyxLQUFLLENBQUM7S0FTckI7O3lHQWJZLGdCQUFnQjtxREFBaEIsZ0JBQWdCOzs7Ozs7NkVBQWhCLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFHUSxRQUFRO2tCQURkLFdBQVc7bUJBQUMsT0FBTztZQUdiLElBQUk7a0JBRFYsV0FBVzttQkFBQyxXQUFXO1lBS3hCLEVBQUU7a0JBRkQsV0FBVzttQkFBQyxTQUFTOztrQkFDckIsS0FBSztZQUtOLGdCQUFnQjtrQkFGZixXQUFXO21CQUFDLHlCQUF5Qjs7a0JBQ3JDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtSb3csIENES19ST1dfVEVNUExBVEUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1yb3cnLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVSb3cgZXh0ZW5kcyBDZGtSb3cge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHVibGljIHJvd0NsYXNzID0gJ25vdm8tZGF0YS10YWJsZS1yb3cnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ3Jvdyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgQElucHV0KClcbiAgaWQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtYXV0b21hdGlvbi1pZCcpXG4gIEBJbnB1dCgpXG4gIGRhdGFBdXRvbWF0aW9uSWQ7XG59XG4iXX0=